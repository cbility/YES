//docs: https://developers.smartsuite.com/docs/intro

//utility types 
const notWriteable = Symbol('NotWriteable');
type NotWriteable<T> = T & { [notWriteable]: true }; //may be used to remove types if including them in an update request cases an error
//TODO: check if there are any of the above types

type Update<T> = {
    [K in keyof T]: T[K] extends Readonly<any> ? T[K] | undefined : T[K]; //extends NotWriteable<any> ? never : T[K];
}; //makes all readonly properties optional and removes all NotWriteable properties

//FIELD CELLS

interface FirstCreatedFieldCell extends null {
    readonly by: string; //user id
    readonly on: string; //datestring
}
type LastUpdatedFieldCell = FirstCreatedFieldCell;
interface AddressFieldCell extends null {
    location_address?: string;
    location_address2?: string;
    location_city?: string;
    location_state?: string;
    location_zip?: string;
    location_country?: string;
    location_latitude?: string;
    location_longitude?: string;
    readonly sys_root: string; //Concatenated Address string
}
//Checklist Interfaces
interface ChecklistContent {
    data: {
        type: "doc";
        content: Array<{
            type: "paragraph";
            attrs: {
                textAlign: string | null; // can be null
            };
            content: Array<{
                type: "text";
                text: string; // actual text content
            }>;
        }>;
    };
    html: string; // HTML representation of the content
    preview: string; // Preview text
}
interface ChecklistItem {
    id: string; // Unique identifier for the item
    content: ChecklistContent; // Content of the item
    completed: boolean; // Indicates if the item is completed
    assignee: string; // ID of the user assigned to the item
    due_date: string; // Due date in string format (ISO 8601)
    completed_at: string | null; // Completion timestamp or null if not completed
}

interface ChecklistFieldCell extends null {
    items: ChecklistItem[]; // Array of checklist items
    total_items: number; // Total number of items
    completed_items: number; // Total number of completed items
}

interface ColorPickerFieldCell extends null {
    name?: string; //Color name (optional)
    value: string //Color hex value
}
interface FullNameFieldCell extends null {
    title?: number; //1: "Mr.", 2: "Mrs."... numbers larger than 2 are custom and per field
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    readonly sys_root: string; //Full (concatenated) name
}
interface IPAddressFieldCell extends null {
    country_code: string //2 character country code
    address: string	//IPv4 or IPv6 address
}
interface PhoneNumberFieldCell extends null {
    phone_country: string; // Alpha-2 code for the phone number. http://help.smartsuite.com/en/articles/6455502-rest-api-country-names-codes
    phone_number: string; //Valid separators include space, hyphen and period, as well as parenthesis. The number can also be specified without separators, e.g. “9135555555"
    phone_type: number; /*An integer representing the type of phone number from the list below:
    OFFICE = 1
    MOBILE = 2
    HOME = 4
    FAX = 5
    MAIN = 6
    OTHER = 8 */
    readonly sys_root: string | ReadOnly; //Unformatted phone number (read only)
    readonly sys_title: string | ReadOnly; //Formatted phone number (read only)
    phone_extension?: string; //should contain alphanumeric characters only and no spaces. Note that it will be displayed by the field with an “x” prefix
}[]

//SmartDoc interfaces
interface Mark {
    type: string; // e.g., "strong"
}
interface TextContent {
    type: string; // e.g., "text"
    text: string; // Actual text content
    marks?: Mark[]; // Optional array of marks (e.g., bold, italic)
}
interface Paragraph {
    type: string; // e.g., "paragraph"
    attrs: {
        textAlign: string | null; // can be null
    };
    content: TextContent[]; // Array of text content
}
interface SmartDocData {
    type: string; // e.g., "doc"
    content: Paragraph[]; // Array of paragraphs
}
interface SmartDocFieldCell extends null {
    data: SmartDocData; // SmartDoc data
    html: string; // HTML representation of the SmartDoc's content
    preview: string; // Text representation of the SmartDoc's content
}
interface SocialNetworkFieldCell extends null {
    Facebook_username: string //Facebook username
    twitter_username: string //Twitter username
    instagram_username: string //Instagram username
    linkedin_username: string //LinkedIn username
}
interface DateFieldCell extends null {
    date: string; //datestring
    include_time: boolean;
}
interface DateRangeFieldCell extends null {
    from_date: DateFieldCell;
    to_date: DateFieldCell;
}
interface DueDateFieldCell extends null {
    from_date?: DateFieldCell;
    to_date: DateFieldCel;
    readonly is_overdue: boolean; //True if overdue (read-only)
    readonly status_is_completed: boolean; //True if complete (read-only)
    readonly status_updated_on: boolean; //Date that the due date's linked status field was last updated (read-only)
}
//Time Tracking log interfaces

interface TimeLog {
    user_id: string; // ID of the member associated with the log entry
    date_time: string; // Date and time of entry in ISO format
    duration: number; // Duration in seconds
    time_range: DateRangeFieldCell | null; // Nullable time range for the event
    timer_start: string | null; // Start time of the timer or null
    note?: string; // Note text attached to the time entry
}

