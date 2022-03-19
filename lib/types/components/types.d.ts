import { HookSetState } from "../utils/types";
export declare type InputProps = {
    placeholder?: string;
    value?: string;
    onChange?: HookSetState;
    shouldClear: Boolean;
    type?: string;
};
export declare type SelectOption = {
    label: string;
    value: any;
};
export declare type SelectProps = {
    options: SelectOption[];
    shouldClear: Boolean;
    value?: any;
    onChange?: HookSetState;
};
