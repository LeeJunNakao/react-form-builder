import { RefObject } from "react";
import { Payload, FormItemConfig } from "@src/types";

export type HookSetState = (value: any) => void;

export type Item = {
  payload: Payload;
  name: string;
  config: FormItemConfig["config"]["validation"];
};

export type ValidationResult = {
  error: boolean;
  message: string;
};

export type ValidationPipeArg = {
  item: Item;
  result: ValidationResult;
};
