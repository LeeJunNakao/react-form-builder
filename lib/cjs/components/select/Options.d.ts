/// <reference types="react" />
import { SelectOption } from "@src/components/types";
declare type Props = {
    options: SelectOption[];
    handleChange: (option: SelectOption) => void;
};
declare const Options: (props: Props) => JSX.Element;
export default Options;
