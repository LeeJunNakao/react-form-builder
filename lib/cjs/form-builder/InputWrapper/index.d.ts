import React, { RefObject } from "react";
import { ErrorData, FormItemConfig, Payload } from "@src/form-builder/types";
declare type Props = {
    component: React.FC<any>;
    itemData: FormItemConfig;
    formData: Payload | undefined;
    payload: RefObject<Payload>;
    shouldClear: Boolean;
    errors: ErrorData;
    showErrors?: boolean;
    setFormData: (name: string, value: any) => void;
    onChange?: (value: Payload) => void;
};
declare const InputWrapper: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default InputWrapper;
