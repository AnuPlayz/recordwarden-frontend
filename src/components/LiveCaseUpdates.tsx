"use client"
import { useContext } from "react"
import { RecordWardenContext } from "~/context/RecordWarden"

export default function LiveCaseUpdates() {
    const { recentEvents } = useContext(RecordWardenContext)

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
                                Field
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
                        {recentEvents.filter(event => [
                            "CaseUpdated"
                        ].includes(event.eventName)).map((event, index) => {
                            let ev = recentEvents.filter(event => [
                                "CaseCreated",
                                "CaseClosed",
                                "CaseUpdated"
                            ].includes(event.eventName))
                            if (!ev[index + 1]) return;

                            const c = event.data.c;
                            const nc = ev[index + 1]!.data.c;

                            // Find what value is changed
                            let oldVal: any = null;
                            let newVal: any = null;
                            let field: any = null;
                            let deezNuts = "";

                            Object.keys(c).forEach((key) => {
                                if (
                                    (Array.isArray(c[key]) && c[key].length !== nc[key].length) ||
                                    ((!Array.isArray(c[key]) && c[key].toString() !== nc[key].toString()))
                                ) {
                                    if (key === "updatedAt") return;

                                    field = key;
                                    newVal = c[key];
                                    oldVal = nc[key];

                                    if (Array.isArray(c[key])) {
                                        deezNuts = c[key].length > nc[key].length ? "added" : "removed"
                                    }
                                }
                            });

                            console.log(oldVal, newVal, field, deezNuts)

                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
                                        #{Number(c.id._hex).toString().padStart(4, "0")}
                                    </th>
                                    <td className="px-6 py-4">
                                        {
                                            event.eventName === "CaseCreated" ?
                                                "New Case Created"
                                                : event.eventName === "CaseClosed" ?
                                                    "Case Closed"
                                                    : event.eventName === "CaseUpdated" ?
                                                        "Case Updated (" + field + ")"
                                                        : "Unknown Event"
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        {!deezNuts ? `${oldVal}` : ""}
                                    </td>
                                    <td className="px-6 py-4">
                                        {deezNuts ? `New ${field} has been ${deezNuts}` :`${newVal}`}
                                    </td>
                                    <td className="px-6 py-4">
                                        {c.updatedBy}
                                    </td>
                                    <td className="px-6 py-4">
                                        {new Date(Number(c.createdAt._hex) * 1000).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={"/cases/" + Number(c.id._hex)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Full Details</a>
                                    </td>
                                </tr>)
                        })}

                        {recentEvents.filter(event => [
                            "CaseCreated",
                            "CaseClosed",
                        ].includes(event.eventName)).map((event, index) => {
                            let c = event.data.c;

                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-lg">
                                        #{Number(c.id._hex).toString().padStart(4, "0")}
                                    </th>
                                    <td className="px-6 py-4">
                                        {
                                            event.eventName === "CaseCreated" ?
                                                "New Case Created"
                                                : event.eventName === "CaseClosed" ?
                                                    "Case Closed"
                                                    : "Unknown Event (Probably error)"
                                        }
                                    </td>
                                    <td className="px-6 py-4">

                                    </td>
                                    <td className="px-6 py-4">
                                        {
                                            event.eventName === "CaseClosed" ?
                                                `Case Closed at ${new Date(Number(c.closedAt._hex) * 1000).toLocaleString()}` :
                                                `Case Created at ${new Date(Number(c.createdAt._hex) * 1000).toLocaleString()}`
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                        {c.updatedBy}
                                    </td>
                                    <td className="px-6 py-4">
                                        {new Date(Number(c.createdAt._hex) * 1000).toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href={"/cases/" + Number(c.id._hex)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Full Details</a>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}
