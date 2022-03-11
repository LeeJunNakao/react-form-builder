import { Dispatch, SetStateAction } from "react";
import { HookSetState } from "@src/index.d";
export declare const handleChange: (setState: Dispatch<SetStateAction<string>>, onSetState: HookSetState | undefined) => (event: React.ChangeEvent<HTMLInputElement>) => void;
