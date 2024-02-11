import React from 'react'

export default function WeekDropdown() {
    return (
        <div>
            <select id="Charger" class="w-[154px] h-[51px] bg-gray-100 text-center text-neutral-800 text-sm font-bold font-['Roboto'] tracking-tight rounded-[9px] border border-gray-300  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Last Week</option>
                <option value="This Week">This Week</option>
                <option value="Today">Today</option>
            </select>
        </div>
    )
}

