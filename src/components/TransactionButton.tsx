"use client";

import { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { useSendTransaction, useActiveAccount, useReadContract } from "thirdweb/react";
import { syphContract } from "@/app/client";
import { claimTo } from "thirdweb/extensions/erc20";

interface TransactionButtonProps {
  action: "swap" | "buy" | "claim";
  amount: string;
  to?: string; // Recipient address for mint
  disabled?: boolean;
  buttonText: string;
  loadingText: string;
  onSuccess?: (result: any) => void;
  onError?: (error: Error) => void;
}

/**
 * Button component that handles blockchain transactions
 */
export default function TransactionButton({
  action,
  amount,
  to,
  disabled = false,
  buttonText,
  loadingText,
  onSuccess,
  onError
}: TransactionButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { mutate: sendTransaction } = useSendTransaction();
  const account = useActiveAccount();
  
  // Read claim condition data from the contract
  const { data: claimConditionData, isPending: isClaimConditionLoading } = useReadContract({
    contract: syphContract,
    method: "function claimCondition() view returns (uint256 currentStartId, uint256 count)",
    params: [],
  });

  const handleTransaction = async () => {
    try {
      setIsProcessing(true);
      
      // We need an active account for all transactions
      if (!account) {
        throw new Error("No wallet connected");
      }

      if (action === "swap") {
        // Instead of swap, we'll use claimTo for minting tokens
        const transaction = claimTo({
          contract: syphContract,
          to: account?.address as string,
          quantity: amount,
        });
        
        // Execute the transaction
        sendTransaction(transaction, {
          onSuccess: (result) => {
            console.log("Mint successful:", result);
            setIsProcessing(false);
            if (onSuccess) onSuccess(result);
          },
          onError: (error) => {
            console.error("Mint failed:", error);
            setIsProcessing(false);
            if (onError) onError(error);
          }
        });
      } else if (action === "buy") {
        // This is a simplified example - in reality you'd use the correct contract method
        const transaction = prepareContractCall({
          contract: syphContract,
          method: "function buy()",
          params: [],
        });
        
        // Execute the transaction
        sendTransaction(transaction, {
          onSuccess: (result) => {
            console.log("Transaction successful:", result);
            setIsProcessing(false);
            if (onSuccess) onSuccess(result);
          },
          onError: (error) => {
            console.error("Transaction failed:", error);
            setIsProcessing(false);
            if (onError) onError(error);
          }
        });
      } else if (action === "claim") {
        // Use the claimTo function for minting tokens
        const transaction = claimTo({
          contract: syphContract,
          to: account?.address as string,
          quantity: amount,
        });
        
        // Execute the transaction
        sendTransaction(transaction, {
          onSuccess: (result) => {
            console.log("Mint successful:", result);
            setIsProcessing(false);
            if (onSuccess) onSuccess(result);
          },
          onError: (error) => {
            console.error("Mint failed:", error);
            setIsProcessing(false);
            if (onError) onError(error);
          }
        });
      } else {
        throw new Error("Invalid action type");
      }
    } catch (error) {
      console.error("Error preparing transaction:", error);
      setIsProcessing(false);
      if (onError && error instanceof Error) onError(error);
    }
  };

  // Determine if the button should be disabled
  const isButtonDisabled = disabled || isProcessing || !account || isClaimConditionLoading;

  return (
    <button
      onClick={handleTransaction}
      disabled={isButtonDisabled}
      className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-medium py-3 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {!account ? "Connect Wallet" : isProcessing ? loadingText : buttonText}
    </button>
  );
} 