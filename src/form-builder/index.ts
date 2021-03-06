import FormBuilder from "./FormBuilder";
import { Config, FormBuilderProps } from "@src/form-builder/types";

const configForm =
  (inputsOptions: Config) => (formConfig: FormBuilderProps) => {
    return FormBuilder({ ...inputsOptions, ...formConfig });
  };

export default configForm;
