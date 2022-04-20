import _isEmpty from 'lodash/isEmpty';

export const n6 = new Intl.NumberFormat('en-us', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 6
});
export const n4 = new Intl.NumberFormat('en-us', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 4
});

export const getCurrencyUSD = (value: number) =>
  new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);

export const getCurrencyToken = (value: number) => getCurrencyUSD(value).substring(1);

/**
 * Returns a string of form "abc...xyz"
 * @param {string} str string to string
 * @param {number} n number of chars to keep at front/end
 * @returns {string}
 */
export const getEllipsisTxt = (str?: string | null, n = 6): string => {
  if (str) {
    return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
  }
  return '';
};

export const tokenValue = (value: number, decimals: number): number =>
  decimals ? value / Math.pow(10, decimals) : value;

/**
 * Return a formatted string with the symbol at the end
 * @param {number} value integer value
 * @param {number} decimals number of decimals
 * @param {string} symbol token symbol
 * @returns {string}
 */
export const tokenValueTxt = (value: number, decimals: number, symbol: string): string =>
  `${n4.format(tokenValue(value, decimals))} ${symbol}`;

export const formatUsername = (username: string) =>
  username && !_isEmpty(username) ? (username.startsWith('0x') ? getEllipsisTxt(username) : username) : '';
