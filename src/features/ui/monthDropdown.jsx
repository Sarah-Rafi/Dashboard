import React from "react";

export default function MonthDropdown() {
    return (
        <div>
            <select id="months" class=" text-neutral-700 text-sm font-bold font-['Roboto'] w-[121.93px] h-[37.40px] p-[10.20px] bg-neutral-100 rounded-xl justify-start items-start gap-[10.20px] inline-flex border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>This Month</option>
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
    );
};