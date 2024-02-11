import React, { useState } from 'react';
export const ChargerSvg = () => {
    const [iconColor, setIconColor] = useState('#0C0C0D');
    const [textColor, setTextColor] = useState('#0C0C0D');

    const toggleColor = () => {
        if (iconColor === '#0C0C0D') {
            setIconColor('#34B44A');
            setTextColor('#34B44A');
        } else {
            setIconColor('#0C0C0D');
            setTextColor('#0C0C0D');
        }
    };
    return (
        <button
            onClick={toggleColor}
            className="flex items-center"
        >
            <div class="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <path d="M9.66642 26.5833H19.3331C24.1906 26.5833 25.0606 24.6379 25.3143 22.2696L26.2206 12.6029C26.5468 9.65458 25.701 7.25 20.5414 7.25H8.45808C3.2985 7.25 2.45267 9.65458 2.77892 12.6029L3.68517 22.2696C3.93892 24.6379 4.80892 26.5833 9.66642 26.5833Z" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.6665 7.24984V6.28317C9.6665 4.14442 9.6665 2.4165 13.5332 2.4165H15.4665C19.3332 2.4165 19.3332 4.14442 19.3332 6.28317V7.24984" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.9163 15.7083V16.9167C16.9163 16.9288 16.9163 16.9288 16.9163 16.9408C16.9163 18.2579 16.9043 19.3333 14.4997 19.3333C12.1072 19.3333 12.083 18.27 12.083 16.9529V15.7083C12.083 14.5 12.083 14.5 13.2913 14.5H15.708C16.9163 14.5 16.9163 14.5 16.9163 15.7083Z" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.1603 13.2915C23.369 15.3215 20.179 16.5298 16.9165 16.9407" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.16553 13.6177C5.88428 15.4785 8.95344 16.6023 12.083 16.9527" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class={`text-[18px] ml-[20px] font-normal font-['Roboto'] tracking-tight ${textColor}`} >Chargers</div>
            </div>
        </button >
    );
};


