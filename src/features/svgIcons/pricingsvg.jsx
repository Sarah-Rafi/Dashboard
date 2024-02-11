import React, { useState } from 'react';
export const PricingSvg = () => {
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
                    <path d="M12.216 13.4727H9.01396C8.25271 13.4727 7.63647 14.0889 7.63647 14.8501V21.0368H12.216V13.4727V13.4727Z" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.4197 7.97461H13.583C12.8218 7.97461 12.2056 8.59088 12.2056 9.35213V21.0247H16.7852V9.35213C16.7852 8.59088 16.181 7.97461 15.4197 7.97461Z" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.9955 15.5269H16.7935V21.0248H21.3731V16.9044C21.361 16.1431 20.7447 15.5269 19.9955 15.5269Z" stroke={iconColor} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.8748 26.5827H18.1248C24.1665 26.5827 26.5832 24.166 26.5832 18.1243V10.8743C26.5832 4.83268 24.1665 2.41602 18.1248 2.41602H10.8748C4.83317 2.41602 2.4165 4.83268 2.4165 10.8743V18.1243C2.4165 24.166 4.83317 26.5827 10.8748 26.5827Z" stroke={iconColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class={`text-[18px] ml-[20px] font-normal font-['Roboto'] tracking-tight ${textColor}`} >Pricing</div>
            </div>
        </button >
    );
};


