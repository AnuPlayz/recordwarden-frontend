'use client'
import { SmartContract, useContract, useSigner } from "@thirdweb-dev/react";
import { BaseContract, Signer } from "ethers";
import { createContext, useEffect } from "react";
import { CONTRACT_ADDRESS } from "~/config";
import Data from "~/RecordWarden.json"

export const RecordWardenContext = createContext<{
  contract: SmartContract<BaseContract> | null,
  signer: Signer | null
}>({
  contract: null, // Provide an initial value for contract
  signer: null
});

export const RecordWardenProvider = (props: any) => {
  const signer = useSigner()
  const { contract } = useContract(CONTRACT_ADDRESS, Data.abi);

  useEffect(() => {
    //@ts-ignore 
    if (window) window.contract = contract
    //@ts-ignore
    if (window) window.signer = signer
  }, [contract])

  return (
    //@ts-ignore
    <RecordWardenContext.Provider value={{ contract, signer }}>
      {props.children}
    </RecordWardenContext.Provider>
  );
};
