import { FieldFormReducer, FieldFormsActions } from "./types";

export const reducer: FieldFormReducer = (prevState, action) => {
  switch (action.type) {
    case FieldFormsActions.ADD_NEW_FIELD:
      return {
        ...prevState,
        editingField: undefined,
        fields: [...prevState.fields, action.payload],
      };
    case FieldFormsActions.EDIT_EXISTED_FIELD:
      const candidate = prevState.fields.find(
        ({ id }) => id === action.payload
      );
      if (candidate) {
        return {
          ...prevState,
          editingField: candidate,
        };
      }
      return prevState;
    case FieldFormsActions.UPDATE_EXISTED_FIELD:
      if (prevState.fields.length > 1) {
        const candidateIndex = prevState.fields.findIndex(
          ({ id }) => id === action.payload.id
        );
        return {
          ...prevState,
          editingField: undefined,
          fields: [
            ...prevState.fields.slice(0, candidateIndex),
            action.payload,
            ...prevState.fields.slice(candidateIndex + 1),
          ],
        };
      }
      return {
        ...prevState,
        editingField: undefined,
        fields: [action.payload],
      };

    case FieldFormsActions.EDIT_FIELD:
      return {
        ...prevState,
        editingField: action.payload,
      };
    case FieldFormsActions.REMOVE_FIELD:
      return {
        ...prevState,
        fields: prevState.fields.filter(({ id }) => id !== action.payload),
      };
    default:
      return prevState;
  }
};
