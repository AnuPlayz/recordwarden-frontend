'use client'
import { useContract, useContractWrite, useSigner } from "@thirdweb-dev/react";
import { createContext, useEffect } from "react";
import { CONTRACT_ADDRESS } from "~/config";
import Data from "~/RecordWarden.json"

export const RecordWardenContext = createContext<{
  contract: any; // Replace 'any' with the actual contract type
  signer: any
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
    <RecordWardenContext.Provider value={{ contract, signer }}>
      {props.children}
    </RecordWardenContext.Provider>
  );
};
