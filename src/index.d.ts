import { ValidationType } from "./utils/validator/validation";

export { ValidationType };

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
    };
    validation?: {
      required?: boolean;
      type?: ValidationType;
      callback?: (arg?: any) => any;
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
  submitButton?: (onSubmit: () => void) => JSX.Element;
};

export type Config = Partial<Pick<FormConfig, "inputsOptions">>;
export type FormBuilderProps = Omit<FormConfig, "inputsOptions">;

export type HookSetState = (value: any) => void;

export type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: HookSetState;
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
): (formConfig: FormBuilderProps) => React.FC<FormConfig>;

export default FormBuilder;
