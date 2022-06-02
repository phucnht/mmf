import { web3 } from 'contracts';

export const formatNumber = (number) => Number(number ?? 0).toLocaleString();

export const shorten = (address, head = 8, tail = 6) => {
  if (!web3.utils.isAddress(address)) return address;
  return address.slice(0, head) + '...' + address.slice(address.length - tail);
};

export const getBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(file);
};

export const randomTokenID = () => {
  const mils = Date.now() % (1e9 + 7);
  const rand = Math.floor(Math.random() * 9e3) + 1e3;
  return `${mils}${rand}`;
};

export const getPolygonFee = (chainId) => {
  if (chainId === 80001)
    return fetch('https://gasstation-mumbai.matic.today/v2')
      .then((response) => response.json())
      .then((data) => data.fast.maxFee * 1e9);
  if (chainId === 137)
    return fetch('https://gasstation-mainnet.matic.network/v2')
      .then((response) => response.json())
      .then((data) => data.fast.maxFee * 1e9);
};

export { default as merge } from './merge';
