import requests
import sys

headers = {
        "Authorization": "Token bb7afd0906f8c666a21d15daf1924ff368843cd8",
        "ACCOUNT-ID": "s5ch1upc",}

class Field:
    """
    Represents a field in a SmartSuite record.

    Attributes:
        id (str): Unique identifier for the field.
        field_type (str): Type of the field (e.g., 'text', 'number', 'date').
        field_dict (dict): Dictionary containing additional properties of the field.
    """

    def __init__(self, id: str, field_type: str, field_dict: dict):

        self.id = id
        self.field_type = field_type
        self.field_dict = field_dict # holds the entire dictionary of field properties, including the ID, field type and other properties

class App:
    """
    Represents an application in the SmartSuite system.

    Attributes:
        app_id (str): The unique identifier for the application.
        app_name (str): The name of the application.
        solution_id (str): The ID of the solution associated with the application.
        slug (str): The unique slug of the application.
        fields (dict): A dictionary containing app fields, where keys are field labels,
                       and values are dictionaries with 'slug' and 'field_type' keys.
    """

    def __init__(self, app_id: str, get_data: bool=False, app_name: str=None, solution_id: str=None, fields: dict=None):
        # Store the provided app ID for reference
        self.app_id = app_id
        # Construct the URL for the API endpoint to retrieve app data

        if get_data:
            self.url = f"https://app.smartsuite.com/api/v1/applications/{app_id}"

            # Retrieve app data from the API endpoint and parse the JSON response
            response = requests.get(self.url, headers=headers).json()

            # Extract essential app details from the API response
            self.app_name = response["name"]  # Extract the application name
            self.solution_id = response["solution"]  # Extract the associated solution ID

            # Organize and filter app fields, keeping only 'slug' and 'field_type' for each field
            self.fields = {}
            for field in response['structure']:
                label = field["label"]
                # Filter and retain only 'slug' and 'field_type' keys for each field
                self.fields[label] = {key: value for key, value in field.items() if key in ['slug', 'field_type']}
        else:
            self.app_name = app_name
            self.solution_id = solution_id
            self.fields = {field_label: Field(field_keys.get('slug', None), field_keys.get('field_type', None), field_keys) for field_label, field_keys in fields.items()}

# Initialize App objects for RHIs and ORGs with their respective IDs
RHIs = App(app_id="64d155a9c71c81dc0b41d52d", app_name="RHIs", fields={"RHI Number": {"slug": "title"},
                                                                        "Submission Status": {"slug": "status"},
                                                                        "Accreditation date" : {"slug": "s2e1875a9c"},  
                                                                        "QHLF": {"slug": "s788a692be"},
                                                                        "RHI Installation Name": {"slug": "s8f22568aa"},
                                                                        "Technology": {"slug": "s4285e945a"},
                                                                        "Accreditation Status": {"slug":"sf81a2f775"},
                                                                        "Application Submitted": {"slug":"sb79716244"},
                                                                        "Application Status": {"slug": "saktmxc5"},
                                                                        "Update Data": {"slug": "sc402e67f5"},
                                                                        "Heat Capacity": {"slug": "sd1c8007fa"},
                                                                        "ORG": {"slug": "s366a5e476"}, 
                                                                        "Record ID": {"slug": "sdada683b2"}})

ORGs = App(app_id="64d155a9c71c81dc0b41d527" , app_name = "ORGs", fields={"Record ID": {"slug": "sa91f18b97"}, 
                                                                            "Username": {"slug": "title"},
                                                                            "ORG number": {"slug": "s20a1cb3b6"},
                                                                            "Password": {"slug": "sb4e5173b6"},
                                                                            "Password Correct": {"slug": "s300305bbd"},
                                                                            "Client": {"slug": "sbf79625b1"},
                                                                            "RHIs": {"slug": "skjrn9vl"}})

from functools import wraps

def handle_api_requests(api_function):
    @wraps(api_function)
    def wrapper(*args, **kwargs):

        response, *extra_args = api_function(*args, **kwargs)
        try:
            response.raise_for_status()  # Raise HTTPError for bad responses
        except requests.exceptions.HTTPError as err:
            # Handle HTTP errors (4xx and 5xx status codes) here
            print(f"HTTP Error: {err}")
            # Raise a custom exception or handle the error in another way if needed
            raise ApiError(f"API call failed with status code {response.status_code}")
        except Exception as err:
            # Handle other exceptions here (e.g., network issues, timeouts)
            print(f"Error: {err}")
            # Raise a custom exception or handle the error in another way if needed
            raise CustomError(f"Custom error occurred: {err}")
        
        if len(extra_args) == 1:
            return extra_args[0]
        else:
            return extra_args
        
    return wrapper

# Custom exception classes (optional)
class ApiError(Exception):
    pass

class CustomError(Exception):
    pass


@handle_api_requests
def get_record_details(app_id: str, return_fields: list, filter_fields: dict = {},
                       operator: str="and", comparison: str="is", sort_fields: list=[], sort_order: str="asc"):
    """
    Retrieves record details from a specific application using filters and sorting criteria.

    Args:
        app_id (str): The ID of the application.
        return_fields (list): List of IDs of fields to return for each record.
        filter_fields (dict, optional): Dictionary of filtering criteria. Format {Field ID: [List of field values]}.
        operator (str, optional): The logical operator for combining filter conditions ('and' or 'or').
        comparison (str, optional): Comparison operator for filter conditions ('is', 'contains', etc.). 
            See https://help.smartsuite.com/en/articles/6963760-sorting-and-filtering-records-in-the-rest-api for detail.
        sort_fields (list, optional): List of fields for sorting the results.
        sort_order (str, optional): Sorting order ('asc' for ascending, 'desc' for descending).

    Returns:
        list: List of records containing dict of specified fields based on filters and sorting criteria.
    """
    
    # Constructing the API URL
    url = f"https://app.smartsuite.com/api/v1/applications/{app_id}/records/list/"

    # Creating a list of filter dictionaries
    filter_list = [{"field": field, "comparison": comparison, "value": value}
                   for field, values in filter_fields.items()
                   for value in values]

    # Constructing the request body
    body = {}
    if filter_fields:
        body["filter"] = {"operator": operator, "fields": filter_list}
    if sort_fields:
        body["sort"] = [{"field": field, "direction": sort_order} for field in sort_fields]

    # Making a POST request to the API
    response = requests.post(url, headers=headers, json=body)

    # Parsing the json response and extracting specified fields from the response items
    records = [{field: record[field] for field in return_fields} for record in response.json()['items']]
    
    return response, records


