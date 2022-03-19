import React, { useState, createRef } from "react";
import { useEffect } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { SelectOption, SelectProps } from "@src/components/types";
import Options from "./Options";
import "./styles.scss";

const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const [content, setContent] = useState<SelectOption | undefined>();
  const [contentDisplay, setContentDisplay] = useState<string>("");
  const [isOpened, setIsOpened] = useState(false);

  const options = props.options || [];

  useEffect(() => {
    if (props.value) {
      const optionSelected = options.find((i) => i.value === props.value);
      if (optionSelected) setContent(optionSelected);
    }
  }, []);

  useEffect(() => {
    if (content) {
      setContentDisplay(content.label);
    }
  }, [content]);

  useEffect(() => {
    if (props.shouldClear) setContent(undefined);
  }, [props.shouldClear]);

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
    if (props.onChange) props.onChange(option.value);
  };

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
            {options.length ? (
              <Options options={options} handleChange={handleChange} />
            ) : (
              <div className="option empty-message">
                <span>No options </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
