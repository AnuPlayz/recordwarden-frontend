'use client'
import { SmartContract, useContract, useSigner } from "@thirdweb-dev/react";
import { BaseContract, Signer } from "ethers";
import { createContext, useEffect, useState } from "react";
import { CONTRACT_ADDRESS } from "~/config";
import { Case } from "~/components/RecentCases";
import Data from "~/RecordWarden.json"

export interface CaseEvent {
  eventName: string;
  data: {
    id: {
      type: "BigNumber";
      hex: string;
    };
    lawyer: string;
    c: Case
  };
  transaction: {
    blockNumber: number;
    blockHash: string;
    transactionIndex: number;
    removed: boolean;
    address: string;
    data: string;
    topics: string[];
    transactionHash: string;
    logIndex: number;
    event: string;
    eventSignature: string;
  };
}

export const RecordWardenContext = createContext<{
  contract: SmartContract<BaseContract> | null,
  signer: Signer | null,
  recentEvents: CaseEvent[]
}>({
  contract: null, // Provide an initial value for contract
  signer: null,
  recentEvents: []
});

export const RecordWardenProvider = (props: any) => {
  const signer = useSigner()
  const { contract } = useContract(CONTRACT_ADDRESS, Data.abi);
  const [ recentEvents, setRecentEvents ] = useState<CaseEvent[]>([])

  useEffect(() => {
    //@ts-ignore 
    if (window) window.contract = contract
    //@ts-ignore
    if (window) window.signer = signer

    if(contract){
      contract.events.getAllEvents({fromBlock: 0, toBlock: 'latest'}).then((events: any) => {
        setRecentEvents(events.slice(-5).reverse())
      })

      contract.events.listenToAllEvents(event => {
        let ev = [...recentEvents, event]
        setRecentEvents(ev as CaseEvent[])
      })
    }
  }, [contract])

  return (
    //@ts-ignore
    <RecordWardenContext.Provider value={{ contract, signer, recentEvents }}>
      {props.children}
    </RecordWardenContext.Provider>
  );
};
