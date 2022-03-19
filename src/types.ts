import {
  HookSetState,
  Item,
  ValidationResult,
  ValidationPipeArg,
} from "@src/utils/types";
import { InputProps, SelectOption, SelectProps } from "@src/components/types";
import {
  FormBuilderProps,
  Config,
  FormConfig,
  FormItemConfig,
  Payload,
  ValidationCallback,
} from "@src/form-builder/types";
import { ValidationType } from "./utils/validator/types";

export declare function FormBuilder(
  inputsOptions?: Config
): React.FC<FormBuilderProps>;

export {
  HookSetState,
  Item,
  ValidationResult,
  ValidationPipeArg,
  InputProps,
  SelectOption,
  SelectProps,
  ValidationType,
  FormConfig,
  FormItemConfig,
  Config,
  Payload,
  FormBuilderProps,
  ValidationCallback,
};

export default FormBuilder;
