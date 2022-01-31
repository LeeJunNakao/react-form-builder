import { useEffect, useState } from "react";
import { handleChange } from "utils/components-aux";
import { InputProps } from "../protocols";
import "./styles.scss";

function Input(props: InputProps) {
  const [value, setValue] = useState("");

  const handleContent = (event: any) => {
    const content = event.target.value;
    setValue(content);
  };

  useEffect(() => {
    if (props.onChange) props.onChange(value);
  }, [value]);

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
}

export default Input;
