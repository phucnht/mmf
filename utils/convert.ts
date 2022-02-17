export const toPercentage = (value: number, total: number): number => {
  return (value / total) * 100;
};

export const toK = (value: number): string => {
  return value < 1000 ? `${value}` : `${value / 1000}K`;
};

export const zeroPad = (num: number, places = 2) => String(num).padStart(places, '0');

export const convertArrayToObject = (array: any[], key: string) =>
  array.reduce((acc, curr) => ((acc[curr[key]] = curr), acc), {});
