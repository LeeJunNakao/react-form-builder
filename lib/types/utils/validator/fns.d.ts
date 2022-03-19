import { Item, ValidationPipeArg } from "../types";
export declare const required: (item: Item) => ValidationPipeArg;
export declare const callback: ({ item, result, }: ValidationPipeArg) => ValidationPipeArg;
export declare const email: ({ item, result, }: ValidationPipeArg) => ValidationPipeArg;
export declare const password: ({ item, result, }: ValidationPipeArg) => ValidationPipeArg;
