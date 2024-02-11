import React from 'react'
import { ArrowSvg } from "../svgIcons/arrowsvg";
export default function TotalEVstationBox() {
    return (
        <div><div className="w-[260px] h-[120px] mb-[20px] mt-[20px] bg-white rounded-md border-2 border-violet-100" >
            <div class="flex flex-row mt-1">
                <div className="mt-[10px] mr-[50px] ml-[15px] text-neutral-700 text-base font-bold font-['Roboto'] tracking-tight">Total EV Stations</div>
                <div className="mt-[10px] mr-[10px]w-[56.16px] h-[22.32px] px-[3.54px] py-[2.66px] bg-lime-600 bg-opacity-20 rounded-[44.31px] justify-center items-center gap-[2.66px] inline-flex">
                    <ArrowSvg class="w-[20px] h-[20px]" />
                    <div className="text-green-700 text-xs font-normal font-['Roboto'] tracking-tight">22.0%</div>
                </div>
            </div>
            <div className="ml-[15px] text-neutral-800 text-[32px] font-bold font-['Roboto'] tracking-tight">17</div>
            <div className="ml-[15px] text-neutral-400 text-xs font-normal font-['Roboto'] tracking-tight">Ev Charging Stations</div>
        </div></div>
    )
}

