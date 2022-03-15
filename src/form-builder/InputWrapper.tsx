import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  RefObject,
} from "react";
import { validator } from "@src/utils/validator";
import { FormItemConfig, Payload } from "@src/index.d";

type Props = {
  component: React.FC<any>;
  itemData: FormItemConfig;
  formData: Payload;
  showErrors: boolean;
  inputsRefs: RefObject<any>[];
  updateOnChange: () => void;
};

const InputWrapper = forwardRef((props: Props, ref) => {
  const [value, setValue] = useState(props.formData[props.itemData.name] || "");
  const [error, setError] = useState("");

  const Component = props.component;

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    getName: () => props.itemData.name,
    getErrorMessage: () => error,
  }));

  useEffect(() => {
    const {
      result: { message },
    } = validator({
      ...props.itemData,
      state: value,
      inputRefs: props.inputsRefs,
    });
    setError(message);
    props.updateOnChange();
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
