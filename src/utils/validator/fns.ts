import { Item, ValidationPipeArg } from "./index";
import { ValidationType } from "form-builder/FormBuilder";
import errorMessages from "./messages";

const getDefaultResult = () => ({ error: false, message: "" });

export const required = (item: Item): ValidationPipeArg => {
  if (item.config.validation?.required) {
    const state = item.state;
    const hasError = state === undefined || state === null || state === "";
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

  if (item.config.validation?.callback) {
    const state = item.state;
    return {
      item,
      result: item.config.validation.callback(state),
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

  const state = item.state;
  const isValid = regex.test(state);

  if (item.config.validation?.type === ValidationType.EMAIL) {
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

  const state = item.state;
  const isValid = regex.test(state);

  if (item.config.validation?.type === ValidationType.PASSWORD) {
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
