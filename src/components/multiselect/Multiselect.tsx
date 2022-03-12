import React, { useState, createRef } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import { SelectOption, SelectProps } from "@src/index.d";
import "./styles.scss";

const Multiselect: React.FC<SelectProps> = (props: SelectProps) => {
  const [content, setContent] = useState<SelectOption[]>([]);
  const [contentDisplay, setContentDisplay] = useState<string[]>([]);
  const [isOpened, setIsOpened] = useState(false);

  const selectedValues = content.map((c) => c.value);

  useEffect(() => {
    const displayLabels = content.map((c) => c.label);

    setContentDisplay(displayLabels);
    if (props.onChange) props.onChange(selectedValues);
  }, [content]);

  useEffect(() => {
    if (props.value) {
      const parsedValue = props.options.filter((o) =>
        (props.value as string[]).includes(o.value)
      );
      setContent(parsedValue);
    }
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
    const isSelected = content.find((c) => c.value === option.value);
    if (isSelected) {
      const selected = content.filter((c) => c.value !== option.value);
      setContent(selected);
    } else {
      setContent([...content, option]);
    }

    setIsOpened(false);
  };

  const options = props.options || [];
  const Options = options.map((option) => {
    const isSelected = content.some((c) => c.value === option.value);

    const Icon = isSelected ? BiCheckboxChecked : BiCheckbox;

    return (
      <div
        className="option"
        key={uuidv4()}
        onClick={() => handleChange(option)}
      >
        <Icon /> <span>{option.label}</span>
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
        <div className="select-content">{contentDisplay.join(", ")}</div>
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
};

export default Multiselect;
