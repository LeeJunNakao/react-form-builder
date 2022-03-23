import { Item, ValidationPipeArg } from "@src/utils/types";
import { FormItemConfig, Payload } from "@src/types";
import { ErrorData } from "@src/form-builder/types";
import { RefObject } from "react";
export declare const validate: (item: Item) => ValidationPipeArg;
export declare const validator: ({ payload, config, }: {
    payload: RefObject<Payload>;
    config: FormItemConfig[];
}) => ErrorData;
