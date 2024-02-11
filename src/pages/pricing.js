import React from "react";
import Header from "../features/ui/header.jsx";
import NavigationSidebar from "../features/ui/navigationSidebar.jsx";
import PaymentCollectedBox from "../features/ui/paymentCollectedBox.jsx";
import EnergyUsedBox from "../features/ui/energyUsedBox.jsx";
import TotalSessionsBox from "../features/ui/totalSessionsBox.jsx";
import TotalEVstationBox from "../features/ui/totalEVstationBox.jsx";
import { EnergyIconSvg } from "../features/svgIcons/energyIcon.jsx";
import { StationIconSvg } from "../features/svgIcons/stationIcon.jsx";
import { CarIconSvg } from "../features/svgIcons/carIcon.jsx";
import { GreenRingSvg } from "../features/svgIcons/greenRing.jsx";
export default function Pricing() {
  return (
    <>
      <div class="w-screen h-screen bg-gray-50 relative overflow-hidden">
        <Header />
        <div class="absolute top-[80px] left-0 right-0 bottom-0 overflow-x-auto">
          <div class="flex flex-row">
            <PaymentCollectedBox />
            <EnergyUsedBox />
            <TotalSessionsBox />
            <TotalEVstationBox />
          </div>
          <div className="w-[1104px] h-[400px] ml-[220px] bg-white rounded-md">
            <div className="text-black pt-[30px] pl-[86px] text-[22.85px] font-bold font-['Roboto']">
              Energy Pricing
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="flex flex-row">
                  <div className="text-neutral-900 pl-[75px] pr-[37px] pt-[50px] text-sm font-normal font-['Roboto']">
                    Price in Rupees
                  </div>
                  <div className="flex flex-row w-[314px] h-[53px] mt-[37px] px-[29px] py-[15px] bg-white rounded-[10px] border border-zinc-300 justify-center items-center gap-2.5">
                    <input
                      type="text"
                      placeholder="Rs: 316"
                      className="grow shrink basis-0 text-stone-950 text-sm font-normal font-['Roboto'] bg-transparent outline-none"
                    />
                    <EnergyIconSvg />
                  </div>
                  <div className="text-neutral-900 text-sm font-normal font-['Roboto'] mt-[50px] pl-[37px]">
                    Per Kwh
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="text-neutral-900 pr-[75px] pt-[41px] pl-[75px] text-sm font-normal font-['Roboto']">
                    Per Kwh
                  </div>
                  <div className="flex flex-row w-[314px] mt-[22px] h-[53px] px-[29px] py-[15px] bg-white rounded-[10px] border border-zinc-300 justify-center items-center gap-2.5">
                    <input
                      type="text"
                      placeholder="Kwh: 2200"
                      className="grow shrink basis-0 text-stone-950 text-sm font-normal font-['Roboto'] outline-none"
                    />
                    <EnergyIconSvg />
                  </div>
                  <div className="text-neutral-900 pt-[41px] pl-[37px] pr-[7px] text-sm font-normal font-['Roboto']">
                    Per Gallon
                  </div>
                  <div className="ml-[15px] mt-[25px]">
                    <StationIconSvg />
                  </div>
                </div>
                <div className="flex flex-row ml-[209px] pt-[20px]">
                  <CarIconSvg className=" mr-[7px]" />
                  <div className="text-neutral-900 pl-[10px] pt-[20px] text-sm font-normal font-['Roboto']">
                    54.17 miles per Kwh
                  </div>
                </div>
                <button className="w-[157px] h-[53px] ml-[75px] mt-[20px] px-[29px] py-[15px] bg-green-500 rounded-[10px] border border-green-500 justify-center items-center gap-2.5 inline-flex">
                  <span className="text-white text-base font-semibold font-['Roboto']">
                    Save Changes
                  </span>
                </button>
              </div>
              <div className="flex flex-col">
                <div className="pl-[46px] mr-[76px] mb-[18px]">
                  <GreenRingSvg />
                </div>
                <div className="text-neutral-900 text-2xl ml-[70px] font-normal font-['Roboto']">
                  Today's Price Kw/h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
