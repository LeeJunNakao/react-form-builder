/// <reference types="react" />
import * as Utils from "@src/utils/types";
import { SelectOption } from "@src/components/types";
import { ValidationType } from "@src/utils/validator/types";
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
            callback?: (arg: any, values: Payload) => Utils.ValidationResult;
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
export declare type Config = Partial<Pick<FormConfig, "inputsOptions">>;
export declare type FormBuilderProps = Omit<FormConfig, "inputsOptions">;
