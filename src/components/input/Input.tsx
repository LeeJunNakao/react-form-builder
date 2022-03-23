import React from "react";
import { useEffect, useState } from "react";
import { InputProps } from "@src/components/types";
import "./styles.scss";

const Input: React.FC<InputProps> = (props: InputProps) => {
  const [value, setValue] = useState(props.value || "");

  useEffect(() => {
    if (props.value) setValue(props.value);
  }, []);

  useEffect(() => {
    if (props.shouldClear) setValue("");
  }, [props.shouldClear]);

  const handleContent = (event: any) => {
    const content = event.target.value;
    setValue(content);
  };

  const handleBlur = () => {
    if (props.onChange) props.onChange(value);
  };

  return (
    <div className="input-component-wrapper">
      <input
        type={props.type}
        className="input-component"
        value={value}
        placeholder={props?.placeholder}
        onChange={handleContent}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
