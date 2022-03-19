import React, { useState, forwardRef, RefObject, useEffect } from "react";
import { FormItemConfig, Payload } from "@src/form-builder/types";

type Props = {
  component: React.FC<any>;
  itemData: FormItemConfig;
  formData: Payload | undefined;
  payload: RefObject<Payload>;
  shouldClear: Boolean;
  setFormData: (name: string, value: any) => void;
  showErrors?: boolean;
  onChange?: (value: Payload) => void;
};

const InputWrapper = forwardRef((props: Props, ref) => {
  const [error, setError] = useState("");

  const Component = props.component;

  const onChange = (v: any) => {
    props.setFormData(props.itemData.name, v);
    if (props.onChange) {
      props.onChange(props.payload.current!);
    }
  };

  return (
    <div className="form-input-wrapper">
      <Component
        {...props}
        name={props.itemData.name}
        value={props.formData && props.formData[props.itemData.name]}
        onChange={onChange}
        shouldClear={props.shouldClear}
      />
      <div className="error-message">
        <span>{props.showErrors && error}</span>
      </div>
    </div>
  );
});

export default InputWrapper;
