import React, { useState } from 'react'
import PaymentCollectedBarChart from './graph';
import EnergyUsedBarChart from './graph1';
import BookingsBarChart from './graph2';
import MonthDropdown from "../ui/monthDropdown";

const PaymentCollectedComponent = () => (
    <div class=" width: '100%', height: '100%' ">
        <PaymentCollectedBarChart />
    </div >
);
const EnergyUsedComponent = () => (
    <div>
        <EnergyUsedBarChart />
    </div>
);


const BookingsComponent = () => (
    <div>
        <BookingsBarChart />
    </div>
);

export default function ThreeOptionButton() {
    const [selectedOption, setSelectedOption] = useState("Payment Collected");

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const getComponentForOption = () => {
        switch (selectedOption) {
            case "Payment Collected":
                return <PaymentCollectedComponent />;
            case "Energy Used":
                return <EnergyUsedComponent />;
            case "Bookings":
                return <BookingsComponent />;
            default:
                return null;
        }
    };
    return (
    <div>
        <div className='flex flex-row'>
            <div class=" w-[450px] h-[50px]  items-center bg-gray-100 rounded-[100px]">
            <div div class="flex items-center pt-1 pl-1 pr-1">
                <button
                    class={`${selectedOption === "Payment Collected"
                        ? "bg-white text-black shadow"
                        : "bg-gray-100"} hover:bg-gray-100 focus:outline-none w-[154px] h-10 rounded-[100px]`}
                    onClick={() => handleOptionClick("Payment Collected")}
                >
                    Payment Collected
                </button>
                <button
                    class={`${selectedOption === "Energy Used"
                        ? "bg-white text-black shadow"
                        : "bg-gray-100"} hover:bg-gray-100 focus:outline-none w-[154px] h-10 rounded-[100px]`}
                    onClick={() => handleOptionClick("Energy Used")}
                >
                    Energy Used
                </button>
                <button
                    class={`${selectedOption === "Bookings"
                        ? "bg-white shadow text-black"
                        : "bg-gray-100"} hover:bg-gray-100 focus:outline-none w-[154px] h-10 rounded-[100px]`}
                    onClick={() => handleOptionClick("Bookings")}
                >
                    Bookings
                </button>
            </div>
        </div>
        <div class=" mt-[15px] ml-[450px] mr-[15px]">
                <MonthDropdown />
        </div>
        </div>
        <div className=" width: '100%', height: '100%' ">
                {getComponentForOption()}
        </div>
    </div>
    )
}

