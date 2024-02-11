import React, { useState } from 'react'
import UserPicture from "../images/UserPicture.png"
import { UserHistorySvg } from "../svgIcons/UserHistorysvg";
import { DashboardIconSvg } from "../svgIcons/dashboardIconsvg";
import { useNavigate } from 'react-router-dom';
import { PricingSvg } from "../svgIcons/pricingsvg";
import { BookingSvg } from "../svgIcons/bookingsvg";
import { ChargerSvg } from "../svgIcons/chargersvg";
import { StationManagerSvg } from "../svgIcons/stationmanagersvg";
import { AccessSvg } from "../svgIcons/accesssvg";
import { ProfileSvg } from "../svgIcons/profilesvg";
import { SettingSvg } from "../svgIcons/settingsvg";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';

export default function NavigationSidebar() {
    const [name, setName] = useState("Widad Kamran");
    const [userPicture, setUserPicture] = useState(UserPicture);
    const navigate = useNavigate(); // Create navigate function
    // Function to handle changing the user picture
    const changeUserPicture = () => {
        setUserPicture((prevPicture) =>
            prevPicture === UserPicture ? 'path/to/another/image.png' : UserPicture
        );
    };
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div className="flex flex-col z-10 w-[200px] overflow-hidden bottom-0 bg-white  lg:left-0 top-[80px] text-center absolute">
            <div class="ml-[20px]">
                <div class="flex flex-row mt-[15px] mb-[15px]">
                    <img class="w-[42px] h-[42px] rounded-full" src={userPicture} alt="User Picture" />
                    <div class="flex flex-col">
                        <div class="text-black text-base font-bold font-['Roboto'] tracking-tight">{name}</div>
                        <div class="text-neutral-400 text-[13px] font-normal font-['Roboto'] tracking-tight">Station Manager</div>
                    </div>
                    <div class=" flex justify-center items-center">
                        <UserHistorySvg />
                    </div>
                </div>
                <div onClick={() => navigate('/dasboard')} class="mb-[15px]">
                    <DashboardIconSvg />
                </div>
                <div onClick={() => navigate('/pricing')} class="mb-[15px]">
                    <PricingSvg />
                </div>
                <div onClick={() => navigate('/bookings')} class="mb-[15px]">
                    <BookingSvg />
                </div>
                <div onClick={() => navigate('/chargers')} class="mb-[15px]">
                    <ChargerSvg />
                </div>
                <div  onClick={() => navigate('/')} class="mb-[15px]">
                    <StationManagerSvg />
                </div>
                <div  onClick={() => navigate('/')} class="mb-[15px]">
                    <AccessSvg />
                </div>
                <div className="mb-[15px] w-auto h-[0px] border border-neutral-200"></div>
                <div  onClick={() => navigate('/')} class="mb-[15px]">
                    <ProfileSvg />
                </div>
                <div  onClick={() => navigate('/')} class="mb-[15px]">
                    <SettingSvg />
                </div>
            </div >
        </div >
    );
};

