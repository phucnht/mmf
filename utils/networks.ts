export interface NetworkConfigProps {
  chainName: string;
  chainId: string;
  nativeCurrency: any;
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

export const networkConfigs: Record<string, NetworkConfigProps> = {
  137: {
    chainName: 'Polygon Mainnet',
    chainId: '0x89',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://polygon-rpc.com'],
    blockExplorerUrls: ['https://polygonscan.com']
  },
  80001: {
    chainName: 'Polygon Mumbai Testnet',
    chainId: '0x13881',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
  },
  8217: {
    chainName: 'Klaytn Mainnet Cypress',
    chainId: '0x2019',
    nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
    rpcUrls: ['https://public-node-api.klaytnapi.com/v1/cypress'],
    blockExplorerUrls: ['https://scope.klaytn.com']
  },
  1001: {
    chainName: 'Klaytn Testnet Baobab',
    chainId: '0x3e9',
    nativeCurrency: { name: 'KLAY', symbol: 'KLAY', decimals: 18 },
    rpcUrls: ['https://api.baobab.klaytn.net:8651'],
    blockExplorerUrls: ['https://baobab.scope.klaytn.com']
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