// Define the structure of the time tracking log
interface TimeTrackingLogFieldCell extends null {
    time_track_logs: TimeLog[]; // Array of time log entries
    total_duration: number; // Total time in seconds
}
interface VoteFieldCell extends null {
    total_votes: number //Total votes for the record
    votes: Array<{
        user_id: string//	Member Id of the voter
        date: string//	Date of the vote in YYYY-MM-DD format
    }>
}
interface StatusFieldCell extends null {
    value: string; //value slug, not literal value 
    readonly updated_on: string; //datestring
}
//Files and Images interfaces
interface FileMetadata {
    readonly container: string; // SmartSuite internal use
    readonly filename: string; // Name of the file
    readonly key: string; // SmartSuite internal use
    readonly mimetype: string; // MIME type of the file
    readonly size: number; // Size of the file in bytes
}
interface FilesAndImagesFieldCell extends null {
    readonly handle: string; // The file handle to retrieve the file’s data
    readonly metadata: FileMetadata; // Metadata containing file information
    readonly transform_options: never; // Always empty, used internally by SmartSuite
    readonly icon: string; // Name of the SmartSuite icon displayed for the file, if one exists
    readonly file_type: string; // Short file type (if known to SmartSuite)
    readonly created_on: string; // ISO date when the file was added
    readonly updated_on: string; // ISO date when the file was last updated
    description?: string; // Reserved for future use (attaching a note to the file/image)
}[]
interface SignatureFieldCell extends null extends null {
    text: string; //Text entered as signature. Empty string if signature was drawn.
    image_base64: string //Base64-encoded drawn image data, null if text was entered as signature.
}

//TODO: switch to discriminated union type structure that determines teh type on a field based on it's field type identifier string as returns from the API

type SmartSuiteCustomFieldCell =
    | FirstCreatedFieldCell
    | LastUpdatedFieldCell
    | AddressFieldCell
    | ChecklistFieldCell
    | ColorPickerFieldCell
    | FullNameFieldCell
    | IPAddressFieldCell
    | PhoneNumberFieldCell
    | SmartDocFieldCell
    | SocialNetworkFieldCell
    | DateFieldCell
    | DateRangeFieldCell
    | DueDateFieldCell
    | TimeTrackingLogFieldCell
    | VoteFieldCell
    | StatusFieldCell
    | FilesAndImagesFieldCell
    | SignatureFieldCell;


type SmartSuitePrimitiveCell = null | string | number | boolean;

type SmartSuiteCell =
    | SmartSuitePrimitiveCell
    | SmartSuiteCustomFieldCell
    | SmartSuiteCell[]; // Allows nesting

interface Team {
    "first_created": FirstCreatedFieldCell;
    "last_updated": LastUpdatedFieldCell;
    "application_id": string;
    "ranking": {
        "default": string
    };
    "id": string;
    "application_slug": "teams";
    "deleted_date": {
        "date": null | string;
    },
    "name": string;
    "color": [
        {
            "value": string
        }
    ];
    "type": string;
    "status": {
        "value": string;
        "updated_on": string;
    },
    "owners": string[]; //user IDs
    "members": string[]; //user IDs;
}

//RECORD CELLS
interface SmartSuiteRecord { id: string, application_id: string, [slug: string]: SmartSuiteCell }

//API FUNCTIONS
interface FilterElement {
    field: string,
    comparison: FilterComparison
    value: SmartSuiteCell
}
interface FilterBody {
    "filter": {
        "operator": "and" | "or",
        "fields": FilterElement[],
    }
}

type StringFilterComparison = ("is" | "is_not" | "is_empty" | "is_not_empty" | "contains" | "not_contains");
type NumberFilterComparison = ("is_equal_to" | "is_not_equal_to" | "is_greater_than" | "is_less_than" | "is_equal_or_greater_than" | "is_equal_or_less_than" | "is_empty" | "is_not_empty");
type SingleSelectFilterComparison = ("is" | "is_not" | "is_any_of" | "is_none_of" | "is_empty" | "is_not_empty");
type MultipleSelectFilterComparison = ("has_any_of" | "has_all_of" | "is_exactly" | "has_none_of" | "is_empty" | "is_not_empty");
type YesNoFilterComparison = ("is");
type DateFilterComparison = ("is" | "is_not" | "is_before" | "is_on_or_before" | "is_on_or_after" | "is_empty" | "is_not_empty");
type DueDateFilterComparison = ("is" | "is_not" | "is_before" | "is_on_or_before" | "is_on_or_after" | "is_empty" | "is_not_empty" | "is_overdue" | "is_not_overdue");
type FilesFilterComparison = ("file_name_contains" | "file_type_is" | "is_empty" | "is_not_empty");
type LinkedRecordFilterComparison = (
    "contains" | "not_contains" | "has_any_of" //(array of record ids)
    | "has_all_of" //(array of record ids)
    | "is_exactly" //(array containing single record id)
    | "has_none_of" //(array of record ids)
    | "is_empty" //(pass null as value)
    | "is_not_empty" //(pass null as value))
)
type SmartDocFilterComparison = ("is_empty" | "is_not_empty");
type ChecklistFilterComparison = ("is_empty" | "is_not_empty");

type FilterComparison = StringFilterComparison | NumberFilterComparison | SingleSelectFilterComparison | MultipleSelectFilterComparison | YesNoFilterComparison | DateFilterComparison | DueDateFilterComparison | FilesFilterComparison | LinkedRecordFilterComparison | SmartDocFilterComparison | ChecklistFilterComparison;

///////RECORD TYPES///////////////

interface RHIAccountRecordUpdate extends SmartSuiteRecord {
    title: string;
    s27463de03: string[]; //AS email
    se00b833bd: string[]; //Remittance Email
    s94016b86e: string; //AS Job Title
    s5af20d21e: Update<FullNameFieldCell>; //AS Name
    sa82805803: string; //Company Number
    s898c7779e: Update<PhoneNumberFieldCell>; //Company Phone
    s906ceac06: Update<AddressFieldCell> //Account Address
}

interface RHILoginRecord extends SmartSuiteRecord {
    id: string;
    s362676897: "eRuOB"/*authorised signatory*/ | "fIKh7" /*additional user*/ | "FrLDR" /*undetermined*/;
    //title: string;
    //sb4e5173b6: string;
}

interface RHIRecord extends SmartSuiteRecord {
    //TODO: add fields
}