export const toPercentage = (value: number, total: number): number => {
  return (value / total) * 100;
};

export const toK = (value: number): string => {
  return value < 1000 ? `${value}` : `${value / 1000}K`;
};

export const zeroPad = (num: number, places = 2) => String(num).padStart(places, '0');
