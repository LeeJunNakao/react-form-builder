import { FormItemConfig } from "@src/index.d";
export declare type Item = {
    state: any;
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
