import { FieldsType } from "lib/enums/fields";
import {
  BaseField,
  InputField,
  SelectField,
  SubmitButton,
} from "lib/dto/fileds";
import { Dispatch, Reducer } from "react";

export interface FormField<T extends FieldsType> {
  id: string;
  fieldType: T;
  fieldStructure: T extends typeof FieldsType.INPUT
    ? InputField
    : T extends typeof FieldsType.SELECT
    ? SelectField
    : T extends typeof FieldsType.SUBMIT
    ? SubmitButton
    : BaseField;
}

export interface FieldFormState {
  fields: FormField<FieldsType>[];
  editingField?: FormField<FieldsType>;
}
type FieldFormAction = {
  type: FieldFormsActions;
  payload: any;
};
export type FieldFormDispatch = Dispatch<FieldFormAction>;
export interface FieldFormContextType {
  dispatch: FieldFormDispatch;
  state: FieldFormState;
}
export type FieldFormReducer = Reducer<FieldFormState, FieldFormAction>;
export enum FieldFormsActions {
  EDIT_FIELD = "edit-field",
  EDIT_EXISTED_FIELD = "edit-existed-field",
  ADD_NEW_FIELD = "add-new-field",
  UPDATE_EXISTED_FIELD = "update-existed-field",
  REMOVE_FIELD = "remove-field",
}
