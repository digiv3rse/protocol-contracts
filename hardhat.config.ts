import { HardhatUserConfig } from 'hardhat/types';
import { accounts } from './helpers/test-wallets';
import '@typechain/hardhat';
import 'hardhat-docgen';
import { eEthereumNetwork, eNetwork, ePolygonNetwork } from './helpers/types';
import { NETWORKS_RPC_URL } from './helper-hardhat-config';
import 'hardhat-preprocessor';
import fs from 'fs';
import dotenv from 'dotenv';
import glob from 'glob';
import path from 'path';
dotenv.config({ path: '../.env' });

import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ethers';
import '@nomicfoundation/hardhat-foundry';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';
import 'hardhat-log-remover';
import 'hardhat-spdx-license-identifier';
import 'hardhat-tracer';

function getRemappings() {
  return fs
    .readFileSync('remappings.txt', 'utf8')
    .split('\n')
    .filter(Boolean) // remove empty lines
    .map((line) => line.trim().split('='));
}

if (!process.env.SKIP_LOAD) {
  glob.sync('./tasks/**/*.ts').forEach(function (file) {
    require(path.resolve(file));
  });
}

const MNEMONIC_PATH = "m/44'/60'/0'/0";
const MNEMONIC = process.env.MNEMONIC || '';
const TRACK_GAS = process.env.TRACK_GAS === 'true';
const BLOCK_EXPLORER_KEY = process.env.BLOCK_EXPLORER_KEY || '';

const getCommonNetworkConfig = (networkName: eNetwork, networkId: number) => ({
  url: NETWORKS_RPC_URL[networkName] ?? '',
  accounts: {
    mnemonic: MNEMONIC,
    path: MNEMONIC_PATH,
    initialIndex: 0,
    count: 20,
  },
});
const config: HardhatUserConfig = {
  tracer: {
    enabled: false,
  },
  solidity: {
    compilers: [
      {
        version: '0.8.21',
        settings: {
          evmVersion: 'paris',
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 10,
            details: {
              yul: true,
            },
          },
        },
      },
    ],
  },
  networks: {
    sepolia: getCommonNetworkConfig(eEthereumNetwork.sepolia, 11155111),
    main: getCommonNetworkConfig(eEthereumNetwork.main, 1),
    matic: getCommonNetworkConfig(ePolygonNetwork.matic, 137),
    mumbai: getCommonNetworkConfig(ePolygonNetwork.mumbai, 80001),
    hardhat: {
      throwOnTransactionFailures: true,
      throwOnCallFailures: true,
      accounts: accounts.map(({ secretKey, balance }: { secretKey: string; balance: string }) => ({
        privateKey: secretKey,
        balance,
      })),
      allowUnlimitedContractSize: true,
    },
  },
  gasReporter: {
    enabled: TRACK_GAS,
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: false,
  },
  etherscan: {
    apiKey: BLOCK_EXPLORER_KEY,
  },
  preprocess: {
    eachLine: (hre) => ({
      transform: (line: string) => {
        if (line.match(/^\s*import /i)) {
          for (const [from, to] of getRemappings()) {
            if (line.includes(from)) {
              line = line.replace(from, to);
              break;
            }
          }
        }
        return line;
      },
    }),
  },
  paths: {
    sources: './contracts',
    cache: './cache_hardhat',
    artifacts: './out',
    tests: './test',
  },
  docgen: {
    path: './docs',
    runOnCompile: true,
    clear: true,
  },
  typechain: {
    outDir: './typechain',
    target: './ethers-v5',
    externalArtifacts: ['./out/**/*.json'],
  },
};

export default config;
