import Image from "next/image"
import Sapa from "../../../public/sapa-ruong-bac-thang.jpg"
import { AlarmClockCheck, Mail, MapPinned, Phone } from "lucide-react"

export default function Contact() {
    return (
        <div>
            <div className="relative">
                <Image className="h-[250px]  object-cover" width={1600} height={200} alt="" src={Sapa} />
                <div className=" absolute w-full h-full  inset-0 bg-black/40">
                    <h1 className="  text-white font-bold text-[50px] text-center p-[90px] "> Contact</h1>
                </div>
            </div>
            <div className="mt-[50px] ml-[92px]">
                <h1 className="font-bold mb-[20px] text-2xl">Contact us</h1>
                <p> We're here to help</p>
            </div>
            <div className="">
                <div className=" flex justify-center gap-[50px] px-[20px] pt-10 ">

                    <div className=" relative flex flex-col items-center ">
                        <div className=" absolute rounded-[100%] text-white bg-orange-500 p-7 ">
                            <MapPinned className=" w-[30px] h-[30px] " />
                        </div>
                        <div className="text-black  bg-orange-200 py-[80px] px-[100px] mt-[40px] text-left  ">
                            <h1 className="text-[20px] font-bold -ml-[40px]  ">Call us</h1>
                            <h1 className="text-[#504f4f] -ml-[40px] w-[250px] text-[15px]">0333833xxx</h1>
                        </div>
                    </div>
                    
                    <div className=" relative flex flex-col items-center ">
                        <div className=" absolute rounded-[100%] text-white bg-orange-500 p-7  ">
                            <MapPinned className=" w-[30px] h-[30px] " />
                        </div >
                        <div className="text-black  bg-orange-200 py-[35px] px-[100px] mt-[40px] text-left ">
                            <h1 className="text-[20px] font-bold -ml-[40px] pt-5">Chat Live</h1>
                            <h1 className="text-[#504f4f] -ml-[40px] w-[250px] text-[15px]">We're available  Sun 7:00pm EST - Friday 7:00pm EST</h1>
                            <button className="rounded-full bg-orange-700 px-2 -ml-[40px] my-3">Chat now</button>
                        </div>

                    </div>
                    <div className=" relative flex flex-col items-center ">
                        <div className=" absolute rounded-[100%] text-white bg-orange-500 p-7  ">
                            <MapPinned className=" w-[30px] h-[30px] " />
                        </div>
                        <div className="text-black  bg-orange-200 py-[35px] px-[100px] mt-[40px] text-left items-stretch ">
                            <h1 className="text-[20px] font-bold -ml-[40px] pt-5 ">Ask a Question</h1>
                            <h1 className="text-[#504f4f] -ml-[40px] w-[250px] text-[15px]">Fill out our and we'll get back to you in 24 hours</h1>
                            <button className="rounded-full bg-orange-700 px-2 -ml-[40px] my-3">Get started</button>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <h1 className="mt-10 ml-[92px]">
                    Looking for someone you now...
                </h1>
            </div>
        </div>
    )
}