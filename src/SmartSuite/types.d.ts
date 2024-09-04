type RequestHeaders = Record<"Authorization" | "Account-Id", string>
    | Record<"Content-Type", "application/json;charset=utf-8">;

interface filterElement {
    field: string,
    comparison: ("is" | "is_not" | "is_empty" | "is_not_empty" | "contains" | "not_contains") //strings
    | ("is_equal_to" | "is_not_equal_to" | "is_greater_than" | "is_less_than" | "is_equal_or_greater_than" | "is_equal_or_less_than" | "is_empty" | "is_not_empty") //numbers
    | ("is" | "is_not" | "is_any_of" | "is_none_of" | "is_empty" | "is_not_empty") //single select
    | ("has_any_of" | "has_all_of" | "is_exactly" | "has_none_of" | "is_empty" | "is_not_empty") //multiple select/tag
    | ("is") //yes/no
    | ("is" | "is_not" | "is_before" | "is_on_or_before" | "is_on_or_after" | "is_empty" | "is_not_empty") //date
    | ("is" | "is_not" | "is_before" | "is_on_or_before" | "is_on_or_after" | "is_empty" | "is_not_empty" | "is_overdue" | "is_not_overdue") //due date
    | ("file_name_contains" | "file_type_is" | "is_empty" | "is_not_empty") //Files & Images
    | (
        "contains" | "not_contains" | "has_any_of" //(array of record ids)
        | "has_all_of" //(array of record ids)
        | "is_exactly" //(array containing single record id)
        | "has_none_of" //(array of record ids)
        | "is_empty" //(pass null as value)
        | "is_not_empty" //(pass null as value))
    ) //linked record
    | ("is_empty" | "is_not_empty") //Smartdoc, checklist

    value: (string | number | string[])
}
interface FilterBody {
    "filter": {
        "operator": "and" | "or",
        "fields": filterElement[],
    }
}

interface ExistingRecord {
    id: string;
    [slug: string]: unknown
};
type FilterComparison = string; //TODO: support different types of comparison and adapt allowed comparisons based on input field type

