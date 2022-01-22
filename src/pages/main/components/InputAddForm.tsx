import React, { useEffect, useState } from "react";
import { ModalWindow } from "components/ui";
import { FormField } from "stores/fieldForm/types";
import { FieldsType } from "lib/enums/fields";
import MultiOptionsInput from "../../../components/common/MultiOptionsInput";
import { BaseField, SubmitButton } from "../../../lib/dto/fileds";

interface Props {
  open: boolean;
  fieldType: FieldsType;
  onSubmit: (
    field: Omit<FormField<Props["fieldType"]>, "id">,
    id?: string
  ) => void;
  onClose: () => void;
  field?: FormField<Props["fieldType"]>;
}
interface State {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  options: string[];
}
const initState = {
  name: "",
  label: "",
  placeholder: "",
  required: false,
  type: "text",
  options: [],
};
const InputAddForm: React.FC<Props> = (props) => {
  const [state, setState] = useState<State>(initState);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setState((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((oldState) => ({
      ...oldState,
      required: event.target.checked,
    }));
  };
  const handleChangeOptions = (newOptions: string[]) => {
    setState((oldState) => ({
      ...oldState,
      options: newOptions,
    }));
  };
  const handleSubmit = () => {
    setState(initState);
    props.onSubmit(
      {
        fieldStructure: {
          ...state,
        },
        fieldType: props.fieldType,
      },
      props.field?.id
    );
  };
  useEffect(() => {
    if (props.field) {
      if (props.fieldType === FieldsType.SUBMIT) {
        const { label, type } = props.field.fieldStructure as SubmitButton;
        setState((oldState) => ({
          ...oldState,
          label,
          type,
        }));
      } else {
        const { required, label, name } = props.field
          .fieldStructure as BaseField;
        setState((oldState) => ({
          ...oldState,
          required,
          label,
          name,
        }));
      }
    }
  }, [props.field]);
  if (props.fieldType === FieldsType.SUBMIT) {
    return (
      <ModalWindow
        title="Add new field"
        open={props.open}
        onSubmit={handleSubmit}
        onClose={props.onClose}
      >
        <div className="container p-1">
          <div className="row d-flex align-items-center">
            <div className="col-8">
              <label htmlFor="labelInput" className="form-label">
                Field label
              </label>
              <input
                type="text"
                id="labelInput"
                name="label"
                className="form-control"
                placeholder="Enter field label..."
                value={state.label}
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="labelInput" className="form-label">
                Field type
              </label>
              <select
                name="type"
                id="typeSelect"
                className="form-select"
                value={state.type}
                onChange={handleChange}
              >
                <option value="submit">submit</option>
                <option value="reset">reset</option>
              </select>
            </div>
          </div>
        </div>
      </ModalWindow>
    );
  }
  return (
    <ModalWindow
      title="Add new field"
      open={props.open}
      onSubmit={handleSubmit}
      onClose={props.onClose}
    >
      <div className="container p-1">
        <div className="row d-flex align-items-center mb-3">
          <div className="col">
            <label htmlFor="labelInput" className="form-label">
              Field label
            </label>
            <input
              type="text"
              id="labelInput"
              name="label"
              className="form-control"
              placeholder="Enter field label..."
              value={state.label}
              onChange={handleChange}
            />
          </div>
          {}
          <div className="col">
            <label htmlFor="nameInput" className="form-label">
              Field name
            </label>
            <input
              type="text"
              id="labelInput"
              name="name"
              className="form-control"
              placeholder="Enter field name..."
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div className="col form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="required"
              checked={state.required}
              id="requiredCheckbox"
              onChange={handleCheckedChange}
            />
            <label className="form-check-label" htmlFor="requiredCheckbox">
              Field required
            </label>
          </div>
        </div>
        {props.fieldType === FieldsType.INPUT && (
          <div className="row d-flex align-items-center">
            <div className="col-8">
              <label htmlFor="placeholderInput" className="form-label">
                Field placeholder
              </label>
              <input
                type="text"
                name="placeholder"
                id="placeholderInput"
                className="form-control"
                placeholder="Enter field placeholder..."
                value={state.placeholder}
                onChange={handleChange}
              />
            </div>
            <div className="col-4">
              <label htmlFor="labelInput" className="form-label">
                Field type
              </label>
              <select
                name="type"
                id="typeSelect"
                className="form-select"
                value={state.type}
                onChange={handleChange}
              >
                <option value="email">email</option>
                <option value="phone">phone</option>
                <option value="number">number</option>
                <option value="text">text</option>
              </select>
            </div>
          </div>
        )}
        {props.fieldType === FieldsType.SELECT && (
          <MultiOptionsInput
            multipleOptions={state.options}
            onChange={handleChangeOptions}
          />
        )}
      </div>
    </ModalWindow>
  );
};
export default InputAddForm;
