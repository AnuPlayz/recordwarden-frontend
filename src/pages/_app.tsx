import { type AppType } from "next/dist/shared/lib/utils";
import { ThirdwebProvider, ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import "~/styles/globals.css";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (<>
    <ThirdwebProvider activeChain="mumbai" clientId="af574d551a74949aacbf76fbee4f40f4">
    <ThirdwebSDKProvider
      activeChain={"mumbai"}
      // Example: Use ethers to get the signer from the window.ethereum object
      signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()}
      clientId="af574d551a74949aacbf76fbee4f40f4"
    >
      <Component {...pageProps} />;
      </ThirdwebSDKProvider>
    </ThirdwebProvider>
  </>)
};

export default MyApp;
//format