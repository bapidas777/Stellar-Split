import { Horizon, Networks } from "@stellar/stellar-sdk";
const HORIZON_URL = "https://horizon-testnet.stellar.org";
const server = new Horizon.Server(HORIZON_URL);
const NETWORK_PASSPHRASE = Networks.TESTNET;

export async function getTestnetBalance(publicKey: string): Promise<string> {
  try {
    const account = await server.loadAccount(publicKey);
    const nativeBalance = account.balances.find((b) => b.asset_type === "native");
    return nativeBalance ? nativeBalance.balance : "0";
  } catch (error) {
    return "0";
  }
}

import { TransactionBuilder, Asset, Operation, Transaction } from "@stellar/stellar-sdk";

export async function buildTransaction(senderPublicKey: string, recipientPublicKey: string, amount: string) {
  const sourceAccount = await server.loadAccount(senderPublicKey);
  return new TransactionBuilder(sourceAccount, { fee: "100", networkPassphrase: NETWORK_PASSPHRASE })
    .addOperation(Operation.payment({ destination: recipientPublicKey, asset: Asset.native(), amount: amount }))
    .setTimeout(30).build();
}

export async function submitTransaction(signedTxXdr: string) {
  const transaction = TransactionBuilder.fromXDR(signedTxXdr, NETWORK_PASSPHRASE);
  return await server.submitTransaction(transaction as Transaction);
}
