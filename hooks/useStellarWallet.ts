"use client";
import { useState, useEffect } from "react";
import { StellarWalletsKit, Networks } from "@creit.tech/stellar-wallets-kit";
import { FreighterModule, FREIGHTER_ID } from "@creit.tech/stellar-wallets-kit/modules/freighter";

let isKitInitialized = false;

export function useStellarWallet() {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>("0");

  useEffect(() => {
    if (!isKitInitialized && typeof window !== "undefined") {
      StellarWalletsKit.init({ modules: [new FreighterModule()] });
      StellarWalletsKit.setNetwork(Networks.TESTNET);
      StellarWalletsKit.setWallet(FREIGHTER_ID);
      isKitInitialized = true;
    }
  }, []);
  
  return { publicKey, balance };
}
