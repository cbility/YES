export const invoicesTable = {
    "name": "Invoices & Payments",
    "id": "64f592e6ad303253e811e6eb",
    "structure": {
        "Invoice Title": {
            "slug": "title",
            "field_type": "recordtitlefield"
        },
        "Followed by": {
            "slug": "followed_by",
            "field_type": "userfield"
        },
        "Due Date": {
            "slug": "invoice_date",
            "field_type": "duedatefield"
        },
        "Payment Received": {
            "slug": "s0149bec4c",
            "field_type": "formulafield"
        },
        "Auto Number": {
            "slug": "autonumber",
            "field_type": "autonumberfield"
        },
        "First Created": {
            "slug": "first_created",
            "field_type": "firstcreatedfield"
        },
        "Last Updated": {
            "slug": "last_updated",
            "field_type": "lastupdatedfield"
        },
        "Open Comments": {
            "slug": "comments_count",
            "field_type": "commentscountfield"
        },
        "Status (Writeable) (System Field)": {
            "slug": "scc4967fd8",
            "field_type": "statusfield"
        },
        "Last Chase": {
            "slug": "sb997b3bee",
            "field_type": "datefield"
        },
        "QuickFile Invoice": {
            "slug": "s664807954",
            "field_type": "buttonfield"
        },
        "QuickFile Invoice ID": {
            "slug": "s5a94565b4",
            "field_type": "textfield"
        },
        "SDP Invoice Items": {
            "slug": "sq3fyg9q",
            "field_type": "linkedrecordfield"
        },
        "Multiple Clients Selected?": {
            "slug": "scd8fb276f",
            "field_type": "formulafield"
        },
        "Invoice Amount": {
            "slug": "sa5d29448f",
            "field_type": "formulafield"
        },
        "ISO Invoice Date": {
            "slug": "s5a31eef7b",
            "field_type": "formulafield"
        },
        "Payment Outstanding": {
            "slug": "s88d2f2ded",
            "field_type": "currencyfield"
        },
        "Create Invoice": {
            "slug": "s86a059d2a",
            "field_type": "buttonfield"
        },
        "Record ID": {
            "slug": "sf2ed8cdda",
            "field_type": "recordidfield"
        },
        "Client": {
            "slug": "s35f27759c",
            "field_type": "linkedrecordfield"
        },
        "Invoice Type": {
            "slug": "s266f24a7c",
            "field_type": "singleselectfield"
        },
        "SDP and Recurring Items Selected?": {
            "slug": "s11c5aa27f",
            "field_type": "formulafield"
        },
        "Status ID (System Field)": {
            "slug": "sc0d4932b4",
            "field_type": "formulafield"
        },
        "Update Invoice": {
            "slug": "sfur41as",
            "field_type": "buttonfield"
        },
        "Invoice Dispute Status": {
            "slug": "s5q77rrl",
            "field_type": "statusfield"
        },
        "Sent": {
            "slug": "sf29742ed4",
            "field_type": "datefield"
        },
        "Invoice Status": {
            "slug": "sde1bc3b2d",
            "field_type": "formulafield"
        },
        "QuickFile Invoice Status (System Field)": {
            "slug": "s842ec563c",
            "field_type": "singleselectfield"
        },
        "Assigned To": {
            "slug": "s3f9425db1",
            "field_type": "userfield"
        },
        "All Payment Received": {
            "slug": "sd3b7e33e8",
            "field_type": "datefield"
        },
        "Issue Date": {
            "slug": "s0afd3d892",
            "field_type": "datefield"
        },
        "Client Selection Mismatch": {
            "slug": "s981b3b376",
            "field_type": "formulafield"
        },
        "Service Invoice Template": {
            "slug": "sl2vv0k0",
            "field_type": "linkedrecordfield"
        },
        "Invoice QuickFile Client ID": {
            "slug": "s6560816b4",
            "field_type": "textfield"
        },
        "QuickFile Client ID": {
            "slug": "sc4d3ad90a",
            "field_type": "lookupfield"
        }
    }
} as const;

