import React from "react";
import { useState, KeyboardEvent, ChangeEvent } from "react";

type Props = {
  year: number;
  setYear: (year: number) => void;
  goPrevious: () => void;
  goNext: () => void;
};

const YearBox: React.FC<Props> = (props: Props) => {
  const [year, setYear] = useState(props.year);
  const [edit, setEdit] = useState(false);

  const handlePress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      props.setYear(year);
      setEdit(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setYear(Number(event.target.value));
  };

  return (
    <div className="calendar-header">
      <input
        type="button"
        value="<"
        onClick={props.goPrevious}
        className="calendar-arrow"
      />
      {edit ? (
        <input
          className="edit-year-input"
          onKeyDown={handlePress}
          onChange={handleChange}
          value={year}
        />
      ) : (
        <span onClick={() => setEdit(true)}>{props.year}</span>
      )}
      <input
        type="button"
        value=">"
        onClick={props.goNext}
        className="calendar-arrow"
      />
    </div>
  );
};

export default YearBox;
