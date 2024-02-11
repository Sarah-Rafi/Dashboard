import React, { useState } from 'react';

const ActionDropdownMenu = () => {
    const [selectedOption, setSelectedOption] = useState('accept');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const getDropdownClass = () => {
        return selectedOption === 'decline' ? "#fed7d7" : "#38a169";
    };

    return (
        <div className={`w-[99px] h-7 ${getDropdownClass()}`}>
            <select
                className="w-full p-2 text-black"
                value={selectedOption}
                onChange={handleChange}
            >
                <option value="accept">Accept</option>
                <option value="decline">Decline</option>
            </select>
        </div>
    );
};

export default ActionDropdownMenu;

