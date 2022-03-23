import React, { RefObject } from "react";
import { InputsOptions, FormConfig, Payload, ErrorData } from "@src/form-builder/types";
export declare const inferType: (typeValue: string, collection: InputsOptions) => any;
declare type ConfigInputsArgs = FormConfig & {
    payload: RefObject<Payload>;
    shouldClear: Boolean;
    errors: ErrorData;
    setFormContent: (name: string, value: any) => void;
};
export declare const configInputs: ({ config, inputsOptions, payload, formContent, shouldClear, errors, setFormContent, onChange, }: ConfigInputsArgs) => {
    component: JSX.Element;
    ref: React.RefObject<any>;
    name: string;
}[];
export {};
