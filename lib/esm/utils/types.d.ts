import { Payload, FormItemConfig } from "@src/types";
export declare type HookSetState = (value: any) => void;
export declare type Item = {
    payload: Payload;
    name: string;
    config: FormItemConfig["config"]["validation"];
};
export declare type ValidationResult = {
    error: boolean;
    message: string;
};
export declare type ValidationPipeArg = {
    item: Item;
    result: ValidationResult;
};
