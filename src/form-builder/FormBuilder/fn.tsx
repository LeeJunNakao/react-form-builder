import React, { createRef, RefObject } from "react";
import { v4 as uuidv4 } from "uuid";
import { InputsOptions, FormConfig, Payload } from "@src/form-builder/types";
import { inputsOptionsDefault } from "./config";
import InputWrapper from "../InputWrapper";

export const inferType = (typeValue: string, collection: InputsOptions) =>
  collection[typeValue];

type ConfigInputsArgs = FormConfig & {
  payload: RefObject<Payload>;
  shouldClear: Boolean;
  setFormContent: (name: string, value: any) => void;
};

export const configInputs = ({
  config,
  inputsOptions,
  payload,
  formContent,
  shouldClear,
  setFormContent,
  onChange,
}: ConfigInputsArgs) => {
  const options = inputsOptions
    ? { ...inputsOptionsDefault, ...inputsOptions }
    : inputsOptionsDefault;

  return config.map((item) => {
    const Component = inferType(item.config.inputType, options);
    const colStyle = item.config.style?.cols
      ? `col-${item.config.style?.cols}`
      : "col-12";

    const ref = createRef<any>();

    const component = (
      <div className={`form_builder__item ${colStyle}`} key={uuidv4()}>
        <div className="form_builder__item-label">
          <span>{item.label}</span>
        </div>

        <InputWrapper
          component={Component}
          itemData={item}
          formData={formContent}
          setFormData={setFormContent}
          ref={ref}
          payload={payload}
          onChange={onChange}
          shouldClear={shouldClear}
          {...item.config.props}
        />
      </div>
    );

    return { component, ref, name: item.name };
  });
};
