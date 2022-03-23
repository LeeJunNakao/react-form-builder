import { Item, ValidationPipeArg } from "../types";
import { FormItemConfig, Payload } from "../../types";
import { ErrorData } from "../../form-builder/types";
import { RefObject } from "react";
export declare const validate: (item: Item) => ValidationPipeArg;
export declare const validator: ({ payload, config, }: {
    payload: RefObject<Payload>;
    config: FormItemConfig[];
}) => ErrorData;
