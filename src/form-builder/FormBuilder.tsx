import { useEffect } from "react";
import { inputsOptionsDefault } from "./config";
import { inferType, InputsOptions } from "./fn";
import { v4 as uuidv4 } from "uuid";
import { SelectOption } from "components/protocols";
import "./styles.scss";

type FormItemConfig = {
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
  };
};

export type FormConfig = {
  title?: string;
  config: FormItemConfig[];
  inputsOptions?: InputsOptions;
};

function FormBuilder(props: FormConfig) {
  const inputsOptions = props.inputsOptions || inputsOptionsDefault;

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

        <Component key={uuidv4()} {...item.config.props} />
      </div>
    );
  });

  return (
    <div className="form-builder">
      <div className="form-builder__title-wrapper">
        <span className="form-builder__title">{props.title}</span>
      </div>

      <div className="form-builder__items grid">{Inputs}</div>
    </div>
  );
}

export default FormBuilder;
