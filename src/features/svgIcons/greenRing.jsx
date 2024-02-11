import React from 'react';

export const GreenRingSvg = () => {
    return (
        <div className="relative flex items-center justify-center w-[250px] h-[250px]">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 2" filter="url(#filter0_i_2248_2801)">
        <path id="Ellipse 6" d="M125 0C158.152 0 189.946 13.1696 213.388 36.6116C236.83 60.0537 250 91.8479 250 125C250 158.152 236.83 189.946 213.388 213.388C189.946 236.83 158.152 250 125 250V212.5C148.206 212.5 170.462 203.281 186.872 186.872C203.281 170.462 212.5 148.206 212.5 125C212.5 101.794 203.281 79.5376 186.872 63.1282C170.462 46.7187 148.206 37.5 125 37.5V0Z" fill="#34B44A"/>
        <path id="Ellipse 7" d="M125 250C98.6026 250 72.8828 241.643 51.5268 226.127L73.5688 195.789C88.5179 206.65 106.522 212.5 125 212.5V250Z" fill="#34B44A"/>
        <path id="Ellipse 8" d="M51.5268 226.127C30.1709 210.611 14.2752 188.733 6.11792 163.627L41.7825 152.039C47.4926 169.613 58.6196 184.928 73.5688 195.789L51.5268 226.127Z" fill="#34B44A"/>
        <path id="Ellipse 9" d="M6.11794 163.627C-2.03931 138.522 -2.03931 111.478 6.11794 86.3729L41.7826 97.961C36.0725 115.535 36.0725 134.465 41.7826 152.039L6.11794 163.627Z" fill="#34B44A"/>
        <path id="Ellipse 10" d="M6.11794 86.3729C14.2752 61.2674 30.1709 39.3889 51.5269 23.8728L73.5688 54.211C58.6196 65.0722 47.4926 80.3872 41.7826 97.961L6.11794 86.3729Z" fill="#34B44A"/>
        <path id="Ellipse 11" d="M51.5269 23.8728C72.8829 8.35684 98.6027 -1.52588e-05 125 0L125 37.5C106.522 37.5 88.518 43.3498 73.5688 54.211L51.5269 23.8728Z" fill="#34B44A"/>
        </g>
        <defs>
        <filter id="filter0_i_2248_2801" x="0" y="0" width="250" height="254" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2248_2801"/>
        </filter>
        </defs>
        </svg>
        <div className="absolute text-neutral-900 text-[40px] font-bold font-['Roboto']">
                Rs:320
        </div>
        </div>
    );
};