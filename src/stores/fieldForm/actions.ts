import { FieldFormDispatch, FieldFormsActions, FormField } from "./types";
import { generateUniqueID } from "./helpers";
import { FieldsType } from "lib/enums/fields";

export const startEditField = <T extends FieldsType>(
  dispatch: FieldFormDispatch,
  editField: Partial<FormField<T>>
) => {
  dispatch({
    type: FieldFormsActions.EDIT_FIELD,
    payload: editField,
  });
};
export const editExistedField = <T extends FieldsType>(
    dispatch: FieldFormDispatch,
    id: string
) => {
  dispatch({
    type: FieldFormsActions.EDIT_EXISTED_FIELD,
    payload: id,
  });
};
export const endEditField = (dispatch: FieldFormDispatch) => {
  dispatch({
    type: FieldFormsActions.EDIT_FIELD,
    payload: undefined,
  });
};
export const writeField = <T extends FieldsType>(
  dispatch: FieldFormDispatch,
  field: Omit<FormField<T>, "id">,
  id?: string
) => {
  if (id) {
    dispatch({
      type: FieldFormsActions.UPDATE_EXISTED_FIELD,
      payload: { ...field, id },
    });
  } else {
    dispatch({
      type: FieldFormsActions.ADD_NEW_FIELD,
      payload: { ...field, id: generateUniqueID() },
    });
  }
};

export const removeField = (dispatch: FieldFormDispatch, id: string) => {
  dispatch({
    type: FieldFormsActions.REMOVE_FIELD,
    payload: id,
  });
};
