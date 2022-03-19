import { RefObject } from "react";
import { FormItemConfig } from "../form-builder/types";
export declare type HookSetState = (value: any) => void;
export declare type Item = {
    state: any;
    inputRefs: RefObject<any>[];
} & FormItemConfig;
export declare type ValidationResult = {
    error: boolean;
    message: string;
};
export declare type ValidationPipeArg = {
    item: Item;
    result: ValidationResult;
};
