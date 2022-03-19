import { pipe } from "@src/utils/functions";
import { required, email, password, callback } from "./fns";
import { Item, ValidationPipeArg } from "@src/utils/types";

export const validator = (item: Item): ValidationPipeArg => {
  return pipe(item, required, email, password, callback);
};
