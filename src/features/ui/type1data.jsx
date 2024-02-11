import React from 'react';
import ActionDropdownMenu from '../ui/actionDropdown';
const generateSessionData = () => [
    {
        authenticationType: 'CCCS Type 2',
        location: 'PSO mini market gulberg 3',
        startTime: '19:00',
        endTime: '20:23',
        energyUsed: '23KW',
        cost: '2300',
    },
    {
        authenticationType: 'CCCS Type 2',
        location: 'PSO mini market gulberg 3',
        startTime: '19:00',
        endTime: '20:23',
        energyUsed: '23KW',
        cost: '2300',
    },
    {
        authenticationType: 'CCCS Type 2',
        location: 'PSO mini market gulberg 3',
        startTime: '19:00',
        endTime: '20:23',
        energyUsed: '23KW',
        cost: '2300',
    },
    {
        authenticationType: 'CCCS Type 2',
        location: 'PSO mini market gulberg 3',
        startTime: '19:00',
        endTime: '20:23',
        energyUsed: '23KW',
        cost: '2300',
    },
    // Add more session data objects as needed
];

const Type1RecentSessionData = ({ showActions = false }) => {
    const sessionData = generateSessionData();

    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-center text-neutral-800 text-sm font-bold font-['Roboto'] bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-10 py-3">
                            Authentication Type
                        </th>
                        <th scope="col" className="px-10 py-3">
                            Location
                        </th>
                        <th scope="col" className="px-10 py-3">
                            Start Time
                        </th>
                        <th scope="col" className="px-10 py-3">
                            End Time
                        </th>
                        <th scope="col" className="px-10 py-3">
                            Energy Used
                        </th>
                        <th scope="col" className="px-10 py-3">
                            Cost
                        </th>
                        {showActions && <th scope="col" className="px-10 py-3">Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {sessionData.map((session, index) => (
                        <tr
                            key={index}
                            className="text-center text-neutral-800 text-sm font-normal font-['Roboto'] bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                {session.authenticationType}
                            </th>
                            <td className="px-10 py-4">{session.location}</td>
                            <td className="px-10 py-4">{session.startTime}</td>
                            <td className="px-10 py-4">{session.endTime}</td>
                            <td className="px-10 py-4">{session.energyUsed}</td>
                            <td className="px-10 py-4">{session.cost}</td>
                            {showActions && <td className="px-10 py-4"><ActionDropdownMenu /></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Type1RecentSessionData;
