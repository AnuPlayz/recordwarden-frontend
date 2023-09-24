"use client";
import { type AppType } from "next/dist/shared/lib/utils";
import { ConnectWallet, ThirdwebProvider, coinbaseWallet, metamaskWallet, phantomWallet, rainbowWallet, trustWallet, walletConnect, zerionWallet } from "@thirdweb-dev/react";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<>
    <ThirdwebProvider
      activeChain="polygon"
      clientId="af574d551a74949aacbf76fbee4f40f4"
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        trustWallet(),
        zerionWallet(),
        rainbowWallet(),
        phantomWallet(),
      ]}
    >
      <Component {...pageProps} />;

    </ThirdwebProvider>
  </>)
};

export default MyApp;
//format