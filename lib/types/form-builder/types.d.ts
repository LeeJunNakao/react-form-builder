/// <reference types="react" />
import * as Utils from "../utils/types";
import { SelectOption } from "../components/types";
import { ValidationType } from "../utils/validator/types";
export declare type ValidationCallback = (arg: any, values: Payload) => Utils.ValidationResult;
export declare type FormItemConfig = {
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
export declare type Payload = {
    [fieldName: string]: any;
};
export declare type InputsOptions = {
    [inputType: string]: any;
};
export declare type FormConfig = {
    title?: string;
    config: FormItemConfig[];
    inputsOptions?: InputsOptions;
    formContent?: Payload;
    onValid?: (payload: Payload) => void;
    onInvalid?: (payload: Payload) => void;
    onChange?: (payload: Payload) => void;
    submitButton?: (onSubmit: () => void) => JSX.Element;
};
export declare type ErrorText = string;
export declare type ErrorData = {
    [name: string]: ErrorText;
};
export declare type Config = Partial<Pick<FormConfig, "inputsOptions">>;
export declare type FormBuilderProps = Omit<FormConfig, "inputsOptions">;
