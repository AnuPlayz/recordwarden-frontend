'use client'
import { useContract } from "@thirdweb-dev/react";
import { createContext, ReactNode, useEffect } from "react";
import { CONTRACT_ADDRESS } from "~/config";
import Data from "~/RecordWarden.json"

interface RecordWardenProviderProps {
  children: ReactNode;
}

export const RecordWardenContext = createContext<{
  contract: any; // Replace 'any' with the actual contract type
}>({
  contract: null, // Provide an initial value for contract
});

export const RecordWardenProvider = (props: RecordWardenProviderProps) => {
  const { contract } = useContract(CONTRACT_ADDRESS, Data.abi);

  useEffect(() => {
    //@ts-ignore
    if (window) window.contract = contract
  }, [contract])

  return (
    <RecordWardenContext.Provider value={{ contract }}>
      {props.children}
    </RecordWardenContext.Provider>
  );
};
