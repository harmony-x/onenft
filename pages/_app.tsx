import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { WagmiConfig } from "wagmi";
import {
  AuthenticationStatus,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { authenticationAdapter, chains, wagmiClient } from "$utils/rainbow";
import "antd/dist/antd.css";
import { GlobalStyles } from "styles/GlobalStyles";
import { FontStyles } from "styles/FontStyles";
import { useState } from "react";
import { accessTokenKey } from "$utils/data";
import { AppContextProvider } from "$utils/context";
import { QueryClient, QueryClientProvider } from "react-query";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [AUTHENTICATION_STATUS, setStatus] =
    useState<AuthenticationStatus>("loading");

  const [queryClient] = useState(() => new QueryClient());

  if (typeof window !== "undefined") {
    if (
      !!localStorage.getItem(accessTokenKey) &&
      AUTHENTICATION_STATUS !== "authenticated"
    ) {
      setStatus("authenticated");
    } else if (
      !localStorage.getItem(accessTokenKey) &&
      AUTHENTICATION_STATUS !== "unauthenticated"
    ) {
      setStatus("unauthenticated");
    }
  }

  return (
    <AppContextProvider
      value={{
        authStatus: AUTHENTICATION_STATUS,
        setAuthStatus: setStatus,
      }}
    >
      <WagmiConfig client={wagmiClient}>
        <RainbowKitAuthenticationProvider
          adapter={authenticationAdapter(setStatus)}
          status={AUTHENTICATION_STATUS}
        >
          <RainbowKitProvider chains={chains}>
            <QueryClientProvider client={queryClient}>
              <Web3ReactProvider getLibrary={getLibrary}>
                <FontStyles />
                <GlobalStyles />
                <Component {...pageProps} />
              </Web3ReactProvider>
            </QueryClientProvider>
          </RainbowKitProvider>
        </RainbowKitAuthenticationProvider>
      </WagmiConfig>
    </AppContextProvider>
  );
}

export default MyApp;
