import { pipe } from "utils/functions";
import { FormItemConfig } from "form-builder/FormBuilder";
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
