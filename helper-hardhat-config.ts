import {
  eEthereumNetwork,
  ePolygonNetwork,
  eXDaiNetwork,
  iParamsPerNetwork,
} from './helpers/types';

import dotenv from 'dotenv';
dotenv.config({});

const GWEI = 1000 * 1000 * 1000;

export const NETWORKS_RPC_URL: iParamsPerNetwork<string> = {
  [eEthereumNetwork.main]: process.env.MAINNET_RPC_URL,
  [eEthereumNetwork.hardhat]: 'http://localhost:8545',
  [eXDaiNetwork.xdai]: 'https://rpc.xdaichain.com/',
  [eEthereumNetwork.sepolia]: process.env.SEPOLIA_RPC_URL,
  [ePolygonNetwork.mumbai]: process.env.MUMBAI_RPC_URL,
  [ePolygonNetwork.matic]: process.env.POLYGON_RPC_URL,
};
