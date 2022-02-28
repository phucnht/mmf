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

export const getNativeByChain = (chain: string): string => networkConfigs[chain]?.currencySymbol || 'NATIVE';

export const getChainById = (chain: string): number | null => networkConfigs[chain]?.chainId || null;

export const getExplorer = (chain: string): string => networkConfigs[chain]?.blockExplorerUrl;

export const getWrappedNative = (chain: string): string | null => networkConfigs[chain]?.wrapped || null;

export const hasEthereum = typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';

export const isProduction = process.env.NODE_ENV === 'production';
