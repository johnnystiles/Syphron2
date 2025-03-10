# Syphron - AI DeFi Agent

Syphron is an AI-powered DeFi agent that optimizes your crypto portfolio, automates trades, and maximizes your yields with advanced machine learning algorithms.

## Project Overview

This project implements a web interface for the Syphron DeFi platform with Thirdweb SDK integration for blockchain interactions.

### Key Features

- Wallet connection using Thirdweb SDK
- Token swapping functionality
- Token purchasing functionality
- Token claiming using Thirdweb's ERC20 extensions
- Modern and responsive UI

## Thirdweb SDK Integration

The project uses Thirdweb SDK v5 for blockchain interactions. Here's how the integration works:

### Setup and Initialization

The Thirdweb client is initialized in `src/app/client.ts`:

```typescript
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// Create the client
export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID,
});

// Connect to the Syph token contract
export const syphContract = getContract({
  client,
  chain: defineChain(8453), // Base chain
  address: "0xd63eF2172B982Cf27F9f5ca45911eABb1710B1d1", // Syph token contract address
});
```

### Contract Interactions

The project implements various contract interactions using Thirdweb's extensions and hooks:

#### Token Claiming (ERC20 Extensions)

The `claimTo` function from Thirdweb's ERC20 extensions is used for token claiming:

```typescript
import { claimTo } from "thirdweb/extensions/erc20";

// Prepare a claim transaction
const transaction = claimTo({
  contract: syphContract,
  to: recipientAddress,
  quantity: amount,
});

// Execute the transaction
sendTransaction(transaction);
```

#### Transaction Button Component

The project includes a reusable `TransactionButton` component that handles different types of transactions:

```typescript
<TransactionButton
  action="claim" // "swap", "buy", or "claim"
  amount="100"
  to="0x..." // Required for claim action
  buttonText="Claim Tokens"
  loadingText="Processing..."
  onSuccess={handleSuccess}
  onError={handleError}
/>
```

### Available Pages

- **Home**: Main landing page with token swap functionality
- **Buy**: Page for purchasing $SYPH tokens
- **Claim**: Page for claiming $SYPH tokens using the `claimTo` function
- **About**: Information about the Syphron project
- **Tokenomics**: Details about $SYPH token economics
- **Roadmap**: Project roadmap and timeline
- **Whitepaper**: Detailed project documentation

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_TEMPLATE_CLIENT_ID=your-thirdweb-client-id
   ```
4. Run the development server with `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technology Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Thirdweb SDK v5

## Thirdweb SDK Examples

The project includes examples of various Thirdweb SDK functions, including:

- Wallet connection
- Contract initialization
- Token balance retrieval
- Token transfer
- Token claiming
- Smart contract interactions

For more information on Thirdweb SDK, visit the [official documentation](https://portal.thirdweb.com/typescript/v5).
