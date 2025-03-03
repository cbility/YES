import SmartSuiteAPIHandler from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js";
import tables from "../../../SmartSuite/dist/tables.js"
import type { RecordFromTableID } from "../../../SmartSuite/dist/SmartSuiteAPIHandler.js";

const { projectsTable, metricsTable, opportunitiesTable, tasksTable, supportServicesTable } = tables;

const MS_IN_ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

export default async function metrics(input: { APIKey: string; }) {

    try {

        const METRIC_JUNCTION_RECORD_ID = "66e9a6d8c19d62365bd0f8ee" //id of metrics junction linked to all records and used for rollups

        type MetricsKey = typeof metricsTable.structure[keyof typeof metricsTable.structure]['slug'];
        const now = new Date();
        const ss = new SmartSuiteAPIHandler("s5ch1upc", input.APIKey as string);

        //get records
        const projects = await ss.getAllRecords("64f6098f4f57d448c30044ed");
        const opportunities = await ss.getAllRecords("6500787202fb914f79f202e8");
        const tasks = await ss.filterRecords("64f6098f4f57d448c3004519", [{
            field: tasksTable.structure["Status"].slug,
            comparison: "is_not",
            value: "Complete"
        },
        {
            field: tasksTable.structure["First Created"].slug,
            comparison: "is_on_or_after",
            value: {
                "date_mode": "one_week_ago",
                "date_mode_value": ""
            }
        }],
            "or");

        const supportServices = await ss.filterRecords(supportServicesTable.id, {
            field: supportServicesTable.structure["Status"].slug,
            comparison: "is_not",
            value: "Left Service"
        });

        //get assignees
        const projectsAssignees = projects.map(project => (project[projectsTable.structure["Project Lead"].slug] as string[])).flat();
        const opportunityAssignees = opportunities.map(opp => (opp[opportunitiesTable.structure["Lead"].slug]) as string[]).flat();
        const taskAssignees = tasks.map(task => (task[tasksTable.structure["Task Lead"].slug] as string[])).flat();
        const serviceAssignees = supportServices.map(service => (service[supportServicesTable.structure["Manager"].slug] as string[])).flat();

        const assigneesSet = new Set([...projectsAssignees, ...opportunityAssignees, ...taskAssignees, ...serviceAssignees]);

        //calculate metrics

        const metricRecords: Omit<Update<RecordFromTableID<typeof metricsTable.id>>, "id">[] = Array.from(assigneesSet).map(assignee => ({
            [metricsTable.structure["Assigned To"].slug]: assignee,
            [metricsTable.structure["Date"].slug]: now.toISOString().slice(0, 10) //get date only
        })); // metric records with assignee and date in place

        metricRecords.forEach((metricRecord, index) => {
            metricRecords[index][metricsTable.structure["Metrics Junction"].slug] = METRIC_JUNCTION_RECORD_ID;

            metricRecords[index][metricsTable.structure["Total Live Projects"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value === "in_progress" //slug for "Live"
            ).length; //Total live projects

            metricRecords[index][metricsTable.structure["Total Incomplete Projects"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value !== "complete" && //slug for "Complete" 
                    (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value !== "BwP9n" //slug for "Dead Lead" 
            ).length; //Total incomplete projects

            metricRecords[index][metricsTable.structure["Live Projects With Regulator"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value === "in_progress" && //slug for "Live"
                    (project[projectsTable.structure["Action"].slug] as StatusFieldCell).value === "otKNF" //slug for Waiting on Regulator
            ).length; //Total live projects with regulator

            metricRecords[index][metricsTable.structure["New Projects (past week)"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    new Date((project[projectsTable.structure["Project Created"].slug] as FirstCreatedFieldCell).on).getTime() >= now.getTime() - MS_IN_ONE_WEEK
            ).length; //New projects (past week)

            metricRecords[index][metricsTable.structure["Projects Submitted (past week)"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    new Date((project[projectsTable.structure["Project Submitted"].slug] as DateFieldCell).date).getTime() >= now.getTime() - MS_IN_ONE_WEEK
            ).length; //Projects Submitted (past week)

            metricRecords[index][metricsTable.structure["Total Live Woodsure Projects"].slug] = projects.filter(
                project => {
                    const wds = (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[][])[0];
                    const wds1 = (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[][])[0]?.includes("WDS");
                    const wds2 = (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[][])[0]?.[0];
                    const wds3 = (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[][])[0]?.[0] == "WDS";

                    return (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                        (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value === "in_progress" &&//slug for "Live"
                        (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[])[0]?.[0] === "WDS"
                }).length; //Total live Woodsure projects

            metricRecords[index][metricsTable.structure["Live Woodsure Projects with YES"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value === "in_progress" && //slug for "Live"
                    (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[])[0]?.[0] === "WDS" &&
                    (project[projectsTable.structure["Action"].slug] as StatusFieldCell).value === "ready_for_review" // slug for "With YES"
            ).length; //Live Woodsure projects with YES

            metricRecords[index][metricsTable.structure["Total Live Amendment Projects"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value === "in_progress" && //slug for "Live"
                    (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[])[0]?.[0] === "AMD"
            ).length; //Total live Amendment projects

            metricRecords[index][metricsTable.structure["Live Amendment Projects with YES"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value === "in_progress" && //slug for "Live"
                    (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[])[0]?.[0] === "AMD" &&
                    (project[projectsTable.structure["Action"].slug] as StatusFieldCell).value === "ready_for_review"  // slug for "With YES"
            ).length; //Total live Amendment projects with YES

            metricRecords[index][metricsTable.structure["Total Live FMS Projects"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value === "in_progress" && //slug for "Live"
                    (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[])[0]?.[0] === "FMS"
            ).length; //Total live FMS projects

            metricRecords[index][metricsTable.structure["Live FMS Projects with YES"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value === "in_progress" && //slug for "Live"
                    (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[])[0]?.[0] === "FMS" &&
                    (project[projectsTable.structure["Action"].slug] as StatusFieldCell).value === "ready_for_review" // slug for "With YES"
            ).length; //Total live FMS projects with YES

            metricRecords[index][metricsTable.structure["Live ASA Projects with YES"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    project[projectsTable.structure["Status"].slug] === "Live" &&
                    (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[])[0]?.[0] === "ASA" &&
                    (project[projectsTable.structure["Action"].slug] as StatusFieldCell).value === "ready_for_review" // slug for "With YES"
            ).length; //Total live ASA projects with YES

            metricRecords[index][metricsTable.structure["Total Live ASA Projects"].slug] = projects.filter(
                project => (project[projectsTable.structure["Project Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (project[projectsTable.structure["Status"].slug] as StatusFieldCell).value === "in_progress" && // slug for "Live"
                    (project[projectsTable.structure["Job Type Code (System Field)"].slug] as string[])[0]?.[0] === "ASA"
            ).length; //Total live ASA projects

            //quoting
            metricRecords[index][metricsTable.structure["Total Opportunities Quoted"].slug] = opportunities.filter(
                opp => (opp[opportunitiesTable.structure["Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (opp[opportunitiesTable.structure["Status"].slug] as StatusFieldCell).value !== "backlog" // slug for "Scoping"
            ).length; //Total opportunities quoted

            metricRecords[index][metricsTable.structure["Total Opportunities Converted"].slug] = opportunities.filter(
                opp => (opp[opportunitiesTable.structure["Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (opp[opportunitiesTable.structure["Status"].slug] as StatusFieldCell).value === "ready_for_review" // slug for "Closed - Won"
            ).length; //Total opportunities converted

            //tasks
            metricRecords[index][metricsTable.structure["Total Live Tasks"].slug] = tasks.filter(
                task => (task[tasksTable.structure["Task Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (task[tasksTable.structure["Status"].slug] as StatusFieldCell).value !== "complete").length; //total live tasks

            metricRecords[index][metricsTable.structure["New Tasks (Past Week)"].slug] = tasks.filter(
                task => (task[tasksTable.structure["Task Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (new Date((task[tasksTable.structure["First Created"].slug] as FirstCreatedFieldCell).on)).getTime() >= now.getTime() - MS_IN_ONE_WEEK
            ).length; //New Tasks (past week)

            metricRecords[index][metricsTable.structure["Total Live Hard Deadlines"].slug] = tasks.filter(
                task => (task[tasksTable.structure["Task Lead"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (task[tasksTable.structure["Hard Due Date"].slug] as DueDateFieldCell).to_date.date != null &&
                    (task[tasksTable.structure["Status"].slug] as StatusFieldCell).value !== "complete").length; //Total live hard deadlines

            //support service
            metricRecords[index][metricsTable.structure["Total RHI Support Services"].slug] = supportServices.filter(
                service => (service[supportServicesTable.structure["Manager"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string)
            ).length; //Total live support services

            metricRecords[index][metricsTable.structure["Support Services Window Open"].slug] = supportServices.filter(
                service => (service[supportServicesTable.structure["Manager"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    service[supportServicesTable.structure["RHI Window Open"].slug] === true
            ).length; //RHI Window Open

            metricRecords[index][metricsTable.structure["Support Services Window Open Soon"].slug] = supportServices.filter(
                service => (service[supportServicesTable.structure["Manager"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    service[supportServicesTable.structure["RHI Window Open Within 2 Weeks"].slug] === true
            ).length; //RHI Window Open within 2 weeks

            metricRecords[index][metricsTable.structure["Data Issue Services"].slug] = supportServices.filter(
                service => (service[supportServicesTable.structure["Manager"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (service[supportServicesTable.structure["Data Issue Submissions"].slug] as unknown[])?.length > 0
            ).length; //Data Issue services

            metricRecords[index][metricsTable.structure["Open Comment Services"].slug] = supportServices.filter(
                service => (service[supportServicesTable.structure["Manager"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (service[supportServicesTable.structure["Open Comments"].slug] as number) > 0
            ).length; //Open Comment Services

            metricRecords[index][metricsTable.structure["Services Awaiting Submission"].slug] = supportServices.filter(
                service => (service[supportServicesTable.structure["Manager"].slug] as string[]).includes(metricRecord[metricsTable.structure["Assigned To"].slug] as string) &&
                    (service[supportServicesTable.structure["Submission Due?"].slug] as string) === "Quarter Due"
            ).length; //Sites awaiting submission

        });

        //add records to metrics table
        await ss.bulkAddNewRecords(metricsTable.id, metricRecords);
    } catch (err) {
        //return stack trace with errors
        throw new Error((err as Error) + ": " + (err as Error).stack);
    }
}

//USAGE: return await metrics(input);
