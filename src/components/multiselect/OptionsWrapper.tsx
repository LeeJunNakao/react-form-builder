import React from "react";
import { SelectOption } from "@src/components/types";
import Options from "./Options";

type Props = {
  content: SelectOption[];
  isOpened: boolean;
  optionsWrapperRef: React.RefObject<any>;
  optionsRef: React.RefObject<any>;
  options: SelectOption[];
  handleChange: (option: SelectOption) => void;
};

const OptionsWrapper = (props: Props) => {
  return (
    <div
      className="options-wrapper"
      ref={props.optionsWrapperRef as React.RefObject<HTMLDivElement>}
    >
      {props.isOpened && (
        <div
          className="select-options"
          ref={props.optionsRef as React.RefObject<HTMLDivElement>}
          tabIndex={0}
        >
          {props.options.length ? (
            <Options
              options={props.options}
              content={props.content}
              handleChange={props.handleChange}
            />
          ) : (
            <div className="option empty-message">
              <span>No options </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OptionsWrapper;
