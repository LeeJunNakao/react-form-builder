enum ValidationType {
  EMAIL = "email",
  PASSWORD = "password",
}

type ValidationResult = {
  error: boolean;
  message: string;
};

type JSXElement = JSX.Element;

type FormItemConfig = {
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

type Payload = {
  [fieldName: string]: any;
};

type InputsOptions = {
  [inputType: string]: any;
};

type FormConfig = {
  title?: string;
  config: FormItemConfig[];
  inputsOptions?: InputsOptions;
  formContent?: Payload;
  onValid?: (payload: Payload) => void;
  onInvalid?: (payload: Payload) => void;
  onChange?: (payload: Payload) => void;
  submitButton?: (onSubmit: () => void) => JSX.Element;
};

type Config = Partial<Pick<FormConfig, "inputsOptions">>;
type FormBuilderProps = Omit<FormConfig, "inputsOptions">;

type HookSetState = (value: any) => void;

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: HookSetState;
  type?: string;
};

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  options: SelectOption[];
  value?: any;
  onChange?: HookSetState;
};

declare function FormBuilder(
  inputsOptions?: Config
): React.FC<FormBuilderProps>;

export { Config, FormBuilder, FormBuilderProps, FormConfig, FormItemConfig, HookSetState, InputProps, InputsOptions, JSXElement, Payload, SelectOption, SelectProps, ValidationResult, ValidationType, FormBuilder as default };
