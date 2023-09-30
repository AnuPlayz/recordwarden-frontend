"use client";
import { type AppType } from "next/dist/shared/lib/utils";
import { ThirdwebProvider, coinbaseWallet, metamaskWallet, phantomWallet, rainbowWallet, trustWallet, walletConnect, zerionWallet } from "@thirdweb-dev/react";
import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import { useEffect } from "react";
import { RecordWardenProvider } from "~/context/RecordWarden";
import { THIRD_SECRET } from "~/config";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, [])

  return (<div className="hideScroll">
    <ThirdwebProvider
      activeChain="mumbai"
      autoSwitch
      autoConnect
      secretKey={THIRD_SECRET}
      theme="dark"
      dAppMeta={{
        name: "Record Warden",
        url: "/",
        isDarkMode: true,
        description: "Meow..?"
      }}
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
      <RecordWardenProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <div className="flex flex-col p-5 bg-gray-900 min-h-[100vh] h-auto w-full overflow-y-hidden overflow-x-hidden hideScroll">
          <Navbar />
          <div className="mt-24" />
          <Component {...pageProps} />;
        </div>
      </RecordWardenProvider>
    </ThirdwebProvider>
  </div>)
};

export default MyApp;
