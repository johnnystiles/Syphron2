import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided");
}

// Create the client
export const client = createThirdwebClient({
  clientId: clientId,
});

// Connect to the Syph token contract
export const syphContract = getContract({
  client,
  chain: defineChain(8453), // Base chain
  address: "0xd63eF2172B982Cf27F9f5ca45911eABb1710B1d1", // Syph token contract address
});
