import React from "react";
declare type Props = {
    year: number;
    month: number;
    goPrevious: () => void;
    goNext: () => void;
};
declare const Month: React.FC<Props>;
export default Month;
