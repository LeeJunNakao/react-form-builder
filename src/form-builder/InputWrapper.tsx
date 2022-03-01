import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { validator } from "utils/validator";
import { FormItemConfig, Payload } from "./FormBuilder";

type Props = {
  component: React.FC<any>;
  itemData: FormItemConfig;
  formData: Payload;
  showErrors: boolean;
};

const InputWrapper = forwardRef((props: Props, ref) => {
  const [value, setValue] = useState(props.formData[props.itemData.name] || "");
  const [error, setError] = useState("");

  const Component = props.component;

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    getErrorMessage: () => error,
  }));

  useEffect(() => {
    const {
      result: { message },
    } = validator({ ...props.itemData, state: value });
    setError(message);
  }, [value]);

  return (
    <div className="form-input-wrapper">
      <Component
        {...props}
        value={props.formData[props.itemData.name]}
        onChange={setValue}
      />
      <div className="error-message">
        <span>{props.showErrors && error}</span>
      </div>
    </div>
  );
});

export default InputWrapper;
