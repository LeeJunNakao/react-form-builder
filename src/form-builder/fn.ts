import { InputsOptions } from "@src/index.d";

export const inferType = (typeValue: string, collection: InputsOptions) =>
  collection[typeValue];
