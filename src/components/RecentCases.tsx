"use client"
import { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { RecordWardenContext } from "~/context/RecordWarden";

export interface Case {
    client: string;
    closedAt: {
        _hex: string;
        _isBigNumber: boolean;
    };
    createdAt: {
        _hex: string;
        _isBigNumber: boolean;
    };
    description: string;
    id: {
        _hex: string;
        _isBigNumber: boolean;
    };
    nextHearing: {
        _hex: string;
        _isBigNumber: boolean;
    };
    status: number;
    updatedAt: {
        _hex: string;
        _isBigNumber: boolean;
    };
    lawyers?: []

    /**
     * Index signature for unknown keys.
     */
    [key: string]: any;
}

const RecentCasesToShow = 5;

export default function RecentCases() {
    const [isOpen, setIsOpen] = useState(false)
    const [sortBy, setSortBy] = useState("30d")
    const [cases, setCases] = useState<Case[]>([])
    const { contract } = useContext(RecordWardenContext)

    useEffect(() => {
        if (contract) {
            contract.call("caseCount").then(async count => {
                let c: number = await count;
                console.log("Total Cases:", c)
                let cases = []
                for (let i = c; i > c - RecentCasesToShow; i--) {
                    try {
                        let caseDetails = await contract.call("cases", [i])
                        if (Number(caseDetails.createdAt) === 0) continue;
                        cases.push(caseDetails)
                    } catch (e) {
                    }
                }
                setCases(cases as any)
            })
        }
    }, [contract])

    useEffect(() => {
        setIsOpen(false)
    }, [sortBy])

    return (<>
        <div className="text-3xl text-white text-center">Recent Cases</div>
        <div className="flex flex-row w-full h-auto p-5">
            <div className="flex flex-row w-full h-auto relative justify-between">

                <div className="flex flex-row items-center justify-between w-48 h-12 rounded-xl bg-gray-800 hover:bg-gray-700 cursor-pointer p-3" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-4 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                    </svg>
                    <div className="text-lg text-gray-400">
                        Last {
                            sortBy === "30d" ? "30 days" :
                                sortBy === "7d" ? "7 days" :
                                    sortBy === "24h" ? "24 hours" : "Unknown"
                        }
                    </div>
                    <svg className="w-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </div>
                {isOpen && (
                    <div className="bg-gray-800 w-48 rounded-xl absolute mt-14 cursor-pointer z-40">
                        <div className="flex items-center w-full h-11 p-3" onClick={() => setSortBy("30d")}>
                            <input checked={sortBy === "30d"} type="radio" className="hover:ring-2 bg-slate-500 cursor-pointer ring-yellow-400" />
                            <label className="text-md text-gray-400 ml-3">Last 30 days</label>
                        </div>
                        <div className="flex items-center w-full h-11 p-3" onClick={() => setSortBy("7d")}>
                            <input checked={sortBy === "7d"} type="radio" className="hover:ring-2 bg-slate-500 cursor-pointer ring-yellow-400" />
                            <label className="text-md text-gray-400 ml-3">Last 7 days</label>
                        </div>
                        <div className="flex items-center w-full h-11 p-3" onClick={() => setSortBy("24h")}>
                            <input checked={sortBy === "24h"} type="radio" className="hover:ring-2 bg-slate-500 cursor-pointer ring-yellow-400" />
                            <label className="text-md text-gray-400 ml-3">Last 24 hours</label>
                        </div>
                    </div>)}
                <div className="flex flex-row">
                    <form className="w-64">
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="flex flex-col p-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Case ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Lawyers
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cases.map(c => {
                            return (<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
                                    #{Number(c.id._hex).toString().padStart(4, "0")}
                                </th>
                                <td className="px-6 py-4 line-clamp-1">
                                    {c.description}
                                </td>
                                <td className="px-6 py-4">
                                    {c.lawyers?? "None"}
                                </td>
                                <td className="px-6 py-4">
                                    {new Date(Number(c.createdAt._hex)*1000).toLocaleString()}
                                </td>
                                <td className="px-6 py-4">
                                    <Link href={"/cases/" + Number(c.id._hex)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Full Details</Link>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}