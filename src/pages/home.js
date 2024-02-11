import React from "react";
import ChargerTypedropdown from "../features/ui/chargerTypedropdown.jsx";
import MonthDropdown from "../features/ui/monthDropdown.jsx";
import PaymentCollectedBox from "../features/ui/paymentCollectedBox.jsx";
import EnergyUsedBox from "../features/ui/energyUsedBox.jsx";
import TotalSessionsBox from "../features/ui/totalSessionsBox.jsx";
import TotalEVstationBox from "../features/ui/totalEVstationBox.jsx";
import ThreeOptionButton from "../features/ui/threeOptionButton.jsx";
import Header from "../features/ui/header.jsx";
export default function Home() {
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
          <div class="ml-[225px]  mb-[20px] w-[1100px] h-[auto] bg-white rounded-md border-2 border-violet-100">
            <div class="flex flex-row">
              <div class="flex flex-col mt-[20px] ml-[25px] mr-[500px] w-[100%] h-[100%]">
                <ThreeOptionButton />
              </div>
            </div>
          </div>
          <div class="ml-[225px] w-[1100px] h-[auto] bg-white rounded-md border-2 border-violet-100">
            <div class="flex flex-row justify-between mt-[20px]">
              <div class="text-black text-[22.85px] ml-[20px] mb-[10px] font-bold font-['Roboto'] tracking-tight">
                Recent Sessions
              </div>
              <div class="flex mr-[20px] justify-end">
                <MonthDropdown />
              </div>
            </div>
            <div class="flex flex-row ml-[20px] mb-[10px]">
              <ChargerTypedropdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
