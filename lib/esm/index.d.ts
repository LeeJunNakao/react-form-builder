enum ValidationType {
  EMAIL = "email",
  PASSWORD = "password",
}

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
    };
    validation?: {
      required?: boolean;
      type?: ValidationType;
      callback?: (arg?: any) => any;
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
  submitButton?: (onSubmit: () => void) => JSX.Element;
};

type Config = Pick<FormConfig, "inputsOptions">;
type FormBuilderProps = Omit<FormConfig, "inputsOptions">;

type HookSetState = (value: any) => void;

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: HookSetState;
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

declare type FormBuilder = (
  inputsOptions: Config
) => React.FC<FormBuilderProps>;

export { Config, FormBuilder, FormBuilderProps, FormConfig, FormItemConfig, HookSetState, InputProps, InputsOptions, JSXElement, Payload, SelectOption, SelectProps, ValidationType };
