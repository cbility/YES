const tables = {
  "updatesTable": {
    "id": "663d3d23a1a0542114b1ac24",
    "name": "RHI Updates",
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
        "label": "Username",
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
      "Password": {
        "label": "Password",
        "slug": "sb4e5173b6",
        "field_type": "textfield"
      },
      "Password Correct": {
        "label": "Password Correct",
        "slug": "s300305bbd",
        "field_type": "yesnofield"
      },
      "Login Type": {
        "label": "Login Type",
        "slug": "s362676897",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "eRuOB",
            "label": "Authorised Signatory"
          },
          {
            "value": "fIKh7",
            "label": "Additional User"
          },
          {
            "value": "FrLDR",
            "label": "Undetermined"
          }
        ]
      },
      "Account": {
        "label": "Account",
        "slug": "s69317bdee",
        "field_type": "linkedrecordfield"
      },
      "Record ID (System Field)": {
        "label": "Record ID (System Field)",
        "slug": "s949848d7e",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "RHI Record IDs (System Field)": {
        "label": "RHI Record IDs (System Field)",
        "slug": "sdf91c49ec",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Active Project Leads": {
        "label": "Active Project Leads",
        "slug": "s30844f0f2",
        "field_type": "lookupfield",
        "target_field_type": "userfield"
      },
      "Active Project/Support Service Count": {
        "label": "Active Project/Support Service Count",
        "slug": "s3cfd6f16b",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
      },
      "Active Support Service Managers": {
        "label": "Active Support Service Managers",
        "slug": "s28ce0ad2c",
        "field_type": "lookupfield",
        "target_field_type": "userfield"
      },
      "Checked for Duplicates": {
        "label": "Checked for Duplicates",
        "slug": "s0c2cc1f46",
        "field_type": "yesnofield"
      },
      "Username (Password)": {
        "label": "Username (Password)",
        "slug": "s48c811a99",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Link to Updates": {
        "label": "Link to Updates",
        "slug": "saf0c62v",
        "field_type": "linkedrecordfield"
      },
      "Last Portal Update": {
        "label": "Last Portal Update",
        "slug": "s7a0e07a25",
        "field_type": "formulafield",
        "target_field_type": "datefield"
      },
      "RHIs": {
        "label": "RHIs",
        "slug": "sf328ab45e",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
      },
      "Sync with Portal": {
        "label": "Sync with Portal",
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
        "label": "Account Name",
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
      "ORG number": {
        "label": "ORG number",
        "slug": "s20a1cb3b6",
        "field_type": "textfield"
      },
      "RHIs": {
        "label": "RHIs",
        "slug": "skjrn9vl",
        "field_type": "linkedrecordfield"
      },
      "Additional Users": {
        "label": "Additional Users",
        "slug": "s9b3c22274",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "Record ID (System Field)": {
        "label": "Record ID (System Field)",
        "slug": "sa91f18b97",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Link to RHI Payments": {
        "label": "Link to RHI Payments",
        "slug": "suf1q9sl",
        "field_type": "linkedrecordfield"
      },
      "AS Username": {
        "label": "AS Username",
        "slug": "s200891b35",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "Logins": {
        "label": "Logins",
        "slug": "splq0phf",
        "field_type": "linkedrecordfield"
      },
      "# Logins": {
        "label": "# Logins",
        "slug": "sb7e3ff7d9",
        "field_type": "countfield"
      },
      "Account Address": {
        "label": "Account Address",
        "slug": "s906ceac06",
        "field_type": "addressfield"
      },
      "Company Phone": {
        "label": "Company Phone",
        "slug": "s898c7779e",
        "field_type": "phonefield"
      },
      "Company Number": {
        "label": "Company Number",
        "slug": "sa82805803",
        "field_type": "textfield"
      },
      "AS Name": {
        "label": "AS Name",
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
        "label": "AS Email",
        "slug": "s27463de03",
        "field_type": "emailfield"
      },
      "AS Job Title": {
        "label": "AS Job Title",
        "slug": "s94016b86e",
        "field_type": "textfield"
      },
      "Remittance Email": {
        "label": "Remittance Email",
        "slug": "se00b833bd",
        "field_type": "emailfield"
      },
      "AS Password": {
        "label": "AS Password",
        "slug": "s716517628",
        "field_type": "lookupfield",
        "target_field_type": "textfield"
      },
      "Installation Names": {
        "label": "Installation Names",
        "slug": "sea1894395",
        "field_type": "lookupfield",
        "target_field_type": "textfield"
      },
      "Login ID": {
        "label": "Login ID",
        "slug": "s987febca5",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Active Project Leads": {
        "label": "Active Project Leads",
        "slug": "s84b72d2a8",
        "field_type": "lookupfield",
        "target_field_type": "userfield"
      },
      "Active Support Service Manager": {
        "label": "Active Support Service Manager",
        "slug": "s46997b2c4",
        "field_type": "lookupfield",
        "target_field_type": "userfield"
      },
      "Active Project Count": {
        "label": "Active Project Count",
        "slug": "s5f94ecc3e",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
      },
      "# RHIs": {
        "label": "# RHIs",
        "slug": "sda26a212c",
        "field_type": "countfield"
      },
      "Client": {
        "label": "Client",
        "slug": "s80411ea1b",
        "field_type": "linkedrecordfield"
      },
      "Old Account Projects": {
        "label": "Old Account Projects",
        "slug": "szytn4e2",
        "field_type": "linkedrecordfield"
      },
      "New Account Projects": {
        "label": "New Account Projects",
        "slug": "s9o89ja9",
        "field_type": "linkedrecordfield"
      },
      "AS Username (Password)": {
        "label": "AS Username (Password)",
        "slug": "s8cd993db0",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Send Password Reminder": {
        "label": "Send Password Reminder",
        "slug": "s60373ad07",
        "field_type": "yesnofield"
      },
      "Link to Problems": {
        "label": "Link to Problems",
        "slug": "svqfioay",
        "field_type": "linkedrecordfield"
      },
      "Active Service Count": {
        "label": "Active Service Count",
        "slug": "snzffde7",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
      },
      "Active Projects/Services Grouping": {
        "label": "Active Projects/Services Grouping",
        "slug": "sca76164db",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Last Portal Update": {
        "label": "Last Portal Update",
        "slug": "sb04455e7d",
        "field_type": "formulafield",
        "target_field_type": "datefield"
      },
      "Active Projects + Active Services": {
        "label": "Active Projects + Active Services",
        "slug": "sd271b9bcf",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
      },
      "Sync with Portal": {
        "label": "Sync with Portal",
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
        "label": "RHI Number",
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
      "Accreditation Date": {
        "label": "Accreditation Date",
        "slug": "s2e1875a9c",
        "field_type": "datefield"
      },
      "QHLF (kWh)": {
        "label": "QHLF (kWh)",
        "slug": "s788a692be",
        "field_type": "numberfield"
      },
      "RHI Account": {
        "label": "RHI Account",
        "slug": "s366a5e476",
        "field_type": "linkedrecordfield"
      },
      "Tags": {
        "label": "Tags",
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
        "label": "RHI Installation Name",
        "slug": "s8f22568aa",
        "field_type": "textfield"
      },
      "Technology": {
        "label": "Technology",
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
        "label": "Installation",
        "slug": "sj4xhegu",
        "field_type": "linkedrecordfield"
      },
      "Accreditation Status": {
        "label": "Accreditation Status",
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
        "label": "Correctly Formatted RHI number (System Field)",
        "slug": "s305f616e7",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Application Submitted": {
        "label": "Application Submitted",
        "slug": "sb79716244",
        "field_type": "datefield"
      },
      "Application Status": {
        "label": "Application Status",
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
        "label": "Thermal Capacity",
        "slug": "sd1c8007fa",
        "field_type": "numberfield"
      },
      "Record ID (System Field)": {
        "label": "Record ID (System Field)",
        "slug": "sdada683b2",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Link to Tasks": {
        "label": "Link to Tasks",
        "slug": "s7uib8r9",
        "field_type": "linkedrecordfield"
      },
      "Name Plate Efficiency/COP": {
        "label": "Name Plate Efficiency/COP",
        "slug": "s4037fc899",
        "field_type": "percentfield"
      },
      "Sustainability Reporting": {
        "label": "Sustainability Reporting",
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
        "label": "Commissioning Date",
        "slug": "s594437604",
        "field_type": "datefield"
      },
      "Number of boilers": {
        "label": "Number of boilers",
        "slug": "s030c8748d",
        "field_type": "numberfield"
      },
      "Boiler Manufacturer": {
        "label": "Boiler Manufacturer",
        "slug": "s42d018586",
        "field_type": "textfield"
      },
      "Boiler Model": {
        "label": "Boiler Model",
        "slug": "s94038cbea",
        "field_type": "textfield"
      },
      "HH110": {
        "label": "HH110",
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
        "label": "HH120",
        "slug": "s21e98e9b5",
        "field_type": "textareafield"
      },
      "Hot Water Meters": {
        "label": "Hot Water Meters",
        "slug": "sb249dfefd",
        "field_type": "numberfield"
      },
      "Steam Meters": {
        "label": "Steam Meters",
        "slug": "s76ea8502f",
        "field_type": "numberfield"
      },
      "Location": {
        "label": "Location",
        "slug": "sb5c903c06",
        "field_type": "addressfield"
      },
      "HK120": {
        "label": "HK120",
        "slug": "s49e310a4c",
        "field_type": "textareafield"
      },
      "Latest Submitted PDS": {
        "label": "Latest Submitted PDS",
        "slug": "s3ea6ec8f7",
        "field_type": "datefield"
      },
      "RHI Start": {
        "label": "RHI Start",
        "slug": "s1179e8b96",
        "field_type": "datefield"
      },
      "Quarter ends": {
        "label": "Quarter ends",
        "slug": "s418ae4140",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "AS Username Lookup": {
        "label": "AS Username Lookup",
        "slug": "sf8e7d9233",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "AS Password Lookup": {
        "label": "AS Password Lookup",
        "slug": "sb28891359",
        "field_type": "lookupfield",
        "target_field_type": "textfield"
      },
      "Meters": {
        "label": "Meters",
        "slug": "sfnp70bs",
        "field_type": "linkedrecordfield"
      },
      "Latest Reading": {
        "label": "Latest Reading",
        "slug": "s1501a92a1",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Submitted Monthly?": {
        "label": "Submitted Monthly?",
        "slug": "s30751960b",
        "field_type": "formulafield",
        "target_field_type": "yesnofield"
      },
      "# Meters": {
        "label": "# Meters",
        "slug": "s49533f67c",
        "field_type": "countfield"
      },
      "Link to Projects": {
        "label": "Link to Projects",
        "slug": "skzpku1l",
        "field_type": "linkedrecordfield"
      },
      "Link to Support Service": {
        "label": "Link to Support Service",
        "slug": "sxq0awu1",
        "field_type": "linkedrecordfield"
      },
      "Active Project Leads": {
        "label": "Active Project Leads",
        "slug": "s64756a5f5",
        "field_type": "lookupfield",
        "target_field_type": "userfield"
      },
      "Active Support Service Manager": {
        "label": "Active Support Service Manager",
        "slug": "s6354c71fe",
        "field_type": "lookupfield",
        "target_field_type": "userfield"
      },
      "Active Support Service Manager (System Field)": {
        "label": "Active Support Service Manager (System Field)",
        "slug": "s64aad08b1",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Link to RHI Status Updates": {
        "label": "Link to RHI Status Updates",
        "slug": "sk32nwft",
        "field_type": "linkedrecordfield"
      },
      "First PDS Start": {
        "label": "First PDS Start",
        "slug": "s6jzhsk8",
        "field_type": "datefield"
      },
      "RHI Support Service Blocking Projects": {
        "label": "RHI Support Service Blocking Projects",
        "slug": "s7bqpjse",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "Logins": {
        "label": "Logins",
        "slug": "sdca76effa",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
      },
      "# Active Projects": {
        "label": "# Active Projects",
        "slug": "s37a8af27c",
        "field_type": "countfield"
      },
      "# Active Services": {
        "label": "# Active Services",
        "slug": "s4ad3d5674",
        "field_type": "countfield"
      },
      "Last Portal Update": {
        "label": "Last Portal Update",
        "slug": "s730590801",
        "field_type": "formulafield",
        "target_field_type": "datefield"
      },
      "Coefficient of Performance (COP)": {
        "label": "Coefficient of Performance (COP)",
        "slug": "sbe757d43c",
        "field_type": "numberfield"
      },
      "Seasonal Performance Factor (SPF)": {
        "label": "Seasonal Performance Factor (SPF)",
        "slug": "sceb80d3b9",
        "field_type": "numberfield"
      },
      "Last RHI portal update (text)": {
        "label": "Last RHI portal update (text)",
        "slug": "sc83301160",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "RHI Start Day": {
        "label": "RHI Start Day",
        "slug": "sdb93b7df8",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
      },
      "Tier 1 cut-off": {
        "label": "Tier 1 cut-off",
        "slug": "s3fc937683",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
      },
      "Active Projects": {
        "label": "Active Projects",
        "slug": "sb4822f926",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "Active Support Service": {
        "label": "Active Support Service",
        "slug": "sf286b84b2",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "Biomass Payment Tariff": {
        "label": "Biomass Payment Tariff",
        "slug": "sb1871170c",
        "field_type": "linkedrecordfield"
      },
      "CHPQA Certification": {
        "label": "CHPQA Certification",
        "slug": "s6d1sm6d",
        "field_type": "linkedrecordfield"
      },
      "Payment Tariff": {
        "label": "Payment Tariff",
        "slug": "sca8acad66",
        "field_type": "linkedrecordfield"
      },
      "Link to Woodsure Numbers": {
        "label": "Link to Woodsure Numbers",
        "slug": "svbfthgp",
        "field_type": "linkedrecordfield"
      },
      "CHPQA Certificates": {
        "label": "CHPQA Certificates",
        "slug": "s5b2837a55",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
      },
      "AS Username": {
        "label": "AS Username",
        "slug": "s52724337f",
        "field_type": "formulafield",
        "target_field_type": "recordtitlefield"
      },
      "AS Password": {
        "label": "AS Password",
        "slug": "s5b55bfbc7",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Site": {
        "label": "Site",
        "slug": "s0c199e397",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
      },
      "Login ID": {
        "label": "Login ID",
        "slug": "sf55feba16",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Sync with Portal": {
        "label": "Sync with Portal",
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
      "RHI": {
        "label": "RHI",
        "slug": "s93fbb49b6",
        "field_type": "linkedrecordfield"
      },
      "RO Generator": {
        "label": "RO Station",
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
        "field_type": "formulafield",
        "target_field_type": "textfield"
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
        "label": "Create Next Invoice",
        "slug": "s0b420e140",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "bnkkn",
            "label": "Don't Create"
          },
          {
            "value": "H30HI",
            "label": "Create Next Invoice"
          },
          {
            "value": "mKpCV",
            "label": "Next Invoice Created"
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
      },
      "Milestone Last Updated": {
        "label": "Milestone Last Updated",
        "slug": "sfc33d2205",
        "field_type": "formulafield",
        "target_field_type": "datefield"
      },
      "RO/REGO Project Type": {
        "label": "RO/REGO Project Type",
        "slug": "s600c94b15",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "o6i9v",
            "label": "Project for an Existing Installation"
          },
          {
            "value": "PsAG4",
            "label": "New Application"
          }
        ]
      },
      "Legacy Invoice Project": {
        "label": "Legacy Invoice Project",
        "slug": "s5454a4792",
        "field_type": "yesnofield"
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
      },
      "Link to Adam Dashboard 1": {
        "label": "Link to Adam Dashboard 1",
        "slug": "sp5d7rwu",
        "field_type": "linkedrecordfield"
      },
      "Link to Adam Dashboard 2": {
        "label": "Link to Adam Dashboard 2",
        "slug": "s0abtae8",
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
        "label": "RO Station",
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
        "label": "Link to Data Submissions",
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
        "label": "Notes",
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
            "label": "Acknowledge overdue invoice"
          }
        ]
      },
      "Overdue Invoices": {
        "label": "Overdue Invoices",
        "slug": "s242aeaf68",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "Legacy Latest ROE": {
        "label": "Legacy Latest ROE",
        "slug": "sd21579061",
        "field_type": "datefield"
      },
      "RHI Capacity": {
        "label": "RHI Capacity",
        "slug": "s142bc74cb",
        "field_type": "lookupfield",
        "target_field_type": "numberfield"
      },
      "Service Type": {
        "label": "Service Type",
        "slug": "sd7b678f0b",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "RO Submission Status": {
        "label": "RO Submission Status",
        "slug": "se0b11fbad",
        "field_type": "statusfield",
        "choices": [
          {
            "value": "complete",
            "label": "Up to Date"
          },
          {
            "value": "backlog",
            "label": "Submission Available"
          },
          {
            "value": "in_progress",
            "label": "Submission Due"
          },
          {
            "value": "mamdK",
            "label": "REGO - Quarter Due"
          },
          {
            "value": "ready_for_review",
            "label": "Submission Due Soon"
          },
          {
            "value": "EUTaG",
            "label": "Submission Overdue"
          }
        ]
      },
      "Link to Portal": {
        "label": "Data Portal Link",
        "slug": "s18dfbbcdd",
        "field_type": "linkfield"
      },
      "Incomplete Projects": {
        "label": "Incomplete Projects",
        "slug": "seecec993c",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "Meter Readings Obtained for": {
        "label": "Meter Readings Obtained for",
        "slug": "s1f88a1b2f",
        "field_type": "datefield"
      },
      "Fuel Quantity Obtained for": {
        "label": "Fuel Quantity Obtained for",
        "slug": "smvxnkzc",
        "field_type": "datefield"
      },
      "Fuel GCV Obtained for": {
        "label": "Fuel GCV Obtained for",
        "slug": "smghu97r",
        "field_type": "datefield"
      },
      "Link to RO Certificate Transfer Agreements": {
        "label": "Link to RO Certificate Transfer Agreements",
        "slug": "sq0lmw6o",
        "field_type": "linkedrecordfield"
      },
      "FIT ID": {
        "label": "FIT ID",
        "slug": "s7a84ca25a",
        "field_type": "textfield"
      },
      "Priority": {
        "label": "Priority",
        "slug": "s14fdcb57a",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "pQjmE",
            "label": "High"
          },
          {
            "value": "fKWgc",
            "label": "Normal"
          }
        ]
      },
      "RO Technology": {
        "label": "RO Technology",
        "slug": "s08bb85355",
        "field_type": "lookupfield",
        "target_field_type": "singleselectfield"
      },
      "RO TIC": {
        "label": "RO TIC",
        "slug": "scd5814340",
        "field_type": "lookupfield",
        "target_field_type": "numberfield"
      },
      "Under 50kWe?": {
        "label": "Under 50kWe?",
        "slug": "s597d17312",
        "field_type": "lookupfield",
        "target_field_type": "formulafield"
      },
      "Main RO Username": {
        "label": "Main RO Username",
        "slug": "s4ddea9daa",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Main RO Password": {
        "label": "Main RO Password",
        "slug": "s8ffa36be1",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Latest RO Submission": {
        "label": "Latest RO Submission",
        "slug": "sd62291ec4",
        "field_type": "lookupfield",
        "target_field_type": "datefield"
      },
      "Fuel Data Retrieval Type": {
        "label": "Fuel Data Retrieval Type",
        "slug": "sa22b438d1",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "WUBuD",
            "label": "Client Supplied (Spreadsheet)"
          },
          {
            "value": "xLpZX",
            "label": "Client Supplied (Images)"
          },
          {
            "value": "E54UQ",
            "label": "Portal Download"
          }
        ]
      },
      "RO Submission Status ID": {
        "label": "RO Submission Status ID",
        "slug": "s9d73d5319",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Data Portal Username": {
        "label": "Data Portal Username",
        "slug": "s27d79ab74",
        "field_type": "textfield"
      },
      "Data Portal Password": {
        "label": "Data Portal Password",
        "slug": "s6efd7df7f",
        "field_type": "textfield"
      },
      "Legacy RO Service": {
        "label": "Legacy RO Service",
        "slug": "scdf380c80",
        "field_type": "yesnofield"
      },
      "Last RO Portal Update": {
        "label": "Last RO Portal Update",
        "slug": "s7911e4ecb",
        "field_type": "lookupfield",
        "target_field_type": "formulafield"
      },
      "Latest RO Submission (text)": {
        "label": "Latest RO Submission (text)",
        "slug": "s3a8ecdfff",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Fuel Classifications": {
        "label": "Fuel Classifications",
        "slug": "s5fccce3ab",
        "field_type": "lookupfield",
        "target_field_type": "singleselectfield"
      },
      "Link to Lab Reports": {
        "label": "Link to Lab Reports",
        "slug": "s29th4tc",
        "field_type": "linkedrecordfield"
      },
      "RO Submission Status Lookup": {
        "label": "RO Submission Status Lookup",
        "slug": "s40cefccf5",
        "field_type": "lookupfield",
        "target_field_type": "statusfield"
      },
      "RO Submission Email Header": {
        "label": "RO Submission Email Header",
        "slug": "s67440a1d4",
        "field_type": "textfield"
      },
      "RO Submission Email Status": {
        "label": "RO Submission Email Status",
        "slug": "s76234c213",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "10YUb",
            "label": "Don't Send"
          },
          {
            "value": "EO7Gh",
            "label": "Send Email"
          }
        ]
      },
      "RO Submission Email Last Sent": {
        "label": "RO Submission Email Last Sent",
        "slug": "s73d2d2218",
        "field_type": "datefield"
      },
      "RO Submission Email Contacts": {
        "label": "RO Submission Email Contacts",
        "slug": "sede536986",
        "field_type": "lookupfield",
        "target_field_type": "emailfield"
      },
      "Submission Email Content Line 1": {
        "label": "Submission Email Content Line 1",
        "slug": "s3fd585b13",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Quarter Endssd4e86e2cf": {
        "label": "Quarter Ends",
        "slug": "sd4e86e2cf",
        "field_type": "lookupfield",
        "target_field_type": "formulafield"
      },
      "Submission Email Content Line 2": {
        "label": "Submission Email Content Line 2",
        "slug": "sj60si6k",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Submission Email Content Line 3": {
        "label": "Submission Email Content Line 3",
        "slug": "sa143a74b8",
        "field_type": "textareafield"
      },
      "Eligible for use fuels": {
        "label": "Eligible for use fuels",
        "slug": "s5d8698a6a",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "Fossil Fuel Calculation": {
        "label": "Fossil Fuel Calculation",
        "slug": "s3a6ea5b67",
        "field_type": "filefield"
      },
      "GCV Measurement Type": {
        "label": "GCV Measurement Type",
        "slug": "s2511e712d",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "7MPH8",
            "label": "Measured"
          },
          {
            "value": "s7gx2",
            "label": "Back Calculated"
          },
          {
            "value": "HAQNY",
            "label": "Not Measured"
          },
          {
            "value": "JjpNd",
            "label": "Measured and Back Calculated"
          }
        ]
      },
      "RO FMS": {
        "label": "RO FMS",
        "slug": "sa570affae",
        "field_type": "filefield"
      },
      "Parasitic Load Measurement Type": {
        "label": "Parasitic Load Measurement Type",
        "slug": "sd5aae2d46",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "6E12S",
            "label": "Not Recorded"
          },
          {
            "value": "gyo8I",
            "label": "Back Calculated"
          },
          {
            "value": "hlbuA",
            "label": "Measured"
          }
        ]
      },
      "RO Station Name": {
        "label": "RO Station Name",
        "slug": "sfd0a78bbc",
        "field_type": "lookupfield",
        "target_field_type": "textfield"
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
            "value": "QLLm6",
            "label": "Invoice Dispute"
          },
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
        "label": "QuickFile Gross Payment",
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
      },
      "First Created Time": {
        "label": "First Created Time",
        "slug": "s1dc1df275",
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
      },
      "Minimum Invoice Price": {
        "label": "Minimum Invoice Price",
        "slug": "srzqz1c4",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
      },
      "Invoice Lookup": {
        "label": "Invoice Lookup",
        "slug": "s00dc0aa1b",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "Project Client": {
        "label": "Project Client",
        "slug": "sd29766e06",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
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
        "label": "Password Correct",
        "slug": "s5ddc18498",
        "field_type": "yesnofield"
      },
      "Record ID": {
        "label": "Record ID",
        "slug": "s5ec7aa36d",
        "field_type": "recordidfield"
      },
      "Login": {
        "label": "Login",
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
      "Password": {
        "label": "Password",
        "slug": "sb4e5173b6",
        "field_type": "textfield"
      },
      "Login Type": {
        "label": "Login Type",
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
          },
          {
            "value": "GnOmU",
            "label": "Undefined"
          }
        ]
      },
      "Registered User": {
        "label": "Registered User",
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
        "label": "Registered Email",
        "slug": "sc87fbb8dc",
        "field_type": "emailfield"
      },
      "Link to Applications": {
        "label": "Link to Applications",
        "slug": "sbpcutpc",
        "field_type": "linkedrecordfield"
      },
      "Notes from Client Conversation": {
        "label": "Notes from Client Conversation",
        "slug": "s3c223637d",
        "field_type": "textfield"
      },
      "Account": {
        "label": "Account",
        "slug": "sdda7386a0",
        "field_type": "linkedrecordfield"
      },
      "Username": {
        "label": "Username",
        "slug": "sc313607a4",
        "field_type": "textfield"
      },
      "Registered Phone": {
        "label": "Registered Phone",
        "slug": "s3a7e85b22",
        "field_type": "textfield"
      },
      "Generating Stations": {
        "label": "Generating Stations",
        "slug": "s97056f479",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
      },
      "Login Type ID": {
        "label": "Login Type ID",
        "slug": "s925bd25e1",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
      },
      "Username (Password)": {
        "label": "Username (Password)",
        "slug": "s5a4640b2b",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Link to RO Updates": {
        "label": "Link to RO Updates",
        "slug": "so4ioqfj",
        "field_type": "linkedrecordfield"
      },
      "Last Portal Update": {
        "label": "Last Portal Update",
        "slug": "sa27938bff",
        "field_type": "formulafield",
        "target_field_type": "datefield"
      }
    }
  },
  "ROStationsTable": {
    "name": "Generating Stations",
    "id": "652b1faba9847148f31cee2a",
    "structure": {
      "Record ID": {
        "label": "Record ID",
        "slug": "s3df9eb05f",
        "field_type": "recordidfield"
      },
      "Station": {
        "label": "Station",
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
      "Oldest ROCs not issued": {
        "label": "Oldest ROCs not issued",
        "slug": "sd2f8e15e8",
        "field_type": "datefield"
      },
      "Oldest REGOs not issued": {
        "label": "Oldest REGOs not issued",
        "slug": "sqih0nxo",
        "field_type": "datefield"
      },
      "Statistics Last Updated": {
        "label": "Statistics Last Updated",
        "slug": "s9c6cfc3d3",
        "field_type": "datefield"
      },
      "Technology": {
        "label": "Technology",
        "slug": "secb786709",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "8338d1ea-2919-4d48-b51e-45f61dde2a5c",
            "label": "Biogas (REGO code = BG)"
          },
          {
            "value": "0148f851-6091-4623-8ce0-233ce9025e39",
            "label": "Biomass (REGO code = BW)"
          },
          {
            "value": "eaf92523-890f-473e-9ef7-8c8ab3bb3dc6",
            "label": "Hydro"
          },
          {
            "value": "52b74297-02bf-4859-9d01-e5ada62ce08a",
            "label": "Hydro (REGO code = HY)"
          },
          {
            "value": "7c5ee7ac-6ea6-472b-b90f-e68168c33988",
            "label": "On-shore wind (REGO code = NW)"
          },
          {
            "value": "d24a6491-6307-4132-a103-e929f89de1db",
            "label": "Solar (REGO code = PV)"
          }
        ]
      },
      "Installation": {
        "label": "Installation",
        "slug": "sfz99ifo",
        "field_type": "linkedrecordfield"
      },
      "Output Data Submissions": {
        "label": "Output Data Submissions",
        "slug": "sc887d3eba",
        "field_type": "linkedrecordfield"
      },
      "Link to Tasks": {
        "label": "Link to Tasks",
        "slug": "sdnwhsct",
        "field_type": "linkedrecordfield"
      },
      "Link to Projects": {
        "label": "Link to Projects",
        "slug": "sanjaztj",
        "field_type": "linkedrecordfield"
      },
      "TIC": {
        "label": "TIC",
        "slug": "s43a238048",
        "field_type": "numberfield"
      },
      "DNC": {
        "label": "DNC",
        "slug": "s318a1bd8a",
        "field_type": "numberfield"
      },
      "Link to Ongoing Support Services": {
        "label": "Link to Ongoing Support Services",
        "slug": "skrj7ch3",
        "field_type": "linkedrecordfield"
      },
      "Link to Applications and Amendments": {
        "label": "Link to Applications and Amendments",
        "slug": "s2adqwt9",
        "field_type": "linkedrecordfield"
      },
      "Station Name": {
        "label": "Station Name",
        "slug": "s67f82378a",
        "field_type": "textfield"
      },
      "Account": {
        "label": "Account",
        "slug": "s3db6ec159",
        "field_type": "linkedrecordfield"
      },
      "Commissioning Date": {
        "label": "Commissioning Date",
        "slug": "s3c8a38ff2",
        "field_type": "datefield"
      },
      "Station Country": {
        "label": "Station Country",
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
          },
          {
            "value": "xbgUf",
            "label": "Wales"
          }
        ]
      },
      "Location": {
        "label": "Location",
        "slug": "s4de120c7e",
        "field_type": "addressfield"
      },
      "OS Reference": {
        "label": "OS Reference",
        "slug": "s527b8570a",
        "field_type": "textfield"
      },
      "REGO Accredited": {
        "label": "REGO Accredited",
        "slug": "s9d4dbdf9a",
        "field_type": "yesnofield"
      },
      "Number of Meters": {
        "label": "Number of Meters",
        "slug": "s417616dd8",
        "field_type": "numberfield"
      },
      "Fuel References": {
        "label": "Fuel References",
        "slug": "s2jqjwbe",
        "field_type": "linkedrecordfield"
      },
      "Scheme": {
        "label": "Scheme",
        "slug": "s0e318cc87",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "31a6e4dc-3544-4ed2-a9ca-814e4f6ece3e",
            "label": "Feed in Tariffs"
          },
          {
            "value": "210c6d3b-72be-4b82-b328-5f8d0a3908f5",
            "label": "None of the above"
          },
          {
            "value": "20ef4c5f-5e2c-45e1-867a-70aac3edca7f",
            "label": "Renewables Obligation"
          }
        ]
      },
      "Last Submission": {
        "label": "Last Submission",
        "slug": "sacbaf74ee",
        "field_type": "datefield"
      },
      "Incomplete Projects": {
        "label": "Incomplete Projects",
        "slug": "sb7211ec4d",
        "field_type": "lookupfield",
        "target_field_type": "recordtitlefield"
      },
      "Technology Text": {
        "label": "Technology Text",
        "slug": "s19b274595",
        "field_type": "textfield"
      },
      "Accreditation Status": {
        "label": "Accreditation Status",
        "slug": "sf6261a94b",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "odVBv",
            "label": "Approved"
          },
          {
            "value": "WhgH3",
            "label": "Pending"
          }
        ]
      },
      "Logins": {
        "label": "Logins",
        "slug": "s39dce3836",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
      },
      "Main Login Username": {
        "label": "Main Login Username",
        "slug": "sb4b5af290",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Main Login Password": {
        "label": "Main Login Password",
        "slug": "sr2b4ww5",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Under 50kWe?": {
        "label": "Under 50kWe?",
        "slug": "s7cafd1054",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Last Portal Update": {
        "label": "Last Portal Update",
        "slug": "se2a37da2c",
        "field_type": "formulafield",
        "target_field_type": "datefield"
      },
      "Last Portal Update (text)": {
        "label": "Last Portal Update (text)",
        "slug": "sc38f7fe2b",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Suspended REGOs Expiring": {
        "label": "Not Issued REGOs Expiring",
        "slug": "s22ebf4c7f",
        "field_type": "formulafield",
        "target_field_type": "datefield"
      },
      "Suspended ROCs Expiring": {
        "label": "Not Issued ROCs Expiring",
        "slug": "s31sego8",
        "field_type": "formulafield",
        "target_field_type": "datefield"
      },
      "Latest ROC Transfer Volume": {
        "label": "Latest ROC Transfer Volume",
        "slug": "s871a25c42",
        "field_type": "numberfield"
      },
      "Latest ROC Transfer Date": {
        "label": "Latest ROC Transfer Date",
        "slug": "s607b2c17d",
        "field_type": "datefield"
      },
      "Latest ROC Transfer Reference": {
        "label": "Latest ROC Transfer Reference",
        "slug": "s6c3d48e5f",
        "field_type": "textfield"
      },
      "Latest REGO Transfer Volume": {
        "label": "Latest REGO Transfer Volume",
        "slug": "suseehjp",
        "field_type": "numberfield"
      },
      "Latest REGO Transfer Date": {
        "label": "Latest REGO Transfer Date",
        "slug": "sudi5ssx",
        "field_type": "datefield"
      },
      "Latest REGO Transfer Reference": {
        "label": "Latest REGO Transfer Reference",
        "slug": "shj331pk",
        "field_type": "textfield"
      }
    }
  },
  "ROAccountsTable": {
    "name": "RO Accounts",
    "id": "665dc5a9eb40433ff6407de9",
    "structure": {
      "Record ID": {
        "label": "Record ID",
        "slug": "sa9c38fd0a",
        "field_type": "recordidfield"
      },
      "Account": {
        "label": "Account",
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
      "Generator (Company) Name": {
        "label": "Generator (Company) Name",
        "slug": "sde6082ea0",
        "field_type": "textfield"
      },
      "REGOs Tradeable": {
        "label": "REGOs Tradeable",
        "slug": "s3fafc589e",
        "field_type": "numberfield"
      },
      "ROCs Tradeable": {
        "label": "ROCs Tradeable",
        "slug": "seqhlzoz",
        "field_type": "numberfield"
      },
      "Link to Stations": {
        "label": "Stations",
        "slug": "smejneyu",
        "field_type": "linkedrecordfield"
      },
      "Organisation Reference": {
        "label": "Organisation Reference",
        "slug": "s44395f753",
        "field_type": "textfield"
      },
      "Company Registration Number": {
        "label": "Company Registration Number",
        "slug": "se11ecff7d",
        "field_type": "textfield"
      },
      "Company Address": {
        "label": "Company Address",
        "slug": "s2cad6c1e7",
        "field_type": "addressfield"
      },
      "Company Phone": {
        "label": "Company Phone",
        "slug": "sd497e422e",
        "field_type": "textfield"
      },
      "Link to Logins": {
        "label": "Logins",
        "slug": "saskuds9",
        "field_type": "linkedrecordfield"
      },
      "Main Login Username": {
        "label": "Main Login Username",
        "slug": "sd5ead46b9",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Main Login Password": {
        "label": "Main Login Password",
        "slug": "s6djt4u3",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Login Record ID": {
        "label": "Login Record ID",
        "slug": "s587ac38d3",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Last Portal Update": {
        "label": "Last Portal Update",
        "slug": "s7a1ef11de",
        "field_type": "formulafield",
        "target_field_type": "datefield"
      },
      "REGOs Pending Transfer": {
        "label": "REGOs Pending Transfer",
        "slug": "s30b0b79f0",
        "field_type": "numberfield"
      },
      "ROCs Pending Transfer": {
        "label": "ROCs Pending Transfer",
        "slug": "s62zh4tq",
        "field_type": "numberfield"
      },
      "Live Projects Count": {
        "label": "Live Projects Count",
        "slug": "se4b12e367",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
      },
      "Live Services Count": {
        "label": "Live Services Count",
        "slug": "sl8ivod8",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
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
      },
      "Link to Adam Dashboard 1": {
        "label": "Link to Adam Dashboard 1",
        "slug": "s2vvvhhi",
        "field_type": "linkedrecordfield"
      },
      "Link to Adam Dashboard 2": {
        "label": "Link to Adam Dashboard 2",
        "slug": "s4fhgks4",
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
  "RHI Submissions": {
    "name": "Data Submissions",
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
        "target_field_type": "recordtitlefield"
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
      },
      "Formula": {
        "label": "Formula",
        "slug": "sd43a76242",
        "field_type": "formulafield",
        "target_field_type": "datefield"
      },
      "Job Category": {
        "label": "Job Category",
        "slug": "scff95c111",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
      },
      "Submission Title": {
        "label": "Submission Title",
        "slug": "s1a644c0d3",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "RO Submission Status": {
        "label": "RO Submission Status",
        "slug": "s9265d66ec",
        "field_type": "lookupfield",
        "target_field_type": "statusfield"
      },
      "Latest RO Submission": {
        "label": "Latest RO Submission",
        "slug": "sc71ceb654",
        "field_type": "lookupfield",
        "target_field_type": "datefield"
      },
      "RO Station": {
        "label": "RO Station",
        "slug": "sai04ud1",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
      },
      "Latest RO Submission Text": {
        "label": "Latest RO Submission Text",
        "slug": "s6c2a0f75a",
        "field_type": "lookupfield",
        "target_field_type": "formulafield"
      },
      "RO Meter Readings Obtained for": {
        "label": "RO Meter Readings Obtained for",
        "slug": "sff7eaa605",
        "field_type": "lookupfield",
        "target_field_type": "datefield"
      },
      "Lab report": {
        "label": "Lab report",
        "slug": "sf89a461d5",
        "field_type": "linkedrecordfield"
      },
      "Lab report required?": {
        "label": "Lab report required?",
        "slug": "s01b7202d2",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "xDgvH",
            "label": "Required"
          },
          {
            "value": "sdfSm",
            "label": "Not Required"
          }
        ]
      },
      "RHI Fuel Classifications": {
        "label": "RHI Fuel Classifications",
        "slug": "s0dbbd7685",
        "field_type": "lookupfield",
        "target_field_type": "singleselectfield"
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
      },
      "Organisations": {
        "label": "Organisations",
        "slug": "sc419467c8",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
      }
    }
  },
  "RO Certificate Transfer Agreements": {
    "name": "RO Certificate Transfer Agreements",
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
      "Contract Effective Range": {
        "label": "Contract Effective Range",
        "slug": "sde917e7fc",
        "field_type": "daterangefield"
      },
      "Transferee": {
        "label": "Transferee",
        "slug": "s470cbc691",
        "field_type": "linkedrecordfield"
      },
      "Record ID": {
        "label": "Record ID",
        "slug": "s8864bfc0f",
        "field_type": "recordidfield"
      },
      "Support Services": {
        "label": "Support Services",
        "slug": "s0eb5697d7",
        "field_type": "linkedrecordfield"
      },
      "Certificate Type": {
        "label": "Certificate Type",
        "slug": "s3fdef42f1",
        "field_type": "singleselectfield",
        "choices": [
          {
            "value": "lquDx",
            "label": "ROC"
          },
          {
            "value": "fdLzM",
            "label": "REGO"
          }
        ]
      },
      "Station Name": {
        "label": "Station Name",
        "slug": "s55cf9a936",
        "field_type": "lookupfield",
        "target_field_type": "textfield"
      },
      "Transferee Number": {
        "label": "Transferee Number",
        "slug": "s9e76273d8",
        "field_type": "lookupfield",
        "target_field_type": "textfield"
      },
      "Data Submission Email Text": {
        "label": "Data Submission Email Text",
        "slug": "s4aa97b8b2",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Overlapping Certificate Transfer Agreements": {
        "label": "Overlapping Certificate Transfer Agreements",
        "slug": "s4afa055ff",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Sister Transfer Agreements": {
        "label": "Sister Transfer Agreements",
        "slug": "s416ce985e",
        "field_type": "lookupfield",
        "target_field_type": "linkedrecordfield"
      },
      "Support Service Manager": {
        "label": "Support Service Manager",
        "slug": "s99a70448b",
        "field_type": "lookupfield",
        "target_field_type": "userfield"
      }
    }
  },
  "RO Updates": {
    "name": "RO Updates",
    "id": "6720ca1b19875260cd1f76c0",
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
      "Update Complete": {
        "label": "Update Complete",
        "slug": "sed70935b7",
        "field_type": "datefield"
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
      "Updated Accounts": {
        "label": "Updated Accounts",
        "slug": "s078b2d75d",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Updated RHIs": {
        "label": "Updated Stations",
        "slug": "sc8ff0756c",
        "field_type": "formulafield",
        "target_field_type": "textfield"
      },
      "Login Count": {
        "label": "Login Count",
        "slug": "sf2662a817",
        "field_type": "countfield"
      },
      "Station Count": {
        "label": "Station Count",
        "slug": "s93e777e47",
        "field_type": "formulafield",
        "target_field_type": "numberfield"
      },
      "Updated RO Logins": {
        "label": "Updated RO Logins",
        "slug": "s691a86db0",
        "field_type": "linkedrecordfield"
      }
    }
  }
} as const;

export default tables;