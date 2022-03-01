export const pipe = (arg: any, ...fns: Array<(args: any) => any>) => {
  return fns.reduce((acc, fn) => fn(acc), arg);
};

type Data = { [k: string]: any };

export const arrayToObject = (arr: Data[]) =>
  arr.reduce(
    (acc, curr) => ({
      ...acc,
      ...curr,
    }),
    {}
  );

export const range = (n: number) => [...new Array(n).keys()];

export const daysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

export const getWeekday = (year: number, month: number, day: number) =>
  new Date(year, month, day).toLocaleDateString("default", {
    weekday: "short",
  });
