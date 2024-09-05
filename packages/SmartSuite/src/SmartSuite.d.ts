
type RequestHeaders = Record<"Authorization" | "Account-Id", string>
    | Record<"Content-Type", "application/json;charset=utf-8">;

//docs: https://developers.smartsuite.com/docs/intro

interface SmartSuiteCustomFieldCell { //single instance of a particular (non-primitive) field in a particular record
}

interface DueDateFieldCell extends SmartSuiteCustomFieldCell {
    from_date: string; //YYYY-MM-DDTHH:MM:SS
    to_date: string; //YYYY-MM-DDTHH:MM:SS
    is_overdue: boolean; //True if overdue (read-only)
    status_is_completed: boolean; //True if complete (read-only)
    status_updated_on: boolean; //Date that the due date's linked status field was last updated (read-only)
}


interface AddressFieldCell extends SmartSuiteCustomFieldCell {
    location_address?: string;
    location_address2?: string;
    location_city?: string;
    location_state?: string;
    location_zip?: string;
    location_country?: string;
    location_latitude?: string;
    location_longitude?: string;
}

interface FullNameFieldCell extends SmartSuiteCustomFieldCell {
    first_name: string;
    middle_name: string;
    last_name: string;
}

type SmartSuiteCell = null | string | string[] /*linked records*/ | number | boolean | SmartSuiteCustomFieldCell; //TODO: add remaining field types
interface SmartSuiteRecord extends Record<string, SmartSuiteCell> { id: string }

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

interface RHIAccountRecord extends SmartSuiteRecord {
    title: string;
    s27463de03: string[];
    se00b833bd: string[];
    s94016b86e: string;
    s5af20d21e: FullNameFieldCell;
    sa82805803: string;
    s898c7779e: {
        "phone_country": "UK",
        "phone_number": string
    }; s906ceac06: AddressFieldCell
}

interface RHILoginRecord extends SmartSuiteRecord {
    id: string;
    s362676897: "Authorised Signatory" | "Additional User";
    title: string;
    sb4e5173b6: string;
}

interface RHIRecord extends SmartSuiteRecord {
    //TODO: add additional fields
}