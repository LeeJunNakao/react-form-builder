import React, { useEffect, useRef, useState } from "react";
import Buttons from "./Buttons";
import { configInputs } from "./fn";
import { ErrorData, FormConfig, Payload } from "@src/form-builder/types";
import { validator } from "@src/utils/validator";
import "./styles.scss";

const FormBuilder: React.FC<FormConfig> = (props: FormConfig) => {
  const payload = useRef<Payload>({});
  const setPayload = (name: string, value: any) =>
    (payload.current = { ...payload.current, [name]: value });
  const [shouldClear, setShouldClear] = useState(false);
  const [errors, setErrors] = useState<ErrorData>({});

  useEffect(() => {
    if (shouldClear) setShouldClear(false);
  }, [shouldClear]);

  useEffect(() => {
    if (props.formContent) payload.current = props.formContent;
  }, []);

  const InputsData = configInputs({
    ...props,
    payload,
    shouldClear,
    errors,
    setFormContent: setPayload,
  });

  const Inputs = InputsData.map((i) => i.component);

  const onClickSubmit = () => {
    const errorsResult = validator({ payload, config: props.config });
    const isFormValid = Object.values(errorsResult).every((i) => !i);

    if (isFormValid) {
      if (props.onValid) {
        props.onValid(payload.current);
      }
      setErrors({});
    } else {
      if (props.onInvalid) props.onInvalid(payload.current);
      setErrors({ ...errorsResult });
    }
  };

  const clear = () => {
    setShouldClear(true);
    payload.current = {};
  };

  return (
    <div className="form-builder">
      <div className="form-builder__title-wrapper">
        <span className="form-builder__title">{props.title}</span>
      </div>

      <div className="form-builder__items">{Inputs}</div>
      {(props.submitButton && props.submitButton(onClickSubmit)) || (
        <Buttons onSubmit={onClickSubmit} clear={clear} />
      )}
    </div>
  );
};

export default FormBuilder;
