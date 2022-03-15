import { ValidationType } from "./utils/validator/validation";
import { ValidationResult } from "./utils/validator";

export type JSXElement = JSX.Element;

export type FormItemConfig = {
  name: string;
  label?: string;
  config: {
    inputType: string;
    style?: {
      cols?: number;
    };
    props?: {
      options?: SelectOption[];
      type?: string;
    };
    validation?: {
      required?: boolean;
      type?: ValidationType;
      callback?: (arg: any, values: Payload) => ValidationResult;
    };
  };
};

export type Payload = {
  [fieldName: string]: any;
};

export type InputsOptions = {
  [inputType: string]: any;
};

export type FormConfig = {
  title?: string;
  config: FormItemConfig[];
  inputsOptions?: InputsOptions;
  formContent?: Payload;
  onValid?: (payload: Payload) => void;
  onInvalid?: (payload: Payload) => void;
  onChange?: (payload: Payload) => void;
  submitButton?: (onSubmit: () => void) => JSX.Element;
};

export type Config = Partial<Pick<FormConfig, "inputsOptions">>;
export type FormBuilderProps = Omit<FormConfig, "inputsOptions">;

export type HookSetState = (value: any) => void;

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: HookSetState;
  type?: string;
};

export type SelectOption = {
  label: string;
  value: any;
};

export type SelectProps = {
  options: SelectOption[];
  value?: any;
  onChange?: HookSetState;
};

export declare function FormBuilder(
  inputsOptions?: Config
): React.FC<FormBuilderProps>;

export { ValidationType, ValidationResult };

export default FormBuilder;
