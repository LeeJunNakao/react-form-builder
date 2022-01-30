export type InputsOptions = {
  [inputType: string]: any;
};

export const inferType = (typeValue: string, collection: InputsOptions) =>
  collection[typeValue];
