import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';

import erc20 from './abis/ERC20.json';
import erc721 from './abis/ERC721.json';
import erc1155 from './abis/ERC1155.json';
import whitelist from './abis/whitelist.json';
import metaverse from './abis/metaverse.json';
import marketplace from './abis/marketplace.json';
import season from './abis/season.json';

import plgMetafarm from './abis/plg_metafarm.json';
import plgMetaverse from './abis/plg_metaverse.json';
import plgMarketplace from './abis/plg_marketplace.json';
import plgWhitelist from './abis/plg_whitelist.json';

export const SEASON_ADDRESS = '0x5B315294E4701cF269d9607b9a68f7E2f4B31B59';

export const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

export const MAX_INT = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
export const MAX_ALLOWANCE = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

export const erc20Contract = (address?: string): Contract => new web3.eth.Contract(erc20 as AbiItem[], address);
export const erc721Contract = (address?: string): Contract => new web3.eth.Contract(erc721 as AbiItem[], address);
export const erc1155Contract = (address?: string): Contract => new web3.eth.Contract(erc1155 as AbiItem[], address);

export const marketplaceContract = (address?: string): Contract =>
  new web3.eth.Contract(marketplace as AbiItem[], address);
export const whitelistContract = (address?: string): Contract => new web3.eth.Contract(whitelist as AbiItem[], address);
export const metaverseContract = (address?: string): Contract => new web3.eth.Contract(metaverse as AbiItem[], address);
export const seasonContract = (address?: string): Contract => new web3.eth.Contract(season as AbiItem[], address);

export const plgMetafarmContract = (address?: string): Contract =>
  new web3.eth.Contract(plgMetafarm as AbiItem[], address);
export const plgMarketplaceContract = (address?: string): Contract =>
  new web3.eth.Contract(plgMarketplace as AbiItem[], address);
export const plgMetaverseContract = (address?: string): Contract =>
  new web3.eth.Contract(plgMetaverse as AbiItem[], address);
export const plgWhitelistContract = (address?: string): Contract =>
  new web3.eth.Contract(plgWhitelist as AbiItem[], address);
