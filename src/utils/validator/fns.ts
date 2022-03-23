import { ValidationType } from "@src/utils/validator/types";
import { Item, ValidationPipeArg } from "@src/utils/types";
import errorMessages from "./messages";

const getDefaultResult = () => ({ error: false, message: "" });

export const required = (item: Item): ValidationPipeArg => {
  if (item.config?.required) {
    const state = item.payload[item.name];
    const hasError = Array.isArray(state)
      ? state.length === 0
      : state === undefined || state === null || state === "";

    return {
      item,
      result: {
        error: hasError,
        message: hasError ? errorMessages.required : "",
      },
    };
  }

  return { item, result: getDefaultResult() };
};

export const callback = ({
  item,
  result,
}: ValidationPipeArg): ValidationPipeArg => {
  if (result.error) return { item, result };

  if (item.config?.callback) {
    const state = item.payload[item.name];

    return {
      item,
      result: item.config.callback(state, item.payload),
    };
  }

  return {
    item,
    result,
  };
};

export const email = ({
  item,
  result,
}: ValidationPipeArg): ValidationPipeArg => {
  if (result.error) return { item, result };

  const regex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const state = item.payload[item.name];
  const isValid = regex.test(state);

  if (item.config?.type === ValidationType.EMAIL) {
    return {
      item,
      result: {
        error: !isValid,
        message: isValid ? "" : errorMessages.email,
      },
    };
  }

  return {
    item,
    result,
  };
};

export const password = ({
  item,
  result,
}: ValidationPipeArg): ValidationPipeArg => {
  if (result.error) return { item, result };

  const regex = /((?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])){8,12}/;

  const state = item.payload[item.name];
  const isValid = regex.test(state);

  if (item.config?.type === ValidationType.PASSWORD) {
    return {
      item,
      result: {
        error: !isValid,
        message: isValid ? "" : errorMessages.password,
      },
    };
  }

  return {
    item,
    result,
  };
};
