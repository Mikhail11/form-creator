import React, { useReducer } from "react";

import { FieldFormContext } from "stores/fieldForm/context";
import { FieldFormReducer, FormField } from "stores/fieldForm/types";
import { initState } from "stores/fieldForm/states";
import { reducer } from "stores/fieldForm/reducer";
import { endEditField, writeField } from "stores/fieldForm/actions";

import FormPreviewer from "./components/FormPreviewer";
import ControlsSelector from "./components/ControlsSelector";
import InputAddForm from "./components/InputAddForm";
import { FieldsType } from "lib/enums/fields";
import { generateHTMLCode } from "stores/fieldForm/helpers";

function Main() {
  const [state, dispatch] = useReducer<FieldFormReducer>(reducer, initState);
  const handleClose = () => endEditField(dispatch);
  const handleWriteField = (
    field: Omit<FormField<FieldsType>, "id">,
    id?: string
  ) => {
    writeField(dispatch, field, id);
  };
  return (
    <>
      <InputAddForm
        open={Boolean(state.editingField)}
        fieldType={state.editingField?.fieldType || FieldsType.INPUT}
        field={state.editingField}
        onSubmit={handleWriteField}
        onClose={handleClose}
      />
      <FieldFormContext.Provider value={{ state, dispatch }}>
        <div>
          <div className="p-3 border-bottom border-2">
            <h4>Add new control to form:</h4>
            <ControlsSelector />
          </div>
          <div className="container-xxl row mt-3">
            <div className="col-md-6">
              <h4>Form preview:</h4>
              <div className="p-3 border rounded ">
                <FormPreviewer />
              </div>
            </div>
            <div className="col-md-6">
              <h4>Form HTML code:</h4>
              <textarea
                readOnly
                value={generateHTMLCode(state.fields)}
                className="form-control"
                rows={12}
              />
              <h6 className="mt-2">Don't forget to include styles:</h6>
              <input
                className="form-control"
                defaultValue={`<link href=" https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous">`}
                readOnly
              />
            </div>
          </div>
        </div>
      </FieldFormContext.Provider>
    </>
  );
}

export default Main;
