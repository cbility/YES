
let tables: { [workspaceID: string]: { [label: string]: SmartSuiteTable } } = {};
export default tables = {
    "s5ch1upc": {
        updatesTable: {
            id: "663d3d23a1a0542114b1ac24",
            name: "",
            structure: {
                "Updated Logins": { slug: "sb70b9b91a", field_type: "linkedrecordfield" },
                "Date": { slug: "sed70935b7", field_type: "datefield" },
                "Run success": { slug: "sda0be9742", field_type: "singleselectfield", "choices": [] },
            }
        },
        configurationsTable: {
            name: "",
            id: "663d2313b4e7828a33b1ac07",
            structure: {
                "Last Run": { slug: "s3d2ee46fa", field_type: "datefield" },
                "Next Run": {
                    slug: "s8173a46ec", "field_type": "datefield"
                }
            }
        },
        opportunitiesTable: {
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
                    "field_type": "statusfield",
                    "choices": [
                        {
                            "value": "backlog",
                            "label": "Scoping"
                        },
                        {
                            "value": "8gjAo",
                            "label": "Drafting Quote"
                        },
                        {
                            "value": "in_progress",
                            "label": "Quote Sent"
                        },
                        {
                            "value": "JeuzO",
                            "label": "Quote problem"
                        },
                        {
                            "value": "ready_for_review",
                            "label": "Closed - Won"
                        },
                        {
                            "value": "complete",
                            "label": "Closed - Lost"
                        }
                    ]
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
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "KtGex",
                            "label": "Repeat Customer"
                        },
                        {
                            "value": "mq7LH",
                            "label": "Website"
                        },
                        {
                            "value": "R7oPI",
                            "label": "Referral/Recommendation"
                        },
                        {
                            "value": "8cZ11",
                            "label": "Meter Support prompt"
                        }
                    ]
                },
                "Estimated Income": {
                    "slug": "s4a275c046",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Reason opportunity lost?": {
                    "slug": "s424882fb8",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "VVPBk",
                            "label": "Requoted"
                        },
                        {
                            "value": "LsDFA",
                            "label": "Too Expensive"
                        },
                        {
                            "value": "XTN5y",
                            "label": "Found another consultant"
                        },
                        {
                            "value": "aWxLp",
                            "label": "DIY"
                        },
                        {
                            "value": "Dv8Ka",
                            "label": "Project details unclear"
                        },
                        {
                            "value": "60Gsb",
                            "label": "Unknown - Quote declined (detail on QuickFile)"
                        },
                        {
                            "value": "u1XmQ",
                            "label": "Client not ready"
                        },
                        {
                            "value": "nDQLR",
                            "label": "Other - write reason in comment"
                        },
                        {
                            "value": "LDoLN",
                            "label": "Quote Expired"
                        },
                        {
                            "value": "OfskS",
                            "label": "Quote Converted but not Accepted"
                        },
                        {
                            "value": "DMF0b",
                            "label": "Quote Deleted"
                        }
                    ]
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
        },
        quoteItemsTable: {
            "name": "Quote Items",
            "id": "650168ce39fcf6ca2940a6fe",
            "structure": {
                "Quote Item Name": {
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
        },
        RHILoginsTable: {
            "name": "RHI Logins",
            "id": "65e37da7f8428f036fd99785",
            "structure": {
                "Username": {
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
                "Password": {
                    "slug": "sb4e5173b6",
                    "field_type": "textfield"
                },
                "Password Correct": {
                    "slug": "s300305bbd",
                    "field_type": "yesnofield"
                },
                "Login Type": {
                    "slug": "s362676897",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "fIKh7",
                            "label": "Additional User"
                        },
                        {
                            "value": "eRuOB",
                            "label": "Authorised Signatory"
                        },
                        {
                            "value": "FrLDR",
                            "label": "Undetermined"
                        }
                    ]
                },
                "Account": {
                    "slug": "s69317bdee",
                    "field_type": "linkedrecordfield"
                },
                "Record ID (System Field)": {
                    "slug": "s949848d7e",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "RHI Record IDs (System Field)": {
                    "slug": "sdf91c49ec",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Active Project Leads": {
                    "slug": "s30844f0f2",
                    "field_type": "lookupfield",
                    "target_field_type": "userfield"
                },
                "Active Project/Support Service Count": {
                    "slug": "s3cfd6f16b",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Active Support Service Managers": {
                    "slug": "s28ce0ad2c",
                    "field_type": "lookupfield",
                    "target_field_type": "userfield"
                },
                "Checked for Duplicates": {
                    "slug": "s0c2cc1f46",
                    "field_type": "yesnofield"
                },
                "Username (Password)": {
                    "slug": "s48c811a99",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Link to Updates": {
                    "slug": "saf0c62v",
                    "field_type": "linkedrecordfield"
                },
                "Last Portal Update": {
                    "slug": "s7a0e07a25",
                    "field_type": "formulafield",
                    "target_field_type": "datefield"
                },
                "RHIs": {
                    "slug": "sf328ab45e",
                    "field_type": "lookupfield",
                    "target_field_type": "linkedrecordfield"
                },
                "Sync with Portal": {
                    "slug": "s1e9b74483",
                    "field_type": "buttonfield"
                }
            }
        },
        RHIAccountsTable: {
            "name": "RHI Accounts",
            "id": "64d155a9c71c81dc0b41d527",
            "structure": {
                "Account Name": {
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
                "ORG number": {
                    "slug": "s20a1cb3b6",
                    "field_type": "textfield"
                },
                "RHIs": {
                    "slug": "skjrn9vl",
                    "field_type": "linkedrecordfield"
                },
                "Additional Users": {
                    "slug": "s9b3c22274",
                    "field_type": "lookupfield",
                    "target_field_type": "recordtitlefield"
                },
                "Record ID (System Field)": {
                    "slug": "sa91f18b97",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Link to RHI Payments": {
                    "slug": "suf1q9sl",
                    "field_type": "linkedrecordfield"
                },
                "AS Username": {
                    "slug": "s200891b35",
                    "field_type": "lookupfield",
                    "target_field_type": "recordtitlefield"
                },
                "Logins": {
                    "slug": "splq0phf",
                    "field_type": "linkedrecordfield"
                },
                "# Logins": {
                    "slug": "sb7e3ff7d9",
                    "field_type": "countfield"
                },
                "Account Address": {
                    "slug": "s906ceac06",
                    "field_type": "addressfield"
                },
                "Company Phone": {
                    "slug": "s898c7779e",
                    "field_type": "phonefield"
                },
                "Company Number": {
                    "slug": "sa82805803",
                    "field_type": "textfield"
                },
                "AS Name": {
                    "slug": "s5af20d21e",
                    "field_type": "fullnamefield",
                    "choices": [
                        {
                            "value": "1",
                            "label": "Mr"
                        },
                        {
                            "value": "2",
                            "label": "Mrs"
                        },
                        {
                            "value": "pe11t",
                            "label": "Miss"
                        },
                        {
                            "value": "RcQZ7",
                            "label": "Ms"
                        },
                        {
                            "value": "5BbvI",
                            "label": "Dr"
                        }
                    ]
                },
                "AS Email": {
                    "slug": "s27463de03",
                    "field_type": "emailfield"
                },
                "AS Job Title": {
                    "slug": "s94016b86e",
                    "field_type": "textfield"
                },
                "Remittance Email": {
                    "slug": "se00b833bd",
                    "field_type": "emailfield"
                },
                "AS Password": {
                    "slug": "s716517628",
                    "field_type": "lookupfield",
                    "target_field_type": "textfield"
                },
                "Installation Names": {
                    "slug": "sea1894395",
                    "field_type": "lookupfield",
                    "target_field_type": "textfield"
                },
                "Login ID": {
                    "slug": "s987febca5",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Active Project Leads": {
                    "slug": "s84b72d2a8",
                    "field_type": "lookupfield",
                    "target_field_type": "userfield"
                },
                "Active Support Service Manager": {
                    "slug": "s46997b2c4",
                    "field_type": "lookupfield",
                    "target_field_type": "userfield"
                },
                "Active Project Count": {
                    "slug": "s5f94ecc3e",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "# RHIs": {
                    "slug": "sda26a212c",
                    "field_type": "countfield"
                },
                "Client": {
                    "slug": "s80411ea1b",
                    "field_type": "linkedrecordfield"
                },
                "Old Account Projects": {
                    "slug": "szytn4e2",
                    "field_type": "linkedrecordfield"
                },
                "New Account Projects": {
                    "slug": "s9o89ja9",
                    "field_type": "linkedrecordfield"
                },
                "AS Username (Password)": {
                    "slug": "s8cd993db0",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Send Password Reminder": {
                    "slug": "s60373ad07",
                    "field_type": "yesnofield"
                },
                "Link to Problems": {
                    "slug": "svqfioay",
                    "field_type": "linkedrecordfield"
                },
                "Active Service Count": {
                    "slug": "snzffde7",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Active Projects/Services Grouping": {
                    "slug": "sca76164db",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Last Portal Update": {
                    "slug": "sb04455e7d",
                    "field_type": "formulafield",
                    "target_field_type": "datefield"
                },
                "Active Projects + Active Services": {
                    "slug": "sd271b9bcf",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Sync with Portal": {
                    "slug": "s67416becc",
                    "field_type": "buttonfield"
                }
            }
        },
        RHIsTable: {
            "name": "RHIs",
            "id": "64d155a9c71c81dc0b41d52d",
            "structure": {
                "RHI Number": {
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
                "Accreditation Date": {
                    "slug": "s2e1875a9c",
                    "field_type": "datefield"
                },
                "QHLF (kWh)": {
                    "slug": "s788a692be",
                    "field_type": "numberfield"
                },
                "RHI Account": {
                    "slug": "s366a5e476",
                    "field_type": "linkedrecordfield"
                },
                "Tags": {
                    "slug": "sed8818474",
                    "field_type": "multipleselectfield",
                    "choices": [
                        {
                            "value": "c6d57644-7c7f-4116-8bf1-37766d1d8285",
                            "label": "Amendment"
                        },
                        {
                            "value": "3106aec6-6491-473e-8179-73f8fe8f17d3",
                            "label": "ASA"
                        },
                        {
                            "value": "05440a02-19b1-4569-99f3-43c4ed16a8cb",
                            "label": "Estimated Data Case"
                        }
                    ]
                },
                "RHI Installation Name": {
                    "slug": "s8f22568aa",
                    "field_type": "textfield"
                },
                "Technology": {
                    "slug": "s4285e945a",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "7cf7976d-8c2d-4db6-a03b-c7b9e2d6fcb1",
                            "label": "Air Source Heat Pump (ASHP)"
                        },
                        {
                            "value": "50e9d6eb-4fe8-4d7d-831c-0669070ad76c",
                            "label": "Bio-methane"
                        },
                        {
                            "value": "0c22302f-2d56-4b81-9f0c-517b164f3453",
                            "label": "Biogas"
                        },
                        {
                            "value": "4fb718d9-8b36-4313-9d51-d9c0e42827d9",
                            "label": "Ground source heat pump (GSHP)"
                        },
                        {
                            "value": "881f4733-b3e4-41a6-bbc4-ba546f082180",
                            "label": "Solar thermal"
                        },
                        {
                            "value": "d2ee1107-6691-47ca-8434-e2b4e21fec4d",
                            "label": "Solid biomass boiler"
                        },
                        {
                            "value": "99b56074-cd05-478c-9316-4600a466707a",
                            "label": "Solid Biomass CHP"
                        },
                        {
                            "value": "bfd78212-4a5a-4d58-aeb5-68b8fda8a52e",
                            "label": "Water Source Heat Pump (WSHP)"
                        }
                    ]
                },
                "Installation": {
                    "slug": "sj4xhegu",
                    "field_type": "linkedrecordfield"
                },
                "Accreditation Status": {
                    "slug": "sf81a2f775",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "in_progress",
                            "label": "Pending"
                        },
                        {
                            "value": "complete",
                            "label": "Live"
                        },
                        {
                            "value": "backlog",
                            "label": "Terminated"
                        },
                        {
                            "value": "h5JIx",
                            "label": "Withdrawn"
                        }
                    ]
                },
                "Correctly Formatted RHI number (System Field)": {
                    "slug": "s305f616e7",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Application Submitted": {
                    "slug": "sb79716244",
                    "field_type": "datefield"
                },
                "Application Status": {
                    "slug": "saktmxc5",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "in_progress",
                            "label": "In Review"
                        },
                        {
                            "value": "5caafab8-1d0d-4da7-8917-cf1e21c20886",
                            "label": "With Applicant"
                        },
                        {
                            "value": "complete",
                            "label": "Approved"
                        },
                        {
                            "value": "backlog",
                            "label": "Terminated"
                        },
                        {
                            "value": "0UsgL",
                            "label": "Rejected"
                        },
                        {
                            "value": "ZLtGj",
                            "label": "Cancelled"
                        }
                    ]
                },
                "Thermal Capacity": {
                    "slug": "sd1c8007fa",
                    "field_type": "numberfield"
                },
                "Record ID (System Field)": {
                    "slug": "sdada683b2",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Link to Tasks": {
                    "slug": "s7uib8r9",
                    "field_type": "linkedrecordfield"
                },
                "Name Plate Efficiency/COP": {
                    "slug": "s4037fc899",
                    "field_type": "percentfield"
                },
                "Sustainability Reporting": {
                    "slug": "s7a8a4d943",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "0b1bc137-74b5-4203-8315-2e583a7815a1",
                            "label": "Accredited under the R.O. scheme and complying with the sustainability requirements of the R.O. scheme"
                        },
                        {
                            "value": "3ce8d6e4-45b9-4475-bda3-fef79f6bbf81",
                            "label": "Self-reporting"
                        },
                        {
                            "value": "83c68ccf-fb3e-4669-a9b0-325624740bd8",
                            "label": "Self-reporting and using fuels listed on the Biomass Supplier List (BSL) or Sustainable Fuel Register (SFR)"
                        },
                        {
                            "value": "95d1b0a3-91c6-4187-9500-c0edb2261518",
                            "label": "Using fuels listed on the Biomass Supplier List (BSL) or Sustainable Fuel Register (SFR)"
                        }
                    ]
                },
                "Commissioning Date": {
                    "slug": "s594437604",
                    "field_type": "datefield"
                },
                "Number of boilers": {
                    "slug": "s030c8748d",
                    "field_type": "numberfield"
                },
                "Boiler Manufacturer": {
                    "slug": "s42d018586",
                    "field_type": "textfield"
                },
                "Boiler Model": {
                    "slug": "s94038cbea",
                    "field_type": "textfield"
                },
                "HH110": {
                    "slug": "sa112061bc",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "mNvCg",
                            "label": "Yes"
                        },
                        {
                            "value": "9Vdjg",
                            "label": "No"
                        }
                    ]
                },
                "HH120": {
                    "slug": "s21e98e9b5",
                    "field_type": "textareafield"
                },
                "Hot Water Meters": {
                    "slug": "sb249dfefd",
                    "field_type": "numberfield"
                },
                "Steam Meters": {
                    "slug": "s76ea8502f",
                    "field_type": "numberfield"
                },
                "Location": {
                    "slug": "sb5c903c06",
                    "field_type": "addressfield"
                },
                "HK120": {
                    "slug": "s49e310a4c",
                    "field_type": "textareafield"
                },
                "Latest Submitted PDS": {
                    "slug": "s3ea6ec8f7",
                    "field_type": "datefield"
                },
                "RHI Start": {
                    "slug": "s1179e8b96",
                    "field_type": "datefield"
                },
                "Quarter ends": {
                    "slug": "s418ae4140",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "AS Username Lookup": {
                    "slug": "sf8e7d9233",
                    "field_type": "lookupfield",
                    "target_field_type": "recordtitlefield"
                },
                "AS Password Lookup": {
                    "slug": "sb28891359",
                    "field_type": "lookupfield",
                    "target_field_type": "textfield"
                },
                "Meters": {
                    "slug": "sfnp70bs",
                    "field_type": "linkedrecordfield"
                },
                "Latest Reading": {
                    "slug": "s1501a92a1",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Submitted Monthly?": {
                    "slug": "s30751960b",
                    "field_type": "formulafield",
                    "target_field_type": "yesnofield"
                },
                "# Meters": {
                    "slug": "s49533f67c",
                    "field_type": "countfield"
                },
                "Link to Projects": {
                    "slug": "skzpku1l",
                    "field_type": "linkedrecordfield"
                },
                "Link to Support Service": {
                    "slug": "sxq0awu1",
                    "field_type": "linkedrecordfield"
                },
                "Active Project Leads": {
                    "slug": "s64756a5f5",
                    "field_type": "lookupfield",
                    "target_field_type": "userfield"
                },
                "Active Support Service Manager": {
                    "slug": "s6354c71fe",
                    "field_type": "lookupfield",
                    "target_field_type": "userfield"
                },
                "Active Support Service Manager (System Field)": {
                    "slug": "s64aad08b1",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Link to RHI Status Updates": {
                    "slug": "sk32nwft",
                    "field_type": "linkedrecordfield"
                },
                "First PDS Start": {
                    "slug": "s6jzhsk8",
                    "field_type": "datefield"
                },
                "RHI Support Service Blocking Projects": {
                    "slug": "s7bqpjse",
                    "field_type": "lookupfield",
                    "target_field_type": "recordtitlefield"
                },
                "Logins": {
                    "slug": "sdca76effa",
                    "field_type": "lookupfield",
                    "target_field_type": "linkedrecordfield"
                },
                "# Active Projects": {
                    "slug": "s37a8af27c",
                    "field_type": "countfield"
                },
                "# Active Services": {
                    "slug": "s4ad3d5674",
                    "field_type": "countfield"
                },
                "Last Portal Update": {
                    "slug": "s730590801",
                    "field_type": "formulafield",
                    "target_field_type": "datefield"
                },
                "Coefficient of Performance (COP)": {
                    "slug": "sbe757d43c",
                    "field_type": "numberfield"
                },
                "Seasonal Performance Factor (SPF)": {
                    "slug": "sceb80d3b9",
                    "field_type": "numberfield"
                },
                "Last RHI portal update (text)": {
                    "slug": "sc83301160",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "RHI Start Day": {
                    "slug": "sdb93b7df8",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Tier 1 cut-off": {
                    "slug": "s3fc937683",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Active Projects": {
                    "slug": "sb4822f926",
                    "field_type": "lookupfield",
                    "target_field_type": "recordtitlefield"
                },
                "Active Support Service": {
                    "slug": "sf286b84b2",
                    "field_type": "lookupfield",
                    "target_field_type": "recordtitlefield"
                },
                "Biomass Payment Tariff": {
                    "slug": "sb1871170c",
                    "field_type": "linkedrecordfield"
                },
                "CHPQA Certification": {
                    "slug": "s6d1sm6d",
                    "field_type": "linkedrecordfield"
                },
                "Payment Tariff": {
                    "slug": "sca8acad66",
                    "field_type": "linkedrecordfield"
                },
                "Link to Woodsure Numbers": {
                    "slug": "svbfthgp",
                    "field_type": "linkedrecordfield"
                },
                "CHPQA Certificates": {
                    "slug": "s5b2837a55",
                    "field_type": "lookupfield",
                    "target_field_type": "linkedrecordfield"
                },
                "AS Username": {
                    "slug": "s52724337f",
                    "field_type": "formulafield",
                    "target_field_type": "recordtitlefield"
                },
                "AS Password": {
                    "slug": "s5b55bfbc7",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Site": {
                    "slug": "s0c199e397",
                    "field_type": "lookupfield",
                    "target_field_type": "linkedrecordfield"
                },
                "Login ID": {
                    "slug": "sf55feba16",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Sync with Portal": {
                    "slug": "sf0a66c883",
                    "field_type": "buttonfield"
                }
            }
        },
        projectsTable: {
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
                    "field_type": "statusfield",
                    "choices": [
                        {
                            "value": "in_progress",
                            "label": "Live"
                        },
                        {
                            "value": "676e6eb8-56e6-4c92-bb5b-00d7a32a4498",
                            "label": "Dormant"
                        },
                        {
                            "value": "complete",
                            "label": "Complete"
                        },
                        {
                            "value": "aa8742cd-11d9-45a4-b178-aa05942d4e7e",
                            "label": "Abandoned"
                        }
                    ]
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
                    "field_type": "statusfield",
                    "choices": [
                        {
                            "value": "backlog",
                            "label": "4. Initiation"
                        },
                        {
                            "value": "in_progress",
                            "label": "5. Finalisation"
                        },
                        {
                            "value": "ready_for_review",
                            "label": "6.Submission"
                        },
                        {
                            "value": "Zy5Nf",
                            "label": "7.External Approval"
                        },
                        {
                            "value": "Jn0Hn",
                            "label": "8. Job Completion"
                        }
                    ]
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
                    "field_type": "statusfield",
                    "choices": [
                        {
                            "value": "ready_for_review",
                            "label": "With YES"
                        },
                        {
                            "value": "complete",
                            "label": "Waiting on 3rd party"
                        }
                    ]
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
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "4zhgE",
                            "label": "RHI"
                        },
                        {
                            "value": "kGlH7",
                            "label": "RO"
                        },
                        {
                            "value": "hFQBk",
                            "label": "Not RHI or RO"
                        },
                        {
                            "value": "wlgOZ",
                            "label": "Subcontracted RHI"
                        }
                    ]
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
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "reYII",
                            "label": "Normal"
                        },
                        {
                            "value": "c5f16bb1-ef67-4c9d-abb4-8e5fe5e477cd",
                            "label": "Special"
                        }
                    ]
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
        },
        metricsTable: {
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
                "Total Opportunities Quoted": {
                    "slug": "s06830d4c5",
                    "field_type": "numberfield"
                },
                "Total Opportunities Converted": {
                    "slug": "s205f19177",
                    "field_type": "numberfield"
                },
                "Total Live Projects": {
                    "slug": "s6ce5dcadc",
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
                "Assigned To": {
                    "slug": "se9205aa11",
                    "field_type": "userfield"
                },
                "Live Amendment Projects with YES": {
                    "slug": "s8cf5965c6",
                    "field_type": "numberfield"
                },
                "Total RHI Support Services": {
                    "slug": "se7d9a7e04",
                    "field_type": "numberfield"
                },
                "Support Services Window Open": {
                    "slug": "sd280c2ffe",
                    "field_type": "numberfield"
                },
                "Support Services Window Open Soon": {
                    "slug": "swu6kxej",
                    "field_type": "numberfield"
                },
                "Data Issue Services": {
                    "slug": "s5bc1ad486",
                    "field_type": "numberfield"
                },
                "Services Awaiting Submission": {
                    "slug": "s040d5336e",
                    "field_type": "numberfield"
                },
                "Open Comment Services": {
                    "slug": "saa40377e5",
                    "field_type": "numberfield"
                },
                "First Created (Including Time)": {
                    "slug": "saf1ce7aa3",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Metrics Junction": {
                    "slug": "s156de04c8",
                    "field_type": "linkedrecordfield"
                },
                "Metric Date": {
                    "slug": "sba4d2670a",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "New Tasks (Past Week)": {
                    "slug": "s3c726e3ff",
                    "field_type": "numberfield"
                },
                "Assignee": {
                    "slug": "scda06d197",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Total Incomplete Projects": {
                    "slug": "s101bbed99",
                    "field_type": "numberfield"
                }
            }
        },
        tasksTable: {
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
                    "field_type": "statusfield",
                    "choices": [
                        {
                            "value": "backlog",
                            "label": "Planned"
                        },
                        {
                            "value": "in_progress",
                            "label": "In Process"
                        },
                        {
                            "value": "3cb4c0a2-9cb7-42ff-b540-7299c9d27a73",
                            "label": "Blocked"
                        },
                        {
                            "value": "complete",
                            "label": "Complete"
                        },
                        {
                            "value": "d64d4816-9ac4-4a16-9192-fd66d912ee85",
                            "label": "On Hold"
                        }
                    ]
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
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "yes",
                            "label": "Track Time"
                        },
                        {
                            "value": "no",
                            "label": "Don't Track"
                        },
                        {
                            "value": "7g3sY",
                            "label": "Chargeable"
                        }
                    ]
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
                    "field_type": "multipleselectfield",
                    "choices": [
                        {
                            "value": "OsS6D",
                            "label": "Site Name"
                        },
                        {
                            "value": "sbLWk",
                            "label": "Installation Name"
                        },
                        {
                            "value": "bRtub",
                            "label": "RHI"
                        },
                        {
                            "value": "V5zKe",
                            "label": "RO Generator"
                        },
                        {
                            "value": "BootF",
                            "label": "Client"
                        },
                        {
                            "value": "l6qPk",
                            "label": "Project"
                        },
                        {
                            "value": "Rj1zs",
                            "label": "Extra Information"
                        }
                    ]
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
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "d68a5030-801a-495e-a0d7-b4351d1a9b63",
                            "label": "Accounts/Bookkeeping"
                        },
                        {
                            "value": "4fc09159-ff93-4daf-84b0-dcea6d5e2741",
                            "label": "Admin"
                        },
                        {
                            "value": "c9c6d0ab-9079-4f03-be4d-c40e4f7ace22",
                            "label": "Business Development"
                        },
                        {
                            "value": "445639e1-273f-40d3-ac78-256ac6b20dae",
                            "label": "Deadline list"
                        },
                        {
                            "value": "7a4d2213-acbf-491a-a887-a2428e1a4211",
                            "label": "Marketing"
                        },
                        {
                            "value": "c044db8c-312c-4717-a709-b2e549e79b6f",
                            "label": "Not entered"
                        },
                        {
                            "value": "1a4ae901-1d8a-47eb-8218-7fca4283f01f",
                            "label": "Personal"
                        },
                        {
                            "value": "651386e5-1779-452b-a713-2cc53bc8420d",
                            "label": "Process Development"
                        },
                        {
                            "value": "3f2132c4-8149-49da-8d69-db6e3ef9b696",
                            "label": "Project Delivery"
                        },
                        {
                            "value": "6cb44bba-02b4-4e2c-8908-51cf733519c6",
                            "label": "Renew Exchange"
                        },
                        {
                            "value": "b033ade4-da6d-4daf-88e5-ae0abd744bff",
                            "label": "Sales, quoting"
                        },
                        {
                            "value": "7ca9d98d-dae1-4814-bcf0-3ba299a88d7a",
                            "label": "Staff Management"
                        },
                        {
                            "value": "8d5e5ebe-a9b2-4d4f-b974-32326ac6614c",
                            "label": "Training"
                        },
                        {
                            "value": "f23c9f10-2a9b-4933-b475-d5329ab2ca60",
                            "label": "Property Dog"
                        },
                        {
                            "value": "7cb7327b-8ff9-4e9b-bd1e-2c939d3b424f",
                            "label": "Complex customer problems"
                        },
                        {
                            "value": "gsk7D",
                            "label": "Resolution and improvements"
                        },
                        {
                            "value": "uk9a4",
                            "label": "Recurring Task"
                        },
                        {
                            "value": "M1KJL",
                            "label": "Submission Query"
                        },
                        {
                            "value": "XBbWM",
                            "label": "Invoice Query"
                        },
                        {
                            "value": "e9bOd",
                            "label": "On-board customer"
                        },
                        {
                            "value": "POp88",
                            "label": "Customer complaint"
                        },
                        {
                            "value": "HzHV2",
                            "label": "Long Term Strategy"
                        }
                    ]
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
                    "field_type": "statusfield",
                    "choices": [
                        {
                            "value": "ready_for_review",
                            "label": "1. Initiation"
                        },
                        {
                            "value": "backlog",
                            "label": "2. Finalisation"
                        },
                        {
                            "value": "in_progress",
                            "label": "3.Submission"
                        },
                        {
                            "value": "complete",
                            "label": "4.External Approval"
                        },
                        {
                            "value": "Xp1g8",
                            "label": "5. Job Completion"
                        }
                    ]
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
                    "field_type": "statusfield",
                    "choices": [
                        {
                            "value": "backlog",
                            "label": "High"
                        },
                        {
                            "value": "in_progress",
                            "label": "Medium"
                        },
                        {
                            "value": "ready_for_review",
                            "label": "Low"
                        }
                    ]
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
        },
        supportServicesTable: {
            "name": "Support Services",
            "id": "6616a080f17f6389848d38d0",
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
                "RHI": {
                    "slug": "s84dfbfaae",
                    "field_type": "linkedrecordfield"
                },
                "RO Generator": {
                    "slug": "s4664a17d0",
                    "field_type": "linkedrecordfield"
                },
                "Invoices": {
                    "slug": "scc496d41f",
                    "field_type": "linkedrecordfield"
                },
                "Legacy Service Start": {
                    "slug": "s711e0f6c5",
                    "field_type": "datefield"
                },
                "Job Sub-Type": {
                    "slug": "sb5e285126",
                    "field_type": "linkedrecordfield"
                },
                "RO Submissions": {
                    "slug": "s69073a333",
                    "field_type": "linkedrecordfield"
                },
                "Installation Name": {
                    "slug": "s90c1b09ce",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Manager": {
                    "slug": "s4891236cd",
                    "field_type": "userfield"
                },
                "TinyURL dropbox link": {
                    "slug": "se2b1d6760",
                    "field_type": "textfield"
                },
                "Local Folder": {
                    "slug": "sc7952506b",
                    "field_type": "buttonfield"
                },
                "Status": {
                    "slug": "s1c53d88cd",
                    "field_type": "statusfield",
                    "choices": [
                        {
                            "value": "backlog",
                            "label": "Setup"
                        },
                        {
                            "value": "in_progress",
                            "label": "Ongoing"
                        },
                        {
                            "value": "complete",
                            "label": "Left Service"
                        }
                    ]

                },
                "Link to RHI Submissions": {
                    "slug": "sf80nbpd",
                    "field_type": "linkedrecordfield"
                },
                "RHI Installation Name": {
                    "slug": "sd153d7e7a",
                    "field_type": "lookupfield",
                    "target_field_type": "textfield"
                },
                "Record ID (System Field)": {
                    "slug": "sc591e2fdc",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Job Type": {
                    "slug": "s5e166cf4d",
                    "field_type": "lookupfield",
                    "target_field_type": "linkedrecordfield"
                },
                "RHI Window Open": {
                    "slug": "sac96473a5",
                    "field_type": "formulafield",
                    "target_field_type": "yesnofield"
                },
                "RHI Window Open Within 2 Weeks": {
                    "slug": "sq98hz40",
                    "field_type": "formulafield",
                    "target_field_type": "yesnofield"
                },
                "Next Due Submission": {
                    "slug": "s68e84e107",
                    "field_type": "formulafield",
                    "target_field_type": "datefield"
                },
                "Submission Due?": {
                    "slug": "s7a66d9cae",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Client": {
                    "slug": "sdc4d7db0b",
                    "field_type": "linkedrecordfield"
                },
                "Quote": {
                    "slug": "s749521306",
                    "field_type": "linkedrecordfield"
                },
                "AS Username": {
                    "slug": "s5ohq1ag",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "AS Password": {
                    "slug": "s685cecfc6",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Client Emails": {
                    "slug": "s34433fdd0",
                    "field_type": "lookupfield",
                    "target_field_type": "formulafield"
                },
                "Service Contact Emails Lookup": {
                    "slug": "s2f074abd6",
                    "field_type": "lookupfield",
                    "target_field_type": "emailfield"
                },
                "Status Grouping": {
                    "slug": "sf61834160",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Service Contact Emails": {
                    "slug": "s915de1be8",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Service Contact Emails Search String": {
                    "slug": "sfomizhf",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Service Start": {
                    "slug": "scd4d0581e",
                    "field_type": "formulafield",
                    "target_field_type": "datefield"
                },
                "RHI Blocking Projects": {
                    "slug": "s2phg3zs",
                    "field_type": "lookupfield",
                    "target_field_type": "recordtitlefield"
                },
                "Latest RHI Submission End Date": {
                    "slug": "s7ccdfb9c5",
                    "field_type": "formulafield",
                    "target_field_type": "datefield"
                },
                "First Unreviewed or Data Issue RHI Submission": {
                    "slug": "s230042c42",
                    "field_type": "formulafield",
                    "target_field_type": "datefield"
                },
                "Next Due Quarter": {
                    "slug": "sb02a0bcbc",
                    "field_type": "formulafield",
                    "target_field_type": "datefield"
                },
                "Quarter Ends": {
                    "slug": "s0f4a66230",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "RHI Application Status": {
                    "slug": "scf04e32bf",
                    "field_type": "lookupfield",
                    "target_field_type": "singleselectfield"
                },
                "RHI Accreditation Status": {
                    "slug": "s3abf846fc",
                    "field_type": "lookupfield",
                    "target_field_type": "singleselectfield"
                },
                "Link to Problems": {
                    "slug": "sa5iy97z",
                    "field_type": "linkedrecordfield"
                },
                "Service Contacts": {
                    "slug": "smckefcf",
                    "field_type": "linkedrecordfield"
                },
                "Sister Services": {
                    "slug": "sf7c1e7ee4",
                    "field_type": "lookupfield",
                    "target_field_type": "recordtitlefield"
                },
                "Service Has Sister Services": {
                    "slug": "s466ac2d26",
                    "field_type": "formulafield",
                    "target_field_type": "yesnofield"
                },
                "Late Data Chase Emails": {
                    "slug": "sb7882fca7",
                    "field_type": "lookupfield",
                    "target_field_type": "emailfield"
                },
                "Latest Submission Start Date": {
                    "slug": "s70288d16c",
                    "field_type": "formulafield",
                    "target_field_type": "datefield"
                },
                "Last RHI portal update": {
                    "slug": "s3efa2c264",
                    "field_type": "lookupfield",
                    "target_field_type": "formulafield"
                },
                "First Data Issue group name (System Field)": {
                    "slug": "sb686f77cf",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Next Quarter group name (System Field)": {
                    "slug": "s919bcc0d1",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "RHI Technology": {
                    "slug": "s6849ecec0",
                    "field_type": "lookupfield",
                    "target_field_type": "singleselectfield"
                },
                "Submission Report Emails": {
                    "slug": "s8a5808c7c",
                    "field_type": "lookupfield",
                    "target_field_type": "emailfield"
                },
                "Tier 1 cut-off": {
                    "slug": "s00dbb04e4",
                    "field_type": "lookupfield",
                    "target_field_type": "formulafield"
                },
                "Sustainability Reporting": {
                    "slug": "s70d9f0527",
                    "field_type": "lookupfield",
                    "target_field_type": "singleselectfield"
                },
                "FMS": {
                    "slug": "sbdb648ee5",
                    "field_type": "filefield"
                },
                "FMS Approval Email": {
                    "slug": "sef69d9a58",
                    "field_type": "filefield"
                },
                "FMS Approval": {
                    "slug": "s0bc1d45f7",
                    "field_type": "datefield"
                },
                "Current BSL Number": {
                    "slug": "s3a1b300cf",
                    "field_type": "textfield"
                },
                "Approved Fuel Types": {
                    "slug": "syvqborr",
                    "field_type": "linkedrecordfield"
                },
                "Date Left Service": {
                    "slug": "s11da23dbe",
                    "field_type": "datefield"
                },
                "Reason For Leaving": {
                    "slug": "s21f39ed43",
                    "field_type": "textfield"
                },
                "Using heat from another installation?": {
                    "slug": "sfb6a98409",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "9AFCd",
                            "label": "Yes"
                        },
                        {
                            "value": "jj5O0",
                            "label": "No"
                        }
                    ]
                },
                "Paired Installation": {
                    "slug": "s5af27df46",
                    "field_type": "linkedrecordfield"
                },
                "Client Lookup": {
                    "slug": "s1dd3f5b62",
                    "field_type": "lookupfield",
                    "target_field_type": "recordtitlefield"
                },
                "Link to Service Invoice Items": {
                    "slug": "sp4r0dqc",
                    "field_type": "linkedrecordfield"
                },
                "Tasks": {
                    "slug": "sa26451a92",
                    "field_type": "linkedrecordfield"
                },
                "Folder Code": {
                    "slug": "s76eba2fc8",
                    "field_type": "textfield"
                },
                "Legacy Cumulative EHO": {
                    "slug": "sad700597f",
                    "field_type": "numberfield"
                },
                "Legacy Woodsure Number": {
                    "slug": "s96b1e558c",
                    "field_type": "textfield"
                },
                "Legacy Client Name": {
                    "slug": "sef1f0d7fd",
                    "field_type": "textfield"
                },
                "Legacy Notes": {
                    "slug": "sb19be2999",
                    "field_type": "textareafield"
                },
                "Approved GHG Calculation": {
                    "slug": "s4d43a8544",
                    "field_type": "filefield"
                },
                "Auxiliary Fossil Fuel": {
                    "slug": "sbf382a409",
                    "field_type": "yesnofield"
                },
                "Data Issue Submissions": {
                    "slug": "sb3fc3944e",
                    "field_type": "lookupfield",
                    "target_field_type": "recordtitlefield"
                }
            }
        },
        invoicesTable: {
            "name": "Invoices",
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
                    "field_type": "statusfield",
                    "choices": [
                        {
                            "value": "backlog",
                            "label": "New Invoice"
                        },
                        {
                            "value": "L2Krh",
                            "label": "Invoice Drafted"
                        },
                        {
                            "value": "in_progress",
                            "label": "Invoice Sent"
                        },
                        {
                            "value": "Rt8oS",
                            "label": "Invoice Partially Paid"
                        },
                        {
                            "value": "QLLm6",
                            "label": "Invoice Dispute"
                        },
                        {
                            "value": "complete",
                            "label": "Invoice Paid"
                        },
                        {
                            "value": "3eio0",
                            "label": "Invoice Deleted"
                        }
                    ]
                },
                "First Chase": {
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
                    "field_type": "formulafield",
                    "target_field_type": "yesnofield"
                },
                "Calculated Invoice Amount (Inc. VAT) (£)": {
                    "slug": "sa5d29448f",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "ISO Invoice Date": {
                    "slug": "s5a31eef7b",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
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
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "x01tk",
                            "label": "Single Invoice"
                        },
                        {
                            "value": "OC8HP",
                            "label": "Recurring Invoice"
                        }
                    ]
                },
                "SDP and Recurring Items Selected?": {
                    "slug": "s11c5aa27f",
                    "field_type": "formulafield",
                    "target_field_type": "yesnofield"
                },
                "Status ID (System Field)": {
                    "slug": "sc0d4932b4",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Update Invoice": {
                    "slug": "sfur41as",
                    "field_type": "buttonfield"
                },
                "Invoice Dispute Status": {
                    "slug": "s5q77rrl",
                    "field_type": "statusfield",
                    "choices": [
                        {
                            "value": "backlog",
                            "label": "No Dispute"
                        },
                        {
                            "value": "QLLm6",
                            "label": "Invoice Dispute"
                        },
                        {
                            "value": "TYvKg",
                            "label": "Dispute Resolved"
                        }
                    ]
                },
                "Sent Date": {
                    "slug": "sf29742ed4",
                    "field_type": "datefield"
                },
                "Invoice Status": {
                    "slug": "sde1bc3b2d",
                    "field_type": "formulafield",
                    "target_field_type": "statusfield"
                },
                "QuickFile Invoice Status (System Field)": {
                    "slug": "s842ec563c",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "TaNwo",
                            "label": "DRAFT"
                        },
                        {
                            "value": "VlXCU",
                            "label": "SENT"
                        },
                        {
                            "value": "3ky3U",
                            "label": "PAIDPART"
                        },
                        {
                            "value": "Jv7UD",
                            "label": "PAIDFULL"
                        },
                        {
                            "value": "mhFbY",
                            "label": "CREDIT NOTE"
                        },
                        {
                            "value": "RIdw1",
                            "label": "CREDITED"
                        },
                        {
                            "value": "s8C1P",
                            "label": "DELETED"
                        },
                        {
                            "value": "lxa9p",
                            "label": "REFUND"
                        }
                    ]
                },
                "Assigned To": {
                    "slug": "s3f9425db1",
                    "field_type": "userfield"
                },
                "All Payment Received": {
                    "slug": "sd3b7e33e8",
                    "field_type": "datefield"
                },
                "Client Selection Mismatch": {
                    "slug": "s981b3b376",
                    "field_type": "formulafield",
                    "target_field_type": "yesnofield"
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
                    "slug": "sacf36cc9b",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Basic Payment Terms": {
                    "slug": "s6b63e74ec",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Invoice Term Days": {
                    "slug": "sratdiuk",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Calculated Invoice Number": {
                    "slug": "s8b2fc84fc",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Invoice Name": {
                    "slug": "sa6aa9c143",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Calculated Invoice Amount (Exc. VAT) (£)": {
                    "slug": "s3x70h5e",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Client Email Search String": {
                    "slug": "sa9be538eb",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Client Emails": {
                    "slug": "s1428d216f",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Client ID": {
                    "slug": "sd06f3fa61",
                    "field_type": "lookupfield",
                    "target_field_type": "formulafield"
                },
                "Discount": {
                    "slug": "sfaf9fa800",
                    "field_type": "percentfield"
                },
                "Total Gross Payment": {
                    "slug": "sbe0b1624f",
                    "field_type": "currencyfield"
                },
                "Status Name (System Field)": {
                    "slug": "s08peerl",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "QuickFile Invoice Number": {
                    "slug": "s32a2cf521",
                    "field_type": "textfield"
                },
                "Internal Invoice Description": {
                    "slug": "sd9ab9d484",
                    "field_type": "textfield"
                },
                "Legacy Invoice": {
                    "slug": "s4d7d8752e",
                    "field_type": "yesnofield"
                },
                "Second Chase": {
                    "slug": "s286f96219",
                    "field_type": "datefield"
                },
                "Final Chase": {
                    "slug": "s7d398a0e6",
                    "field_type": "datefield"
                }
            }
        },
        SDPInvoiceItemsTable: {
            "name": "SDP Invoice Items",
            "id": "6694d6507c3ca20d6ce68d9e",
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
                "Project": {
                    "slug": "s3283e060e",
                    "field_type": "linkedrecordfield"
                },
                "Price": {
                    "slug": "sf48a9e61b",
                    "field_type": "currencyfield"
                },
                "Item Description": {
                    "slug": "s40e168fa8",
                    "field_type": "textareafield"
                },
                "Item Name": {
                    "slug": "s99c6fcaf3",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Invoice": {
                    "slug": "s8237ed3c2",
                    "field_type": "linkedrecordfield"
                },
                "Default Item Description": {
                    "slug": "s0798c890a",
                    "field_type": "formulafield",
                    "target_field_type": "textareafield"
                },
                "Assigned To": {
                    "slug": "sf5556356c",
                    "field_type": "userfield"
                },
                "Project Client ID": {
                    "slug": "s3f6f61f8f",
                    "field_type": "lookupfield",
                    "target_field_type": "formulafield"
                },
                "Item Type": {
                    "slug": "sc07bde245",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "QZi37",
                            "label": "Intial Invoice"
                        },
                        {
                            "value": "F1Axo",
                            "label": "Final Invoice"
                        },
                        {
                            "value": "H455G",
                            "label": "Travel Invoice"
                        }
                    ]
                },
                "Default Item Price": {
                    "slug": "sa7459b49d",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Client": {
                    "slug": "sc136d4fd2",
                    "field_type": "linkedrecordfield"
                },
                "Net Payment": {
                    "slug": "sad48077d4",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Client ID": {
                    "slug": "see55dccb4",
                    "field_type": "lookupfield",
                    "target_field_type": "formulafield"
                },
                "Invoice Item Name": {
                    "slug": "s8fa8b8c1f",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "Charged Hourly?": {
                    "slug": "s9d5e870b7",
                    "field_type": "formulafield",
                    "target_field_type": "yesnofield"
                },
                "Hourly Rate": {
                    "slug": "sd7e25bbc0",
                    "field_type": "numberfield"
                },
                "Hours": {
                    "slug": "s8beba3f09",
                    "field_type": "numberfield"
                },
                "Payment (Exc. VAT)": {
                    "slug": "s39d86bc60",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Project Lookup": {
                    "slug": "s9f81ff287",
                    "field_type": "lookupfield",
                    "target_field_type": "formulafield"
                },
                "Empty Field": {
                    "slug": "s8496dc517",
                    "field_type": "richtextareafield"
                },
                "Invoice Client ID": {
                    "slug": "s10a5bf254",
                    "field_type": "lookupfield",
                    "target_field_type": "formulafield"
                },
                "QuickFile Invoice ID": {
                    "slug": "s775c5a402",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                }
            }
        },
        invoiceTemplatesTable: {
            "name": "Recurring Invoice Templates",
            "id": "669632230fbeea09be4b0c2f",
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
                "Services": {
                    "slug": "s4188de8ad",
                    "field_type": "linkedrecordfield"
                },
                "Total Payment (Inc. VAT) (System Field)": {
                    "slug": "sf48a9e61b",
                    "field_type": "currencyfield"
                },
                "Assigned To": {
                    "slug": "sf5556356c",
                    "field_type": "userfield"
                },
                "Client": {
                    "slug": "s1423785fb",
                    "field_type": "linkedrecordfield"
                },
                "QuickFile Invoice Template ID": {
                    "slug": "s6469d92ca",
                    "field_type": "textfield"
                },
                "QuickFile Invoice Template": {
                    "slug": "s219e511fd",
                    "field_type": "buttonfield"
                },
                "Invoices": {
                    "slug": "s1sbnqyu",
                    "field_type": "linkedrecordfield"
                },
                "Service Price (£)": {
                    "slug": "se730e7a7e",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Payment": {
                    "slug": "sc904aca65",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Payment - Service Price (£)": {
                    "slug": "sc73d546c4",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Net Payment": {
                    "slug": "sd51218ef3",
                    "field_type": "formulafield",
                    "target_field_type": "currencyfield"
                },
                "QuickFile Invoice Client ID": {
                    "slug": "s4bd9a2a28",
                    "field_type": "textfield"
                },
                "Client QuickFile ID": {
                    "slug": "s4cf20ec3a",
                    "field_type": "lookupfield",
                    "target_field_type": "textfield"
                },
                "Service Installation Names": {
                    "slug": "s38627194d",
                    "field_type": "formulafield",
                    "target_field_type": "textfield"
                },
                "QuickFile Status (System Field)": {
                    "slug": "sf0c0b86f7",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "0eu0v",
                            "label": "DRAFT"
                        },
                        {
                            "value": "BhBT3",
                            "label": "ACTIVE"
                        },
                        {
                            "value": "TAR3Z",
                            "label": "PAUSED"
                        },
                        {
                            "value": "K7YCX",
                            "label": "DELETED"
                        }
                    ]
                },
                "Discount": {
                    "slug": "sd03202a63",
                    "field_type": "percentfield"
                },
                "Calculated Invoice Price (£)": {
                    "slug": "s5f0be0d7a",
                    "field_type": "formulafield",
                    "target_field_type": "numberfield"
                },
                "Interval": {
                    "slug": "s3e760b99f",
                    "field_type": "textfield"
                },
                "Start Date": {
                    "slug": "se0e93246f",
                    "field_type": "datefield"
                },
                "QuickFile Invoice Number": {
                    "slug": "s4a2c197a9",
                    "field_type": "textfield"
                }
            }
        },
        ROLoginsTable: {
            "name": "RO Logins",
            "id": "652b1faba9847148f31cee2b",
            "structure": {
                "Password Correct": {
                    "slug": "s5ddc18498",
                    "field_type": "yesnofield"
                },
                "Record ID": {
                    "slug": "s5ec7aa36d",
                    "field_type": "recordidfield"
                },
                "Login": {
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
                "Password": {
                    "slug": "sb4e5173b6",
                    "field_type": "textfield"
                },
                "Generating Stations (to be removed)": {
                    "slug": "skjrn9vl",
                    "field_type": "linkedrecordfield"
                },
                "Login Type": {
                    "slug": "s31033b386",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "d06a096d-c6d5-4fb5-bc6a-5b3ff1cba09a",
                            "label": "Superuser"
                        },
                        {
                            "value": "65b2625f-97fb-49f1-8e37-0f46a952b19b",
                            "label": "Restricted"
                        }
                    ]
                },
                "Registered User": {
                    "slug": "scb73bd95a",
                    "field_type": "fullnamefield",
                    "choices": [
                        {
                            "value": "1",
                            "label": "Mr."
                        },
                        {
                            "value": "2",
                            "label": "Mrs."
                        }
                    ]
                },
                "Registered Email": {
                    "slug": "sc87fbb8dc",
                    "field_type": "emailfield"
                },
                "Link to Organisations (to be deleted)": {
                    "slug": "sx3lwx76",
                    "field_type": "linkedrecordfield"
                },
                "Link to Applications": {
                    "slug": "sbpcutpc",
                    "field_type": "linkedrecordfield"
                },
                "Notes from Client Conversation": {
                    "slug": "s3c223637d",
                    "field_type": "textfield"
                },
                "Account": {
                    "slug": "sdda7386a0",
                    "field_type": "linkedrecordfield"
                },
                "Username": {
                    "slug": "sc313607a4",
                    "field_type": "textfield"
                },
                "Registered Phone": {
                    "slug": "s3a7e85b22",
                    "field_type": "phonefield"
                },
                "station account (to be deleted)": {
                    "slug": "s1677a5a37",
                    "field_type": "lookupfield",
                    "target_field_type": "linkedrecordfield"
                }
            }
        },
        ROStationsTable: {
            "name": "Generating Stations",
            "id": "652b1faba9847148f31cee2a",
            "structure": {
                "Record ID": {
                    "slug": "s3df9eb05f",
                    "field_type": "recordidfield"
                },
                "Station": {
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
                "Accreditation date": {
                    "slug": "s2e1875a9c",
                    "field_type": "datefield"
                },
                "Logins": {
                    "slug": "s366a5e476",
                    "field_type": "linkedrecordfield"
                },
                "Oldest ROCs not issued": {
                    "slug": "sd2f8e15e8",
                    "field_type": "datefield"
                },
                "Oldest REGOs not issued": {
                    "slug": "sqih0nxo",
                    "field_type": "datefield"
                },
                "Certificate Transfers": {
                    "slug": "sk7wr6rs",
                    "field_type": "linkedrecordfield"
                },
                "ROCs Pending Transfer": {
                    "slug": "s6b4966b05",
                    "field_type": "numberfield"
                },
                "REGOs Pending Transfer": {
                    "slug": "srrvt53q",
                    "field_type": "numberfield"
                },
                "Statistics Last Updated": {
                    "slug": "s9c6cfc3d3",
                    "field_type": "datefield"
                },
                "Technology": {
                    "slug": "secb786709",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "8147e901-c3f0-4072-8dcd-6d1f9c169e67",
                            "label": "Gasification"
                        },
                        {
                            "value": "34f9fc90-d566-4942-9786-4fdd50af71d6",
                            "label": "Pyrolysis"
                        },
                        {
                            "value": "5a1a2bc7-df6e-4a62-90be-a19bacf9a990",
                            "label": "Advanced Gasification"
                        },
                        {
                            "value": "71ea8538-06ce-4a99-b5d9-177a644e8bc5",
                            "label": "Advanced Pyrolysis"
                        },
                        {
                            "value": "5514ad31-9604-44e5-85b0-f11e02077045",
                            "label": "Solar PV"
                        },
                        {
                            "value": "d52d8f9a-9c9e-4f6a-a607-c8668c0617b4",
                            "label": "Wind"
                        },
                        {
                            "value": "7951978c-446d-495c-b4c5-3732a50c91fa",
                            "label": "Anaerobic Digestion"
                        }
                    ]
                },
                "Installation": {
                    "slug": "sfz99ifo",
                    "field_type": "linkedrecordfield"
                },
                "Output Data Submissions": {
                    "slug": "sc887d3eba",
                    "field_type": "linkedrecordfield"
                },
                "Link to Tasks": {
                    "slug": "sdnwhsct",
                    "field_type": "linkedrecordfield"
                },
                "Link to Projects": {
                    "slug": "sanjaztj",
                    "field_type": "linkedrecordfield"
                },
                "TIC": {
                    "slug": "s43a238048",
                    "field_type": "numberfield"
                },
                "DNC": {
                    "slug": "s318a1bd8a",
                    "field_type": "numberfield"
                },
                "Link to Ongoing Support Services": {
                    "slug": "skrj7ch3",
                    "field_type": "linkedrecordfield"
                },
                "Certificate Transfer Agreements": {
                    "slug": "so19vvkc",
                    "field_type": "linkedrecordfield"
                },
                "Link to Applications and Amendments": {
                    "slug": "s2adqwt9",
                    "field_type": "linkedrecordfield"
                },
                "Station Name": {
                    "slug": "s67f82378a",
                    "field_type": "textfield"
                },
                "Account": {
                    "slug": "s3db6ec159",
                    "field_type": "linkedrecordfield"
                },
                "Application Submitted": {
                    "slug": "sf20975f1f",
                    "field_type": "datefield"
                },
                "Commissioning Date": {
                    "slug": "s3c8a38ff2",
                    "field_type": "datefield"
                },
                "Station Country": {
                    "slug": "s3e66db25b",
                    "field_type": "singleselectfield",
                    "choices": [
                        {
                            "value": "ceXlF",
                            "label": "Scotland"
                        },
                        {
                            "value": "CvJeK",
                            "label": "England"
                        },
                        {
                            "value": "RTrPj",
                            "label": "Northern Ireland"
                        }
                    ]
                },
                "Location": {
                    "slug": "s4de120c7e",
                    "field_type": "addressfield"
                },
                "OS Reference": {
                    "slug": "s527b8570a",
                    "field_type": "textfield"
                },
                "REGO Accredited": {
                    "slug": "s9d4dbdf9a",
                    "field_type": "yesnofield"
                },
                "Number of Meters": {
                    "slug": "s417616dd8",
                    "field_type": "numberfield"
                },
                "Fuel References": {
                    "slug": "s2jqjwbe",
                    "field_type": "linkedrecordfield"
                }
            }
        },
        ROAccountsTable: {
            "name": "RO Accounts",
            "id": "665dc5a9eb40433ff6407de9",
            "structure": {
                "Record ID": {
                    "slug": "sa9c38fd0a",
                    "field_type": "recordidfield"
                },
                "Account": {
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
                "RO Logins": {
                    "slug": "sa00d55bb5",
                    "field_type": "linkedrecordfield"
                },
                "Generator (Company) Name": {
                    "slug": "sde6082ea0",
                    "field_type": "textfield"
                },
                "REGOs Tradeable": {
                    "slug": "s3fafc589e",
                    "field_type": "numberfield"
                },
                "ROCs Tradeable": {
                    "slug": "seqhlzoz",
                    "field_type": "numberfield"
                },
                "Link to Stations": {
                    "slug": "smejneyu",
                    "field_type": "linkedrecordfield"
                },
                "Organisation Reference": {
                    "slug": "s44395f753",
                    "field_type": "textfield"
                },
                "Company Registration Number": {
                    "slug": "se11ecff7d",
                    "field_type": "textfield"
                },
                "Company Address": {
                    "slug": "s2cad6c1e7",
                    "field_type": "addressfield"
                },
                "Company Phone": {
                    "slug": "sd497e422e",
                    "field_type": "phonefield"
                },
                "Link to Logins": {
                    "slug": "saskuds9",
                    "field_type": "linkedrecordfield"
                }
            }
        }
    }
} as const