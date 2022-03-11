export declare const pipe: (arg: any, ...fns: ((args: any) => any)[]) => any;
declare type Data = {
    [k: string]: any;
};
export declare const arrayToObject: (arr: Data[]) => Data;
export declare const range: (n: number) => number[];
export declare const daysInMonth: (year: number, month: number) => number;
export declare const getWeekday: (year: number, month: number, day: number) => string;
export {};
