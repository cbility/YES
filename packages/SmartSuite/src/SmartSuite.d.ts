
type RequestHeaders = Record<"Authorization" | "Account-Id", string>
    | Record<"Content-Type", "application/json;charset=utf-8">;

//docs: https://developers.smartsuite.com/docs/intro

/* new discriminated union structure - in progress
interface SmartSuiteTable {
    name: string;
    id: string;
    structure: {
        [internalName: string]: {
            label: string;
            slug: string;
            field_type: string;
            target_field_type: string; //give format information for formula fields
        }
    }
}

interface BaseField<T> {
    label: string;
    slug: string;
    field_type: T
}
interface TextField extends BaseField<"text"> {
}
interface NumberField extends BaseField<"number"> {
}
type SmartSuiteField = TextField | NumberField;

interface FieldCell<SmartSuiteField> {
    SmartSuiteField.label === "text""
}

*/
//TODO: finish the above

interface DueDateFieldCell {
    from_date: DateFieldCell;
    to_date: DateFieldCell;
    is_overdue: boolean; //True if overdue (read-only)
    status_is_completed: boolean; //True if complete (read-only)
    status_updated_on: boolean; //Date that the due date's linked status field was last updated (read-only)
}

interface PhoneNumberFieldCell {
    phone_country: string; // Alpha-2 code for the phone number. http://help.smartsuite.com/en/articles/6455502-rest-api-country-names-codes
    phone_number: string; //Valid separators include space, hyphen and period, as well as parenthesis. The number can also be specified without separators, e.g. “9135555555"
    phone_type: number; /*An integer representing the type of phone number from the list below:
    OFFICE = 1
    MOBILE = 2
    HOME = 4
    FAX = 5
    MAIN = 6
    OTHER = 8 */
    sys_root: string | ReadOnly; //Unformatted phone number (read only)
    sys_title: string | ReadOnly; //Formatted phone number (read only)
    phone_extension: string; //should contain alphanumeric characters only and no spaces. Note that it will be displayed by the field with an “x” prefix
}


interface AddressFieldCell {
    location_address: string;
    location_address2: string;
    location_city: string;
    location_state: string;
    location_zip: string;
    location_country: string;
    location_latitude: string;
    location_longitude: string;
}

interface FullNameFieldCell {
    first_name: string;
    middle_name: string;
    last_name: string;
}

interface DateFieldCell {
    date: string; //datestring
    include_time: boolean;
}
interface StatusFieldCell {
    value: string; //value slug, not literal value 
    updated_on: string; //datestring
}
interface FirstCreatedFieldCell {
    by: string; //user id
    on: string; //datestring
}
type SmartSuiteCustomFieldCell = FullNameFieldCell | AddressFieldCell | PhoneNumberFieldCell | DueDateFieldCell | DateFieldCell | StatusFieldCell | FirstCreatedFieldCell /*lookups/* //TODO: add rest of cell types and switch to discriminated union type structure 


*/

type SmartSuiteCell = null | string | string[]  /*linked records, assignees*/ | number | boolean | SmartSuiteCell[] /* lookups */ | SmartSuiteCustomFieldCell; //TODO: add remaining field types

interface SmartSuiteRecord { id: string, application_id: string, [slug: string]: SmartSuiteCell }
//used to update cloud
type SmartSuiteCellUpdate = null | string | string[] /*linked records*/ | number | boolean | Update<SmartSuiteCustomFieldCell>; //TODO: add remaining field types
interface SmartSuiteRecordUpdate { id: string, [slug: string]: SmartSuiteCellUpdate }

//used for excluding readonly fields from update requests
interface ReadOnly extends never { }
type Update<T> = Partial<Exclude<T, ReadOnly>>

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
    keyof
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
    s362676897: "Authorised Signatory" | "Additional User";
    //title: string;
    //sb4e5173b6: string;
}

interface RHIRecord extends SmartSuiteRecord {
    //TODO: add fields
}