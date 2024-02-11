import React, { useState } from 'react';
import Type1RecentSessionData from '../ui/type1data';
import Type2RecentSessionData from './type2data';
import CHAdeMORecentSessionData from './chademodata';
import CCS2RecentSessionData from './ccs2data';
import WeekDropdown from './weekDropdown';
// Components for different charger types
const Type1Component = () => <div class="relative overflow-x-auto"><Type1RecentSessionData showActions={false}/></div>;
const Type2Component = () => <div class="relative overflow-x-auto"><Type2RecentSessionData showActions={false}/></div>;
const CHAdeMOComponent = () => <div class="relative overflow-x-auto"><CHAdeMORecentSessionData showActions={false}/></div>;
const CCS2Component = () => <div class="relative overflow-x-auto"><CCS2RecentSessionData showActions={false}/></div>;

export default function ChargerTypedropdown() {
    const [selectedOption, setSelectedOption] = useState("Charger");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const renderComponent = () => {
        switch (selectedOption) {
            case "Type1":
                return <Type1Component />;
            case "Type2":
                return <Type2Component />;
            case "CHAdeMO":
                return <CHAdeMOComponent />;
            case "CCS2":
                return <CCS2Component />;
            default:
                return null;
        }
    };

    return (
        <div class="flex flex-col">
             <div class="flex flex-row">
            <select
                id="Charger"
                className="w-[154px] h-[51px] bg-gray-100 text-center text-neutral-800 text-sm font-bold font-['Roboto'] tracking-tight rounded-[9px] border border-gray-300  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedOption}
                onChange={handleOptionChange}
            >
                <option value="Charger">Charger</option>
                <option value="Type1">Type1</option>
                <option value="Type2">Type2</option>
                <option value="CHAdeMO">CHAdeMO</option>
                <option value="CCS2">CCS2</option>
            </select>
            <div className="ml-[20px]">
            <WeekDropdown />
            </div>
            </div>
            {/* Render the selected component */}
            {renderComponent()}
        </div>
    );
}