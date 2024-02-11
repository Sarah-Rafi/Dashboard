import React, { useState } from "react";
import EVcharger from "../features/images/EVcharger.png"
import verteChargeLogo from "../features/images/verteChargeLogo.png"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
export default function Signup() {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div class="h-screen flex flex-row lg:overflow-hidden">
            <img src={EVcharger} class="hidden lg:block w-1/2 h-full object-cover" alt="Side Image" />
            <div class="flex flex-col bg-white ml-[100px] justify-center">
                <div class="flex justify-center items-center flex-row mt-[5px] ml-[50px]">
                    <img class="w-[250px] h-15 mr-[120px] mb-[10px]" src={verteChargeLogo} alt="Logo" />
                </div>
                <form action="">
                    <div class="flex flex-col ">
                        <div class="text-black text-base font-normal font-['Roboto'] mb-[5px]">First Name</div>
                        <input type="text" class="mb-[10px] w-[450px] h-[50px] px-[29px] py-[12px] bg-white rounded-[10px] border border-zinc-300 justify-center items-center inline-flex grow shrink basis-0 text-black text-s font-normal font-['Roboto']" placeholder="Enter Your First Name" required />
                        <div class="text-black text-base font-normal font-['Roboto'] mb-[5px]">Last Name</div>
                        <input type="text" class="mb-[10px] w-[450px] h-[50px] px-[29px] py-[12px] bg-white rounded-[10px] border border-zinc-300 justify-center items-center inline-flex grow shrink basis-0 text-black text-s font-normal font-['Roboto']" placeholder="Enter Your Last Name" required />
                        <div class="text-black text-base font-normal font-['Roboto'] mb-[5px]">Email</div>
                        <input type="email" class="mb-[10px] w-[450px] h-[50px] px-[29px] py-[12px] bg-white rounded-[10px] border border-zinc-300 justify-center items-center inline-flex grow shrink basis-0 text-black text-s font-normal font-['Roboto']" placeholder="Enter Your Email" required />
                        <div class="text-black text-base font-normal font-['Roboto'] mb-[5px]">Phone Number</div>
                        <input type="text" class="mb-[10px] w-[450px] h-[50px] px-[29px] py-[12px] bg-white rounded-[10px] border border-zinc-300 justify-center items-center inline-flex grow shrink basis-0 text-black text-s font-normal font-['Roboto']" placeholder="Enter Your Phone Number" required />
                        <div class="mb-[5px] text-black text-base font-normal font-['Roboto']">Password</div>
                        <div class="space-between mb-[15px] w-[450px] h-[50px] py-[12px] bg-white rounded-[10px] border border-zinc-300 justify-center items-center inline-flex grow shrink basis-0">
                            <input type={(open === false) ? 'password' : 'text'} class="w-[350px] h-[50px] px-[29px] py-[12px] bg-white rounded-[10px] border border-zinc-300 justify-center items-center inline-flex grow shrink basis-0 text-black text-s font-normal font-['Roboto']" placeholder="XXXXXXXXXXXX" required />
                            {
                                (open === false) ? <AiFillEye class="m-4" onClick={toggle} /> : < AiFillEyeInvisible class="m-4" onClick={toggle} />}
                        </div>
                        <button type="submit" class=" w-[450px] h-[50px] px-[29px] py-[12px] bg-green-500 rounded-[10px] border border-zinc-300 justify-center items-center inline-flex text-center text-white text-lg font-bold font-['Roboto']">Sign Up</button>
                        <div class="flex flex-row justify-center mt-[10px]">
                            <span class="text-neutral-900 text-lg font-normal font-['Roboto']">Already have an account?</span>
                            <span class="text-green-500 text-lg font-normal font-['Roboto']"><a href="#"> Login in</a> </span>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};