const tables = {
  "s5ch1upc": {
    "updatesTable": {
      "id": "663d3d23a1a0542114b1ac24",
      "name": "Updates",
      "structure": {
        "Updated Logins": {
          "label": "Updated Logins",
          "slug": "sb70b9b91a",
          "field_type": "linkedrecordfield"
        },
        "Date": {
          "label": "Update Complete",
          "slug": "sed70935b7",
          "field_type": "datefield"
        },
        "Run success": {
          "label": "Run success",
          "slug": "sda0be9742",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "aLEHA",
              "label": "Success"
            },
            {
              "value": "n3Z9L",
              "label": "Fail"
            }
          ]
        },
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Accreditation Depth": {
          "label": "Accreditation Depth",
          "slug": "sb756561f2",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "X48kg",
              "label": "Basic Accreditation"
            },
            {
              "value": "2HIsR",
              "label": " All Accreditation"
            },
            {
              "value": "ENcWc",
              "label": "Meter Support"
            }
          ]
        },
        "Updated Accounts": {
          "label": "Updated Accounts",
          "slug": "s078b2d75d",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Updated RHIs": {
          "label": "Updated RHIs",
          "slug": "sc8ff0756c",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Login Count": {
          "label": "Login Count",
          "slug": "sf2662a817",
          "field_type": "countfield"
        },
        "RHI Count": {
          "label": "RHI Count",
          "slug": "s93e777e47",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        }
      }
    },
    "configurationsTable": {
      "name": "Configuration",
      "id": "663d2313b4e7828a33b1ac07",
      "structure": {
        "Last Run": {
          "label": "Last Run Start",
          "slug": "s3d2ee46fa",
          "field_type": "datefield"
        },
        "Next Run": {
          "label": "Run Next After",
          "slug": "s8173a46ec",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Operation": {
          "label": "Operation",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Description": {
          "label": "Description",
          "slug": "s9136ed5f3",
          "field_type": "richtextareafield"
        },
        "Repeat Period": {
          "label": "Repeat Period",
          "slug": "sc2844b378",
          "field_type": "numberfield"
        },
        "Operation Type": {
          "label": "Operation Type",
          "slug": "se95441437",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "LlyDG",
              "label": "s"
            }
          ]
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "s2bd5fc78b",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        }
      }
    },
    "opportunitiesTable": {
      "name": "Opportunities",
      "id": "6500787202fb914f79f202e8",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Lead": {
          "label": "Lead",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
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
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Client": {
          "label": "Client",
          "slug": "s943fed992",
          "field_type": "linkedrecordfield"
        },
        "Job Sub-Types": {
          "label": "Job Sub-Types",
          "slug": "s313513ac7",
          "field_type": "linkedrecordfield"
        },
        "Internal Description": {
          "label": "Internal Description",
          "slug": "sb0f4d472c",
          "field_type": "textareafield"
        },
        "Quote Items": {
          "label": "Quote Items",
          "slug": "skzk108c",
          "field_type": "linkedrecordfield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "sfbc0d7f20",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Job Types": {
          "label": "Job Categories",
          "slug": "s9c5e03207",
          "field_type": "linkedrecordfield"
        },
        "Client QuickFile ID": {
          "label": "Client QuickFile ID",
          "slug": "sdd5286b17",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "QuickFile Quote ID": {
          "label": "QuickFile Quote ID",
          "slug": "s805e34706",
          "field_type": "textfield"
        },
        "QuickFile Quote Name": {
          "label": "QuickFile Quote Name",
          "slug": "s30b207278",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Source": {
          "label": "Source",
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
          "label": "Quote Value",
          "slug": "s4a275c046",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Reason opportunity lost?": {
          "label": "Reason for Problem?",
          "slug": "s424882fb8",
          "field_type": "multipleselectfield",
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
        "Last Contacted": {
          "label": "Last Contacted",
          "slug": "se4651b6df",
          "field_type": "datefield"
        },
        "Active Linked Projects": {
          "label": "Linked Projects",
          "slug": "s27d6f265d",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Link to Management Projects": {
          "label": "Link to Management Projects",
          "slug": "ssragwig",
          "field_type": "linkedrecordfield"
        },
        "Project in Process?": {
          "label": "Project in Process?",
          "slug": "sf6646f33c",
          "field_type": "yesnofield"
        },
        "Job Type Codes (System Field)": {
          "label": "Job Type Codes (System Field)",
          "slug": "s027f2d477",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Create QuickFile Quote": {
          "label": "Create QuickFile Quote",
          "slug": "sop7d023",
          "field_type": "buttonfield"
        },
        "QuickFile Quote": {
          "label": "QuickFile Quote",
          "slug": "s2744d4b1e",
          "field_type": "buttonfield"
        },
        "Last Action": {
          "label": "Last Action",
          "slug": "s88a9f8223",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Client set up in QuickFile": {
          "label": "Client set up in QuickFile",
          "slug": "s2b732454e",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Installation": {
          "label": "Installation",
          "slug": "sf19e980bb",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks": {
          "label": "Link to Tasks",
          "slug": "s03ad5d677",
          "field_type": "linkedrecordfield"
        },
        "Installation Lookup": {
          "label": "Installation Lookup",
          "slug": "s140cbd677",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Default Payment Terms": {
          "label": "Default Payment Terms",
          "slug": "s709a8c2eb",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Discount": {
          "label": "Discount",
          "slug": "s96948fa76",
          "field_type": "percentfield"
        },
        "Quote Issue and Expiry": {
          "label": "Quote Expiry",
          "slug": "s067bf3530",
          "field_type": "duedatefield"
        },
        "Quote Last Sent": {
          "label": "Quote Last Sent",
          "slug": "sc1e2c0556",
          "field_type": "datefield"
        },
        "Response Received": {
          "label": "Quote Accepted",
          "slug": "s871f5d6c9",
          "field_type": "datefield"
        },
        "Old Update QuickFile Quote": {
          "label": "Old Update QuickFile Quote",
          "slug": "siq98t44",
          "field_type": "buttonfield"
        },
        "Set Job Types (System Field)": {
          "label": "Set Job Types (System Field)",
          "slug": "sm15svik",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Term Days (System Field)": {
          "label": "Term Days (System Field)",
          "slug": "s284f31895",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Quote Hourly Rate": {
          "label": "Quote Hourly Rate",
          "slug": "se188db37d",
          "field_type": "formulafield",
          "target_field_type": "currencyfield"
        },
        "Minimum Hours": {
          "label": "Minimum Hours",
          "slug": "s9fcc3b743",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Customer Quote Link": {
          "label": "Customer Quote Link",
          "slug": "s041a953ab",
          "field_type": "linkfield"
        },
        "Invoice Number": {
          "label": "QuickFile Invoice Number",
          "slug": "se347a6af4",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Update QuickFile Quote": {
          "label": "Update QuickFile Quote",
          "slug": "sw17e7kf",
          "field_type": "buttonfield"
        },
        "Old Create QuickFile Quote": {
          "label": "Old Create QuickFile Quote",
          "slug": "sciy9t31",
          "field_type": "buttonfield"
        },
        "QuickFile Status": {
          "label": "QuickFile Status",
          "slug": "s32a14e9bb",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "6385dd5f-6dd7-408d-91fd-c3f4bee948cd",
              "label": "DRAFT"
            },
            {
              "value": "f012b98c-dc16-4b2f-ae86-83a3e11db73d",
              "label": "SENT"
            },
            {
              "value": "55a269c5-a07f-4748-b5ea-ad3be2e77a81",
              "label": "AGREED"
            },
            {
              "value": "9d6f4eed-9946-49e3-8eb9-36a9921b5cc5",
              "label": "DECLINED"
            },
            {
              "value": "4b8dfb1e-51b1-4668-a4fd-0f819ac9a668",
              "label": "CONVERTED"
            },
            {
              "value": "419350a7-0bcc-47eb-b345-da610c9b770e",
              "label": "DELETED"
            }
          ]
        },
        "Total QuickFile Quote Price": {
          "label": "Total QuickFile Quote Price",
          "slug": "s9417c1a41",
          "field_type": "currencyfield"
        },
        "Linked Support Services": {
          "label": "Linked Support Services",
          "slug": "s652620dcb",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Title Job Type Codes (System Field)": {
          "label": "Title Job Type Codes (System Field)",
          "slug": "srcp1lmf",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Calculated Status": {
          "label": "Calculated Status",
          "slug": "sa0c888280",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Status ID": {
          "label": "Status ID",
          "slug": "s141364472",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Calculated Status Matches Status": {
          "label": "Calculated Status Matches Status",
          "slug": "sph3rvox",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "SS Price - QF Price": {
          "label": "SS Price - QF Price",
          "slug": "s2e7f63774",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Linked Projects  in Setup": {
          "label": "Linked Projects  in Setup",
          "slug": "sioimftz",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Projects in Progress?": {
          "label": "Projects in Progress?",
          "slug": "s900000b07",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Linked Services in Setup": {
          "label": "Linked Services in Setup",
          "slug": "s6695cb876",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Project Deficit": {
          "label": "Project Deficit",
          "slug": "s550a7901f",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Service Deficit": {
          "label": "Service Deficit",
          "slug": "s120f41b7f",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Projects in Progress? Copy": {
          "label": "Projects in Progress? Copy",
          "slug": "s34n5mxg",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Billing Contact Emails": {
          "label": "Billing Contact Emails",
          "slug": "s3ebd3614a",
          "field_type": "lookupfield",
          "target_field_type": "emailfield"
        },
        "First Reminder Email sent": {
          "label": "First Reminder Email sent",
          "slug": "s0f3c9c0b1",
          "field_type": "datefield"
        },
        "Second Reminder Email sent": {
          "label": "Second Reminder Email sent",
          "slug": "sa59b33bc8",
          "field_type": "datefield"
        },
        "Link to Program Management": {
          "label": "Link to Program Management",
          "slug": "sgtqypxz",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "quoteItemsTable": {
      "name": "Quote Items",
      "id": "650168ce39fcf6ca2940a6fe",
      "structure": {
        "Quote Item Name": {
          "label": "Quote Item Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Job Sub-Type": {
          "label": "Job Sub-Type",
          "slug": "sc949a50f6",
          "field_type": "linkedrecordfield"
        },
        "Opportunity": {
          "label": "Opportunity",
          "slug": "sbf9458ebe",
          "field_type": "linkedrecordfield"
        },
        "Job Type Text (System Field)": {
          "label": "Job Type Text (System Field)",
          "slug": "sc647ed2c3",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "s6c2a26789",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Charged Hourly?": {
          "label": "Charged Hourly?",
          "slug": "sd9c921c76",
          "field_type": "yesnofield"
        },
        "Custom Price": {
          "label": "Price",
          "slug": "sea2a31ee9",
          "field_type": "currencyfield"
        },
        "Price": {
          "label": "Job Price",
          "slug": "s9640ecb64",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Job Code (System Field)": {
          "label": "Job Code (System Field)",
          "slug": "sd9c00d85f",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Line Item Description": {
          "label": "Line Item Description",
          "slug": "s30f4806c7",
          "field_type": "textareafield"
        },
        "Opportunity ID (System Field)": {
          "label": "Opportunity ID (System Field)",
          "slug": "sc65b92095",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "In Opportunity": {
          "label": "In Opportunity",
          "slug": "s9f6ab85c5",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Linked Projects": {
          "label": "Linked Projects",
          "slug": "s8ae4bmj",
          "field_type": "linkedrecordfield"
        },
        "QuickFile Quote ID": {
          "label": "Legacy QuickFile Quote ID",
          "slug": "sb782c2f07",
          "field_type": "textfield"
        },
        "Quantity": {
          "label": "Quantity",
          "slug": "s20b2ac406",
          "field_type": "numberfield"
        },
        "Includes Travel": {
          "label": "Includes Travel",
          "slug": "scca9b3e53",
          "field_type": "lookupfield",
          "target_field_type": "yesnofield"
        },
        "Service Terms": {
          "label": "Service Terms",
          "slug": "s8e2914f3d",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Quickfile Quote Name (System Field)": {
          "label": "Quickfile Quote Name (System Field)",
          "slug": "secfbf283a",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to Management Projects": {
          "label": "Link to Management Projects",
          "slug": "sceijfhd",
          "field_type": "linkedrecordfield"
        },
        "Job Sub-Type Text (System Field)": {
          "label": "Job Sub-Type Text (System Field)",
          "slug": "see124bc52",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Assigned to (System Field)": {
          "label": "Opportunity Lead (System Field)",
          "slug": "s9db9b7507",
          "field_type": "lookupfield",
          "target_field_type": "userfield"
        },
        "Sub Type Autonumber": {
          "label": "Sub Type Autonumber",
          "slug": "s5f064af81",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Client": {
          "label": "Client",
          "slug": "s95ff0c392",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Installation (System Field)": {
          "label": "Installation (System Field)",
          "slug": "s569b88c93",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Opportunity Description": {
          "label": "Opportunity Description",
          "slug": "s6d6f58d02",
          "field_type": "lookupfield",
          "target_field_type": "textareafield"
        },
        "Link to Support Services": {
          "label": "Linked Support Services",
          "slug": "szhxcchw",
          "field_type": "linkedrecordfield"
        },
        "Total Quoted Price": {
          "label": "Total Price",
          "slug": "sc86ea09bb",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Project Generated": {
          "label": "Project Generated",
          "slug": "s12ffd1659",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "Linked Projects Lookup": {
          "label": "Linked Projects Lookup",
          "slug": "s5f5d0899c",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Quoted Price": {
          "label": "Quoted Price",
          "slug": "sd4adbca96",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Discount": {
          "label": "Discount",
          "slug": "s5965dc855",
          "field_type": "lookupfield",
          "target_field_type": "percentfield"
        },
        "Default Service Terms": {
          "label": "Default Service Terms",
          "slug": "s70ae6a06d",
          "field_type": "formulafield",
          "target_field_type": "textareafield"
        },
        "Legacy Status": {
          "label": "Legacy Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "42eb0ef6-2e45-4b51-804b-39b12f737078",
              "label": "Quote Unsent"
            },
            {
              "value": "in_progress",
              "label": "Quote Sent"
            },
            {
              "value": "complete",
              "label": "Quote Accepted"
            },
            {
              "value": "ae24d594-4f42-4942-b6d7-d831eb7be181",
              "label": "Quote Expired"
            },
            {
              "value": "KK12u",
              "label": "Quote Declined"
            },
            {
              "value": "TEqhQ",
              "label": "Quote Deleted"
            }
          ]
        },
        "Opportunity Status": {
          "label": "Opportunity Status",
          "slug": "sd60f3caab",
          "field_type": "formulafield",
          "target_field_type": "statusfield"
        },
        "QuickFile Invoice Number": {
          "label": "QuickFile Invoice Number",
          "slug": "s704bbf106",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Support Services Lookup": {
          "label": "Support Services Lookup",
          "slug": "se062b6834",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Opportunity Lookup": {
          "label": "Opportunity Lookup",
          "slug": "sae9013a47",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "QuickFile Quote": {
          "label": "QuickFile Quote",
          "slug": "s8d6a2903c",
          "field_type": "buttonfield"
        },
        "Setup Linked Projects Lookup": {
          "label": "Setup Linked Projects Lookup",
          "slug": "swzc65cq",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Setup Support Services Lookup": {
          "label": "Setup Support Services Lookup",
          "slug": "s2o0a3ts",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Projects to be Generated": {
          "label": "Projects to be Generated",
          "slug": "sa3b9444da",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Services to be Generated": {
          "label": "Services to be Generated",
          "slug": "se3e2c866c",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        }
      }
    },
    "RHILoginsTable": {
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
    "RHIAccountsTable": {
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
    "RHIsTable": {
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
    "projectsTable": {
      "name": "Projects",
      "id": "64f6098f4f57d448c30044ed",
      "structure": {
        "Project Name": {
          "label": "Project Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Project Created": {
          "label": "Project Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Status": {
          "label": "Status",
          "slug": "s88e7dacd4",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "reUYi",
              "label": "Setup"
            },
            {
              "value": "in_progress",
              "label": "Live"
            },
            {
              "value": "aa8742cd-11d9-45a4-b178-aa05942d4e7e",
              "label": "Blocked"
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
              "value": "BwP9n",
              "label": "Dead Lead"
            }
          ]
        },
        "Client": {
          "label": "Client",
          "slug": "sf828da6c0",
          "field_type": "linkedrecordfield"
        },
        "Job Type Code (System Field)": {
          "label": "Job Type Code (System Field)",
          "slug": "s89e3b91f6",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Project Overview Old": {
          "label": "Project Overview Old",
          "slug": "s3a4f706df",
          "field_type": "richtextareafield"
        },
        "Job Sub-Type": {
          "label": "Job Sub-Type",
          "slug": "sf3d820a7f",
          "field_type": "linkedrecordfield"
        },
        "Project Folder Code": {
          "label": "Project Folder Code",
          "slug": "sa91201eb9",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to Problems": {
          "label": "Link to Problems",
          "slug": "s4velkzw",
          "field_type": "linkedrecordfield"
        },
        "Legacy Project Code": {
          "label": "Legacy Project Code",
          "slug": "s2c5e7d743",
          "field_type": "textfield"
        },
        "Legacy Job folder link": {
          "label": "Legacy Job folder link",
          "slug": "saf746c70c",
          "field_type": "textfield"
        },
        "Local Job Folder": {
          "label": "Local Job Folder",
          "slug": "sgf23n2h",
          "field_type": "buttonfield"
        },
        "Total Chargeable Time Tracked": {
          "label": "Total Chargeable Time Tracked",
          "slug": "s4c8be909d",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Outstanding Payment": {
          "label": "Outstanding Invoice Amount",
          "slug": "s587106504",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Total Non-chargeable Time Tracked": {
          "label": "Total Non-chargeable Time Tracked",
          "slug": "sc234dd494",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "% Tasks Complete": {
          "label": "% Tasks Complete",
          "slug": "sf49e099cb",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Current Time Cost": {
          "label": "Current Time Cost",
          "slug": "s89b4fbcfd",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Next Task Due": {
          "label": "Next Task Due",
          "slug": "s5c076a520",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "sb26ad886b",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Legacy Project Price": {
          "label": "Legacy Project Price",
          "slug": "s288856269",
          "field_type": "textfield"
        },
        "Initial Email Template": {
          "label": "Initial Email Template",
          "slug": "s92ff8890a",
          "field_type": "lookupfield"
        },
        "Follow-up Email Template": {
          "label": "Follow-up Email Template",
          "slug": "sbdaf83537",
          "field_type": "lookupfield"
        },
        "Late invoices": {
          "label": "Late invoices",
          "slug": "s6a9d62800",
          "field_type": "lookupfield"
        },
        "Quote": {
          "label": "Quote",
          "slug": "sf78c857f5",
          "field_type": "linkedrecordfield"
        },
        "Milestone": {
          "label": "Milestone",
          "slug": "s6ea69296a",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "315gM",
              "label": "0. Milestone 0"
            },
            {
              "value": "backlog",
              "label": "1. Initiation"
            },
            {
              "value": "in_progress",
              "label": "2. Finalisation"
            },
            {
              "value": "ready_for_review",
              "label": "3. Submission"
            },
            {
              "value": "Zy5Nf",
              "label": "4. External Approval"
            },
            {
              "value": "Jn0Hn",
              "label": "5. Job Completion"
            }
          ]
        },
        "Project Lead": {
          "label": "Project Lead",
          "slug": "s32c34a296",
          "field_type": "userfield"
        },
        "Project Name (System Field)": {
          "label": "Project Name (System Field)",
          "slug": "s910e48bd5",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Internal Project Name": {
          "label": "Internal Project Name",
          "slug": "s5438714b9",
          "field_type": "textfield"
        },
        "(old) Last Communication": {
          "label": "(old) Last Communication",
          "slug": "sfda00eb96",
          "field_type": "datefield"
        },
        "Action": {
          "label": "Action",
          "slug": "saf903f71f",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "ready_for_review",
              "label": "With YES"
            },
            {
              "value": "complete",
              "label": "Waiting on 3rd Party"
            },
            {
              "value": "otKNF",
              "label": "Waiting on Regulator"
            }
          ]
        },
        "Linked Travel Form": {
          "label": "Linked Travel Form",
          "slug": "sjt3naco",
          "field_type": "linkedrecordfield"
        },
        "Milestone (from tasks)": {
          "label": "Milestone (from tasks)",
          "slug": "s0519bfc9b",
          "field_type": "formulafield",
          "target_field_type": "statusfield"
        },
        "RHI": {
          "label": "RHI",
          "slug": "s93fbb49b6",
          "field_type": "linkedrecordfield"
        },
        "RO Generator": {
          "label": "RO Generator",
          "slug": "sebc175246",
          "field_type": "linkedrecordfield"
        },
        "Project Contacts": {
          "label": "Project Contacts",
          "slug": "s4318eac37",
          "field_type": "linkedrecordfield"
        },
        "RHI Login ID": {
          "label": "RHI Login ID",
          "slug": "sc61d5ce25",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Installation (from quote)": {
          "label": "Installation (from quote)",
          "slug": "s56a14741d",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Dropbox folder location": {
          "label": "Dropbox folder location",
          "slug": "s87d0ba68f",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Installation Name": {
          "label": "Installation Name",
          "slug": "s54883f798",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Legacy installation name": {
          "label": "Legacy installation name",
          "slug": "s404d19180",
          "field_type": "textfield"
        },
        "Old Account": {
          "label": "Old Account",
          "slug": "sc9cf8960f",
          "field_type": "linkedrecordfield"
        },
        "New Account": {
          "label": "New Account",
          "slug": "szula6z0",
          "field_type": "linkedrecordfield"
        },
        "Legacy Who Is Paying?": {
          "label": "Legacy Who Is Paying?",
          "slug": "s856626e67",
          "field_type": "textfield"
        },
        "RHI logins": {
          "label": "RHI logins",
          "slug": "sd1ede30da",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Local Explorer Link": {
          "label": "Local Explorer Link",
          "slug": "sdbf9f5fe9",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Tinyurl link": {
          "label": "Tinyurl link",
          "slug": "s9d718cf7b",
          "field_type": "textfield"
        },
        "Blocking RHI Submissions": {
          "label": "Blocking RHI Submissions",
          "slug": "s458f3e77d",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Link to Management Projects": {
          "label": "Link to Management Projects",
          "slug": "sf14641692",
          "field_type": "linkedrecordfield"
        },
        "RHI Accreditation Status": {
          "label": "RHI Accreditation Status",
          "slug": "s2b384891b",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "RHI Application Status": {
          "label": "RHI Application Status",
          "slug": "s1ea8e9f8f",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "Client and Contact Emails": {
          "label": "Client and Contact Emails",
          "slug": "s2b05571aa",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "NEW Project Contacts": {
          "label": "NEW Project Contacts",
          "slug": "sme7amif",
          "field_type": "linkedrecordfield"
        },
        "Project Updates": {
          "label": "Project Updates",
          "slug": "s9yfvzw4",
          "field_type": "linkedrecordfield"
        },
        "Project Overview": {
          "label": "Project Overview",
          "slug": "sbgryirq",
          "field_type": "textareafield"
        },
        "Expected Income": {
          "label": "Expected Income",
          "slug": "s33683d8c7",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Accreditation Status": {
          "label": "Accreditation Status",
          "slug": "s48b51e4fd",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "Link to Invoice Items": {
          "label": "Invoice Items",
          "slug": "shbqnk8c",
          "field_type": "linkedrecordfield"
        },
        "Client Lookup": {
          "label": "Client Lookup",
          "slug": "sb240034c4",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Travel Price": {
          "label": "Travel Price",
          "slug": "s2573db4e7",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Link to High Priority Clients": {
          "label": "Link to High Priority Clients",
          "slug": "srud0crw",
          "field_type": "linkedrecordfield"
        },
        "Work Started": {
          "label": "Work Started",
          "slug": "s7c844a190",
          "field_type": "datefield"
        },
        "Project Submitted": {
          "label": "Project Submitted",
          "slug": "sea91dab79",
          "field_type": "datefield"
        },
        "Contains Outdated Values": {
          "label": "Contains Outdated Values",
          "slug": "sc9c81e63a",
          "field_type": "yesnofield"
        },
        "Client ID": {
          "label": "Client ID",
          "slug": "sf6b62d819",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Project Tasks": {
          "label": "Project Tasks",
          "slug": "s6c9e47694",
          "field_type": "linkedrecordfield"
        },
        "RO Logins": {
          "label": "RO Logins",
          "slug": "swompkpv",
          "field_type": "formulafield"
        },
        "Days to Complete": {
          "label": "Days to Complete",
          "slug": "s641cb7901",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Project Installation Type": {
          "label": "Project Installation Type",
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
          "label": "Installation",
          "slug": "sbe56543a8",
          "field_type": "linkedrecordfield"
        },
        "Link to Action Changes": {
          "label": "Link to Action Changes",
          "slug": "sfanh85l",
          "field_type": "linkedrecordfield"
        },
        "Latest Update": {
          "label": "Latest Update",
          "slug": "s7a61cfe51",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "RHI Username": {
          "label": "RHI Username",
          "slug": "sf3c39acca",
          "field_type": "formulafield",
          "target_field_type": "recordtitlefield"
        },
        "RHI Password": {
          "label": "RHI Password",
          "slug": "s7f7e353c7",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Woodsure Number": {
          "label": "Woodsure Number",
          "slug": "s030a5e628",
          "field_type": "linkedrecordfield"
        },
        "Link to Site visit form": {
          "label": "Link to Site visit form",
          "slug": "sgf2rra6",
          "field_type": "linkedrecordfield"
        },
        "Opportunity": {
          "label": "Opportunity",
          "slug": "s1f118fe1e",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Legacy Project Status": {
          "label": "Legacy Project Status",
          "slug": "s87b8d29b4",
          "field_type": "formulafield",
          "target_field_type": "statusfield"
        },
        "Project Information Filled": {
          "label": "Project Information Filled",
          "slug": "s98d31d9ff",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Project Billing Type": {
          "label": "Project Billing Type",
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
          "label": "Project Billing Type (System Field)",
          "slug": "s46f535e7e",
          "field_type": "formulafield",
          "target_field_type": "singleselectfield"
        },
        "Update Preview Lookup": {
          "label": "Update Preview Lookup",
          "slug": "sc377aee26",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Status Last Modified": {
          "label": "Status Last Modified",
          "slug": "stj1gojo",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Months Old": {
          "label": "Months Old",
          "slug": "s9fdfcdb12",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Recent Changes from YES to Regulator": {
          "label": "Recent Changes from YES to Regulator",
          "slug": "s872549cd5",
          "field_type": "countfield"
        },
        "Legacy Information Filled": {
          "label": "Legacy Information Filled",
          "slug": "s360500173",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Link to Program Management": {
          "label": "Link to Program Management",
          "slug": "s6mpqkva",
          "field_type": "linkedrecordfield"
        },
        "Link to Applications and Amendments": {
          "label": "Link to Applications and Amendments",
          "slug": "smc5227b",
          "field_type": "linkedrecordfield"
        },
        "Active Support Service Manager": {
          "label": "Active Support Service Manager",
          "slug": "sd06c97ab6",
          "field_type": "lookupfield",
          "target_field_type": "userfield"
        },
        "Active Support Service": {
          "label": "Active Support Service",
          "slug": "sumt1fi5",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Project Email Templates": {
          "label": "Project Email Templates",
          "slug": "sb99c60496",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Final Invoice Items": {
          "label": "Final Invoice Items",
          "slug": "s54f8f570c",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Create Final Invoice": {
          "label": "Create Final Invoice",
          "slug": "s0b420e140",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "bnkkn",
              "label": "Don't Create"
            },
            {
              "value": "H30HI",
              "label": "Create Final Invoice"
            },
            {
              "value": "mKpCV",
              "label": "Final Invoice Created"
            }
          ]
        },
        "Overdue Invoices": {
          "label": "Overdue Invoices",
          "slug": "s45bf638c8",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Overdue Invoice Acknowledgement": {
          "label": "Overdue Invoice Acknowledgement",
          "slug": "s9b3703941",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "MlabN",
              "label": "Acknowledge overdue invoce"
            }
          ]
        }
      }
    },
    "metricsTable": {
      "name": "Staff Member Metrics",
      "id": "66cdf0118258a1e146782909",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Total Opportunities Quoted": {
          "label": "Total Opportunities Quoted",
          "slug": "s06830d4c5",
          "field_type": "numberfield"
        },
        "Total Opportunities Converted": {
          "label": "Total Opportunities Converted",
          "slug": "s205f19177",
          "field_type": "numberfield"
        },
        "Total Live Projects": {
          "label": "Total Live Projects",
          "slug": "s6ce5dcadc",
          "field_type": "numberfield"
        },
        "Total Live Amendment Projects": {
          "label": "Total Live Amendment Projects",
          "slug": "sdb8924599",
          "field_type": "numberfield"
        },
        "Total Live ASA Projects": {
          "label": "Total Live ASA Projects",
          "slug": "s656725ec6",
          "field_type": "numberfield"
        },
        "Total Live Woodsure Projects": {
          "label": "Total Live Woodsure Projects",
          "slug": "s986dfc96a",
          "field_type": "numberfield"
        },
        "Live Woodsure Projects with YES": {
          "label": "Live Woodsure Projects with YES",
          "slug": "sdf823d88c",
          "field_type": "numberfield"
        },
        "Total Live FMS Projects": {
          "label": "Total Live FMS Projects",
          "slug": "s94a282082",
          "field_type": "numberfield"
        },
        "Live FMS Projects with YES": {
          "label": "Live FMS Projects with YES",
          "slug": "sb0365e197",
          "field_type": "numberfield"
        },
        "Projects Submitted (past week)": {
          "label": "Projects Submitted (past week)",
          "slug": "sa247625ab",
          "field_type": "numberfield"
        },
        "New Projects (past week)": {
          "label": "New Projects (past week)",
          "slug": "s0e1d18857",
          "field_type": "numberfield"
        },
        "Live Projects With Regulator": {
          "label": "Live Projects With Regulator",
          "slug": "sf500b4fef",
          "field_type": "numberfield"
        },
        "Live ASA Projects with YES": {
          "label": "Live ASA Projects with YES",
          "slug": "s71b2b7e0a",
          "field_type": "numberfield"
        },
        "Total Live Tasks": {
          "label": "Total Live Tasks",
          "slug": "s528564e04",
          "field_type": "numberfield"
        },
        "Total Live Hard Deadlines": {
          "label": "Total Live Hard Deadlines",
          "slug": "s693329b18",
          "field_type": "numberfield"
        },
        "Total Overdue Invoices": {
          "label": "Total Overdue Invoices",
          "slug": "s5d4f88abf",
          "field_type": "numberfield"
        },
        "Total Unsent Invoice Items": {
          "label": "Total Unsent Invoice Items",
          "slug": "s85873af2f",
          "field_type": "numberfield"
        },
        "Date": {
          "label": "Date",
          "slug": "s7e63a9fa6",
          "field_type": "datefield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "se9205aa11",
          "field_type": "userfield"
        },
        "Live Amendment Projects with YES": {
          "label": "Live Amendment Projects with YES",
          "slug": "s8cf5965c6",
          "field_type": "numberfield"
        },
        "Total RHI Support Services": {
          "label": "Total RHI Support Services",
          "slug": "se7d9a7e04",
          "field_type": "numberfield"
        },
        "Support Services Window Open": {
          "label": "Support Services Window Open",
          "slug": "sd280c2ffe",
          "field_type": "numberfield"
        },
        "Support Services Window Open Soon": {
          "label": "Support Services Window Open Soon",
          "slug": "swu6kxej",
          "field_type": "numberfield"
        },
        "Data Issue Services": {
          "label": "Data Issue Services",
          "slug": "s5bc1ad486",
          "field_type": "numberfield"
        },
        "Services Awaiting Submission": {
          "label": "Services Awaiting Submission",
          "slug": "s040d5336e",
          "field_type": "numberfield"
        },
        "Open Comment Services": {
          "label": "Open Comment Services",
          "slug": "saa40377e5",
          "field_type": "numberfield"
        },
        "First Created (Including Time)": {
          "label": "First Created (Including Time)",
          "slug": "saf1ce7aa3",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Metrics Junction": {
          "label": "Metrics Junction",
          "slug": "s156de04c8",
          "field_type": "linkedrecordfield"
        },
        "Metric Date": {
          "label": "Metric Date",
          "slug": "sba4d2670a",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "New Tasks (Past Week)": {
          "label": "New Tasks (Past Week)",
          "slug": "s3c726e3ff",
          "field_type": "numberfield"
        },
        "Assignee": {
          "label": "Assignee",
          "slug": "scda06d197",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Total Incomplete Projects": {
          "label": "Total Incomplete Projects",
          "slug": "s101bbed99",
          "field_type": "numberfield"
        },
        "Days Ago": {
          "label": "Days Ago",
          "slug": "s17e67985c",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        }
      }
    },
    "tasksTable": {
      "name": "Tasks",
      "id": "64f6098f4f57d448c3004519",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Subtasks": {
          "label": "Subtasks",
          "slug": "sa5fbbd37c",
          "field_type": "checklistfield"
        },
        "Status": {
          "label": "Status",
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
          "label": "Hard Due Date",
          "slug": "s2b170d112",
          "field_type": "duedatefield"
        },
        "Due Date Grouping (System Field)": {
          "label": "Due Date Grouping (System Field)",
          "slug": "se4120b568",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Estimated Due Date": {
          "label": "Estimated Due Date",
          "slug": "s6f94d48c2",
          "field_type": "duedatefield"
        },
        "Site": {
          "label": "Site",
          "slug": "s8c9e4d2ca",
          "field_type": "linkedrecordfield"
        },
        "Installation Name": {
          "label": "Installation Name",
          "slug": "s0a57bdc74",
          "field_type": "linkedrecordfield"
        },
        "Task Detail": {
          "label": "Task Detail",
          "slug": "s5f143ae1a",
          "field_type": "richtextareafield"
        },
        "Due Date (Soonest)": {
          "label": "Due Date (Soonest)",
          "slug": "s99be6c0bc",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Time Cost (Timesheets)": {
          "label": "Time Cost (Timesheets)",
          "slug": "sa6ab3edfc",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Timesheet Entries": {
          "label": "Timesheet Entries",
          "slug": "sirtahsi",
          "field_type": "linkedrecordfield"
        },
        "Task": {
          "label": "Task",
          "slug": "sf07e8dbb2",
          "field_type": "textfield"
        },
        "Task Lead": {
          "label": "Task Lead",
          "slug": "szm6g7jn",
          "field_type": "userfield"
        },
        "Total Time Tracked (Timesheets)": {
          "label": "Total Time Tracked (Timesheets)",
          "slug": "s9999c6832",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Time Spent on task": {
          "label": "Time Spent on task",
          "slug": "s6572689e8",
          "field_type": "timetrackingfield"
        },
        "Track time?": {
          "label": "Track time?",
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
          "label": "Record ID (System Field)",
          "slug": "s23c37cbe1",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Attachment": {
          "label": "Attachment",
          "slug": "s822c1d881",
          "field_type": "filefield"
        },
        "Task Template Details (System Field)": {
          "label": "Task Template Details (System Field)",
          "slug": "s6772c3254",
          "field_type": "linkedrecordfield"
        },
        "Attachment (View Only)": {
          "label": "Attachment (View Only)",
          "slug": "s9e6732f09",
          "field_type": "lookupfield",
          "target_field_type": "filefield"
        },
        "Link to Management Projects": {
          "label": "Link to Management Projects",
          "slug": "s3jf8yz0",
          "field_type": "linkedrecordfield"
        },
        "Deadline List Flag": {
          "label": "Deadline List Flag",
          "slug": "s4624b61be",
          "field_type": "yesnofield"
        },
        "Choose title": {
          "label": "Choose title",
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
          "label": "RHI Number",
          "slug": "s9bb4ebba9",
          "field_type": "linkedrecordfield"
        },
        "RO Generator": {
          "label": "RO Generator",
          "slug": "s3c762620d",
          "field_type": "linkedrecordfield"
        },
        "Estimated Due Date (Form Field)": {
          "label": "Hard Due Date (Form Field)*",
          "slug": "s925af62dd",
          "field_type": "datefield"
        },
        "Hard Due Date (Form Field)": {
          "label": "Hard Due Date (Form Field)",
          "slug": "s10mz10j",
          "field_type": "datefield"
        },
        "Task Name (System Field)": {
          "label": "Task Name (System Field)",
          "slug": "s1ef201c6a",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Extra Information": {
          "label": "Extra Information",
          "slug": "s6d76ae0ab",
          "field_type": "textfield"
        },
        "Date Complete": {
          "label": "Date Complete",
          "slug": "s8f98aece6",
          "field_type": "datefield"
        },
        "Type of task": {
          "label": "Type of task",
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
          "label": "Contact",
          "slug": "s3227287b0",
          "field_type": "linkedrecordfield"
        },
        "Included on Deadline List (System Field)": {
          "label": "Included on Deadline List (System Field)",
          "slug": "sd195c52e9",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Due Date is internal (system field)": {
          "label": "Due Date is internal (system field)",
          "slug": "s59088446c",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Hard Due Date (Read Only)": {
          "label": "Hard Due Date (Read Only)",
          "slug": "sc9a6592c2",
          "field_type": "formulafield",
          "target_field_type": "duedatefield"
        },
        "Estimated Due Date (Read Only)": {
          "label": "Estimated Due Date (Read Only)",
          "slug": "s678084c13",
          "field_type": "formulafield",
          "target_field_type": "duedatefield"
        },
        "Milestone": {
          "label": "Milestone",
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
          "label": "Earliest task milestone",
          "slug": "s245d42100",
          "field_type": "formulafield",
          "target_field_type": "statusfield"
        },
        "Timeline view due date (System Field)": {
          "label": "Timeline view due date (System Field)",
          "slug": "s218a49cc0",
          "field_type": "datefield"
        },
        "Job sub-type": {
          "label": "Job sub-type",
          "slug": "s89f23add2",
          "field_type": "linkedrecordfield"
        },
        "Link to Opportunities": {
          "label": "Link to Opportunities",
          "slug": "s6djdsxn",
          "field_type": "linkedrecordfield"
        },
        "Status Group": {
          "label": "Status Group",
          "slug": "s42a7bf1f6",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to Meetings": {
          "label": "Link to Meetings",
          "slug": "s29ngt25",
          "field_type": "linkedrecordfield"
        },
        "Problem": {
          "label": "Problem",
          "slug": "sl5ht9rm",
          "field_type": "linkedrecordfield"
        },
        "Urgency": {
          "label": "Urgency",
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
          "label": "Improvement",
          "slug": "ss7wyh0e",
          "field_type": "linkedrecordfield"
        },
        "Link to High Priority Clients": {
          "label": "Link to High Priority Clients",
          "slug": "swg759pz",
          "field_type": "linkedrecordfield"
        },
        "Project": {
          "label": "Project",
          "slug": "s20vbooq",
          "field_type": "linkedrecordfield"
        },
        "Updates from Project": {
          "label": "Updates from Project",
          "slug": "s3ol0zty",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Support Service": {
          "label": "Support Service",
          "slug": "s0ab4lre",
          "field_type": "linkedrecordfield"
        },
        "RHI Status Updates": {
          "label": "RHI Status Updates",
          "slug": "s0vvhlo3",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard": {
          "label": "Link to Craig Dashboard",
          "slug": "she4mkx1",
          "field_type": "linkedrecordfield"
        },
        "Link to Gregor Dashboard": {
          "label": "Link to Gregor Dashboard",
          "slug": "sapvmw6r",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 1": {
          "label": "Link to Craig Dashboard 1",
          "slug": "sdsq3yrs",
          "field_type": "linkedrecordfield"
        },
        "Link to Trudy Dashboard 1": {
          "label": "Link to Trudy Dashboard 1",
          "slug": "sy9ls3md",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 2": {
          "label": "Link to Craig Dashboard 2",
          "slug": "sm3berx9",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 3": {
          "label": "Link to Craig Dashboard 3",
          "slug": "s17r7vun",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 4": {
          "label": "Link to Craig Dashboard 4",
          "slug": "s2yl9p4l",
          "field_type": "linkedrecordfield"
        },
        "Program": {
          "label": "Program",
          "slug": "sidf4t97",
          "field_type": "linkedrecordfield"
        },
        "Link to Adam Dashboard": {
          "label": "Link to Adam Dashboard",
          "slug": "sl5sgu71",
          "field_type": "linkedrecordfield"
        },
        "Client": {
          "label": "Client",
          "slug": "simbkpx5",
          "field_type": "linkedrecordfield"
        },
        "Link to Gregor Dashboard 1": {
          "label": "Link to Gregor Dashboard 1",
          "slug": "s99pdnxo",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "supportServicesTable": {
      "name": "Support Services",
      "id": "6616a080f17f6389848d38d0",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "RHI": {
          "label": "RHI",
          "slug": "s84dfbfaae",
          "field_type": "linkedrecordfield"
        },
        "RO Generator": {
          "label": "RO Generator",
          "slug": "s4664a17d0",
          "field_type": "linkedrecordfield"
        },
        "Legacy Service Start": {
          "label": "Legacy Service Start",
          "slug": "s711e0f6c5",
          "field_type": "datefield"
        },
        "Job Sub-Type": {
          "label": "Job Sub-Type",
          "slug": "sb5e285126",
          "field_type": "linkedrecordfield"
        },
        "RO Submissions": {
          "label": "RO Submissions",
          "slug": "s69073a333",
          "field_type": "linkedrecordfield"
        },
        "Installation Name": {
          "label": "Installation Name",
          "slug": "s90c1b09ce",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Manager": {
          "label": "Manager",
          "slug": "s4891236cd",
          "field_type": "userfield"
        },
        "TinyURL dropbox link": {
          "label": "TinyURL dropbox link",
          "slug": "se2b1d6760",
          "field_type": "textfield"
        },
        "Local Folder": {
          "label": "Local Folder",
          "slug": "sc7952506b",
          "field_type": "buttonfield"
        },
        "Status": {
          "label": "Status",
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
          "label": "Link to RHI Submissions",
          "slug": "sf80nbpd",
          "field_type": "linkedrecordfield"
        },
        "RHI Installation Name": {
          "label": "RHI Installation Name",
          "slug": "sd153d7e7a",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "sc591e2fdc",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Job Type": {
          "label": "Job Category",
          "slug": "s5e166cf4d",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "RHI Window Open": {
          "label": "RHI Window Open",
          "slug": "sac96473a5",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "RHI Window Open Within 2 Weeks": {
          "label": "RHI Window Open Within 2 Weeks",
          "slug": "sq98hz40",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Next Due Submission": {
          "label": "Next Due Submission",
          "slug": "s68e84e107",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Submission Due?": {
          "label": "Submission Due?",
          "slug": "s7a66d9cae",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Client": {
          "label": "Client",
          "slug": "sdc4d7db0b",
          "field_type": "linkedrecordfield"
        },
        "Quote": {
          "label": "Quote",
          "slug": "s749521306",
          "field_type": "linkedrecordfield"
        },
        "AS Username": {
          "label": "RHI AS Username",
          "slug": "s5ohq1ag",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "AS Password": {
          "label": "RHI AS Password",
          "slug": "s685cecfc6",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Client Emails": {
          "label": "Client Emails",
          "slug": "s34433fdd0",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Service Contact Emails Lookup": {
          "label": "Service Contact Emails Lookup",
          "slug": "s2f074abd6",
          "field_type": "lookupfield",
          "target_field_type": "emailfield"
        },
        "Status Grouping": {
          "label": "Status Grouping",
          "slug": "sf61834160",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Service Contact Emails": {
          "label": "Service Contact Emails",
          "slug": "s915de1be8",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Service Contact Emails Search String": {
          "label": "Service Contact Emails Search String",
          "slug": "sfomizhf",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Service Start": {
          "label": "Service Start",
          "slug": "scd4d0581e",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "RHI Blocking Projects": {
          "label": "RHI Blocking Projects",
          "slug": "s2phg3zs",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Latest RHI Submission End Date": {
          "label": "Latest RHI Submission End Date",
          "slug": "s7ccdfb9c5",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "First Unreviewed or Data Issue RHI Submission": {
          "label": "First Unreviewed or Data Issue RHI Submission",
          "slug": "s230042c42",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Next Due Quarter": {
          "label": "Next Due Quarter",
          "slug": "sb02a0bcbc",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Quarter Ends": {
          "label": "Quarter Ends",
          "slug": "s0f4a66230",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "RHI Application Status": {
          "label": "RHI Application Status",
          "slug": "scf04e32bf",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "RHI Accreditation Status": {
          "label": "RHI Accreditation Status",
          "slug": "s3abf846fc",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "Link to Problems": {
          "label": "Link to Problems",
          "slug": "sa5iy97z",
          "field_type": "linkedrecordfield"
        },
        "Service Contacts": {
          "label": "Service Contacts",
          "slug": "smckefcf",
          "field_type": "linkedrecordfield"
        },
        "Sister Services": {
          "label": "Sister Services",
          "slug": "sf7c1e7ee4",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Service Has Sister Services": {
          "label": "Service Has Sister Services",
          "slug": "s466ac2d26",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Late Data Chase Emails": {
          "label": "Late Data Chase Emails",
          "slug": "sb7882fca7",
          "field_type": "lookupfield",
          "target_field_type": "emailfield"
        },
        "Latest Submission Start Date": {
          "label": "Latest RHI Submission Start Date",
          "slug": "s70288d16c",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Last RHI portal update": {
          "label": "Last RHI portal update",
          "slug": "s3efa2c264",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "First Data Issue group name (System Field)": {
          "label": "First Data Issue group name (System Field)",
          "slug": "sb686f77cf",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Next Quarter group name (System Field)": {
          "label": "Next Quarter group name (System Field)",
          "slug": "s919bcc0d1",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "RHI Technology": {
          "label": "RHI Technology",
          "slug": "s6849ecec0",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "Submission Report Emails": {
          "label": "Submission Report Emails",
          "slug": "s8a5808c7c",
          "field_type": "lookupfield",
          "target_field_type": "emailfield"
        },
        "Tier 1 cut-off": {
          "label": "Tier 1 cut-off (MWh)",
          "slug": "s00dbb04e4",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Sustainability Reporting": {
          "label": "Sustainability Reporting",
          "slug": "s70d9f0527",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "FMS": {
          "label": "FMS",
          "slug": "sbdb648ee5",
          "field_type": "filefield"
        },
        "FMS Approval Email": {
          "label": "FMS Approval Email",
          "slug": "sef69d9a58",
          "field_type": "filefield"
        },
        "FMS Approval": {
          "label": "FMS Approval",
          "slug": "s0bc1d45f7",
          "field_type": "datefield"
        },
        "Current BSL Number": {
          "label": "Current BSL Number",
          "slug": "s3a1b300cf",
          "field_type": "textfield"
        },
        "Approved Fuel Types": {
          "label": "Approved Fuel Types",
          "slug": "syvqborr",
          "field_type": "linkedrecordfield"
        },
        "Date Left Service": {
          "label": "Date Left Service",
          "slug": "s11da23dbe",
          "field_type": "datefield"
        },
        "Reason For Leaving": {
          "label": "Reason For Leaving",
          "slug": "s21f39ed43",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "781b2278-743c-4ed4-a23e-aa0af7693fa5",
              "label": "Sold boilers"
            }
          ]
        },
        "Using heat from another installation?": {
          "label": "Using heat from another installation?",
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
          "label": "Paired Installation",
          "slug": "s5af27df46",
          "field_type": "linkedrecordfield"
        },
        "Client Lookup": {
          "label": "Client Lookup",
          "slug": "s1dd3f5b62",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "sa26451a92",
          "field_type": "linkedrecordfield"
        },
        "Folder Code": {
          "label": "Folder Code",
          "slug": "s76eba2fc8",
          "field_type": "textfield"
        },
        "Legacy Cumulative EHO": {
          "label": "Legacy Cumulative EHO",
          "slug": "sad700597f",
          "field_type": "numberfield"
        },
        "Legacy Woodsure Number": {
          "label": "Legacy Woodsure Number",
          "slug": "s96b1e558c",
          "field_type": "textfield"
        },
        "Legacy Notes": {
          "label": "Legacy Notes",
          "slug": "sb19be2999",
          "field_type": "textareafield"
        },
        "Approved GHG Calculation": {
          "label": "Approved GHG Calculation",
          "slug": "s4d43a8544",
          "field_type": "filefield"
        },
        "Auxiliary Fossil Fuel": {
          "label": "Auxiliary Fossil Fuel",
          "slug": "sbf382a409",
          "field_type": "yesnofield"
        },
        "Data Issue Submissions": {
          "label": "Data Issue Submissions",
          "slug": "sb3fc3944e",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Generate first submission?": {
          "label": "Generate first submission?",
          "slug": "s8c69c3a0d",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "zk63L",
              "label": "Not generated"
            },
            {
              "value": "CQVOh",
              "label": "Generate submission"
            },
            {
              "value": "7TsTB",
              "label": "Generated"
            }
          ]
        },
        "Current Cumulative EHO (MWh)": {
          "label": "Current Cumulative EHO (MWh)",
          "slug": "s6f4cca015",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Under Tier 1 Limit": {
          "label": "Under Tier 1 Limit",
          "slug": "s65051bb43",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "What should I run?": {
          "label": "What should I run?",
          "slug": "sff7c8cd3e",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Site": {
          "label": "Site",
          "slug": "sd0fbf5df0",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Current Quarter": {
          "label": "Current Quarter",
          "slug": "s7s0nxoy",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Latest RHI Submission": {
          "label": "Latest RHI Submission",
          "slug": "s7c8451313",
          "field_type": "lookupfield",
          "target_field_type": "datefield"
        },
        "Days Since Last RHI Submission": {
          "label": "Days Since Last RHI Submission",
          "slug": "s6035f7458",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Service Invoice Template": {
          "label": "Service Invoice Template",
          "slug": "s88c5802fd",
          "field_type": "linkedrecordfield"
        },
        "Overdue Invoice Acknowledgement": {
          "label": "Overdue Invoice Acknowledgement",
          "slug": "s3f7c92b4f",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "4y4xB",
              "label": "Acknowledge overdue invoce"
            }
          ]
        },
        "Overdue Invoices": {
          "label": "Overdue Invoices",
          "slug": "s242aeaf68",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Legacy Latest Month Submitted": {
          "label": "Legacy Latest Month Submitted",
          "slug": "s6a67f3b71",
          "field_type": "datefield"
        },
        "Legacy Latest ROE": {
          "label": "Legacy Latest ROE",
          "slug": "sd21579061",
          "field_type": "datefield"
        },
        "Legacy Transferee Number": {
          "label": "Legacy Transferee Number",
          "slug": "sb5a4c2077",
          "field_type": "textfield"
        },
        "Fuel Data Source": {
          "label": "Fuel Data Source",
          "slug": "sf965aa3a7",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "1f54a0b7-f6a7-44c5-bbb7-0944692d1b8f",
              "label": "AD: Gas volume meter and Apportion tool"
            },
            {
              "value": "f6c35554-8a6a-430f-92ee-d3a8ce944dcb",
              "label": "AD: Gas volume meter and back calc"
            },
            {
              "value": "3d8d11bd-fb45-424d-b610-ea884120acb4",
              "label": "Client-specific"
            },
            {
              "value": "4cc9ebc1-bfb7-49bc-9677-0105de5794c7",
              "label": "FIT"
            },
            {
              "value": "79432cb1-0fd5-46da-af7d-106f36c4fdf6",
              "label": "Gas Data Click"
            },
            {
              "value": "cb3f2d48-75ae-444d-99b7-d8160bf4c291",
              "label": "Gas Data online"
            },
            {
              "value": "f45233d2-a996-4e96-9f9b-3383403a44bb",
              "label": "Gas Data SD card"
            },
            {
              "value": "28b311a1-a1ae-458e-ba71-b7cd9ba80bbe",
              "label": "Gas Data SD card plus gas volume picture"
            },
            {
              "value": "3c0f524a-7520-4ae0-afeb-4ee4095ffaa4",
              "label": "REGO Only"
            },
            {
              "value": "715c28d0-fdc9-4c3e-8046-79a4d0839948",
              "label": "Solid Biomass CHP"
            },
            {
              "value": "669592c5-3f52-43e6-aeb8-73c9fcbce73a",
              "label": "TBC"
            },
            {
              "value": "45625ab4-dc1e-4173-a1ff-7d089e9a42c7",
              "label": "Under 50kW - standard values"
            },
            {
              "value": "e191cb2d-ba2e-4176-8df0-b269190275b7",
              "label": "Volter (volume) and GCV tickets"
            }
          ]
        },
        "Legacy Emails Search String": {
          "label": "Legacy Emails Search String",
          "slug": "se912cea29",
          "field_type": "textareafield"
        },
        "Legacy Data Submission Email": {
          "label": "Legacy Data Submission Email",
          "slug": "s74c032630",
          "field_type": "textareafield"
        },
        "Legacy Logins": {
          "label": "Legacy Logins",
          "slug": "s54342c710",
          "field_type": "textareafield"
        }
      }
    },
    "invoicesTable": {
      "name": "Invoices",
      "id": "64f592e6ad303253e811e6eb",
      "structure": {
        "Invoice Title": {
          "label": "Invoice Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "invoice_date",
          "field_type": "duedatefield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Status (Writeable) (System Field)": {
          "label": "Status (Writeable) (System Field)",
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
          "label": "First Chase",
          "slug": "sb997b3bee",
          "field_type": "datefield"
        },
        "QuickFile Invoice": {
          "label": "QuickFile Invoice",
          "slug": "s664807954",
          "field_type": "buttonfield"
        },
        "QuickFile Invoice ID": {
          "label": "QuickFile Invoice ID",
          "slug": "s5a94565b4",
          "field_type": "textfield"
        },
        "SDP Invoice Items": {
          "label": "SDP Invoice Items",
          "slug": "sq3fyg9q",
          "field_type": "linkedrecordfield"
        },
        "Multiple Clients Selected?": {
          "label": "Multiple Clients Selected?",
          "slug": "scd8fb276f",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Calculated Invoice Amount (Inc. VAT) (£)": {
          "label": "Calculated Gross Payment (£)",
          "slug": "sa5d29448f",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "ISO Invoice Date": {
          "label": "ISO Invoice Date",
          "slug": "s5a31eef7b",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Create Invoice": {
          "label": "Create Invoice",
          "slug": "s86a059d2a",
          "field_type": "buttonfield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "sf2ed8cdda",
          "field_type": "recordidfield"
        },
        "Client": {
          "label": "Client",
          "slug": "s35f27759c",
          "field_type": "linkedrecordfield"
        },
        "Invoice Type": {
          "label": "Invoice Type",
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
          "label": "SDP and Recurring Items Selected?",
          "slug": "s11c5aa27f",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Status ID (System Field)": {
          "label": "Status ID (System Field)",
          "slug": "sc0d4932b4",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Update Invoice": {
          "label": "Update Invoice",
          "slug": "sfur41as",
          "field_type": "buttonfield"
        },
        "Invoice Dispute Status": {
          "label": "Invoice Dispute Status",
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
          "label": "Sent Date",
          "slug": "sf29742ed4",
          "field_type": "datefield"
        },
        "Invoice Status": {
          "label": "Invoice Status",
          "slug": "sde1bc3b2d",
          "field_type": "formulafield",
          "target_field_type": "statusfield"
        },
        "QuickFile Invoice Status (System Field)": {
          "label": "QuickFile Invoice Status (System Field)",
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
          "label": "Assigned To",
          "slug": "s3f9425db1",
          "field_type": "userfield"
        },
        "All Payment Received": {
          "label": "All Payment Received",
          "slug": "sd3b7e33e8",
          "field_type": "datefield"
        },
        "Client Selection Mismatch": {
          "label": "Client Selection Mismatch",
          "slug": "s981b3b376",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Service Invoice Template": {
          "label": "Service Invoice Template",
          "slug": "sl2vv0k0",
          "field_type": "linkedrecordfield"
        },
        "Invoice QuickFile Client ID": {
          "label": "Invoice QuickFile Client ID",
          "slug": "s6560816b4",
          "field_type": "textfield"
        },
        "QuickFile Client ID": {
          "label": "QuickFile Client ID",
          "slug": "sacf36cc9b",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Basic Payment Terms": {
          "label": "Basic Payment Terms",
          "slug": "s6b63e74ec",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Invoice Term Days": {
          "label": "Invoice Term Days",
          "slug": "sratdiuk",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Calculated Invoice Number": {
          "label": "Calculated Invoice Number",
          "slug": "s8b2fc84fc",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Invoice Name": {
          "label": "Invoice Name",
          "slug": "sa6aa9c143",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Calculated Invoice Amount (Exc. VAT) (£)": {
          "label": "Calculated Net Payment (£)",
          "slug": "s3x70h5e",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Client Email Search String": {
          "label": "Client Email Search String",
          "slug": "sa9be538eb",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Client Emails": {
          "label": "Client Emails",
          "slug": "s1428d216f",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Client ID": {
          "label": "Client ID",
          "slug": "sd06f3fa61",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Discount": {
          "label": "Discount",
          "slug": "sfaf9fa800",
          "field_type": "percentfield"
        },
        "Total Gross Payment": {
          "label": "Total Gross Payment",
          "slug": "sbe0b1624f",
          "field_type": "currencyfield"
        },
        "Status Name (System Field)": {
          "label": "Status Name (System Field)",
          "slug": "s08peerl",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "QuickFile Invoice Number": {
          "label": "QuickFile Invoice Number",
          "slug": "s32a2cf521",
          "field_type": "textfield"
        },
        "Internal Invoice Description": {
          "label": "Internal Invoice Description",
          "slug": "sd9ab9d484",
          "field_type": "textfield"
        },
        "Legacy Invoice": {
          "label": "Legacy Invoice",
          "slug": "s4d7d8752e",
          "field_type": "yesnofield"
        },
        "Second Chase": {
          "label": "Second Chase",
          "slug": "s286f96219",
          "field_type": "datefield"
        },
        "Final Chase": {
          "label": "Final Chase",
          "slug": "s7d398a0e6",
          "field_type": "datefield"
        },
        "Final Chase Sent?": {
          "label": "Final Chase Sent?",
          "slug": "sb5099adfb",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "8zDJw",
              "label": "Not Sent"
            },
            {
              "value": "6BnaM",
              "label": "Final Chase Sent"
            }
          ]
        },
        "Legacy Invoice?": {
          "label": "Legacy Invoice?",
          "slug": "sb48acac54",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        }
      }
    },
    "SDPInvoiceItemsTable": {
      "name": "SDP Invoice Items",
      "id": "6694d6507c3ca20d6ce68d9e",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Project": {
          "label": "Project",
          "slug": "s3283e060e",
          "field_type": "linkedrecordfield"
        },
        "Price": {
          "label": "Price",
          "slug": "sf48a9e61b",
          "field_type": "currencyfield"
        },
        "Item Description": {
          "label": "Item Description",
          "slug": "s40e168fa8",
          "field_type": "textareafield"
        },
        "Item Name": {
          "label": "Item Name",
          "slug": "s99c6fcaf3",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Invoice": {
          "label": "Invoice",
          "slug": "s8237ed3c2",
          "field_type": "linkedrecordfield"
        },
        "Default Item Description": {
          "label": "Default Item Description",
          "slug": "s0798c890a",
          "field_type": "formulafield",
          "target_field_type": "textareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "sf5556356c",
          "field_type": "userfield"
        },
        "Project Client ID": {
          "label": "Project Client ID",
          "slug": "s3f6f61f8f",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Item Type": {
          "label": "Item Type",
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
          "label": "Default Item Price",
          "slug": "sa7459b49d",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Client": {
          "label": "Client",
          "slug": "sc136d4fd2",
          "field_type": "linkedrecordfield"
        },
        "Net Payment": {
          "label": "Gross Payment",
          "slug": "sad48077d4",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Client ID": {
          "label": "Client ID",
          "slug": "see55dccb4",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Invoice Item Name": {
          "label": "Record Title",
          "slug": "s8fa8b8c1f",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Charged Hourly?": {
          "label": "Charged Hourly?",
          "slug": "s9d5e870b7",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Hourly Rate": {
          "label": "Hourly Rate",
          "slug": "sd7e25bbc0",
          "field_type": "numberfield"
        },
        "Hours": {
          "label": "Hours",
          "slug": "s8beba3f09",
          "field_type": "numberfield"
        },
        "Payment (Exc. VAT)": {
          "label": "Net Payment",
          "slug": "s39d86bc60",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Project Lookup": {
          "label": "Project Lookup",
          "slug": "s9f81ff287",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Empty Field": {
          "label": "Empty Field",
          "slug": "s8496dc517",
          "field_type": "richtextareafield"
        },
        "Invoice Client ID": {
          "label": "Invoice Client ID",
          "slug": "s10a5bf254",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "QuickFile Invoice ID": {
          "label": "QuickFile Invoice ID",
          "slug": "s775c5a402",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Invoice Status": {
          "label": "Invoice Status",
          "slug": "sfe904a718",
          "field_type": "lookupfield",
          "target_field_type": "statusfield"
        },
        "Minimum Hours": {
          "label": "Minimum Hours",
          "slug": "s82d0ea9c3",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Invoice Due Date": {
          "label": "Invoice Due Date",
          "slug": "s8e2f6fb40",
          "field_type": "lookupfield",
          "target_field_type": "duedatefield"
        },
        "Invoice Final Reminder Sent": {
          "label": "Invoice Final Reminder Sent",
          "slug": "s386d8fcd7",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        }
      }
    },
    "invoiceTemplatesTable": {
      "name": "Recurring Invoice Templates",
      "id": "669632230fbeea09be4b0c2f",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Total Payment (Inc. VAT) (System Field)": {
          "label": "Gross Payment",
          "slug": "sf48a9e61b",
          "field_type": "currencyfield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "sf5556356c",
          "field_type": "userfield"
        },
        "Client": {
          "label": "Client",
          "slug": "s1423785fb",
          "field_type": "linkedrecordfield"
        },
        "QuickFile Invoice Template ID": {
          "label": "QuickFile Invoice Template ID",
          "slug": "s6469d92ca",
          "field_type": "textfield"
        },
        "QuickFile Invoice Template": {
          "label": "QuickFile Invoice Template",
          "slug": "s219e511fd",
          "field_type": "buttonfield"
        },
        "Invoices": {
          "label": "Invoices",
          "slug": "s1sbnqyu",
          "field_type": "linkedrecordfield"
        },
        "Service Price (£)": {
          "label": "Service Price (£)",
          "slug": "se730e7a7e",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Payment": {
          "label": "Net Payment",
          "slug": "sc904aca65",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Payment - Service Price (£)": {
          "label": "Payment - Service Price (£)",
          "slug": "sc73d546c4",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "QuickFile Invoice Client ID": {
          "label": "QuickFile Invoice Client ID",
          "slug": "s4bd9a2a28",
          "field_type": "textfield"
        },
        "Client QuickFile ID": {
          "label": "Client QuickFile ID",
          "slug": "s4cf20ec3a",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Service Installation Names": {
          "label": "Service Installation Names",
          "slug": "s38627194d",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "QuickFile Status (System Field)": {
          "label": "QuickFile Status (System Field)",
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
          "label": "Discount",
          "slug": "sd03202a63",
          "field_type": "percentfield"
        },
        "Calculated Invoice Price (£)": {
          "label": "Calculated Invoice Price (£)",
          "slug": "s5f0be0d7a",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Interval": {
          "label": "Interval",
          "slug": "s3e760b99f",
          "field_type": "textfield"
        },
        "Start Date": {
          "label": "Start Date",
          "slug": "se0e93246f",
          "field_type": "datefield"
        },
        "QuickFile Invoice Number": {
          "label": "QuickFile Invoice Number",
          "slug": "s4a2c197a9",
          "field_type": "textfield"
        },
        "Internal Description": {
          "label": "Internal Description",
          "slug": "sf2e6da0ee",
          "field_type": "textfield"
        },
        "Support Services": {
          "label": "Support Services",
          "slug": "suj66fka",
          "field_type": "linkedrecordfield"
        },
        "Overdue Invoices": {
          "label": "Overdue Invoices",
          "slug": "s967d433a7",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        }
      }
    },
    "ROLoginsTable": {
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
    "ROStationsTable": {
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
    "ROAccountsTable": {
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
    },
    "Members": {
      "name": "Members",
      "id": "649c36da2861608995d32934",
      "structure": {
        "Full name": {
          "label": "Full name",
          "slug": "full_name",
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
        "Company Name": {
          "label": "Company Name",
          "slug": "company_name",
          "field_type": "textfield"
        },
        "Department": {
          "label": "Department",
          "slug": "department",
          "field_type": "textfield"
        },
        "About me": {
          "label": "About me",
          "slug": "about_me",
          "field_type": "textareafield"
        },
        "Title": {
          "label": "Title",
          "slug": "job_title",
          "field_type": "textfield"
        },
        "Email": {
          "label": "Email",
          "slug": "email",
          "field_type": "emailfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "1",
              "label": "Active"
            },
            {
              "value": "2",
              "label": "Inactive"
            },
            {
              "value": "3",
              "label": "Deleted"
            },
            {
              "value": "4",
              "label": "Invited"
            }
          ]
        },
        "Type": {
          "label": "Type",
          "slug": "type",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "1",
              "label": "Employee"
            },
            {
              "value": "2",
              "label": "Contractor"
            },
            {
              "value": "3",
              "label": "Consultant"
            },
            {
              "value": "4",
              "label": "Client"
            },
            {
              "value": "5",
              "label": "Vendor"
            },
            {
              "value": "6",
              "label": "Other"
            }
          ]
        },
        "Role": {
          "label": "Role",
          "slug": "role",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "1",
              "label": "Account Administrator"
            },
            {
              "value": "2",
              "label": "Solution Creator"
            },
            {
              "value": "3",
              "label": "General Access"
            },
            {
              "value": "4",
              "label": "System"
            },
            {
              "value": "5",
              "label": "Guest"
            }
          ]
        },
        "Locale": {
          "label": "Locale",
          "slug": "locale",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "bg-BG",
              "label": "Bulgarian (Bulgaria)"
            },
            {
              "value": "nl-AW",
              "label": "Dutch (Aruba)"
            },
            {
              "value": "nl-BE",
              "label": "Dutch (Belgium)"
            },
            {
              "value": "nl-NL",
              "label": "Dutch (Netherlands)"
            },
            {
              "value": "en-AG",
              "label": "English (Antigua and Barbuda)"
            },
            {
              "value": "en-AU",
              "label": "English (Australia)"
            },
            {
              "value": "en-BW",
              "label": "English (Botswana)"
            },
            {
              "value": "en-CA",
              "label": "English (Canada)"
            },
            {
              "value": "en-DK",
              "label": "English (Denmark)"
            },
            {
              "value": "en-HK",
              "label": "English (Hong Kong SAR China)"
            },
            {
              "value": "en-IN",
              "label": "English (India)"
            },
            {
              "value": "en-IE",
              "label": "English (Ireland)"
            },
            {
              "value": "en-NZ",
              "label": "English (New Zealand)"
            },
            {
              "value": "en-NG",
              "label": "English (Nigeria)"
            },
            {
              "value": "en-PH",
              "label": "English (Philippines)"
            },
            {
              "value": "en-SG",
              "label": "English (Singapore)"
            },
            {
              "value": "en-ZA",
              "label": "English (South Africa)"
            },
            {
              "value": "en-GB",
              "label": "English (United Kingdom)"
            },
            {
              "value": "en-US",
              "label": "English (United States)"
            },
            {
              "value": "en-ZM",
              "label": "English (Zambia)"
            },
            {
              "value": "en-ZW",
              "label": "English (Zimbabwe)"
            },
            {
              "value": "fr-BE",
              "label": "French (Belgium)"
            },
            {
              "value": "fr-CA",
              "label": "French (Canada)"
            },
            {
              "value": "fr-FR",
              "label": "French (France)"
            },
            {
              "value": "fr-LU",
              "label": "French (Luxembourg)"
            },
            {
              "value": "fr-CH",
              "label": "French (Switzerland)"
            },
            {
              "value": "de-AT",
              "label": "German (Austria)"
            },
            {
              "value": "de-BE",
              "label": "German (Belgium)"
            },
            {
              "value": "de-DE",
              "label": "German (Germany)"
            },
            {
              "value": "de-LI",
              "label": "German (Liechtenstein)"
            },
            {
              "value": "de-LU",
              "label": "German (Luxembourg)"
            },
            {
              "value": "de-CH",
              "label": "German (Switzerland)"
            },
            {
              "value": "hi-IN",
              "label": "Hindi (India)"
            },
            {
              "value": "it-IT",
              "label": "Italian (Italy)"
            },
            {
              "value": "it-CH",
              "label": "Italian (Switzerland)"
            },
            {
              "value": "ja-JP",
              "label": "Japanese (Japan)"
            },
            {
              "value": "pl-PL",
              "label": "Polish (Poland)"
            },
            {
              "value": "pt-BR",
              "label": "Portuguese (Brazil)"
            },
            {
              "value": "pt-PT",
              "label": "Portuguese (Portugal)"
            },
            {
              "value": "ro-RO",
              "label": "Romanian (Romania)"
            },
            {
              "value": "ru-RU",
              "label": "Russian (Russia)"
            },
            {
              "value": "ru-UA",
              "label": "Russian (Ukraine)"
            },
            {
              "value": "es-AR",
              "label": "Spanish (Argentina)"
            },
            {
              "value": "es-BO",
              "label": "Spanish (Bolivia)"
            },
            {
              "value": "es-CL",
              "label": "Spanish (Chile)"
            },
            {
              "value": "es-CO",
              "label": "Spanish (Colombia)"
            },
            {
              "value": "es-CR",
              "label": "Spanish (Costa Rica)"
            },
            {
              "value": "es-DO",
              "label": "Spanish (Dominican Republic)"
            },
            {
              "value": "es-EC",
              "label": "Spanish (Ecuador)"
            },
            {
              "value": "es-SV",
              "label": "Spanish (El Salvador)"
            },
            {
              "value": "es-GT",
              "label": "Spanish (Guatemala)"
            },
            {
              "value": "es-HN",
              "label": "Spanish (Honduras)"
            },
            {
              "value": "es-MX",
              "label": "Spanish (Mexico)"
            },
            {
              "value": "es-NI",
              "label": "Spanish (Nicaragua)"
            },
            {
              "value": "es-PA",
              "label": "Spanish (Panama)"
            },
            {
              "value": "es-PY",
              "label": "Spanish (Paraguay)"
            },
            {
              "value": "es-PE",
              "label": "Spanish (Peru)"
            },
            {
              "value": "es-ES",
              "label": "Spanish (Spain)"
            },
            {
              "value": "es-US",
              "label": "Spanish (United States)"
            },
            {
              "value": "es-UY",
              "label": "Spanish (Uruguay)"
            },
            {
              "value": "es-VE",
              "label": "Spanish (Venezuela)"
            },
            {
              "value": "sv-FI",
              "label": "Swedish (Finland)"
            },
            {
              "value": "sv-SE",
              "label": "Swedish (Sweden)"
            },
            {
              "value": "uk-UA",
              "label": "Ukrainian (Ukraine)"
            }
          ]
        },
        "Timezone": {
          "label": "Timezone",
          "slug": "timezone",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "Pacific/Kiritimati",
              "label": "Line Islands Time (Pacific/Kiritimati)"
            },
            {
              "value": "Pacific/Chatham",
              "label": "Chatham Daylight Time (Pacific/Chatham)"
            },
            {
              "value": "Pacific/Auckland",
              "label": "New Zealand Daylight Time (Pacific/Auckland)"
            },
            {
              "value": "Pacific/Enderbury",
              "label": "Phoenix Islands Time (Pacific/Enderbury)"
            },
            {
              "value": "Pacific/Fiji",
              "label": "Fiji Summer Time (Pacific/Fiji)"
            },
            {
              "value": "Pacific/Tongatapu",
              "label": "Tonga Standard Time (Pacific/Tongatapu)"
            },
            {
              "value": "Asia/Kamchatka",
              "label": "Petropavlovsk-Kamchatski Standard Time (Asia/Kamchatka)"
            },
            {
              "value": "Pacific/Norfolk",
              "label": "Pacific/Norfolk"
            },
            {
              "value": "Australia/Lord_Howe",
              "label": "Lord Howe Daylight Time (Australia/Lord_Howe)"
            },
            {
              "value": "Australia/Sydney",
              "label": "Australian Eastern Daylight Time (Australia/Sydney)"
            },
            {
              "value": "Pacific/Guadalcanal",
              "label": "Solomon Islands Time (Pacific/Guadalcanal)"
            },
            {
              "value": "Australia/Adelaide",
              "label": "Australian Central Daylight Time (Australia/Adelaide)"
            },
            {
              "value": "Australia/Brisbane",
              "label": "Australian Eastern Standard Time (Australia/Brisbane)"
            },
            {
              "value": "Australia/Darwin",
              "label": "Australian Central Standard Time (Australia/Darwin)"
            },
            {
              "value": "Asia/Seoul",
              "label": "Korean Standard Time (Asia/Seoul)"
            },
            {
              "value": "Asia/Tokyo",
              "label": "Japan Standard Time (Asia/Tokyo)"
            },
            {
              "value": "Asia/Hong_Kong",
              "label": "Hong Kong Standard Time (Asia/Hong_Kong)"
            },
            {
              "value": "Asia/Kuala_Lumpur",
              "label": "Malaysia Time (Asia/Kuala_Lumpur)"
            },
            {
              "value": "Asia/Manila",
              "label": "Philippine Standard Time (Asia/Manila)"
            },
            {
              "value": "Asia/Shanghai",
              "label": "China Standard Time (Asia/Shanghai)"
            },
            {
              "value": "Asia/Singapore",
              "label": "Singapore Standard Time (Asia/Singapore)"
            },
            {
              "value": "Asia/Taipei",
              "label": "Taipei Standard Time (Asia/Taipei)"
            },
            {
              "value": "Australia/Perth",
              "label": "Australian Western Standard Time (Australia/Perth)"
            },
            {
              "value": "Asia/Bangkok",
              "label": "Indochina Time (Asia/Bangkok)"
            },
            {
              "value": "Asia/Ho_Chi_Minh",
              "label": "Indochina Time (Asia/Ho_Chi_Minh)"
            },
            {
              "value": "Asia/Jakarta",
              "label": "Western Indonesia Time (Asia/Jakarta)"
            },
            {
              "value": "Asia/Rangoon",
              "label": "Myanmar Time (Asia/Rangoon)"
            },
            {
              "value": "Asia/Dhaka",
              "label": "Bangladesh Standard Time (Asia/Dhaka)"
            },
            {
              "value": "Asia/Kathmandu",
              "label": "Nepal Time (Asia/Kathmandu)"
            },
            {
              "value": "Asia/Colombo",
              "label": "India Standard Time (Asia/Colombo)"
            },
            {
              "value": "Asia/Kolkata",
              "label": "India Standard Time (Asia/Kolkata)"
            },
            {
              "value": "Asia/Karachi",
              "label": "Pakistan Standard Time (Asia/Karachi)"
            },
            {
              "value": "Asia/Tashkent",
              "label": "Uzbekistan Standard Time (Asia/Tashkent)"
            },
            {
              "value": "Asia/Yekaterinburg",
              "label": "Yekaterinburg Standard Time (Asia/Yekaterinburg)"
            },
            {
              "value": "Asia/Kabul",
              "label": "Afghanistan Time (Asia/Kabul)"
            },
            {
              "value": "Asia/Baku",
              "label": "Azerbaijan Standard Time (Asia/Baku)"
            },
            {
              "value": "Asia/Dubai",
              "label": "Gulf Standard Time (Asia/Dubai)"
            },
            {
              "value": "Asia/Tbilisi",
              "label": "Georgia Standard Time (Asia/Tbilisi)"
            },
            {
              "value": "Asia/Yerevan",
              "label": "Armenia Standard Time (Asia/Yerevan)"
            },
            {
              "value": "Asia/Tehran",
              "label": "Iran Standard Time (Asia/Tehran)"
            },
            {
              "value": "Africa/Nairobi",
              "label": "East Africa Time (Africa/Nairobi)"
            },
            {
              "value": "Asia/Baghdad",
              "label": "Arabian Standard Time (Asia/Baghdad)"
            },
            {
              "value": "Asia/Kuwait",
              "label": "Arabian Standard Time (Asia/Kuwait)"
            },
            {
              "value": "Asia/Riyadh",
              "label": "Arabian Standard Time (Asia/Riyadh)"
            },
            {
              "value": "Europe/Istanbul",
              "label": "Europe/Istanbul"
            },
            {
              "value": "Europe/Minsk",
              "label": "Moscow Standard Time (Europe/Minsk)"
            },
            {
              "value": "Europe/Moscow",
              "label": "Moscow Standard Time (Europe/Moscow)"
            },
            {
              "value": "Africa/Cairo",
              "label": "Eastern European Standard Time (Africa/Cairo)"
            },
            {
              "value": "Africa/Johannesburg",
              "label": "South Africa Standard Time (Africa/Johannesburg)"
            },
            {
              "value": "Asia/Beirut",
              "label": "Eastern European Standard Time (Asia/Beirut)"
            },
            {
              "value": "Asia/Jerusalem",
              "label": "Israel Standard Time (Asia/Jerusalem)"
            },
            {
              "value": "Europe/Athens",
              "label": "Eastern European Standard Time (Europe/Athens)"
            },
            {
              "value": "Europe/Bucharest",
              "label": "Eastern European Standard Time (Europe/Bucharest)"
            },
            {
              "value": "Europe/Helsinki",
              "label": "Eastern European Standard Time (Europe/Helsinki)"
            },
            {
              "value": "Africa/Algiers",
              "label": "Central European Standard Time (Africa/Algiers)"
            },
            {
              "value": "Africa/Casablanca",
              "label": "Western European Standard Time (Africa/Casablanca)"
            },
            {
              "value": "Europe/Amsterdam",
              "label": "Central European Standard Time (Europe/Amsterdam)"
            },
            {
              "value": "Europe/Berlin",
              "label": "Central European Standard Time (Europe/Berlin)"
            },
            {
              "value": "Europe/Brussels",
              "label": "Central European Standard Time (Europe/Brussels)"
            },
            {
              "value": "Europe/Paris",
              "label": "Central European Standard Time (Europe/Paris)"
            },
            {
              "value": "Europe/Prague",
              "label": "Central European Standard Time (Europe/Prague)"
            },
            {
              "value": "Europe/Rome",
              "label": "Central European Standard Time (Europe/Rome)"
            },
            {
              "value": "Europe/Dublin",
              "label": "Irish Standard Time (Europe/Dublin)"
            },
            {
              "value": "Europe/Lisbon",
              "label": "Western European Standard Time (Europe/Lisbon)"
            },
            {
              "value": "Europe/London",
              "label": "Greenwich Mean Time (Europe/London)"
            },
            {
              "value": "GMT",
              "label": "Greenwich Mean Time (GMT)"
            },
            {
              "value": "America/Scoresbysund",
              "label": "East Greenland Standard Time (America/Scoresbysund)"
            },
            {
              "value": "Atlantic/Azores",
              "label": "Azores Standard Time (Atlantic/Azores)"
            },
            {
              "value": "Atlantic/Cape_Verde",
              "label": "Cape Verde Standard Time (Atlantic/Cape_Verde)"
            },
            {
              "value": "Atlantic/South_Georgia",
              "label": "South Georgia Time (Atlantic/South_Georgia)"
            },
            {
              "value": "America/Argentina/Buenos_Aires",
              "label": "Argentina Standard Time (America/Argentina/Buenos_Aires)"
            },
            {
              "value": "America/Santiago",
              "label": "Chile Summer Time (America/Santiago)"
            },
            {
              "value": "America/Sao_Paulo",
              "label": "Brasilia Standard Time (America/Sao_Paulo)"
            },
            {
              "value": "America/St_Johns",
              "label": "Newfoundland Standard Time (America/St_Johns)"
            },
            {
              "value": "America/Caracas",
              "label": "Venezuela Time (America/Caracas)"
            },
            {
              "value": "America/Halifax",
              "label": "Atlantic Standard Time (America/Halifax)"
            },
            {
              "value": "America/Puerto_Rico",
              "label": "Atlantic Standard Time (America/Puerto_Rico)"
            },
            {
              "value": "Atlantic/Bermuda",
              "label": "Atlantic Standard Time (Atlantic/Bermuda)"
            },
            {
              "value": "America/Bogota",
              "label": "Colombia Standard Time (America/Bogota)"
            },
            {
              "value": "America/Indiana/Indianapolis",
              "label": "Eastern Standard Time (America/Indiana/Indianapolis)"
            },
            {
              "value": "America/Lima",
              "label": "Peru Standard Time (America/Lima)"
            },
            {
              "value": "America/New_York",
              "label": "Eastern Standard Time (America/New_York)"
            },
            {
              "value": "America/Panama",
              "label": "Eastern Standard Time (America/Panama)"
            },
            {
              "value": "America/Chicago",
              "label": "Central Standard Time (America/Chicago)"
            },
            {
              "value": "America/El_Salvador",
              "label": "Central Standard Time (America/El_Salvador)"
            },
            {
              "value": "America/Mexico_City",
              "label": "Central Standard Time (America/Mexico_City)"
            },
            {
              "value": "America/Denver",
              "label": "Mountain Standard Time (America/Denver)"
            },
            {
              "value": "America/Mazatlan",
              "label": "Mexican Pacific Standard Time (America/Mazatlan)"
            },
            {
              "value": "America/Phoenix",
              "label": "Mountain Standard Time (America/Phoenix)"
            },
            {
              "value": "America/Los_Angeles",
              "label": "Pacific Standard Time (America/Los_Angeles)"
            },
            {
              "value": "America/Tijuana",
              "label": "Pacific Standard Time (America/Tijuana)"
            },
            {
              "value": "Pacific/Pitcairn",
              "label": "Pitcairn Time (Pacific/Pitcairn)"
            },
            {
              "value": "America/Anchorage",
              "label": "Alaska Standard Time (America/Anchorage)"
            },
            {
              "value": "Pacific/Gambier",
              "label": "Gambier Time (Pacific/Gambier)"
            },
            {
              "value": "Pacific/Marquesas",
              "label": "Marquesas Time (Pacific/Marquesas)"
            },
            {
              "value": "America/Adak",
              "label": "Hawaii-Aleutian Standard Time (America/Adak)"
            },
            {
              "value": "Pacific/Honolulu",
              "label": "Hawaii-Aleutian Standard Time (Pacific/Honolulu)"
            },
            {
              "value": "Pacific/Niue",
              "label": "Niue Time (Pacific/Niue)"
            },
            {
              "value": "Pacific/Pago_Pago",
              "label": "Samoa Standard Time (Pacific/Pago_Pago)"
            }
          ]
        },
        "Language": {
          "label": "Language",
          "slug": "language",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "en",
              "label": "English"
            },
            {
              "value": "bg",
              "label": "Български"
            },
            {
              "value": "fr",
              "label": "Français"
            },
            {
              "value": "de",
              "label": "Deutsch"
            },
            {
              "value": "it",
              "label": "Italiano"
            },
            {
              "value": "nl",
              "label": "Nederlandse"
            },
            {
              "value": "pl",
              "label": "Polski"
            },
            {
              "value": "pt",
              "label": "Portuguesa"
            },
            {
              "value": "ro",
              "label": "Română"
            },
            {
              "value": "ru",
              "label": "Русский"
            },
            {
              "value": "es",
              "label": "Español"
            },
            {
              "value": "sv",
              "label": "Svenska"
            },
            {
              "value": "uk",
              "label": "Українська"
            },
            {
              "value": "hi",
              "label": "हिन्दी"
            },
            {
              "value": "zh-hans",
              "label": "简化字"
            },
            {
              "value": "ja",
              "label": "日本語"
            }
          ]
        },
        "Office Location": {
          "label": "Office Location",
          "slug": "office_location",
          "field_type": "addressfield"
        },
        "Work Anniversary": {
          "label": "Work Anniversary",
          "slug": "work_anniversary",
          "field_type": "datefield"
        },
        "Certifications": {
          "label": "Certifications",
          "slug": "certifications",
          "field_type": "tagsfield",
          "choices": [
            {
              "value": "649c36da2861608995d32750",
              "label": "CPP (Certified Payroll Professional)"
            },
            {
              "value": "649c36da2861608995d32751",
              "label": "CPP (Certified Protection Professional)"
            },
            {
              "value": "649c36da2861608995d32752",
              "label": "CPS (Certified Professional Safe Technician)"
            },
            {
              "value": "649c36da2861608995d32753",
              "label": "CRA (Certified Records Analyst)"
            },
            {
              "value": "649c36da2861608995d32754",
              "label": "CRL (Certified Registered Locksmith)"
            },
            {
              "value": "649c36da2861608995d32755",
              "label": "CRM (Certified Records Manager)"
            },
            {
              "value": "649c36da2861608995d32756",
              "label": "CRMA (Certification in risk Management Assurance)"
            },
            {
              "value": "649c36da2861608995d32757",
              "label": "CSEP (Certified Special Events Professional)"
            },
            {
              "value": "649c36da2861608995d32758",
              "label": "CSM (Certified Strategic Manager)"
            },
            {
              "value": "649c36da2861608995d32759",
              "label": "CSPM (Certified Security Project Manager)"
            },
            {
              "value": "649c36da2861608995d3275a",
              "label": "DCI (Data Cabling Installer)"
            },
            {
              "value": "649c36da2861608995d3275b",
              "label": "DDS (Doctor of Dental Surgery)"
            },
            {
              "value": "649c36da2861608995d3275c",
              "label": "DFTO (Disaster Field Training Operations)"
            },
            {
              "value": "649c36da2861608995d3275d",
              "label": "DMD (Doctor of Medicine in Dentistry)"
            },
            {
              "value": "649c36da2861608995d3275e",
              "label": "EA (Enrolled Agent)"
            },
            {
              "value": "649c36da2861608995d3275f",
              "label": "EFOP (Executive Fire Officer Program)"
            },
            {
              "value": "649c36da2861608995d32760",
              "label": "EMPP (Emergency Management Professional Program)"
            },
            {
              "value": "649c36da2861608995d32761",
              "label": "EUR ING (European Engineer)"
            },
            {
              "value": "649c36da2861608995d32762",
              "label": "FAIA (Fellow, American Institute of Architects)"
            },
            {
              "value": "649c36da2861608995d32763",
              "label": "FMP- Facility Management Professional"
            },
            {
              "value": "649c36da2861608995d32764",
              "label": "FMVA (Financial Modeling and Valuation Analyst)"
            },
            {
              "value": "649c36da2861608995d32765",
              "label": "FOD (Fiber Optics Designer)"
            },
            {
              "value": "649c36da2861608995d32766",
              "label": "FOI (Fiber Optics Installer)"
            },
            {
              "value": "649c36da2861608995d32767",
              "label": "FOT (Fiber Optics Technician)"
            },
            {
              "value": "649c36da2861608995d32768",
              "label": "FOT-OSP (Fiber Optics Technician-Outside Plant)"
            },
            {
              "value": "649c36da2861608995d32769",
              "label": "FPC (Fundamental Payroll Specialist)"
            },
            {
              "value": "649c36da2861608995d3276a",
              "label": "IACCP (Investment Adviser Certified Compliance Professional)"
            },
            {
              "value": "649c36da2861608995d3276b",
              "label": "IEMC (Integrated Emergency Management Courses)"
            },
            {
              "value": "649c36da2861608995d3276c",
              "label": "IGP (Information Governance Professional)"
            },
            {
              "value": "649c36da2861608995d3276d",
              "label": "MD (Medical Doctor)"
            },
            {
              "value": "649c36da2861608995d3276e",
              "label": "MEPP (Master Exercise Practitioner Program)"
            },
            {
              "value": "649c36da2861608995d3276f",
              "label": "MTP (Master Trainer Program)"
            },
            {
              "value": "649c36da2861608995d32770",
              "label": "NCARB (National Council of Architecture Registration Board)"
            },
            {
              "value": "649c36da2861608995d32771",
              "label": "P.Eng. (Professional Engineer)"
            },
            {
              "value": "649c36da2861608995d32772",
              "label": "PCA (Professional Certificate in Accounting)"
            },
            {
              "value": "649c36da2861608995d32773",
              "label": "PCACM (Professional Certificate in Supply Chain Management"
            },
            {
              "value": "649c36da2861608995d32774",
              "label": "PCCM (Professional Certificate in Contract Management)"
            },
            {
              "value": "649c36da2861608995d32775",
              "label": "PCCRM (Professional Certificate in Customer Relationship Management)"
            },
            {
              "value": "649c36da2861608995d32776",
              "label": "PCFM (Professional Certificate in Facility Management)"
            },
            {
              "value": "649c36da2861608995d32777",
              "label": "PCFP (Professional Certificate in Financial Planning)"
            },
            {
              "value": "649c36da2861608995d32778",
              "label": "PCGD (Professional Certificate in Graphic Design)"
            },
            {
              "value": "649c36da2861608995d32779",
              "label": "PCHR (Professional Certificate in Human Resources)"
            },
            {
              "value": "649c36da2861608995d3277a",
              "label": "PCI (Professional Certified Investigator)"
            },
            {
              "value": "649c36da2861608995d3277b",
              "label": "PCM (Professional Certificate in Marketing)"
            },
            {
              "value": "649c36da2861608995d3277c",
              "label": "PCMM (Professional Certificate in Materials Management)"
            },
            {
              "value": "649c36da2861608995d3277d",
              "label": "PCPM (Professional Certificate in Project Management"
            },
            {
              "value": "649c36da2861608995d3277e",
              "label": "PCPS (Professional Certificate in Paralegal Studies)"
            },
            {
              "value": "649c36da2861608995d3277f",
              "label": "PCSM (Professional Certificate in Store Management)"
            },
            {
              "value": "649c36da2861608995d32780",
              "label": "PCTC (Professional Certificate in Technical Communication)"
            },
            {
              "value": "649c36da2861608995d32781",
              "label": "PE (Power Engineer)"
            },
            {
              "value": "649c36da2861608995d32782",
              "label": "PE (Professional Engineer)"
            },
            {
              "value": "649c36da2861608995d32783",
              "label": "PHR (Professional in Human Resources)"
            },
            {
              "value": "649c36da2861608995d32784",
              "label": "PPL (Private Pilot License)"
            },
            {
              "value": "649c36da2861608995d32785",
              "label": "PRM (Professional Risk Manager)"
            },
            {
              "value": "649c36da2861608995d32786",
              "label": "PSP (Physical Security Professional)"
            },
            {
              "value": "649c36da2861608995d32787",
              "label": "QIAL (Qualification in Internal Audit Leadership)"
            },
            {
              "value": "649c36da2861608995d32788",
              "label": "RA (Registered Architect)"
            },
            {
              "value": "649c36da2861608995d32789",
              "label": "RCDD (Registered Communications Distribution Designer)"
            },
            {
              "value": "649c36da2861608995d3278a",
              "label": "RL (Registered Locksmith)"
            },
            {
              "value": "649c36da2861608995d3278b",
              "label": "SFP (Sustainability Facility Professional)"
            },
            {
              "value": "649c36da2861608995d3278c",
              "label": "SHRM-CP (Society for Human Resources Management – Certified Professional)"
            },
            {
              "value": "649c36da2861608995d3278d",
              "label": "SHRM-SCP (Society for Human Resources Management – Senior Certified Professional)"
            },
            {
              "value": "649c36da2861608995d3278e",
              "label": "SMIEEE (Senior member of the IEEE)"
            },
            {
              "value": "649c36da2861608995d3278f",
              "label": "SPHR (Senior Professional in Human Resources)"
            },
            {
              "value": "649c36da2861608995d32790",
              "label": "SPL (Sport Pilot License)"
            },
            {
              "value": "649c36da2861608995d32791",
              "label": "TTT (Termination and Testing Technician)"
            }
          ]
        },
        "Skills": {
          "label": "Skills",
          "slug": "skills",
          "field_type": "tagsfield",
          "choices": [
            {
              "value": "649c36da2861608995d32792",
              "label": "Account Management"
            },
            {
              "value": "649c36da2861608995d32793",
              "label": "Active Listening"
            },
            {
              "value": "649c36da2861608995d32794",
              "label": "Adaptability"
            },
            {
              "value": "649c36da2861608995d32795",
              "label": "Administrative"
            },
            {
              "value": "649c36da2861608995d32796",
              "label": "Advertising"
            },
            {
              "value": "649c36da2861608995d32797",
              "label": "Agile Scrum Team"
            },
            {
              "value": "649c36da2861608995d32798",
              "label": "Analytical Reasoning"
            },
            {
              "value": "649c36da2861608995d32799",
              "label": "Analyzing RFPs"
            },
            {
              "value": "649c36da2861608995d3279a",
              "label": "AngularJS"
            },
            {
              "value": "649c36da2861608995d3279b",
              "label": "Animation"
            },
            {
              "value": "649c36da2861608995d3279c",
              "label": "Answering Customer Questions"
            },
            {
              "value": "649c36da2861608995d3279d",
              "label": "Application Development"
            },
            {
              "value": "649c36da2861608995d3279e",
              "label": "Artificial Intelligence (AI)"
            },
            {
              "value": "649c36da2861608995d3279f",
              "label": "Attentiveness"
            },
            {
              "value": "649c36da2861608995d327a0",
              "label": "Audio Production"
            },
            {
              "value": "649c36da2861608995d327a1",
              "label": "B2B Marketing"
            },
            {
              "value": "649c36da2861608995d327a2",
              "label": "Backbone"
            },
            {
              "value": "649c36da2861608995d327a3",
              "label": "Balanced Scorecard"
            },
            {
              "value": "649c36da2861608995d327a4",
              "label": "Benchmarking"
            },
            {
              "value": "649c36da2861608995d327a5",
              "label": "Bootstrap"
            },
            {
              "value": "649c36da2861608995d327a6",
              "label": "Brand Management"
            },
            {
              "value": "649c36da2861608995d327a7",
              "label": "Brand Measurement and Reporting"
            },
            {
              "value": "649c36da2861608995d327a8",
              "label": "Brand Strategy"
            },
            {
              "value": "649c36da2861608995d327a9",
              "label": "Budget Administration"
            },
            {
              "value": "649c36da2861608995d327aa",
              "label": "Budget Control"
            },
            {
              "value": "649c36da2861608995d327ab",
              "label": "Business and Product Development"
            },
            {
              "value": "649c36da2861608995d327ac",
              "label": "Business Analysis"
            },
            {
              "value": "649c36da2861608995d327ad",
              "label": "Business Development"
            },
            {
              "value": "649c36da2861608995d327ae",
              "label": "Business Ethics"
            },
            {
              "value": "649c36da2861608995d327af",
              "label": "Business Forecasting"
            },
            {
              "value": "649c36da2861608995d327b0",
              "label": "Business Management"
            },
            {
              "value": "649c36da2861608995d327b1",
              "label": "Business Process Improvement"
            },
            {
              "value": "649c36da2861608995d327b2",
              "label": "Business Trend Awareness"
            },
            {
              "value": "649c36da2861608995d327b3",
              "label": "Business Valuation"
            },
            {
              "value": "649c36da2861608995d327b4",
              "label": "C"
            },
            {
              "value": "649c36da2861608995d327b5",
              "label": "C#"
            },
            {
              "value": "649c36da2861608995d327b6",
              "label": "C++"
            },
            {
              "value": "649c36da2861608995d327b7",
              "label": "Cascading Style Sheets (CSS)"
            },
            {
              "value": "649c36da2861608995d327b8",
              "label": "Channel Management"
            },
            {
              "value": "649c36da2861608995d327b9",
              "label": "Channel Marketing"
            },
            {
              "value": "649c36da2861608995d327ba",
              "label": "Channel Strategy"
            },
            {
              "value": "649c36da2861608995d327bb",
              "label": "Closing Deals"
            },
            {
              "value": "649c36da2861608995d327bc",
              "label": "Cloud Computing"
            },
            {
              "value": "649c36da2861608995d327bd",
              "label": "Coaching"
            },
            {
              "value": "649c36da2861608995d327be",
              "label": "Collaboration"
            },
            {
              "value": "649c36da2861608995d327bf",
              "label": "Communication"
            },
            {
              "value": "649c36da2861608995d327c0",
              "label": "Compensation and Benefits"
            },
            {
              "value": "649c36da2861608995d327c1",
              "label": "Competitive Strategy"
            },
            {
              "value": "649c36da2861608995d327c2",
              "label": "Competitor Analysis"
            },
            {
              "value": "649c36da2861608995d327c3",
              "label": "Computer Architecture"
            },
            {
              "value": "649c36da2861608995d327c4",
              "label": "Computer Graphics"
            },
            {
              "value": "649c36da2861608995d327c5",
              "label": "Conflict resolution"
            },
            {
              "value": "649c36da2861608995d327c6",
              "label": "Consulting"
            },
            {
              "value": "649c36da2861608995d327c7",
              "label": "Content Management"
            },
            {
              "value": "649c36da2861608995d327c8",
              "label": "Content Marketing"
            },
            {
              "value": "649c36da2861608995d327c9",
              "label": "Content Strategy"
            },
            {
              "value": "649c36da2861608995d327ca",
              "label": "Contract Law"
            },
            {
              "value": "649c36da2861608995d327cb",
              "label": "Contract Management"
            },
            {
              "value": "649c36da2861608995d327cc",
              "label": "Contract Negotiation"
            },
            {
              "value": "649c36da2861608995d327cd",
              "label": "Contract Negotiation"
            },
            {
              "value": "649c36da2861608995d327ce",
              "label": "Corporate Communications"
            },
            {
              "value": "649c36da2861608995d327cf",
              "label": "Corporate Governance"
            },
            {
              "value": "649c36da2861608995d327d0",
              "label": "Corporate Innovation"
            },
            {
              "value": "649c36da2861608995d327d1",
              "label": "Corporate Restructuring"
            },
            {
              "value": "649c36da2861608995d327d2",
              "label": "Cost Accounting"
            },
            {
              "value": "649c36da2861608995d327d3",
              "label": "Cost Forecasting"
            },
            {
              "value": "649c36da2861608995d327d4",
              "label": "Cost Management"
            },
            {
              "value": "649c36da2861608995d327d5",
              "label": "Cost-Benefit Analysis"
            },
            {
              "value": "649c36da2861608995d327d6",
              "label": "Crafting a Brand"
            },
            {
              "value": "649c36da2861608995d327d7",
              "label": "Creating Brand Ambassadors"
            },
            {
              "value": "649c36da2861608995d327d8",
              "label": "Creativity"
            },
            {
              "value": "649c36da2861608995d327d9",
              "label": "Critical Thinking"
            },
            {
              "value": "649c36da2861608995d327da",
              "label": "Customer Analysis"
            },
            {
              "value": "649c36da2861608995d327db",
              "label": "Customer Relationship Management (CRM) Software"
            },
            {
              "value": "649c36da2861608995d327dc",
              "label": "Customer Retention Management"
            },
            {
              "value": "649c36da2861608995d327dd",
              "label": "Customer Segmentation"
            },
            {
              "value": "649c36da2861608995d327de",
              "label": "Customer Service"
            },
            {
              "value": "649c36da2861608995d327df",
              "label": "Customer Support"
            },
            {
              "value": "649c36da2861608995d327e0",
              "label": "Data Analysis"
            },
            {
              "value": "649c36da2861608995d327e1",
              "label": "Data Presentation"
            },
            {
              "value": "649c36da2861608995d327e2",
              "label": "Data Science"
            },
            {
              "value": "649c36da2861608995d327e3",
              "label": "Data Structures"
            },
            {
              "value": "649c36da2861608995d327e4",
              "label": "Data Visualization"
            },
            {
              "value": "649c36da2861608995d327e5",
              "label": "Database Administration"
            },
            {
              "value": "649c36da2861608995d327e6",
              "label": "Database Architecture"
            },
            {
              "value": "649c36da2861608995d327e7",
              "label": "Database Objects"
            },
            {
              "value": "649c36da2861608995d327e8",
              "label": "Debugging"
            },
            {
              "value": "649c36da2861608995d327e9",
              "label": "Decision Tree Analysis"
            },
            {
              "value": "649c36da2861608995d327ea",
              "label": "Decision Making"
            },
            {
              "value": "649c36da2861608995d327eb",
              "label": "Defending a Brand"
            },
            {
              "value": "649c36da2861608995d327ec",
              "label": "Defining Mission, Vision and Values"
            },
            {
              "value": "649c36da2861608995d327ed",
              "label": "Delegating Tasks"
            },
            {
              "value": "649c36da2861608995d327ee",
              "label": "Dependability"
            },
            {
              "value": "649c36da2861608995d327ef",
              "label": "Developing Proposals"
            },
            {
              "value": "649c36da2861608995d327f0",
              "label": "Developing Sales Collaterals"
            },
            {
              "value": "649c36da2861608995d327f1",
              "label": "Digital Marketing"
            },
            {
              "value": "649c36da2861608995d327f2",
              "label": "Digital Marketing Automation"
            },
            {
              "value": "649c36da2861608995d327f3",
              "label": "Digital Media"
            },
            {
              "value": "649c36da2861608995d327f4",
              "label": "Digital Strategy"
            },
            {
              "value": "649c36da2861608995d327f5",
              "label": "Direct Marketing"
            },
            {
              "value": "649c36da2861608995d327f6",
              "label": "Dispute Resolution"
            },
            {
              "value": "649c36da2861608995d327f7",
              "label": "Distribution Strategy"
            },
            {
              "value": "649c36da2861608995d327f8",
              "label": "Django"
            },
            {
              "value": "649c36da2861608995d327f9",
              "label": "Drupal"
            },
            {
              "value": "649c36da2861608995d327fa",
              "label": "Economics"
            },
            {
              "value": "649c36da2861608995d327fb",
              "label": "Ember"
            },
            {
              "value": "649c36da2861608995d327fc",
              "label": "Emotional Intelligence (EQ)"
            },
            {
              "value": "649c36da2861608995d327fd",
              "label": "Empathy"
            },
            {
              "value": "649c36da2861608995d327fe",
              "label": "Employment Law"
            },
            {
              "value": "649c36da2861608995d327ff",
              "label": "Enterprise Resource Planning"
            },
            {
              "value": "649c36da2861608995d32800",
              "label": "Environmental Regulations"
            },
            {
              "value": "649c36da2861608995d32801",
              "label": "Estimating and Cost Forecasting"
            },
            {
              "value": "649c36da2861608995d32802",
              "label": "Executive Leadership"
            },
            {
              "value": "649c36da2861608995d32803",
              "label": "Expense Management"
            },
            {
              "value": "649c36da2861608995d32804",
              "label": "Fair Competition"
            },
            {
              "value": "649c36da2861608995d32805",
              "label": "Feasibility Analysis"
            },
            {
              "value": "649c36da2861608995d32806",
              "label": "Financial Metrics"
            },
            {
              "value": "649c36da2861608995d32807",
              "label": "Financial Modeling"
            },
            {
              "value": "649c36da2861608995d32808",
              "label": "Financial Performance Assessment"
            },
            {
              "value": "649c36da2861608995d32809",
              "label": "Financial Policy Decisions"
            },
            {
              "value": "649c36da2861608995d3280a",
              "label": "Financial Reporting"
            },
            {
              "value": "649c36da2861608995d3280b",
              "label": "Financing Mergers and Acquisitions"
            },
            {
              "value": "649c36da2861608995d3280c",
              "label": "Focus Groups"
            },
            {
              "value": "649c36da2861608995d3280d",
              "label": "Forecasting"
            },
            {
              "value": "649c36da2861608995d3280e",
              "label": "Friendliness"
            },
            {
              "value": "649c36da2861608995d3280f",
              "label": "Full-Stack Software Development"
            },
            {
              "value": "649c36da2861608995d32810",
              "label": "Funding Models"
            },
            {
              "value": "649c36da2861608995d32811",
              "label": "Git"
            },
            {
              "value": "649c36da2861608995d32812",
              "label": "GitHub"
            },
            {
              "value": "649c36da2861608995d32813",
              "label": "Global Operations Strategy"
            },
            {
              "value": "649c36da2861608995d32814",
              "label": "Go"
            },
            {
              "value": "649c36da2861608995d32815",
              "label": "Go to Market Strategy"
            },
            {
              "value": "649c36da2861608995d32816",
              "label": "Governance Models"
            },
            {
              "value": "649c36da2861608995d32817",
              "label": "Growth Strategy"
            },
            {
              "value": "649c36da2861608995d32818",
              "label": "Guerrilla Marketing"
            },
            {
              "value": "649c36da2861608995d32819",
              "label": "Human Resources"
            },
            {
              "value": "649c36da2861608995d3281a",
              "label": "Hyper Text Markup Language (HTML)"
            },
            {
              "value": "649c36da2861608995d3281b",
              "label": "Identifying Leads"
            },
            {
              "value": "649c36da2861608995d3281c",
              "label": "Industrial Design"
            },
            {
              "value": "649c36da2861608995d3281d",
              "label": "Intellectual Property Law"
            },
            {
              "value": "649c36da2861608995d3281e",
              "label": "Internationalization"
            },
            {
              "value": "649c36da2861608995d3281f",
              "label": "Internet Marketing"
            },
            {
              "value": "649c36da2861608995d32820",
              "label": "Investment Analysis"
            },
            {
              "value": "649c36da2861608995d32821",
              "label": "IT Standards and Best Practices (e.g. ITIL)"
            },
            {
              "value": "649c36da2861608995d32822",
              "label": "Java"
            },
            {
              "value": "649c36da2861608995d32823",
              "label": "JavaScript"
            },
            {
              "value": "649c36da2861608995d32824",
              "label": "Joomla"
            },
            {
              "value": "649c36da2861608995d32825",
              "label": "Journalism"
            },
            {
              "value": "649c36da2861608995d32826",
              "label": "jQuery"
            },
            {
              "value": "649c36da2861608995d32827",
              "label": "Key Performance Indicators (KPI’s)"
            },
            {
              "value": "649c36da2861608995d32828",
              "label": "Legal and Compliance"
            },
            {
              "value": "649c36da2861608995d32829",
              "label": "Linux/Unix"
            },
            {
              "value": "649c36da2861608995d3282a",
              "label": "Logistics"
            },
            {
              "value": "649c36da2861608995d3282b",
              "label": "Long-Term Financial Management"
            },
            {
              "value": "649c36da2861608995d3282c",
              "label": "Loyalty Marketing"
            },
            {
              "value": "649c36da2861608995d3282d",
              "label": "Magento"
            },
            {
              "value": "649c36da2861608995d3282e",
              "label": "Managerial Accounting"
            },
            {
              "value": "649c36da2861608995d3282f",
              "label": "Managing a Client Engagement"
            },
            {
              "value": "649c36da2861608995d32830",
              "label": "Managing Budgets"
            },
            {
              "value": "649c36da2861608995d32831",
              "label": "Managing Global Operations"
            },
            {
              "value": "649c36da2861608995d32832",
              "label": "Managing Incentives"
            },
            {
              "value": "649c36da2861608995d32833",
              "label": "Managing Liability"
            },
            {
              "value": "649c36da2861608995d32834",
              "label": "Managing Risk-Return"
            },
            {
              "value": "649c36da2861608995d32835",
              "label": "Managing Sales Quotas and Incentives"
            },
            {
              "value": "649c36da2861608995d32836",
              "label": "Managing Upsell Activities"
            },
            {
              "value": "649c36da2861608995d32837",
              "label": "Market Analysis"
            },
            {
              "value": "649c36da2861608995d32838",
              "label": "Market Knowledge"
            },
            {
              "value": "649c36da2861608995d32839",
              "label": "Market Research"
            },
            {
              "value": "649c36da2861608995d3283a",
              "label": "Market Segmentation"
            },
            {
              "value": "649c36da2861608995d3283b",
              "label": "Marketing"
            },
            {
              "value": "649c36da2861608995d3283c",
              "label": "Marketing Measurement (Metrics and KPI)"
            },
            {
              "value": "649c36da2861608995d3283d",
              "label": "Marketing Mix Modeling"
            },
            {
              "value": "649c36da2861608995d3283e",
              "label": "Marketing Operations Management"
            },
            {
              "value": "649c36da2861608995d3283f",
              "label": "Marketing Planning"
            },
            {
              "value": "649c36da2861608995d32840",
              "label": "Marketing Strategy"
            },
            {
              "value": "649c36da2861608995d32841",
              "label": "Marketing Vision and Mission"
            },
            {
              "value": "649c36da2861608995d32842",
              "label": "Media Planning"
            },
            {
              "value": "649c36da2861608995d32843",
              "label": "Mentoring and Coaching"
            },
            {
              "value": "649c36da2861608995d32844",
              "label": "Mentoring Sales Teams"
            },
            {
              "value": "649c36da2861608995d32845",
              "label": "Mergers, Acquisitions and Divestiture"
            },
            {
              "value": "649c36da2861608995d32846",
              "label": "Microsoft ASP.NET MVC"
            },
            {
              "value": "649c36da2861608995d32847",
              "label": "Middleware and Integration Software"
            },
            {
              "value": "649c36da2861608995d32848",
              "label": "Mobile Application Development"
            },
            {
              "value": "649c36da2861608995d32849",
              "label": "Mobile Development"
            },
            {
              "value": "649c36da2861608995d3284a",
              "label": "Mobile Marketing"
            },
            {
              "value": "649c36da2861608995d3284b",
              "label": "Monitoring and Controlling Projects"
            },
            {
              "value": "649c36da2861608995d3284c",
              "label": "Natural Language Processing"
            },
            {
              "value": "649c36da2861608995d3284d",
              "label": "Natural Language Processing"
            },
            {
              "value": "649c36da2861608995d3284e",
              "label": "Network Administration"
            },
            {
              "value": "649c36da2861608995d3284f",
              "label": "Network and Information Security"
            },
            {
              "value": "649c36da2861608995d32850",
              "label": "Network Design and Architecture"
            },
            {
              "value": "649c36da2861608995d32851",
              "label": "New Product Development"
            },
            {
              "value": "649c36da2861608995d32852",
              "label": "Niche Marketing"
            },
            {
              "value": "649c36da2861608995d32853",
              "label": "Node.js"
            },
            {
              "value": "649c36da2861608995d32854",
              "label": "Online Marketing"
            },
            {
              "value": "649c36da2861608995d32855",
              "label": "Online Sales"
            },
            {
              "value": "649c36da2861608995d32856",
              "label": "Operating Systems"
            },
            {
              "value": "649c36da2861608995d32857",
              "label": "Operations Financing"
            },
            {
              "value": "649c36da2861608995d32858",
              "label": "Order Management"
            },
            {
              "value": "649c36da2861608995d32859",
              "label": "Organization Design"
            },
            {
              "value": "649c36da2861608995d3285a",
              "label": "Organizational Planning"
            },
            {
              "value": "649c36da2861608995d3285b",
              "label": "Patience"
            },
            {
              "value": "649c36da2861608995d3285c",
              "label": "People Management"
            },
            {
              "value": "649c36da2861608995d3285d",
              "label": "Perl"
            },
            {
              "value": "649c36da2861608995d3285e",
              "label": "Persuasion"
            },
            {
              "value": "649c36da2861608995d3285f",
              "label": "PHP"
            },
            {
              "value": "649c36da2861608995d32860",
              "label": "PL/SQL"
            },
            {
              "value": "649c36da2861608995d32861",
              "label": "Plan Sales Training and Development"
            },
            {
              "value": "649c36da2861608995d32862",
              "label": "Politics and Diplomacy"
            },
            {
              "value": "649c36da2861608995d32863",
              "label": "Portfolio Analysis"
            },
            {
              "value": "649c36da2861608995d32864",
              "label": "Portfolio Management"
            },
            {
              "value": "649c36da2861608995d32865",
              "label": "Price Models"
            },
            {
              "value": "649c36da2861608995d32866",
              "label": "Pricing Strategy"
            },
            {
              "value": "649c36da2861608995d32867",
              "label": "Problem Solving"
            },
            {
              "value": "649c36da2861608995d32868",
              "label": "Product Development"
            },
            {
              "value": "649c36da2861608995d32869",
              "label": "Product Differentiation"
            },
            {
              "value": "649c36da2861608995d3286a",
              "label": "Product Life Cycle Management"
            },
            {
              "value": "649c36da2861608995d3286b",
              "label": "Product Portfolio Management"
            },
            {
              "value": "649c36da2861608995d3286c",
              "label": "Product Strategy"
            },
            {
              "value": "649c36da2861608995d3286d",
              "label": "Program Budgeting"
            },
            {
              "value": "649c36da2861608995d3286e",
              "label": "Program Direction"
            },
            {
              "value": "649c36da2861608995d3286f",
              "label": "Program Management"
            },
            {
              "value": "649c36da2861608995d32870",
              "label": "Program Mission and Vision"
            },
            {
              "value": "649c36da2861608995d32871",
              "label": "Program Priorities"
            },
            {
              "value": "649c36da2861608995d32872",
              "label": "Program Schedule Management"
            },
            {
              "value": "649c36da2861608995d32873",
              "label": "Program Scope"
            },
            {
              "value": "649c36da2861608995d32874",
              "label": "Project Management"
            },
            {
              "value": "649c36da2861608995d32875",
              "label": "Promoting Brand Knowledge"
            },
            {
              "value": "649c36da2861608995d32876",
              "label": "Promotion Strategy"
            },
            {
              "value": "649c36da2861608995d32877",
              "label": "Prospecting"
            },
            {
              "value": "649c36da2861608995d32878",
              "label": "Prototyping"
            },
            {
              "value": "649c36da2861608995d32879",
              "label": "Public Relations"
            },
            {
              "value": "649c36da2861608995d3287a",
              "label": "Public Speaking and Presentations"
            },
            {
              "value": "649c36da2861608995d3287b",
              "label": "Publicity"
            },
            {
              "value": "649c36da2861608995d3287c",
              "label": "Python"
            },
            {
              "value": "649c36da2861608995d3287d",
              "label": "Qualifying Leads"
            },
            {
              "value": "649c36da2861608995d3287e",
              "label": "Quantitative Data Management"
            },
            {
              "value": "649c36da2861608995d3287f",
              "label": "Quick Thinking"
            },
            {
              "value": "649c36da2861608995d32880",
              "label": "Quote Management"
            },
            {
              "value": "649c36da2861608995d32881",
              "label": "ReactJS"
            },
            {
              "value": "649c36da2861608995d32882",
              "label": "Recognizing Employee Performance"
            },
            {
              "value": "649c36da2861608995d32883",
              "label": "Regulatory Compliance"
            },
            {
              "value": "649c36da2861608995d32884",
              "label": "Regulatory Reporting"
            },
            {
              "value": "649c36da2861608995d32885",
              "label": "Relationship Management"
            },
            {
              "value": "649c36da2861608995d32886",
              "label": "Representational State Transfer (REST)"
            },
            {
              "value": "649c36da2861608995d32887",
              "label": "Reputation Management"
            },
            {
              "value": "649c36da2861608995d32888",
              "label": "Research"
            },
            {
              "value": "649c36da2861608995d32889",
              "label": "Resource Leveling"
            },
            {
              "value": "649c36da2861608995d3288a",
              "label": "Responsive and Mobile Design"
            },
            {
              "value": "649c36da2861608995d3288b",
              "label": "Responsiveness"
            },
            {
              "value": "649c36da2861608995d3288c",
              "label": "Retention Strategy"
            },
            {
              "value": "649c36da2861608995d3288d",
              "label": "Revenue and Margin Analysis"
            },
            {
              "value": "649c36da2861608995d3288e",
              "label": "Revenue Forecasting"
            },
            {
              "value": "649c36da2861608995d3288f",
              "label": "Revenue Management"
            },
            {
              "value": "649c36da2861608995d32890",
              "label": "Ruby"
            },
            {
              "value": "649c36da2861608995d32891",
              "label": "Running Sales Contests"
            },
            {
              "value": "649c36da2861608995d32892",
              "label": "Sales"
            },
            {
              "value": "649c36da2861608995d32893",
              "label": "Sales Benchmarking"
            },
            {
              "value": "649c36da2861608995d32894",
              "label": "Sales Collaterals"
            },
            {
              "value": "649c36da2861608995d32895",
              "label": "Sales Communications"
            },
            {
              "value": "649c36da2861608995d32896",
              "label": "Sales Forecasting"
            },
            {
              "value": "649c36da2861608995d32897",
              "label": "Sales Leadership"
            },
            {
              "value": "649c36da2861608995d32898",
              "label": "Sales Management"
            },
            {
              "value": "649c36da2861608995d32899",
              "label": "Sales Margin Management"
            },
            {
              "value": "649c36da2861608995d3289a",
              "label": "Sales Metrics and KPI"
            },
            {
              "value": "649c36da2861608995d3289b",
              "label": "Sales Operations"
            },
            {
              "value": "649c36da2861608995d3289c",
              "label": "Sales Organization Design"
            },
            {
              "value": "649c36da2861608995d3289d",
              "label": "Sales Partner Strategy"
            },
            {
              "value": "649c36da2861608995d3289e",
              "label": "Sales Pipeline Management"
            },
            {
              "value": "649c36da2861608995d3289f",
              "label": "Sales Planning"
            },
            {
              "value": "649c36da2861608995d328a0",
              "label": "Sales Program Formulation"
            },
            {
              "value": "649c36da2861608995d328a1",
              "label": "Sales Promotion"
            },
            {
              "value": "649c36da2861608995d328a2",
              "label": "Sales Recruiting"
            },
            {
              "value": "649c36da2861608995d328a3",
              "label": "Sales Reporting"
            },
            {
              "value": "649c36da2861608995d328a4",
              "label": "Sales Strategy"
            },
            {
              "value": "649c36da2861608995d328a5",
              "label": "Scenario Analysis"
            },
            {
              "value": "649c36da2861608995d328a6",
              "label": "Scientific Computing"
            },
            {
              "value": "649c36da2861608995d328a7",
              "label": "Search Engine Marketing (SEM)"
            },
            {
              "value": "649c36da2861608995d328a8",
              "label": "Search Engine Optimization (SEO)"
            },
            {
              "value": "649c36da2861608995d328a9",
              "label": "Shell"
            },
            {
              "value": "649c36da2861608995d328aa",
              "label": "Short-Term Financial Management"
            },
            {
              "value": "649c36da2861608995d328ab",
              "label": "Social and Opinion Research"
            },
            {
              "value": "649c36da2861608995d328ac",
              "label": "Social Benefit"
            },
            {
              "value": "649c36da2861608995d328ad",
              "label": "Social Media Marketing"
            },
            {
              "value": "649c36da2861608995d328ae",
              "label": "Software as a Service (SaaS)"
            },
            {
              "value": "649c36da2861608995d328af",
              "label": "Software Development Lifecycle"
            },
            {
              "value": "649c36da2861608995d328b0",
              "label": "Software Engineering"
            },
            {
              "value": "649c36da2861608995d328b1",
              "label": "Software Management"
            },
            {
              "value": "649c36da2861608995d328b2",
              "label": "Software Testing"
            },
            {
              "value": "649c36da2861608995d328b3",
              "label": "SQL"
            },
            {
              "value": "649c36da2861608995d328b4",
              "label": "Storage Systems and Management"
            },
            {
              "value": "649c36da2861608995d328b5",
              "label": "Strategic Forecasting"
            },
            {
              "value": "649c36da2861608995d328b6",
              "label": "Strategic Hiring"
            },
            {
              "value": "649c36da2861608995d328b7",
              "label": "Strategic Human Resource Management"
            },
            {
              "value": "649c36da2861608995d328b8",
              "label": "Strategic Planning and Analysis"
            },
            {
              "value": "649c36da2861608995d328b9",
              "label": "Strategic Procurement"
            },
            {
              "value": "649c36da2861608995d328ba",
              "label": "Strategic Tax Planning"
            },
            {
              "value": "649c36da2861608995d328bb",
              "label": "Strategy"
            },
            {
              "value": "649c36da2861608995d328bc",
              "label": "Strategy and Planning"
            },
            {
              "value": "649c36da2861608995d328bd",
              "label": "Strategy Execution"
            },
            {
              "value": "649c36da2861608995d328be",
              "label": "Strategy Formulation"
            },
            {
              "value": "649c36da2861608995d328bf",
              "label": "Structuring Acquisitions"
            },
            {
              "value": "649c36da2861608995d328c0",
              "label": "Succession Planning"
            },
            {
              "value": "649c36da2861608995d328c1",
              "label": "Supply Chain Management"
            },
            {
              "value": "649c36da2861608995d328c2",
              "label": "Sustaining a Brand"
            },
            {
              "value": "649c36da2861608995d328c3",
              "label": "SWOT Analysis"
            },
            {
              "value": "649c36da2861608995d328c4",
              "label": "System Design"
            },
            {
              "value": "649c36da2861608995d328c5",
              "label": "Target Market Analysis"
            },
            {
              "value": "649c36da2861608995d328c6",
              "label": "Targeted Communications"
            },
            {
              "value": "649c36da2861608995d328c7",
              "label": "Technical knowledge"
            },
            {
              "value": "649c36da2861608995d328c8",
              "label": "Technical Sales Leadership"
            },
            {
              "value": "649c36da2861608995d328c9",
              "label": "Technical Staff Management"
            },
            {
              "value": "649c36da2861608995d328ca",
              "label": "Technical Support"
            },
            {
              "value": "649c36da2861608995d328cb",
              "label": "Technology Trend Awareness"
            },
            {
              "value": "649c36da2861608995d328cc",
              "label": "Testing"
            },
            {
              "value": "649c36da2861608995d328cd",
              "label": "Time Management"
            },
            {
              "value": "649c36da2861608995d328ce",
              "label": "Timeliness"
            },
            {
              "value": "649c36da2861608995d328cf",
              "label": "Translation"
            },
            {
              "value": "649c36da2861608995d328d0",
              "label": "UI Testing"
            },
            {
              "value": "649c36da2861608995d328d1",
              "label": "UI Toolkits and Frameworks"
            },
            {
              "value": "649c36da2861608995d328d2",
              "label": "Unit Testing"
            },
            {
              "value": "649c36da2861608995d328d3",
              "label": "Upselling"
            },
            {
              "value": "649c36da2861608995d328d4",
              "label": "User Interface (UI) Design"
            },
            {
              "value": "649c36da2861608995d328d5",
              "label": "User Interface Design"
            },
            {
              "value": "649c36da2861608995d328d6",
              "label": "UX Design"
            },
            {
              "value": "649c36da2861608995d328d7",
              "label": "Variance Forecasting"
            },
            {
              "value": "649c36da2861608995d328d8",
              "label": "Version Repository"
            },
            {
              "value": "649c36da2861608995d328d9",
              "label": "Video Production"
            },
            {
              "value": "649c36da2861608995d328da",
              "label": "Web API"
            },
            {
              "value": "649c36da2861608995d328db",
              "label": "Web Architecture and Development Framework"
            },
            {
              "value": "649c36da2861608995d328dc",
              "label": "Web Services"
            },
            {
              "value": "649c36da2861608995d328dd",
              "label": "What-if Analysis"
            },
            {
              "value": "649c36da2861608995d328de",
              "label": "WordPress"
            },
            {
              "value": "649c36da2861608995d328df",
              "label": "Governance, Risk and Compliance"
            },
            {
              "value": "649c36da2861608995d328e0",
              "label": "SmartSuite"
            },
            {
              "value": "649c36da2861608995d328e1",
              "label": "RSA Archer"
            },
            {
              "value": "649c36da2861608995d328e2",
              "label": "Management Consulting"
            },
            {
              "value": "649c36da2861608995d328e3",
              "label": "Business Requirements"
            },
            {
              "value": "649c36da2861608995d328e4",
              "label": "Software Development Lifecycle (SDLC)"
            },
            {
              "value": "649c36da2861608995d328e5",
              "label": "Network Security"
            },
            {
              "value": "649c36da2861608995d328e6",
              "label": "Community Service"
            },
            {
              "value": "649c36da2861608995d328e7",
              "label": "Security Management"
            },
            {
              "value": "649c36da2861608995d328e8",
              "label": "Application Security"
            }
          ]
        },
        "Hobbies": {
          "label": "Hobbies",
          "slug": "hobbies",
          "field_type": "tagsfield",
          "choices": [
            {
              "value": "649c36da2861608995d328e9",
              "label": "Archery"
            },
            {
              "value": "649c36da2861608995d328ea",
              "label": "Astronomy"
            },
            {
              "value": "649c36da2861608995d328eb",
              "label": "Backpacking"
            },
            {
              "value": "649c36da2861608995d328ec",
              "label": "BASE Jumping"
            },
            {
              "value": "649c36da2861608995d328ed",
              "label": "Baseball"
            },
            {
              "value": "649c36da2861608995d328ee",
              "label": "Basketball"
            },
            {
              "value": "649c36da2861608995d328ef",
              "label": "Beekeeping"
            },
            {
              "value": "649c36da2861608995d328f0",
              "label": "Blacksmithing"
            },
            {
              "value": "649c36da2861608995d328f1",
              "label": "BMX"
            },
            {
              "value": "649c36da2861608995d328f2",
              "label": "Board Sports"
            },
            {
              "value": "649c36da2861608995d328f3",
              "label": "Bodybuilding"
            },
            {
              "value": "649c36da2861608995d328f4",
              "label": "Camping"
            },
            {
              "value": "649c36da2861608995d328f5",
              "label": "Canoeing"
            },
            {
              "value": "649c36da2861608995d328f6",
              "label": "Fishing"
            },
            {
              "value": "649c36da2861608995d328f7",
              "label": "Flag Football"
            },
            {
              "value": "649c36da2861608995d328f8",
              "label": "Flying"
            },
            {
              "value": "649c36da2861608995d328f9",
              "label": "Gardening"
            },
            {
              "value": "649c36da2861608995d328fa",
              "label": "Handball"
            },
            {
              "value": "649c36da2861608995d328fb",
              "label": "Hiking"
            },
            {
              "value": "649c36da2861608995d328fc",
              "label": "Horseback Riding"
            },
            {
              "value": "649c36da2861608995d328fd",
              "label": "Hunting"
            },
            {
              "value": "649c36da2861608995d328fe",
              "label": "Inline skating"
            },
            {
              "value": "649c36da2861608995d328ff",
              "label": "Jogging"
            },
            {
              "value": "649c36da2861608995d32900",
              "label": "Kayaking"
            },
            {
              "value": "649c36da2861608995d32901",
              "label": "Kitesurfing"
            },
            {
              "value": "649c36da2861608995d32902",
              "label": "Longboarding"
            },
            {
              "value": "649c36da2861608995d32903",
              "label": "Martial Arts"
            },
            {
              "value": "649c36da2861608995d32904",
              "label": "Meteorology"
            },
            {
              "value": "649c36da2861608995d32905",
              "label": "Motor Sports"
            },
            {
              "value": "649c36da2861608995d32906",
              "label": "Mountain Biking"
            },
            {
              "value": "649c36da2861608995d32907",
              "label": "Mountaineering"
            },
            {
              "value": "649c36da2861608995d32908",
              "label": "Nordic Skating"
            },
            {
              "value": "649c36da2861608995d32909",
              "label": "Paintball"
            },
            {
              "value": "649c36da2861608995d3290a",
              "label": "Photography"
            },
            {
              "value": "649c36da2861608995d3290b",
              "label": "Polo"
            },
            {
              "value": "649c36da2861608995d3290c",
              "label": "Powerlifting"
            },
            {
              "value": "649c36da2861608995d3290d",
              "label": "Rafting"
            },
            {
              "value": "649c36da2861608995d3290e",
              "label": "Rappelling"
            },
            {
              "value": "649c36da2861608995d3290f",
              "label": "Road Biking"
            },
            {
              "value": "649c36da2861608995d32910",
              "label": "Rock Climbing"
            },
            {
              "value": "649c36da2861608995d32911",
              "label": "Roller Skating"
            },
            {
              "value": "649c36da2861608995d32912",
              "label": "Rugby"
            },
            {
              "value": "649c36da2861608995d32913",
              "label": "Running"
            },
            {
              "value": "649c36da2861608995d32914",
              "label": "Sailing"
            },
            {
              "value": "649c36da2861608995d32915",
              "label": "Scuba Diving"
            },
            {
              "value": "649c36da2861608995d32916",
              "label": "Rowing"
            },
            {
              "value": "649c36da2861608995d32917",
              "label": "Shooting"
            },
            {
              "value": "649c36da2861608995d32918",
              "label": "Skateboarding"
            },
            {
              "value": "649c36da2861608995d32919",
              "label": "Skiing"
            },
            {
              "value": "649c36da2861608995d3291a",
              "label": "Skimboarding"
            },
            {
              "value": "649c36da2861608995d3291b",
              "label": "Skydiving"
            },
            {
              "value": "649c36da2861608995d3291c",
              "label": "Slacklining"
            },
            {
              "value": "649c36da2861608995d3291d",
              "label": "Snowboarding"
            },
            {
              "value": "649c36da2861608995d3291e",
              "label": "Snow Skiing"
            },
            {
              "value": "649c36da2861608995d3291f",
              "label": "Soccer"
            },
            {
              "value": "649c36da2861608995d32920",
              "label": "Surfing"
            },
            {
              "value": "649c36da2861608995d32921",
              "label": "Swimming"
            },
            {
              "value": "649c36da2861608995d32922",
              "label": "Taekwondo"
            },
            {
              "value": "649c36da2861608995d32923",
              "label": "Tai Chi"
            },
            {
              "value": "649c36da2861608995d32924",
              "label": "Walking"
            },
            {
              "value": "649c36da2861608995d32925",
              "label": "Water Sports"
            },
            {
              "value": "649c36da2861608995d32926",
              "label": "Baking"
            },
            {
              "value": "649c36da2861608995d32927",
              "label": "Bowling"
            },
            {
              "value": "649c36da2861608995d32928",
              "label": "Brazilian Jiu-Jitsu"
            },
            {
              "value": "649c36da2861608995d32929",
              "label": "Dance"
            },
            {
              "value": "649c36da2861608995d3292a",
              "label": "Ice Skating"
            },
            {
              "value": "649c36da2861608995d3292b",
              "label": "Painting"
            },
            {
              "value": "649c36da2861608995d3292c",
              "label": "Photography"
            },
            {
              "value": "649c36da2861608995d3292d",
              "label": "Singing"
            },
            {
              "value": "649c36da2861608995d3292e",
              "label": "Sketching"
            },
            {
              "value": "649c36da2861608995d3292f",
              "label": "Weight Lifting"
            },
            {
              "value": "649c36da2861608995d32930",
              "label": "Welding"
            },
            {
              "value": "649c36da2861608995d32931",
              "label": "Wood Carving"
            },
            {
              "value": "649c36da2861608995d32932",
              "label": "Woodworking"
            },
            {
              "value": "649c36da2861608995d32933",
              "label": "Yoga"
            }
          ]
        },
        "Linkedin": {
          "label": "Linkedin",
          "slug": "linkedin",
          "field_type": "linkfield"
        },
        "Twitter": {
          "label": "Twitter",
          "slug": "twitter",
          "field_type": "linkfield"
        },
        "Facebook": {
          "label": "Facebook",
          "slug": "facebook",
          "field_type": "linkfield"
        },
        "Instagram": {
          "label": "Instagram",
          "slug": "instagram",
          "field_type": "linkfield"
        },
        "Theme": {
          "label": "Theme",
          "slug": "theme",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "smartsuite_primary",
              "label": "SmartSuite Primary"
            },
            {
              "value": "smartsuite_secondary",
              "label": "SmartSuite Secondary"
            },
            {
              "value": "smartsuite_premium",
              "label": "SmartSuite Premium"
            }
          ]
        },
        "Date of Birth": {
          "label": "Date of Birth",
          "slug": "dob",
          "field_type": "datefield"
        },
        "Profile Image": {
          "label": "Profile Image",
          "slug": "profile_image",
          "field_type": "filefield"
        },
        "Cover Image": {
          "label": "Cover Image",
          "slug": "cover_image",
          "field_type": "filefield"
        },
        "Cover template": {
          "label": "Cover template",
          "slug": "cover_template",
          "field_type": "numberfield"
        },
        "Biography": {
          "label": "Biography",
          "slug": "biography",
          "field_type": "filefield"
        },
        "Phone": {
          "label": "Phone",
          "slug": "phone",
          "field_type": "phonefield"
        },
        "Teams": {
          "label": "Teams",
          "slug": "teams",
          "field_type": "linkedrecordfield"
        },
        "IP Address": {
          "label": "IP Address",
          "slug": "ip_address",
          "field_type": "ipaddressfield"
        },
        "Last Login": {
          "label": "Last Login",
          "slug": "last_login",
          "field_type": "datefield"
        },
        "Availability Status": {
          "label": "Availability Status",
          "slug": "availability_status",
          "field_type": "availabilitystatusfield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        }
      }
    },
    "Teams": {
      "name": "Teams",
      "id": "649c36d92861608995d3274f",
      "structure": {
        "Name": {
          "label": "Name",
          "slug": "name",
          "field_type": "textfield"
        },
        "Color": {
          "label": "Color",
          "slug": "color",
          "field_type": "colorpickerfield"
        },
        "Type": {
          "label": "Type",
          "slug": "type",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "2",
              "label": "Public"
            }
          ]
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "1",
              "label": "Active"
            },
            {
              "value": "2",
              "label": "Inactive"
            }
          ]
        },
        "Owners": {
          "label": "Owners",
          "slug": "owners",
          "field_type": "userfield"
        },
        "Members": {
          "label": "Members",
          "slug": "members",
          "field_type": "userfield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        }
      }
    },
    "RO Fuel Types": {
      "name": "RO Fuel Types",
      "id": "652b1faba9847148f31cee2d",
      "structure": {
        "Fuel": {
          "label": "Fuel",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Fuel Name": {
          "label": "Fuel Name",
          "slug": "sf5700c949",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "2c63f1e8-7161-479a-bbd8-64967dfc3c19",
              "label": "Adulterated materials"
            },
            {
              "value": "807e9afb-adc4-4890-9b64-1fd82490c492",
              "label": "Any materials, substances or products which are not contained in the above categories"
            },
            {
              "value": "d0ea8951-613e-4986-8dc8-27ada5102cc8",
              "label": "Any materials, substances or products whose use has been banned by law."
            },
            {
              "value": "7ff9c14b-ec58-4fee-9092-58917fc56807",
              "label": "Bale Twine"
            },
            {
              "value": "8de67372-cdd7-49ce-a638-3e63bee9e304",
              "label": "Biogas from anaerobic digestion"
            },
            {
              "value": "f0cf7451-65d7-4628-b928-caac608c5195",
              "label": "Biogas from gasification or pyrolysis"
            },
            {
              "value": "0d92891e-0646-407d-bad5-bdae1108f1f9",
              "label": "Biomethane from anaerobic digestion"
            },
            {
              "value": "db3a739e-de70-4ea0-a10e-4da8c3dcf0a4",
              "label": "Biomethane from gasification or pyrolysis"
            },
            {
              "value": "ec366019-5536-4cd4-8ecc-0e3c415ffd64",
              "label": "Cereal co-product"
            },
            {
              "value": "0dfbb378-2a3a-4664-8236-bfeddedca708",
              "label": "Coal"
            },
            {
              "value": "460e9edb-f10e-4d2f-8cc6-60ae7a70925a",
              "label": "Commercial waste"
            },
            {
              "value": "7e5d23e1-2495-49ea-b7c2-c25e131da5ed",
              "label": "Contaminated materials, substances or products resulting from remedial action with respect to land."
            },
            {
              "value": "b6e074d4-dfc2-4ea0-8be9-3b5e31451ba2",
              "label": "Diesel (GT Oil)"
            },
            {
              "value": "1f2fc6f4-48e5-4f4c-bd67-79748171a2c1",
              "label": "Food waste"
            },
            {
              "value": "8c5a55e5-f522-4c0b-a01f-8522818c4b0c",
              "label": "Gas"
            },
            {
              "value": "13f224a2-9e98-4fa4-ae8f-17f6d5651144",
              "label": "Gas Oil"
            },
            {
              "value": "7b105f1e-85f6-4c6c-b71d-70db4b7cabed",
              "label": "Grape Seed Flower"
            },
            {
              "value": "af916735-65ab-44c3-8116-5220d9b6d9b7",
              "label": "HCA"
            },
            {
              "value": "25c7a42a-3dad-460f-b5c0-55f2176bd991",
              "label": "HFO"
            },
            {
              "value": "3d0b8301-56d1-49e0-baf8-bdc3bbdc4962",
              "label": "Household waste"
            },
            {
              "value": "b00ba122-42e4-4981-acd4-ffd7a5a71a61",
              "label": "Industrial waste"
            },
            {
              "value": "0bd4596c-7c6e-4348-a2b7-229e4c6fa4b7",
              "label": "Kerosene"
            },
            {
              "value": "95c50e8c-4c87-43dd-a591-ebe5691b7551",
              "label": "Machining or finishing residues"
            },
            {
              "value": "e21e5c63-2521-43ac-837d-926c63212941",
              "label": "Materials contaminated or soiled as a result of planned actions"
            },
            {
              "value": "41f52a3d-b7bc-4f21-a235-be6e9ef5c991",
              "label": "Materials spilled, lost or having undergone other mishap, including any materials, equipment, etc, contaminated as a result o"
            },
            {
              "value": "8178a071-d0b6-4d08-b445-0f8f06e2dda1",
              "label": "Meat and bone meal"
            },
            {
              "value": "503eecf9-8122-4321-b584-2e7df09d939b",
              "label": "MFO"
            },
            {
              "value": "9f4a9818-808f-4177-b87b-f4dc781763d1",
              "label": "Miscanthus"
            },
            {
              "value": "0baaa5ab-3866-45a4-8d1b-9356b6725723",
              "label": "Municipal waste"
            },
            {
              "value": "858d28f1-ea39-4173-b219-9d4914f06c53",
              "label": "Natural Gas"
            },
            {
              "value": "b49713cc-d9f4-4172-8c6f-b12c677072dc",
              "label": "Non-household municipal waste"
            },
            {
              "value": "efd76e7f-2585-44fd-a4b4-df259a35cb27",
              "label": "Oat Pellets (CCP)"
            },
            {
              "value": "62f4f69d-6ec0-49bf-a3d9-eb509d34b703",
              "label": "Off-specification products"
            },
            {
              "value": "262af555-524f-43cf-9eb5-9f72c1c95c5f",
              "label": "Oil"
            },
            {
              "value": "aa417c7d-4a05-472d-bd24-e51354ca2c6e",
              "label": "Oil-Eco"
            },
            {
              "value": "0a611dbc-f328-4f88-9e79-38c97103f525",
              "label": "Olive Cake"
            },
            {
              "value": "15582fc9-2fcf-4dac-903e-373181980232",
              "label": "Olive Pellets"
            },
            {
              "value": "24e721b7-5554-4111-a634-3e4e981cd409",
              "label": "Olive Pulp (BFWD)"
            },
            {
              "value": "f7b7d0f4-fcad-4e39-8f53-4c9da04e3746",
              "label": "Other fossil fuel"
            },
            {
              "value": "1f9296c0-90f9-45e2-8d88-82046ea075ca",
              "label": "Other solid biomass"
            },
            {
              "value": "8256dbd3-9f87-4d3f-9832-07f3a3af91b9",
              "label": "Palm Kernel"
            },
            {
              "value": "d5221e51-a0ad-4899-966a-18c4ed65ab1c",
              "label": "Palm Kernel Expellor"
            },
            {
              "value": "db2bef73-0f67-4858-977e-bb7bef50aa02",
              "label": "Paper production residues"
            },
            {
              "value": "9416ab1d-ec01-4636-8ee7-8827276086c7",
              "label": "Petcoke"
            },
            {
              "value": "462f17fc-4de4-41f5-a86a-47098245a32e",
              "label": "Polymer"
            },
            {
              "value": "756d7b1c-2304-4e1a-b83b-66086cc0bfd5",
              "label": "Production or consumption residues not otherwise specified below"
            },
            {
              "value": "728a2d14-c2f7-44b4-afe2-6c8ca5df5691",
              "label": "Products for which the holder has no further use"
            },
            {
              "value": "1347b86e-430b-41bb-ba82-eb03d704d061",
              "label": "Products whose date for appropriate use has expired."
            },
            {
              "value": "1573b1d1-dd95-401e-ae70-74cd427945ab",
              "label": "Propane"
            },
            {
              "value": "a8ef09ca-8bef-40ba-9942-03495b44a9a4",
              "label": "Rape meal"
            },
            {
              "value": "7aace503-658b-4d68-9054-e0635da1c60b",
              "label": "Refuse-derived fuel"
            },
            {
              "value": "32af82a8-7cbb-493c-b1a6-f2a5eb1f6fc2",
              "label": "Residues from pollution abatement processes"
            },
            {
              "value": "3ac397e7-0f98-4151-b91f-c066cf04e7cb",
              "label": "Residues from raw materials extraction and processing"
            },
            {
              "value": "d1e15eeb-7635-489d-b54e-2d166c59291e",
              "label": "Residues of industrial processes"
            },
            {
              "value": "963409c4-cf03-40df-bea0-bb6f91acd0d4",
              "label": "Sawdust"
            },
            {
              "value": "fc902262-92e9-43df-878b-cd946a9717d8",
              "label": "Sewage Sludge"
            },
            {
              "value": "741c9309-e74f-4e8a-b2f7-5e9f80b25f5f",
              "label": "Shea Meal"
            },
            {
              "value": "b89d9e56-92bb-4b7a-a5b4-c83b380caf1c",
              "label": "Short rotation poplar"
            },
            {
              "value": "e998785b-ea08-4f57-8e63-828c1d3e13cd",
              "label": "Solid recovered fuel"
            },
            {
              "value": "15f40eb3-8a61-4a74-bdb5-0487ac669a9c",
              "label": "Substances which no longer perform satisfactorily"
            },
            {
              "value": "a4c708c1-8cf8-49b5-b09c-9740dfccb138",
              "label": "Sunflower Pellets"
            },
            {
              "value": "a6161eb5-5bc3-4808-8a0e-ace6e02a95ce",
              "label": "Treated waste/recycled wood"
            },
            {
              "value": "4e5bde6e-9567-43b4-a233-5ffe399f4503",
              "label": "Untreated/clean waste/recycled wood"
            },
            {
              "value": "1b3497dc-37e8-453e-84ac-37327fc471e5",
              "label": "Unusable parts"
            },
            {
              "value": "00c89d97-423f-407f-8a9e-9f35536ec065",
              "label": "Virgin Wood"
            },
            {
              "value": "7117631d-9e3e-42ad-8743-8e4b589e0283",
              "label": "Waste-derived fuel"
            },
            {
              "value": "37d2f805-51fe-4a18-852a-8eef4065848a",
              "label": "Willow Coppice"
            },
            {
              "value": "edd65aa8-d6c5-4b84-b9ef-8908f56c1d67",
              "label": "Wood (Sawmill Offcuts)"
            },
            {
              "value": "7659ed93-e367-42f1-9fbb-ca58735ccc23",
              "label": "Wood Chip"
            },
            {
              "value": "f011d881-4686-4723-8278-c599b3eae784",
              "label": "Wood Pallets"
            },
            {
              "value": "49cf8820-2327-4a62-9f82-304357df5dc4",
              "label": "Wood Pellets"
            }
          ]
        },
        "Fuel Type": {
          "label": "Fuel Type",
          "slug": "s5e1c8f0fb",
          "field_type": "textfield"
        },
        "Fuel References": {
          "label": "Fuel References",
          "slug": "sc97j4s6",
          "field_type": "linkedrecordfield"
        },
        "Fuel Category": {
          "label": "Fuel Category",
          "slug": "s360a1e593",
          "field_type": "textfield"
        },
        "Fuel Specification": {
          "label": "Fuel Specification",
          "slug": "s495f4278e",
          "field_type": "textfield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "se3201d482",
          "field_type": "recordidfield"
        }
      }
    },
    "RO Fuel Use": {
      "name": "RO Fuel Use",
      "id": "652b1faba9847148f31cee2c",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Range": {
          "label": "Date Range",
          "slug": "s74d33a2c5",
          "field_type": "daterangefield"
        },
        "Fuel usage": {
          "label": "Fuel usage",
          "slug": "s90eb9eca4",
          "field_type": "numberfield"
        },
        "Unit": {
          "label": "Unit",
          "slug": "se2a4841a4",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "7c048279-ada5-441c-901d-661143c213c2",
              "label": "Kg"
            },
            {
              "value": "631e2a99-bb30-443b-9aef-bde317848c02",
              "label": "Tonne"
            },
            {
              "value": "fc2cb8f0-713c-4c3b-bc5c-88667bedbca8",
              "label": "Nm3"
            },
            {
              "value": "8f42a253-ba54-449a-8952-f083a8572087",
              "label": "m3"
            },
            {
              "value": "6a1a3fa5-47bb-4128-9ff9-c507a6c952d6",
              "label": "l"
            }
          ]
        },
        "Generator": {
          "label": "Generator",
          "slug": "sde79d6344",
          "field_type": "linkedrecordfield"
        },
        "Output Data Submission": {
          "label": "Output Data Submission",
          "slug": "se870f869d",
          "field_type": "linkedrecordfield"
        },
        "Fuel Type": {
          "label": "Fuel Type",
          "slug": "s76aa5456b",
          "field_type": "linkedrecordfield"
        },
        "GCV": {
          "label": "GCV",
          "slug": "s08685e593",
          "field_type": "numberfield"
        },
        "GCV Unit": {
          "label": "GCV Unit",
          "slug": "s41a668f7e",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "f0d9ba1c-2a8b-4b23-9594-25c796a7ff31",
              "label": "MJ/kg"
            },
            {
              "value": "56d08d19-cd2d-4026-83b2-86b0f7874206",
              "label": "MJ/Nm3"
            }
          ]
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "s222b9c85b",
          "field_type": "recordidfield"
        }
      }
    },
    "RO Output Data Submissions": {
      "name": "RO Output Data Submissions",
      "id": "652b1faba9847148f31cee2e",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Link to RHI": {
          "label": "Link to RHI",
          "slug": "s27dfce344",
          "field_type": "linkedrecordfield"
        },
        "Generator": {
          "label": "Generator",
          "slug": "s24025c4e3",
          "field_type": "linkedrecordfield"
        },
        "Date Range": {
          "label": "Date Range",
          "slug": "sd9b4f228e",
          "field_type": "daterangefield"
        },
        "Submitted": {
          "label": "Submitted",
          "slug": "sd26df33a1",
          "field_type": "yesnofield"
        },
        "Fuel use records": {
          "label": "Fuel use records",
          "slug": "se0d6e5770",
          "field_type": "linkedrecordfield"
        },
        "Meter reading": {
          "label": "Meter reading",
          "slug": "see3b5f6f9",
          "field_type": "linkedrecordfield"
        },
        "Link to Fuel Use": {
          "label": "Link to Fuel Use",
          "slug": "sh40hv0m",
          "field_type": "linkedrecordfield"
        },
        "Link to Generators": {
          "label": "Link to Generators",
          "slug": "s13s8xm1",
          "field_type": "linkedrecordfield"
        },
        "Link to Ongoing Support Services": {
          "label": "Link to Ongoing Support Services",
          "slug": "s2bzhcq9",
          "field_type": "linkedrecordfield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "sc862da0f0",
          "field_type": "recordidfield"
        }
      }
    },
    "Company Policy": {
      "name": "Company Policy",
      "id": "66acf65660cea0f15b33265a",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            },
            {
              "value": "kviPf",
              "label": "In review"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "SOP": {
      "name": "SOP",
      "id": "66b0cc286117d7c0f5d35bce",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "RHI"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Smartsuite"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Finance"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "HR"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "RO"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "CHP"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Fuel"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            },
            {
              "value": "pRur4",
              "label": "Audits"
            },
            {
              "value": "Sz6gL",
              "label": "Heat Pump"
            },
            {
              "value": "11wND",
              "label": "Internal"
            },
            {
              "value": "rNgz1",
              "label": "Admin"
            },
            {
              "value": "Z9c60",
              "label": "Troubleshooting"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "HR Forms": {
      "name": "HR Forms",
      "id": "66b0cc5d9d7506ace9c51043",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Ofgem and Guidance Documents": {
      "name": "Ofgem and Guidance Documents",
      "id": "66b0cc6cfbf43590c01f2cfd",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            },
            {
              "value": "VJP9I",
              "label": "Ofgem Document"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Certificate Transfers": {
      "name": "Certificate Transfers",
      "id": "652b275124598b303fc3c184",
      "structure": {
        "Transfer": {
          "label": "Transfer",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Transfer Date": {
          "label": "Transfer Date",
          "slug": "sbb852f853",
          "field_type": "datefield"
        },
        "REGOs Transferred": {
          "label": "REGOs Transferred",
          "slug": "sc69caf198",
          "field_type": "numberfield"
        },
        "ROCs Transferred": {
          "label": "ROCs Transferred",
          "slug": "se975da7b3",
          "field_type": "numberfield"
        },
        "Generator": {
          "label": "Generator",
          "slug": "s6eeae75f6",
          "field_type": "linkedrecordfield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "sec9fc21c3",
          "field_type": "recordidfield"
        }
      }
    },
    "Email Templates (template)": {
      "name": "Email Templates (template)",
      "id": "66acf65660cea0f15b332668",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Operating Agreement"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "By Laws"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Code of Conduct"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Employment Agreement"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Non Disclosure Agreement"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Non Compete Agreement"
            },
            {
              "value": "0899d62f-c947-409f-a025-99952566d78f",
              "label": "Certificate of Incorporation"
            },
            {
              "value": "dea009e4-7dea-48e3-900d-c358e089d07f",
              "label": "Articles of Organization"
            },
            {
              "value": "8713a510-5cde-464e-ab83-e1c275cc8dd8",
              "label": "Business License"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Actions": {
          "label": "Review Actions",
          "slug": "s5f6c45ee0",
          "field_type": "checklistfield"
        }
      }
    },
    "Certificate Transfer Agreements": {
      "name": "Certificate Transfer Agreements",
      "id": "663b4ce26ac85b895d012018",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Effective Range": {
          "label": "Effective Range",
          "slug": "sde917e7fc",
          "field_type": "daterangefield"
        },
        "Transferee": {
          "label": "Transferee",
          "slug": "s470cbc691",
          "field_type": "linkedrecordfield"
        },
        "Station": {
          "label": "Station",
          "slug": "s0914e8867",
          "field_type": "linkedrecordfield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "s8864bfc0f",
          "field_type": "recordidfield"
        }
      }
    },
    "Site visit form": {
      "name": "Site visit form",
      "id": "66acf65660cea0f15b33266e",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Customer name and address": {
          "label": "Customer name and address",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Document Check": {
          "label": "Document Check",
          "slug": "s732fca2a9",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "rZlxL",
              "label": "Emissions Certificate"
            },
            {
              "value": "IEx5u",
              "label": "Woodsure Certificate"
            },
            {
              "value": "dloy6",
              "label": "Planning and permit docs"
            },
            {
              "value": "2XD4T",
              "label": "Commissioning certs"
            },
            {
              "value": "s8m1X",
              "label": "LOA"
            },
            {
              "value": "XWHsu",
              "label": "MSC Cert if under 45kw"
            },
            {
              "value": "0RUOG",
              "label": "Business rates/council tax bill"
            },
            {
              "value": "ZqWYN",
              "label": "Invoice for products sold"
            }
          ]
        },
        "Date": {
          "label": "Date",
          "slug": "s186af80c6",
          "field_type": "datefield"
        },
        "Do the ineligible heat sources need to be metered": {
          "label": "Do the ineligible heat sources need to be metered",
          "slug": "s72934f5c5",
          "field_type": "textfield"
        },
        "Is the plant room full enclosed?": {
          "label": "Is the plant room full enclosed?",
          "slug": "s5e9d2c383",
          "field_type": "textfield"
        },
        "Are all the heat uses fully enclosed?": {
          "label": "Are all the heat uses fully enclosed?",
          "slug": "se2bc23c0a",
          "field_type": "textfield"
        },
        "BSL number": {
          "label": "BSL number",
          "slug": "s12e869b4d",
          "field_type": "textfield"
        },
        "Is there external ducting?": {
          "label": "Is there external ducting?",
          "slug": "s62c8809a8",
          "field_type": "textfield"
        },
        "Does the heat pump have heat recovery?": {
          "label": "Does the heat pump have heat recovery?",
          "slug": "s295d4252a",
          "field_type": "textfield"
        },
        "Drying products": {
          "label": "Drying products",
          "slug": "s02316ceff",
          "field_type": "textfield"
        },
        "Inhibitor type and percentage?": {
          "label": "Inhibitor type and percentage?",
          "slug": "s48cc5c7ec",
          "field_type": "textfield"
        },
        "Glycol type and percentage?": {
          "label": "Glycol type and percentage?",
          "slug": "s89e81df69",
          "field_type": "textfield"
        },
        "Replaced heating system?": {
          "label": "Replaced heating system?",
          "slug": "sb332ab564",
          "field_type": "textfield"
        },
        "Capital cost if installation and funding?": {
          "label": "Capital cost if installation and funding?",
          "slug": "scd205a8f4",
          "field_type": "textfield"
        },
        "Company over 250 employees?": {
          "label": "Company over 250 employees?",
          "slug": "s719b822f9",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "4McPC",
              "label": "Yes"
            },
            {
              "value": "WYTWf",
              "label": "No"
            }
          ]
        },
        "Does the site export heat?": {
          "label": "Does the site export heat?",
          "slug": "s01221c332",
          "field_type": "textfield"
        },
        "Is the installation or site joinly owned?": {
          "label": "Is the installation or site joinly owned?",
          "slug": "se2f72ae82",
          "field_type": "textfield"
        },
        "Number of staff and timings where heating is used?": {
          "label": "Number of staff and timings where heating is used?",
          "slug": "s51b7b7698",
          "field_type": "textfield"
        },
        "Annual expected generation of plant?": {
          "label": "Annual expected generation of plant?",
          "slug": "s4ce43adbf",
          "field_type": "textfield"
        },
        "Any previous commisioning or decommisioning?": {
          "label": "Any previous commisioning or decommisioning?",
          "slug": "s14ab6de85",
          "field_type": "textfield"
        },
        "Previous RHI if applicable?": {
          "label": "Previous RHI if applicable?",
          "slug": "sf460d1765",
          "field_type": "textfield"
        },
        "Meter checks": {
          "label": "Meter checks",
          "slug": "s2106b9467",
          "field_type": "textfield"
        },
        "Have you drawn the schematic?": {
          "label": "Have you drawn the schematic?",
          "slug": "s7d30e3ea6",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "uN2Oy",
              "label": "Yes"
            },
            {
              "value": "BiPIN",
              "label": "No"
            }
          ]
        },
        "Have you created the site plan?": {
          "label": "Have you created the site plan?",
          "slug": "s3ba5ba6db",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "M2V6W",
              "label": "Yes"
            },
            {
              "value": "AeBd0",
              "label": "No"
            }
          ]
        },
        "Link to Project": {
          "label": "Link to Project",
          "slug": "sbfef35ce2",
          "field_type": "linkedrecordfield"
        },
        "Meter Readings": {
          "label": "Meter Readings",
          "slug": "s6d300e943",
          "field_type": "textfield"
        },
        "Files and Images": {
          "label": "Files and Images",
          "slug": "sac0e5ffcf",
          "field_type": "filefield"
        }
      }
    },
    "Job Checklists": {
      "name": "Job Checklists",
      "id": "66b22cd41e6319243cb9142e",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "oDhVz",
              "label": "Fuel"
            },
            {
              "value": "MDe3l",
              "label": "RHI"
            },
            {
              "value": "FT9Gx",
              "label": "RO"
            },
            {
              "value": "x7K40",
              "label": "Site Visit"
            },
            {
              "value": "qWQ4H",
              "label": "All"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Actions": {
          "label": "Review Actions",
          "slug": "s9debc4a4a",
          "field_type": "checklistfield"
        },
        "Multiple Select": {
          "label": "Multiple Select",
          "slug": "s732fca2a9",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "rZlxL",
              "label": "Emissions Certificate"
            },
            {
              "value": "IEx5u",
              "label": "Woodsure Certificate"
            },
            {
              "value": "dloy6",
              "label": "Planning and permit docs"
            },
            {
              "value": "2XD4T",
              "label": "Commissioning certs"
            },
            {
              "value": "s8m1X",
              "label": "LOA"
            },
            {
              "value": "XWHsu",
              "label": "MSC Cert if under 45kw"
            },
            {
              "value": "0RUOG",
              "label": "Business rates/council tax bill"
            },
            {
              "value": "ZqWYN",
              "label": "Invoice for products sold"
            }
          ]
        },
        "Multiple Select 2": {
          "label": "Multiple Select 2",
          "slug": "secca035ba",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "SPXxA",
              "label": "External Pipework leaving plant room"
            },
            {
              "value": "sqhRR",
              "label": "External Pipework arriving at each building"
            },
            {
              "value": "TOcPF",
              "label": "Heat uses within each building"
            },
            {
              "value": "O5AeM",
              "label": "All heat sources"
            },
            {
              "value": "2dKn3",
              "label": "Electrical immersions"
            }
          ]
        },
        "Text": {
          "label": "Text",
          "slug": "sc34576730",
          "field_type": "textfield"
        },
        "Full Name": {
          "label": "Full Name",
          "slug": "s7ed803798",
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
        "Date": {
          "label": "Date",
          "slug": "s186af80c6",
          "field_type": "datefield"
        },
        "Multiple Select 3": {
          "label": "Multiple Select 3",
          "slug": "sec7b91ede",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "8KEQK",
              "label": "Create site plan"
            },
            {
              "value": "SASyd",
              "label": "Create Schematic"
            },
            {
              "value": "viijP",
              "label": "External Ducting drawing if applicable"
            }
          ]
        },
        "Text 1": {
          "label": "Text 1",
          "slug": "s4153df68e",
          "field_type": "textfield"
        },
        "Do the ineligible heat sources need to be metered": {
          "label": "Do the ineligible heat sources need to be metered",
          "slug": "s72934f5c5",
          "field_type": "textfield"
        },
        "Is the plant room full enclosed?": {
          "label": "Is the plant room full enclosed?",
          "slug": "s5e9d2c383",
          "field_type": "textfield"
        },
        "Are all the heat uses fully enclosed?": {
          "label": "Are all the heat uses fully enclosed?",
          "slug": "se2bc23c0a",
          "field_type": "textfield"
        },
        "BSL number": {
          "label": "BSL number",
          "slug": "s12e869b4d",
          "field_type": "textfield"
        },
        "Is there external ducting?": {
          "label": "Is there external ducting?",
          "slug": "s62c8809a8",
          "field_type": "textfield"
        },
        "Does the heat pump have heat recovery?": {
          "label": "Does the heat pump have heat recovery?",
          "slug": "s295d4252a",
          "field_type": "textfield"
        },
        "Drying products": {
          "label": "Drying products",
          "slug": "s02316ceff",
          "field_type": "textfield"
        },
        "Inhibitor type and percentage?": {
          "label": "Inhibitor type and percentage?",
          "slug": "s48cc5c7ec",
          "field_type": "textfield"
        },
        "Glycol type and percentage?": {
          "label": "Glycol type and percentage?",
          "slug": "s89e81df69",
          "field_type": "textfield"
        },
        "Replaced heating system?": {
          "label": "Replaced heating system?",
          "slug": "sb332ab564",
          "field_type": "textfield"
        },
        "Capital cost if installation and funding?": {
          "label": "Capital cost if installation and funding?",
          "slug": "scd205a8f4",
          "field_type": "textfield"
        },
        "Company over 250 employees?": {
          "label": "Company over 250 employees?",
          "slug": "s719b822f9",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "4McPC",
              "label": "Yes"
            },
            {
              "value": "WYTWf",
              "label": "No"
            }
          ]
        },
        "Does the site export heat?": {
          "label": "Does the site export heat?",
          "slug": "s01221c332",
          "field_type": "textfield"
        },
        "Is the installation or site joinly owned?": {
          "label": "Is the installation or site joinly owned?",
          "slug": "se2f72ae82",
          "field_type": "textfield"
        },
        "Number of staff and timings where heating is used?": {
          "label": "Number of staff and timings where heating is used?",
          "slug": "s51b7b7698",
          "field_type": "textfield"
        },
        "Annual expected generation of plant?": {
          "label": "Annual expected generation of plant?",
          "slug": "s4ce43adbf",
          "field_type": "textfield"
        },
        "Any previous commisioning or decommisioning?": {
          "label": "Any previous commisioning or decommisioning?",
          "slug": "s14ab6de85",
          "field_type": "textfield"
        },
        "Previous RHI if applicable?": {
          "label": "Previous RHI if applicable?",
          "slug": "sf460d1765",
          "field_type": "textfield"
        },
        "Meter checks": {
          "label": "Meter checks",
          "slug": "s2106b9467",
          "field_type": "textfield"
        }
      }
    },
    "Problems": {
      "name": "Problems",
      "id": "6515a898cdbab2984e634bc1",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Unreviewed"
            },
            {
              "value": "in_progress",
              "label": "In Review"
            },
            {
              "value": "27NST",
              "label": "Not Addressed"
            },
            {
              "value": "complete",
              "label": "Resolved"
            }
          ]
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Assigned to": {
          "label": "Assigned to",
          "slug": "sd3fcbd532",
          "field_type": "userfield"
        },
        "Alert Type": {
          "label": "Alert Type",
          "slug": "s5c7d990d5",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "b975bff4-193f-4cae-b772-550aa7f25c1a",
              "label": "Internal"
            },
            {
              "value": "ed8036c9-5a9b-4217-afbe-35c9499ccb8a",
              "label": "External"
            }
          ]
        },
        "Associated Improvements": {
          "label": "Associated Improvements",
          "slug": "s9bd0c5505",
          "field_type": "linkedrecordfield"
        },
        "Affected Customer": {
          "label": "Affected Customer",
          "slug": "s23a3545ec",
          "field_type": "linkedrecordfield"
        },
        "Affected Projects": {
          "label": "Affected Projects",
          "slug": "sc987b3562",
          "field_type": "linkedrecordfield"
        },
        "Attachments": {
          "label": "Attachments",
          "slug": "s097f3c0ec",
          "field_type": "filefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "3",
              "label": "Critical"
            },
            {
              "value": "5",
              "label": "Not Evaluated"
            },
            {
              "value": "2",
              "label": "High"
            },
            {
              "value": "1",
              "label": "Medium"
            },
            {
              "value": "0",
              "label": "Low"
            }
          ]
        },
        "Link to Delivery Checks": {
          "label": "Link to Delivery Checks",
          "slug": "sno1p494",
          "field_type": "linkedrecordfield"
        },
        "Link to Meetings": {
          "label": "Link to Meetings",
          "slug": "s1kgfw8m",
          "field_type": "linkedrecordfield"
        },
        "Tags": {
          "label": "Tags",
          "slug": "tag",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "6516d55b95d3155eb3538bbe",
              "label": "Customer Issue"
            },
            {
              "value": "66a0fb6406c89a5fd671b98b",
              "label": "Customer Complaint"
            },
            {
              "value": "6516d9ad30307bfdde538bbc",
              "label": "Hardware Issue"
            },
            {
              "value": "6516d55b95d3155eb3538bbf",
              "label": "Installer Issue"
            },
            {
              "value": "6516d9ad30307bfdde538bba",
              "label": "Ofgem Issue"
            },
            {
              "value": "6516f5c512e3de581669281e",
              "label": "Quoting and Invoicing"
            },
            {
              "value": "6516d55b95d3155eb3538bc0",
              "label": "YES issue"
            },
            {
              "value": "WRKp2",
              "label": "SmartSuite"
            },
            {
              "value": "FDJPR",
              "label": "Process"
            }
          ]
        },
        "RHI": {
          "label": "RHI",
          "slug": "se8bfee7e3",
          "field_type": "linkedrecordfield"
        },
        "Open folder": {
          "label": "Open folder",
          "slug": "s307b4c070",
          "field_type": "linkfield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s49d4ae03f",
          "field_type": "linkedrecordfield"
        },
        "Affected Support Services": {
          "label": "Affected Support Services",
          "slug": "sd79b4de66",
          "field_type": "linkedrecordfield"
        },
        "Deadline": {
          "label": "Deadline",
          "slug": "s5afc0a52e",
          "field_type": "duedatefield"
        },
        "Link to Craig Dashboard": {
          "label": "Link to Craig Dashboard",
          "slug": "sgvto902",
          "field_type": "linkedrecordfield"
        },
        "Link to Gregor Dashboard": {
          "label": "Link to Gregor Dashboard",
          "slug": "syx53p8z",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 1": {
          "label": "Link to Craig Dashboard 1",
          "slug": "sdfwegbd",
          "field_type": "linkedrecordfield"
        },
        "Link to Trudy Dashboard 1": {
          "label": "Link to Trudy Dashboard 1",
          "slug": "suvwucn4",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 2": {
          "label": "Link to Craig Dashboard 2",
          "slug": "s3maon1b",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 3": {
          "label": "Link to Craig Dashboard 3",
          "slug": "s4r61svy",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 4": {
          "label": "Link to Craig Dashboard 4",
          "slug": "sppcz9hu",
          "field_type": "linkedrecordfield"
        },
        "Link to Adam Dashboard": {
          "label": "Link to Adam Dashboard",
          "slug": "sewy6jxv",
          "field_type": "linkedrecordfield"
        },
        "Resolution": {
          "label": "Resolution",
          "slug": "sd9f187c8f",
          "field_type": "richtextareafield"
        },
        "Link to Gregor Dashboard 1": {
          "label": "Link to Gregor Dashboard 1",
          "slug": "snv43c78",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Projects": {
      "name": "Projects",
      "id": "66aa326c6ecfe92222fab091",
      "structure": {
        "Project Name": {
          "label": "Project Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Project Description": {
          "label": "Project Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Project Documents": {
          "label": "Project Documents",
          "slug": "sf069f8d6b",
          "field_type": "filefield"
        },
        "Project ID": {
          "label": "Project ID",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Project Manager": {
          "label": "Project Manager",
          "slug": "s32c34a296",
          "field_type": "userfield"
        },
        "Stage": {
          "label": "Stage",
          "slug": "s88e7dacd4",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "ready_for_review",
              "label": "In Process"
            },
            {
              "value": "complete",
              "label": "Complete"
            },
            {
              "value": "aa8742cd-11d9-45a4-b178-aa05942d4e7e",
              "label": "Blocked"
            },
            {
              "value": "676e6eb8-56e6-4c92-bb5b-00d7a32a4498",
              "label": "On Hold"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "s01b37168c",
          "field_type": "duedatefield"
        },
        "Progress": {
          "label": "Progress",
          "slug": "s682e85aea",
          "field_type": "numbersliderfield"
        },
        "Project Goals": {
          "label": "Project Goals",
          "slug": "s4e4784685",
          "field_type": "textareafield"
        },
        "Project Tasks": {
          "label": "Project Tasks",
          "slug": "s6c9e47694",
          "field_type": "linkedrecordfield"
        },
        "Open Tasks": {
          "label": "Open Tasks",
          "slug": "scf8cee89b",
          "field_type": "countfield"
        },
        "Type": {
          "label": "Type",
          "slug": "s7e22b10bc",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "70ZQX",
              "label": "Product Launch"
            },
            {
              "value": "fhzHe",
              "label": "Brand Development"
            },
            {
              "value": "5tTDx",
              "label": "Market Research"
            },
            {
              "value": "u7Dit",
              "label": "Customer Experience"
            },
            {
              "value": "uGYEB",
              "label": "Cross-functional Integration"
            },
            {
              "value": "YQKlc",
              "label": "Product Improvement"
            },
            {
              "value": "0bwoe",
              "label": "System"
            },
            {
              "value": "b46Xg",
              "label": "Management"
            },
            {
              "value": "hpfvR",
              "label": "Documents"
            },
            {
              "value": "XYBho",
              "label": "Process"
            }
          ]
        }
      }
    },
    "Tasks": {
      "name": "Tasks",
      "id": "66aa326c6ecfe92222fab0bc",
      "structure": {
        "Task": {
          "label": "Task",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description & Notes": {
          "label": "Description & Notes",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "sd4cdd4c27",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
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
        "Priority": {
          "label": "Priority",
          "slug": "s7c220d0fa",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "df8b215e-164e-48c2-b55b-837b9f9c9b91",
              "label": "Low"
            },
            {
              "value": "cb239281-02cf-4eb6-a127-587667b232bf",
              "label": "Medium"
            },
            {
              "value": "499782fc-76d4-4bc0-87f7-d3d4ee9dbc76",
              "label": "High"
            },
            {
              "value": "3b1bbe99-31dc-4c90-abb1-a54e7ac3fc04",
              "label": "Critical"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "s2b170d112",
          "field_type": "duedatefield"
        },
        "Project": {
          "label": "Project",
          "slug": "s20vbooq",
          "field_type": "linkedrecordfield"
        },
        "Files and Images": {
          "label": "Files and Images",
          "slug": "se77698e57",
          "field_type": "filefield"
        },
        "Dependency": {
          "label": "Dependency",
          "slug": "dependency",
          "field_type": "dependencyfield"
        }
      }
    },
    "Tasks65bca6df9e65368ba2a3be46": {
      "name": "Tasks",
      "id": "65bca6df9e65368ba2a3be46",
      "structure": {
        "Task": {
          "label": "Task",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Notes": {
          "label": "Notes",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "sd4cdd4c27",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "s4237122ae",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "s2b170d112",
          "field_type": "duedatefield"
        },
        "Time Tracking Log": {
          "label": "Time Tracking Log",
          "slug": "s06603a918",
          "field_type": "timetrackingfield"
        },
        "Date Complete": {
          "label": "Date Complete",
          "slug": "sc8295b501",
          "field_type": "datefield"
        },
        "Staff": {
          "label": "Staff",
          "slug": "sb34bc7fb8",
          "field_type": "linkedrecordfield"
        },
        "Link to Projects": {
          "label": "Link to Projects",
          "slug": "s215f62098",
          "field_type": "linkedrecordfield"
        },
        "Type of task": {
          "label": "Type of task",
          "slug": "s7cb60eff2",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "7hbrV",
              "label": "Accounts/Bookkeeping"
            },
            {
              "value": "NTnwD",
              "label": "Admin"
            },
            {
              "value": "BmpQN",
              "label": "Business Development"
            },
            {
              "value": "4UGW3",
              "label": "Deadline list"
            },
            {
              "value": "0pJWG",
              "label": "Marketing"
            },
            {
              "value": "KEjIQ",
              "label": "Not entered"
            },
            {
              "value": "DhIZD",
              "label": "Personal"
            },
            {
              "value": "ZHYqi",
              "label": "Process Development"
            },
            {
              "value": "6Hyam",
              "label": "Project Delivery"
            },
            {
              "value": "7MrPO",
              "label": "Renew Exchange"
            },
            {
              "value": "R47wC",
              "label": "Sales"
            },
            {
              "value": "M3U7N",
              "label": "Staff Management"
            },
            {
              "value": "juV60",
              "label": "Training"
            },
            {
              "value": "B8taP",
              "label": "Property Dog"
            },
            {
              "value": "FiBbG",
              "label": "Problem Solving"
            }
          ]
        },
        "Link to Job Types (Restored)": {
          "label": "Link to Job Types (Restored)",
          "slug": "s295193500",
          "field_type": "linkedrecordfield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "s672aca855",
          "field_type": "recordidfield"
        },
        "Contact": {
          "label": "Contact",
          "slug": "s084499160",
          "field_type": "linkedrecordfield"
        },
        "Start Date": {
          "label": "Start Date",
          "slug": "s7e612303c",
          "field_type": "datefield"
        },
        "Combined start date": {
          "label": "Combined start date",
          "slug": "s58e4a1466",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "unused": {
          "label": "unused",
          "slug": "se4278da98",
          "field_type": "yesnofield"
        },
        "From ORIGINAL *": {
          "label": "From ORIGINAL *",
          "slug": "s4fa6e117f",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Trunc task name": {
          "label": "Trunc task name",
          "slug": "s89a170207",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        }
      }
    },
    "Plans": {
      "name": "Plans",
      "id": "66fe9929d96d9250dff5953c",
      "structure": {
        "Activity": {
          "label": "Activity",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Category": {
          "label": "Category",
          "slug": "sd55af972b",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "30de308b-3f9b-4207-9886-95603522966f",
              "label": "Branding & Creative"
            },
            {
              "value": "799e8370-7d22-4d6f-bc4a-37adc41d0bb7",
              "label": "Product Marketing"
            },
            {
              "value": "8e9db855-69d7-426b-b4a0-2cb7b8f308ff",
              "label": "Content"
            },
            {
              "value": "12e7bbc6-77f2-4f36-9f50-b4054d0cd5b5",
              "label": "Paid Advertising"
            },
            {
              "value": "04f09578-297d-4d7f-aeab-c065c9c1d359",
              "label": "PR"
            },
            {
              "value": "7e881d14-a97c-415b-991c-931f419793c3",
              "label": "Events"
            },
            {
              "value": "7b4cdf05-0228-4439-9127-95c5d63768d7",
              "label": "Other"
            }
          ]
        },
        "Budget": {
          "label": "Budget",
          "slug": "sb3e1f4a5b",
          "field_type": "currencyfield"
        },
        "Actual": {
          "label": "Actual",
          "slug": "s3c0d65317",
          "field_type": "currencyfield"
        },
        "Remaining Spend": {
          "label": "Remaining Spend",
          "slug": "secbddb206",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Status": {
          "label": "Status",
          "slug": "s314a4f3c2",
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
              "value": "65cbf74f-eb5d-4d4e-8d71-c2b47c1a81d3",
              "label": "On Hold"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Attachments": {
          "label": "Attachments",
          "slug": "s3c7d20473",
          "field_type": "filefield"
        },
        "Link to Budget Periods": {
          "label": "Link to Budget Periods",
          "slug": "sz6k440s",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Energy Brokering": {
      "name": "Energy Brokering",
      "id": "66fe99b23f1ba27f216adf56",
      "structure": {
        "Activity": {
          "label": "Activity",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Category": {
          "label": "Category",
          "slug": "sd55af972b",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "30de308b-3f9b-4207-9886-95603522966f",
              "label": "Branding & Creative"
            },
            {
              "value": "799e8370-7d22-4d6f-bc4a-37adc41d0bb7",
              "label": "Product Marketing"
            },
            {
              "value": "8e9db855-69d7-426b-b4a0-2cb7b8f308ff",
              "label": "Content"
            },
            {
              "value": "12e7bbc6-77f2-4f36-9f50-b4054d0cd5b5",
              "label": "Paid Advertising"
            },
            {
              "value": "04f09578-297d-4d7f-aeab-c065c9c1d359",
              "label": "PR"
            },
            {
              "value": "7e881d14-a97c-415b-991c-931f419793c3",
              "label": "Events"
            },
            {
              "value": "7b4cdf05-0228-4439-9127-95c5d63768d7",
              "label": "Other"
            }
          ]
        },
        "Budget": {
          "label": "Budget",
          "slug": "sb3e1f4a5b",
          "field_type": "currencyfield"
        },
        "Actual": {
          "label": "Actual",
          "slug": "s3c0d65317",
          "field_type": "currencyfield"
        },
        "Remaining Spend": {
          "label": "Remaining Spend",
          "slug": "secbddb206",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Status": {
          "label": "Status",
          "slug": "s314a4f3c2",
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
              "value": "65cbf74f-eb5d-4d4e-8d71-c2b47c1a81d3",
              "label": "On Hold"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Attachments": {
          "label": "Attachments",
          "slug": "s3c7d20473",
          "field_type": "filefield"
        }
      }
    },
    "Meter replacement": {
      "name": "Meter replacement",
      "id": "66fe99cfad9e76f315f59543",
      "structure": {
        "Activity": {
          "label": "Activity",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Category": {
          "label": "Category",
          "slug": "sd55af972b",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "30de308b-3f9b-4207-9886-95603522966f",
              "label": "Strategy "
            },
            {
              "value": "799e8370-7d22-4d6f-bc4a-37adc41d0bb7",
              "label": "Website and content"
            },
            {
              "value": "8e9db855-69d7-426b-b4a0-2cb7b8f308ff",
              "label": "Content"
            },
            {
              "value": "12e7bbc6-77f2-4f36-9f50-b4054d0cd5b5",
              "label": "Paid Advertising"
            },
            {
              "value": "04f09578-297d-4d7f-aeab-c065c9c1d359",
              "label": "PR"
            },
            {
              "value": "7e881d14-a97c-415b-991c-931f419793c3",
              "label": "Tracking"
            },
            {
              "value": "7b4cdf05-0228-4439-9127-95c5d63768d7",
              "label": "Other"
            }
          ]
        },
        "Budget": {
          "label": "Budget",
          "slug": "sb3e1f4a5b",
          "field_type": "currencyfield"
        },
        "Actual": {
          "label": "Actual",
          "slug": "s3c0d65317",
          "field_type": "currencyfield"
        },
        "Remaining Spend": {
          "label": "Remaining Spend",
          "slug": "secbddb206",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Status": {
          "label": "Status",
          "slug": "s314a4f3c2",
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
              "value": "65cbf74f-eb5d-4d4e-8d71-c2b47c1a81d3",
              "label": "On Hold"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Attachments": {
          "label": "Attachments",
          "slug": "s3c7d20473",
          "field_type": "filefield"
        }
      }
    },
    "Budget Periods": {
      "name": "Budget Periods",
      "id": "66fe9929d96d9250dff59536",
      "structure": {
        "Period": {
          "label": "Period",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Range": {
          "label": "Date Range",
          "slug": "s7d17fd247",
          "field_type": "daterangefield"
        },
        "Total Budget": {
          "label": "Total Budget",
          "slug": "s8928fd80e",
          "field_type": "rollupfield",
          "target_field_type": "currencyfield"
        },
        "Total Spend": {
          "label": "Total Spend",
          "slug": "s831330fcb",
          "field_type": "rollupfield",
          "target_field_type": "currencyfield"
        },
        "Remaining Budget": {
          "label": "Remaining Budget",
          "slug": "s1114c664f",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Link to Activities": {
          "label": "Link to Activities",
          "slug": "sf5b1a4718",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Additional Users": {
      "name": "Additional Users",
      "id": "652bf5024c2d3ff5f33c4efb",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Full Name": {
          "label": "Full Name",
          "slug": "sff9d7e0ff",
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
        "Email": {
          "label": "Email",
          "slug": "s4a20cc633",
          "field_type": "emailfield"
        },
        "Phone": {
          "label": "Phone",
          "slug": "s16c776e13",
          "field_type": "phonefield"
        },
        "ORGs": {
          "label": "ORGs",
          "slug": "s363b0434a",
          "field_type": "countfield"
        }
      }
    },
    "RHI Payments": {
      "name": "RHI Payments",
      "id": "650067702d8c1e02dc0030cc",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "RHI Account": {
          "label": "RHI Account",
          "slug": "s00583d7b7",
          "field_type": "linkedrecordfield"
        },
        "Quarter End": {
          "label": "Quarter End",
          "slug": "s374a3c565",
          "field_type": "datefield"
        },
        "Payment": {
          "label": "Payment",
          "slug": "sff7dd3eb4",
          "field_type": "currencyfield"
        }
      }
    },
    "Fuel Use": {
      "name": "Fuel Use",
      "id": "64d687231a19cd16ed0ff717",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Range": {
          "label": "Date Range",
          "slug": "s74d33a2c5",
          "field_type": "daterangefield"
        },
        "Fuel usage": {
          "label": "Fuel usage",
          "slug": "s90eb9eca4",
          "field_type": "numberfield"
        },
        "Unit": {
          "label": "Unit",
          "slug": "se2a4841a4",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "7c048279-ada5-441c-901d-661143c213c2",
              "label": "Kg"
            },
            {
              "value": "631e2a99-bb30-443b-9aef-bde317848c02",
              "label": "Tonne"
            },
            {
              "value": "fc2cb8f0-713c-4c3b-bc5c-88667bedbca8",
              "label": "Nm3"
            },
            {
              "value": "8f42a253-ba54-449a-8952-f083a8572087",
              "label": "m3"
            },
            {
              "value": "6a1a3fa5-47bb-4128-9ff9-c507a6c952d6",
              "label": "l"
            }
          ]
        },
        "Site": {
          "label": "Site",
          "slug": "s50543994a",
          "field_type": "linkedrecordfield"
        },
        "Link to RHI Submissions": {
          "label": "Link to RHI Submissions",
          "slug": "s0vrsb2i",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Activities": {
      "name": "Activities",
      "id": "651598505fe80be3d70fa38a",
      "structure": {
        "ID": {
          "label": "ID",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Message Date": {
          "label": "Message Date",
          "slug": "sde53ff20c",
          "field_type": "datefield"
        },
        "Subject": {
          "label": "Subject",
          "slug": "sf00421647",
          "field_type": "textfield"
        },
        "To (Receiver)": {
          "label": "To (Receiver)",
          "slug": "s4def90db3",
          "field_type": "emailfield"
        },
        "From (Sender)": {
          "label": "From (Sender)",
          "slug": "s7541711e5",
          "field_type": "emailfield"
        },
        "Message Body": {
          "label": "Message Body",
          "slug": "sbd5bd1e8c",
          "field_type": "textareafield"
        },
        "Type (Email/SMS)": {
          "label": "Type (Email/SMS)",
          "slug": "s5df580557",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "859cf04a-1bcb-4f9b-9dbd-f11d4e33fc86",
              "label": "Email"
            },
            {
              "value": "52355526-b254-425c-8e2d-8845a03e729e",
              "label": "SMS"
            }
          ]
        },
        "Provider": {
          "label": "Provider",
          "slug": "sf5a98b1ac",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "dcd2fa00-30d8-4164-8d51-20e716c1b850",
              "label": "Gmail"
            }
          ]
        },
        "Source": {
          "label": "Source",
          "slug": "s63146ded4",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "03b6088a-9ea5-405e-ab41-3305aa229bb9",
              "label": "Syncable"
            }
          ]
        },
        "Direction": {
          "label": "Direction",
          "slug": "s7b1a700f2",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "42e8fb60-67a2-46f5-be55-913580738d5b",
              "label": "Inbound"
            },
            {
              "value": "d8117c31-fa41-4c5d-b74a-316f1f05327a",
              "label": "Outbound"
            }
          ]
        },
        "Contacts": {
          "label": "Contacts",
          "slug": "s6fd63e389",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "RHI Payment Tariffs": {
      "name": "RHI Payment Tariffs",
      "id": "650067db4d367daadc4d824d",
      "structure": {
        "Tariff": {
          "label": "Tariff",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Accreditation Date range": {
          "label": "Accreditation Date range",
          "slug": "se51369649",
          "field_type": "daterangefield"
        },
        "Technology": {
          "label": "Technology",
          "slug": "s5bc9230f8",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "f70bebeb-41cf-48a2-a97b-22ea31268c25",
              "label": "Biomass"
            },
            {
              "value": "d4cf8891-288a-437c-9554-4c2b54d50793",
              "label": "Heat Pump"
            },
            {
              "value": "89odn",
              "label": "Air source heat pumps"
            },
            {
              "value": "q51f0",
              "label": "Deep geothermal"
            },
            {
              "value": "g4euu",
              "label": "Large Biomass"
            },
            {
              "value": "c3z2t",
              "label": "Large biogas combustion"
            },
            {
              "value": "sg7tk",
              "label": "Large water/ground-source heat pumps"
            },
            {
              "value": "rz4pg",
              "label": "Medium Biomass"
            },
            {
              "value": "n5jwh",
              "label": "Medium biogas combustion"
            },
            {
              "value": "4sipv",
              "label": "Small Biogas combustion"
            },
            {
              "value": "uo35y",
              "label": "Small Biomass"
            },
            {
              "value": "6vok1",
              "label": "Small water/ground-source heat pumps"
            },
            {
              "value": "ky0e2",
              "label": "Solar collectors"
            },
            {
              "value": "mb8vz",
              "label": "Solid Biomass CHP Systems"
            }
          ]
        },
        "RHIs": {
          "label": "RHIs",
          "slug": "sy8lo1op",
          "field_type": "linkedrecordfield"
        },
        "Adjusted by": {
          "label": "Adjusted by",
          "slug": "s8cbb6cdee",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "ANvgJ",
              "label": "RPI"
            },
            {
              "value": "lVTYD",
              "label": "CPI"
            }
          ]
        },
        "Tariff Rates": {
          "label": "Tariff Rates",
          "slug": "sj05mzpc",
          "field_type": "linkedrecordfield"
        },
        "Eligible Sizes Description": {
          "label": "Eligible Sizes Description",
          "slug": "s0066c0232",
          "field_type": "textfield"
        },
        "Accreditation Date Range Description": {
          "label": "Accreditation Date Range Description",
          "slug": "s1b30fe5a2",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "d2963a67-960e-4371-9780-c34f8ef2d529",
              "label": "After 20 September 2017"
            },
            {
              "value": "f6ca22dd-6b15-4683-960a-d7d10174bd0c",
              "label": "Before 1 April 2016"
            },
            {
              "value": "2446b704-b705-4440-972d-68bde956f7a9",
              "label": "Before 1 July 2013"
            },
            {
              "value": "65b59523-174d-4cf3-bf3a-251e2d765bb3",
              "label": "Before 1 July 2014"
            },
            {
              "value": "ec43533b-e06e-4387-9d99-48053c230a71",
              "label": "Before 21 January 2013"
            },
            {
              "value": "5887f55c-ed0b-43db-ab7d-e817de189230",
              "label": "Betweeen 1 july and 30 September 2016"
            },
            {
              "value": "30b759b0-b94c-4eb2-9892-bd4f98a72263",
              "label": "Between 1 April 2016 and 1 April 2020"
            },
            {
              "value": "4df36b59-206f-4e41-8f12-7ec2443c488b",
              "label": "Between 1 April 2016 and 19 September 2017"
            },
            {
              "value": "8cc0662f-11cb-4a51-b6f6-b191d1bd642f",
              "label": "Between 1 April 2016 and 31 December 2021"
            },
            {
              "value": "74112cc3-2163-4f28-9a5e-b716823268d1",
              "label": "Between 1 April 2016 and 31 June 2017"
            },
            {
              "value": "99f2acc0-78f7-48bd-8d73-52b575ca4417",
              "label": "Between 1 April 2020 and 30 June 2020"
            },
            {
              "value": "d37e2d6a-2168-45ec-b394-3ae567e13a20",
              "label": "Between 1 April and 30 July 2017"
            },
            {
              "value": "3f33cdf8-9b50-4177-bf35-cd3da7c8c030",
              "label": "Between 1 April and 30 June 2015"
            },
            {
              "value": "c2fd36de-61a0-4e6d-947b-d413a0a412f6",
              "label": "Between 1 April and 30 June 2016"
            },
            {
              "value": "c41a3a57-4737-4907-a8aa-3051d2fa36cf",
              "label": "Between 1 April and 30 June 2017"
            },
            {
              "value": "9173b4ba-8d92-4f7d-a4d0-86406f1de074",
              "label": "Between 1 Jan and 31 March 2015"
            },
            {
              "value": "92f068e9-72c7-4823-ad5d-e097414162a8",
              "label": "Between 1 January and 31 March 2016"
            },
            {
              "value": "03011f8f-b039-4cb0-9088-318c48e55b55",
              "label": "Between 1 January and 31 March 2017"
            },
            {
              "value": "7de41573-0491-4610-8cf1-135bdd128142",
              "label": "Between 1 July 2013 and 31 March 2016"
            },
            {
              "value": "81c3ed48-e146-4656-a606-e0444ed76088",
              "label": "Between 1 July 2017 and 21 May 2018"
            },
            {
              "value": "2211ac2c-5c6e-4e69-b2d7-6d99882e9ac7",
              "label": "Between 1 July and 19 September 2017"
            },
            {
              "value": "461c4530-5718-4c5d-a9dc-5f897533187e",
              "label": "Between 1 July and 30 September 2014"
            },
            {
              "value": "2f6e5fbc-d3f5-4c68-8057-183a6d636cc5",
              "label": "Between 1 July and 30 September 2015"
            },
            {
              "value": "26a9128d-1ddf-4186-a07c-826b09ad7954",
              "label": "Between 1 July and 30 September 2016"
            },
            {
              "value": "a0e50503-64bc-4715-a2fb-6e5fa5602f1b",
              "label": "Between 1 July and 30 September 2020"
            },
            {
              "value": "8d280da8-c78f-4a5f-9faa-222e3e2e42e6",
              "label": "Between 1 October 2020 and 31 December 2020"
            },
            {
              "value": "d1d33ec3-eb45-4c12-92f4-898416168309",
              "label": "Between 1 October and 31 December  2015"
            },
            {
              "value": "86224b84-b1da-45b7-949d-5a4a18b7e420",
              "label": "Between 1 October and 31 December 2014"
            },
            {
              "value": "f7c9cf41-a317-4425-b42e-d67fa0719ff3",
              "label": "Between 1 October and 31 December 2016"
            },
            {
              "value": "e6b74ea7-678a-4d19-bbb0-57f4d1a01fde",
              "label": "Between 21 January 2013 and 31 March 2016"
            },
            {
              "value": "1f733cd9-e05e-489b-af72-939c6554fd3e",
              "label": "Between 22 May and 31 December 2018"
            },
            {
              "value": "9b1de637-d5f9-42af-b3eb-fb2f01151732",
              "label": "On or after 1 April 2016"
            },
            {
              "value": "d819804b-e445-42a8-8ac3-4bd0c6ce2865",
              "label": "On or after 1 April 2020"
            },
            {
              "value": "06c628e9-6208-495a-a974-aaa162f6b525",
              "label": "On or after 1 January 2019"
            },
            {
              "value": "93dd9306-545a-4096-8efc-78a7802d263d",
              "label": "On or after 1 January 2021"
            },
            {
              "value": "4cce6b69-debd-40aa-bba7-1ef5bc282232",
              "label": "On or after 20 September 2017"
            },
            {
              "value": "7f829189-3e22-4783-9f1f-35cdcbd93c80",
              "label": "On or after 22 May 2018"
            }
          ]
        },
        "Excel Sheet Key": {
          "label": "Excel Sheet Key",
          "slug": "s48c4f771e",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to RHIs": {
          "label": "Link to RHIs",
          "slug": "s1cknqct",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Contacts": {
      "name": "Contacts",
      "id": "64d155a8c71c81dc0b41d361",
      "structure": {
        "Name": {
          "label": "Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Billing Email": {
          "label": "Billing Email",
          "slug": "sc54f6c876",
          "field_type": "emailfield"
        },
        "Phone number": {
          "label": "Phone number",
          "slug": "s064183d4f",
          "field_type": "phonefield"
        },
        "Billing Organisation": {
          "label": "Billing Organisation",
          "slug": "s3f6208d3d",
          "field_type": "linkedrecordfield"
        },
        "Full Name": {
          "label": "Full Name",
          "slug": "sfc8daed83",
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
        "Email Domain (System Field)": {
          "label": "Email Domain (System Field)",
          "slug": "sc24962211",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to Activities": {
          "label": "Link to Activities",
          "slug": "s5l3x58a",
          "field_type": "linkedrecordfield"
        },
        "Key Information": {
          "label": "Key Information",
          "slug": "sb5f043980",
          "field_type": "textareafield"
        },
        "Role": {
          "label": "Role",
          "slug": "sa62387383",
          "field_type": "textfield"
        },
        "Primary Billing Contact for": {
          "label": "Primary Billing Contact for",
          "slug": "shihuu54",
          "field_type": "linkedrecordfield"
        },
        "Quickfile Contact ID": {
          "label": "Quickfile Contact ID",
          "slug": "sd136afabc",
          "field_type": "textfield"
        },
        "Link to Management Tasks": {
          "label": "Link to Management Tasks",
          "slug": "s16ntjwc",
          "field_type": "linkedrecordfield"
        },
        "Organisations": {
          "label": "Organisations",
          "slug": "smxa9lxs",
          "field_type": "linkedrecordfield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "s729529dd5",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Merge Contacts": {
          "label": "Merge Contacts",
          "slug": "s4e4994cb4",
          "field_type": "yesnofield"
        },
        "Duplicate QuickFile Contact IDs": {
          "label": "Duplicate QuickFile Contact IDs",
          "slug": "s1e5a2e0cc",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "All Email Addresses": {
          "label": "All Email Addresses",
          "slug": "sa11sb7i",
          "field_type": "emailfield"
        },
        "Name and Email (System Field)": {
          "label": "Name and Email (System Field)",
          "slug": "s55268d549",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "swdfclvy",
          "field_type": "linkedrecordfield"
        },
        "Projects": {
          "label": "Projects",
          "slug": "s4wh94x2",
          "field_type": "linkedrecordfield"
        },
        "Contact On QuickFile?": {
          "label": "Contact On QuickFile?",
          "slug": "s261c6dcd8",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "First Email Address": {
          "label": "First Email Address",
          "slug": "s0ce305481",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "All Emails (text)": {
          "label": "All Emails (text)",
          "slug": "sbb95f3f03",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Primary Billing Contact": {
          "label": "Primary Billing Contact",
          "slug": "se5f63e1e8",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Email Addresses Search String": {
          "label": "Email Addresses Search String",
          "slug": "sdb00acec3",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "QuickFile Contacts": {
          "label": "QuickFile Contacts",
          "slug": "s93ezm8m",
          "field_type": "linkedrecordfield"
        },
        "Billing Organisations": {
          "label": "Billing Organisations",
          "slug": "sd3da74176",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "QuickFile Contact Record IDs": {
          "label": "QuickFile Contact Record IDs",
          "slug": "s3f7330620",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Billing Organisation Record IDs": {
          "label": "Billing Organisation Record IDs",
          "slug": "s0368ca906",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to Project Contacts": {
          "label": "Link to Project Contacts",
          "slug": "syyoq802",
          "field_type": "linkedrecordfield"
        },
        "Link to Service Contacts": {
          "label": "Link to Service Contacts",
          "slug": "so8ts588",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks 1": {
          "label": "Link to Tasks 1",
          "slug": "s1dw6ldv",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks Archive 2024 (Restored)": {
          "label": "Link to Tasks Archive 2024 (Restored)",
          "slug": "s92cyzmx",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Organisations": {
      "name": "Organisations",
      "id": "64d155a8c71c81dc0b41d365",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "All Billing Contacts": {
          "label": "All Billing Contacts",
          "slug": "sp5sekw0",
          "field_type": "linkedrecordfield"
        },
        "Industry": {
          "label": "Industry",
          "slug": "sb2c0c0aea",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "73fcb9e4-2f80-4469-8a83-19572a692f87",
              "label": "Forestry and Wood Products"
            },
            {
              "value": "3842b53d-5a45-458d-beb7-500ff18ecbab",
              "label": "Leisure and Hospitality"
            },
            {
              "value": "2f20a0a2-3fca-472b-8901-9b0d1391d95d",
              "label": "Agriculture"
            },
            {
              "value": "71a727c2-b9e2-4d0c-8393-5d65b79f7def",
              "label": "Professional Services"
            },
            {
              "value": "00fa1da0-d875-49af-a391-074e966eee13",
              "label": "Waste Management and Recycling"
            },
            {
              "value": "N4rMp",
              "label": "Health"
            },
            {
              "value": "a7Rlj",
              "label": "Heating and plumbing"
            },
            {
              "value": "Qv8fp",
              "label": "Charity"
            },
            {
              "value": "cPZiq",
              "label": "Offices"
            }
          ]
        },
        "Projects": {
          "label": "Projects",
          "slug": "sdbh9mky",
          "field_type": "linkedrecordfield"
        },
        "Opportunities": {
          "label": "Opportunities",
          "slug": "sxoi2nlc",
          "field_type": "linkedrecordfield"
        },
        "Link to Problems": {
          "label": "Link to Problems",
          "slug": "spmodlaz",
          "field_type": "linkedrecordfield"
        },
        "Billing Address": {
          "label": "Billing Address",
          "slug": "sc877caead",
          "field_type": "addressfield"
        },
        "# Open Projects": {
          "label": "# Open Projects",
          "slug": "s26c05fe08",
          "field_type": "countfield"
        },
        "# Open Opportunities": {
          "label": "# Open Opportunities",
          "slug": "sab4be8d9d",
          "field_type": "countfield"
        },
        "Organisation Type": {
          "label": "Organisation Type",
          "slug": "sc8c934c5a",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "61a7b4d4-0757-4368-bbf2-61664b29dc00",
              "label": "Customer"
            },
            {
              "value": "kwYS0",
              "label": "Site Contact"
            },
            {
              "value": "1d614063-a7fd-4378-9282-411f1db458e8",
              "label": "Official"
            },
            {
              "value": "5a2427d7-bda0-46b5-837e-34084130633c",
              "label": "Installer"
            },
            {
              "value": "d96378a9-3bc3-445d-bb64-daa8b0e28f65",
              "label": "Repair Engineer"
            },
            {
              "value": "cca252a0-0cb0-4bbe-ae69-2d8cdf90a5b9",
              "label": "RO Trader"
            },
            {
              "value": "e06dbf48-55cb-4927-9f77-d5a0348ffff1",
              "label": "YES Service Provider"
            },
            {
              "value": "X24Ar",
              "label": "Woodfuel"
            },
            {
              "value": "g5Uyg",
              "label": "Consultant"
            },
            {
              "value": "Wnbgr",
              "label": "Energy Broker"
            },
            {
              "value": "EsIDk",
              "label": "Supplier"
            }
          ]
        },
        "Transferee Number": {
          "label": "Transferee Number",
          "slug": "sb92e05d5f",
          "field_type": "textfield"
        },
        "Installed Installations": {
          "label": "Installed Installations",
          "slug": "sb9847837b",
          "field_type": "linkedrecordfield"
        },
        "Website": {
          "label": "Website",
          "slug": "s424d2f660",
          "field_type": "linkfield"
        },
        "Primary Billing Contact": {
          "label": "Primary Billing Contact",
          "slug": "s3b7387e3e",
          "field_type": "linkedrecordfield"
        },
        "QuickFile ID": {
          "label": "QuickFile ID",
          "slug": "sb517d822e",
          "field_type": "textfield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "sc0a1ae405",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Country ISO": {
          "label": "Country ISO",
          "slug": "s816f77933",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Company Number": {
          "label": "Company Number",
          "slug": "s50d5b6f45",
          "field_type": "textfield"
        },
        "VAT Number": {
          "label": "VAT Number",
          "slug": "sf155cc07c",
          "field_type": "textfield"
        },
        "Link to Management Tasks": {
          "label": "Link to Management Tasks",
          "slug": "sg3cnp57",
          "field_type": "linkedrecordfield"
        },
        "Contacts": {
          "label": "Contacts",
          "slug": "s1iib7to",
          "field_type": "linkedrecordfield"
        },
        "Link to High Priority Clients": {
          "label": "Link to High Priority Clients",
          "slug": "s4luq6k9",
          "field_type": "linkedrecordfield"
        },
        "RHI Accounts": {
          "label": "RHI Accounts",
          "slug": "shb6ksuu",
          "field_type": "linkedrecordfield"
        },
        "Contact Emails": {
          "label": "Contact Emails",
          "slug": "s7c79f0f42",
          "field_type": "lookupfield",
          "target_field_type": "emailfield"
        },
        "Support Services": {
          "label": "Support Services",
          "slug": "s85ldqmb",
          "field_type": "linkedrecordfield"
        },
        "Linked RHI Accounts match Linked Installations": {
          "label": "Linked RHI Accounts match Linked Installations",
          "slug": "s6315d13eb",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "# Active Support Services": {
          "label": "# Active Support Services",
          "slug": "s253467bb5",
          "field_type": "countfield"
        },
        "RHIs from Installations": {
          "label": "RHIs from Installations",
          "slug": "sa602091a1",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "# RHIs from Installation": {
          "label": "# RHIs from Installation",
          "slug": "s61924d287",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "RHIs from RHI Account": {
          "label": "RHIs from RHI Account",
          "slug": "sc38ef4601",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "# RHIs from RHI Account": {
          "label": "# RHIs from RHI Account",
          "slug": "s63aaa3571",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "RO Accounts": {
          "label": "RO Accounts",
          "slug": "sc0c646dc8",
          "field_type": "linkedrecordfield"
        },
        "Link to Certificate Transfer Agreements": {
          "label": "Link to Certificate Transfer Agreements",
          "slug": "sgn1h02z",
          "field_type": "linkedrecordfield"
        },
        "Office Phone": {
          "label": "Office Phone",
          "slug": "sbcb4a4ac4",
          "field_type": "phonefield"
        },
        "QuickFile Record": {
          "label": "QuickFile Record",
          "slug": "sd675d93c3",
          "field_type": "buttonfield"
        },
        "Contact Emails (text)": {
          "label": "Contact Emails (text)",
          "slug": "s6b2f0fb10",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "QF Billing Contacts": {
          "label": "QF Billing Contacts",
          "slug": "sep5e6p1",
          "field_type": "linkedrecordfield"
        },
        "QF Primary Billing Contact": {
          "label": "QF Primary Billing Contact",
          "slug": "s6dbbddbaa",
          "field_type": "linkedrecordfield"
        },
        "Link to Self": {
          "label": "Link to Self",
          "slug": "s5737e544f",
          "field_type": "linkedrecordfield"
        },
        "Support Service Lookup": {
          "label": "Support Service Lookup",
          "slug": "sbeedc44bc",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Link to Lab Reports": {
          "label": "Link to Lab Reports",
          "slug": "svmjcxxc",
          "field_type": "linkedrecordfield"
        },
        "Link to Management Projects": {
          "label": "Link to Management Projects",
          "slug": "sn47qqzr",
          "field_type": "linkedrecordfield"
        },
        "Link to Invoices & Payments": {
          "label": "Link to Invoices & Payments",
          "slug": "sb7k9ntg",
          "field_type": "linkedrecordfield"
        },
        "Link to Recurring Invoice Items": {
          "label": "Link to Recurring Invoice Items",
          "slug": "stbumn8g",
          "field_type": "linkedrecordfield"
        },
        "Link to SDP Invoice Items": {
          "label": "Link to SDP Invoice Items",
          "slug": "s7kvbhac",
          "field_type": "linkedrecordfield"
        },
        "Active Projects Lookup": {
          "label": "Active Projects Lookup",
          "slug": "sf5f547a7a",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Installations": {
          "label": "Installations",
          "slug": "sy260xye",
          "field_type": "linkedrecordfield"
        },
        "Customer Project and Service Folder Location": {
          "label": "Customer Project and Service Folder Location",
          "slug": "scec261cb7",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to Woodsure Number": {
          "label": "Link to Woodsure Number",
          "slug": "sayjgwgs",
          "field_type": "linkedrecordfield"
        },
        "Billing Contact Emails": {
          "label": "Billing Contact Emails",
          "slug": "s8c3195a75",
          "field_type": "lookupfield",
          "target_field_type": "emailfield"
        },
        "Contact Search String": {
          "label": "Contact Search String",
          "slug": "sf082ba263",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to Tasks": {
          "label": "Link to Tasks",
          "slug": "s76ri0yf",
          "field_type": "linkedrecordfield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "saryvx85",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks Archive 2024": {
          "label": "Link to Tasks Archive 2024",
          "slug": "s7wkflig",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks Archive 2024 (Restored)": {
          "label": "Link to Tasks Archive 2024 (Restored)",
          "slug": "sr0x7nje",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Installations": {
      "name": "Installations",
      "id": "64d155a8c71c81dc0b41d369",
      "structure": {
        "Name": {
          "label": "Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "RHI": {
          "label": "RHI",
          "slug": "sc1432e2dd",
          "field_type": "linkedrecordfield"
        },
        "Non-Project Tasks": {
          "label": "Non-Project Tasks",
          "slug": "scyy3ky4",
          "field_type": "linkedrecordfield"
        },
        "Internal Installation Name": {
          "label": "Internal Installation Name",
          "slug": "s1dcb86307",
          "field_type": "textfield"
        },
        "RHI Name": {
          "label": "RHI Name",
          "slug": "sc418f2df4",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "RO Name": {
          "label": "RO Name",
          "slug": "s0fa137131",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Name (System Field)": {
          "label": "Name (System Field)",
          "slug": "s861d6a7b8",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "RO Generator": {
          "label": "RO Generator",
          "slug": "s110e0ccc8",
          "field_type": "linkedrecordfield"
        },
        "Installer": {
          "label": "Installer",
          "slug": "shh2f8pz",
          "field_type": "linkedrecordfield"
        },
        "Meters": {
          "label": "Meters",
          "slug": "s2c373a227",
          "field_type": "linkedrecordfield"
        },
        "Document Review": {
          "label": "Document Review",
          "slug": "s749b158df",
          "field_type": "subitemsfield"
        },
        "RHI Accreditation Status": {
          "label": "RHI Accreditation Status",
          "slug": "s93db8ae91",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "RHI Application Status": {
          "label": "RHI Application Status",
          "slug": "s3f997b224",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "Link to Management Tasks": {
          "label": "Link to Management Tasks",
          "slug": "s3zzj6ko",
          "field_type": "linkedrecordfield"
        },
        "Escalate to Directors": {
          "label": "Escalate to Directors",
          "slug": "sdcd00fbda",
          "field_type": "yesnofield"
        },
        "Priority Installation": {
          "label": "Priority Installation",
          "slug": "scy8ii4i",
          "field_type": "yesnofield"
        },
        "Thermal Capacity": {
          "label": "Thermal Capacity",
          "slug": "seec02b4b1",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Electrical Capacity": {
          "label": "Electrical Capacity",
          "slug": "s1ab15d3e2",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Technology": {
          "label": "Technology",
          "slug": "s35da0bb3b",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "s189bdfefa",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "RHI Number": {
          "label": "RHI Number",
          "slug": "sb835978a4",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to Opportunities": {
          "label": "Link to Opportunities",
          "slug": "syfr6l6j",
          "field_type": "linkedrecordfield"
        },
        "Postcode": {
          "label": "Postcode",
          "slug": "s46c67d5ab",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Location Postcode Checked": {
          "label": "Location Postcode Checked",
          "slug": "sa7bde3e91",
          "field_type": "yesnofield"
        },
        "Location": {
          "label": "Location",
          "slug": "svhzj6xc",
          "field_type": "linkedrecordfield"
        },
        "Area Name": {
          "label": "Area Name",
          "slug": "sbcb43d8e1",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Link to Projects": {
          "label": "Link to Projects",
          "slug": "s1dv9tnl",
          "field_type": "linkedrecordfield"
        },
        "Installation Type": {
          "label": "Installation Type",
          "slug": "s0c93ef49b",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "isDJf",
              "label": "Biomass Boiler"
            },
            {
              "value": "jcsfx",
              "label": "Solid Biomass CHP"
            },
            {
              "value": "hDhFM",
              "label": "Gasification CHP"
            },
            {
              "value": "BSgFH",
              "label": "Gas CHP"
            },
            {
              "value": "jDlXx",
              "label": "Anaerobic Digestor"
            },
            {
              "value": "TPbs2",
              "label": "Air Source Heat Pump"
            },
            {
              "value": "qzbYz",
              "label": "Ground Source Heat Pump"
            },
            {
              "value": "SXim6",
              "label": "Water Source Heat Pump"
            },
            {
              "value": "L6bri",
              "label": "Wind Turbine"
            },
            {
              "value": "v7IVv",
              "label": "Solar PV"
            },
            {
              "value": "JAVBS",
              "label": "Solar Thermal"
            },
            {
              "value": "VTgHF",
              "label": "Hydroelectric"
            }
          ]
        },
        "Thermal Capacity (internal)": {
          "label": "Thermal Capacity (internal)",
          "slug": "se0d197ca9",
          "field_type": "numberfield"
        },
        "Electrical Capacity (internal": {
          "label": "Electrical Capacity (internal",
          "slug": "s9c1cb5d3f",
          "field_type": "numberfield"
        },
        "Internal Notes": {
          "label": "Internal Notes",
          "slug": "sccf90d68c",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "szrubblz",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks": {
          "label": "Link to Tasks",
          "slug": "s8h18g2v",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks Archive 2024 (Restored)": {
          "label": "Link to Tasks Archive 2024 (Restored)",
          "slug": "sdok26ye",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Sites": {
      "name": "Sites",
      "id": "64d155a9c71c81dc0b41d536",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "RHIs": {
          "label": "RHIs",
          "slug": "sff33ff6f0",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Internal Site Name": {
          "label": "Internal Site Name",
          "slug": "s549d7f68a",
          "field_type": "textfield"
        },
        "Document Review": {
          "label": "Document Review",
          "slug": "s4dff63083",
          "field_type": "subitemsfield"
        },
        "Link to Management Tasks": {
          "label": "Link to Management Tasks",
          "slug": "ss9ilqq1",
          "field_type": "linkedrecordfield"
        },
        "Name (System Field)": {
          "label": "Name (System Field)",
          "slug": "s6268c30c7",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Postcode": {
          "label": "Postcode",
          "slug": "s3bd275d64",
          "field_type": "textfield"
        },
        "# Installations": {
          "label": "# Installations",
          "slug": "s5b053e574",
          "field_type": "countfield"
        },
        "Postcode Area": {
          "label": "Postcode Area",
          "slug": "s04a65bcd9",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Postcode Area Name": {
          "label": "Postcode Area Name",
          "slug": "sbb468500e",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "RO Installations": {
          "label": "RO Installations",
          "slug": "se0324e797",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Installations": {
          "label": "Installations",
          "slug": "smkkix1u",
          "field_type": "linkedrecordfield"
        },
        "Formatted Postcode": {
          "label": "Formatted Postcode",
          "slug": "s42122b018",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to Lab Reports": {
          "label": "Link to Lab Reports",
          "slug": "scvo8glt",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks": {
          "label": "Link to Tasks",
          "slug": "sgukw8nk",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks Archive 2024 (Restored)": {
          "label": "Link to Tasks Archive 2024 (Restored)",
          "slug": "sj1cuslz",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Meter Readings": {
      "name": "Meter Readings",
      "id": "64d155a8c71c81dc0b41d37b",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date": {
          "label": "Date",
          "slug": "s6eed6b9fc",
          "field_type": "datefield"
        },
        "Reading (kWh)": {
          "label": "Reading (kWh)",
          "slug": "sa8a3a8ebc",
          "field_type": "numberfield"
        },
        "Meter": {
          "label": "Meter",
          "slug": "scc2749963",
          "field_type": "linkedrecordfield"
        },
        "Meter Picture": {
          "label": "Meter Picture",
          "slug": "sf3e5ce573",
          "field_type": "filefield"
        },
        "Link to RHI Submissions": {
          "label": "Link to RHI Submissions",
          "slug": "sww5w4ai",
          "field_type": "linkedrecordfield"
        },
        "Link to RHI Submissions 1": {
          "label": "Link to RHI Submissions 1",
          "slug": "sj8szqqr",
          "field_type": "linkedrecordfield"
        },
        "🔼Comments🔼": {
          "label": "🔼Comments🔼",
          "slug": "s7dd0e99ac",
          "field_type": "formulafield"
        }
      }
    },
    "Improvements": {
      "name": "Improvements",
      "id": "6515a898cdbab2984e634bcc",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Value": {
          "label": "Value",
          "slug": "value",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "0",
              "label": "Minimal"
            },
            {
              "value": "1",
              "label": "Low"
            },
            {
              "value": "2",
              "label": "Medium"
            },
            {
              "value": "3",
              "label": "High"
            },
            {
              "value": "4",
              "label": "Massive"
            }
          ]
        },
        "Reach Scale": {
          "label": "Reach Scale",
          "slug": "reach_scale",
          "field_type": "numbersliderfield"
        },
        "Effort": {
          "label": "Effort",
          "slug": "effort",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "59f24313-390c-4efb-ac25-38599db672ad",
              "label": "Trivial"
            },
            {
              "value": "1",
              "label": "Low"
            },
            {
              "value": "2",
              "label": "Medium"
            },
            {
              "value": "3",
              "label": "High"
            }
          ]
        },
        "Research and Implementation": {
          "label": "Research and Implementation",
          "slug": "research",
          "field_type": "richtextareafield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Suggested"
            },
            {
              "value": "in_progress",
              "label": "Review & Prioritization"
            },
            {
              "value": "ready_for_review",
              "label": "Rejected"
            },
            {
              "value": "2d2a1b12-4e07-458c-acc4-d68e5a41366c",
              "label": "In Progress"
            },
            {
              "value": "xcUpa",
              "label": "Partially Implemented"
            },
            {
              "value": "688c8162-1cbe-44d2-97c6-7602352acfc2",
              "label": "Implemented"
            }
          ]
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Priority Score": {
          "label": "Priority Score",
          "slug": "s9d512e941",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "s594b56e85",
          "field_type": "userfield"
        },
        "Linked Problems": {
          "label": "Linked Problems",
          "slug": "s2njrmz2",
          "field_type": "linkedrecordfield"
        },
        "# Problems": {
          "label": "# Problems",
          "slug": "s05d2ab890",
          "field_type": "countfield"
        },
        "# Open Problems": {
          "label": "# Open Problems",
          "slug": "sywssf9v",
          "field_type": "countfield"
        },
        "Priority Level": {
          "label": "Priority Level",
          "slug": "s289f7172d",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "sc2afc199e",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Document Types": {
      "name": "Document Types",
      "id": "655c88e47189830b9b757d92",
      "structure": {
        "Document Type": {
          "label": "Document Type",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Home": {
          "label": "Home",
          "slug": "s2a30ca7cc",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "f440565b-fe3c-4711-b412-a78e300e4119",
              "label": "Installation"
            },
            {
              "value": "5cde664a-f84f-48a4-ae24-a8cad7eeb911",
              "label": "Site"
            },
            {
              "value": "577783b8-3296-4e03-9e08-7d6fa99e46bb",
              "label": "RHI"
            },
            {
              "value": "366ed5a0-6048-43a4-8fc6-65e87dc35286",
              "label": "RO Station"
            }
          ]
        },
        "Example": {
          "label": "Example",
          "slug": "s8ea4c0320",
          "field_type": "filefield"
        }
      }
    },
    "Job Categories": {
      "name": "Job Categories",
      "id": "64fee4e58e4e9ddfd18c3e33",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Job Type Code": {
          "label": "Job Type Code",
          "slug": "s1c395eeb3",
          "field_type": "textfield"
        },
        "Sub-Types": {
          "label": "Sub-Types",
          "slug": "sth9c9pf",
          "field_type": "linkedrecordfield"
        },
        "Process Checklist Template": {
          "label": "Process Checklist Template",
          "slug": "sd48e0afde",
          "field_type": "richtextareafield"
        },
        "Task Template Details": {
          "label": "Task Template Details",
          "slug": "sobxly9k",
          "field_type": "linkedrecordfield"
        },
        "Active Task Templates": {
          "label": "Active Task Templates",
          "slug": "s95u9f3n",
          "field_type": "linkedrecordfield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "s791f240ac",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Lead": {
          "label": "Lead",
          "slug": "s1d7508d84",
          "field_type": "linkedrecordfield"
        },
        "Competent": {
          "label": "Competent",
          "slug": "stwte3wf",
          "field_type": "linkedrecordfield"
        },
        "Link to Delivery Checks": {
          "label": "Link to Delivery Checks",
          "slug": "sjju26gz",
          "field_type": "linkedrecordfield"
        },
        "Deep Dive Checklist Template": {
          "label": "Deep Dive Checklist Template",
          "slug": "sed20e2588",
          "field_type": "richtextareafield"
        },
        "Training": {
          "label": "Training",
          "slug": "s8xkk74l",
          "field_type": "linkedrecordfield"
        },
        "Scheme": {
          "label": "Scheme",
          "slug": "s46de4a605",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "pFaLF",
              "label": "RHI"
            },
            {
              "value": "V88Z7",
              "label": "RO"
            },
            {
              "value": "6vH7r",
              "label": "CHPQA"
            },
            {
              "value": "U8FG6",
              "label": "Woodsure"
            },
            {
              "value": "Y9NDr",
              "label": "BSL"
            },
            {
              "value": "RdxaL",
              "label": "Other"
            }
          ]
        },
        "# Active Projects": {
          "label": "# Active Projects",
          "slug": "sb3bb32bcf",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Total # Projects": {
          "label": "Total # Projects",
          "slug": "shoam6c4",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "# Open Opportunities": {
          "label": "# Open Opportunities",
          "slug": "s4dtnts8",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Total # Opportunities": {
          "label": "Total # Opportunities",
          "slug": "se3samn0",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "# Active Services": {
          "label": "# Active Services",
          "slug": "s9nvp0it",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Total # Services": {
          "label": "Total # Services",
          "slug": "s1rn8ikv",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Delivery": {
          "label": "Delivery",
          "slug": "s81c0c0adb",
          "field_type": "linkedrecordfield"
        },
        "Email Templates": {
          "label": "Email Templates",
          "slug": "smzu3aaz",
          "field_type": "linkedrecordfield"
        },
        "Active Email Templates Lookup": {
          "label": "Active Email Templates Lookup",
          "slug": "sfaaacc2c1",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        }
      }
    },
    "Job Sub-Types": {
      "name": "Job Sub-Types",
      "id": "6510709061ddcac63ae02e5e",
      "structure": {
        "Job Sub-Type": {
          "label": "Job Sub-Type",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Job Category": {
          "label": "Job Category",
          "slug": "s2bcde2b3e",
          "field_type": "linkedrecordfield"
        },
        "Sub-Type Name": {
          "label": "Sub-Type Name",
          "slug": "s6fcd5618a",
          "field_type": "textfield"
        },
        "Set Price": {
          "label": "Set Price",
          "slug": "s2829c7f37",
          "field_type": "currencyfield"
        },
        ": (System Field)": {
          "label": ": (System Field)",
          "slug": "s1557d3fd6",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Opportunities": {
          "label": "Opportunities",
          "slug": "sv6k2leb",
          "field_type": "linkedrecordfield"
        },
        "Projects": {
          "label": "Projects",
          "slug": "scc994tq",
          "field_type": "linkedrecordfield"
        },
        "Average Price": {
          "label": "Average Price",
          "slug": "s7433ea7e0",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Link to Quotes": {
          "label": "Link to Quotes",
          "slug": "spuo55dx",
          "field_type": "linkedrecordfield"
        },
        "Total # Opportunities": {
          "label": "Total # Opportunities",
          "slug": "s5beaee943",
          "field_type": "countfield"
        },
        "# Open Opportunities": {
          "label": "# Open Opportunities",
          "slug": "sffb9df9aa",
          "field_type": "countfield"
        },
        "Total # Projects": {
          "label": "Total # Projects",
          "slug": "sd617875e1",
          "field_type": "countfield"
        },
        "# Active Projects": {
          "label": "# Active Projects",
          "slug": "sef97b97a9",
          "field_type": "countfield"
        },
        "Charged Hourly?": {
          "label": "Charged Hourly?",
          "slug": "s931abc8c6",
          "field_type": "yesnofield"
        },
        "QuickFile Line Item Description": {
          "label": "QuickFile Line Item Description",
          "slug": "s0e7c2bced",
          "field_type": "textareafield"
        },
        "Service Terms and Summary": {
          "label": "Service Terms and Summary",
          "slug": "s159557f14",
          "field_type": "textareafield"
        },
        "Service Terms (System Field)": {
          "label": "Service Terms (System Field)",
          "slug": "s354e6da79",
          "field_type": "formulafield",
          "target_field_type": "textareafield"
        },
        "Requires Travel": {
          "label": "Requires Travel",
          "slug": "sc80edee08",
          "field_type": "yesnofield"
        },
        "Additional Payment Terms": {
          "label": "Additional Payment Terms",
          "slug": "se7c2fb633",
          "field_type": "textareafield"
        },
        "Quickfile Line Item Description (System Field)": {
          "label": "Quickfile Line Item Description (System Field)",
          "slug": "s3fd2120df",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Description": {
          "label": "Description",
          "slug": "sd3a61c951",
          "field_type": "textareafield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "s179265ca0",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to Delivery Checks": {
          "label": "Link to Delivery Checks",
          "slug": "skzhdwcl",
          "field_type": "linkedrecordfield"
        },
        "Job Code Text (System Field)": {
          "label": "Job Code Text (System Field)",
          "slug": "s6b151a33d",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Services": {
          "label": "Services",
          "slug": "s9x00gm7",
          "field_type": "linkedrecordfield"
        },
        "Total # Services": {
          "label": "Total # Services",
          "slug": "scx1c342",
          "field_type": "countfield"
        },
        "# Active Services": {
          "label": "# Active Services",
          "slug": "sc7e87d5dc",
          "field_type": "countfield"
        },
        "Delivery": {
          "label": "Delivery",
          "slug": "s2887b0753",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Blocks RHI Submissions": {
          "label": "Blocks RHI Submissions",
          "slug": "s1bb1c81b0",
          "field_type": "yesnofield"
        },
        "Deliverable Generated": {
          "label": "Deliverable Generated",
          "slug": "s0ee7e673e",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "w06CA",
              "label": "Project Generated"
            },
            {
              "value": "SwwIl",
              "label": "Service Generated"
            },
            {
              "value": "Hvs54",
              "label": "No Deliverable Generated"
            }
          ]
        },
        "Has Additional Payment Terms": {
          "label": "Has Additional Payment Terms",
          "slug": "sac1a8c53b",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Link to Woodsure Numbers": {
          "label": "Link to Woodsure Numbers",
          "slug": "sfpxb6wv",
          "field_type": "linkedrecordfield"
        },
        "Legacy Sheet Path": {
          "label": "Legacy Sheet Path",
          "slug": "s73a9037d7",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "bYFSO",
              "label": "Live"
            },
            {
              "value": "6X4AQ",
              "label": "Live Other"
            },
            {
              "value": "jB7Vp",
              "label": "ASA"
            },
            {
              "value": "MJl6p",
              "label": "Ongoing Support"
            }
          ]
        },
        "Merge Trigger": {
          "label": "Merge Trigger",
          "slug": "s0c43c6639",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "Rj7Ib",
              "label": "Don't Merge"
            },
            {
              "value": "EuAfY",
              "label": "Merge"
            }
          ]
        },
        "Active Email Templates Lookup": {
          "label": "Active Email Templates Lookup",
          "slug": "se0eee1c1b",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Link to Tasks": {
          "label": "Link to Tasks",
          "slug": "s10uutzy",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks Archive 2024 (Restored)": {
          "label": "Link to Tasks Archive 2024 (Restored)",
          "slug": "sw5vtvoe",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Standard Terms and Conditions": {
      "name": "Standard Terms and Conditions",
      "id": "66a65264ddfc1581920d06e9",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Basic Payment Terms": {
          "label": "Basic Payment Terms",
          "slug": "s669853694",
          "field_type": "textareafield"
        },
        "Quote Expiry Rule": {
          "label": "Quote Expiry Rule",
          "slug": "s0e04004f4",
          "field_type": "numberfield"
        },
        "Travel Pricing": {
          "label": "Travel Pricing",
          "slug": "scd844d144",
          "field_type": "textareafield"
        },
        "Deliverables (System Field)": {
          "label": "Deliverables (System Field)",
          "slug": "sty1wq2e",
          "field_type": "linkedrecordfield"
        },
        "Set Price Payment Terms": {
          "label": "Set Price Payment Terms",
          "slug": "saf51e6935",
          "field_type": "textareafield"
        },
        "Minimum Invoice Price": {
          "label": "Minimum Invoice Price",
          "slug": "s815f4b3e0",
          "field_type": "currencyfield"
        },
        "Hourly Rate Payment Terms": {
          "label": "Hourly Rate Payment Terms",
          "slug": "s671622b82",
          "field_type": "textareafield"
        },
        "Quote Hourly Rate": {
          "label": "Quote Hourly Rate",
          "slug": "sb04122e73",
          "field_type": "currencyfield"
        },
        "Minimum Hours": {
          "label": "Minimum Hours",
          "slug": "s4f08ee1fd",
          "field_type": "numberfield"
        },
        "Invoice Payment Period": {
          "label": "Invoice Payment Period",
          "slug": "sacc2543f3",
          "field_type": "numberfield"
        }
      }
    },
    "Task Templates": {
      "name": "Task Templates",
      "id": "656f454c7cd3610c175b1fcb",
      "structure": {
        "Task": {
          "label": "Task",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Link to Task Template Details (System Field)": {
          "label": "Link to Task Template Details (System Field)",
          "slug": "sbjnajak",
          "field_type": "linkedrecordfield"
        },
        "Sub-Tasks": {
          "label": "Sub-Tasks",
          "slug": "s0ac256386",
          "field_type": "checklistfield"
        },
        "Job Types": {
          "label": "Job Types",
          "slug": "s22eda91c5",
          "field_type": "linkedrecordfield"
        },
        "Unlinked Job Types (System Field)": {
          "label": "Unlinked Job Types (System Field)",
          "slug": "s46e58c8d0",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "First Unlinked Job Type (System Field)": {
          "label": "First Unlinked Job Type (System Field)",
          "slug": "s500416dbe",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Clicker (System Field)": {
          "label": "Clicker (System Field)",
          "slug": "s5614da3fb",
          "field_type": "yesnofield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "s9a3bebc41",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Task Attachment (editable)": {
          "label": "Task Attachment (editable)",
          "slug": "s134172e5f",
          "field_type": "filefield"
        },
        "Switch Time Tracking Task": {
          "label": "Switch Time Tracking Task",
          "slug": "sfeaba2cde",
          "field_type": "yesnofield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "sf53a49bb6",
          "field_type": "formulafield"
        },
        "Milestone": {
          "label": "Milestone",
          "slug": "sd82bab817",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "SXXMX",
              "label": "1. Initiation"
            },
            {
              "value": "jP461",
              "label": "2. Finalisation"
            },
            {
              "value": "cZLyG",
              "label": "3.Submission"
            },
            {
              "value": "ydlMy",
              "label": "4.External Approval"
            },
            {
              "value": "Q1BLh",
              "label": "5. Job Completion"
            }
          ]
        },
        "Task Details": {
          "label": "Task Details",
          "slug": "s251f007c4",
          "field_type": "richtextareafield"
        }
      }
    },
    "Task Template Details": {
      "name": "Task Template Details",
      "id": "656f457353508707265f3a25",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Job Type": {
          "label": "Job Type",
          "slug": "s27bfb497c",
          "field_type": "linkedrecordfield"
        },
        "Task Template": {
          "label": "Task Template",
          "slug": "sadc4d6b05",
          "field_type": "linkedrecordfield"
        },
        "Task": {
          "label": "Task",
          "slug": "s7ea5ef3aa",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Milestones": {
          "label": "Milestones",
          "slug": "s276259895",
          "field_type": "lookupfield"
        },
        "Sub Tasks": {
          "label": "Sub Tasks",
          "slug": "sa601273e6",
          "field_type": "formulafield",
          "target_field_type": "checklistfield"
        },
        "Job Task Attachment (editable)": {
          "label": "Job Task Attachment (editable)",
          "slug": "sf4be1751c",
          "field_type": "filefield"
        },
        "Template Active?": {
          "label": "Template Active?",
          "slug": "s7892b2c07",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "New Project ID (System Field)": {
          "label": "New Project ID (System Field)",
          "slug": "s0cd2c788a",
          "field_type": "textfield"
        },
        "Job Task Attachment (not editable)": {
          "label": "Job Task Attachment (not editable)",
          "slug": "sa9a92ca00",
          "field_type": "filefield"
        },
        "Job Code": {
          "label": "Job Code",
          "slug": "scad2fa87c",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "s090df01a0",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Task Attachment (editable) (from Task Templates)": {
          "label": "Task Attachment (editable) (from Task Templates)",
          "slug": "sa1b24f9ab",
          "field_type": "lookupfield",
          "target_field_type": "filefield"
        },
        "Assign Task To (system Field)": {
          "label": "Assign Task To (system Field)",
          "slug": "sb860c55ad",
          "field_type": "userfield"
        },
        "Link to Tasks": {
          "label": "Link to Tasks",
          "slug": "spd5hcwq",
          "field_type": "linkedrecordfield"
        },
        "Switch Time Tracking Task": {
          "label": "Switch Time Tracking Task",
          "slug": "s6646aa663",
          "field_type": "yesnofield"
        },
        "Link to Management Tasks": {
          "label": "Link to Management Tasks",
          "slug": "sl3cxfbk",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks 1": {
          "label": "Link to Tasks 1",
          "slug": "sqt9rxlc",
          "field_type": "linkedrecordfield"
        },
        "Link to Tasks Archive 2024 (Restored)": {
          "label": "Link to Tasks Archive 2024 (Restored)",
          "slug": "sxaselsw",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "SmartSuite Schema": {
      "name": "SmartSuite Schema",
      "id": "6567011473b2590b7b371cff",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        }
      }
    },
    "Staff Members": {
      "name": "Staff Members",
      "id": "6510622d12d849370935f8e9",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Role": {
          "label": "Role",
          "slug": "description",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "f49aa6b4-969c-4a61-8ecd-4b96d76830e5",
              "label": "Director"
            },
            {
              "value": "uwtsd",
              "label": "Manager"
            },
            {
              "value": "6cf78184-f177-4cd3-969b-a9535b1e58ee",
              "label": "Consultant"
            },
            {
              "value": "6696654b-9e52-4ef3-9f51-2cccddb807e9",
              "label": "Admin Assistant"
            },
            {
              "value": "6c5cda16-d10d-4ec7-aef1-8734d62860f8",
              "label": "Data Analyst"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Full Name": {
          "label": "Full Name",
          "slug": "s6f91e2b42",
          "field_type": "fullnamefield",
          "choices": [
            {
              "value": "1",
              "label": "Mr."
            },
            {
              "value": "2",
              "label": "Mrs."
            },
            {
              "value": "1c8d1363-6f54-4f37-92db-f1a9a7674180",
              "label": "Dr."
            },
            {
              "value": "c48b73a6-9b73-46f8-9d64-729cd57b7890",
              "label": "Miss."
            },
            {
              "value": "dd2c22ba-af16-4ea7-a959-3181440ee3fa",
              "label": "Ms."
            }
          ]
        },
        "Email": {
          "label": "Email",
          "slug": "sb199392d0",
          "field_type": "emailfield"
        },
        "Hourly Rate": {
          "label": "Hourly Rate",
          "slug": "s6a5822cfc",
          "field_type": "numberfield"
        },
        "Areas of Responsibility": {
          "label": "Areas of Responsibility",
          "slug": "s68ewhp9",
          "field_type": "linkedrecordfield"
        },
        "Status": {
          "label": "Status",
          "slug": "s9be056241",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "ready_for_review",
              "label": "Former Employee"
            },
            {
              "value": "complete",
              "label": "Current Employee"
            }
          ]
        },
        "Link to Meetings": {
          "label": "Link to Meetings",
          "slug": "s5uywnu5",
          "field_type": "linkedrecordfield"
        },
        "Responsibilities": {
          "label": "Responsibilities",
          "slug": "s133c6980e",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "qQlzY",
              "label": "Project Delivery"
            },
            {
              "value": "W3xv4",
              "label": "RHI Service Delivery"
            },
            {
              "value": "Wqhdb",
              "label": "RO Service Delivery"
            },
            {
              "value": "nPhh7",
              "label": "ASA"
            },
            {
              "value": "Kh8Dp",
              "label": "Sales"
            },
            {
              "value": "kiHQK",
              "label": "Invoicing"
            },
            {
              "value": "ZGtID",
              "label": "Woodsure"
            },
            {
              "value": "PhgKy",
              "label": "FMS"
            },
            {
              "value": "9P9tO",
              "label": "Management"
            },
            {
              "value": "hqZqh",
              "label": "CHPQA"
            }
          ]
        },
        "Live FMS Projects with YES": {
          "label": "Live FMS Projects with YES",
          "slug": "sd2a9f26aa",
          "field_type": "formulafield"
        },
        "Live Woodsure Projects with YES": {
          "label": "Live Woodsure Projects with YES",
          "slug": "sf13c9fe25",
          "field_type": "formulafield"
        },
        "Total Live Woodsure Projects": {
          "label": "Total Live Woodsure Projects",
          "slug": "s367e81c4a",
          "field_type": "formulafield"
        },
        "Total Live FMS Projects": {
          "label": "Total Live FMS Projects",
          "slug": "sc74f7e202",
          "field_type": "formulafield"
        },
        "Projects Submitted (past week)": {
          "label": "Projects Submitted (past week)",
          "slug": "s656871e81",
          "field_type": "formulafield"
        },
        "Live Projects With Regulator": {
          "label": "Live Projects With Regulator",
          "slug": "sfa5635a97",
          "field_type": "formulafield"
        },
        "Total Live Amendment Projects": {
          "label": "Total Live Amendment Projects",
          "slug": "s88e89b9f0",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "New Projects (past week)": {
          "label": "New Projects (past week)",
          "slug": "sed20fa58f",
          "field_type": "formulafield"
        },
        "Total Live Hard Deadlines": {
          "label": "Total Live Hard Deadlines",
          "slug": "s39176c088",
          "field_type": "formulafield"
        },
        "Total Live Projects": {
          "label": "Total Live Projects",
          "slug": "sa74dc56d6",
          "field_type": "formulafield"
        },
        "Total Live Tasks": {
          "label": "Total Live Tasks",
          "slug": "s4f3b8739d",
          "field_type": "formulafield"
        },
        "Total Overdue Invoices": {
          "label": "Total Overdue Invoices",
          "slug": "sa8125e1a9",
          "field_type": "formulafield"
        },
        "Total Unsent Invoice Items": {
          "label": "Total Unsent Invoice Items",
          "slug": "s6h8i5vo",
          "field_type": "formulafield"
        },
        "Total Live ASA Projects": {
          "label": "Total Live ASA Projects",
          "slug": "shgwmq6n",
          "field_type": "formulafield"
        },
        "Total Jobs Quoted": {
          "label": "Total Jobs Quoted",
          "slug": "sa84pags",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Live ASA Projects with YES": {
          "label": "Live ASA Projects with YES",
          "slug": "s402856c0e",
          "field_type": "formulafield"
        },
        "Total Quotes Converted": {
          "label": "Total Quotes Converted",
          "slug": "s889a94e9e",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Link to Travel (Restored)": {
          "label": "Link to Travel (Restored)",
          "slug": "s3w1tz13",
          "field_type": "linkedrecordfield"
        },
        "Link to Timesheet (Restored)": {
          "label": "Link to Timesheet (Restored)",
          "slug": "s8vskw1y",
          "field_type": "linkedrecordfield"
        },
        "Deliverables (System Field)": {
          "label": "Deliverables (System Field)",
          "slug": "s361745df1",
          "field_type": "linkedrecordfield"
        },
        "SmartSuite Profile": {
          "label": "SmartSuite Profile",
          "slug": "s632bd646d",
          "field_type": "userfield"
        },
        "Link to Gregor Dashboard": {
          "label": "Link to Gregor Dashboard",
          "slug": "s6d1nc42",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard": {
          "label": "Link to Craig Dashboard",
          "slug": "s7kj4y5h",
          "field_type": "linkedrecordfield"
        },
        "Link to Trudy Dashboard 1": {
          "label": "Link to Trudy Dashboard 1",
          "slug": "s02ll316",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 1": {
          "label": "Link to Craig Dashboard 1",
          "slug": "si20ftw3",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 2": {
          "label": "Link to Craig Dashboard 2",
          "slug": "s3vkcs5l",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 3": {
          "label": "Link to Craig Dashboard 3",
          "slug": "s2hn46ow",
          "field_type": "linkedrecordfield"
        },
        "Link to Adam Dashboard": {
          "label": "Link to Adam Dashboard",
          "slug": "sq8ituld",
          "field_type": "linkedrecordfield"
        },
        "Link to Gregor Dashboard 1": {
          "label": "Link to Gregor Dashboard 1",
          "slug": "sun2eqwf",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Delivery Checks": {
      "name": "Delivery Checks",
      "id": "65d4737e120b090f3e8b7a12",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Checks Completed By": {
          "label": "Checks Completed By",
          "slug": "seca885d17",
          "field_type": "userfield"
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sec01eae68",
          "field_type": "linkedrecordfield"
        },
        "Job Type": {
          "label": "Job Type",
          "slug": "s39b91ef66",
          "field_type": "linkedrecordfield"
        },
        "Job Sub-Type": {
          "label": "Job Sub-Type",
          "slug": "s35b08a555",
          "field_type": "linkedrecordfield"
        },
        "Date Completed": {
          "label": "Date Completed",
          "slug": "sb269f852e",
          "field_type": "datefield"
        },
        "Empty Deep Dive Checklist": {
          "label": "Empty Deep Dive Checklist",
          "slug": "s4159ada06",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Deep Dive Checklist": {
          "label": "Deep Dive Checklist",
          "slug": "s1c87483b6",
          "field_type": "richtextareafield"
        },
        "Add to Problem Register": {
          "label": "Add to Problem Register",
          "slug": "s9476cd6cb",
          "field_type": "linkedrecordfield"
        },
        "High Priority": {
          "label": "High Priority",
          "slug": "skntk3zx",
          "field_type": "textfield"
        },
        "Category": {
          "label": "Category",
          "slug": "s901814c9f",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "N3avR",
              "label": "Deep Dive"
            },
            {
              "value": "JyPyz",
              "label": "Workload Review"
            }
          ]
        },
        "Workload Category": {
          "label": "Workload Category",
          "slug": "s483291708",
          "field_type": "linkedrecordfield"
        },
        "Blank Workload Checks": {
          "label": "Blank Workload Checks",
          "slug": "s29e3d5590",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        }
      }
    },
    "placeholder": {
      "name": "placeholder",
      "id": "657646561a0cf70e8e3d8ad0",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "SmartDoc": {
          "label": "SmartDoc",
          "slug": "sbb6d20809",
          "field_type": "richtextareafield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "sa2a84214c",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Date": {
          "label": "Date",
          "slug": "s66753bfe6",
          "field_type": "datefield"
        },
        "Link to QuickFile Contact IDs": {
          "label": "Link to QuickFile Contact IDs",
          "slug": "s65d1c5ef5",
          "field_type": "linkedrecordfield"
        },
        "Formula 1": {
          "label": "Formula 1",
          "slug": "s394799e15",
          "field_type": "formulafield",
          "target_field_type": "recordtitlefield"
        },
        "Random number generator": {
          "label": "Random number generator",
          "slug": "s0ec1cf0b6",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Formula 2": {
          "label": "Formula 2",
          "slug": "sd4b1716b7",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Chosen index": {
          "label": "Chosen index",
          "slug": "s2024651d9",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Formula 3": {
          "label": "Formula 3",
          "slug": "scdbaaf6e8",
          "field_type": "formulafield",
          "target_field_type": "recordtitlefield"
        },
        "Count": {
          "label": "Count",
          "slug": "se2d6907b9",
          "field_type": "countfield"
        },
        "Files and Images": {
          "label": "Files and Images",
          "slug": "se31dffdee",
          "field_type": "filefield"
        },
        "Formula 4": {
          "label": "Formula 4",
          "slug": "sc7fda3b50",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Date 1": {
          "label": "Date 1",
          "slug": "s706c72333",
          "field_type": "datefield"
        },
        "Date 1 + 11 months": {
          "label": "Date 1 + 11 months",
          "slug": "s7666959ca",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        }
      }
    },
    "Standard Terms and Conditions (old - unused)": {
      "name": "Standard Terms and Conditions (old - unused)",
      "id": "657860314131e6d7f1965bf6",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Content": {
          "label": "Content",
          "slug": "s4bbd2fd62",
          "field_type": "textareafield"
        },
        "Number": {
          "label": "Number",
          "slug": "s6cbcf11fa",
          "field_type": "numberfield"
        },
        "Synced to Make (System Field)": {
          "label": "Synced to Make (System Field)",
          "slug": "s4d9af27da",
          "field_type": "yesnofield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "sad8614b1a",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Number (2)": {
          "label": "Number (2)",
          "slug": "s0ada5442a",
          "field_type": "numberfield"
        }
      }
    },
    "Deliverables": {
      "name": "Deliverables",
      "id": "66311b7e79fa61813ceb0ca8",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Link to Job Types": {
          "label": "Link to Job Types",
          "slug": "s9p99s69",
          "field_type": "linkedrecordfield"
        },
        "# Active Deliverables": {
          "label": "# Active Deliverables",
          "slug": "s9117943ab",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "# Deliverables": {
          "label": "# Deliverables",
          "slug": "scnf8n94",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Link to Metrics": {
          "label": "Link to Metrics",
          "slug": "sf9hrpd3",
          "field_type": "linkedrecordfield"
        },
        "Company": {
          "label": "Company",
          "slug": "s87eef9176",
          "field_type": "linkedrecordfield"
        },
        "Link to Staff Members (Restored)": {
          "label": "Link to Staff Members (Restored)",
          "slug": "sboyablx",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Management Projects": {
      "name": "Management Projects",
      "id": "65c4a2ec70718b27661f1c61",
      "structure": {
        "Project Name": {
          "label": "Project Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Project Created": {
          "label": "Project Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Status": {
          "label": "Status",
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
        "Project Tasks": {
          "label": "Project Tasks",
          "slug": "s6c9e47694",
          "field_type": "linkedrecordfield"
        },
        "Current Total Income": {
          "label": "Current Total Income",
          "slug": "scf0371418",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Job Type Code (System Field)": {
          "label": "Job Type Code (System Field)",
          "slug": "s89e3b91f6",
          "field_type": "lookupfield"
        },
        "Start Year (System Field)": {
          "label": "Start Year (System Field)",
          "slug": "s0fe2d833d",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Project Overview": {
          "label": "Project Overview",
          "slug": "s3a4f706df",
          "field_type": "richtextareafield"
        },
        "Linked Opportunity": {
          "label": "Linked Opportunity",
          "slug": "s0d88aeb61",
          "field_type": "linkedrecordfield"
        },
        "Count of Projects of this type (System Field)": {
          "label": "Count of Projects of this type (System Field)",
          "slug": "s3f995d84d",
          "field_type": "lookupfield"
        },
        "Project Number (System Field)": {
          "label": "Project Number (System Field)",
          "slug": "s8c261015f",
          "field_type": "numberfield"
        },
        "Job Code (System Field)": {
          "label": "Job Code (System Field)",
          "slug": "sa91201eb9",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Local Job Folder": {
          "label": "Local Job Folder",
          "slug": "sgf23n2h",
          "field_type": "buttonfield"
        },
        "Formatted Local Folder Location (System Field)": {
          "label": "Formatted Local Folder Location (System Field)",
          "slug": "s859fae92f",
          "field_type": "formulafield"
        },
        "Total Time Tracked": {
          "label": "Total Time Tracked",
          "slug": "s4c8be909d",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Outstanding Payment": {
          "label": "Outstanding Payment",
          "slug": "s587106504",
          "field_type": "formulafield"
        },
        "Total Time Estimate": {
          "label": "Total Time Estimate",
          "slug": "sc234dd494",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Total Tasks": {
          "label": "Total Tasks",
          "slug": "sc2de1d6bf",
          "field_type": "countfield"
        },
        "Open Tasks": {
          "label": "Open Tasks",
          "slug": "s4e2734091",
          "field_type": "countfield"
        },
        "% Tasks Complete": {
          "label": "% Tasks Complete",
          "slug": "sf49e099cb",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Current Time Cost": {
          "label": "Current Time Cost",
          "slug": "s89b4fbcfd",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Estimated Value": {
          "label": "Estimated Value",
          "slug": "s7c42e8a03",
          "field_type": "lookupfield"
        },
        "Next Task Due": {
          "label": "Next Task Due",
          "slug": "s5c076a520",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Jobs This Year (System Field)": {
          "label": "Jobs This Year (System Field)",
          "slug": "sb77a47f63",
          "field_type": "lookupfield"
        },
        "Record ID (System Field)": {
          "label": "Record ID (System Field)",
          "slug": "sb26ad886b",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Dropbox Folder Created (System Field)": {
          "label": "Dropbox Folder Created (System Field)",
          "slug": "s57b68a327",
          "field_type": "yesnofield"
        },
        "Project Price": {
          "label": "Project Price",
          "slug": "se8447dd14",
          "field_type": "formulafield"
        },
        "Initial Invoice Amount (System Field)": {
          "label": "Initial Invoice Amount (System Field)",
          "slug": "s3c316f8bf",
          "field_type": "formulafield"
        },
        "Project RHIs": {
          "label": "Project RHIs",
          "slug": "sfc72e134f",
          "field_type": "lookupfield"
        },
        "Initial Email Template": {
          "label": "Initial Email Template",
          "slug": "s92ff8890a",
          "field_type": "lookupfield"
        },
        "Follow-up Email Template": {
          "label": "Follow-up Email Template",
          "slug": "sbdaf83537",
          "field_type": "lookupfield"
        },
        "Late invoices": {
          "label": "Late invoices",
          "slug": "s6a9d62800",
          "field_type": "lookupfield",
          "target_field_type": "datefield"
        },
        "Formula 1": {
          "label": "Formula 1",
          "slug": "s79fda42ae",
          "field_type": "formulafield"
        },
        "Incomplete Initial Info Tasks": {
          "label": "Incomplete Initial Info Tasks",
          "slug": "s8275f412e",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Incomplete All Info Tasks": {
          "label": "Incomplete All Info Tasks",
          "slug": "sbc4de6f4a",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Incomplete Job Submitted Tasks": {
          "label": "Incomplete Job Submitted Tasks",
          "slug": "sc80544339",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Formula 2": {
          "label": "Formula 2",
          "slug": "s21ee4dd81",
          "field_type": "formulafield"
        },
        "Time Tracking Project (System Field)": {
          "label": "Time Tracking Project (System Field)",
          "slug": "s54190cd56",
          "field_type": "formulafield"
        },
        "Test": {
          "label": "Test",
          "slug": "s580589d04",
          "field_type": "textfield"
        },
        "Quote": {
          "label": "Quote",
          "slug": "sf78c857f5",
          "field_type": "linkedrecordfield"
        },
        "JOB PROGRESS": {
          "label": "JOB PROGRESS",
          "slug": "dependency",
          "field_type": "dependencyfield"
        },
        "Milestone": {
          "label": "Milestone",
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
        "Project Manager": {
          "label": "Project Manager",
          "slug": "s32c34a296",
          "field_type": "userfield"
        },
        "Naming Function (System Field)": {
          "label": "Naming Function (System Field)",
          "slug": "s910e48bd5",
          "field_type": "formulafield"
        },
        "Internal Project Name": {
          "label": "Internal Project Name",
          "slug": "s5438714b9",
          "field_type": "textfield"
        },
        "Last Communication": {
          "label": "Last Communication",
          "slug": "sfda00eb96",
          "field_type": "datefield"
        },
        "Internal/External Action?": {
          "label": "Internal/External Action?",
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
        "Link to Projects": {
          "label": "Link to Projects",
          "slug": "st69z15b",
          "field_type": "linkedrecordfield"
        },
        "Organisation": {
          "label": "Organisation",
          "slug": "sqqks5ot",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Management Tasks": {
      "name": "Management Tasks",
      "id": "65c4a37d452b11d77dd67db8",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Lead and Time Tracking Staff (System Field)": {
          "label": "Lead and Time Tracking Staff (System Field)",
          "slug": "sd4cdd4c27",
          "field_type": "userfield"
        },
        "Subtasks": {
          "label": "Subtasks",
          "slug": "sa5fbbd37c",
          "field_type": "checklistfield"
        },
        "Status": {
          "label": "Status",
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
        "External Due Date": {
          "label": "External Due Date",
          "slug": "s2b170d112",
          "field_type": "duedatefield"
        },
        "Due Date Grouping (System Field)": {
          "label": "Due Date Grouping (System Field)",
          "slug": "se4120b568",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Internal Due Date": {
          "label": "Internal Due Date",
          "slug": "s6f94d48c2",
          "field_type": "duedatefield"
        },
        "Site": {
          "label": "Site",
          "slug": "s8c9e4d2ca",
          "field_type": "linkedrecordfield"
        },
        "Installation": {
          "label": "Installation",
          "slug": "s0a57bdc74",
          "field_type": "linkedrecordfield"
        },
        "Request": {
          "label": "Request",
          "slug": "s5f143ae1a",
          "field_type": "richtextareafield"
        },
        "Client": {
          "label": "Client",
          "slug": "sf16928c0a",
          "field_type": "linkedrecordfield"
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "s99be6c0bc",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Task Name (System Field)": {
          "label": "Task Name (System Field)",
          "slug": "s68f9392f8",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Internal Deadline?": {
          "label": "Internal Deadline?",
          "slug": "s4d0bf46ea",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Time Logging Staff": {
          "label": "Time Logging Staff",
          "slug": "s1f2d9d7bc",
          "field_type": "linkedrecordfield"
        },
        "Time Cost": {
          "label": "Time Cost",
          "slug": "sa6ab3edfc",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead from Timesheet (System Field)": {
          "label": "Lead from Timesheet (System Field)",
          "slug": "sc25583922",
          "field_type": "lookupfield"
        },
        "First Unlinked Timesheet (System Field)": {
          "label": "First Unlinked Timesheet (System Field)",
          "slug": "s89f12e1d2",
          "field_type": "formulafield"
        },
        "Task": {
          "label": "Task",
          "slug": "sf07e8dbb2",
          "field_type": "textfield"
        },
        "Task Lead": {
          "label": "Task Lead",
          "slug": "szm6g7jn",
          "field_type": "userfield"
        },
        "Total Time Tracked": {
          "label": "Total Time Tracked",
          "slug": "s9999c6832",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Time Estimate": {
          "label": "Time Estimate",
          "slug": "s6572689e8",
          "field_type": "timetrackingfield"
        },
        "Time Budget Remaining": {
          "label": "Time Budget Remaining",
          "slug": "s005b9b4cf",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Time Tracking Task": {
          "label": "Time Tracking Task",
          "slug": "s4d116c931",
          "field_type": "yesnofield"
        },
        "Unlinked Timesheets (System Field)": {
          "label": "Unlinked Timesheets (System Field)",
          "slug": "s7bdccb1c8",
          "field_type": "formulafield"
        },
        "Send Reminder Message (System Field)": {
          "label": "Send Reminder Message (System Field)",
          "slug": "s86c358d9f",
          "field_type": "yesnofield"
        },
        "Task ID (System Field)": {
          "label": "Task ID (System Field)",
          "slug": "s23c37cbe1",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Attachment (View and Edit)": {
          "label": "Attachment (View and Edit)",
          "slug": "s822c1d881",
          "field_type": "filefield"
        },
        "Milestone": {
          "label": "Milestone",
          "slug": "s9b52f463d",
          "field_type": "tagsfield",
          "choices": []
        },
        "Task Template Details (System Field)": {
          "label": "Task Template Details (System Field)",
          "slug": "s6772c3254",
          "field_type": "linkedrecordfield"
        },
        "Attachment (View Only)": {
          "label": "Attachment (View Only)",
          "slug": "s9e6732f09",
          "field_type": "lookupfield",
          "target_field_type": "filefield"
        },
        "Primary Contact": {
          "label": "Primary Contact",
          "slug": "s660ce19b8",
          "field_type": "linkedrecordfield"
        },
        "RHI": {
          "label": "RHI",
          "slug": "sfafb10408",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        }
      }
    },
    "QuickFile Contact IDs": {
      "name": "QuickFile Contact IDs",
      "id": "65cb6c020acd70f64c710752",
      "structure": {
        "ClientContactID": {
          "label": "ClientContactID",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Contact": {
          "label": "Contact",
          "slug": "s72783a2fb",
          "field_type": "linkedrecordfield"
        },
        "Organisation": {
          "label": "Organisation",
          "slug": "s9f68b6ff1",
          "field_type": "linkedrecordfield"
        },
        "ID and Organisation": {
          "label": "ID and Organisation",
          "slug": "s2bbec106f",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Link to placeholder": {
          "label": "Link to placeholder",
          "slug": "squcjj7m",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Management Checks": {
      "name": "Management Checks",
      "id": "65df784d9d38ecc09d56a062",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Process": {
          "label": "Process",
          "slug": "s7d1ceeedb",
          "field_type": "richtextareafield"
        },
        "Job Category": {
          "label": "Job Category",
          "slug": "s328af5bdb",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "lAaFC",
              "label": "Live-Other"
            },
            {
              "value": "n2ihn",
              "label": "Live List"
            },
            {
              "value": "wRxYL",
              "label": "Deadlines"
            },
            {
              "value": "vlO8p",
              "label": "RHI Simple"
            },
            {
              "value": "DV9ok",
              "label": "RHI Complex"
            },
            {
              "value": "aRh9F",
              "label": "RO"
            }
          ]
        },
        "Link to Meetings": {
          "label": "Link to Meetings",
          "slug": "sdj28maf",
          "field_type": "linkedrecordfield"
        },
        "Link to Delivery Checks": {
          "label": "Link to Delivery Checks",
          "slug": "sehp9r3c",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard": {
          "label": "Link to Craig Dashboard",
          "slug": "s74uoxw3",
          "field_type": "linkedrecordfield"
        },
        "Link to Gregor Dashboard": {
          "label": "Link to Gregor Dashboard",
          "slug": "s4o57gnv",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 1": {
          "label": "Link to Craig Dashboard 1",
          "slug": "scmgqt9z",
          "field_type": "linkedrecordfield"
        },
        "Link to Trudy Dashboard 1": {
          "label": "Link to Trudy Dashboard 1",
          "slug": "sj27ta2o",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 2": {
          "label": "Link to Craig Dashboard 2",
          "slug": "s44o37k2",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 3": {
          "label": "Link to Craig Dashboard 3",
          "slug": "skjestp8",
          "field_type": "linkedrecordfield"
        },
        "Link to Craig Dashboard 4": {
          "label": "Link to Craig Dashboard 4",
          "slug": "shnwpmzu",
          "field_type": "linkedrecordfield"
        },
        "Link to Adam Dashboard": {
          "label": "Link to Adam Dashboard",
          "slug": "szrkivsl",
          "field_type": "linkedrecordfield"
        },
        "Link to Gregor Dashboard 1": {
          "label": "Link to Gregor Dashboard 1",
          "slug": "ss71vuiz",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Schema": {
      "name": "Schema",
      "id": "65284529d387a89a8e1279e6",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        }
      }
    },
    "Tasks Archive 2024 (Restored)": {
      "name": "Tasks Archive 2024 (Restored)",
      "id": "66fd24762cf8102719060712",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Subtasks": {
          "label": "Subtasks",
          "slug": "sa5fbbd37c",
          "field_type": "checklistfield"
        },
        "Status": {
          "label": "Status",
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
          "label": "Hard Due Date",
          "slug": "s2b170d112",
          "field_type": "duedatefield"
        },
        "Due Date Grouping (System Field)": {
          "label": "Due Date Grouping (System Field)",
          "slug": "se4120b568",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Estimated Due Date": {
          "label": "Estimated Due Date",
          "slug": "s6f94d48c2",
          "field_type": "duedatefield"
        },
        "Site": {
          "label": "Site",
          "slug": "s8c9e4d2ca",
          "field_type": "linkedrecordfield"
        },
        "Installation Name": {
          "label": "Installation Name",
          "slug": "s0a57bdc74",
          "field_type": "linkedrecordfield"
        },
        "Task Detail": {
          "label": "Task Detail",
          "slug": "s5f143ae1a",
          "field_type": "richtextareafield"
        },
        "Client": {
          "label": "Client",
          "slug": "sf16928c0a",
          "field_type": "linkedrecordfield"
        },
        "Due Date (Soonest)": {
          "label": "Due Date (Soonest)",
          "slug": "s99be6c0bc",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Time Cost (Timesheets)": {
          "label": "Time Cost (Timesheets)",
          "slug": "sa6ab3edfc",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Task": {
          "label": "Task",
          "slug": "sf07e8dbb2",
          "field_type": "textfield"
        },
        "Task Lead": {
          "label": "Task Lead",
          "slug": "szm6g7jn",
          "field_type": "userfield"
        },
        "Total Time Tracked (Timesheets)": {
          "label": "Total Time Tracked (Timesheets)",
          "slug": "s9999c6832",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Time Spent on task": {
          "label": "Time Spent on task",
          "slug": "s6572689e8",
          "field_type": "timetrackingfield"
        },
        "Track time?": {
          "label": "Track time?",
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
          "label": "Record ID (System Field)",
          "slug": "s23c37cbe1",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Attachment": {
          "label": "Attachment",
          "slug": "s822c1d881",
          "field_type": "filefield"
        },
        "Task Template Details (System Field)": {
          "label": "Task Template Details (System Field)",
          "slug": "s6772c3254",
          "field_type": "linkedrecordfield"
        },
        "Attachment (View Only)": {
          "label": "Attachment (View Only)",
          "slug": "s9e6732f09",
          "field_type": "lookupfield",
          "target_field_type": "filefield"
        },
        "Deadline List Flag": {
          "label": "Deadline List Flag",
          "slug": "s4624b61be",
          "field_type": "yesnofield"
        },
        "Choose title": {
          "label": "Choose title",
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
          "label": "RHI Number",
          "slug": "s9bb4ebba9",
          "field_type": "linkedrecordfield"
        },
        "RO Generator": {
          "label": "RO Generator",
          "slug": "s3c762620d",
          "field_type": "linkedrecordfield"
        },
        "Hard Due Date (Form Field)*": {
          "label": "Hard Due Date (Form Field)*",
          "slug": "s925af62dd",
          "field_type": "datefield"
        },
        "Hard Due Date (Form Field)": {
          "label": "Hard Due Date (Form Field)",
          "slug": "s10mz10j",
          "field_type": "datefield"
        },
        "Task Name (System Field)": {
          "label": "Task Name (System Field)",
          "slug": "s1ef201c6a",
          "field_type": "formulafield"
        },
        "Extra Information": {
          "label": "Extra Information",
          "slug": "s6d76ae0ab",
          "field_type": "textfield"
        },
        "Date Complete": {
          "label": "Date Complete",
          "slug": "s8f98aece6",
          "field_type": "datefield"
        },
        "Type of task": {
          "label": "Type of task",
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
          "label": "Contact",
          "slug": "s3227287b0",
          "field_type": "linkedrecordfield"
        },
        "Included on Deadline List (System Field)": {
          "label": "Included on Deadline List (System Field)",
          "slug": "sd195c52e9",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Due Date is internal (system field)": {
          "label": "Due Date is internal (system field)",
          "slug": "s59088446c",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Hard Due Date (Read Only)": {
          "label": "Hard Due Date (Read Only)",
          "slug": "sc9a6592c2",
          "field_type": "formulafield",
          "target_field_type": "duedatefield"
        },
        "Estimated Due Date (Read Only)": {
          "label": "Estimated Due Date (Read Only)",
          "slug": "s678084c13",
          "field_type": "formulafield",
          "target_field_type": "duedatefield"
        },
        "Milestone": {
          "label": "Milestone",
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
          "label": "Earliest task milestone",
          "slug": "s245d42100",
          "field_type": "formulafield",
          "target_field_type": "statusfield"
        },
        "Timeline view due date (System Field)": {
          "label": "Timeline view due date (System Field)",
          "slug": "s218a49cc0",
          "field_type": "datefield"
        },
        "Job sub-type": {
          "label": "Job sub-type",
          "slug": "s89f23add2",
          "field_type": "linkedrecordfield"
        },
        "Status Group": {
          "label": "Status Group",
          "slug": "s42a7bf1f6",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Urgency": {
          "label": "Urgency",
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
        "Updates from Project": {
          "label": "Updates from Project",
          "slug": "s3ol0zty",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "First Created - Archive": {
          "label": "First Created - Archive",
          "slug": "s3321f8665",
          "field_type": "datefield"
        },
        "To be Archived": {
          "label": "To be Archived",
          "slug": "s73b29da45",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Timesheet Entries (Restored)": {
          "label": "Timesheet Entries (Restored)",
          "slug": "sirtahsi",
          "field_type": "linkedrecordfield"
        },
        "RHI Status Updates (Restored)": {
          "label": "RHI Status Updates (Restored)",
          "slug": "s0vvhlo3",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Tasks Archive 2024 (Restored)6703ea8c4e5c370707f1d513": {
      "name": "Tasks Archive 2024 (Restored)",
      "id": "6703ea8c4e5c370707f1d513",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Subtasks": {
          "label": "Subtasks",
          "slug": "sa5fbbd37c",
          "field_type": "checklistfield"
        },
        "Status": {
          "label": "Status",
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
          "label": "Hard Due Date",
          "slug": "s2b170d112",
          "field_type": "duedatefield"
        },
        "Due Date Grouping (System Field)": {
          "label": "Due Date Grouping (System Field)",
          "slug": "se4120b568",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Estimated Due Date": {
          "label": "Estimated Due Date",
          "slug": "s6f94d48c2",
          "field_type": "duedatefield"
        },
        "Site": {
          "label": "Site",
          "slug": "s8c9e4d2ca",
          "field_type": "linkedrecordfield"
        },
        "Installation Name": {
          "label": "Installation Name",
          "slug": "s0a57bdc74",
          "field_type": "linkedrecordfield"
        },
        "Task Detail": {
          "label": "Task Detail",
          "slug": "s5f143ae1a",
          "field_type": "richtextareafield"
        },
        "Client": {
          "label": "Client",
          "slug": "sf16928c0a",
          "field_type": "linkedrecordfield"
        },
        "Due Date (Soonest)": {
          "label": "Due Date (Soonest)",
          "slug": "s99be6c0bc",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Time Cost (Timesheets)": {
          "label": "Time Cost (Timesheets)",
          "slug": "sa6ab3edfc",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Task": {
          "label": "Task",
          "slug": "sf07e8dbb2",
          "field_type": "textfield"
        },
        "Task Lead": {
          "label": "Task Lead",
          "slug": "szm6g7jn",
          "field_type": "userfield"
        },
        "Total Time Tracked (Timesheets)": {
          "label": "Total Time Tracked (Timesheets)",
          "slug": "s9999c6832",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Time Spent on task": {
          "label": "Time Spent on task",
          "slug": "s6572689e8",
          "field_type": "timetrackingfield"
        },
        "Track time?": {
          "label": "Track time?",
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
          "label": "Record ID (System Field)",
          "slug": "s23c37cbe1",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Attachment": {
          "label": "Attachment",
          "slug": "s822c1d881",
          "field_type": "filefield"
        },
        "Task Template Details (System Field)": {
          "label": "Task Template Details (System Field)",
          "slug": "s6772c3254",
          "field_type": "linkedrecordfield"
        },
        "Attachment (View Only)": {
          "label": "Attachment (View Only)",
          "slug": "s9e6732f09",
          "field_type": "lookupfield",
          "target_field_type": "filefield"
        },
        "Deadline List Flag": {
          "label": "Deadline List Flag",
          "slug": "s4624b61be",
          "field_type": "yesnofield"
        },
        "Choose title": {
          "label": "Choose title",
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
          "label": "RHI Number",
          "slug": "s9bb4ebba9",
          "field_type": "linkedrecordfield"
        },
        "RO Generator": {
          "label": "RO Generator",
          "slug": "s3c762620d",
          "field_type": "linkedrecordfield"
        },
        "Hard Due Date (Form Field)*": {
          "label": "Hard Due Date (Form Field)*",
          "slug": "s925af62dd",
          "field_type": "datefield"
        },
        "Hard Due Date (Form Field)": {
          "label": "Hard Due Date (Form Field)",
          "slug": "s10mz10j",
          "field_type": "datefield"
        },
        "Task Name (System Field)": {
          "label": "Task Name (System Field)",
          "slug": "s1ef201c6a",
          "field_type": "formulafield"
        },
        "Extra Information": {
          "label": "Extra Information",
          "slug": "s6d76ae0ab",
          "field_type": "textfield"
        },
        "Date Complete": {
          "label": "Date Complete",
          "slug": "s8f98aece6",
          "field_type": "datefield"
        },
        "Type of task": {
          "label": "Type of task",
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
          "label": "Contact",
          "slug": "s3227287b0",
          "field_type": "linkedrecordfield"
        },
        "Included on Deadline List (System Field)": {
          "label": "Included on Deadline List (System Field)",
          "slug": "sd195c52e9",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Due Date is internal (system field)": {
          "label": "Due Date is internal (system field)",
          "slug": "s59088446c",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Hard Due Date (Read Only)": {
          "label": "Hard Due Date (Read Only)",
          "slug": "sc9a6592c2",
          "field_type": "formulafield",
          "target_field_type": "duedatefield"
        },
        "Estimated Due Date (Read Only)": {
          "label": "Estimated Due Date (Read Only)",
          "slug": "s678084c13",
          "field_type": "formulafield",
          "target_field_type": "duedatefield"
        },
        "Milestone": {
          "label": "Milestone",
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
          "label": "Earliest task milestone",
          "slug": "s245d42100",
          "field_type": "formulafield",
          "target_field_type": "statusfield"
        },
        "Timeline view due date (System Field)": {
          "label": "Timeline view due date (System Field)",
          "slug": "s218a49cc0",
          "field_type": "datefield"
        },
        "Job sub-type": {
          "label": "Job sub-type",
          "slug": "s89f23add2",
          "field_type": "linkedrecordfield"
        },
        "Status Group": {
          "label": "Status Group",
          "slug": "s42a7bf1f6",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Urgency": {
          "label": "Urgency",
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
        "Updates from Project": {
          "label": "Updates from Project",
          "slug": "s3ol0zty",
          "field_type": "lookupfield"
        },
        "First Created - Archive": {
          "label": "First Created - Archive",
          "slug": "s3321f8665",
          "field_type": "datefield"
        },
        "To be Archived": {
          "label": "To be Archived",
          "slug": "s73b29da45",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        }
      }
    },
    "Timesheets": {
      "name": "Timesheets",
      "id": "6529d2caf6b4dc247ac3149a",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Task": {
          "label": "Task",
          "slug": "s3b3a05a3c",
          "field_type": "linkedrecordfield"
        },
        "Staff member": {
          "label": "Staff member",
          "slug": "sa07d28780",
          "field_type": "linkedrecordfield"
        },
        "Time Tracking Log": {
          "label": "Time Tracking Log",
          "slug": "s3c17f3e88",
          "field_type": "timetrackingfield"
        },
        "Task Status": {
          "label": "Task Status",
          "slug": "s2a6947027",
          "field_type": "lookupfield",
          "target_field_type": "statusfield"
        },
        "Time Cost": {
          "label": "Time Cost",
          "slug": "sfb1754968",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Project": {
          "label": "Project",
          "slug": "se9d8de630",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "🔼Comments🔼": {
          "label": "🔼Comments🔼",
          "slug": "s61ee1a87e",
          "field_type": "formulafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "sd8f7ddbe2",
          "field_type": "userfield"
        }
      }
    },
    "Timesheets66fd24762cf8102719060fa6": {
      "name": "Timesheets",
      "id": "66fd24762cf8102719060fa6",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Staff member": {
          "label": "Staff member",
          "slug": "sa07d28780",
          "field_type": "linkedrecordfield"
        },
        "Time Tracking Log": {
          "label": "Time Tracking Log",
          "slug": "s3c17f3e88",
          "field_type": "timetrackingfield"
        },
        "Task Status": {
          "label": "Task Status",
          "slug": "s2a6947027",
          "field_type": "lookupfield",
          "target_field_type": "statusfield"
        },
        "Time Cost": {
          "label": "Time Cost",
          "slug": "sfb1754968",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Project": {
          "label": "Project",
          "slug": "se9d8de630",
          "field_type": "lookupfield"
        },
        "🔼Comments🔼": {
          "label": "🔼Comments🔼",
          "slug": "s61ee1a87e",
          "field_type": "formulafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "sd8f7ddbe2",
          "field_type": "userfield"
        },
        "Task (Restored) 1": {
          "label": "Task (Restored) 1",
          "slug": "s3b3a05a3c",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Legacy Projects": {
      "name": "Legacy Projects",
      "id": "65f079d08f51dd945b00460a",
      "structure": {
        "Job Code": {
          "label": "Job Code",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Site name/ RHI name": {
          "label": "Site name/ RHI name",
          "slug": "s7300696d8",
          "field_type": "textfield"
        },
        "Number": {
          "label": "Number",
          "slug": "se751f84b3",
          "field_type": "textareafield"
        },
        "Email": {
          "label": "Email",
          "slug": "saac9dbab7",
          "field_type": "textareafield"
        },
        "Address": {
          "label": "Address",
          "slug": "s2e6504765",
          "field_type": "textareafield"
        },
        "RHI username/password": {
          "label": "RHI username/password",
          "slug": "scbdc50249",
          "field_type": "textareafield"
        },
        "RHI and ORG number": {
          "label": "RHI and ORG number",
          "slug": "s27f23ae3f",
          "field_type": "textareafield"
        },
        "Installer": {
          "label": "Installer",
          "slug": "sf887533b0",
          "field_type": "textfield"
        },
        "Notes/Actions": {
          "label": "Notes/Actions",
          "slug": "s203c5a9e0",
          "field_type": "richtextareafield"
        },
        "FINAL Invoice sent": {
          "label": "FINAL Invoice sent",
          "slug": "s039b70dfa",
          "field_type": "textfield"
        },
        "Status/Completion date": {
          "label": "Status/Completion date",
          "slug": "sa5b35ab12",
          "field_type": "textfield"
        }
      }
    },
    "KEY INFO": {
      "name": "KEY INFO",
      "id": "65f863ada66187faa404e1d5",
      "structure": {
        "Question": {
          "label": "Question",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Why it is important": {
          "label": "Why it is important",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Question Code": {
          "label": "Question Code",
          "slug": "sffb2dc121",
          "field_type": "textfield"
        },
        "When does this normally apply?": {
          "label": "When does this normally apply?",
          "slug": "scf0efebe6",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "7KLol",
              "label": "All"
            },
            {
              "value": "0LZWJ",
              "label": "Biomass"
            },
            {
              "value": "ZKhVD",
              "label": "Extension apps and Tariff Guarantee."
            },
            {
              "value": "NXeDR",
              "label": "Heat Pumps"
            },
            {
              "value": "QwbJo",
              "label": "Heat pumps"
            },
            {
              "value": "TPWnK",
              "label": "Under 45kW"
            }
          ]
        }
      }
    },
    "KEY INFO66fd24772cf8102719060fa7": {
      "name": "KEY INFO",
      "id": "66fd24772cf8102719060fa7",
      "structure": {
        "Question": {
          "label": "Question",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Why it is important": {
          "label": "Why it is important",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Question Code": {
          "label": "Question Code",
          "slug": "sffb2dc121",
          "field_type": "textfield"
        },
        "When does this normally apply?": {
          "label": "When does this normally apply?",
          "slug": "scf0efebe6",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "7KLol",
              "label": "All"
            },
            {
              "value": "0LZWJ",
              "label": "Biomass"
            },
            {
              "value": "ZKhVD",
              "label": "Extension apps and Tariff Guarantee."
            },
            {
              "value": "NXeDR",
              "label": "Heat Pumps"
            },
            {
              "value": "QwbJo",
              "label": "Heat pumps"
            },
            {
              "value": "TPWnK",
              "label": "Under 45kW"
            }
          ]
        }
      }
    },
    "Team meeting": {
      "name": "Team meeting",
      "id": "65f8679bc7f34980958bb2af",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        }
      }
    },
    "Team meeting66fd24772cf8102719060fb8": {
      "name": "Team meeting",
      "id": "66fd24772cf8102719060fb8",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        }
      }
    },
    "Team Meeting Agenda": {
      "name": "Team Meeting Agenda",
      "id": "65f865804b3a045f2304e1e4",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Points from last meetings": {
          "label": "Points from last meetings",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Frequency": {
          "label": "Frequency",
          "slug": "s2ad0d379a",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "4mLWZ",
              "label": "As necessary"
            },
            {
              "value": "W1YRj",
              "label": "Every 2 weeks"
            },
            {
              "value": "WZAzz",
              "label": "Every week"
            }
          ]
        },
        "Last Completed": {
          "label": "Last Completed",
          "slug": "s80fa8e3f9",
          "field_type": "datefield"
        },
        "Points to raise at next meeting": {
          "label": "Points to raise at next meeting",
          "slug": "sfe1225204",
          "field_type": "textareafield"
        },
        "Ordering": {
          "label": "Ordering",
          "slug": "seae104258",
          "field_type": "numberfield"
        }
      }
    },
    "Meters": {
      "name": "Meters",
      "id": "64d155a9c71c81dc0b41d521",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Serial": {
          "label": "Serial",
          "slug": "sbd07a2bfa",
          "field_type": "textfield"
        },
        "Installation Date": {
          "label": "Installation Date",
          "slug": "sd7c616343",
          "field_type": "datefield"
        },
        "Manufacturer": {
          "label": "Manufacturer",
          "slug": "s6677d3213",
          "field_type": "textfield"
        },
        "Site": {
          "label": "Site",
          "slug": "s12098556c",
          "field_type": "linkedrecordfield"
        },
        "Meter Type": {
          "label": "Meter Type",
          "slug": "sb984597f3",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "57b6d038-e8ad-49a9-8e44-bb8e04cab83e",
              "label": "Electricity"
            },
            {
              "value": "3843a206-1f95-4086-b7f9-8edb79c040c5",
              "label": "Fuel"
            },
            {
              "value": "e71d4a7d-2a06-4063-98a2-637e9c5cc734",
              "label": "Heat"
            }
          ]
        },
        "🔽Comments🔽": {
          "label": "🔽Comments🔽",
          "slug": "s44f775fbb",
          "field_type": "formulafield"
        },
        "🔼Comments🔼": {
          "label": "🔼Comments🔼",
          "slug": "sa77bac8e0",
          "field_type": "formulafield"
        },
        "Meter readings": {
          "label": "Meter readings",
          "slug": "s1755e012e",
          "field_type": "subitemsfield"
        },
        "RHIs": {
          "label": "RHIs",
          "slug": "s0f0982deb",
          "field_type": "linkedrecordfield"
        },
        "Link to Meter Readings": {
          "label": "Link to Meter Readings",
          "slug": "se6q7yos",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Meter Readings660bcfa2a60533d34af7469f": {
      "name": "Meter Readings",
      "id": "660bcfa2a60533d34af7469f",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Reading": {
          "label": "Reading",
          "slug": "sdcb3b724a",
          "field_type": "numberfield"
        },
        "Date": {
          "label": "Date",
          "slug": "s5e7eec512",
          "field_type": "datefield"
        },
        "Meter": {
          "label": "Meter",
          "slug": "sb9e424ee4",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Travel Form": {
      "name": "Travel Form",
      "id": "65b0e583a6721897b29c2760",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Travelling Consultant": {
          "label": "Travelling Consultant",
          "slug": "s0127b4725",
          "field_type": "linkedrecordfield"
        },
        "Site Visit Projects": {
          "label": "Site Visit Projects",
          "slug": "s3069fd760",
          "field_type": "linkedrecordfield"
        },
        "Hotel Cost": {
          "label": "Hotel Cost",
          "slug": "s4329f97b7",
          "field_type": "currencyfield"
        },
        "Hire Car Cost": {
          "label": "Hire Car Cost",
          "slug": "s555fcc8a5",
          "field_type": "currencyfield"
        },
        "Trains Cost": {
          "label": "Trains Cost",
          "slug": "s045eab221",
          "field_type": "currencyfield"
        },
        "Fuel Cost": {
          "label": "Fuel Cost",
          "slug": "s3d71cc133",
          "field_type": "currencyfield"
        },
        "Food Cost": {
          "label": "Food Cost",
          "slug": "s741378c73",
          "field_type": "currencyfield"
        },
        "Total Item Costs": {
          "label": "Total Item Costs",
          "slug": "sa82902da3",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Car Travel Time": {
          "label": "Car Travel Time",
          "slug": "sa11d674ee",
          "field_type": "numberfield"
        },
        "Train travel time": {
          "label": "Train travel time",
          "slug": "s2916256e5",
          "field_type": "numberfield"
        },
        "Total Time Costs": {
          "label": "Total Time Costs",
          "slug": "s5272c9744",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Total Cost per Site": {
          "label": "Total Cost per Site",
          "slug": "s9f9667b91",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Travel Start Date": {
          "label": "Travel Start Date",
          "slug": "s006081460",
          "field_type": "datefield"
        },
        "Travel End Date": {
          "label": "Travel End Date",
          "slug": "s47c4b2976",
          "field_type": "datefield"
        },
        "Chargeable time on train": {
          "label": "Chargeable time on train",
          "slug": "see57fbcae",
          "field_type": "numberfield"
        },
        "Notes": {
          "label": "Notes",
          "slug": "s08806dff8",
          "field_type": "richtextareafield"
        }
      }
    },
    "Giveaways": {
      "name": "Giveaways",
      "id": "662b79671aea2d6855c6e460",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Link to Giveaway Participants": {
          "label": "Link to Giveaway Participants",
          "slug": "s33mgxfj",
          "field_type": "linkedrecordfield"
        },
        "Random Number Generator": {
          "label": "Random Number Generator",
          "slug": "s5c6d2a335",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Giveaway Winner's Auto Number": {
          "label": "Giveaway Winner's Auto Number",
          "slug": "s825544948",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Giveaway Winner": {
          "label": "Giveaway Winner",
          "slug": "s0930db4b3",
          "field_type": "formulafield",
          "target_field_type": "recordtitlefield"
        }
      }
    },
    "Giveaway Participants": {
      "name": "Giveaway Participants",
      "id": "662b78f3b5fd882ec23f564b",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Link to Giveaways": {
          "label": "Link to Giveaways",
          "slug": "s4866bf11c",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "High Priority Clients": {
      "name": "High Priority Clients",
      "id": "662f896804b6f4045634d7e8",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Lead": {
          "label": "Lead",
          "slug": "s1ab4ce41c",
          "field_type": "userfield"
        },
        "Date of last review by Trudy/Simon": {
          "label": "Date of last review by Trudy/Simon",
          "slug": "s4683f303e",
          "field_type": "datefield"
        },
        "Potential issues to be wary of": {
          "label": "Potential issues to be wary of",
          "slug": "sd2cfdbfe1",
          "field_type": "textfield"
        },
        "Client": {
          "label": "Client",
          "slug": "sa2de9b846",
          "field_type": "linkedrecordfield"
        },
        "Relevant projects": {
          "label": "Relevant projects",
          "slug": "s541c6e651",
          "field_type": "linkedrecordfield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s647aa48c8",
          "field_type": "linkedrecordfield"
        },
        "Active Client Projects": {
          "label": "Active Client Projects",
          "slug": "sc59a20ad1",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        }
      }
    },
    "Metrics": {
      "name": "Metrics",
      "id": "663108fd7d1df264e55b00d2",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Recording Date": {
          "label": "Recording Date",
          "slug": "sf92b69b67",
          "field_type": "datefield"
        },
        "Deliverables (System Field)": {
          "label": "Deliverables (System Field)",
          "slug": "s4dac068bf",
          "field_type": "linkedrecordfield"
        },
        "Title (System Field)": {
          "label": "Title (System Field)",
          "slug": "s1da22bdd4",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Total RHI Sites": {
          "label": "Total RHI Sites",
          "slug": "s15659f73b",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 1 RHI Window Open": {
          "label": "Lead 1 RHI Window Open",
          "slug": "se38e58b2c",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "RHI Service Lead 1": {
          "label": "RHI Service Lead 1",
          "slug": "s5a17032bc",
          "field_type": "userfield"
        },
        "Lead 1 Unreviewed and Due RHI Submissions": {
          "label": "Lead 1 Unreviewed and Due RHI Submissions",
          "slug": "s9hn9evh",
          "field_type": "formulafield"
        },
        "Lead 2 Unreviewed and Due RHI Submissions": {
          "label": "Lead 2 Unreviewed and Due RHI Submissions",
          "slug": "sund9bhu",
          "field_type": "formulafield"
        },
        "RHI Service Lead 2": {
          "label": "RHI Service Lead 2",
          "slug": "so86rous",
          "field_type": "userfield"
        },
        "Lead 1 Total RHI Sites": {
          "label": "Lead 1 Total RHI Sites",
          "slug": "s4su32nu",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 2 Total RHI Sites": {
          "label": "Lead 2 Total RHI Sites",
          "slug": "s9xaeah8",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 1 1st Late Emails": {
          "label": "Lead 1 1st Late Emails",
          "slug": "s2c3d16b7c",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 2 1st Late Emails": {
          "label": "Lead 2 1st Late Emails",
          "slug": "snioomtt",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 1 2nd Late Emails": {
          "label": "Lead 1 2nd Late Emails",
          "slug": "sk1ayafg",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 2 2nd Late Emails": {
          "label": "Lead 2 2nd Late Emails",
          "slug": "scglmwyv",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 1 Awaiting Submission": {
          "label": "Lead 1 Awaiting Submission",
          "slug": "saea45492b",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 2 Awaiting Submission": {
          "label": "Lead 2 Awaiting Submission",
          "slug": "sy5twg91",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 1 Data Issue": {
          "label": "Lead 1 Data Issue",
          "slug": "smkm2pxr",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 2 Data Issue": {
          "label": "Lead 2 Data Issue",
          "slug": "sb20ir9z",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 2 RHI Window Open": {
          "label": "Lead 2 RHI Window Open",
          "slug": "snpyc3aj",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 1 Amendments": {
          "label": "Lead 1 Amendments",
          "slug": "s3f328ca7e",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Lead 2 Amendments": {
          "label": "Lead 2 Amendments",
          "slug": "s4tdyrze",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Lead 1 EDCs": {
          "label": "Lead 1 EDCs",
          "slug": "s0ujuwtw",
          "field_type": "formulafield"
        },
        "Lead 2 EDCs": {
          "label": "Lead 2 EDCs",
          "slug": "shvnign3",
          "field_type": "formulafield"
        },
        "Lead 1 RHI Window Open Within 2 Weeks": {
          "label": "Lead 1 RHI Window Open Within 2 Weeks",
          "slug": "s4rwkn50",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Lead 2 RHI Window Open Within 2 Weeks": {
          "label": "Lead 2 RHI Window Open Within 2 Weeks",
          "slug": "s7nnee3w",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        }
      }
    },
    "Meetings": {
      "name": "Meetings",
      "id": "64f6098f4f57d448c3004529",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Standup Content": {
          "label": "Standup Content",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Completed"
            }
          ]
        },
        "Meeting Date": {
          "label": "Meeting Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "seb0d0cdf8",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "c54653d6-034f-469e-9636-3a2d2b55daea",
              "label": "Bug Fix"
            },
            {
              "value": "108be43f-8399-498d-935b-bb3629e8ce34",
              "label": "New Feature "
            },
            {
              "value": "3d8b2d4c-4146-4387-a717-9aa0ba9a909a",
              "label": "Product Enhancement"
            }
          ]
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sbb450fd94",
          "field_type": "linkedrecordfield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "s6nylhnz",
          "field_type": "textfield"
        },
        "Add Problem": {
          "label": "Add Problem",
          "slug": "sfabd786d2",
          "field_type": "linkedrecordfield"
        },
        "Meeting Review": {
          "label": "Meeting Review",
          "slug": "sed7352c2a",
          "field_type": "textfield"
        },
        "Live-Other": {
          "label": "Live-Other",
          "slug": "s61250b1c1",
          "field_type": "yesnofield"
        },
        "Live List": {
          "label": "Live List",
          "slug": "sktpxmbi",
          "field_type": "yesnofield"
        },
        "Deadlines": {
          "label": "Deadlines",
          "slug": "svt4r5q5",
          "field_type": "yesnofield"
        },
        "RHI Simple": {
          "label": "RHI Simple",
          "slug": "sxqd0kh9",
          "field_type": "yesnofield"
        },
        "RHI Complex": {
          "label": "RHI Complex",
          "slug": "sdupyaxi",
          "field_type": "yesnofield"
        },
        "RO": {
          "label": "RO",
          "slug": "s04v0iyy",
          "field_type": "yesnofield"
        },
        "Type of Check": {
          "label": "Type of Check",
          "slug": "sdf3dbbceb",
          "field_type": "linkedrecordfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s1262e58b0",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s6244e9b52",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Schema665d80f02bf44157f0392f18": {
      "name": "Schema",
      "id": "665d80f02bf44157f0392f18",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        }
      }
    },
    "Table 1": {
      "name": "Table 1",
      "id": "665d81f2acd80f947c816a46",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assignee": {
          "label": "Assignee",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Link": {
          "label": "Link",
          "slug": "s770540357",
          "field_type": "linkedrecordfield"
        },
        "Lookup": {
          "label": "Lookup",
          "slug": "s52158f8e8",
          "field_type": "lookupfield",
          "target_field_type": "fullnamefield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "sb4c00dcf1",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Date1": {
          "label": "Date1",
          "slug": "saecfcf8a1",
          "field_type": "datefield"
        },
        "Date2": {
          "label": "Date2",
          "slug": "se1306307f",
          "field_type": "datefield"
        },
        "Diff (years)": {
          "label": "Diff (years)",
          "slug": "sdfd36d645",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Number1": {
          "label": "Number1",
          "slug": "s0676ab8c7",
          "field_type": "numberfield"
        },
        "Number2": {
          "label": "Number2",
          "slug": "s67b96dc31",
          "field_type": "numberfield"
        },
        "number1 mod number2": {
          "label": "number1 mod number2",
          "slug": "s4c562cf5a",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Date": {
          "label": "Date",
          "slug": "s7366b1461",
          "field_type": "datefield"
        },
        "Update": {
          "label": "Update",
          "slug": "s0174a7aa8",
          "field_type": "richtextareafield"
        },
        "Formula 1": {
          "label": "Formula 1",
          "slug": "s7210791a4",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Formula 1 Copy": {
          "label": "Formula 1 Copy",
          "slug": "sta994rq",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Formula 2": {
          "label": "Formula 2",
          "slug": "secf30064d",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        }
      }
    },
    "RHI Submissions": {
      "name": "RHI Submissions",
      "id": "64d155a9c71c81dc0b41d53d",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Awaiting Review"
            },
            {
              "value": "OQhuV",
              "label": "Received and Awaiting Review "
            },
            {
              "value": "in_progress",
              "label": "Data Issue"
            },
            {
              "value": "ready_for_review",
              "label": "Ready to Submit"
            }
          ]
        },
        "Reporting Period": {
          "label": "Reporting Period",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Fuel use records": {
          "label": "Fuel use records",
          "slug": "se0d6e5770",
          "field_type": "linkedrecordfield"
        },
        "Meter reading": {
          "label": "Meter reading",
          "slug": "see3b5f6f9",
          "field_type": "linkedrecordfield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Quarter End?": {
          "label": "Quarter End?",
          "slug": "sa1f6e9381",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "RHI Installation Name": {
          "label": "RHI Installation Name",
          "slug": "sc43e453f7",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Support Service Manager": {
          "label": "Support Service Manager",
          "slug": "scdbb63785",
          "field_type": "lookupfield",
          "target_field_type": "userfield"
        },
        "Next Reporting Period End": {
          "label": "Next Reporting Period End",
          "slug": "s8ba5616c2",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Submission Status": {
          "label": "Submission Status",
          "slug": "s5b110262a",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Window": {
          "label": "Window",
          "slug": "s893fc4402",
          "field_type": "daterangefield"
        },
        "Support Service": {
          "label": "Support Service",
          "slug": "se2f80df74",
          "field_type": "linkedrecordfield"
        },
        "Late Reminder Email": {
          "label": "Late Reminder Email",
          "slug": "s3ef967ee9",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "XRMey",
              "label": "Not Sent"
            },
            {
              "value": "88azV",
              "label": "Send 1st Email"
            },
            {
              "value": "EcdKV",
              "label": "1st Email Sent"
            },
            {
              "value": "SVUxB",
              "label": "Send 2nd Email"
            },
            {
              "value": "uIHe1",
              "label": "2nd Email Sent"
            }
          ]
        },
        "Auto Next Submission Created (System Field)": {
          "label": "Auto Next Submission Created (System Field)",
          "slug": "sc9f3a8591",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Next Reporting Period Start": {
          "label": "Next Reporting Period Start",
          "slug": "s076ffb9e9",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "AS Username": {
          "label": "AS Username",
          "slug": "saab4bd5ee",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "AS Password": {
          "label": "AS Password",
          "slug": "sfl9cymj",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Status Grouping": {
          "label": "Status Grouping",
          "slug": "sdba589796",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Reporting Period Name": {
          "label": "Reporting Period Name",
          "slug": "s50ebba2bb",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Service Status": {
          "label": "Service Status",
          "slug": "s81c665fa5",
          "field_type": "lookupfield",
          "target_field_type": "statusfield"
        },
        "Support Service Open Comments": {
          "label": "Support Service Open Comments",
          "slug": "s7fe965543",
          "field_type": "formulafield",
          "target_field_type": "commentscountfield"
        },
        "RHI Blocking Projects": {
          "label": "RHI Blocking Projects",
          "slug": "s318719d6c",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Confirm Send?": {
          "label": "Confirm Send?",
          "slug": "sc384f7d49",
          "field_type": "yesnofield"
        },
        "Submission Month (System Field)": {
          "label": "Submission Month (System Field)",
          "slug": "sf2w0izs",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Service Contact Emails": {
          "label": "Service Contact Emails",
          "slug": "se0391e445",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "EHO": {
          "label": "EHO",
          "slug": "s09e01e672",
          "field_type": "numberfield"
        },
        "Portal Payment Value": {
          "label": "Portal Payment Value",
          "slug": "s9411c89ee",
          "field_type": "currencyfield"
        },
        "Report Email Status": {
          "label": "Report Email Status",
          "slug": "s97a3e5c8b",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "goXeC",
              "label": "Unsent"
            },
            {
              "value": "8JFxJ",
              "label": "Schedule Send"
            },
            {
              "value": "SBu37",
              "label": "Sent"
            }
          ]
        },
        "Sister Services": {
          "label": "Sister Services",
          "slug": "sfb8ca3514",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Next Submission Month (System Field)": {
          "label": "Next Submission Month (System Field)",
          "slug": "sb2401bab1",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Current Reporting Period End Date": {
          "label": "Current Reporting Period End Date",
          "slug": "sbbe810518",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Service Has Sister Services": {
          "label": "Service Has Sister Services",
          "slug": "s42a97c98e",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Late Data Chase Emails": {
          "label": "Late Data Chase Emails",
          "slug": "s4ef60ba3e",
          "field_type": "lookupfield",
          "target_field_type": "emailfield"
        },
        "RHI Number": {
          "label": "RHI Number",
          "slug": "sb403db81d",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Late Data Email Fuel Use text": {
          "label": "Late Data Email Fuel Use text",
          "slug": "s19a08f162",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Quarter Start": {
          "label": "Quarter Start",
          "slug": "sac0d70f96",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Window Start (System Field)": {
          "label": "Window Start (System Field)",
          "slug": "s480f314fb",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Window End (System Field)": {
          "label": "Window End (System Field)",
          "slug": "ssy57exw",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Adjacent Submissions": {
          "label": "Adjacent Submissions",
          "slug": "s5998aec38",
          "field_type": "linkedrecordfield"
        },
        "Adjacent Submission Count": {
          "label": "Adjacent Submission Count",
          "slug": "s1257ca7e3",
          "field_type": "countfield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "s2fb345082",
          "field_type": "recordidfield"
        },
        "Last RHI portal update": {
          "label": "Last RHI portal update",
          "slug": "s3f8018fef",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Support Service (Data Issue sort)": {
          "label": "Support Service (Data Issue sort)",
          "slug": "sf82245316",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Support Service (Next Quarter sort)": {
          "label": "Support Service (Next Quarter sort)",
          "slug": "s2aca3c620",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Submission Report Emails": {
          "label": "Submission Report Emails",
          "slug": "se47a7e7c4",
          "field_type": "lookupfield",
          "target_field_type": "emailfield"
        },
        "Submission Number": {
          "label": "Submission Number",
          "slug": "s643ae21fa",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Tier 1 cut-off": {
          "label": "Tier 1 cut-off",
          "slug": "s0a3bedf82",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        },
        "Actual Expected Payment Text": {
          "label": "Actual Expected Payment Text",
          "slug": "s3a07af5bf",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Fuel Use Summary Text": {
          "label": "Fuel Use Summary Text",
          "slug": "sf5d282c8f",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Late Reminder Email (Read Only)": {
          "label": "Late Reminder Email (Read Only)",
          "slug": "sa2f140c25",
          "field_type": "formulafield",
          "target_field_type": "singleselectfield"
        },
        "First Email Sent": {
          "label": "First Email Sent",
          "slug": "s0d836e6f7",
          "field_type": "datefield"
        },
        "Second Email Sent": {
          "label": "Second Email Sent",
          "slug": "s2b24195bf",
          "field_type": "datefield"
        },
        "Report Email Sent": {
          "label": "Report Email Sent",
          "slug": "sa6d5a7d24",
          "field_type": "datefield"
        },
        "Report Email Status (Read Only)": {
          "label": "Report Email Status (Read Only)",
          "slug": "sa73e6f41d",
          "field_type": "formulafield",
          "target_field_type": "singleselectfield"
        },
        "Submission Report Cumulative EHO": {
          "label": "Submission Report Cumulative EHO",
          "slug": "s4b4q5iq",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Cumulative EHO": {
          "label": "Cumulative EHO",
          "slug": "sqiq8c7m",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Actual Payment": {
          "label": "Actual Payment",
          "slug": "sfb06d0681",
          "field_type": "currencyfield"
        },
        "Calculate CHP Payment": {
          "label": "Calculate CHP Payment",
          "slug": "sf748b5854",
          "field_type": "buttonfield"
        },
        "CHP Payment": {
          "label": "CHP Payment",
          "slug": "sa61a14259",
          "field_type": "currencyfield"
        },
        "Qualifying Percentage": {
          "label": "Qualifying Percentage",
          "slug": "sbbae274c7",
          "field_type": "percentfield"
        },
        "Tier 1 Percentage": {
          "label": "Tier 1 Percentage",
          "slug": "saa3c7366a",
          "field_type": "percentfield"
        },
        "Effective Tariff Rate": {
          "label": "Effective Tariff Rate",
          "slug": "s9fc449a1d",
          "field_type": "numberfield"
        },
        "Effective Power Efficiency": {
          "label": "Effective Power Efficiency",
          "slug": "s13257eef9",
          "field_type": "percentfield"
        },
        "Percentage of Payment on CHP tariff": {
          "label": "Percentage of Payment on CHP tariff",
          "slug": "s621f6dfd0",
          "field_type": "percentfield"
        },
        "BSL Number": {
          "label": "BSL Number",
          "slug": "sedcc6e21f",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "FMS Fuels": {
          "label": "FMS Fuels",
          "slug": "se0c284bf4",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Technology": {
          "label": "Technology",
          "slug": "s1e87548fb",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "RHI Year": {
          "label": "RHI Year",
          "slug": "s6e995967f",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Biomass Payment": {
          "label": "Biomass Payment",
          "slug": "se73e9c635",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "SmartDoc": {
          "label": "SmartDoc",
          "slug": "s59656f143",
          "field_type": "richtextareafield"
        },
        "CHP Underpayment": {
          "label": "CHP Underpayment",
          "slug": "s61927e302",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Legacy Woodsure Number": {
          "label": "Legacy Woodsure Number",
          "slug": "se236be465",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Overdue Invoice Acknowledgement": {
          "label": "Overdue Invoice Acknowledgement",
          "slug": "sbf8686bad",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "64dx6",
              "label": "Acknowledge overdue invoce"
            }
          ]
        },
        "Overdue Invoices": {
          "label": "Overdue Invoices",
          "slug": "s7b68834ef",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        }
      }
    },
    "RHI Status Updates": {
      "name": "RHI Status Updates",
      "id": "666016ad758cd453d94c49dc",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "RHI": {
          "label": "RHI",
          "slug": "s21211ebb5",
          "field_type": "linkedrecordfield"
        },
        "New Accreditation Status": {
          "label": "New Accreditation Status",
          "slug": "sc8f64c677",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "New Application Status": {
          "label": "New Application Status",
          "slug": "s5f7c7508a",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "Status Change Noted": {
          "label": "Status Change Noted",
          "slug": "s99c8aba88",
          "field_type": "datefield"
        },
        "RHI Installation Name": {
          "label": "RHI Installation Name",
          "slug": "s8435f97f5",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Projects": {
          "label": "Projects",
          "slug": "sddea5df0f",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Active Project Leads": {
          "label": "Active Project Leads",
          "slug": "s856940909",
          "field_type": "lookupfield",
          "target_field_type": "userfield"
        },
        "Active Projects/Services": {
          "label": "Active Projects/Services",
          "slug": "s17acf47bb",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Active Support Service Manager": {
          "label": "Active Support Service Manager",
          "slug": "s2x6oo8m",
          "field_type": "lookupfield",
          "target_field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "s342ceb128",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Unreviewed"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "complete",
              "label": "Reviewed"
            }
          ]
        },
        "Lead": {
          "label": "Lead",
          "slug": "s4dce6317a",
          "field_type": "userfield"
        },
        "Support Service Email Sent": {
          "label": "Support Service Email Sent",
          "slug": "s7f2b509d1",
          "field_type": "datefield"
        },
        "Call Made": {
          "label": "Call Made",
          "slug": "s0d3538f59",
          "field_type": "datefield"
        },
        "Outcome": {
          "label": "Outcome",
          "slug": "s57cf939a0",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "uUI5U",
              "label": "Accepted"
            },
            {
              "value": "zrQKm",
              "label": "Not Interested"
            },
            {
              "value": "atHWt",
              "label": "Already on Support Service"
            }
          ]
        },
        "Notes": {
          "label": "Notes",
          "slug": "s4c54a391a",
          "field_type": "richtextareafield"
        },
        "Support Service": {
          "label": "Support Service",
          "slug": "sce517e204",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "s9874e1f6b",
          "field_type": "duedatefield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s21fe8d35a",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "RHI Status Updates66fd24772cf8102719060fb9": {
      "name": "RHI Status Updates",
      "id": "66fd24772cf8102719060fb9",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "RHI": {
          "label": "RHI",
          "slug": "s21211ebb5",
          "field_type": "linkedrecordfield"
        },
        "New Accreditation Status": {
          "label": "New Accreditation Status",
          "slug": "sc8f64c677",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "New Application Status": {
          "label": "New Application Status",
          "slug": "s5f7c7508a",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "Status Change Noted": {
          "label": "Status Change Noted",
          "slug": "s99c8aba88",
          "field_type": "datefield"
        },
        "RHI Installation Name": {
          "label": "RHI Installation Name",
          "slug": "s8435f97f5",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Projects": {
          "label": "Projects",
          "slug": "sddea5df0f",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Active Project Leads": {
          "label": "Active Project Leads",
          "slug": "s856940909",
          "field_type": "lookupfield",
          "target_field_type": "userfield"
        },
        "Active Projects/Services": {
          "label": "Active Projects/Services",
          "slug": "s17acf47bb",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Active Support Service Manager": {
          "label": "Active Support Service Manager",
          "slug": "s2x6oo8m",
          "field_type": "lookupfield",
          "target_field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "s342ceb128",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Unreviewed"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "complete",
              "label": "Reviewed"
            }
          ]
        },
        "Lead": {
          "label": "Lead",
          "slug": "s4dce6317a",
          "field_type": "userfield"
        },
        "Support Service Email Sent": {
          "label": "Support Service Email Sent",
          "slug": "s7f2b509d1",
          "field_type": "datefield"
        },
        "Call Made": {
          "label": "Call Made",
          "slug": "s0d3538f59",
          "field_type": "datefield"
        },
        "Outcome": {
          "label": "Outcome",
          "slug": "s57cf939a0",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "uUI5U",
              "label": "Accepted"
            },
            {
              "value": "zrQKm",
              "label": "Not Interested"
            },
            {
              "value": "atHWt",
              "label": "Already on Support Service"
            }
          ]
        },
        "Notes": {
          "label": "Notes",
          "slug": "s4c54a391a",
          "field_type": "richtextareafield"
        },
        "Support Service": {
          "label": "Support Service",
          "slug": "sce517e204",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "s9874e1f6b",
          "field_type": "duedatefield"
        },
        "Tasks (Restored) 1": {
          "label": "Tasks (Restored) 1",
          "slug": "s21fe8d35a",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "QuickFile Contacts": {
      "name": "QuickFile Contacts",
      "id": "667ae1c00f3bd910e3141b87",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Contact": {
          "label": "Contact",
          "slug": "s0dc722874",
          "field_type": "linkedrecordfield"
        },
        "Billing Organisation": {
          "label": "Billing Organisation",
          "slug": "se8835b883",
          "field_type": "linkedrecordfield"
        },
        "QuickFile ID": {
          "label": "QuickFile ID",
          "slug": "s9e6576a47",
          "field_type": "textfield"
        },
        "Billing Email Override": {
          "label": "Billing Email Override",
          "slug": "s64285e66d",
          "field_type": "emailfield"
        },
        "Billing Email": {
          "label": "Billing Email",
          "slug": "se42b3ae55",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Primary Billing Contact for": {
          "label": "Primary Billing Contact for",
          "slug": "s54vw1cu",
          "field_type": "linkedrecordfield"
        },
        "Primary Billing Contact?": {
          "label": "Primary Billing Contact?",
          "slug": "s16e12da63",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "sfed589480",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Billing Organisation Lookup": {
          "label": "Billing Organisation Lookup",
          "slug": "s57b2e2926",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        },
        "Phone Number": {
          "label": "Phone Number",
          "slug": "s2e5e44e55",
          "field_type": "lookupfield",
          "target_field_type": "phonefield"
        },
        "First Name": {
          "label": "First Name",
          "slug": "s4cee51d7c",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Last Name": {
          "label": "Last Name",
          "slug": "sd0ae14379",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        }
      }
    },
    "Project Contacts": {
      "name": "Project Contacts",
      "id": "667d526d6c8adedd0af5378e",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Notes": {
          "label": "Notes",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Contact": {
          "label": "Contact",
          "slug": "s3372374c0",
          "field_type": "linkedrecordfield"
        },
        "Project": {
          "label": "Project",
          "slug": "s079cbce55",
          "field_type": "linkedrecordfield"
        },
        "Role": {
          "label": "Role",
          "slug": "sd73886493",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "Hi6CB",
              "label": "Main Contact"
            },
            {
              "value": "x5hZI",
              "label": "Site Contact"
            },
            {
              "value": "J5Pd5",
              "label": "Installer"
            },
            {
              "value": "hEi67",
              "label": "Design Engineer"
            }
          ]
        },
        "Contact Emails": {
          "label": "Contact Emails",
          "slug": "s90aae0f72",
          "field_type": "lookupfield",
          "target_field_type": "emailfield"
        },
        "Contact Name Lookup": {
          "label": "Contact Name Lookup",
          "slug": "s4faa43094",
          "field_type": "lookupfield",
          "target_field_type": "recordtitlefield"
        }
      }
    },
    "Project Updates": {
      "name": "Project Updates",
      "id": "668284d19cae6295bb597132",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Update (old)": {
          "label": "Update (old)",
          "slug": "s0c7b540d0",
          "field_type": "richtextareafield"
        },
        "Projects": {
          "label": "Projects",
          "slug": "seea904da8",
          "field_type": "linkedrecordfield"
        },
        "Date": {
          "label": "Date",
          "slug": "s5986e3f13",
          "field_type": "datefield"
        },
        "Assignee": {
          "label": "Assignee",
          "slug": "scaf9ce4a8",
          "field_type": "userfield"
        },
        "Communication": {
          "label": "Communication",
          "slug": "se9151c1a9",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "ZALUH",
              "label": "Client Communication"
            },
            {
              "value": "Bd2kg",
              "label": "Regulator Communication"
            }
          ]
        },
        "Update Preview": {
          "label": "Update Preview",
          "slug": "s857c2748b",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Update": {
          "label": "Update",
          "slug": "sr561d31",
          "field_type": "textareafield"
        },
        "Programs": {
          "label": "Programs",
          "slug": "syeuq8lb",
          "field_type": "linkedrecordfield"
        },
        "Project Programs": {
          "label": "Project Programs",
          "slug": "s4de03b6bc",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Project Codes": {
          "label": "Project Codes",
          "slug": "s7cd3e5d14",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        }
      }
    },
    "Service Contacts": {
      "name": "Service Contacts",
      "id": "6683d132274eb07995a4d3ec",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Notes": {
          "label": "Notes",
          "slug": "description",
          "field_type": "textareafield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Contact": {
          "label": "Contact",
          "slug": "s3372374c0",
          "field_type": "linkedrecordfield"
        },
        "Service Role": {
          "label": "Service Role",
          "slug": "sd73886493",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "Hi6CB",
              "label": "Main Contact"
            },
            {
              "value": "IJJ3T",
              "label": "Data Contact"
            },
            {
              "value": "J5Pd5",
              "label": "Additional Contact"
            }
          ]
        },
        "Contact Emails": {
          "label": "Contact Emails",
          "slug": "s90aae0f72",
          "field_type": "lookupfield",
          "target_field_type": "emailfield"
        },
        "Services": {
          "label": "Services",
          "slug": "sf4d327d14",
          "field_type": "linkedrecordfield"
        },
        "Billing Organisation": {
          "label": "Billing Organisation",
          "slug": "sbc8f44fe9",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Contact Phone Numbers": {
          "label": "Contact Phone Numbers",
          "slug": "s19dd66a7a",
          "field_type": "lookupfield",
          "target_field_type": "phonefield"
        },
        "Contact Record ID": {
          "label": "Contact Record ID",
          "slug": "s22a247158",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        }
      }
    },
    "Lab Reports": {
      "name": "Lab Reports",
      "id": "6686e516da1893bf9ca08794",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Report": {
          "label": "Report",
          "slug": "s6863fe9af",
          "field_type": "filefield"
        },
        "GCV": {
          "label": "GCV",
          "slug": "s702cc5ee0",
          "field_type": "numberfield"
        },
        "Biomass Content": {
          "label": "Biomass Content",
          "slug": "s63185a50a",
          "field_type": "percentfield"
        },
        "Method": {
          "label": "Method",
          "slug": "s468963b5f",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "xxYTt",
              "label": "Selective Dissolution"
            },
            {
              "value": "Y3Ext",
              "label": "Manual Sort"
            }
          ]
        },
        "Site": {
          "label": "Site",
          "slug": "sa886b251e",
          "field_type": "linkedrecordfield"
        },
        "Client": {
          "label": "Client",
          "slug": "scec5b0949",
          "field_type": "linkedrecordfield"
        },
        "Sample Date": {
          "label": "Sample Date",
          "slug": "s649f78b16",
          "field_type": "datefield"
        }
      }
    },
    "Table 2": {
      "name": "Table 2",
      "id": "668b9d363c84dd850490c740",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "s8c23a7c50",
          "field_type": "recordidfield"
        },
        "Minutes Old": {
          "label": "Minutes Old",
          "slug": "s5a1b3558d",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s0584422ef",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Formula 1": {
          "label": "Formula 1",
          "slug": "s5021d405a",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        }
      }
    },
    "Table 3": {
      "name": "Table 3",
      "id": "669a875082d1ce2068ed2902",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Date1": {
          "label": "Date1",
          "slug": "due_date",
          "field_type": "datefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date2": {
          "label": "Date2",
          "slug": "s7217c1097",
          "field_type": "datefield"
        },
        "datediff": {
          "label": "datediff",
          "slug": "s883e36080",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Formula 3": {
          "label": "Formula 3",
          "slug": "s4f16ccddc",
          "field_type": "formulafield"
        },
        "Day Difference": {
          "label": "Day Difference",
          "slug": "s88f476861",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Expected value": {
          "label": "Expected value",
          "slug": "s4ff94fefb",
          "field_type": "numberfield"
        },
        "Expected day difference": {
          "label": "Expected day difference",
          "slug": "sb463ca027",
          "field_type": "numberfield"
        },
        "reality - expectation": {
          "label": "reality - expectation",
          "slug": "s203a00ae5",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        }
      }
    },
    "Action Changes": {
      "name": "Action Changes",
      "id": "66a0e410a364e3c63ae08b92",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Project": {
          "label": "Project",
          "slug": "sc03599fc1",
          "field_type": "linkedrecordfield"
        },
        "New Action": {
          "label": "New Action",
          "slug": "s3491ca5bc",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "ready_for_review",
              "label": "With YES"
            },
            {
              "value": "complete",
              "label": "Waiting on 3rd Party"
            },
            {
              "value": "ctvwm",
              "label": "Waiting on Regulator"
            }
          ]
        },
        "Old Action": {
          "label": "Old Action",
          "slug": "ssllxwoe",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "ready_for_review",
              "label": "With YES"
            },
            {
              "value": "complete",
              "label": "Waiting on 3rd Party"
            },
            {
              "value": "ctvwm",
              "label": "Waiting on Regulator"
            }
          ]
        },
        "Project Lead": {
          "label": "Project Lead",
          "slug": "se5d8034b7",
          "field_type": "lookupfield",
          "target_field_type": "userfield"
        }
      }
    },
    "Woodsure Numbers": {
      "name": "Woodsure Numbers",
      "id": "66ad094fd8cdc29ea0bc827a",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "s768a05194",
          "field_type": "linkedrecordfield"
        },
        "Fuels": {
          "label": "Fuels",
          "slug": "sb455e1971",
          "field_type": "linkedrecordfield"
        },
        "Woodsure Number": {
          "label": "Woodsure Number",
          "slug": "s4ea8dad5c",
          "field_type": "textfield"
        },
        "Woodsure Type": {
          "label": "Woodsure Type",
          "slug": "s88f24aa75",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "Iuasf",
              "label": "Self Supplier"
            },
            {
              "value": "1XK2o",
              "label": "Trader"
            }
          ]
        },
        "Original Application Date": {
          "label": "Original Application Date",
          "slug": "sc4856442f",
          "field_type": "datefield"
        },
        "Mass Per Year": {
          "label": "Mass Per Year",
          "slug": "see47acd72",
          "field_type": "numberfield"
        },
        "Woodsure Certificates": {
          "label": "Woodsure Certificates",
          "slug": "suo3chhj",
          "field_type": "linkedrecordfield"
        },
        "Link to Projects": {
          "label": "Link to Projects",
          "slug": "smk6cilg",
          "field_type": "linkedrecordfield"
        },
        "Woodsure Site Address": {
          "label": "Woodsure Site Address",
          "slug": "s0795380ca",
          "field_type": "addressfield"
        },
        "Notes": {
          "label": "Notes",
          "slug": "s78b4d3800",
          "field_type": "richtextareafield"
        },
        "Woodsure Type*": {
          "label": "Woodsure Type*",
          "slug": "sf4dc436e1",
          "field_type": "linkedrecordfield"
        },
        "Status": {
          "label": "Status",
          "slug": "s4a743a96e",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "ready_for_review",
              "label": "Active"
            },
            {
              "value": "complete",
              "label": "Historical"
            }
          ]
        },
        "RHIs": {
          "label": "RHIs",
          "slug": "s147dcdc11",
          "field_type": "linkedrecordfield"
        },
        "Installation Name": {
          "label": "Installation Name",
          "slug": "s721186754",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        }
      }
    },
    "Certificates": {
      "name": "Certificates",
      "id": "66ad0cb62b5b27d648331b27",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Certificate Expiry": {
          "label": "Certificate Expiry",
          "slug": "s533203c1d",
          "field_type": "datefield"
        },
        "Sent to Customer": {
          "label": "Sent to Customer",
          "slug": "sdd0745bff",
          "field_type": "datefield"
        },
        "Certificate": {
          "label": "Certificate",
          "slug": "sb0a025735",
          "field_type": "filefield"
        },
        "Woodsure Number": {
          "label": "Woodsure Number",
          "slug": "sd478f7ed9",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "tests": {
      "name": "tests",
      "id": "66b2147a57a354ff343431e4",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Number Field": {
          "label": "Number Field",
          "slug": "s638b8263b",
          "field_type": "numberfield"
        },
        "NUMBER(\"\") Formula": {
          "label": "NUMBER(\"\") Formula",
          "slug": "sda0b0c296",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "[Number Field]": {
          "label": "[Number Field]",
          "slug": "sedc8e8e76",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "IF(1==1, NUMBER(\"\"), NUMBER(\"\"))": {
          "label": "IF(1==1, NUMBER(\"\"), NUMBER(\"\"))",
          "slug": "sedaf1cd29",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "IS_NOT_NULL([Number Field])": {
          "label": "IS_NOT_NULL([Number Field])",
          "slug": "sdaf27e7f8",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "IS_NOT_NULL([NUMBER(\"\") Formula])": {
          "label": "IS_NOT_NULL([NUMBER(\"\") Formula])",
          "slug": "sd2d65fbc5",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "IS_NOT_NULL(NUMBER(\"\"))": {
          "label": "IS_NOT_NULL(NUMBER(\"\"))",
          "slug": "s0e6e9c322",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "IF(1==1, [Number Field], [Number Field])": {
          "label": "IF(1==1, [Number Field], [Number Field])",
          "slug": "se9e10abb9",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Text": {
          "label": "Text",
          "slug": "sf6e2e93c7",
          "field_type": "textfield"
        },
        "IS_NOT_NULL([Text])": {
          "label": "IS_NOT_NULL([Text])",
          "slug": "s695da15f5",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "LENGTH([Text])": {
          "label": "LENGTH([Text])",
          "slug": "s10e920c72",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "IS_NOT_NULL([Text]) Copy": {
          "label": "IS_NOT_NULL([Text]) Copy",
          "slug": "s3rk7ken",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "IF(1==1, BLANK(), BLANK())": {
          "label": "IF(1==1, BLANK(), BLANK())",
          "slug": "s9etamok",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Date": {
          "label": "Date",
          "slug": "s84cd51fe3",
          "field_type": "datefield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "sa0b58e5be",
          "field_type": "formulafield"
        },
        "Date 1": {
          "label": "Date 1",
          "slug": "s076e1228d",
          "field_type": "datefield"
        },
        "Address": {
          "label": "Address",
          "slug": "s2d4eb26bf",
          "field_type": "addressfield"
        },
        "Full Name": {
          "label": "Full Name",
          "slug": "s5c1d7937f",
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
        }
      }
    },
    "RHI Tariff Rates": {
      "name": "RHI Tariff Rates",
      "id": "66b678784843a142ccb22f7c",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Rate": {
          "label": "Rate",
          "slug": "s84fdd2f08",
          "field_type": "numberfield"
        },
        "Active Period": {
          "label": "Active Period",
          "slug": "sdec426b7e",
          "field_type": "daterangefield"
        },
        "Tariff": {
          "label": "Tariff",
          "slug": "sc22029c9f",
          "field_type": "linkedrecordfield"
        },
        "RHIs": {
          "label": "RHIs",
          "slug": "s4c7204412",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Tier": {
          "label": "Tier",
          "slug": "sdff54fe85",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "qp5vW",
              "label": "Tier 1"
            },
            {
              "value": "mIjQd",
              "label": "Tier 2"
            },
            {
              "value": "comy1",
              "label": "N/A"
            }
          ]
        },
        "Tariff Autonumber": {
          "label": "Tariff Autonumber",
          "slug": "s4944b7e8c",
          "field_type": "lookupfield",
          "target_field_type": "autonumberfield"
        },
        "Adjusted By": {
          "label": "Adjusted By",
          "slug": "s5ec4b1e9f",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        }
      }
    },
    "Schemes": {
      "name": "Schemes",
      "id": "66bb80aafa50e7036ce03775",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Certificates": {
          "label": "Certificates",
          "slug": "swq621v7",
          "field_type": "linkedrecordfield"
        },
        "Scheme Reference": {
          "label": "Scheme Reference",
          "slug": "se8f2a0132",
          "field_type": "textfield"
        },
        "RHI": {
          "label": "RHI",
          "slug": "se6b9e48a0",
          "field_type": "linkedrecordfield"
        },
        "Scheme": {
          "label": "Scheme",
          "slug": "s17b5cc9b0",
          "field_type": "addressfield"
        },
        "Installation Type": {
          "label": "Installation Type",
          "slug": "s90d70b83c",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "1LHIg",
              "label": "Biomass"
            },
            {
              "value": "OAbo9",
              "label": "Gas"
            }
          ]
        },
        "RHI Installation Name": {
          "label": "RHI Installation Name",
          "slug": "se39b5db30",
          "field_type": "lookupfield",
          "target_field_type": "textfield"
        },
        "Threshold Power Efficiency": {
          "label": "Threshold Power Efficiency",
          "slug": "s867337560",
          "field_type": "percentfield"
        },
        "Most Recent Certificate Power Efficiency": {
          "label": "Most Recent Certificate Power Efficiency",
          "slug": "s397f10976",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Calculated Threshold Power Efficiency": {
          "label": "Calculated Threshold Power Efficiency",
          "slug": "s83a91dd83",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Threshold Power Efficiency Check": {
          "label": "Threshold Power Efficiency Check",
          "slug": "s389b312ef",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "yes",
              "label": "I understand that this figure affects payment estimates and must be correct"
            }
          ]
        },
        "Power Efficiency Check": {
          "label": "Power Efficiency Check",
          "slug": "s7a5e1db2c",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        }
      }
    },
    "Certificates66bb81bf4af274d6cc56b6cd": {
      "name": "Certificates",
      "id": "66bb81bf4af274d6cc56b6cd",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Certificate Number": {
          "label": "Certificate Number",
          "slug": "s33bb5b596",
          "field_type": "textfield"
        },
        "Power Efficiency": {
          "label": "Power Efficiency",
          "slug": "s1a8dbb84a",
          "field_type": "percentfield"
        },
        "Certificate": {
          "label": "Certificate",
          "slug": "sb061485b9",
          "field_type": "filefield"
        },
        "Valid Until": {
          "label": "Valid Until",
          "slug": "sa5ca4c6a2",
          "field_type": "datefield"
        },
        "Scheme": {
          "label": "Scheme",
          "slug": "s6ddf7c6f4",
          "field_type": "linkedrecordfield"
        },
        "Issue Year": {
          "label": "Issue Year",
          "slug": "se66113863",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Issue Date": {
          "label": "Issue Date",
          "slug": "s812ee2a9c",
          "field_type": "datefield"
        },
        "RHI Number": {
          "label": "RHI Number",
          "slug": "sb9e5dc509",
          "field_type": "formulafield",
          "target_field_type": "recordtitlefield"
        },
        "Most Recent Certificate Power Efficiency": {
          "label": "Most Recent Certificate Power Efficiency",
          "slug": "sba500cb3c",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Threshold Power Efficiency": {
          "label": "Threshold Power Efficiency",
          "slug": "s93bf2643c",
          "field_type": "lookupfield",
          "target_field_type": "percentfield"
        }
      }
    },
    "Automations": {
      "name": "Automations",
      "id": "66bba7f40bdeccb5e3cb2bcd",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "Questions"
            },
            {
              "value": "ready_for_review",
              "label": "Reviewed"
            },
            {
              "value": "complete",
              "label": "Handover"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Solution": {
          "label": "Solution",
          "slug": "s5e588e799",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "8siJj",
              "label": "Company Management"
            },
            {
              "value": "UkeW1",
              "label": "CRM"
            },
            {
              "value": "p97sF",
              "label": "Projects"
            },
            {
              "value": "rpdBc",
              "label": "RHI"
            },
            {
              "value": "122hK",
              "label": "Sales Pipeline"
            },
            {
              "value": "92vK4",
              "label": "Staff Management"
            },
            {
              "value": "qAX4r",
              "label": "Support Services"
            },
            {
              "value": "cHeVM",
              "label": "Task Manager - Archive"
            },
            {
              "value": "wpMPm",
              "label": "Tasks"
            },
            {
              "value": "5fDEJ",
              "label": "z (Sleeping Ideas)"
            },
            {
              "value": "cqvKY",
              "label": "RHI Scraper"
            },
            {
              "value": "POiol",
              "label": "Metrics"
            }
          ]
        },
        "Tool": {
          "label": "Tool",
          "slug": "s7140aeb18",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "RQFVS",
              "label": "SmartSuite"
            },
            {
              "value": "Si9kN",
              "label": "Make"
            },
            {
              "value": "zYuQs",
              "label": "Ply"
            },
            {
              "value": "sHxaG",
              "label": "AWS"
            }
          ]
        },
        "Trigger Table": {
          "label": "Trigger Table",
          "slug": "s634cc7882",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "wLuiy",
              "label": "Task Template Details"
            },
            {
              "value": "GaN9I",
              "label": "Contacts"
            },
            {
              "value": "6Ouxr",
              "label": "Installations"
            },
            {
              "value": "1cHaR",
              "label": "Organisations"
            },
            {
              "value": "CwlIw",
              "label": "QuickFile Contacts"
            },
            {
              "value": "0CY49",
              "label": "Sites"
            },
            {
              "value": "gg1LH",
              "label": "Projects"
            },
            {
              "value": "sR27C",
              "label": "RHI Accounts"
            },
            {
              "value": "Hzazs",
              "label": "RHI Logins"
            },
            {
              "value": "RYcsQ",
              "label": "RHIs"
            },
            {
              "value": "3yCVf",
              "label": "Invoices and Payments"
            },
            {
              "value": "JRBMt",
              "label": "Opportunities"
            },
            {
              "value": "gL11E",
              "label": "Quote Items"
            },
            {
              "value": "pXtyN",
              "label": "Recurring Invoice Templates"
            },
            {
              "value": "r3uX5",
              "label": "SDP Invoice Items"
            },
            {
              "value": "byYQY",
              "label": "Delivery Checks"
            },
            {
              "value": "EpjjE",
              "label": "Staff Members"
            },
            {
              "value": "GWgCO",
              "label": "RHI Submissions"
            },
            {
              "value": "S3knL",
              "label": "Support Services"
            },
            {
              "value": "P2fdP",
              "label": "Tasks"
            },
            {
              "value": "u729F",
              "label": "RHI Status Update"
            },
            {
              "value": "JHTBT",
              "label": "Tasks"
            },
            {
              "value": "wOfF3",
              "label": "Timesheets"
            },
            {
              "value": "C8CT6",
              "label": "Table 2"
            },
            {
              "value": "A1f7P",
              "label": "Updates"
            },
            {
              "value": "z5NfI",
              "label": "Service Contacts"
            },
            {
              "value": "LtTGU",
              "label": "Fuel Types"
            }
          ]
        },
        "Active": {
          "label": "Active",
          "slug": "s02ec9f142",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "YES"
            },
            {
              "value": "TTdZv",
              "label": "NO"
            }
          ]
        },
        "Link": {
          "label": "Link",
          "slug": "s775c13064",
          "field_type": "linkfield"
        },
        "Parent Automations": {
          "label": "Parent Automations",
          "slug": "s4b5fd2b4c",
          "field_type": "linkedrecordfield"
        },
        "Child Automations": {
          "label": "Child Automations",
          "slug": "sxqch9q4",
          "field_type": "linkedrecordfield"
        },
        "Ply Feature Type": {
          "label": "Ply Feature Type",
          "slug": "s47dd6f6e8",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "xbkoM",
              "label": "Add-on"
            },
            {
              "value": "IdRnN",
              "label": "Tool"
            },
            {
              "value": "lVN6C",
              "label": "Notification"
            },
            {
              "value": "WusoR",
              "label": "Automation"
            }
          ]
        },
        "Grandparent Automations": {
          "label": "Grandparent Automations",
          "slug": "se2d0b43da",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Is Child's Parent": {
          "label": "Is Child's Parent",
          "slug": "s8706865d9",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Is Parent's Child": {
          "label": "Is Parent's Child",
          "slug": "slcwx6cd",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Child's Parents": {
          "label": "Child's Parents",
          "slug": "s394bc8abc",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Parent's Children": {
          "label": "Parent's Children",
          "slug": "s678ba77f3",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Great Grandparent": {
          "label": "Great Grandparent",
          "slug": "s64ff4cb48",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        },
        "Great Great Grandparent": {
          "label": "Great Great Grandparent",
          "slug": "se6d0ca1b9",
          "field_type": "lookupfield",
          "target_field_type": "linkedrecordfield"
        }
      }
    },
    "FMS Fuel Types": {
      "name": "FMS Fuel Types",
      "id": "64d6a89a43a03ac4a11f5582",
      "structure": {
        "FMS Fuel Type": {
          "label": "FMS Fuel Type",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Fuel Type": {
          "label": "Fuel Type",
          "slug": "sf40ff2ab3",
          "field_type": "linkedrecordfield"
        },
        "FMS Fuel Name": {
          "label": "FMS Fuel Name",
          "slug": "sf3f6383fe",
          "field_type": "textfield"
        },
        "Portal Consignment Status": {
          "label": "Portal Consignment Status",
          "slug": "s9331f2ecc",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "r1uSy",
              "label": "Not in Consignment Management"
            },
            {
              "value": "DDOqF",
              "label": "In Consignment Management"
            }
          ]
        },
        "Sourced from BSL?": {
          "label": "Sourced from BSL?",
          "slug": "se0b8334f8",
          "field_type": "yesnofield"
        },
        "Support Service": {
          "label": "Support Service",
          "slug": "s3dsx1em",
          "field_type": "linkedrecordfield"
        },
        "Client Fuel Name": {
          "label": "Client Fuel Name",
          "slug": "sf8244d5bf",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Eligible for use": {
          "label": "Eligible for use",
          "slug": "s0cd4105a7",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Classification": {
          "label": "Classification",
          "slug": "s16b022113",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "Woodsure Number": {
          "label": "Woodsure Number",
          "slug": "s6q5a0t6",
          "field_type": "linkedrecordfield"
        },
        "Consignment": {
          "label": "Consignment",
          "slug": "sb8a4a51ff",
          "field_type": "linkedrecordfield"
        },
        "RHI Capacity": {
          "label": "RHI Capacity",
          "slug": "s4a1eaf5cd",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "RHI Technology": {
          "label": "RHI Technology",
          "slug": "s7f3149b34",
          "field_type": "formulafield",
          "target_field_type": "singleselectfield"
        },
        "Portal Fuel Status": {
          "label": "Portal Fuel Status",
          "slug": "sdd69e87d0",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "7A8Lr",
              "label": "Not in Fuel Management"
            },
            {
              "value": "TWh2I",
              "label": "In Fuel Management"
            }
          ]
        },
        "Is Fuel Woodfuel?": {
          "label": "Is Fuel Woodfuel?",
          "slug": "s13c043d60",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "yZ55H",
              "label": "Woodfuel"
            },
            {
              "value": "rI5Nf",
              "label": "Not Woodfuel"
            }
          ]
        }
      }
    },
    "Fuel Types": {
      "name": "Fuel Types",
      "id": "64d68f82f80a24f2f4d130d1",
      "structure": {
        "Fuel": {
          "label": "Fuel",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "s8330a6c43",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "0560b6eb-e513-486b-8f5d-2f9d561525c3",
              "label": "Solid biomass"
            },
            {
              "value": "19c1ce95-fef0-4f73-b4ba-5b9929f902e0",
              "label": "Waste"
            },
            {
              "value": "44ff3bca-2388-469a-96e8-a0c7bc9f9c3a",
              "label": "Fossil fuel"
            },
            {
              "value": "cd7bcccd-5e7d-425b-91cd-42f2e4722a3d",
              "label": "Biogas"
            },
            {
              "value": "ca441666-4339-4d17-b23e-d6069958dfb3",
              "label": "Biomethane"
            }
          ]
        },
        "Category": {
          "label": "Category",
          "slug": "s48c60475e",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "7eba4a7a-a15e-4cb2-a3f1-0cceb61625f6",
              "label": "Liquid"
            },
            {
              "value": "78cd1006-a495-4d38-9478-46db20097abf",
              "label": "Solid"
            },
            {
              "value": "5b9123b6-08d1-4153-9ec7-280ea072ef77",
              "label": "Gas"
            }
          ]
        },
        "GCV": {
          "label": "GCV",
          "slug": "s1aa502690",
          "field_type": "numberfield"
        },
        "GCV Source": {
          "label": "GCV Source",
          "slug": "s7aeca501b",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "acc105ea-bf23-449d-b360-3fc7584f6591",
              "label": "Dukes"
            },
            {
              "value": "b93d0a6a-39d2-4040-bf4b-c27dc6487e0f",
              "label": "Ofgem Sustainability Guidance"
            }
          ]
        },
        "Density": {
          "label": "Density",
          "slug": "sf24e478d3",
          "field_type": "numberfield"
        },
        "Density Source": {
          "label": "Density Source",
          "slug": "s4cd3e4417",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "5ec6df9e-0199-41c3-84b2-99b96e873f1e",
              "label": "Dukes"
            },
            {
              "value": "7c0667f2-4e33-4289-becb-06235ff70908",
              "label": "Ofgem Sustainability guidance"
            }
          ]
        },
        "Link to Fuel Use": {
          "label": "Link to Fuel Use",
          "slug": "s6j09jdx",
          "field_type": "linkedrecordfield"
        },
        "FMS Fuel Types": {
          "label": "FMS Fuel Types",
          "slug": "shluynso",
          "field_type": "linkedrecordfield"
        },
        "Solid Biomass Fuel Name": {
          "label": "Solid Biomass Fuel Name",
          "slug": "s316719571",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "e8b799ac-145f-4bb5-a029-347fcee9444a",
              "label": "Olive Cake"
            },
            {
              "value": "2eb89868-52a7-4dc3-b87a-9a70cefcc04d",
              "label": "Willow Coppice"
            },
            {
              "value": "c340794b-7666-4177-a06f-f11ecb4c458e",
              "label": "Wood Pellets"
            },
            {
              "value": "72111a0b-d58b-43e3-b47a-a17bef497064",
              "label": "Paper production residues"
            },
            {
              "value": "67d32e56-4db4-4234-9559-070f58e4d9b0",
              "label": "Cereal co-product"
            },
            {
              "value": "b583f4a5-c665-4f0f-8e8f-1ebaafb6ff1e",
              "label": "Wood Chip"
            },
            {
              "value": "a2eef4db-e586-478e-b746-df1ec78a66ed",
              "label": "Food waste"
            },
            {
              "value": "db437626-45cf-4e5d-ba1a-52c2ad340744",
              "label": "Meat and bone meal"
            },
            {
              "value": "ae949eb4-9a51-4245-8801-b30f3689545f",
              "label": "Grape Seed Flower"
            },
            {
              "value": "65a37b25-1aa0-4402-b1fc-5f063d69eee0",
              "label": "Oat Pellets (CCP)"
            },
            {
              "value": "8ae0c7e5-7376-486a-8f78-8e3e157d1657",
              "label": "Olive Pellets"
            },
            {
              "value": "7a2e976c-588e-4fe9-8d69-ebf0e6446fbe",
              "label": "Olive Pulp"
            },
            {
              "value": "c9fc4468-2001-4f4e-b92b-8deaa14a4ccd",
              "label": "Olive Pulp (BFWD)"
            },
            {
              "value": "822323de-c9a2-4ebb-999f-eabcdb85353d",
              "label": "Palm Kernel"
            },
            {
              "value": "f0b3cc75-452e-42ae-9851-d2cb39022d24",
              "label": "Palm Kernel Expellor"
            },
            {
              "value": "ddad0682-758f-475e-a351-1c60bb38f044",
              "label": "Sawdust"
            },
            {
              "value": "3048b07c-fc94-46f6-a078-6e1b39b959fb",
              "label": "Sewage Sludge"
            },
            {
              "value": "ec38045b-f1c2-4358-8a79-4ca60c1bb122",
              "label": "Shea Meal"
            },
            {
              "value": "3f2dad39-6d5f-473e-acf3-713200d1fa5c",
              "label": "Sunflower Pellets"
            },
            {
              "value": "3af73b28-6106-4624-95c8-2db704b3a461",
              "label": "Treated waste/recycled wood"
            },
            {
              "value": "c2c8e20a-4bc4-43a2-8441-13c83e0e99cb",
              "label": "Untreated/clean waste/recycled wood"
            },
            {
              "value": "9363c079-0679-45d3-813d-9653b07dfd25",
              "label": "Virgin Wood"
            },
            {
              "value": "14a239d4-3ad6-4fb4-9902-c3ec06cf603d",
              "label": "Miscanthus"
            },
            {
              "value": "f6cf3e90-e9b6-4d35-9124-028bea82aeda",
              "label": "Short rotation poplar"
            },
            {
              "value": "b465bbae-75dc-44a8-a16e-bed2f1db4df0",
              "label": "Waste-derived fuel"
            },
            {
              "value": "48adad92-3c3f-4e64-9771-88a0d00492d8",
              "label": "Refuse-derived fuel"
            },
            {
              "value": "093831c6-f467-41bf-add4-2f4ffb0927a8",
              "label": "Rape meal"
            },
            {
              "value": "8797444d-f2c0-408c-8b60-3048ce2435e3",
              "label": "Wood (Sawmill Offcuts)"
            },
            {
              "value": "2f3caa09-c01f-4bb8-b0ed-21628b50ea5b",
              "label": "Solid recovered fuel"
            },
            {
              "value": "75f51300-c2e6-4e75-a420-e3f68da6431f",
              "label": "Other solid biomass"
            },
            {
              "value": "f098ee96-d1c0-4c74-9afd-125ae94a7278",
              "label": "Wood Pallets"
            }
          ]
        },
        "Waste Fuel Name": {
          "label": "Waste Fuel Name",
          "slug": "s929a45c55",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "wMfvW",
              "label": "Municipal waste"
            },
            {
              "value": "9pM28",
              "label": "Non-household municipal waste"
            },
            {
              "value": "I07SD",
              "label": "Industrial waste"
            },
            {
              "value": "5ho2x",
              "label": "Commercial waste"
            },
            {
              "value": "JvX7x",
              "label": "Production or consumption residues not otherwise specified below"
            },
            {
              "value": "BPIaM",
              "label": "Off-specification products."
            },
            {
              "value": "uGqsh",
              "label": "Products whose date for appropriate use has expired."
            },
            {
              "value": "QmxSn",
              "label": "Materials spilled, lost or having undergone other mishap, including any materials, equipment, etc, contaminated as a result o"
            },
            {
              "value": "9LNx3",
              "label": "Materials contaminated or soiled as a result of planned actions"
            },
            {
              "value": "IV8Ri",
              "label": "Unusable parts"
            },
            {
              "value": "o69CY",
              "label": "Substances which no longer perform satisfactorily"
            },
            {
              "value": "rHC4t",
              "label": "Residues of industrial processes"
            },
            {
              "value": "kOI3R",
              "label": "Residues from pollution abatement processes"
            },
            {
              "value": "7vEmc",
              "label": "Machining or finishing residues"
            },
            {
              "value": "RVGlY",
              "label": "Residues from raw materials extraction and processing"
            },
            {
              "value": "MZa6N",
              "label": "Adulterated materials"
            },
            {
              "value": "BVrJY",
              "label": "Any materials, substances or products whose use has been banned by law."
            },
            {
              "value": "9Gbjo",
              "label": "Products for which the holder has no further use"
            },
            {
              "value": "j8lew",
              "label": "Contaminated materials, substances or products resulting from remedial action with respect to land."
            },
            {
              "value": "kWcac",
              "label": "Any materials, substances or products which are not contained in the above categories"
            }
          ]
        },
        "Fossil Fuel Name": {
          "label": "Fossil Fuel Name",
          "slug": "s91068b5ae",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "4zxft",
              "label": "HCA"
            },
            {
              "value": "lCFwF",
              "label": "Gas"
            },
            {
              "value": "4Q4Ct",
              "label": "Diesel (GT Oil)"
            },
            {
              "value": "Osq0G",
              "label": "Gas Oil"
            },
            {
              "value": "w6MEl",
              "label": "MFO"
            },
            {
              "value": "RSeVD",
              "label": "Petcoke"
            },
            {
              "value": "HLP1z",
              "label": "Oil"
            },
            {
              "value": "bvQKV",
              "label": "Oil-Eco"
            },
            {
              "value": "5CIjt",
              "label": "Kerosene"
            },
            {
              "value": "6N9zU",
              "label": "Natural Gas"
            },
            {
              "value": "VLg3D",
              "label": "Polymer"
            },
            {
              "value": "wbsEk",
              "label": "Bale Twine"
            },
            {
              "value": "OD2gY",
              "label": "HFO"
            },
            {
              "value": "IyQLt",
              "label": "Coal"
            },
            {
              "value": "cKmbg",
              "label": "Other fossil fuel"
            },
            {
              "value": "aDXkR",
              "label": "Propane"
            }
          ]
        },
        "Biogas Fuel Name": {
          "label": "Biogas Fuel Name",
          "slug": "sa53fad102",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "G5jve",
              "label": "Biogas from gasification or pyrolysis"
            },
            {
              "value": "faerN",
              "label": "Biogas from anaerobic digestion"
            }
          ]
        },
        "Biomethane Fuel Name": {
          "label": "Biomethane Fuel Name",
          "slug": "s4mfl1i7",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "G5jve",
              "label": "Biomethane from gasification or pyrolysis"
            },
            {
              "value": "faerN",
              "label": "Biomethane from anaerobic digestion"
            }
          ]
        },
        "Fuel Name": {
          "label": "Fuel Name",
          "slug": "s793590960",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Location of specific GCV in the source": {
          "label": "Location of specific GCV in the source",
          "slug": "s93391440b",
          "field_type": "textareafield"
        },
        "Location of specific density in the source": {
          "label": "Location of specific density in the source",
          "slug": "s5a01ebd44",
          "field_type": "textareafield"
        },
        "Classification": {
          "label": "Classification",
          "slug": "s4c7e11c34",
          "field_type": "lookupfield",
          "target_field_type": "singleselectfield"
        },
        "Fuel Reference": {
          "label": "Fuel Reference",
          "slug": "se7cc27182",
          "field_type": "textfield"
        }
      }
    },
    "Consignments": {
      "name": "Consignments",
      "id": "66d0620c46f193f75dcbc55c",
      "structure": {
        "Fuel": {
          "label": "Fuel",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Consignment Name": {
          "label": "Consignment Name",
          "slug": "s793590960",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Classification": {
          "label": "Classification",
          "slug": "s1038369ab",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "3u3qA",
              "label": "Product/Co-product"
            },
            {
              "value": "QKUYT",
              "label": "Residue"
            },
            {
              "value": "0VpoF",
              "label": "Waste"
            }
          ]
        },
        "Consignment Reference": {
          "label": "Consignment Reference",
          "slug": "s2967c5497",
          "field_type": "textfield"
        },
        "Portal Status": {
          "label": "Portal Status",
          "slug": "s3b5f19721",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "EZnDK",
              "label": "Approved"
            },
            {
              "value": "vwfF6",
              "label": "Pending"
            }
          ]
        },
        "FMS Fuel Types": {
          "label": "FMS Fuel Types",
          "slug": "surc6nq4",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Craig Dashboard": {
      "name": "Craig Dashboard",
      "id": "66c350a21a1789ef2fc3a35c",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Standup Content": {
          "label": "Standup Content",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Completed"
            }
          ]
        },
        "Meeting Date": {
          "label": "Meeting Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "seb0d0cdf8",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "c54653d6-034f-469e-9636-3a2d2b55daea",
              "label": "Bug Fix"
            },
            {
              "value": "108be43f-8399-498d-935b-bb3629e8ce34",
              "label": "New Feature "
            },
            {
              "value": "3d8b2d4c-4146-4387-a717-9aa0ba9a909a",
              "label": "Product Enhancement"
            }
          ]
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sbb450fd94",
          "field_type": "linkedrecordfield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "s6nylhnz",
          "field_type": "textfield"
        },
        "Add Problem": {
          "label": "Add Problem",
          "slug": "sfabd786d2",
          "field_type": "linkedrecordfield"
        },
        "Meeting Review": {
          "label": "Meeting Review",
          "slug": "sed7352c2a",
          "field_type": "textfield"
        },
        "Live-Other": {
          "label": "Live-Other",
          "slug": "s61250b1c1",
          "field_type": "yesnofield"
        },
        "Live List": {
          "label": "Live List",
          "slug": "sktpxmbi",
          "field_type": "yesnofield"
        },
        "Deadlines": {
          "label": "Deadlines",
          "slug": "svt4r5q5",
          "field_type": "yesnofield"
        },
        "RHI Simple": {
          "label": "RHI Simple",
          "slug": "sxqd0kh9",
          "field_type": "yesnofield"
        },
        "RHI Complex": {
          "label": "RHI Complex",
          "slug": "sdupyaxi",
          "field_type": "yesnofield"
        },
        "RO": {
          "label": "RO",
          "slug": "s04v0iyy",
          "field_type": "yesnofield"
        },
        "Type of Check": {
          "label": "Type of Check",
          "slug": "sdf3dbbceb",
          "field_type": "linkedrecordfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s1262e58b0",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s6244e9b52",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Darren Dashboard": {
      "name": "Darren Dashboard",
      "id": "66c3631ee73e076f18391f09",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Standup Content": {
          "label": "Standup Content",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Completed"
            }
          ]
        },
        "Meeting Date": {
          "label": "Meeting Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "seb0d0cdf8",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "c54653d6-034f-469e-9636-3a2d2b55daea",
              "label": "Bug Fix"
            },
            {
              "value": "108be43f-8399-498d-935b-bb3629e8ce34",
              "label": "New Feature "
            },
            {
              "value": "3d8b2d4c-4146-4387-a717-9aa0ba9a909a",
              "label": "Product Enhancement"
            }
          ]
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sbb450fd94",
          "field_type": "linkedrecordfield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "s6nylhnz",
          "field_type": "textfield"
        },
        "Add Problem": {
          "label": "Add Problem",
          "slug": "sfabd786d2",
          "field_type": "linkedrecordfield"
        },
        "Meeting Review": {
          "label": "Meeting Review",
          "slug": "sed7352c2a",
          "field_type": "textfield"
        },
        "Live-Other": {
          "label": "Live-Other",
          "slug": "s61250b1c1",
          "field_type": "yesnofield"
        },
        "Live List": {
          "label": "Live List",
          "slug": "sktpxmbi",
          "field_type": "yesnofield"
        },
        "Deadlines": {
          "label": "Deadlines",
          "slug": "svt4r5q5",
          "field_type": "yesnofield"
        },
        "RHI Simple": {
          "label": "RHI Simple",
          "slug": "sxqd0kh9",
          "field_type": "yesnofield"
        },
        "RHI Complex": {
          "label": "RHI Complex",
          "slug": "sdupyaxi",
          "field_type": "yesnofield"
        },
        "RO": {
          "label": "RO",
          "slug": "s04v0iyy",
          "field_type": "yesnofield"
        },
        "Type of Check": {
          "label": "Type of Check",
          "slug": "sdf3dbbceb",
          "field_type": "linkedrecordfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s1262e58b0",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s6244e9b52",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Trudy Dashboard": {
      "name": "Trudy Dashboard",
      "id": "66c468208d642e103d7a3548",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Standup Content": {
          "label": "Standup Content",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Completed"
            }
          ]
        },
        "Meeting Date": {
          "label": "Meeting Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "seb0d0cdf8",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "c54653d6-034f-469e-9636-3a2d2b55daea",
              "label": "Bug Fix"
            },
            {
              "value": "108be43f-8399-498d-935b-bb3629e8ce34",
              "label": "New Feature "
            },
            {
              "value": "3d8b2d4c-4146-4387-a717-9aa0ba9a909a",
              "label": "Product Enhancement"
            }
          ]
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sbb450fd94",
          "field_type": "linkedrecordfield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "s6nylhnz",
          "field_type": "textfield"
        },
        "Add Problem": {
          "label": "Add Problem",
          "slug": "sfabd786d2",
          "field_type": "linkedrecordfield"
        },
        "Meeting Review": {
          "label": "Meeting Review",
          "slug": "sed7352c2a",
          "field_type": "textfield"
        },
        "Live-Other": {
          "label": "Live-Other",
          "slug": "s61250b1c1",
          "field_type": "yesnofield"
        },
        "Live List": {
          "label": "Live List",
          "slug": "sktpxmbi",
          "field_type": "yesnofield"
        },
        "Deadlines": {
          "label": "Deadlines",
          "slug": "svt4r5q5",
          "field_type": "yesnofield"
        },
        "RHI Simple": {
          "label": "RHI Simple",
          "slug": "sxqd0kh9",
          "field_type": "yesnofield"
        },
        "RHI Complex": {
          "label": "RHI Complex",
          "slug": "sdupyaxi",
          "field_type": "yesnofield"
        },
        "RO": {
          "label": "RO",
          "slug": "s04v0iyy",
          "field_type": "yesnofield"
        },
        "Type of Check": {
          "label": "Type of Check",
          "slug": "sdf3dbbceb",
          "field_type": "linkedrecordfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s1262e58b0",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s6244e9b52",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Jen Dashboard": {
      "name": "Jen Dashboard",
      "id": "66c4895670667dc00e37abd9",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Standup Content": {
          "label": "Standup Content",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Completed"
            }
          ]
        },
        "Meeting Date": {
          "label": "Meeting Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "seb0d0cdf8",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "c54653d6-034f-469e-9636-3a2d2b55daea",
              "label": "Bug Fix"
            },
            {
              "value": "108be43f-8399-498d-935b-bb3629e8ce34",
              "label": "New Feature "
            },
            {
              "value": "3d8b2d4c-4146-4387-a717-9aa0ba9a909a",
              "label": "Product Enhancement"
            }
          ]
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sbb450fd94",
          "field_type": "linkedrecordfield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "s6nylhnz",
          "field_type": "textfield"
        },
        "Add Problem": {
          "label": "Add Problem",
          "slug": "sfabd786d2",
          "field_type": "linkedrecordfield"
        },
        "Meeting Review": {
          "label": "Meeting Review",
          "slug": "sed7352c2a",
          "field_type": "textfield"
        },
        "Live-Other": {
          "label": "Live-Other",
          "slug": "s61250b1c1",
          "field_type": "yesnofield"
        },
        "Live List": {
          "label": "Live List",
          "slug": "sktpxmbi",
          "field_type": "yesnofield"
        },
        "Deadlines": {
          "label": "Deadlines",
          "slug": "svt4r5q5",
          "field_type": "yesnofield"
        },
        "RHI Simple": {
          "label": "RHI Simple",
          "slug": "sxqd0kh9",
          "field_type": "yesnofield"
        },
        "RHI Complex": {
          "label": "RHI Complex",
          "slug": "sdupyaxi",
          "field_type": "yesnofield"
        },
        "RO": {
          "label": "RO",
          "slug": "s04v0iyy",
          "field_type": "yesnofield"
        },
        "Type of Check": {
          "label": "Type of Check",
          "slug": "sdf3dbbceb",
          "field_type": "linkedrecordfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s1262e58b0",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s6244e9b52",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Chris Dashboard": {
      "name": "Chris Dashboard",
      "id": "66c4aa7f88c301525d7a57ee",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Standup Content": {
          "label": "Standup Content",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Completed"
            }
          ]
        },
        "Meeting Date": {
          "label": "Meeting Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "seb0d0cdf8",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "c54653d6-034f-469e-9636-3a2d2b55daea",
              "label": "Bug Fix"
            },
            {
              "value": "108be43f-8399-498d-935b-bb3629e8ce34",
              "label": "New Feature "
            },
            {
              "value": "3d8b2d4c-4146-4387-a717-9aa0ba9a909a",
              "label": "Product Enhancement"
            }
          ]
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sbb450fd94",
          "field_type": "linkedrecordfield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "s6nylhnz",
          "field_type": "textfield"
        },
        "Add Problem": {
          "label": "Add Problem",
          "slug": "sfabd786d2",
          "field_type": "linkedrecordfield"
        },
        "Meeting Review": {
          "label": "Meeting Review",
          "slug": "sed7352c2a",
          "field_type": "textfield"
        },
        "Live-Other": {
          "label": "Live-Other",
          "slug": "s61250b1c1",
          "field_type": "yesnofield"
        },
        "Live List": {
          "label": "Live List",
          "slug": "sktpxmbi",
          "field_type": "yesnofield"
        },
        "Deadlines": {
          "label": "Deadlines",
          "slug": "svt4r5q5",
          "field_type": "yesnofield"
        },
        "RHI Simple": {
          "label": "RHI Simple",
          "slug": "sxqd0kh9",
          "field_type": "yesnofield"
        },
        "RHI Complex": {
          "label": "RHI Complex",
          "slug": "sdupyaxi",
          "field_type": "yesnofield"
        },
        "RO": {
          "label": "RO",
          "slug": "s04v0iyy",
          "field_type": "yesnofield"
        },
        "Type of Check": {
          "label": "Type of Check",
          "slug": "sdf3dbbceb",
          "field_type": "linkedrecordfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s1262e58b0",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s6244e9b52",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Adam Dashboard": {
      "name": "Adam Dashboard",
      "id": "66c4ab9688c301525d7a586a",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Standup Content": {
          "label": "Standup Content",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Completed"
            }
          ]
        },
        "Meeting Date": {
          "label": "Meeting Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "seb0d0cdf8",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "c54653d6-034f-469e-9636-3a2d2b55daea",
              "label": "Bug Fix"
            },
            {
              "value": "108be43f-8399-498d-935b-bb3629e8ce34",
              "label": "New Feature "
            },
            {
              "value": "3d8b2d4c-4146-4387-a717-9aa0ba9a909a",
              "label": "Product Enhancement"
            }
          ]
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sbb450fd94",
          "field_type": "linkedrecordfield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "s6nylhnz",
          "field_type": "textfield"
        },
        "Add Problem": {
          "label": "Add Problem",
          "slug": "sfabd786d2",
          "field_type": "linkedrecordfield"
        },
        "Meeting Review": {
          "label": "Meeting Review",
          "slug": "sed7352c2a",
          "field_type": "textfield"
        },
        "Live-Other": {
          "label": "Live-Other",
          "slug": "s61250b1c1",
          "field_type": "yesnofield"
        },
        "Live List": {
          "label": "Live List",
          "slug": "sktpxmbi",
          "field_type": "yesnofield"
        },
        "Deadlines": {
          "label": "Deadlines",
          "slug": "svt4r5q5",
          "field_type": "yesnofield"
        },
        "RHI Simple": {
          "label": "RHI Simple",
          "slug": "sxqd0kh9",
          "field_type": "yesnofield"
        },
        "RHI Complex": {
          "label": "RHI Complex",
          "slug": "sdupyaxi",
          "field_type": "yesnofield"
        },
        "RO": {
          "label": "RO",
          "slug": "s04v0iyy",
          "field_type": "yesnofield"
        },
        "Type of Check": {
          "label": "Type of Check",
          "slug": "sdf3dbbceb",
          "field_type": "linkedrecordfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s1262e58b0",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s6244e9b52",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Adil Dashboard": {
      "name": "Adil Dashboard",
      "id": "66f2e157d56f0bc40391abed",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Standup Content": {
          "label": "Standup Content",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Completed"
            }
          ]
        },
        "Meeting Date": {
          "label": "Meeting Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "seb0d0cdf8",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "c54653d6-034f-469e-9636-3a2d2b55daea",
              "label": "Bug Fix"
            },
            {
              "value": "108be43f-8399-498d-935b-bb3629e8ce34",
              "label": "New Feature "
            },
            {
              "value": "3d8b2d4c-4146-4387-a717-9aa0ba9a909a",
              "label": "Product Enhancement"
            }
          ]
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sbb450fd94",
          "field_type": "linkedrecordfield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "s6nylhnz",
          "field_type": "textfield"
        },
        "Add Problem": {
          "label": "Add Problem",
          "slug": "sfabd786d2",
          "field_type": "linkedrecordfield"
        },
        "Meeting Review": {
          "label": "Meeting Review",
          "slug": "sed7352c2a",
          "field_type": "textfield"
        },
        "Live-Other": {
          "label": "Live-Other",
          "slug": "s61250b1c1",
          "field_type": "yesnofield"
        },
        "Live List": {
          "label": "Live List",
          "slug": "sktpxmbi",
          "field_type": "yesnofield"
        },
        "Deadlines": {
          "label": "Deadlines",
          "slug": "svt4r5q5",
          "field_type": "yesnofield"
        },
        "RHI Simple": {
          "label": "RHI Simple",
          "slug": "sxqd0kh9",
          "field_type": "yesnofield"
        },
        "RHI Complex": {
          "label": "RHI Complex",
          "slug": "sdupyaxi",
          "field_type": "yesnofield"
        },
        "RO": {
          "label": "RO",
          "slug": "s04v0iyy",
          "field_type": "yesnofield"
        },
        "Type of Check": {
          "label": "Type of Check",
          "slug": "sdf3dbbceb",
          "field_type": "linkedrecordfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s1262e58b0",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s6244e9b52",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Gregor Dashboard": {
      "name": "Gregor Dashboard",
      "id": "66c36064e74a0b4962a8225f",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Standup Content": {
          "label": "Standup Content",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Completed"
            }
          ]
        },
        "Meeting Date": {
          "label": "Meeting Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "seb0d0cdf8",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "c54653d6-034f-469e-9636-3a2d2b55daea",
              "label": "Bug Fix"
            },
            {
              "value": "108be43f-8399-498d-935b-bb3629e8ce34",
              "label": "New Feature "
            },
            {
              "value": "3d8b2d4c-4146-4387-a717-9aa0ba9a909a",
              "label": "Product Enhancement"
            }
          ]
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sbb450fd94",
          "field_type": "linkedrecordfield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "s6nylhnz",
          "field_type": "textfield"
        },
        "Add Problem": {
          "label": "Add Problem",
          "slug": "sfabd786d2",
          "field_type": "linkedrecordfield"
        },
        "Meeting Review": {
          "label": "Meeting Review",
          "slug": "sed7352c2a",
          "field_type": "textfield"
        },
        "Live-Other": {
          "label": "Live-Other",
          "slug": "s61250b1c1",
          "field_type": "yesnofield"
        },
        "Live List": {
          "label": "Live List",
          "slug": "sktpxmbi",
          "field_type": "yesnofield"
        },
        "Deadlines": {
          "label": "Deadlines",
          "slug": "svt4r5q5",
          "field_type": "yesnofield"
        },
        "RHI Simple": {
          "label": "RHI Simple",
          "slug": "sxqd0kh9",
          "field_type": "yesnofield"
        },
        "RHI Complex": {
          "label": "RHI Complex",
          "slug": "sdupyaxi",
          "field_type": "yesnofield"
        },
        "RO": {
          "label": "RO",
          "slug": "s04v0iyy",
          "field_type": "yesnofield"
        },
        "Type of Check": {
          "label": "Type of Check",
          "slug": "sdf3dbbceb",
          "field_type": "linkedrecordfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s1262e58b0",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s6244e9b52",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Cat Dashboard": {
      "name": "Cat Dashboard",
      "id": "6703ecae4e5c370707f1e618",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Standup Content": {
          "label": "Standup Content",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Completed"
            }
          ]
        },
        "Meeting Date": {
          "label": "Meeting Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Type": {
          "label": "Type",
          "slug": "seb0d0cdf8",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "c54653d6-034f-469e-9636-3a2d2b55daea",
              "label": "Bug Fix"
            },
            {
              "value": "108be43f-8399-498d-935b-bb3629e8ce34",
              "label": "New Feature "
            },
            {
              "value": "3d8b2d4c-4146-4387-a717-9aa0ba9a909a",
              "label": "Product Enhancement"
            }
          ]
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "sbb450fd94",
          "field_type": "linkedrecordfield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "s6nylhnz",
          "field_type": "textfield"
        },
        "Add Problem": {
          "label": "Add Problem",
          "slug": "sfabd786d2",
          "field_type": "linkedrecordfield"
        },
        "Meeting Review": {
          "label": "Meeting Review",
          "slug": "sed7352c2a",
          "field_type": "textfield"
        },
        "Live-Other": {
          "label": "Live-Other",
          "slug": "s61250b1c1",
          "field_type": "yesnofield"
        },
        "Live List": {
          "label": "Live List",
          "slug": "sktpxmbi",
          "field_type": "yesnofield"
        },
        "Deadlines": {
          "label": "Deadlines",
          "slug": "svt4r5q5",
          "field_type": "yesnofield"
        },
        "RHI Simple": {
          "label": "RHI Simple",
          "slug": "sxqd0kh9",
          "field_type": "yesnofield"
        },
        "RHI Complex": {
          "label": "RHI Complex",
          "slug": "sdupyaxi",
          "field_type": "yesnofield"
        },
        "RO": {
          "label": "RO",
          "slug": "s04v0iyy",
          "field_type": "yesnofield"
        },
        "Type of Check": {
          "label": "Type of Check",
          "slug": "sdf3dbbceb",
          "field_type": "linkedrecordfield"
        },
        "Formula": {
          "label": "Formula",
          "slug": "s1262e58b0",
          "field_type": "formulafield",
          "target_field_type": "richtextareafield"
        },
        "Tasks": {
          "label": "Tasks",
          "slug": "s6244e9b52",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Staff documents": {
      "name": "Staff documents",
      "id": "66c3626bd29f64c8da9c9e55",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Staff documents6703ecae4e5c370707f1e619": {
      "name": "Staff documents",
      "id": "6703ecae4e5c370707f1e619",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Staff documents66c3628f962ef4891c2b07ae": {
      "name": "Staff documents",
      "id": "66c3628f962ef4891c2b07ae",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Staff documents66c3631ee73e076f18391f0a": {
      "name": "Staff documents",
      "id": "66c3631ee73e076f18391f0a",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Staff documents66c468208d642e103d7a3545": {
      "name": "Staff documents",
      "id": "66c468208d642e103d7a3545",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Staff documents66c4895670667dc00e37abda": {
      "name": "Staff documents",
      "id": "66c4895670667dc00e37abda",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Staff documents66c4aa7f88c301525d7a57ef": {
      "name": "Staff documents",
      "id": "66c4aa7f88c301525d7a57ef",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Staff documents66c4ab9688c301525d7a586b": {
      "name": "Staff documents",
      "id": "66c4ab9688c301525d7a586b",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Staff documents66f2e157d56f0bc40391abee": {
      "name": "Staff documents",
      "id": "66f2e157d56f0bc40391abee",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Client Dashboards": {
      "name": "Client Dashboards",
      "id": "66c6101cbd035878fb177e4e",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        }
      }
    },
    "Station Checklist": {
      "name": "Station Checklist",
      "id": "66d7068fc9fd0bda2c2e7bae",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Station Specific Information": {
          "label": "Station Specific Information",
          "slug": "description",
          "field_type": "textfield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Station": {
          "label": "Station",
          "slug": "s84b413c66",
          "field_type": "linkedrecordfield"
        },
        "Project": {
          "label": "Project",
          "slug": "s343d5b1ee",
          "field_type": "linkedrecordfield"
        },
        "RO Logins": {
          "label": "RO Logins",
          "slug": "s58be56667",
          "field_type": "linkedrecordfield"
        },
        "RO Login Documents": {
          "label": "RO Login Documents",
          "slug": "sf30dd7a74",
          "field_type": "subitemsfield"
        },
        "Name of Station": {
          "label": "Name of Station",
          "slug": "s1275f8dca",
          "field_type": "textfield"
        },
        "Commissioning": {
          "label": "Commissioning",
          "slug": "scdd59d959",
          "field_type": "textfield"
        },
        "Commissioning Evidence": {
          "label": "Commissioning Evidence",
          "slug": "s52a3b6955",
          "field_type": "subitemsfield"
        },
        "Total Installed Capacity (TIC)": {
          "label": "Total Installed Capacity (TIC)",
          "slug": "s610b3c012",
          "field_type": "textfield"
        },
        "Declared Net Capacity (DNC)": {
          "label": "Declared Net Capacity (DNC)",
          "slug": "sa9dcb511b",
          "field_type": "textfield"
        },
        "Capacity Evidence": {
          "label": "Capacity Evidence",
          "slug": "s4aedf8fe1",
          "field_type": "subitemsfield"
        },
        "Address of the installation": {
          "label": "Address of the installation",
          "slug": "se06f47cc0",
          "field_type": "addressfield"
        },
        "Which scheme have you already applied for?": {
          "label": "Which scheme have you already applied for?",
          "slug": "s5613ecf40",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "BJTif",
              "label": "FIT"
            },
            {
              "value": "ZcAVR",
              "label": "ROC"
            },
            {
              "value": "jBmsY",
              "label": "None"
            }
          ]
        },
        "ordnance survey grid reference (2 letter 6 digit)": {
          "label": "ordnance survey grid reference (2 letter 6 digit)",
          "slug": "s259f92977",
          "field_type": "textfield"
        },
        "Technology": {
          "label": "Technology",
          "slug": "saba4f2f97",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "V9Ry2",
              "label": "Biogas (REGO code = BG)"
            },
            {
              "value": "cNwwf",
              "label": "Biomass (REGO code = BW)"
            },
            {
              "value": "fZ6Y5",
              "label": "Filled storage system (REGO code = FS)"
            },
            {
              "value": "HUwHi",
              "label": "Geothermal (REGO code = GT)"
            },
            {
              "value": "d4QZX",
              "label": " Filled storage hydro (REGO code = HP)"
            },
            {
              "value": "0yxyC",
              "label": "Hydro (REGO code = HY)"
            },
            {
              "value": "lZnoe",
              "label": "Landfill Gas (REGO code = LG)"
            },
            {
              "value": "Z2Y8o",
              "label": "Biodegradable (REGO code = MW)"
            },
            {
              "value": "ekqj5",
              "label": "On-shore wind (REGO code = NW)"
            },
            {
              "value": "EMAy2",
              "label": "On-shore wind (REGO code = NW)"
            },
            {
              "value": "zZH0B",
              "label": "Sewage gas (REGO code = SG)"
            },
            {
              "value": "UmVFx",
              "label": "Ocean Energy (REGO Code = OE)"
            },
            {
              "value": "cFxu3",
              "label": "Aerothermal (REGO Code = AT)"
            },
            {
              "value": "wR4jr",
              "label": "Hydrothermal (REGO Code = HT)"
            },
            {
              "value": "08VC1",
              "label": "Other? (Please specify)"
            }
          ]
        },
        "Technology (Other)": {
          "label": "Technology (Other)",
          "slug": "sffd0b2af8",
          "field_type": "textfield"
        },
        "Current Contracts": {
          "label": "Current Contracts",
          "slug": "s3f2aba42c",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "WbCcp",
              "label": "Non-Fossil Fuel Obligation (NFFO) 3, 4, or 5 contract"
            },
            {
              "value": "OM2ut",
              "label": "Scottish Renewables Obligation (SRO) 1, 2, or 3 contract"
            },
            {
              "value": "pYfQj",
              "label": "Northern Ireland (NI) NFFO contract"
            },
            {
              "value": "XNT3A",
              "label": "N/A"
            }
          ]
        },
        "Contract History": {
          "label": "Contract History",
          "slug": "s97e782614",
          "field_type": "textfield"
        },
        "Plant Description": {
          "label": "Plant Description",
          "slug": "s29571de20",
          "field_type": "textfield"
        },
        "Civil Works": {
          "label": "Civil Works",
          "slug": "sc8c649d0a",
          "field_type": "textfield"
        },
        "Generating Equipment": {
          "label": "Generating Equipment",
          "slug": "sfeae6947c",
          "field_type": "textfield"
        },
        "Biogas Technology": {
          "label": "Biogas Technology",
          "slug": "s9ef1b819e",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "r7Iz2",
              "label": "Gasification"
            },
            {
              "value": "3i640",
              "label": "Pyrolisis"
            },
            {
              "value": "h6nEf",
              "label": "Anaerobic Digestion"
            }
          ]
        },
        "Conversion Technology": {
          "label": "Conversion Technology",
          "slug": "sbeee36b07",
          "field_type": "textfield"
        },
        "Non Renewable Fuel": {
          "label": "Non Renewable Fuel",
          "slug": "sf6d571581",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "yes",
              "label": "Fossil Fuel"
            },
            {
              "value": "no",
              "label": "Waste"
            }
          ]
        },
        "Export Capacity": {
          "label": "Export Capacity",
          "slug": "sdbe390776",
          "field_type": "textfield"
        },
        "Meter Information and Evidence": {
          "label": "Meter Information and Evidence",
          "slug": "sc23934838",
          "field_type": "subitemsfield"
        },
        "Electrical schematic/line diagram (SLD)": {
          "label": "Electrical schematic/line diagram (SLD)",
          "slug": "s7077c6a42",
          "field_type": "filefield"
        },
        "SLD Example / Template": {
          "label": "SLD Example / Template",
          "slug": "s831fbfe6e",
          "field_type": "subitemsfield"
        },
        "Maps (Hydro)": {
          "label": "Maps (Hydro)",
          "slug": "s4cddc1401",
          "field_type": "textfield"
        },
        "Map Documents": {
          "label": "Map Documents",
          "slug": "s1836cf062",
          "field_type": "subitemsfield"
        },
        "Supplier Letter": {
          "label": "Supplier Letter",
          "slug": "s5eeb97524",
          "field_type": "textfield"
        },
        "Supplier Letter Documents": {
          "label": "Supplier Letter Documents",
          "slug": "s94ec00967",
          "field_type": "subitemsfield"
        },
        "Planning / Permitted Development Evidence": {
          "label": "Planning / Permitted Development Evidence",
          "slug": "s95c23ca48",
          "field_type": "filefield"
        },
        "Fuel measurement and sampling (FMS) questionnaire": {
          "label": "Fuel measurement and sampling (FMS) questionnaire",
          "slug": "s9fb7d8373",
          "field_type": "textfield"
        },
        "FMS Documents": {
          "label": "FMS Documents",
          "slug": "scff0fdcd5",
          "field_type": "subitemsfield"
        },
        "Site Pictures of all Generating Equipment": {
          "label": "Site Pictures of all Generating Equipment",
          "slug": "s4239cbb09",
          "field_type": "subitemsfield"
        },
        "FMS Evidence": {
          "label": "FMS Evidence",
          "slug": "sececd391a",
          "field_type": "subitemsfield"
        },
        "Type of Station": {
          "label": "Type of Station",
          "slug": "sa8429cf35",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "3DD46",
              "label": "Fuelled (Biogas)"
            },
            {
              "value": "piNy6",
              "label": "Fuelled (Other)"
            },
            {
              "value": "azQFU",
              "label": "Non- Fuelled (Hydro)"
            },
            {
              "value": "8LnqD",
              "label": "Non-Fuelled (Other)"
            }
          ]
        },
        "Initial Email Documents": {
          "label": "Initial Email Documents",
          "slug": "sfc94041d4",
          "field_type": "subitemsfield"
        },
        "Client Meeting": {
          "label": "Client Meeting",
          "slug": "s17df60404",
          "field_type": "datefield"
        },
        "Row Created on Google Sheets": {
          "label": "Row Created on Google Sheets",
          "slug": "s052580b11",
          "field_type": "datefield"
        },
        "Initial Email Sent": {
          "label": "Initial Email Sent",
          "slug": "s4b611e440",
          "field_type": "datefield"
        },
        "Link to Client Document Checklist": {
          "label": "Link to Client Document Checklist",
          "slug": "supy9dii",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "Program Management": {
      "name": "Program Management",
      "id": "66cdbe294a8885663f33ec4c",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "AYNvN",
              "label": "Planned"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "Mc17C",
              "label": "On Hold"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Linked Projects": {
          "label": "Linked Projects",
          "slug": "sd0848358e",
          "field_type": "linkedrecordfield"
        },
        "Program Tasks": {
          "label": "Program Tasks",
          "slug": "s4bff4cc15",
          "field_type": "linkedrecordfield"
        },
        "Updates": {
          "label": "Updates",
          "slug": "s1adeb2908",
          "field_type": "linkedrecordfield"
        },
        "Category": {
          "label": "Category",
          "slug": "s853d6fd80",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "ybTZc",
              "label": "Program of Works (High Priority Clients)"
            },
            {
              "value": "6sX9P",
              "label": "Process Development"
            },
            {
              "value": "JaQrk",
              "label": "Program of Works"
            }
          ]
        },
        "Potential Issues to be Wary of": {
          "label": "Potential Issues to be Wary of",
          "slug": "s0e87a936a",
          "field_type": "textfield"
        },
        "Program Quotes": {
          "label": "Program Quotes",
          "slug": "s0c2d3f1c9",
          "field_type": "linkedrecordfield"
        },
        "Project Updates": {
          "label": "Project Updates",
          "slug": "s96f5affb5",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        }
      }
    },
    "Installation Documents": {
      "name": "Installation Documents",
      "id": "66def13d9e235468aff702b9",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Document Lead": {
          "label": "Document Lead",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "in_progress",
              "label": "Requested"
            },
            {
              "value": "ready_for_review",
              "label": "Received - Unreviewed"
            },
            {
              "value": "2LJkI",
              "label": "Reviewed - Document Problem"
            },
            {
              "value": "complete",
              "label": "Reviewed - Ready to Submit"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Notes": {
          "label": "Notes",
          "slug": "sd4ed411d5",
          "field_type": "textfield"
        },
        "Document Type": {
          "label": "Document Type",
          "slug": "s32f2e64d0",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "UjyWX",
              "label": "Template"
            },
            {
              "value": "1szdD",
              "label": "Evidence"
            }
          ]
        },
        "Document": {
          "label": "Document",
          "slug": "s4405bf6ec",
          "field_type": "filefield"
        },
        "Version": {
          "label": "Version",
          "slug": "sc2263678a",
          "field_type": "numberfield"
        },
        "Requested From": {
          "label": "Requested From",
          "slug": "sb3d7ff05b",
          "field_type": "multipleselectfield",
          "choices": [
            {
              "value": "olXfN",
              "label": "Operator"
            },
            {
              "value": "kut5W",
              "label": "Owner"
            },
            {
              "value": "cMDdA",
              "label": "Installer"
            },
            {
              "value": "v0XFj",
              "label": "Regulator"
            },
            {
              "value": "FHeqM",
              "label": "Manufacturer"
            }
          ]
        },
        "Checklist": {
          "label": "Checklist",
          "slug": "sd39c15e07",
          "field_type": "linkedrecordfield"
        }
      }
    },
    "API Tests": {
      "name": "API Tests",
      "id": "66e2e6ddec3e002bd6662999",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "required text field": {
          "label": "required text field",
          "slug": "s161f3d280",
          "field_type": "textfield"
        },
        "required number field": {
          "label": "required number field",
          "slug": "s2e33e7cd0",
          "field_type": "numberfield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "s167aeede9",
          "field_type": "recordidfield"
        },
        "Date": {
          "label": "Date",
          "slug": "s85c5d3b2a",
          "field_type": "datefield"
        }
      }
    },
    "Metrics Overview": {
      "name": "Metrics Overview",
      "id": "66e99fc1cffb94afda68be5c",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Metrics Junction": {
          "label": "Metrics Junction",
          "slug": "s916295d1b",
          "field_type": "linkedrecordfield"
        },
        "Report Date": {
          "label": "Report Date",
          "slug": "se8b7a0542",
          "field_type": "datefield"
        }
      }
    },
    "Metric Junction": {
      "name": "Metric Junction",
      "id": "66e9a5831a24aaabab51b4b3",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Link to Metrics Overview": {
          "label": "Link to Metrics Overview",
          "slug": "slxqqi6z",
          "field_type": "linkedrecordfield"
        },
        "Link to Staff Member Metrics": {
          "label": "Link to Staff Member Metrics",
          "slug": "srp73i37",
          "field_type": "linkedrecordfield"
        },
        "Record ID": {
          "label": "Record ID",
          "slug": "sb1f69a43c",
          "field_type": "recordidfield"
        }
      }
    },
    "Account Passwords": {
      "name": "Account Passwords",
      "id": "66ea944166b3d737e7979224",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "in_progress",
              "label": "In Use"
            },
            {
              "value": "complete",
              "label": "Not In Use"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Login Link": {
          "label": "Login Link",
          "slug": "scda1a49f4",
          "field_type": "linkfield"
        },
        "Username": {
          "label": "Username",
          "slug": "sb5a3e0a89",
          "field_type": "textfield"
        },
        "Password": {
          "label": "Password",
          "slug": "s73b6207fa",
          "field_type": "textfield"
        }
      }
    },
    "Email Templates": {
      "name": "Email Templates",
      "id": "66f57a62d18c7ad2540fd5f1",
      "structure": {
        "Email Name": {
          "label": "Email Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Email Template": {
          "label": "Email Template",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Draft"
            },
            {
              "value": "in_progress",
              "label": "In Use"
            },
            {
              "value": "complete",
              "label": "Archive"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Job Categories": {
          "label": "Job Categories",
          "slug": "sb9cf7e3e6",
          "field_type": "linkedrecordfield"
        },
        "Description": {
          "label": "Description",
          "slug": "s63497a089",
          "field_type": "richtextareafield"
        },
        "Sent To": {
          "label": "Sent To",
          "slug": "s3bf21dd92",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "bbtGP",
              "label": "Customer"
            },
            {
              "value": "lpTUI",
              "label": "Regulator"
            },
            {
              "value": "vaIOI",
              "label": "Other (add detail in description"
            }
          ]
        },
        "Title": {
          "label": "Title",
          "slug": "s007061a0b",
          "field_type": "textfield"
        },
        "Job Codes": {
          "label": "Job Codes",
          "slug": "sea5ebc266",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        }
      }
    },
    "Table 166fd12f1417ba59aea134714": {
      "name": "Table 1",
      "id": "66fd12f1417ba59aea134714",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        }
      }
    },
    "Tasks (Restored) 1": {
      "name": "Tasks (Restored) 1",
      "id": "66fd1f952cf810271905fdfb",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Subtasks": {
          "label": "Subtasks",
          "slug": "sa5fbbd37c",
          "field_type": "checklistfield"
        },
        "Status": {
          "label": "Status",
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
          "label": "Hard Due Date",
          "slug": "s2b170d112",
          "field_type": "duedatefield"
        },
        "Due Date Grouping (System Field)": {
          "label": "Due Date Grouping (System Field)",
          "slug": "se4120b568",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Estimated Due Date": {
          "label": "Estimated Due Date",
          "slug": "s6f94d48c2",
          "field_type": "duedatefield"
        },
        "Site": {
          "label": "Site",
          "slug": "s8c9e4d2ca",
          "field_type": "linkedrecordfield"
        },
        "Installation Name": {
          "label": "Installation Name",
          "slug": "s0a57bdc74",
          "field_type": "linkedrecordfield"
        },
        "Task Detail": {
          "label": "Task Detail",
          "slug": "s5f143ae1a",
          "field_type": "richtextareafield"
        },
        "Client": {
          "label": "Client",
          "slug": "sf16928c0a",
          "field_type": "linkedrecordfield"
        },
        "Due Date (Soonest)": {
          "label": "Due Date (Soonest)",
          "slug": "s99be6c0bc",
          "field_type": "formulafield",
          "target_field_type": "datefield"
        },
        "Time Cost (Timesheets)": {
          "label": "Time Cost (Timesheets)",
          "slug": "sa6ab3edfc",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Task": {
          "label": "Task",
          "slug": "sf07e8dbb2",
          "field_type": "textfield"
        },
        "Task Lead": {
          "label": "Task Lead",
          "slug": "szm6g7jn",
          "field_type": "userfield"
        },
        "Total Time Tracked (Timesheets)": {
          "label": "Total Time Tracked (Timesheets)",
          "slug": "s9999c6832",
          "field_type": "formulafield",
          "target_field_type": "numberfield"
        },
        "Time Spent on task": {
          "label": "Time Spent on task",
          "slug": "s6572689e8",
          "field_type": "timetrackingfield"
        },
        "Track time?": {
          "label": "Track time?",
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
          "label": "Record ID (System Field)",
          "slug": "s23c37cbe1",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Attachment": {
          "label": "Attachment",
          "slug": "s822c1d881",
          "field_type": "filefield"
        },
        "Task Template Details (System Field)": {
          "label": "Task Template Details (System Field)",
          "slug": "s6772c3254",
          "field_type": "linkedrecordfield"
        },
        "Attachment (View Only)": {
          "label": "Attachment (View Only)",
          "slug": "s9e6732f09",
          "field_type": "lookupfield",
          "target_field_type": "filefield"
        },
        "Deadline List Flag": {
          "label": "Deadline List Flag",
          "slug": "s4624b61be",
          "field_type": "yesnofield"
        },
        "Choose title": {
          "label": "Choose title",
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
          "label": "RHI Number",
          "slug": "s9bb4ebba9",
          "field_type": "linkedrecordfield"
        },
        "RO Generator": {
          "label": "RO Generator",
          "slug": "s3c762620d",
          "field_type": "linkedrecordfield"
        },
        "Hard Due Date (Form Field)*": {
          "label": "Hard Due Date (Form Field)*",
          "slug": "s925af62dd",
          "field_type": "datefield"
        },
        "Hard Due Date (Form Field)": {
          "label": "Hard Due Date (Form Field)",
          "slug": "s10mz10j",
          "field_type": "datefield"
        },
        "Task Name (System Field)": {
          "label": "Task Name (System Field)",
          "slug": "s1ef201c6a",
          "field_type": "formulafield"
        },
        "Extra Information": {
          "label": "Extra Information",
          "slug": "s6d76ae0ab",
          "field_type": "textfield"
        },
        "Date Complete": {
          "label": "Date Complete",
          "slug": "s8f98aece6",
          "field_type": "datefield"
        },
        "Type of task": {
          "label": "Type of task",
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
          "label": "Contact",
          "slug": "s3227287b0",
          "field_type": "linkedrecordfield"
        },
        "Included on Deadline List (System Field)": {
          "label": "Included on Deadline List (System Field)",
          "slug": "sd195c52e9",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Due Date is internal (system field)": {
          "label": "Due Date is internal (system field)",
          "slug": "s59088446c",
          "field_type": "formulafield",
          "target_field_type": "yesnofield"
        },
        "Hard Due Date (Read Only)": {
          "label": "Hard Due Date (Read Only)",
          "slug": "sc9a6592c2",
          "field_type": "formulafield",
          "target_field_type": "duedatefield"
        },
        "Estimated Due Date (Read Only)": {
          "label": "Estimated Due Date (Read Only)",
          "slug": "s678084c13",
          "field_type": "formulafield",
          "target_field_type": "duedatefield"
        },
        "Milestone": {
          "label": "Milestone",
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
          "label": "Earliest task milestone",
          "slug": "s245d42100",
          "field_type": "formulafield",
          "target_field_type": "statusfield"
        },
        "Timeline view due date (System Field)": {
          "label": "Timeline view due date (System Field)",
          "slug": "s218a49cc0",
          "field_type": "datefield"
        },
        "Job sub-type": {
          "label": "Job sub-type",
          "slug": "s89f23add2",
          "field_type": "linkedrecordfield"
        },
        "Status Group": {
          "label": "Status Group",
          "slug": "s42a7bf1f6",
          "field_type": "formulafield",
          "target_field_type": "textfield"
        },
        "Urgency": {
          "label": "Urgency",
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
        "Updates from Project": {
          "label": "Updates from Project",
          "slug": "s3ol0zty",
          "field_type": "lookupfield",
          "target_field_type": "formulafield"
        }
      }
    },
    "Table 166fd226b2cf81027190606c2": {
      "name": "Table 1",
      "id": "66fd226b2cf81027190606c2",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        }
      }
    },
    "Toolbox Talks": {
      "name": "Toolbox Talks",
      "id": "66b618a49b37d4e5b9efc8f9",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Planned"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Attended": {
          "label": "Attended",
          "slug": "s6v95jjs",
          "field_type": "userfield"
        },
        "Content": {
          "label": "Content",
          "slug": "sa1208ddda",
          "field_type": "textfield"
        },
        "File": {
          "label": "File",
          "slug": "s6716a43a2",
          "field_type": "filefield"
        }
      }
    },
    "Accident Book": {
      "name": "Accident Book",
      "id": "66c4b0a864fb149fd154b455",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description of accident": {
          "label": "Description of accident",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Staff Member": {
          "label": "Staff Member",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Not viewed"
            },
            {
              "value": "in_progress",
              "label": "In Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Accident Date": {
          "label": "Accident Date",
          "slug": "due_date",
          "field_type": "datefield"
        },
        "Severity": {
          "label": "Severity",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Serious"
            },
            {
              "value": "high",
              "label": "Moderate"
            },
            {
              "value": "low",
              "label": "Minor"
            },
            {
              "value": "lHDjt",
              "label": "Near Miss"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Reported to HSE": {
          "label": "Reported to HSE",
          "slug": "se9969485f",
          "field_type": "yesnofield"
        },
        "Location": {
          "label": "Location",
          "slug": "sd1f6d3b46",
          "field_type": "textfield"
        },
        "Actions Required": {
          "label": "Actions Required",
          "slug": "s1d4193db3",
          "field_type": "checklistfield"
        }
      }
    },
    "Health and Safety Documents": {
      "name": "Health and Safety Documents",
      "id": "66ffb6fbe7417193be3449fa",
      "structure": {
        "Document Name": {
          "label": "Document Name",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "textareafield"
        },
        "Owner": {
          "label": "Owner",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
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
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Active"
            },
            {
              "value": "f661180c-5df1-44b4-941d-32014221d93d",
              "label": "Archived"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Published": {
          "label": "Date Published",
          "slug": "s538214425",
          "field_type": "datefield"
        },
        "Type": {
          "label": "Type",
          "slug": "s2b9976436",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "916839fe-8293-45ce-86e5-79a2d1816dbb",
              "label": "Contract"
            },
            {
              "value": "0af28fdc-0524-409d-bde4-8544acd168ae",
              "label": "Service Agreement"
            },
            {
              "value": "4be41ffc-89cf-4728-9e65-31c9a2fa5ac1",
              "label": "Statement of Work"
            },
            {
              "value": "1d5ce5fa-b93c-4906-9890-8b1696f5b325",
              "label": "Change Request"
            },
            {
              "value": "995a0437-0420-4f99-b00f-c67db9e37527",
              "label": "Standard Operating Procedure (SOP)"
            },
            {
              "value": "51f7a8f3-c53f-4ee4-b323-945e207421d1",
              "label": "Legal Document"
            },
            {
              "value": "f8f0a8b6-5162-4055-b911-558c418a2688",
              "label": "Sales Agreement"
            },
            {
              "value": "bf38e631-a14e-405f-9561-24278018545e",
              "label": "Partnership Agreement"
            },
            {
              "value": "99401311-074e-4a33-a172-268fd851da81",
              "label": "Affiliate Agreement"
            },
            {
              "value": "f9c7be5a-043c-4419-bbb0-a28ad835eec6",
              "label": "Other"
            }
          ]
        },
        "Review Status": {
          "label": "Review Status",
          "slug": "sd260374c0",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Pending Review"
            },
            {
              "value": "ready_for_review",
              "label": "Revisions Required"
            },
            {
              "value": "complete",
              "label": "Review Complete"
            }
          ]
        },
        "Reviewer": {
          "label": "Reviewer",
          "slug": "sfbc13598a",
          "field_type": "textfield"
        },
        "Review Date": {
          "label": "Review Date",
          "slug": "s8e7d792d8",
          "field_type": "datefield"
        },
        "Document(s)": {
          "label": "Document(s)",
          "slug": "s19c084364",
          "field_type": "filefield"
        },
        "Document (Link)": {
          "label": "Document (Link)",
          "slug": "sd3de0e612",
          "field_type": "linkfield"
        },
        "Review Action Items": {
          "label": "Review Action Items",
          "slug": "sabd731fbc",
          "field_type": "checklistfield"
        }
      }
    },
    "Personal development Plan": {
      "name": "Personal development Plan",
      "id": "66ffb89daafe10f52c58bebf",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        }
      }
    },
    "Training": {
      "name": "Training",
      "id": "66ffb8ec3074ce3794344b5b",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Staff Completed": {
          "label": "Staff Completed",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Scheduled"
            },
            {
              "value": "in_progress",
              "label": "Required"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Scheduled": {
          "label": "Scheduled",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Date Completed": {
          "label": "Date Completed",
          "slug": "s51d0468ef",
          "field_type": "datefield"
        },
        "Internal": {
          "label": "Internal",
          "slug": "s162ebc176",
          "field_type": "yesnofield"
        }
      }
    },
    "Equipment checks": {
      "name": "Equipment checks",
      "id": "66ffb935f2e3f87465f59540",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Last Checked": {
          "label": "Last Checked",
          "slug": "s5688ad911",
          "field_type": "datefield"
        }
      }
    },
    "Training67000c1d5a2edf412b0fe01b": {
      "name": "Training",
      "id": "67000c1d5a2edf412b0fe01b",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "Description": {
          "label": "Description",
          "slug": "description",
          "field_type": "richtextareafield"
        },
        "Assigned To": {
          "label": "Assigned To",
          "slug": "assigned_to",
          "field_type": "userfield"
        },
        "Status": {
          "label": "Status",
          "slug": "status",
          "field_type": "statusfield",
          "choices": [
            {
              "value": "backlog",
              "label": "Backlog"
            },
            {
              "value": "in_progress",
              "label": "In Process"
            },
            {
              "value": "ready_for_review",
              "label": "Ready for Review"
            },
            {
              "value": "complete",
              "label": "Complete"
            }
          ]
        },
        "Due Date": {
          "label": "Due Date",
          "slug": "due_date",
          "field_type": "duedatefield"
        },
        "Priority": {
          "label": "Priority",
          "slug": "priority",
          "field_type": "singleselectfield",
          "choices": [
            {
              "value": "urgent",
              "label": "Urgent"
            },
            {
              "value": "high",
              "label": "High"
            },
            {
              "value": "normal",
              "label": "Normal"
            },
            {
              "value": "low",
              "label": "Low"
            }
          ]
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        }
      }
    },
    "RO Fuel References": {
      "name": "RO Fuel References",
      "id": "670a923e8c35b17e9ee51b42",
      "structure": {
        "Title": {
          "label": "Title",
          "slug": "title",
          "field_type": "recordtitlefield"
        },
        "First Created": {
          "label": "First Created",
          "slug": "first_created",
          "field_type": "firstcreatedfield"
        },
        "Last Updated": {
          "label": "Last Updated",
          "slug": "last_updated",
          "field_type": "lastupdatedfield"
        },
        "Followed by": {
          "label": "Followed by",
          "slug": "followed_by",
          "field_type": "userfield"
        },
        "Open Comments": {
          "label": "Open Comments",
          "slug": "comments_count",
          "field_type": "commentscountfield"
        },
        "Auto Number": {
          "label": "Auto Number",
          "slug": "autonumber",
          "field_type": "autonumberfield"
        },
        "Fuel Type": {
          "label": "Fuel Type",
          "slug": "sdcdb83eca",
          "field_type": "linkedrecordfield"
        },
        "Generation Station": {
          "label": "Generation Station",
          "slug": "sfa1940c7a",
          "field_type": "linkedrecordfield"
        },
        "Fuel Reference": {
          "label": "Fuel Reference",
          "slug": "sa7e52d889",
          "field_type": "textfield"
        }
      }
    }
  }
} as const;

export default tables;