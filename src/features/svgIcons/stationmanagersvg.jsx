import React, { useState } from 'react';
export const StationManagerSvg = () => {
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
                    <path d="M21.9189 26.1246C20.8556 26.4388 19.5989 26.5838 18.1247 26.5838H10.8747C9.40057 26.5838 8.1439 26.4388 7.08057 26.1246C7.3464 22.983 10.5726 20.5059 14.4997 20.5059C18.4268 20.5059 21.6531 22.983 21.9189 26.1246Z" stroke={iconColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.1248 2.41699H10.8748C4.83317 2.41699 2.4165 4.83366 2.4165 10.8753V18.1253C2.4165 22.6928 3.794 25.1941 7.08067 26.1245C7.3465 22.9828 10.5728 20.5057 14.4998 20.5057C18.4269 20.5057 21.6532 22.9828 21.919 26.1245C25.2057 25.1941 26.5832 22.6928 26.5832 18.1253V10.8753C26.5832 4.83366 24.1665 2.41699 18.1248 2.41699ZM14.4998 17.1224C12.1073 17.1224 10.174 15.177 10.174 12.7845C10.174 10.392 12.1073 8.45866 14.4998 8.45866C16.8923 8.45866 18.8257 10.392 18.8257 12.7845C18.8257 15.177 16.8923 17.1224 14.4998 17.1224Z" stroke={iconColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.8255 12.7839C18.8255 15.1764 16.8922 17.1217 14.4997 17.1217C12.1072 17.1217 10.1738 15.1764 10.1738 12.7839C10.1738 10.3914 12.1072 8.45801 14.4997 8.45801C16.8922 8.45801 18.8255 10.3914 18.8255 12.7839Z" stroke={iconColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class={`text-[18px] ml-[20px] font-normal font-['Roboto'] tracking-tight ${textColor}`} >Station Managers</div>
            </div>
        </button >
    );
};


