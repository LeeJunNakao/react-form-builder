import React from "react";
import { FormItemConfig, Payload } from "@src/index.d";
declare type Props = {
    component: React.FC<any>;
    itemData: FormItemConfig;
    formData: Payload;
    showErrors: boolean;
};
declare const InputWrapper: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default InputWrapper;
