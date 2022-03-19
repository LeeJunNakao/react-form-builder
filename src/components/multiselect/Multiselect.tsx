import React, { useState, createRef } from "react";
import { useEffect } from "react";
import { SelectOption, SelectProps } from "@src/components/types";
import { handleDisplayBlur } from "@src/utils/components-aux";
import Options from "./Options";
import SelectInput from "./SelectInput";
import OptionsWrapper from "./OptionsWrapper";
import "./styles.scss";

const Multiselect: React.FC<SelectProps> = (props: SelectProps) => {
  const [content, setContent] = useState<SelectOption[]>([]);
  const [contentDisplay, setContentDisplay] = useState<string[]>([]);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenClose = (status: boolean) => {
    const selectedValues = content.map((c) => c.value);
    if (!status && props.onChange) {
      props.onChange([...selectedValues]);
    }

    setIsOpened(status);
  };

  useEffect(() => {
    const displayLabels = content.map((c) => c.label);

    setContentDisplay(displayLabels);
  }, [content]);

  useEffect(() => {
    if (props.shouldClear) {
      setContent([]);
      if (props.onChange) props.onChange([]);
    }
  }, [props.shouldClear]);

  useEffect(() => {
    if (props.value) {
      const parsedValue = props.options
        .filter((o) => (props.value as string[]).includes(o.value))
        .map((i) => ({ label: i.label, value: i.value }));
      setContent(parsedValue);
    }
  }, []);

  const optionsWrapperRef = createRef();
  const optionsRef = createRef();
  const componentRef = createRef<HTMLDivElement>();

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
      if (!isRelated) handleOpenClose(!isOpened);
    }
  };

  const handleBlur = handleDisplayBlur(componentRef, handleOpenClose);

  const handleChange = (option: SelectOption) => {
    const isSelected = content.find((c) => c.value === option.value);
    if (isSelected) {
      const selected = content.filter((c) => c.value !== option.value);
      setContent(selected);
    } else {
      setContent([...content, option]);
    }
  };

  const options = props.options || [];

  return (
    <div
      className="select-component-wrapper"
      onClick={handleClick}
      onBlur={handleBlur}
      tabIndex={0}
      ref={componentRef}
    >
      <SelectInput isOpened={isOpened} contentDisplay={contentDisplay} />
      <OptionsWrapper
        content={content}
        isOpened={isOpened}
        optionsWrapperRef={optionsWrapperRef}
        optionsRef={optionsRef}
        options={options}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Multiselect;
