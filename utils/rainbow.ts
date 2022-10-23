import "@rainbow-me/rainbowkit/styles.css";
import {
  AuthenticationStatus,
  createAuthenticationAdapter,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { SiweMessage } from "siwe";
import { Chain, configureChains, createClient } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import axios from "axios";
import { accessTokenKey } from "./data";

// set axios base url
axios.defaults.baseURL = "https://monkfish-app-bmj56.ondigitalocean.app";

const harmonyChain = {
  id: 1666700000,
  name: "Harmony Testnet Shard 0",
  network: "harmony testnet",
  rpcUrls: {
    default: "https://api.s0.b.hmny.io",
  },
  blockExplorers: {
    default: {
      name: "Harmony Explorer",
      url: "https://explorer.pops.one/#/tx/",
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

export const authenticationAdapter = (
  setStatus: (status: AuthenticationStatus) => void
) =>
  createAuthenticationAdapter({
    getNonce: async () => {
      return "100000000";
    },
    createMessage: ({ nonce, address, chainId }) => {
      console.log("createMessage", nonce, address, chainId);
      return new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in to ONENFT with your wallet.",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce,
      });
    },
    getMessageBody: ({ message }) => {
      return message.prepareMessage();
    },
    verify: async ({ message, signature }) => {
      console.log("verify", message.prepareMessage(), signature);
      const loginRes = await axios.post("/api/login", {
        message,
        signature,
      });
      localStorage.setItem(accessTokenKey, loginRes.data.access_token);
      setStatus("authenticated");
      return Boolean(loginRes.status === 200);
    },
    signOut: async () => {
      await fetch("/api/logout");
    },
  });

// intercept axios response
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("axios error", error.config);
    if (error.config.url === "/api/me" && typeof window !== "undefined") {
      // remove previous access token and refresh
      localStorage.removeItem(accessTokenKey);
      window.location.reload();
    }
  }
);

if (typeof window !== "undefined" && !!localStorage.getItem(accessTokenKey)) {
  axios.get("/api/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(accessTokenKey)}`,
    },
  });
}


