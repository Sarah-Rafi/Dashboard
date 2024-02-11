import React from 'react'
import MonthGreenDropdown from "../ui/monthGreenDropdown";
export default function PaymentCollectedBox() {
    return (
        <div>
            <div class="ml-[225px] mb-[12px] mr-[20px] mt-[20px] w-[260px] h-[120px] bg-white rounded-md border-2 border-violet-100" >
                <div class="flex flex-row mt-1">
                    <div class="mt-[10px] ml-[15px] mr-[20px] text-neutral-700 text-base font-bold font-['Roboto'] tracking-tight">Payment Collected</div>
                    <div class="flex flex-col">
                        <MonthGreenDropdown />
                    </div >
                </div>
                <div class="ml-[15px] text-neutral-800 text-[32px] font-bold font-['Roboto'] tracking-tight">Rs230000</div>
                <div className="ml-[15px] text-neutral-400 text-xs font-normal font-['Roboto'] tracking-tight">September Total Payment</div>
            </div>
        </div>
    )
}

