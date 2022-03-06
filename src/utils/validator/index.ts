import { pipe } from "@src/utils/functions";
import { FormItemConfig } from "@src/index.d";
import { required, email, password, callback } from "./fns";

export type Item = {
  state: any;
} & FormItemConfig;

export type ValidationResult = {
  error: boolean;
  message: string;
};

export type ValidationPipeArg = {
  item: Item;
  result: ValidationResult;
};

export const validator = (item: Item): ValidationPipeArg => {
  return pipe(item, required, email, password, callback);
};
