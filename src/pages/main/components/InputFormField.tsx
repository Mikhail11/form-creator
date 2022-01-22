import React from "react";
import { FieldsType } from "lib/enums/fields";
import { FormField } from "stores/fieldForm/types";
import { FormItem } from "components/common";

interface Props {
    field: FormField<FieldsType.INPUT>;
}
const InputFormField: React.FC<Props> = ({ field }) => (
    <FormItem
        label={field.fieldStructure.label}
        controlId={field.id}
    >
        <input
            className="form-control"
            type={field.fieldStructure.type}
            placeholder={field.fieldStructure.placeholder}
            name={field.fieldStructure.name}
            required={field.fieldStructure.required || undefined}
            id={field.id}
        />
    </FormItem>
);
export default InputFormField;
