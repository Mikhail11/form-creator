import React from "react";

interface Props {
  onEdit: () => void;
  onDelete: () => void;
}
const EditFormItem: React.FC<Props> = (props) => {
  return (
    <div className="position-relative">
      <div className="position-absolute top-0 end-0">
        <div className="btn-group btn-group-sm" role="group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={props.onEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={props.onDelete}
          >
            Delete
          </button>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default EditFormItem;
