import React, { useState } from "react";
import { SearchIconSvg } from "../svgIcons/searchIcon";
import { BellIconSvg } from "../svgIcons/bellIconsvg";
import { BiMenu } from "react-icons/bi"
import verteChargeLogo from "../images/verteChargeLogo.png"
import NavigationSidebar from "./navigationSidebar";
export default function Header() {
    const [isOpen, setisOpen] = useState(true);
    return (
        <div className="overflow-y-hidden">
            <div className="flex flex-row w-screen h-[80px] bg-white border-b border-gray-200 overflow-hidden absolute" >
                <img class="w-[110px] h-[40px] mt-[13px] mb-[13px] ml-[25px] mr-[96px]" src={verteChargeLogo} />
                <SearchIconSvg />

                <div class="ml-auto mr-[30px]  mt-[15px] mb-[15px]">
                    <BellIconSvg />

                </div>
                {/* {!isOpen ?
                    (
                        <button Onclick={() => setisOpen = (!isOpen)} class="mr-[30px] mt-[15px] mb-[15px]" >
                            < BiMenu class="w-[30px] h-[30px]" />
                        </button>
                    ) :
                    (
                        <NavigationSidebar />
                    )} */}
            </div>
        </div >
    )
}