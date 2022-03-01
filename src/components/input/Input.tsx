import { useEffect, useState } from "react";
import { InputProps } from "../protocols";
import "./styles.scss";

const Input = (props: InputProps) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (props.value) setValue(props.value);
  }, []);

  const handleContent = (event: any) => {
    const content = event.target.value;
    setValue(content);
    if (props.onChange) props.onChange(content);
  };

  return (
    <div className="input-component-wrapper">
      <input
        type="text"
        className="input-component"
        value={value}
        placeholder={props?.placeholder}
        onChange={handleContent}
      />
    </div>
  );
};

export default Input;
