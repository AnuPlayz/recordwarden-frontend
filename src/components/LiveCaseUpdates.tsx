"use client"

export default function LiveCaseUpdates() {
    return (<>
        <div className="mt-10 text-3xl text-white text-center">Live Case Updates</div>
        <div className="flex flex-col p-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Case ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Old Value
                            </th>
                            <th scope="col" className="px-6 py-3">
                                New Value
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Updated By
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Updated At
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
                                #0001
                            </th>
                            <td className="px-6 py-4">
                                Added new Lawyer
                            </td>
                            <td className="px-6 py-4">
                                Ani&nbsp;<span className="text-gray-400">{"("}0x847328472343{")"}</span>, Sudhan&nbsp;<span className="text-gray-400">{"("}0x847328472343{")"}</span>
                            </td>
                            <td className="px-6 py-4">
                                Ani&nbsp;<span className="text-gray-400">{"("}0x847328472343{")"}</span>
                            </td>
                            <td className="px-6 py-4">
                                {new Date(1279267555432).toLocaleString()}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Full Details</a>
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 text-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
                                #0002
                            </th>
                            <td className="px-6 py-4">
                                Robbery
                            </td>
                            <td className="px-6 py-4">
                                Ani&nbsp;<span className="text-gray-400">{"("}0x847328472343{")"}</span>, Sudhan&nbsp;<span className="text-gray-400">{"("}0x847328472343{")"}</span>
                            </td>
                            <td className="px-6 py-4">
                                Ani&nbsp;<span className="text-gray-400">{"("}0x847328472343{")"}</span>
                            </td>
                            <td className="px-6 py-4">
                                {new Date(1279267555432).toLocaleString()}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Full Details</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
                                #0004
                            </th>
                            <td className="px-6 py-4">
                                Robbery
                            </td>
                            <td className="px-6 py-4">
                                Ani&nbsp;<span className="text-gray-400">{"("}0x847328472343{")"}</span>, Sudhan&nbsp;<span className="text-gray-400">{"("}0x847328472343{")"}</span>
                            </td>
                            <td className="px-6 py-4">
                                Ani&nbsp;<span className="text-gray-400">{"("}0x847328472343{")"}</span>
                            </td>
                            <td className="px-6 py-4">
                                {new Date(1279267555432).toLocaleString()}
                            </td>
                            <td className="px-6 py-4">
                                <a href="/cases/0" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Full Details</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}