def get_RHIs_to_update():
    """
    Fetches and organizes RHI numbers, usernames, and passwords from the SmartSuite system.

    Returns:
        list: a list of dicts containing ORG record IDs, usernames, passwords, and list of RHI numbers.
            Each RHI number is a dict containing the RHI record ID and the corresponding RHI number

    This function fetches RHI details if the 'Update Data' flag is set to True,
    groups RHIs by their corresponding ORGs, fetches ORG details for each group,
    and creates a list of dictionaries associating users with the RHIs in their account.

    Usage:
    >>> RHIs_to_update = get_RHIs_to_update()
    """

    # Fetch RHI details with specific fields and filter based on 'Update Data' flag
    RHI_details = get_record_details(
        RHIs.app_id, 
        [RHIs.fields['RHI Number'].id, RHIs.fields['ORG'].id, RHIs.fields['Record ID'].id],
        filter_fields={RHIs.fields['Update Data'].id: [True]}
    )  # Fetch RHI details based on specific fields and filter conditions

    # Group RHIs by their corresponding ORGs
    RHIs_grouped_by_ORG = group(RHI_details, RHIs.fields['ORG'].id)  # Groups RHIs by their corresponding ORG IDs

    # Define the fields to populate for each ORG
    ORG_fields_to_populate = [
        ORGs.fields['Record ID'].id,
        ORGs.fields['Username'].id,
        ORGs.fields['Password'].id,
        ORGs.fields['Password Correct'].id
    ]

    # Hydrate the grouped RHIs with ORG details
    RHIs_grouped_by_user = hydrate(
        RHIs_grouped_by_ORG,
        RHIs.fields['ORG'].id,
        ORGs.app_id,
        ORGs.fields['Record ID'].id,
        ORG_fields_to_populate
    ) 

    return RHIs_grouped_by_user  # Returns the organized list of dictionaries containing RHI details



def group(list_to_group, key_to_group_by):
    """
    Groups a list of records based on a specified key and returns a list of dictionaries
    representing the grouped records.

    Args:
        list_to_group (list): A list of dictionaries representing records to be grouped.
        key_to_group_by (str): The key in the dictionaries used for grouping.

    Returns:
        list: A list of dictionaries where each dictionary contains a unique group value
              and the associated records sharing that group value.
    """
    grouped_list = []  # Initialize the list to store the filtered dictionaries
    grouped_values = set() # Initialize a set to store values already grouped
    
    # Iterate through each record in the list of items to be grouped
    for record in list_to_group:
        # Iterate through each group value associated with the current record
        for group_value in record.get(key_to_group_by):
            # Check if the group value is not already processed (not in grouped_values set)
            if group_value not in grouped_values:
                # Create a list of records that share the same group value
                records_in_group = [
                    record_in_this_group
                    for record_in_this_group in list_to_group
                    if group_value in record_in_this_group.get(key_to_group_by)
                ]
                # Add a dictionary to grouped_list representing the grouped records
                grouped_list.append({
                    key_to_group_by: group_value,
                    "items": records_in_group
                })
                # Add the processed group value to the grouped_values set
                grouped_values.add(group_value)
    
    # Return the list containing dictionaries representing grouped records
    return grouped_list



    
def hydrate(list_to_hydrate: list, hydrate_target_field: str, hydrate_from_app_id: str, record_ID_field: str, field_IDs_to_populate: list):
    """
    Replaces linked record IDs with details from the linked records in another app (the "hydrating" app).

    Args:
        list_to_hydrate (list): A list of dictionaries representing records containing a linked record field.
        hydrate_target_field (str): The ID of the linked record field.
        hydrate_from_app_id (str): The ID of the application from which to fetch record details.
        record_ID_field (str): The ID of the record ID field in the hydrating app.
        field_IDs_to_populate (list): fields to populate in the hydrated records.

    Returns:
        list: A list of dictionaries where linked record IDs are replaced with their corresponding details.
    """
    
    # Ensure that the record_ID_field is included in the fields to populate, if not explicitly specified
    if record_ID_field not in field_IDs_to_populate:
        field_IDs_to_populate.append(record_ID_field)

    # Fetch hydrated record from the hydrating app using record IDs from the target_key field in list_to_hydrate
    record_details = get_record_details(
        hydrate_from_app_id,
        field_IDs_to_populate,
        filter_fields={record_ID_field: [record[hydrate_target_field] for record in list_to_hydrate]},
        operator="or"
    )

    # Create a dictionary to map record IDs to their respective details
    hydrating_dict = {record[record_ID_field]: record for record in record_details}

    # Create a new list with linked record IDs replaced by their details
    hydrated_list = []
    for record in list_to_hydrate:
        hydrated_list.append({field: hydrating_dict[value] if field == hydrate_target_field else value for field, value in record.items()})

    # Return the updated list with linked record details
    return hydrated_list


