import React from 'react'


export default function MonthGreenDropdown() {
    return (
        <div> <select id="months" class="mt-[10px] w-[77.10px] h-[22.09px] px-[7.09px] py-[1px] text-green-700 bg-lime-600 bg-opacity-20 rounded justify-center items-center gap-[26.59px]  border border-gray-300  text-xs  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Month</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="Aug">Aug</option>
            <option value="Sept">Sept</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
        </select>
        </div>
    )
}
