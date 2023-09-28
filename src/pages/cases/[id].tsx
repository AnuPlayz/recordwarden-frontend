import { Avatar, Tooltip } from "flowbite-react";
import Head from "next/head";

export default function Cases() {
    return (
        <>
            <Head>
                <title>Record Warden - Case #001</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col p-5">
                <div className="flex flex-row justify-between">
                    <div className="text-3xl text-white">Case #001</div>
                    <div className="text-xl text-white flex flex-row items-center justify-center h-full bg-gray-700 py-1 px-3 rounded-lg">Case Status: &nbsp;<span className="text-green-400 text-2xl">&nbsp;Open</span></div>
                </div>
                <div className="text-md text-gray-400 mt-3">Ani stole 69420$ from indian bank and then he decided to go to sudhan home and share him some money but then he also bringed some russians for the fun but soon as they started to watch some anime for fun, they heard a knock at the door which is the police inquiring about the russian girls in their house and they decided to share it with the police, showing how corrupted our system is . If police start getting sold for russians, what is the future of our country? This case is registered not on Ani or Sudhan but on the Police who got sold so easily and the government officials who hired these corrupted individuals.</div>
            </div>

            <div className="flex flex-row w-screen">
                <div className="items-center flex flex-col w-1/3">
                    <div className="mt-5 text-2xl text-white text-center">Case Information</div>
                    <div className="flex flex-col w-full p-5">
                        <div className="flex flex-row items-center text-gray-300 text-xl">
                            Lawyers:
                            <Tooltip content="Nahida">
                                <Avatar status="online" className="ml-3 hover:scale-125" img="https://cdn.discordapp.com/attachments/1106611314891161663/1156610031836483674/nahida.jpg" />
                            </Tooltip>
                            <Tooltip content="Lyney">
                                <Avatar status="away" className="ml-3 hover:scale-125" img="https://media.discordapp.net/attachments/1106611314891161663/1156610032440455259/1a167df43f24af3c.jpg" />
                            </Tooltip>
                            <Tooltip content="Xiao">
                                <Avatar status="busy" className="ml-3 hover:scale-125" img="https://media.discordapp.net/attachments/1106611314891161663/1156610140959670282/1.jpg" />
                            </Tooltip>
                        </div>
                    </div>

                    <div className="mt-5 text-2xl text-white text-center mb-4">Case Documents</div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row items-center justify-between bg-gray-800 rounded-xl w-auto h-12 mx-5 my-1 p-3 cursor-pointer group">
                            <div className="text-md text-gray-300 group-hover:text-blue-500">Russian Girls.png</div>
                            <div className="flex flex-row h-full w-auto">
                                <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.782 14.576c-.186 0-.312.018-.377.036v1.193c.077.018.174.023.306.023.485 0 .785-.246.785-.659 0-.371-.258-.593-.714-.593z"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.03 16.105c-.313.293-.774.426-1.313.426-.12 0-.229-.007-.312-.019v1.445h-.906V13.97a7.504 7.504 0 0 1 1.235-.083c.563 0 .966.107 1.235.323.258.204.432.54.432.936s-.131.731-.371.959zm4.302 1.853h-.96l-.863-1.56c-.24-.432-.504-.953-.701-1.427l-.019.006c.024.534.036 1.104.036 1.763v1.218h-.84v-4.042h1.067l.84 1.481c.24.426.479.93.659 1.385h.019a14.746 14.746 0 0 1-.078-1.685v-1.182h.84v4.043zm4.169-.186a4.512 4.512 0 0 1-1.349.228c-.737 0-1.271-.186-1.644-.546-.371-.348-.575-.875-.569-1.469.006-1.344.983-2.111 2.309-2.111.521 0 .924.103 1.121.198l-.191.731c-.222-.096-.498-.174-.941-.174-.762 0-1.338.432-1.338 1.308 0 .833.522 1.325 1.271 1.325.21 0 .378-.024.45-.061v-.846h-.624v-.713h1.505v2.13zM14 9h-1V4l5 5h-4z"></path></svg>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between bg-gray-800 rounded-xl w-auto h-12 mx-5 my-1 p-3 cursor-pointer">
                            <div className="text-md text-gray-300 group-hover:text-blue-500">Russian Girls(1).png</div>
                            <div className="flex flex-row h-full w-auto">
                                <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.782 14.576c-.186 0-.312.018-.377.036v1.193c.077.018.174.023.306.023.485 0 .785-.246.785-.659 0-.371-.258-.593-.714-.593z"></path><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.03 16.105c-.313.293-.774.426-1.313.426-.12 0-.229-.007-.312-.019v1.445h-.906V13.97a7.504 7.504 0 0 1 1.235-.083c.563 0 .966.107 1.235.323.258.204.432.54.432.936s-.131.731-.371.959zm4.302 1.853h-.96l-.863-1.56c-.24-.432-.504-.953-.701-1.427l-.019.006c.024.534.036 1.104.036 1.763v1.218h-.84v-4.042h1.067l.84 1.481c.24.426.479.93.659 1.385h.019a14.746 14.746 0 0 1-.078-1.685v-1.182h.84v4.043zm4.169-.186a4.512 4.512 0 0 1-1.349.228c-.737 0-1.271-.186-1.644-.546-.371-.348-.575-.875-.569-1.469.006-1.344.983-2.111 2.309-2.111.521 0 .924.103 1.121.198l-.191.731c-.222-.096-.498-.174-.941-.174-.762 0-1.338.432-1.338 1.308 0 .833.522 1.325 1.271 1.325.21 0 .378-.024.45-.061v-.846h-.624v-.713h1.505v2.13zM14 9h-1V4l5 5h-4z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-center flex flex-col w-2/3">
                    <div className="mt-5 text-2xl text-white text-center">Case History</div>
                    <div className="mt-5 flex flex-col w-full overflow-y-scroll hideScroll">
                        <ol className="m-5 p-5 relative border-l border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img className="rounded-full shadow-lg" src="https://media.discordapp.net/attachments/1106611314891161663/1156604265540882492/3.jpg?ex=65159329&is=651441a9&hm=49ae12bed4e03a007c644ac96672e6c18b8930b47f5945db5e37f619fcc8cf11&=" />
                                </span>
                                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
                                    <div className="text-sm font-normal text-gray-500 dark:text-gray-300">Venti changed <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Case #001</a> description to <span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Ani stole 69420$...</span></div>
                                </div>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img className="rounded-full shadow-lg" src="https://media.discordapp.net/attachments/1106611314891161663/1156604265540882492/3.jpg?ex=65159329&is=651441a9&hm=49ae12bed4e03a007c644ac96672e6c18b8930b47f5945db5e37f619fcc8cf11&=" />
                                </span>
                                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                                    <div className="text-sm font-normal text-gray-500 dark:text-gray-300">Venti added <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Sudhan</a> as a  <span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Lawyer</span>to this case</div>
                                </div>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img className="rounded-full shadow-lg" src="https://media.discordapp.net/attachments/1106611314891161663/1156604265540882492/3.jpg?ex=65159329&is=651441a9&hm=49ae12bed4e03a007c644ac96672e6c18b8930b47f5945db5e37f619fcc8cf11&=" />
                                </span>
                                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                                    <div className="text-sm font-normal text-gray-500 dark:text-gray-300">Venti added <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Sudhan</a> as a  <span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Lawyer</span>to this case</div>
                                </div>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img className="rounded-full shadow-lg" src="https://media.discordapp.net/attachments/1106611314891161663/1156604265540882492/3.jpg?ex=65159329&is=651441a9&hm=49ae12bed4e03a007c644ac96672e6c18b8930b47f5945db5e37f619fcc8cf11&=" />
                                </span>
                                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                                    <div className="text-sm font-normal text-gray-500 dark:text-gray-300">Venti added <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Sudhan</a> as a  <span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Lawyer</span>to this case</div>
                                </div>
                            </li>
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img className="rounded-full shadow-lg" src="https://media.discordapp.net/attachments/1106611314891161663/1156604265540882492/3.jpg?ex=65159329&is=651441a9&hm=49ae12bed4e03a007c644ac96672e6c18b8930b47f5945db5e37f619fcc8cf11&=" />
                                </span>
                                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
                                    <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Venti has added a <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Document (Russian Girls.png)</a> to  <span className="font-semibold text-gray-900 dark:text-white">Case #001</span></div>
                                </div>
                            </li>

                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}
