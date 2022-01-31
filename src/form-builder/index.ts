import FormBuilder, { FormConfig, ValidationType } from "./FormBuilder";
import { InputProps } from "components/protocols";
import { SelectProps } from "components/protocols";

export type { InputProps, SelectProps, ValidationType };
export type Config = Pick<FormConfig, "inputsOptions">;
export type FormBuilderProps = Omit<FormConfig, "inputsOptions">;

const configForm =
  (inputsOptions: Config) => (formConfig: FormBuilderProps) => {
    return FormBuilder({ ...inputsOptions, ...formConfig });
  };

export default configForm;
