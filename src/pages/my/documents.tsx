import { Avatar, TextInput, Tooltip } from "flowbite-react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Documents() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Head>
                <title>Record Warden - Documents</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="px-5 flex flex-col relative w-full">
                {isOpen && <div className="absolute z-50 w-full h-full" onClick={() => setIsOpen(false)}>
                    <div className="bg-slate-900 rounded-xl h-[50vh] w-1/2 translate-x-[50%] translate-y-[20%] border border-slate-700 flex flex-col">
                        <div className="flex flex-row justify-between p-5 items-center">
                            <div className="text-3xl text-white">Edit Permissions</div>
                            <div className="text-2xl text-white cursor-pointer hover:text-red-600" onClick={() => setIsOpen(false)}>X</div>
                        </div>

                        <div className="flex flex-row justify-between p-5">
                            <TextInput placeholder="0x......" className="outline-none grow" />
                            <div className="ml-3 bg-green-500 h-full px-7 text-white rounded-lg py-2 cursor-pointer hover:bg-green-700">Add</div>
                        </div>

                        <div className="flex flex-col overflow-y-auto w-auto">
                            <div className="flex flex-row w-auto h-14 justify-between mx-5 my-1 items-center">
                                <div className="flex flex-row items-center">
                                    <Avatar size="md" className="hover:scale-125" rounded img="https://media.discordapp.net/attachments/1106611314891161663/1156610032146841600/990b8f959622f152.jpg" />
                                    <div className="pl-4 text-xl text-white">Kazuha</div>
                                </div>
                                <div className="text-gray-500 hover:text-red-500 cursor-pointer">Remove</div>
                            </div>
                            <div className="flex flex-row w-auto h-14 justify-between mx-5 my-1 items-center">
                                <div className="flex flex-row items-center">
                                    <Avatar size="md" className="hover:scale-125" rounded img="https://media.discordapp.net/attachments/1106611314891161663/1156610031836483674/nahida.jpg" />
                                    <div className="pl-4 text-xl text-white">Nahida</div>
                                </div>
                                <div className="text-gray-500 hover:text-red-500 cursor-pointer">Remove</div>
                            </div>
                            <div className="flex flex-row w-auto h-14 justify-between mx-5 my-1 items-center">
                                <div className="flex flex-row items-center">
                                    <Avatar size="md" className="hover:scale-125" rounded img="https://media.discordapp.net/attachments/1106611314891161663/1156610140959670282/1.jpg" />
                                    <div className="pl-4 text-xl text-white">Xiao</div>
                                </div>
                                <div className="text-gray-500 hover:text-red-500 cursor-pointer">Remove</div>
                            </div>
                            <div className="flex flex-row w-auto h-14 justify-between mx-5 my-1 items-center">
                                <div className="flex flex-row items-center">
                                    <Avatar size="md" className="hover:scale-125" rounded img="https://media.discordapp.net/attachments/1106611314891161663/1156610032440455259/1a167df43f24af3c.jpg" />
                                    <div className="pl-4 text-xl text-white">Lyney</div>
                                </div>
                                <div className="text-gray-500 hover:text-red-500 cursor-pointer">Remove</div>
                            </div>
                        </div>
                    </div>
                </div>
                }
                <div className={"text-3xl text-white" + (isOpen ? " blur-sm" : "")}>Your Documents</div>
                <div className={"mt-5 relative overflow-x-auto shadow-md sm:rounded-lg" + (isOpen ? " blur-sm" : "")}>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Case ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    File Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    File CID
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    Can be accessed by
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Uploaded At
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
                                    #0001
                                </th>
                                <td className="px-6 py-4">
                                    Russian Girls.png
                                </td>
                                <td className="px-6 py-4">
                                    bydsiwfubhkfbsfukbsyfusdfyvdsfbsdf
                                </td>
                                <td className="px-6 py-4 flex flex-row justify-evenly">
                                    <Tooltip content="Nahida">
                                        <Avatar status="online" className="ml-3 hover:scale-125" img="https://cdn.discordapp.com/attachments/1106611314891161663/1156610031836483674/nahida.jpg" />
                                    </Tooltip>
                                    <Tooltip content="Lyney">
                                        <Avatar status="away" className="ml-3 hover:scale-125" img="https://media.discordapp.net/attachments/1106611314891161663/1156610032440455259/1a167df43f24af3c.jpg" />
                                    </Tooltip>
                                </td>
                                <td className="px-6 py-4">
                                    Yesterday at 4:20pm
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline mx-2" onClick={() => setIsOpen(true)}>Edit Permissions</div>
                                    <Link href="/cases/001" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">View File</Link>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
                                    #0001
                                </th>
                                <td className="px-6 py-4">
                                    Russian Girls(1).png
                                </td>
                                <td className="px-6 py-4">
                                    bydsiwfubhkfbsfukbsyfusdfyvdsfbsdf
                                </td>
                                <td className="px-6 py-4 flex flex-row justify-evenly">
                                    <Tooltip content="Nahida">
                                        <Avatar status="online" className="ml-3 hover:scale-125" img="https://cdn.discordapp.com/attachments/1106611314891161663/1156610031836483674/nahida.jpg" />
                                    </Tooltip>
                                    <Tooltip content="Lyney">
                                        <Avatar status="away" className="ml-3 hover:scale-125" img="https://media.discordapp.net/attachments/1106611314891161663/1156610032440455259/1a167df43f24af3c.jpg" />
                                    </Tooltip>
                                </td>
                                <td className="px-6 py-4">
                                    Yesterday ay 4:20pm
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline mx-2" onClick={() => setIsOpen(true)}>Edit Permissions</div>
                                    <Link href="/cases/001" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2">View File</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
