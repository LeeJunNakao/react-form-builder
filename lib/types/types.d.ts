/// <reference types="react" />
import { HookSetState, Item, ValidationResult, ValidationPipeArg } from "./utils/types";
import { InputProps, SelectOption, SelectProps } from "./components/types";
import { FormBuilderProps, Config, FormConfig, FormItemConfig, Payload, ValidationCallback } from "./form-builder/types";
import { ValidationType } from "./utils/validator/types";
export declare function FormBuilder(inputsOptions?: Config): React.FC<FormBuilderProps>;
export { HookSetState, Item, ValidationResult, ValidationPipeArg, InputProps, SelectOption, SelectProps, ValidationType, FormConfig, FormItemConfig, Config, Payload, FormBuilderProps, ValidationCallback, };
export default FormBuilder;
