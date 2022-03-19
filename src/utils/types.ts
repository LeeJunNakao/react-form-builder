import { RefObject } from "react";
import { FormItemConfig } from "@src/form-builder/types";

export type HookSetState = (value: any) => void;

export type Item = {
  state: any;
  inputRefs: RefObject<any>[];
} & FormItemConfig;

export type ValidationResult = {
  error: boolean;
  message: string;
};

export type ValidationPipeArg = {
  item: Item;
  result: ValidationResult;
};