export const opportunitiesTable = {
    "name": "Opportunities",
    "id": "6500787202fb914f79f202e8",
    "structure": {
        "Title": {
            "slug": "title",
            "field_type": "recordtitlefield"
        },
        "Lead": {
            "slug": "assigned_to",
            "field_type": "userfield"
        },
        "Status": {
            "slug": "status",
            "field_type": "statusfield"
        },
        "First Created": {
            "slug": "first_created",
            "field_type": "firstcreatedfield"
        },
        "Last Updated": {
            "slug": "last_updated",
            "field_type": "lastupdatedfield"
        },
        "Followed by": {
            "slug": "followed_by",
            "field_type": "userfield"
        },
        "Open Comments": {
            "slug": "comments_count",
            "field_type": "commentscountfield"
        },
        "Auto Number": {
            "slug": "autonumber",
            "field_type": "autonumberfield"
        },
        "Client": {
            "slug": "s943fed992",
            "field_type": "linkedrecordfield"
        },
        "Job Sub-Types": {
            "slug": "s313513ac7",
            "field_type": "linkedrecordfield"
        },
        "Internal Description": {
            "slug": "sb0f4d472c",
            "field_type": "textareafield"
        },
        "Quote Items": {
            "slug": "skzk108c",
            "field_type": "linkedrecordfield"
        },
        "Record ID (System Field)": {
            "slug": "sfbc0d7f20",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Job Types": {
            "slug": "s9c5e03207",
            "field_type": "linkedrecordfield"
        },
        "Client QuickFile ID": {
            "slug": "sdd5286b17",
            "field_type": "lookupfield",
            "target_field_type": "textfield"
        },
        "QuickFile Quote ID": {
            "slug": "s805e34706",
            "field_type": "textfield"
        },
        "QuickFile Quote Name": {
            "slug": "s30b207278",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Additional Payment Terms Text (System Field)": {
            "slug": "s4a1180fee",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Drafted Service Terms ID": {
            "slug": "sabf332a68",
            "field_type": "textfield"
        },
        "Source": {
            "slug": "s4c0a7c6cb",
            "field_type": "singleselectfield"
        },
        "Estimated Income": {
            "slug": "s4a275c046",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Reason opportunity lost?": {
            "slug": "s424882fb8",
            "field_type": "singleselectfield"
        },
        "Quote Last Sent OLD": {
            "slug": "s8db9abc90",
            "field_type": "formulafield",
            "target_field_type": "datefield"
        },
        "Last Contacted": {
            "slug": "se4651b6df",
            "field_type": "datefield"
        },
        "Quote Declined (System Field)": {
            "slug": "s5030b613b",
            "field_type": "yesnofield"
        },
        "Active Linked Projects": {
            "slug": "s27d6f265d",
            "field_type": "lookupfield",
            "target_field_type": "recordtitlefield"
        },
        "Link to Management Projects": {
            "slug": "ssragwig",
            "field_type": "linkedrecordfield"
        },
        "Project in Process?": {
            "slug": "sf6646f33c",
            "field_type": "yesnofield"
        },
        "Billing Address (System Field)": {
            "slug": "s8250030bf",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Client Country ISO (System Field)": {
            "slug": "s20eedab43",
            "field_type": "lookupfield",
            "target_field_type": "formulafield"
        },
        "Job Type Codes (System Field)": {
            "slug": "s027f2d477",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Create QuickFile Quote": {
            "slug": "sop7d023",
            "field_type": "buttonfield"
        },
        "QuickFile Quote": {
            "slug": "s2744d4b1e",
            "field_type": "buttonfield"
        },
        "Last Action": {
            "slug": "s88a9f8223",
            "field_type": "formulafield",
            "target_field_type": "datefield"
        },
        "Client set up in QuickFile": {
            "slug": "s2b732454e",
            "field_type": "formulafield",
            "target_field_type": "yesnofield"
        },
        "Installation": {
            "slug": "sf19e980bb",
            "field_type": "linkedrecordfield"
        },
        "Quote Items Valid": {
            "slug": "sa7ab60ac9",
            "field_type": "lookupfield",
            "target_field_type": "duedatefield"
        },
        "Quote Item QuickFile IDs (System Field)": {
            "slug": "s8ca47ce1c",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "RHI": {
            "slug": "s85c209b3d",
            "field_type": "lookupfield",
            "target_field_type": "linkedrecordfield"
        },
        "Link to Tasks": {
            "slug": "s03ad5d677",
            "field_type": "linkedrecordfield"
        },
        "Installation Lookup": {
            "slug": "s140cbd677",
            "field_type": "lookupfield",
            "target_field_type": "recordtitlefield"
        },
        "Unique Non Deleted Quote IDs": {
            "slug": "s902a49c1c",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Default Payment Terms": {
            "slug": "s709a8c2eb",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Discount": {
            "slug": "s96948fa76",
            "field_type": "percentfield"
        },
        "Quote Issue and Expiry": {
            "slug": "s067bf3530",
            "field_type": "duedatefield"
        },
        "Quote Last Sent": {
            "slug": "sc1e2c0556",
            "field_type": "datefield"
        },
        "Response Received": {
            "slug": "s871f5d6c9",
            "field_type": "datefield"
        },
        "Old Update QuickFile Quote": {
            "slug": "siq98t44",
            "field_type": "buttonfield"
        },
        "Set Job Types (System Field)": {
            "slug": "sm15svik",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Term Days (System Field)": {
            "slug": "s284f31895",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Quote Hourly Rate": {
            "slug": "se188db37d",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Minimum Hours": {
            "slug": "s9fcc3b743",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Customer Quote Link": {
            "slug": "s041a953ab",
            "field_type": "linkfield"
        },
        "Invoice Number": {
            "slug": "se347a6af4",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Update QuickFile Quote": {
            "slug": "sw17e7kf",
            "field_type": "buttonfield"
        },
        "Old Create QuickFile Quote": {
            "slug": "sciy9t31",
            "field_type": "buttonfield"
        },
        "View Service Terms": {
            "slug": "se350f1f32",
            "field_type": "buttonfield"
        },
        "QuickFile Status": {
            "slug": "s32a14e9bb",
            "field_type": "textfield"
        },
        "Total QuickFile Quote Price": {
            "slug": "s9417c1a41",
            "field_type": "currencyfield"
        }
    }
} as const

export const quoteItemsTable = {
    "name": "Quote Items",
    "id": "650168ce39fcf6ca2940a6fe",
    "structure": {
        "Quote Item Name": {
            "slug": "title",
            "field_type": "recordtitlefield"
        },
        "Legacy Status": {
            "slug": "status",
            "field_type": "statusfield"
        },
        "First Created": {
            "slug": "first_created",
            "field_type": "firstcreatedfield"
        },
        "Last Updated": {
            "slug": "last_updated",
            "field_type": "lastupdatedfield"
        },
        "Followed by": {
            "slug": "followed_by",
            "field_type": "userfield"
        },
        "Open Comments": {
            "slug": "comments_count",
            "field_type": "commentscountfield"
        },
        "Auto Number": {
            "slug": "autonumber",
            "field_type": "autonumberfield"
        },
        "Job Sub-Type": {
            "slug": "sc949a50f6",
            "field_type": "linkedrecordfield"
        },
        "Legacy Quote Sent Date": {
            "slug": "s217809efc",
            "field_type": "datefield"
        },
        "Legacy Quote Accepted Date": {
            "slug": "sc016de3ca",
            "field_type": "datefield"
        },
        "Name Formula (System Field)": {
            "slug": "sa7b19abe9",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Opportunity": {
            "slug": "sbf9458ebe",
            "field_type": "linkedrecordfield"
        },
        "Job Type Text (System Field)": {
            "slug": "sc647ed2c3",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Record ID (System Field)": {
            "slug": "s6c2a26789",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Charged Hourly?": {
            "slug": "sd9c921c76",
            "field_type": "yesnofield"
        },
        "Custom Price": {
            "slug": "sea2a31ee9",
            "field_type": "currencyfield"
        },
        "Price": {
            "slug": "s9640ecb64",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Job Code (System Field)": {
            "slug": "sd9c00d85f",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Line Item Description": {
            "slug": "s30f4806c7",
            "field_type": "textareafield"
        },
        "Opportunity ID (System Field)": {
            "slug": "sc65b92095",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Quote Sent": {
            "slug": "s5fdf14c9f",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "In Opportunity": {
            "slug": "s9f6ab85c5",
            "field_type": "formulafield",
            "target_field_type": "yesnofield"
        },
        "Not sent and in Opportunity": {
            "slug": "s7a5606e60",
            "field_type": "formulafield",
            "target_field_type": "yesnofield"
        },
        "Linked Projects": {
            "slug": "s8ae4bmj",
            "field_type": "linkedrecordfield"
        },
        "QuickFile Quote ID": {
            "slug": "sb782c2f07",
            "field_type": "textfield"
        },
        "Quantity": {
            "slug": "s20b2ac406",
            "field_type": "numberfield"
        },
        "Includes Travel": {
            "slug": "scca9b3e53",
            "field_type": "lookupfield",
            "target_field_type": "yesnofield"
        },
        "Service Terms": {
            "slug": "s8e2914f3d",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Position on Quote": {
            "slug": "sca1e1e984",
            "field_type": "numberfield"
        },
        "Quickfile Quote Name (System Field)": {
            "slug": "secfbf283a",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "QuickFile Quote": {
            "slug": "s7f98d6f4e",
            "field_type": "buttonfield"
        },
        "Sent and not accepted": {
            "slug": "s6e4a23362",
            "field_type": "formulafield",
            "target_field_type": "yesnofield"
        },
        "Status is not Declined or Expired": {
            "slug": "sf61adfafa",
            "field_type": "formulafield",
            "target_field_type": "yesnofield"
        },
        "Link to Management Projects": {
            "slug": "sceijfhd",
            "field_type": "linkedrecordfield"
        },
        "Job Sub-Type Text (System Field)": {
            "slug": "see124bc52",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Legacy Quote Valid Dates": {
            "slug": "se3e9eb5fa",
            "field_type": "duedatefield"
        },
        "Assigned to (System Field)": {
            "slug": "s9db9b7507",
            "field_type": "lookupfield",
            "target_field_type": "userfield"
        },
        "Sub Type Autonumber": {
            "slug": "s5f064af81",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Legacy Sent To (Emails)": {
            "slug": "sea2dc71ed",
            "field_type": "textfield"
        },
        "Legacy Discount": {
            "slug": "s7d2a25ddd",
            "field_type": "percentfield"
        },
        "Client": {
            "slug": "s95ff0c392",
            "field_type": "lookupfield",
            "target_field_type": "linkedrecordfield"
        },
        "Installation (System Field)": {
            "slug": "s569b88c93",
            "field_type": "lookupfield",
            "target_field_type": "recordtitlefield"
        },
        "Opportunity Description": {
            "slug": "s6d6f58d02",
            "field_type": "lookupfield",
            "target_field_type": "textareafield"
        },
        "Delivery": {
            "slug": "sc6d3c3532",
            "field_type": "lookupfield",
            "target_field_type": "linkedrecordfield"
        },
        "Link to Support Services": {
            "slug": "szhxcchw",
            "field_type": "linkedrecordfield"
        },
        "Opportunity Status": {
            "slug": "s2761dae0a",
            "field_type": "lookupfield",
            "target_field_type": "statusfield"
        },
        "Total Quoted Price": {
            "slug": "sc86ea09bb",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Project Generated": {
            "slug": "s12ffd1659",
            "field_type": "lookupfield",
            "target_field_type": "singleselectfield"
        },
        "Linked Projects Lookup": {
            "slug": "s5f5d0899c",
            "field_type": "lookupfield",
            "target_field_type": "recordtitlefield"
        },
        "Quoted Price": {
            "slug": "sd4adbca96",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Discount": {
            "slug": "s5965dc855",
            "field_type": "lookupfield",
            "target_field_type": "percentfield"
        },
        "Default Service Terms": {
            "slug": "s70ae6a06d",
            "field_type": "formulafield",
            "target_field_type": "textareafield"
        }
    }
} as const;

//TODO: update RHI tables to include field type and target field type
export const loginsTable = {
    id: "65e37da7f8428f036fd99785", fields: {
        Username: "title",
        "First Created": "first_created",
        "Last Updated": "last_updated",
        "Followed by": "followed_by",
        "Open Comments": "comments_count",
        "Auto Number": "autonumber",
        Password: "sb4e5173b6",
        "Record ID (System Field)": "s949848d7e",
        "Password Correct": "s300305bbd",
        "🔽Comments🔽": "sf444dc534",
        "Login Type": "s362676897",
        Account: "s69317bdee",
        "RHI Record IDs (System Field)": "sdf91c49ec"
    }
} as const;
export const accountsTable = {
    id: "64d155a9c71c81dc0b41d527", fields: {
        "Account Name": "title",
        "First Created": "first_created",
        "Last Updated": "last_updated",
        "Followed by": "followed_by",
        "Open Comments": "comments_count",
        "Auto Number": "autonumber",
        "ORG number": "s20a1cb3b6",
        Client: "sbf79625b1",
        RHIs: "skjrn9vl",
        "Additional Users": "s9b3c22274",
        "Record ID (System Field)": "sa91f18b97",
        "🔽Comments🔽": "sf444dc534",
        "Link to RHI Payments": "suf1q9sl",
        "AS Username": "s200891b35",
        "AS Password": "s716517628",
        Logins: "splq0phf",
        Count: "sb7e3ff7d9",
        "Account Address": "s906ceac06",
        "Company Phone": "s898c7779e",
        "Company Number": "sa82805803",
        "AS Name": "s5af20d21e",
        "AS Email": "s27463de03",
        "AS Job Title": "s94016b86e",
        "Remittance Email": "se00b833bd"
    }
}; //TODO: add "as const" and refactor SS type system
export const RHIsTable = {
    id: "64d155a9c71c81dc0b41d52d", fields: {
        "RHI Number": "title",
        "Submission Status": "status",
        "First Created": "first_created",
        "Last Updated": "last_updated",
        "Followed by": "followed_by",
        "Open Comments": "comments_count",
        "Auto Number": "autonumber",
        "Accreditation Date": "s2e1875a9c",
        "QHLF (kWh)": "s788a692be",
        "RHI Account": "s366a5e476",
        Tags: "sed8818474",
        "Link to Fuel References": "svtw43sc",
        "RHI Installation Name": "s8f22568aa",
        Technology: "s4285e945a",
        Installation: "sj4xhegu",
        "Accreditation Status": "sf81a2f775",
        "Correctly Formatted RHI number (System Field)": "s305f616e7",
        "Application Submitted": "sb79716244",
        "Site Owner": "s0e7865f12",
        "Application Status": "saktmxc5",
        "Update Data": "sc402e67f5",
        "Thermal Capacity": "sd1c8007fa",
        "Record ID (System Field)": "sdada683b2",
        "Last Submitted": "s7a7a2ede6",
        "🔽Branch Comments🔽 (System Field)": "s9eacd797b",
        "🔼Branch Comments🔼 (System Field)": "s8e3e7b53c",
        "Link to RHI Submissions": "swox1akz",
        "🔼Comments🔼": "s21374e2f1",
        "🔽Comments🔽": "s74450684c",
        "Document Review": "sbc3cf68a7",
        "Link to Tasks": "s7uib8r9",
        "Name Plate Efficiency": "s4037fc899",
        "Sustainability Reporting": "s7a8a4d943",
        "Commissioning Date": "s594437604",
        "Number of boilers": "s030c8748d",
        "Boiler Manufacturer": "s42d018586",
        "Boiler Model": "s94038cbea",
        HH110: "sa112061bc",
        HH120: "s21e98e9b5",
        "Hot Water Meters": "sb249dfefd",
        "Steam Meters": "s76ea8502f",
        Location: "sb5c903c06",
        HK120: "s49e310a4c",
        "Last Submission": "s3ea6ec8f7",
        "RHI Start": "s1179e8b96",
        "Quarter ends": "s418ae4140",
        "AS Username": "sf8e7d9233",
        "AS Password": "sb28891359",
        "Latest Submitted PDS": "s3ea6ec8f7",
        "First Reading on Account": "s6jzhsk8",
        "Coefficient of Performance (COP)": "sbe757d43c",
        "Seasonal Performance Factor (SPF)": "sceb80d3b9",
    }
} as const;

export const projectsTable = {
    "name": "Projects",
    "id": "64f6098f4f57d448c30044ed",
    "structure": {
        "Project Name": {
            "slug": "title",
            "field_type": "recordtitlefield"
        },
        "Followed by": {
            "slug": "followed_by",
            "field_type": "userfield"
        },
        "Auto Number": {
            "slug": "autonumber",
            "field_type": "autonumberfield"
        },
        "Project Created": {
            "slug": "first_created",
            "field_type": "firstcreatedfield"
        },
        "Last Updated": {
            "slug": "last_updated",
            "field_type": "lastupdatedfield"
        },
        "Open Comments": {
            "slug": "comments_count",
            "field_type": "commentscountfield"
        },
        "Status": {
            "slug": "s88e7dacd4",
            "field_type": "statusfield"
        },
        "Client": {
            "slug": "sf828da6c0",
            "field_type": "linkedrecordfield"
        },
        "Job Type Code (System Field)": {
            "slug": "s89e3b91f6",
            "field_type": "lookupfield",
            "target_field_type": "formulafield"
        },
        "Project Overview Old": {
            "slug": "s3a4f706df",
            "field_type": "richtextareafield"
        },
        "Job Sub-Type": {
            "slug": "sf3d820a7f",
            "field_type": "linkedrecordfield"
        },
        "Project Folder Code": {
            "slug": "sa91201eb9",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Link to Problems": {
            "slug": "s4velkzw",
            "field_type": "linkedrecordfield"
        },
        "Legacy Project Code": {
            "slug": "s2c5e7d743",
            "field_type": "textfield"
        },
        "Legacy Job folder link": {
            "slug": "saf746c70c",
            "field_type": "textfield"
        },
        "Local Job Folder": {
            "slug": "sgf23n2h",
            "field_type": "buttonfield"
        },
        "Total Chargeable Time Tracked": {
            "slug": "s4c8be909d",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Outstanding Payment": {
            "slug": "s587106504",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Total Non-chargeable Time Tracked": {
            "slug": "sc234dd494",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "% Tasks Complete": {
            "slug": "sf49e099cb",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Current Time Cost": {
            "slug": "s89b4fbcfd",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Next Task Due": {
            "slug": "s5c076a520",
            "field_type": "formulafield",
            "target_field_type": "datefield"
        },
        "Record ID (System Field)": {
            "slug": "sb26ad886b",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Legacy Project Price": {
            "slug": "s288856269",
            "field_type": "textfield"
        },
        "Initial Email Template": {
            "slug": "s92ff8890a",
            "field_type": "lookupfield"
        },
        "Follow-up Email Template": {
            "slug": "sbdaf83537",
            "field_type": "lookupfield"
        },
        "Late invoices": {
            "slug": "s6a9d62800",
            "field_type": "lookupfield"
        },
        "Quote": {
            "slug": "sf78c857f5",
            "field_type": "linkedrecordfield"
        },
        "Milestone": {
            "slug": "s6ea69296a",
            "field_type": "statusfield"
        },
        "Project Lead": {
            "slug": "s32c34a296",
            "field_type": "userfield"
        },
        "Project Name (System Field)": {
            "slug": "s910e48bd5",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Internal Project Name": {
            "slug": "s5438714b9",
            "field_type": "textfield"
        },
        "(old) Last Communication": {
            "slug": "sfda00eb96",
            "field_type": "datefield"
        },
        "Action": {
            "slug": "saf903f71f",
            "field_type": "statusfield"
        },
        "Linked Travel Form": {
            "slug": "sjt3naco",
            "field_type": "linkedrecordfield"
        },
        "Escalate to Management?": {
            "slug": "s37d5796df",
            "field_type": "yesnofield"
        },
        "Management Notes": {
            "slug": "s25bd47b47",
            "field_type": "textfield"
        },
        "Milestone (from tasks)": {
            "slug": "s0519bfc9b",
            "field_type": "formulafield",
            "target_field_type": "statusfield"
        },
        "Used Templates": {
            "slug": "s19958832a",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "RHI": {
            "slug": "s93fbb49b6",
            "field_type": "linkedrecordfield"
        },
        "RO Generator": {
            "slug": "sebc175246",
            "field_type": "linkedrecordfield"
        },
        "Project Contacts": {
            "slug": "s4318eac37",
            "field_type": "linkedrecordfield"
        },
        "RHI Login ID": {
            "slug": "sc61d5ce25",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Installation (from quote)": {
            "slug": "s56a14741d",
            "field_type": "lookupfield",
            "target_field_type": "recordtitlefield"
        },
        "Dropbox folder location": {
            "slug": "s87d0ba68f",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Installation Name": {
            "slug": "s54883f798",
            "field_type": "lookupfield",
            "target_field_type": "textfield"
        },
        "Legacy installation name": {
            "slug": "s404d19180",
            "field_type": "textfield"
        },
        "Old Account": {
            "slug": "sc9cf8960f",
            "field_type": "linkedrecordfield"
        },
        "New Account": {
            "slug": "szula6z0",
            "field_type": "linkedrecordfield"
        },
        "Legacy Who Is Paying?": {
            "slug": "s856626e67",
            "field_type": "textfield"
        },
        "RHI logins": {
            "slug": "sd1ede30da",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Local Explorer Link": {
            "slug": "sdbf9f5fe9",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Tinyurl link": {
            "slug": "s9d718cf7b",
            "field_type": "textfield"
        },
        "Blocking RHI Submissions": {
            "slug": "s458f3e77d",
            "field_type": "formulafield",
            "target_field_type": "yesnofield"
        },
        "Link to Management Projects": {
            "slug": "sf14641692",
            "field_type": "linkedrecordfield"
        },
        "RHI Accreditation Status": {
            "slug": "s2b384891b",
            "field_type": "lookupfield",
            "target_field_type": "singleselectfield"
        },
        "RHI Application Status": {
            "slug": "s1ea8e9f8f",
            "field_type": "lookupfield",
            "target_field_type": "singleselectfield"
        },
        "Client and Contact Emails": {
            "slug": "s2b05571aa",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "NEW Project Contacts": {
            "slug": "sme7amif",
            "field_type": "linkedrecordfield"
        },
        "Project Updates": {
            "slug": "s9yfvzw4",
            "field_type": "linkedrecordfield"
        },
        "Project Overview": {
            "slug": "sbgryirq",
            "field_type": "textareafield"
        },
        "Expected Income": {
            "slug": "s33683d8c7",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Accreditation Status": {
            "slug": "s48b51e4fd",
            "field_type": "lookupfield",
            "target_field_type": "singleselectfield"
        },
        "Link to Invoice Items": {
            "slug": "shbqnk8c",
            "field_type": "linkedrecordfield"
        },
        "Client Lookup": {
            "slug": "sb240034c4",
            "field_type": "lookupfield",
            "target_field_type": "recordtitlefield"
        },
        "Travel Price": {
            "slug": "s2573db4e7",
            "field_type": "lookupfield",
            "target_field_type": "formulafield"
        },
        "Link to High Priority Clients": {
            "slug": "srud0crw",
            "field_type": "linkedrecordfield"
        },
        "Work Started": {
            "slug": "s7c844a190",
            "field_type": "datefield"
        },
        "Project Submitted": {
            "slug": "sea91dab79",
            "field_type": "datefield"
        },
        "Contains Outdated Values": {
            "slug": "sc9c81e63a",
            "field_type": "yesnofield"
        },
        "Client ID": {
            "slug": "sf6b62d819",
            "field_type": "lookupfield",
            "target_field_type": "formulafield"
        },
        "RO Logins TBC": {
            "slug": "s4ee12c375",
            "field_type": "textfield"
        },
        "Project Tasks": {
            "slug": "s6c9e47694",
            "field_type": "linkedrecordfield"
        },
        "RO Logins": {
            "slug": "swompkpv",
            "field_type": "formulafield"
        },
        "Days to Complete": {
            "slug": "s641cb7901",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Project Installation Type": {
            "slug": "s129da1cd0",
            "field_type": "singleselectfield"
        },
        "Installation": {
            "slug": "sbe56543a8",
            "field_type": "linkedrecordfield"
        },
        "Link to Action Changes": {
            "slug": "sfanh85l",
            "field_type": "linkedrecordfield"
        },
        "Latest Update": {
            "slug": "s7a61cfe51",
            "field_type": "formulafield",
            "target_field_type": "datefield"
        },
        "RHI Username": {
            "slug": "sf3c39acca",
            "field_type": "formulafield",
            "target_field_type": "recordtitlefield"
        },
        "RHI Password": {
            "slug": "s7f7e353c7",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Woodsure Number": {
            "slug": "s030a5e628",
            "field_type": "linkedrecordfield"
        },
        "Link to Site visit form": {
            "slug": "sgf2rra6",
            "field_type": "linkedrecordfield"
        },
        "Opportunity": {
            "slug": "s1f118fe1e",
            "field_type": "lookupfield",
            "target_field_type": "recordtitlefield"
        },
        "Legacy Project Status": {
            "slug": "s87b8d29b4",
            "field_type": "formulafield",
            "target_field_type": "statusfield"
        },
        "Project Information Filled": {
            "slug": "s98d31d9ff",
            "field_type": "formulafield",
            "target_field_type": "yesnofield"
        },
        "Project Billing Type": {
            "slug": "s6e57702da",
            "field_type": "singleselectfield"
        },
        "Project Billing Type (System Field)": {
            "slug": "s46f535e7e",
            "field_type": "formulafield",
            "target_field_type": "singleselectfield"
        },
        "Update Preview Lookup": {
            "slug": "sc377aee26",
            "field_type": "lookupfield",
            "target_field_type": "formulafield"
        },
        "Status Last Modified": {
            "slug": "stj1gojo",
            "field_type": "formulafield",
            "target_field_type": "datefield"
        },
        "Months Old": {
            "slug": "s9fdfcdb12",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Recent Changes from YES to Regulator": {
            "slug": "s872549cd5",
            "field_type": "countfield"
        },
        "Legacy Information Filled": {
            "slug": "s360500173",
            "field_type": "formulafield",
            "target_field_type": "yesnofield"
        },
        "Link to Program Management": {
            "slug": "s6mpqkva",
            "field_type": "linkedrecordfield"
        },
        "Link to Applications and Amendments": {
            "slug": "smc5227b",
            "field_type": "linkedrecordfield"
        },
        "Active Support Service Manager": {
            "slug": "sd06c97ab6",
            "field_type": "lookupfield",
            "target_field_type": "userfield"
        },
        "Active Support Service": {
            "slug": "sumt1fi5",
            "field_type": "lookupfield",
            "target_field_type": "recordtitlefield"
        }
    }
} as const

export const metricsTable = {
    "name": "Staff Member Metrics",
    "id": "66cdf0118258a1e146782909",
    "structure": {
        "Title": {
            "slug": "title",
            "field_type": "recordtitlefield"
        },
        "First Created": {
            "slug": "first_created",
            "field_type": "firstcreatedfield"
        },
        "Last Updated": {
            "slug": "last_updated",
            "field_type": "lastupdatedfield"
        },
        "Followed by": {
            "slug": "followed_by",
            "field_type": "userfield"
        },
        "Open Comments": {
            "slug": "comments_count",
            "field_type": "commentscountfield"
        },
        "Auto Number": {
            "slug": "autonumber",
            "field_type": "autonumberfield"
        },
        "Staff Member": {
            "slug": "sc5135d496",
            "field_type": "linkedrecordfield"
        },
        "Total Jobs Quoted": {
            "slug": "s06830d4c5",
            "field_type": "numberfield"
        },
        "Total Quotes Converted": {
            "slug": "s205f19177",
            "field_type": "numberfield"
        },
        "Total Live Projects": {
            "slug": "s6ce5dcadc",
            "field_type": "numberfield"
        },
        "Live Amendment Projects with YES": {
            "slug": "s8cf5965c6",
            "field_type": "numberfield"
        },
        "Total Live Amendment Projects": {
            "slug": "sdb8924599",
            "field_type": "numberfield"
        },
        "Total Live ASA Projects": {
            "slug": "s656725ec6",
            "field_type": "numberfield"
        },
        "Total Live Woodsure Projects": {
            "slug": "s986dfc96a",
            "field_type": "numberfield"
        },
        "Live Woodsure Projects with YES": {
            "slug": "sdf823d88c",
            "field_type": "numberfield"
        },
        "Total Live FMS Projects": {
            "slug": "s94a282082",
            "field_type": "numberfield"
        },
        "Live FMS Projects with YES": {
            "slug": "sb0365e197",
            "field_type": "numberfield"
        },
        "Projects Submitted (past week)": {
            "slug": "sa247625ab",
            "field_type": "numberfield"
        },
        "New Projects (past week)": {
            "slug": "s0e1d18857",
            "field_type": "numberfield"
        },
        "Live Projects With Regulator": {
            "slug": "sf500b4fef",
            "field_type": "numberfield"
        },
        "Live ASA Projects with YES": {
            "slug": "s71b2b7e0a",
            "field_type": "numberfield"
        },
        "Total Live Tasks": {
            "slug": "s528564e04",
            "field_type": "numberfield"
        },
        "Total Live Hard Deadlines": {
            "slug": "s693329b18",
            "field_type": "numberfield"
        },
        "Total Overdue Invoices": {
            "slug": "s5d4f88abf",
            "field_type": "numberfield"
        },
        "Total Unsent Invoice Items": {
            "slug": "s85873af2f",
            "field_type": "numberfield"
        },
        "Date": {
            "slug": "s7e63a9fa6",
            "field_type": "datefield"
        },
        "Text": {
            "slug": "s08y5olb",
            "field_type": "textfield"
        },
        "Assigned To": {
            "slug": "se9205aa11",
            "field_type": "userfield"
        }
    }
} as const

export const tasksTable = {
    "name": "Tasks",
    "id": "64f6098f4f57d448c3004519",
    "structure": {
        "Title": {
            "slug": "title",
            "field_type": "recordtitlefield"
        },
        "First Created": {
            "slug": "first_created",
            "field_type": "firstcreatedfield"
        },
        "Last Updated": {
            "slug": "last_updated",
            "field_type": "lastupdatedfield"
        },
        "Followed by": {
            "slug": "followed_by",
            "field_type": "userfield"
        },
        "Open Comments": {
            "slug": "comments_count",
            "field_type": "commentscountfield"
        },
        "Auto Number": {
            "slug": "autonumber",
            "field_type": "autonumberfield"
        },
        "Subtasks": {
            "slug": "sa5fbbd37c",
            "field_type": "checklistfield"
        },
        "Status": {
            "slug": "s4237122ae",
            "field_type": "statusfield"
        },
        "Hard Due Date": {
            "slug": "s2b170d112",
            "field_type": "duedatefield"
        },
        "Due Date Grouping (System Field)": {
            "slug": "se4120b568",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Estimated Due Date": {
            "slug": "s6f94d48c2",
            "field_type": "duedatefield"
        },
        "Site": {
            "slug": "s8c9e4d2ca",
            "field_type": "linkedrecordfield"
        },
        "Installation Name": {
            "slug": "s0a57bdc74",
            "field_type": "linkedrecordfield"
        },
        "Task Detail": {
            "slug": "s5f143ae1a",
            "field_type": "richtextareafield"
        },
        "Client": {
            "slug": "sf16928c0a",
            "field_type": "linkedrecordfield"
        },
        "Due Date (Soonest)": {
            "slug": "s99be6c0bc",
            "field_type": "formulafield",
            "target_field_type": "datefield"
        },
        "Time Cost (Timesheets)": {
            "slug": "sa6ab3edfc",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Timesheet Entries": {
            "slug": "sirtahsi",
            "field_type": "linkedrecordfield"
        },
        "Task": {
            "slug": "sf07e8dbb2",
            "field_type": "textfield"
        },
        "Task Lead": {
            "slug": "szm6g7jn",
            "field_type": "userfield"
        },
        "Total Time Tracked (Timesheets)": {
            "slug": "s9999c6832",
            "field_type": "formulafield",
            "target_field_type": "numberfield"
        },
        "Time Spent on task": {
            "slug": "s6572689e8",
            "field_type": "timetrackingfield"
        },
        "Track time?": {
            "slug": "s4d116c931",
            "field_type": "singleselectfield"
        },
        "Record ID (System Field)": {
            "slug": "s23c37cbe1",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Attachment": {
            "slug": "s822c1d881",
            "field_type": "filefield"
        },
        "Task Template Details (System Field)": {
            "slug": "s6772c3254",
            "field_type": "linkedrecordfield"
        },
        "Attachment (View Only)": {
            "slug": "s9e6732f09",
            "field_type": "lookupfield",
            "target_field_type": "filefield"
        },
        "Link to Management Projects": {
            "slug": "s3jf8yz0",
            "field_type": "linkedrecordfield"
        },
        "Deadline List Flag": {
            "slug": "s4624b61be",
            "field_type": "yesnofield"
        },
        "Choose title": {
            "slug": "sc9d8e8aaa",
            "field_type": "multipleselectfield"
        },
        "RHI Number": {
            "slug": "s9bb4ebba9",
            "field_type": "linkedrecordfield"
        },
        "RO Generator": {
            "slug": "s3c762620d",
            "field_type": "linkedrecordfield"
        },
        "Estimated Due Date (Form Field)": {
            "slug": "s925af62dd",
            "field_type": "datefield"
        },
        "Hard Due Date (Form Field)": {
            "slug": "s10mz10j",
            "field_type": "datefield"
        },
        "Task Name (System Field)": {
            "slug": "s1ef201c6a",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Extra Information": {
            "slug": "s6d76ae0ab",
            "field_type": "textfield"
        },
        "Date Complete": {
            "slug": "s8f98aece6",
            "field_type": "datefield"
        },
        "Type of task": {
            "slug": "s675d904d4",
            "field_type": "singleselectfield"
        },
        "Contact": {
            "slug": "s3227287b0",
            "field_type": "linkedrecordfield"
        },
        "Included on Deadline List (System Field)": {
            "slug": "sd195c52e9",
            "field_type": "formulafield",
            "target_field_type": "yesnofield"
        },
        "Due Date is internal (system field)": {
            "slug": "s59088446c",
            "field_type": "formulafield",
            "target_field_type": "yesnofield"
        },
        "Hard Due Date (Read Only)": {
            "slug": "sc9a6592c2",
            "field_type": "formulafield",
            "target_field_type": "duedatefield"
        },
        "Estimated Due Date (Read Only)": {
            "slug": "s678084c13",
            "field_type": "formulafield",
            "target_field_type": "duedatefield"
        },
        "Milestone": {
            "slug": "s9a9e811c8",
            "field_type": "statusfield"
        },
        "Earliest task milestone": {
            "slug": "s245d42100",
            "field_type": "formulafield",
            "target_field_type": "statusfield"
        },
        "Timeline view due date (System Field)": {
            "slug": "s218a49cc0",
            "field_type": "datefield"
        },
        "Job sub-type": {
            "slug": "s89f23add2",
            "field_type": "linkedrecordfield"
        },
        "Link to Opportunities": {
            "slug": "s6djdsxn",
            "field_type": "linkedrecordfield"
        },
        "Status Group": {
            "slug": "s42a7bf1f6",
            "field_type": "formulafield",
            "target_field_type": "textfield"
        },
        "Link to Meetings": {
            "slug": "s29ngt25",
            "field_type": "linkedrecordfield"
        },
        "Problem": {
            "slug": "sl5ht9rm",
            "field_type": "linkedrecordfield"
        },
        "Urgency": {
            "slug": "s2a62827d6",
            "field_type": "statusfield"
        },
        "Improvement": {
            "slug": "ss7wyh0e",
            "field_type": "linkedrecordfield"
        },
        "Link to High Priority Clients": {
            "slug": "swg759pz",
            "field_type": "linkedrecordfield"
        },
        "Project": {
            "slug": "s20vbooq",
            "field_type": "linkedrecordfield"
        },
        "Updates from Project": {
            "slug": "s3ol0zty",
            "field_type": "lookupfield",
            "target_field_type": "formulafield"
        },
        "Support Service": {
            "slug": "s0ab4lre",
            "field_type": "linkedrecordfield"
        },
        "RHI Status Updates": {
            "slug": "s0vvhlo3",
            "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard": {
            "slug": "she4mkx1",
            "field_type": "linkedrecordfield"
        },
        "Link to Gregor Dashboard": {
            "slug": "sapvmw6r",
            "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 1": {
            "slug": "sdsq3yrs",
            "field_type": "linkedrecordfield"
        },
        "Link to Trudy Dashboard 1": {
            "slug": "sy9ls3md",
            "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 2": {
            "slug": "sm3berx9",
            "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 3": {
            "slug": "s17r7vun",
            "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 4": {
            "slug": "s2yl9p4l",
            "field_type": "linkedrecordfield"
        },
        "Program": {
            "slug": "sidf4t97",
            "field_type": "linkedrecordfield"
        },
        "Text": {
            "slug": "sc659fdw",
            "field_type": "textfield"
        },
        "Text 1": {
            "slug": "st05odxe",
            "field_type": "textfield"
        },
        "Text 2": {
            "slug": "s365txwd",
            "field_type": "textfield"
        },
        "Text 3": {
            "slug": "sl5vg867",
            "field_type": "textfield"
        },
        "Text 4": {
            "slug": "s78r24kz",
            "field_type": "textfield"
        }
    }
} as const;