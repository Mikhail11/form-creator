export interface BaseField {
  name: string;
  label: string;
  required: boolean;
}

export interface InputField extends BaseField {
  placeholder: string;
  type: "phone" | "number" | "password" | "text";
}

export interface SelectField extends BaseField {
  options: string[];
}

export interface SubmitButton {
  type: "submit" | "reset";
  label: string;
}
