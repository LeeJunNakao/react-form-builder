import { daysInMonth, getWeekday, range } from "utils/functions";

type Props = {
  year: number;
  month: number;
  day: number;
  setDay: (day: number) => void;
};
const Day = (props: Props) => {
  const weekdaysArray = range(7).map((count: number) =>
    getWeekday(2022, 2, 6 + count)
  );
  const WeekDays = weekdaysArray.map((i) => <span key={i}>{i}</span>);

  const generateDaysArray = () => {
    const monthLength = daysInMonth(props.year, props.month);
    const firstWeekday = getWeekday(props.year, props.month, 1);
    const firstWeekdayIndex = weekdaysArray.indexOf(firstWeekday);
    const daysArray = range(6).map((_) => range(7));
    const firstWeekLength = 7 - firstWeekdayIndex;

    const parsedDaysArray = daysArray.map((weekArr, index) => {
      if (index === 0) {
        return weekArr.map((day, dayIndex) =>
          dayIndex >= firstWeekdayIndex
            ? dayIndex - firstWeekdayIndex + 1
            : null
        );
      }

      return weekArr.map((day) => {
        const currentDay = firstWeekLength + 1 + day + (index - 1) * 7;
        return currentDay < monthLength + 1 ? currentDay : null;
      });
    });

    return parsedDaysArray;
  };

  const Days = generateDaysArray().map((weekArr, index) => (
    <div className="calendar-week" key={index}>
      <>
        {weekArr.map((day, i) => (
          <div
            key={`day-${i}-${day}`}
            className={day === props.day ? "selected" : ""}
            onClick={() => day && props.setDay(day)}
          >
            <span>{day || ""}</span>
          </div>
        ))}
      </>
    </div>
  ));

  return (
    <div className="calendar-days">
      <div className="weekdays">{WeekDays}</div>
      {Days}
    </div>
  );
};

export default Day;
