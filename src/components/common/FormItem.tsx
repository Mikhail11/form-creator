import React, { ReactElement } from "react";

interface Props {
  label: string;
  controlId: string;
  children: ReactElement;
}
const FormItem: React.FC<Props> = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.controlId} className="form-label">
          {props.label}
      </label>
      {React.cloneElement(props.children, {
        id: props.controlId,
      })}
    </div>
  );
};
export default FormItem;
