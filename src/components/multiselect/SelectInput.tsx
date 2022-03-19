import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

type Props = {
  isOpened: boolean;
  contentDisplay: string[];
};

const SelectInput = (props: Props) => {
  return (
    <div className="select-input">
      <div className="select-content">{props.contentDisplay.join(", ")}</div>
      {props.isOpened ? (
        <MdArrowDropUp className="arrow-icon" />
      ) : (
        <MdArrowDropDown className="arrow-icon" />
      )}
    </div>
  );
};

export default SelectInput;
