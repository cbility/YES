
import SmartSuiteAPIHandler from "../../../SmartSuite/dist/SmartSuiteAPIHandler";

//code written using https://www.legislation.gov.uk/uksi/2018/611/regulation/68 as a guide

interface Certificate {
    sb9e5dc509: string; //RHI Number
    se66113863: string; //Issue Year
    s1a8dbb84a: number; //power efficiency
    sba500cb3c: number; //most recent certificate power efficiency
    s93bf2643c: number; //Threshold Power Efficiency
}

interface TariffRate {
    title: string;
    s84fdd2f08: number; //rate
    sdec426b7e: { //active period
        from_date: {
            date: string;
            include_time: boolean
        }
        to_date: {
            date: string;
            include_time: boolean
        };
    };
    s4c7204412: string; //RHIs list
    sdff54fe85: string; //tier
}

interface Input {
    smartSuiteAPIKey: string;
    RHI: { id: string; title: string }[][][];
    quarterStart: string;
    submissionEnd: string;
    supportService: { id: string }[];
    submissionMonth: number;
    tierCutoff: number;
    EHO: number;
    portalPayment: number;
    qualifyingPercentage: number;
}
export default async function estimateCHPPayment(input: Input) {
    const errorLogs: { message: string }[] = [];

    function wait(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const SS = new SmartSuiteAPIHandler("s5ch1upc",
        input.smartSuiteAPIKey
    );

    const RHINumber = input.RHI[0][0][0].title;
    const RHIId = input.RHI[0][0][0].id;
    const quarterStartDate = new Date(input.quarterStart);
    const periodEndDate = new Date(input.submissionEnd);

    const RHIRecord = (await SS.getRecordsByFieldValues(
        "64d155a9c71c81dc0b41d52d", //RHIs table
        "sdada683b2", /*id field*/
        [RHIId]
    ))[0];


    ///////////////////////Power Efficiencies/////////////////////

    const CHPQAYear1: string = String(+input.quarterStart.slice(5, 7) < 8 ? +input.quarterStart.slice(0, 4) - 1 : +input.quarterStart.slice(0, 4));
    const CHPQAYear2: string = String(+CHPQAYear1 + 1);
    const CHPQACertificates: Certificate[] = await SS.getRecordsByFieldValues("66bb81bf4af274d6cc56b6cd", //CHPQA Certificates table
        "sb9e5dc509", //RHI Number field
        [RHINumber]
    ) as unknown as Certificate[];
    if (CHPQACertificates.length === 0) throw new Error("No CHPQA certificates found for " + RHINumber);
    //find power efficiency from CHPQA certificates issued in calendar year of 1 Aug - 31 Jul regulation period start
    let powerEfficiency1 = CHPQACertificates.find(certificate => certificate.se66113863 === CHPQAYear1)?.s1a8dbb84a;
    let powerEfficiency2 = CHPQACertificates.find(certificate => certificate.se66113863 === CHPQAYear2)?.s1a8dbb84a;

    //find number of days of reporting period in each 1 Aug - 31 Jul period
    const CHPQASwitchoverDate = new Date(CHPQAYear2 + "-08-01"); //first day of second regulation period

    const { period1Days: regulationPeriod1Days, period2Days: regulationPeriod2Days } = splitPeriod(quarterStartDate, CHPQASwitchoverDate, periodEndDate);

    //warn for missing certificates
    if (regulationPeriod1Days > 0 && powerEfficiency1 === undefined) {
        errorLogs.push({
            message: "No CHPQA certificate issued in " + CHPQAYear1 + " found. " + regulationPeriod1Days +
                " days of this quarter are in the " + CHPQAYear1 + " CHPQA period. Continuing using most recently issued certificate."
        });
        powerEfficiency1 = CHPQACertificates[0].sba500cb3c;
    }
    if (regulationPeriod2Days > 0 && powerEfficiency2 === undefined) {
        errorLogs.push({
            message: "No CHPQA certificate issued in " + CHPQAYear2 + " found. " + regulationPeriod2Days +
                " days of this quarter are in the " + CHPQAYear2 + " CHPQA period. Continuing using most recently issued certificate."
        });
        powerEfficiency1 = CHPQACertificates[0].sba500cb3c;
    }
    const effectivePowerEfficiency = (regulationPeriod1Days * (powerEfficiency1 ?? 0) +
        regulationPeriod2Days * (powerEfficiency2 ?? 0)) /
        (regulationPeriod1Days + regulationPeriod2Days);

    const powerEfficiencyDivisor = CHPQACertificates[0].s93bf2643c //threshold Power Efficiency listed on CHPQA certificate

    ///////////////////////Tariffs///////////////////////
    const tariffs: TariffRate[] = await SS.filterRecords("66b678784843a142ccb22f7c", //RHI Tariff Rates table
        {
            field: "s4c7204412", //RHI Numbers field
            value: RHINumber,
            comparison: "contains" as "contains",
        }
    ) as unknown as TariffRate[];

    if (tariffs.length === 0) throw new Error("No RHI Tariffs found for " + RHINumber);

    //get cumulative EHO for RHI year
    const cumulativeEHO = ((await SS.filterRecords(
        "64d155a9c71c81dc0b41d53d", //RHI Submission table
        [
            {
                field: "se2f80df74", //Support Service
                comparison: "has_all_of",
                value: [input.supportService[0].id],
            },
            {
                field: "sf2w0izs", //submission month
                comparison: "is_greater_than",
                value: 12 * Math.floor((+input.submissionMonth - 1) / 12), //submission month number preceding start of current RHI year
            },
            {
                field: "sf2w0izs", //submission month
                comparison: "is_less_than", //don't include current submission
                value: +input.submissionMonth,
            },
            {
                field: "sa1f6e9381", //quarter end?
                comparison: "is",
                value: true, //only include quarter ends
            }
        ]
    )) as unknown as { s09e01e672: string, title: string }[]).map((submission: { s09e01e672: string, title: string }) => {
        if (submission.s09e01e672 === null) throw new Error("Submission " + submission.title + " contains no EHO. Please enter the EHO.")
        return +submission.s09e01e672 /*EHO*/
    }).reduce((accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
    }, 0);

    //calculate fraction of EHO payable on tier one
    const fractionOnTierOne = (input.tierCutoff * 1000 /*conversion to kWh*/ - cumulativeEHO) / input.EHO > 1 ?
        1 :
        (input.tierCutoff * 1000 /*conversion to kWh*/ - cumulativeEHO) / input.EHO < 0 ?
            0 :
            (input.tierCutoff * 1000 /*conversion to kWh*/ - cumulativeEHO) / input.EHO;

    //find different tariff rate groups effective over quarter
    const tariffGroup1 = tariffs.filter(
        tariff => new Date(tariff.sdec426b7e.from_date.date) <= new Date(input.quarterStart) &&
            new Date(tariff.sdec426b7e.to_date.date) >= new Date(input.quarterStart)
    );
    const tariffGroup2 = tariffs.filter(
        tariff => new Date(tariff.sdec426b7e.from_date.date) <= new Date(input.submissionEnd) &&
            new Date(tariff.sdec426b7e.to_date.date) >= new Date(input.submissionEnd)
    );

    let effectiveTariff1: number;
    let effectiveTariff2: number;

    if (tariffGroup1[0]?.sdff54fe85 === "comy1") { //if tier N/A
        effectiveTariff1 = tariffGroup1[0].s84fdd2f08; /*rate*/
        effectiveTariff2 = tariffGroup2[0].s84fdd2f08; /*rate*/
    } else {
        //calculate effective tariffs taking tiers into account
        //throw error if missing tier 1 or tier 2 

        //return {tariffGroup1, tariffGroup2}

        for (let i = 0; i <= 1; i++) { //max two tariffs apply in quarter
            if ((tariffGroup1[i]?.sdff54fe85 !== "qp5vW" && tariffGroup1[i]?.sdff54fe85 !== "mIjQd")) {
                throw new Error("Invalid Tariff Rate found: tariff " + tariffGroup1[0]?.title + "; Rate: " + tariffGroup1[i]?.sdff54fe85);
            }
            if ((tariffGroup2[i]?.sdff54fe85 !== "qp5vW" && tariffGroup2[i]?.sdff54fe85 !== "mIjQd")) {
                throw new Error("Invalid Tariff Rate found: tariff " + tariffGroup2[0]?.title + "; Rate: " + tariffGroup2[i]?.sdff54fe85);
            }
        }
        effectiveTariff1 = fractionOnTierOne * (
            tariffGroup1.find((tariff) => tariff.sdff54fe85 /*tier*/ === "qp5vW" /*tier 1*/)?.s84fdd2f08 /*rate*/
        )! +
            (1 - fractionOnTierOne) * (
                tariffGroup1.find(tariff => tariff.sdff54fe85 /*tier*/ === "mIjQd" /*tier 2*/)?.s84fdd2f08 /*rate*/
            )!;

        effectiveTariff2 = fractionOnTierOne * (
            tariffGroup2.find((tariff) => tariff.sdff54fe85 /*tier*/ === "qp5vW" /*tier 1*/)?.s84fdd2f08 /*rate*/
        )! +
            (1 - fractionOnTierOne) * (
                tariffGroup2.find((tariff) => tariff.sdff54fe85 /*tier*/ === "mIjQd" /*tier 2*/)?.s84fdd2f08 /*rate*/
            )!;

    }

    const tariffSwitchoverDate = new Date(input.submissionEnd.slice(0, 4) + "-04-01"); //first day of second tariff period

    const { period1Days: tariffPeriod1Days, period2Days: tariffPeriod2Days } = splitPeriod(quarterStartDate, tariffSwitchoverDate, periodEndDate);

    if (!effectiveTariff1 && !effectiveTariff2) throw new Error("No RHI tariffs found for this period for " + RHINumber);

    //warn for missing tariffs
    if (tariffPeriod1Days > 0 && effectiveTariff1 === undefined) {
        throw new Error("No RHI tariff active on " + quarterStartDate + " found. " + tariffPeriod1Days +
            " days of this quarter are in the period covered by this tariff.");
    }
    if (tariffPeriod2Days > 0 && effectiveTariff2 === undefined) {
        throw new Error("No RHI tariff active on " + periodEndDate + " found. " + tariffPeriod2Days +
            " days of this quarter are in the period covered by this tariff.");
    }

    //if either tariff missing replace with the other one
    if (!effectiveTariff1) effectiveTariff1 = effectiveTariff2;
    if (!effectiveTariff2) effectiveTariff2 = effectiveTariff1;

    if (!effectiveTariff1 || !effectiveTariff2) throw new Error("Tariff not found.")

    const effectiveBiomassTariff = (tariffPeriod1Days * effectiveTariff1 +
        tariffPeriod2Days * effectiveTariff2) /
        (tariffPeriod1Days + tariffPeriod2Days);

    //A is the periodic support payment calculated in accordance with regulation 66 or 67 in respect of the heat generated using solid biomass in the CHP system which meets the requirements of regulation 13;
    const A = input.portalPayment * 100 //convert from £ to pence

    //subject to paragraph (3), B is the figure, expressed as a decimal, derived from multiplying the power efficiency of the CHP system by 10;

    const B = (effectivePowerEfficiency / powerEfficiencyDivisor)

    //C is the tariff, determined in accordance with regulation 59, that would apply if the CHP system ceased to be certified under CHPQA;
    const C = effectiveBiomassTariff;

    //D is the kWhth of heat generated using solid biomass in the CHP system which meets the requirements of regulation 13, calculated in accordance with regulation 66(2)(b) or 67(2)(b);
    const D = input.EHO * input.qualifyingPercentage / 100;

    const result = ((A * B) + ((1 - B) * (C * D))) / 100; //convert from pence to £

    const CHPTariffFraction = effectivePowerEfficiency / powerEfficiencyDivisor;
    const effectiveCHPTariff = 100 * input.portalPayment / input.EHO; //gives CHP tariff used by portal
    //return { result, effectiveTariff: effectiveBiomassTariff * (1 - CHPTariffFraction) + effectiveCHPTariff * CHPTariffFraction, tierOnePercentage: fractionOnTierOne * 100, effectivePowerEfficiency, CHPTariffPercentage: CHPTariffFraction * 100, errorLogs };


    ///////////////HELPER FUNCTIONS //////////////

    function splitPeriod(periodStartDate: Date, splitDateDate: Date, periodEndDate: Date): { period1Days: number, period2Days: number } {
        const periodStart = periodStartDate.getTime();
        const splitDate = splitDateDate.getTime();
        const periodEnd = periodEndDate.getTime();

        if (splitDate < periodStart) {
            // If splitDate is before the periodStart, all days go to period2
            return { period1Days: 0, period2Days: Math.floor((periodEnd - periodStart) / (1000 * 60 * 60 * 24)) + 1 };
        } else if (splitDate > periodEnd) {
            // If splitDate is after the periodEnd, all days go to period1
            return { period1Days: Math.floor((periodEnd - periodStart) / (1000 * 60 * 60 * 24)) + 1, period2Days: 0 };
        } else {
            // Normal case where splitDate is within the period
            const period1Days = Math.floor((splitDate - periodStart) / (1000 * 60 * 60 * 24));
            const period2Days = Math.floor((periodEnd - splitDate) / (1000 * 60 * 60 * 24)) + 1;
            return { period1Days: period1Days, period2Days: period2Days };
        }
    }

}

//USAGE: return await estimateCHPPayment(input);

