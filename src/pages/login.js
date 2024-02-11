import React, { useState } from "react";
import EVcharger from "../features/images/EVcharger.png"
import verteChargeLogo from "../features/images/verteChargeLogo.png"
import facebookLogo from "../features/images/facebookLogo.jpg"
import googleLogo from "../features/images/googleLogo.jpg"
import appleLogo from "../features/images/appleLogo.png"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
export default function Login() {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div class="h-screen flex flex-row lg:overflow-hidden">
            <img src={EVcharger} class="hidden lg:block w-1/2 h-full object-cover" alt="Side Image" />
            <div class="flex flex-col bg-white lg:ml-[100px] md:ml-[100px]" >
                <div class=" flex flex-col bg-white">
                    <div class="flex flex-col bg-white ">
                        <div class="flex flex-row  ml-[100px] mt-[20px]">
                            <img class="w-[240px] h-20 mt-[16px] mb-[24px]" src={verteChargeLogo} alt="Logo" />
                        </div>
                            <form action="">
                            <div class="text-black text-base font-normal font-['Roboto'] mb-[7px]">Email/Phone Number</div>
                            <input type="text" class="text-black border border-zinc-300 mb-[12px] w-[450px] h-[45px] px-[29px] py-[15px] bg-white rounded-[10px]  justify-center items-center inline-flex grow shrink basis-0 text-sm font-normal font-['Roboto']" placeholder="Enter Your Email/Phone Number" required />
                            <div class="mb-[7px] text-black text-base font-normal font-['Roboto']">Password</div>
                            <div class="mb-[12px] w-[450px] h-[45px] bg-white rounded-[10px] border border-zinc-300 inline-flex grow shrink basis-0 ">
                                <input type={(open === false) ? 'password' : 'text'} class=" text-black w-[420px] h-[45px] px-[29px] py-[12px] border border-zinc-300 rounded-[10px]  text-sm font-normal font-['Roboto']" placeholder="XXXXXXXXXXXX" required />
                                {
                                    (open === false) ? <AiFillEye class="m-4" onClick={toggle} /> : < AiFillEyeInvisible class="m-4" onClick={toggle} />}


                            </div>
                            <div class="flex flex-row mb-[14px]">
                                    <input type="checkbox" class=" w-5 h-5 rounded-[5px] border border-stone-300" />
                                <div class="ml-[18px] mr-[200px] text-stone-300 text-base font-normal font-['Roboto']">Remember Me</div>
                                    <div class="text-green-500 text-base font-normal font-['Roboto'] "><a href="#">Forgot Password?</a></div>
                                </div>
                            <button type="submit" class="  w-[450px] h-[45px] px-[29px] py-[15px] bg-green-500 rounded-[10px] border border-zinc-300 justify-center items-center inline-flex text-center text-white text-sm font-bold font-['Roboto']">Log In</button>
                            </form>
                        <div class="mt-[15px] w-[450px] h-[40px]"><span class=" text-zinc-500 text-xs font-normal font-['Poppins'] leading-normal">By logging in, you acknowledge that you accept the </span><span class="text-zinc-500 text-xs font-normal font-['Poppins'] underline leading-normal">Terms of Service</span><span class="text-zinc-500 text-xs font-normal font-['Poppins'] leading-normal"> and consent to receive text messages.</span>
                        </div>
                        <div class="flex flex-row justify-center items-center mt-[10px] ml-[100px] w-[247px] h-[19px] mb-[12px]">
                            <div class="w-[90px]  border-gray-400 h-[1px] border-t" />
                            <div class="text-neutral-900 text-sm font-normal font-['Open Sans'] mr-[10px] ml-[10px]"> Or </div>
                            <div class="w-[90px]  border-gray-400 h-[1px] border-t" />
                        </div>
                        <div class="flex flex-row ml-[130px]">
                            <div className="w-[59px] h-[59px] mr-[7px] rounded-full shadow border border-gray-400">
                                <div class="m-[18px]">
                                    <img src={facebookLogo} class="w-7 h-6 " alt=" Facebook Logo" />
                                </div>
                            </div>
                            <div className="w-[59px] h-[59px] mr-[7px] rounded-full shadow border border-gray-400">
                                <div class="m-[18px]">
                                    <img src={googleLogo} class="w-6 h-6 " alt="Google Logo" />
                                </div>
                            </div>
                            <div className="w-[59px] h-[59px] rounded-full shadow border border-gray-400">
                                <div class="m-[18px]">
                                    <img src={appleLogo} class="w-6 h-6 " alt=" Apple Logo" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row ml-[160px] mt-[16px]">
                            <span class="text-neutral-900 text-sm font-normal font-['Roboto']">First time here?</span>
                            <span class="text-green-500 text-sm font-normal font-['Roboto']"> <a href="#">Sign Up</a></span></div>
                        </div>
                    </div>
            </div >
        </div >
    );
};