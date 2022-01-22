import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface Props {
  title: string;
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
}
const ModalWindow: React.FC<Props> = (props) => {
  const [showFade, setShowFade] = useState<boolean>(false);
  useEffect(() => {
    if (!props.open) {
      setTimeout(() => {
        setShowFade(false);
      }, 160);
    } else {
      setShowFade(true);
    }
  }, [props.open]);
  return ReactDOM.createPortal(
    <>
      <div
        className={`modal fade ${props.open ? "show" : ""}`}
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        style={{ display: showFade ? "block" : "none" }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {props.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              />
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={props.onSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {showFade && <div className="modal-backdrop fade show" />}
    </>,
    document.body
  );
};
export default ModalWindow;
