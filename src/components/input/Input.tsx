import { useState } from "react";
import { handleChange } from "utils/components-aux";
import { InputProps } from "../protocols";
import "./styles.scss";

function Input(props: InputProps) {
  const [content, setContent] = useState("");

  return (
    <div className="input-component-wrapper">
      <input
        type="text"
        className="input-component"
        value={content}
        placeholder={props?.placeholder}
        onChange={handleChange(setContent, props.onChange)}
      />
    </div>
  );
}

export default Input;
