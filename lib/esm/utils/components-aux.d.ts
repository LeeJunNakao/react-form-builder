import { Dispatch, RefObject, SetStateAction, FocusEvent } from "react";
import { HookSetState } from "@src/index.d";
export declare const handleChange: (setState: Dispatch<SetStateAction<string>>, onSetState: HookSetState | undefined) => (event: React.ChangeEvent<HTMLInputElement>) => void;
export declare const handleDisplayBlur: (componentRef: RefObject<HTMLDivElement>, displayHandler: (status: boolean) => void) => (event: FocusEvent<HTMLInputElement | HTMLDivElement>) => void;
