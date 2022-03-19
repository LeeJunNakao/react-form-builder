import { v4 as uuidv4 } from "uuid";
import { SelectOption } from "@src/components/types";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

type Props = {
  options: SelectOption[];
  content: SelectOption[];
  handleChange: (option: SelectOption) => void;
};

const Options = (props: Props) => {
  const optionsDOM = props.options.map((option) => {
    const isSelected = props.content.some((c) => c.value === option.value);

    const Icon = isSelected ? BiCheckboxChecked : BiCheckbox;

    return (
      <div
        className="option"
        key={uuidv4()}
        onClick={() => props.handleChange(option)}
      >
        <Icon /> <span>{option.label}</span>
      </div>
    );
  });

  return <>{optionsDOM}</>;
};

export default Options;
