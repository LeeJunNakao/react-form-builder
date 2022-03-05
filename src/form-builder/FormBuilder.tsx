import React, { useState, createRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { SelectOption } from "@src/components/protocols";
import { arrayToObject } from "@src/utils/functions";
import { inputsOptionsDefault } from "./config";
import { inferType, InputsOptions } from "./fn";
import InputWrapper from "./InputWrapper";
import "./styles.scss";

export enum ValidationType {
  EMAIL = "email",
  PASSWORD = "password",
}

export type JSXElement = JSX.Element;

export type FormItemConfig = {
  name: string;
  label?: string;
  config: {
    inputType: string;
    style?: {
      cols?: number;
    };
    props?: {
      options?: SelectOption[];
    };
    validation?: {
      required?: boolean;
      type?: ValidationType;
      callback?: (arg?: any) => any;
    };
  };
};

export type Payload = {
  [fieldName: string]: any;
};

export type FormConfig = {
  title?: string;
  config: FormItemConfig[];
  inputsOptions?: InputsOptions;
  formContent?: Payload;
  onValid?: (payload: Payload) => void;
  onInvalid?: (payload: Payload) => void;
};

function FormBuilder(props: FormConfig): JSX.Element {
  const [showErrors, setShowErrors] = useState(true);
  const inputsOptions = props.inputsOptions
    ? { ...inputsOptionsDefault, ...props.inputsOptions }
    : inputsOptionsDefault;
  const [payload, setPayload] = useState<Payload>({});

  useEffect(() => {
    if (props.formContent) setPayload(props.formContent);
  }, []);

  const InputsData = props.config.map((item) => {
    const Component = inferType(item.config.inputType, inputsOptions);
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
          showErrors={showErrors}
          formData={payload}
          ref={ref}
          {...item.config.props}
        />
      </div>
    );

    return { component, ref, name: item.name };
  });

  const Inputs = InputsData.map((i) => i.component);

  const onClickSubmit = () => {
    const data = InputsData.map((i) => ({
      [i.name]: i.ref.current?.getValue(),
    }));
    const errors = InputsData.map((i) => i.ref.current?.getErrorMessage());
    const isFormValid = Object.values(errors).every((i) => !i);

    if (isFormValid) {
      if (props.onValid) {
        props.onValid(arrayToObject(data));
        setPayload(arrayToObject(data));
      }
    } else {
      if (props.onInvalid) props.onInvalid(arrayToObject(data));
    }
  };

  return (
    <div className="form-builder">
      <div className="form-builder__title-wrapper">
        <span className="form-builder__title">{props.title}</span>
      </div>

      <div className="form-builder__items grid">{Inputs}</div>
      <div className="form-builder__buttons">
        <button className="form-builder__button" onClick={onClickSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default FormBuilder;
