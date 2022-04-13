export interface NetworkConfigProps {
  chainId: number;
  chainName: string;
  currencyName: string;
  currencySymbol: string;
  rpcUrl: string;
  blockExplorerUrl: string;
  wrapped?: string;
}

export const networkConfigs: Record<string, NetworkConfigProps> = {
  '0x38': {
    chainId: 56,
    chainName: 'Smart Chain',
    currencyName: 'BNB',
    currencySymbol: 'BNB',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    blockExplorerUrl: 'https://bscscan.com/',
    wrapped: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  },
  '0x61': {
    chainId: 97,
    chainName: 'Smart Chain - Testnet',
    currencyName: 'BNB',
    currencySymbol: 'BNB',
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    blockExplorerUrl: 'https://testnet.bscscan.com/'
  }
};

export const getPolygonFee = (chainId: number) => {
  if (chainId === 80001)
    return fetch('https://gasstation-mumbai.matic.today/v2')
      .then(response => response.json())
      .then(data => data.fast.maxFee * 1e9);
  if (chainId === 137)
    return fetch('https://gasstation-mainnet.matic.network/v2')
      .then(response => response.json())
      .then(data => data.fast.maxFee * 1e9);
};

export const getNativeByChain = (chain: string): string => networkConfigs[chain]?.currencySymbol || 'NATIVE';

export const getChainById = (chain: string): number | null => networkConfigs[chain]?.chainId || null;

export const getExplorer = (chain: string): string => networkConfigs[chain]?.blockExplorerUrl;

export const getWrappedNative = (chain: string): string | null => networkConfigs[chain]?.wrapped || null;

export const hasEthereum = typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';

export const isProduction = process.env.NODE_ENV === 'production';

export function insertParam(key: string, value: any) {
  key = encodeURIComponent(key);
  value = encodeURIComponent(value);

  // kvp looks like ['key1=value1', 'key2=value2', ...]
  const kvp = document.location.search.substr(1).split('&');
  let i = 0;

  for (; i < kvp.length; i++) {
    if (kvp[i].startsWith(key + '=')) {
      const pair = kvp[i].split('=');
      pair[1] = value;
      kvp[i] = pair.join('=');
      break;
    }
  }

  if (i >= kvp.length) {
    kvp[kvp.length] = [key, value].join('=');
  }

  // can return this or...
  const params = kvp.join('&');

  // reload page with new params
  document.location.search = params;
}
