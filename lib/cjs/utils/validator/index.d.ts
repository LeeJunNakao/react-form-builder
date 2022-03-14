import { FormItemConfig } from "@src/index.d";
import { RefObject } from "react";
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
export declare const validator: (item: Item) => ValidationPipeArg;
