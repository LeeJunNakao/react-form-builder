import React from "react";

type Props = {
  year: number;
  month: number;
  goPrevious: () => void;
  goNext: () => void;
};

const Month = (props: Props) => {
  const monthName = new Date(props.year, props.month).toLocaleDateString(
    "default",
    {
      month: "long",
    }
  );

  return (
    <div className="calendar-month">
      <input
        type="button"
        value="<"
        onClick={props.goPrevious}
        className="calendar-arrow"
      />
      <span className="month-name">{monthName}</span>
      <input
        type="button"
        value=">"
        onClick={props.goNext}
        className="calendar-arrow"
      />
    </div>
  );
};

export default Month;
