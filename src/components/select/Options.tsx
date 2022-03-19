import { v4 as uuidv4 } from "uuid";
import { SelectOption } from "@src/components/types";

type Props = {
  options: SelectOption[];
  handleChange: (option: SelectOption) => void;
};

const Options = (props: Props) => {
  const options = (props.options || []).map((option) => {
    return (
      <div
        className="option"
        key={uuidv4()}
        onClick={() => props.handleChange(option)}
      >
        <span>{option.label}</span>
      </div>
    );
  });

  return <>{options}</>;
};

export default Options;
