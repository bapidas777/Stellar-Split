"use client";
import { useState } from "react";
export function useStellarWallet() {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>("0");
  return { publicKey, balance };
}
