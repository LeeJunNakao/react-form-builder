import * as Utils from "@src/utils/types";
import { SelectOption } from "@src/components/types";
import { ValidationType } from "@src/utils/validator/types";

export type ValidationCallback = (
  arg: any,
  values: Payload
) => Utils.ValidationResult;

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
      callback?: ValidationCallback;
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

export type ErrorText = string;

export type ErrorData = {
  [name: string]: ErrorText;
};

export type Config = Partial<Pick<FormConfig, "inputsOptions">>;
export type FormBuilderProps = Omit<FormConfig, "inputsOptions">;
