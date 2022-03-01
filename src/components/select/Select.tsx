import React, { useState, createRef } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { SelectOption, SelectProps } from "../protocols";
import "./styles.scss";

function Select(props: SelectProps) {
  const [content, setContent] = useState<SelectOption | undefined>();
  const [contentDisplay, setContentDisplay] = useState<string>("");
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (content) setContentDisplay(content.label);
    if (props.onChange) props.onChange(content?.value);
  }, [content]);

  useEffect(() => {
    const selectedOption = props.options.find((i) => i.value === props.value);
    setContent(selectedOption);
  }, [props.value]);

  const optionsWrapperRef = createRef();
  const optionsRef = createRef();

  useEffect(() => {
    const wrapperWidth = (optionsWrapperRef.current as HTMLDivElement)
      .offsetWidth;

    const options = optionsRef.current as HTMLDivElement;
    if (options) {
      options.style.width = `${wrapperWidth}px`;
    }
  }, [optionsWrapperRef, optionsRef]);

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

    setIsOpened(false);
  };

  const options = props.options || [];
  const Options = options.map((option) => {
    return (
      <div
        className="option"
        key={uuidv4()}
        onClick={() => handleChange(option)}
      >
        <span>{option.label}</span>
      </div>
    );
  });

  const EmptyMessage = (
    <div className="option empty-message">
      <span>No options </span>
    </div>
  );

  return (
    <div
      className="select-component-wrapper"
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <div className="select-input">
        <div className="select-content">{contentDisplay}</div>
        {isOpened ? (
          <MdArrowDropUp className="arrow-icon" />
        ) : (
          <MdArrowDropDown className="arrow-icon" />
        )}
      </div>

      <div
        className="options-wrapper"
        ref={optionsWrapperRef as React.RefObject<HTMLDivElement>}
      >
        {isOpened && (
          <div
            className="select-options"
            ref={optionsRef as React.RefObject<HTMLDivElement>}
            tabIndex={0}
          >
            {options.length ? Options : EmptyMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default Select;
