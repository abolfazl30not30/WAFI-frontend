"use client"
import Link from "next/link";
import {usePathname} from 'next/navigation'
import Image from "next/image";
import { Scrollbars } from 'react-custom-scrollbars';

export default function RootLayout({children}) {

    const pathname = usePathname()
    const renderView = ({ style, ...reset }) => {
        const customStyle = {
            marginRight: '-19px',
            right: '2px',
            overflowX:"hidden"
        };
        return <div {...reset} style={{ ...style, ...customStyle }} />;
    };

    const renderThumbVertical = ({ style, ...reset }) => {
        const thumbStyle = {
            borderRadius: 6,
            backgroundColor: '#F1F2F6',
            right: '2px',
        };
        return <div style={{ ...style, ...thumbStyle }} {...reset} />;
    };

    const renderTrackVertical = () => {
        const thumbStyle = {
            position: 'absolute',
            width: '6px',
            transition: 'opacity 200ms ease 0s',
            opacity: 0,
            right: '6px',
            bottom: '2px',
            top: '2px',
            borderRadius: '3px',
        };
        return <div style={thumbStyle} />;
    };

    const renderThumbHorizontal = ({ style, ...reset }) => {
        const thumbStyle = {
            borderRadius: 6,
            backgroundColor: '#F1F2F6',
        };
        return <div style={{ ...style, ...thumbStyle }} {...reset} />;
    };

    return (
        <div className="flex">
            <div className="overflow-hidden h-screen w-[25%] p-5 pb-20  flex-col border border-solid border-1 border-neutral-300">
                <div className="m-2">
                    <button
                        className="text-center w-full py-4 border border-solid border-1 border-neutral-300 rounded hover:bg-mainGreen hover-border-none">
                        + New chat
                    </button>
                </div>

                <Scrollbars autoHide
                            className="scroll-bar"
                            autoHideTimeout={500}
                            autoHideDuration={200}
                            renderView={renderView}
                            renderThumbHorizontal={renderThumbHorizontal}
                            renderThumbVertical={renderThumbVertical}
                            renderTrackVertical={renderTrackVertical}>
                    <ul className="overflow-hidden mt-5 flex flex-col gap-2">
                        <li>
                            <Link href="/panel/12">
                                <div
                                    className={pathname === "panel/12" ? "px-2 py-4 hover:bg-[#EAFFF6]" : "px-2 py-4 hover:bg-[#EAFFF6]"}>
                                    <div className="flex justify-between">
                                        <div className="w-[20%] flex justify-center items-start">
                                            <div className="w-[70%]">
                                                <Image src="/xlsm.svg" alt="costumer" width={0}
                                                       height={0}
                                                       sizes="100vw"
                                                       style={{width: '100%', height: 'auto'}}/>
                                            </div>
                                        </div>
                                        <div className="w-[60%]">
                                            <div className="flex items-center">
                                                <h2 className="font-bold text-[1rem] text-textGray">
                                                    MyBusiness.xlsx
                                                </h2>
                                                <span className="ml-2 text-[#8083A3] text-[0.7rem]">
                                          11:52 AM
                                              </span>
                                            </div>
                                            <div className="">
                                                <p className="text-[#8083A3] text-[0.8rem]">
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1 w-[15%] flex justify-center items-start">
                                        <span
                                            className="flex items-center font-bold text-[#8083A3] border border-solid border-2 border-[#ECEEF5] px-2 py-1 text-center rounded">
                                            ...
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/panel/12">
                                <div
                                    className={pathname === "panel/12" ? "px-2 py-4 hover:bg-[#EAFFF6]" : "px-2 py-4 hover:bg-[#EAFFF6]"}>
                                    <div className="flex justify-between">
                                        <div className="w-[20%] flex justify-center items-start">
                                            <div className="w-[70%]">
                                                <Image src="/xlsm.svg" alt="costumer" width={0}
                                                       height={0}
                                                       sizes="100vw"
                                                       style={{width: '100%', height: 'auto'}}/>
                                            </div>
                                        </div>
                                        <div className="w-[60%]">
                                            <div className="flex items-center">
                                                <h2 className="font-bold text-[1rem] text-textGray">
                                                    MyBusiness.xlsx
                                                </h2>
                                                <span className="ml-2 text-[#8083A3] text-[0.7rem]">
                                          11:52 AM
                                              </span>
                                            </div>
                                            <div className="">
                                                <p className="text-[#8083A3] text-[0.8rem]">
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1 w-[15%] flex justify-center items-start">
                                        <span
                                            className="flex items-center font-bold text-[#8083A3] border border-solid border-2 border-neutral-200 px-2 py-1 text-center rounded">
                                            ...
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/panel/12">
                                <div
                                    className={pathname === "panel/12" ? "px-2 py-4 hover:bg-[#EAFFF6]" : "px-2 py-4 hover:bg-[#EAFFF6]"}>
                                    <div className="flex justify-between">
                                        <div className="w-[20%] flex justify-center items-start">
                                            <div className="w-[70%]">
                                                <Image src="/xlsm.svg" alt="costumer" width={0}
                                                       height={0}
                                                       sizes="100vw"
                                                       style={{width: '100%', height: 'auto'}}/>
                                            </div>
                                        </div>
                                        <div className="w-[60%]">
                                            <div className="flex items-center">
                                                <h2 className="font-bold text-[1rem] text-textGray">
                                                    MyBusiness.xlsx
                                                </h2>
                                                <span className="ml-2 text-[#8083A3] text-[0.7rem]">
                                          11:52 AM
                                              </span>
                                            </div>
                                            <div className="">
                                                <p className="text-[#8083A3] text-[0.8rem]">
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1 w-[15%] flex justify-center items-start">
                                        <span
                                            className="flex items-center font-bold text-[#8083A3] border border-solid border-2 border-neutral-200 px-2 py-1 text-center rounded">
                                            ...
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/panel/12">
                                <div
                                    className={pathname === "panel/12" ? "px-2 py-4 hover:bg-[#EAFFF6]" : "px-2 py-4 hover:bg-[#EAFFF6]"}>
                                    <div className="flex justify-between">
                                        <div className="w-[20%] flex justify-center items-start">
                                            <div className="w-[70%]">
                                                <Image src="/xlsm.svg" alt="costumer" width={0}
                                                       height={0}
                                                       sizes="100vw"
                                                       style={{width: '100%', height: 'auto'}}/>
                                            </div>
                                        </div>
                                        <div className="w-[60%]">
                                            <div className="flex items-center">
                                                <h2 className="font-bold text-[1rem] text-textGray">
                                                    MyBusiness.xlsx
                                                </h2>
                                                <span className="ml-2 text-[#8083A3] text-[0.7rem]">
                                          11:52 AM
                                              </span>
                                            </div>
                                            <div className="">
                                                <p className="text-[#8083A3] text-[0.8rem]">
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1 w-[15%] flex justify-center items-start">
                                        <span
                                            className="flex items-center font-bold text-[#8083A3] border border-solid border-2 border-neutral-200 px-2 py-1 text-center rounded">
                                            ...
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/panel/12">
                                <div
                                    className={pathname === "panel/12" ? "px-2 py-4 hover:bg-[#EAFFF6]" : "px-2 py-4 hover:bg-[#EAFFF6]"}>
                                    <div className="flex justify-between">
                                        <div className="w-[20%] flex justify-center items-start">
                                            <div className="w-[70%]">
                                                <Image src="/xlsm.svg" alt="costumer" width={0}
                                                       height={0}
                                                       sizes="100vw"
                                                       style={{width: '100%', height: 'auto'}}/>
                                            </div>
                                        </div>
                                        <div className="w-[60%]">
                                            <div className="flex items-center">
                                                <h2 className="font-bold text-[1rem] text-textGray">
                                                    MyBusiness.xlsx
                                                </h2>
                                                <span className="ml-2 text-[#8083A3] text-[0.7rem]">
                                          11:52 AM
                                              </span>
                                            </div>
                                            <div className="">
                                                <p className="text-[#8083A3] text-[0.8rem]">
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1 w-[15%] flex justify-center items-start">
                                        <span
                                            className="flex items-center font-bold text-[#8083A3] border border-solid border-2 border-neutral-200 px-2 py-1 text-center rounded">
                                            ...
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/panel/12">
                                <div
                                    className={pathname === "panel/12" ? "px-2 py-4 hover:bg-[#EAFFF6]" : "px-2 py-4 hover:bg-[#EAFFF6]"}>
                                    <div className="flex justify-between">
                                        <div className="w-[20%] flex justify-center items-start">
                                            <div className="w-[70%]">
                                                <Image src="/xlsm.svg" alt="costumer" width={0}
                                                       height={0}
                                                       sizes="100vw"
                                                       style={{width: '100%', height: 'auto'}}/>
                                            </div>
                                        </div>
                                        <div className="w-[60%]">
                                            <div className="flex items-center">
                                                <h2 className="font-bold text-[1rem] text-textGray">
                                                    MyBusiness.xlsx
                                                </h2>
                                                <span className="ml-2 text-[#8083A3] text-[0.7rem]">
                                          11:52 AM
                                              </span>
                                            </div>
                                            <div className="">
                                                <p className="text-[#8083A3] text-[0.8rem]">
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1 w-[15%] flex justify-center items-start">
                                        <span
                                            className="flex items-center font-bold text-[#8083A3] border border-solid border-2 border-neutral-200 px-2 py-1 text-center rounded">
                                            ...
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/panel/12">
                                <div
                                    className={pathname === "panel/12" ? "px-2 py-4 hover:bg-[#EAFFF6]" : "px-2 py-4 hover:bg-[#EAFFF6]"}>
                                    <div className="flex justify-between">
                                        <div className="w-[20%] flex justify-center items-start">
                                            <div className="w-[70%]">
                                                <Image src="/xlsm.svg" alt="costumer" width={0}
                                                       height={0}
                                                       sizes="100vw"
                                                       style={{width: '100%', height: 'auto'}}/>
                                            </div>
                                        </div>
                                        <div className="w-[60%]">
                                            <div className="flex items-center">
                                                <h2 className="font-bold text-[1rem] text-textGray">
                                                    MyBusiness.xlsx
                                                </h2>
                                                <span className="ml-2 text-[#8083A3] text-[0.7rem]">
                                          11:52 AM
                                              </span>
                                            </div>
                                            <div className="">
                                                <p className="text-[#8083A3] text-[0.8rem]">
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1 w-[15%] flex justify-center items-start">
                                        <span
                                            className="flex items-center font-bold text-[#8083A3] border border-solid border-2 border-neutral-200 px-2 py-1 text-center rounded">
                                            ...
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/panel/12">
                                <div
                                    className={pathname === "panel/12" ? "px-2 py-4 hover:bg-[#EAFFF6]" : "px-2 py-4 hover:bg-[#EAFFF6]"}>
                                    <div className="flex justify-between">
                                        <div className="w-[20%] flex justify-center items-start">
                                            <div className="w-[70%]">
                                                <Image src="/xlsm.svg" alt="costumer" width={0}
                                                       height={0}
                                                       sizes="100vw"
                                                       style={{width: '100%', height: 'auto'}}/>
                                            </div>
                                        </div>
                                        <div className="w-[60%]">
                                            <div className="flex items-center">
                                                <h2 className="font-bold text-[1rem] text-textGray">
                                                    MyBusiness.xlsx
                                                </h2>
                                                <span className="ml-2 text-[#8083A3] text-[0.7rem]">
                                          11:52 AM
                                              </span>
                                            </div>
                                            <div className="">
                                                <p className="text-[#8083A3] text-[0.8rem]">
                                                    Lorem Ipsum is simply dummy text of the printing
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-1 w-[15%] flex justify-center items-start">
                                        <span
                                            className="flex items-center font-bold text-[#8083A3] border border-solid border-2 border-neutral-200 px-2 py-1 text-center rounded">
                                            ...
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </Scrollbars>
            </div>
            <div className="main w-[75%]">
                {children}
            </div>
        </div>
    )
}
