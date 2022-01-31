import React, { useState, useEffect } from "react";
import { HookSetState } from "components/protocols";
import { validator, Item } from "utils/validator";
import { FormItemConfig } from "./FormBuilder";

type Props = {
  component: React.FC<any>;
  itemData: FormItemConfig;
  showErrors: boolean;
  setShowErrors: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: HookSetState;
};

function InputWrapper(props: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (props.itemData.config.validation) {
      const validation = validator({ ...props.itemData, state: value });
      if (validation.result.error) {
        setError(validation.result.message);
      } else {
        setError("");
      }
    }
  }, [value]);

  const Component = props.component;

  const handleChange = (value: string) => {
    setValue(value);
    props.onChange(value);
  };

  return (
    <div className="form-input-wrapper">
      <Component {...props} onChange={handleChange} />
      <div className="error-message">
        <span>{props.showErrors && error}</span>
      </div>
    </div>
  );
}

export default InputWrapper;
