import React from "react";
import { FieldsType } from "lib/enums/fields";
import { FormField } from "stores/fieldForm/types";
import { FormItem } from "components/common";

interface Props {
  field: FormField<FieldsType.SELECT>;
}
const SelectFormField: React.FC<Props> = ({ field }) => (
  <FormItem
    label={field.fieldStructure.label}
    controlId={field.id}
  >
    <select name={field.fieldStructure.name} className="form-select" required={field.fieldStructure.required  || undefined} id={field.id}>
      {field.fieldStructure.options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  </FormItem>
);
export default SelectFormField;
