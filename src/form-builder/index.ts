import FormBuilder from "./FormBuilder";
import { FormBuilder as ConfigForm } from "@src/index.d";
import { Config, FormBuilderProps } from "@src/index.d";

const configForm: ConfigForm =
  (inputsOptions: Config) => (formConfig: FormBuilderProps) => {
    return FormBuilder({ ...inputsOptions, ...formConfig });
  };

export default configForm;
