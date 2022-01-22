import React, { useState } from "react";
import { TrashIcon } from "icons";

interface Props {
  multipleOptions: string[];
  onChange: (newMultipleOptions: string[]) => void;
}
const MultiOptionsInput: React.FC<Props> = (props) => {
  const [currentOption, setCurrentOption] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentOption(event.target.value);
  };
  const handleSubmit = () => {
    props.onChange([...props.multipleOptions, currentOption]);
    setCurrentOption("");
  };
  const handleRemove = (removeOption: string) => () => {
    props.onChange([
      ...props.multipleOptions.filter((option) => option !== removeOption),
    ]);
  };
  return (
    <div className="mt-3">
      <div className="d-flex flex-xl-wrap mb-3">
        {props.multipleOptions.map((option) => (
          <div
            key={option}
            className="rounded-pill bg-primary px-2 pb-1 border text-white mx-1"
          >
            {option}
            <span className="ms-1" onClick={handleRemove(option)}>
              <TrashIcon />
            </span>
          </div>
        ))}
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Set option label"
          value={currentOption}
          onChange={handleChange}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          Add new option
        </button>
      </div>
    </div>
  );
};
export default MultiOptionsInput;
