import React from "react";
import { SelectOption } from "../types";
declare type Props = {
    content: SelectOption[];
    isOpened: boolean;
    optionsWrapperRef: React.RefObject<any>;
    optionsRef: React.RefObject<any>;
    options: SelectOption[];
    handleChange: (option: SelectOption) => void;
};
declare const OptionsWrapper: (props: Props) => JSX.Element;
export default OptionsWrapper;
