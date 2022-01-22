import { FormField } from "./types";
import { FieldsType } from "lib/enums/fields";

export const generateUniqueID = () => {
  return `v2-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};

const getFieldHTMLCode = (field: FormField<FieldsType>): string => {
  switch (field.fieldType) {
    case FieldsType.INPUT:
      return `
            <!--     Input field       -->
            <div class="mb-3">
              <label for={props.controlId} class="form-label">
                  ${field.fieldStructure.label}
              </label>
               <input
                    class="form-control"
                    type="${(field as FormField<FieldsType.INPUT>).fieldStructure.type}"
                    placeholder="${(field as FormField<FieldsType.INPUT>).fieldStructure.placeholder}"
                    name="${(field as FormField<FieldsType.INPUT>).fieldStructure.name}"
                    ${(field as FormField<FieldsType.INPUT>).fieldStructure.required ? "required" : ""}
                    id="${field.id}"
                />
            </div>
      `;
    case FieldsType.CHECKBOX:
      return `
            <!--     Checkbox field       -->
            <div class="mb-3">
              <label for="${field.id}" class="form-label">
                  ${field.fieldStructure.label}
              </label>
              <input
                  name="${(field as FormField<FieldsType.CHECKBOX>).fieldStructure.name}"
                  class="form-check-input ms-1"
                  type="checkbox"
                  ${(field as FormField<FieldsType.CHECKBOX>).fieldStructure.required ? "required" : ""}
                  id="${field.id}"
                />
            </div>
      `;
    case FieldsType.SELECT:
      return `
            <!--     Select field       -->
            <div class="mb-3">
              <label for="${field.id}" class="form-label">
                  ${field.fieldStructure.label}
              </label>
                <select name=${(field as FormField<FieldsType.SELECT>).fieldStructure.name} class="form-select" ${
            (field as FormField<FieldsType.SELECT>).fieldStructure.required
              ? "required"
              : ""
          } id="${field.id}">
                  ${(
                    field as FormField<FieldsType.SELECT>
                  ).fieldStructure.options.map(
                    (value) =>
                      `<option  value="${value}">
                      ${value}
                    </option>`
                  ).join('')}
                </select>
            </div>
      `;
    case FieldsType.SUBMIT:
      return `
            <!--     Submit button       -->
            <div class="d-flex justify-content-center">
                <button
                  class="btn btn-primary"
                  type="${(field as FormField<FieldsType.SUBMIT>).fieldStructure.type}"
                >
                  ${field.fieldStructure.label}
                </button>
            </div>
    `;
    default:
      return "";
  }
};

export const generateHTMLCode = (fields: FormField<FieldsType>[]): string => {
  return `
        <form class="form-group">
            <fieldset>
            ${fields.map(getFieldHTMLCode).join("")}
            </fieldset>
        </form>
    `;
};
