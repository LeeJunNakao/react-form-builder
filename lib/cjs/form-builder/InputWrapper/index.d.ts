import React, { RefObject } from "react";
import { FormItemConfig, Payload } from "@src/form-builder/types";
declare type Props = {
    component: React.FC<any>;
    itemData: FormItemConfig;
    formData: Payload | undefined;
    payload: RefObject<Payload>;
    shouldClear: Boolean;
    setFormData: (name: string, value: any) => void;
    showErrors?: boolean;
    onChange?: (value: Payload) => void;
};
declare const InputWrapper: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default InputWrapper;
