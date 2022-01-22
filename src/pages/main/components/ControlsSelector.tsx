import React from "react";
import { useFieldFormContext } from "stores/fieldForm/context";
import { startEditField } from "stores/fieldForm/actions";
import { FieldsType } from "lib/enums/fields";

const ControlsSelector = () => {
  const { dispatch } = useFieldFormContext();
  const handleAddInput = () => {
    startEditField<FieldsType.INPUT>(dispatch, {
      fieldType: FieldsType.INPUT,
      fieldStructure: {
        label: "Input label",
        name: "inputField",
        placeholder: "Start typing",
        type: "text",
        required: false,
      },
    });
  };
  const handleAddCheckbox = () => {
    startEditField<FieldsType.CHECKBOX>(dispatch, {
      fieldType: FieldsType.CHECKBOX,
      fieldStructure: {
        label: "Checkbox label",
        name: "checkboxField",
        required: false,
      },
    });
  };
  const handleAddSelect = () => {
    startEditField<FieldsType.SELECT>(dispatch, {
      fieldType: FieldsType.SELECT,
      fieldStructure: {
        label: "Select label",
        name: "selectField",
        required: false,
        options: [],
      },
    });
  };
  const handleAddButton = () => {
    startEditField<FieldsType.SUBMIT>(dispatch, {
      fieldType: FieldsType.SUBMIT,
      fieldStructure: {
        label: "Submit",
        type: "submit",
      },
    });
  };
  return (
    <>
      <div className="d-flex">
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleAddInput}
        >
          Input
        </button>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleAddCheckbox}
        >
          Checkbox
        </button>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={handleAddSelect}
        >
          Select
        </button>
        <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddButton}
        >
          Submit button
        </button>
      </div>
    </>
  );
};
export default ControlsSelector;
