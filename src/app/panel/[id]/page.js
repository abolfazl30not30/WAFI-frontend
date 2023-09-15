"use client"
import Image from 'next/image'
import {Scrollbars} from 'react-custom-scrollbars';

export default function Home() {

    const renderView = ({style, ...reset}) => {
        const customStyle = {
            marginRight: '-19px',
            right: '2px',
            overflowX: "hidden"
        };
        return <div {...reset} style={{...style, ...customStyle}}/>;
    };

    const renderThumbVertical = ({style, ...reset}) => {
        const thumbStyle = {
            borderRadius: 6,
            backgroundColor: '#F1F2F6',
            right: '2px',
        };
        return <div style={{...style, ...thumbStyle}} {...reset} />;
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
        return <div style={thumbStyle}/>;
    };

    const renderThumbHorizontal = ({style, ...reset}) => {
        const thumbStyle = {
            borderRadius: 6,
            backgroundColor: '#F1F2F6',
        };
        return <div style={{...style, ...thumbStyle}} {...reset} />;
    };

    return (
        <div className="h-screen flex flex-col justify-between">
            <header className="py-7 px-10 flex justify-between items-center border-b  border-b-1 border-b-neutral-300">
                <div className="flex items-center">
                    <button
                        className="hover:bg-[#EAFFF6] px-4 py-[0.7rem] rounded-[0.5rem] border border-solid border-2 border-[#ECEEF5]">
                        <div className="w-2">
                            <Image src="/back.svg" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{width: '100%', height: 'auto'}}/>
                        </div>
                    </button>
                    <div className="ml-10">
                        <h2 className="font-bold text-[1rem] text-textGray">
                            MyBusiness.xlsx
                        </h2>
                        <p className="text-[#8083A3] text-[0.8rem]">
                            Lorem Ipsum is simply dummy text of the printing
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        className="hover:bg-[#EAFFF6] px-[0.8rem] py-[0.7rem] rounded-[0.5rem] border border-solid border-2 border-[#ECEEF5]">
                        <div className="w-[0.9rem]">
                            <Image src="/edit.svg" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{width: '100%', height: 'auto'}}/>
                        </div>
                    </button>
                    <div className="h-full text-[1.5rem] text-[#ECEEF5]">
                        |
                    </div>
                    <button
                        className="hover:bg-[#EAFFF6] px-[0.8rem] py-[0.65rem] rounded-[0.5rem] border border-solid border-2 border-[#ECEEF5]">
                        <div className="w-[1rem]">
                            <Image src="/search.svg" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{width: '100%', height: 'auto'}}/>
                        </div>
                    </button>
                    <button
                        className="hover:bg-[#EAFFF6] bg-mainGreen px-2 py-[0.4rem] rounded-[0.5rem] border border-solid border-2 border-[#ECEEF5]">
                        <div className="w-7">
                            <Image src="/smallHead.svg" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{width: '100%', height: 'auto'}}/>
                        </div>
                    </button>
                </div>
            </header>
            <div className="">
                <Scrollbars autoHide
                            className="scroll-bar"
                            autoHideTimeout={500}
                            autoHideDuration={200}
                            renderView={renderView}
                            renderThumbHorizontal={renderThumbHorizontal}
                            renderThumbVertical={renderThumbVertical}
                            renderTrackVertical={renderTrackVertical}>
                </Scrollbars>
            </div>
            <div className="py-3 px-10 flex justify-between items-center border-t  border-t-1 border-t-neutral-300">
                <div className="w-[80%]">
                    <textarea placeholder="Type to add your message..."
                              className="text-scroll h-14 w-full focus:outline-none py-5 focus:border-none"/>
                </div>
            </div>
        </div>
    )
}
