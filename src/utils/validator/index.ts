import { pipe } from "@src/utils/functions";
import { required, email, password, callback } from "./fns";
import { Item, ValidationPipeArg } from "@src/utils/types";
import { FormItemConfig, Payload } from "@src/types";
import { ErrorData } from "@src/form-builder/types";
import { RefObject } from "react";

export const validate = (item: Item): ValidationPipeArg => {
  return pipe(item, required, email, password, callback);
};

export const validator = ({
  payload,
  config,
}: {
  payload: RefObject<Payload>;
  config: FormItemConfig[];
}): ErrorData => {
  const errorsData = config
    .map((i) =>
      validate({
        payload: payload.current!,
        name: i.name,
        config: i.config.validation,
      })
    )
    .map((v) => [v.item.name, v.result.message]);

  return Object.fromEntries(errorsData);
};
