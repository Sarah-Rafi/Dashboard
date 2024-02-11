import React, { useState } from 'react';
export const AccessSvg = () => {
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
                    <path d="M9.6665 2.41699V6.04199" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.333 2.41699V6.04199" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.229 10.9834H24.7707" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25.3748 10.2712V20.542C25.3748 24.167 23.5623 26.5837 19.3331 26.5837H9.66642C5.43726 26.5837 3.62476 24.167 3.62476 20.542V10.2712C3.62476 6.64616 5.43726 4.22949 9.66642 4.22949H19.3331C23.5623 4.22949 25.3748 6.64616 25.3748 10.2712Z" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.9642 16.5544H18.9751" stroke={iconColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.9642 20.1794H18.9751" stroke={iconColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.4943 16.5544H14.5051" stroke={iconColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.4943 20.1794H14.5051" stroke={iconColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.0221 16.5544H10.0329" stroke={iconColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.0221 20.1794H10.0329" stroke={iconColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class={`text-[18px] font-normal font-['Roboto'] ml-[20px] tracking-tight ${textColor}`} >Access</div>
            </div>
        </button >
    );
};


