"use client"
import Image from 'next/image'
import {Scrollbars} from 'react-custom-scrollbars';
import {usePathname} from "next/navigation";
import {AiOutlinePaperClip} from "react-icons/ai"
import { useSelector, useDispatch } from 'react-redux'
import { toggleMenu } from '../../../redux/sidebar/sidebarSlice'
import { AudioRecorder } from 'react-audio-voice-recorder';
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useEffect,useRef} from "react";
import "../../../style/spotLoading.css"
import api from "@/hooks/api/api";
import {useRouter} from "next/navigation";

export default function Home({ params }) {
    const router = useRouter()
    const pathname = usePathname()
    const scrollbars = useRef(null)
    const isOpen = useSelector((state) => state.sidebar.isOpen)
    const dispatch = useDispatch()
    const [massage ,setMassage] = useState("")
    const [AILoading,setAILoading] = useState(false)
    const [chat, setChat] = useState()
    const [chatHistory,setChatHistory] = useState([])

    const handleBack = () =>{
        router.push('/panel')
        if(window.innerWidth < 768){
            dispatch(toggleMenu())
        }
    }

    useEffect(() => {
        scrollbars.current.scrollToBottom()
    }, [chatHistory]);


    const getChats = async ()=>{
        try {
            const res = await api.get(`chats/read/${params.id}`)
            setChat(res)
            if(res.chat_history !== null){
                setChatHistory(res?.chat_history)
            }
        }catch (err){
            toast.error("the connection has error !", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    useEffect(()=>{
        getChats()
    },[])

    const addLoadingMassage = () =>{
        let date = new Date().toJSON();
        let updateChatHistory = [...chatHistory];
        let chat = {
            Human:{
                date: date,
                message:massage
            },
            AI: {
                date: date,
                message:<div className="mb-10"><span className="loader"></span></div>
            },
        }
        updateChatHistory.push(chat)
        setChatHistory(updateChatHistory)
    }
    const handleSendMassage = async () =>{
        setAILoading(true)

        addLoadingMassage()

        const newMassage = massage
        setMassage("")

        let formData = new FormData()
        formData.append("audio","")

        try{
            await api.postFile(`chats/new_message?chat_id=${params.id}&input_type=text&output_type=text&new_message=${newMassage}`,formData)
            getChats()
        }catch (err){
            toast.error("Has Error !", {
                position: toast.POSITION.TOP_CENTER
            });
        }finally {
            setAILoading(false)
            scrollbars.current.scrollToBottom()
        }

    }
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

    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement('audio');
        console.log(url)
        audio.src = url;
        audio.controls = true;
    };
    const handleUpdate = () =>{
        scrollbars.current.scrollToBottom()
    }
    return (
        <div className="h-screen w-full flex flex-col justify-between">
            <header className="py-7 px-5 md:px-10 flex justify-between items-center border-b  border-b-1 border-b-neutral-300">
                <div className="flex items-center">
                    <button onClick={handleBack}
                        className="hover:bg-[#EAFFF6] px-4 py-[0.7rem] rounded-[0.5rem] border border-solid border-2 border-[#ECEEF5]">
                        <div className="w-2">
                            <Image src="/back.svg" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{width: '100%', height: 'auto'}}/>
                        </div>
                    </button>
                    <div className="mx-4 md:mx-10">
                        <h2 className="font-bold text-[1rem] text-textGray">
                            {chat?.chat?.Title}
                        </h2>
                        <p className="hidden md:block text-[#8083A3] text-[0.8rem]">
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

            <Scrollbars autoHide
                        ref={scrollbars}
                        className="scroll-bar pb-10"
                        autoHideTimeout={500}
                        autoHideDuration={200}
                        renderView={renderView}
                        renderThumbHorizontal={renderThumbHorizontal}
                        renderThumbVertical={renderThumbVertical}
                        renderTrackVertical={renderTrackVertical}>

                <div className="flex justify-center">
                    <div className="w-[17%] rounded-[0.5rem]">
                        <Image src="/Animations/Wink.svg" alt="costumer" width={0}
                               height={0}
                               sizes="100vw"
                               style={{width: '100%', height: 'auto', objectFit: "cover"}}/>
                    </div>
                </div>
                {
                    chatHistory?.map((massage)=>(
                        <div>
                            <div className="flex justify-end">
                                <div className="flex flex-row-reverse mx-8 my-5 w-[80%] md:w-[50%]">
                                    <div className="mx-2">
                                        <div className="w-[2rem] rounded-[0.5rem]">
                                            <Image src="/img.png" alt="costumer" width={0}
                                                   height={0}
                                                   sizes="100vw"
                                                   style={{width: '100%', height: 'auto', objectFit: "cover"}}/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-row-reverse items-center">
                                            <h2 className="font-bold text-[0.9rem] text-textGray">
                                                Me
                                            </h2>
                                            <span className="mx-2 text-[#8083A3] text-[0.7rem]">
                                               { massage.Human.date?.substring(11,16)}
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            <p className="font-medium text-textGray  bg-mainGreen rounded-xl rounded-se-none p-3 bg-[] text-[0.8rem]">
                                                {massage?.Human?.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex ">
                                <div className="flex mx-8 my-5 w-[80%] md:w-[50%]">
                                    <div className="mx-2">
                                        <div
                                            className="hover:bg-[#EAFFF6] bg-mainGreen px-1 py-[0.3rem] rounded-[0.5rem] border border-solid border-2 border-[#ECEEF5]">
                                            <div className="w-6">
                                                <Image src="/smallHead.svg" alt="costumer" width={0}
                                                       height={0}
                                                       sizes="100vw"
                                                       style={{width: '100%', height: 'auto'}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex  items-center">
                                            <h2 className="font-bold text-[0.9rem] text-textGray">
                                                Robot
                                            </h2>
                                            <span className="mx-2 text-[#8083A3] text-[0.7rem]">
                                                { massage.AI.date?.substring(11,16)}
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            <p className="flex justify-center font-medium text-textGray bg-[#F3F4F9]  rounded-xl rounded-ss-none p-3 bg-[] text-[0.8rem]">
                                                {massage?.AI?.message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Scrollbars>
            <div className="py-3 px-5 md:px-10 flex justify-between items-center border-t  border-t-1 border-t-neutral-300">
                <div className="w-[80%]">
                    <textarea value={massage} onChange={(e)=>{setMassage(e.target.value)}} placeholder="Type to add your message..."
                              className="text-scroll  w-full focus:outline-none py-5 focus:border-none"/>
                </div>
                <div className="flex gap-4 items-center justify-between">
                    <AudioRecorder
                        onRecordingComplete={addAudioElement}
                        audioTrackConstraints={{
                            noiseSuppression: true,
                            echoCancellation: true,
                        }}
                        onNotAllowedOrFound={(err) => console.table(err)}
                        downloadFileExtension="webm"
                        mediaRecorderOptions={{
                            audioBitsPerSecond: 128000,
                        }}/>
                    <button>
                            <AiOutlinePaperClip className="text-[#C9C9C9] text-[1.6rem]"/>
                    </button>
                    <button disabled={massage === "" || AILoading}
                            onClick={handleSendMassage}
                        className="disabled:bg-[#EAFFF6] hover:bg-[#EAFFF6] bg-mainGreen px-3 py-3 rounded-[0.5rem] border border-solid border-2 border-[#ECEEF5]">
                        <div className="w-6">
                            <Image src="/send.svg" alt="costumer" width={0}
                                   height={0}
                                   sizes="100vw"
                                   style={{width: '100%', height: 'auto'}}/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
