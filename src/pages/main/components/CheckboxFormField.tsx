import React from "react";
import { FieldsType } from "lib/enums/fields";
import { FormField } from "stores/fieldForm/types";
import { FormItem } from "components/common";

interface Props {
  field: FormField<FieldsType.CHECKBOX>;
}
const CheckboxFormField: React.FC<Props> = ({ field }) => (
  <FormItem label={field.fieldStructure.label} controlId={field.id}>
    <input
      name={field.fieldStructure.name}
      className="form-check-input ms-1"
      type="checkbox"
      required={field.fieldStructure.required || undefined}
      id={field.id}
    />
  </FormItem>
);
export default CheckboxFormField;
