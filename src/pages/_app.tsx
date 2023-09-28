"use client";
import { type AppType } from "next/dist/shared/lib/utils";
import { ThirdwebProvider, coinbaseWallet, metamaskWallet, phantomWallet, rainbowWallet, trustWallet, walletConnect, zerionWallet } from "@thirdweb-dev/react";
import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import { useEffect } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, [])

  return (<div className="hideScroll">
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
      <div className="flex flex-col p-5 bg-gray-900 min-h-[100vh] h-auto w-full overflow-y-hidden overflow-x-hidden hideScroll">
        <Navbar />
        <div className="mt-24" />
        <Component {...pageProps} />;
      </div>
    </ThirdwebProvider>
  </div>)
};

export default MyApp;
//format