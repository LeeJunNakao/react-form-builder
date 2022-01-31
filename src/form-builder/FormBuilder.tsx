import { useEffect, useState } from "react";
import { inputsOptionsDefault } from "./config";
import { inferType, InputsOptions } from "./fn";
import { v4 as uuidv4 } from "uuid";
import { SelectOption } from "components/protocols";
import InputWrapper from "./InputWrapper";
import "./styles.scss";

export enum ValidationType {
  EMAIL = "email",
  PASSWORD = "password",
}

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

type Payload = {
  [fieldName: string]: any;
};

export type FormConfig = {
  title?: string;
  config: FormItemConfig[];
  inputsOptions?: InputsOptions;
};

function FormBuilder(props: FormConfig) {
  const [showErrors, setShowErrors] = useState(false);
  const inputsOptions = props.inputsOptions || inputsOptionsDefault;
  const payload = {} as Payload;

  const handlePayload = (name: string) => (value: any) => {
    payload[name] = value;
  };

  const Inputs = props.config.map((item) => {
    const Component = inferType(item.config.inputType, inputsOptions);
    const colStyle = item.config.style?.cols
      ? `col-${item.config.style?.cols}`
      : "col-12";

    return (
      <div className={`form_builder__item ${colStyle}`} key={uuidv4()}>
        <div className="form_builder__item-label">
          <span>{item.label}</span>
        </div>

        <InputWrapper
          component={Component}
          onChange={handlePayload(item.name)}
          itemData={item}
          showErrors={showErrors}
          setShowErrors={setShowErrors}
          {...item.config.props}
        ></InputWrapper>
      </div>
    );
  });

  const onClickSubmit = () => {
    console.log("onClickSubmit!", payload);
    setShowErrors(true);
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
