import { Wallet, Signer } from 'ethers';
import { DefenderRelaySigner, DefenderRelayProvider } from 'defender-relay-client/lib/ethers';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const PRIVATE_KEY =
  process.env.PRIVATE_KEY || '0xa95dea2368a4c8273f49b5d5f0ff74789021e6a7ffc99c85285aefa2423bddb3';
const MNEMONIC = process.env.MNEMONIC || '';
const DEFENDER_API_KEY = process.env.DEFENDER_API_KEY || '';
const DEFENDER_SECRET_KEY = process.env.DEFENDER_SECRET_KEY || '';

export const getPrivateKeyWallet = (): Signer => new Wallet(PRIVATE_KEY);

export const getMnemonicWallet = (): Signer => Wallet.fromMnemonic(MNEMONIC);

export const getDefenderSigner = (): Signer => {
  const credentials = { apiKey: DEFENDER_API_KEY, apiSecret: DEFENDER_SECRET_KEY };
  const provider = new DefenderRelayProvider(credentials);
  return new DefenderRelaySigner(credentials, provider, { speed: 'fast' });
};
