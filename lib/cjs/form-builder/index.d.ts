/// <reference types="react" />
import { Config, FormBuilderProps } from "@src/form-builder/types";
declare const configForm: (inputsOptions: Config) => (formConfig: FormBuilderProps) => import("react").ReactElement<any, any> | null;
export default configForm;
