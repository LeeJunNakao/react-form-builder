import React from "react";
declare type Props = {
    year: number;
    setYear: (year: number) => void;
    goPrevious: () => void;
    goNext: () => void;
};
declare const YearBox: React.FC<Props>;
export default YearBox;
