import React, { RefObject } from "react";
import { InputsOptions, FormConfig, Payload } from "../types";
export declare const inferType: (typeValue: string, collection: InputsOptions) => any;
declare type ConfigInputsArgs = FormConfig & {
    payload: RefObject<Payload>;
    shouldClear: Boolean;
    setFormContent: (name: string, value: any) => void;
};
export declare const configInputs: ({ config, inputsOptions, payload, formContent, shouldClear, setFormContent, onChange, }: ConfigInputsArgs) => {
    component: JSX.Element;
    ref: React.RefObject<any>;
    name: string;
}[];
export {};
