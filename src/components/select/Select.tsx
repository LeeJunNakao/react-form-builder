import React, { useState, createRef } from "react";
import { useEffect } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { SelectOption, SelectProps } from "../protocols";
import "./styles.scss";

function Select(props: SelectProps) {
  const [content, setContent] = useState<SelectOption | undefined>();
  const [contentDisplay, setContentDisplay] = useState<string>("");
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (content) setContentDisplay(content.label);
    setIsOpened(false);
  }, [content]);
  const optionsRef = createRef();

  const handleClick = (event: React.MouseEvent) => {
    if (optionsRef) {
      const isRelated = (optionsRef.current as HTMLDivElement)?.contains(
        event.target as Node
      );
      if (!isRelated) setIsOpened(!isOpened);
    }
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLDivElement, HTMLDivElement>
  ) => {
    if (event.relatedTarget !== optionsRef.current) {
      setIsOpened(false);
    }
  };

  const handleChange = (option: SelectOption) => {
    setContent(option);
  };

  const Options = props.options.map((option) => {
    return (
      <div className="option" onClick={() => handleChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div
      className="select-component-wrapper"
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <div className="select-content">{contentDisplay}</div>
      {isOpened ? <MdArrowDropUp /> : <MdArrowDropDown />}
      <div className="options-wrapper">
        {isOpened && (
          <div
            className="select-options"
            ref={optionsRef as React.RefObject<HTMLDivElement>}
            tabIndex={0}
          >
            {Options}
          </div>
        )}
      </div>
    </div>
  );
}

export default Select;
