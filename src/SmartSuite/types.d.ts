type RequestHeaders = Record<"Authorization" | "Account-Id", string>
    | Record<"Content-Type", "application/json;charset=utf-8">;

//docs: https://developers.smartsuite.com/docs/intro

interface SmartSuiteCustomFieldCell { //single instance of a particular (non-primitive) field in a particular record
}

interface DueDateFieldCell extends SmartSuiteCustomFieldCell {
    from_date: string; //YYYY-MM-DDTHH:MM:SS
    to_date: string; //YYYY-MM-DDTHH:MM:SS
    is_overdue: Boolean; //True if overdue (read-only)
    status_is_completed; //True if complete (read-only)
    status_updated_on; //Date that the due date's linked status field was last updated (read-only)
}

type SmartSuiteCell = string | number | Boolean | SmartSuiteCustomFieldCell | unknown; //TODO: Remove unknown when remaining fields are implemented 

interface FilterElement {
    field: string,
    comparison: FilterComparison
    value: (string | number | string[])
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