import React from "react";
import { useFieldFormContext } from "stores/fieldForm/context";
import { FormField } from "stores/fieldForm/types";
import { editExistedField, removeField } from "stores/fieldForm/actions";
import { FieldsType } from "lib/enums/fields";
import InputFormField from "./InputFormField";
import CheckboxFormField from "./CheckboxFormField";
import SelectFormField from "./SelectFormField";
import EditFormItem from "./EditFormItem";

const FormPreviewer = () => {
  const { state, dispatch } = useFieldFormContext();
  const handleDelete = (id: string) => () => {
    removeField(dispatch, id);
  };
  const handleEdit = (id: string) => () => {
    editExistedField(dispatch, id);
  };
  return (
    <form className="form-group">
      <fieldset>
        {state.fields.map((field) => {
          switch (field.fieldType) {
            case FieldsType.INPUT:
              return (
                <EditFormItem
                  key={field.id}
                  onEdit={handleEdit(field.id)}
                  onDelete={handleDelete(field.id)}
                >
                  <InputFormField
                    field={field as FormField<FieldsType.INPUT>}
                  />
                </EditFormItem>
              );
            case FieldsType.CHECKBOX:
              return (
                <EditFormItem
                  key={field.id}
                  onEdit={handleEdit(field.id)}
                  onDelete={handleDelete(field.id)}
                >
                  <CheckboxFormField
                    field={field as FormField<FieldsType.CHECKBOX>}
                  />
                </EditFormItem>
              );
            case FieldsType.SELECT:
              return (
                <EditFormItem
                  key={field.id}
                  onEdit={handleEdit(field.id)}
                  onDelete={handleDelete(field.id)}
                >
                  <SelectFormField
                    field={field as FormField<FieldsType.SELECT>}
                  />
                </EditFormItem>
              );
            case FieldsType.SUBMIT:
              return (
                <EditFormItem
                  key={field.id}
                  onEdit={handleEdit(field.id)}
                  onDelete={handleDelete(field.id)}
                >
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary"
                      type={
                        (field as FormField<FieldsType.SUBMIT>).fieldStructure
                          .type
                      }
                    >
                      {field.fieldStructure.label}
                    </button>
                  </div>
                </EditFormItem>
              );
          }
          return null;
        })}
      </fieldset>
    </form>
  );
};
export default FormPreviewer;
