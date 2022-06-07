import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import ERC20 from './abis/ERC20.json';
import ERC721 from './abis/ERC721.json';
import nftAbi from './abis/nftAbi.json';
import marketplaceAbi from './abis/marketplaceAbi.json';
import metaverseAbi from './abis/metaverseAbi.json';
import whitelistAbi from './abis/whitelistAbi.json';

export const web3 = new Web3();

export const erc20Contract = (address: string) => new web3.eth.Contract(ERC20.abi as AbiItem[], address);
export const erc721Contract = (address: string) => new web3.eth.Contract(ERC721.abi as AbiItem[], address);
export const nftContract = (address: string) => new web3.eth.Contract(nftAbi as AbiItem[], address);
export const marketContract = (address: string) => new web3.eth.Contract(marketplaceAbi as AbiItem[], address);
export const metaverseContract = (address: string) => new web3.eth.Contract(metaverseAbi as AbiItem[], address);
export const whitelistContract = (address: string) => new web3.eth.Contract(whitelistAbi as AbiItem[], address);
