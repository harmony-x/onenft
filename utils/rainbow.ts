import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { Chain, chain, configureChains, createClient } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { HARMONY_RPC_SHARD_0_URL } from "harmony-marketplace-sdk";

const harmonyChain = {
  id: 1666600000,
  name: "Harmony Mainnet",
  network: "harmony",
  rpcUrls: {
    default: HARMONY_RPC_SHARD_0_URL,
  },
  blockExplorers: {
    default: {
      name: "Harmony Explorer",
      url: "https://explorer.harmony.one/",
    },
  },
  nativeCurrency: {
    name: "ONE",
    symbol: "ONE",
    decimals: 18,
  },
  testnet: false,
} as Chain;

export const { chains, provider } = configureChains(
  [harmonyChain],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.rpcUrls.default,
      }),
    }),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "ONENFT Marketplace",
  chains,
});
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
