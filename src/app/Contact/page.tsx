"use client"

import { Map } from "./map";
import { useState } from "react";
import  UserCard  from "./card";

export default function Page(){

    const [showMore, setShowMore] = useState(false)
  
    const users = [
        { name: 'HANG RITHRATANA', title: 'General Secretariat of AFCSSR', image: '/Images/profile/Ratana.jpg' },
        { name: 'HIM DALIM RONALD', title: 'General Secretariat of AFCSSR', image: '/Images/profile/Ronald.jpg' },
        { name: 'HENG TRAMIT', title: 'General Secretariat of AFCSSR', image: '/Images/profile/tramit.jpg' },
        { name: 'VUTH WATNAKPISETH', title: 'General Secretariat of AFCSSR', image: '/Images/profile/Piseth.jpg' },
        { name: 'YOU CHANVICHEA', title: 'General Secretariat of AFCSSR', image: '/Images/profile/Vichea.jpg' },
    ]

    return(
        <div>
            <div className="h-32 bg-[#027AC6] justify-center flex flex-col items-center">
                <span className="text-[40px] text-white font-libre font-semibold">Contact</span>
            </div>
            <div>
                <Map />
            </div>
            
            <div className="my-[25px] mx-auto container">
                <span className="font-semibold my-10 font-libre text-[30px]">VISIT US</span>
            </div>

            <div className="mt-[26px] mx-auto container">
                <div className="text-[18px]">
                    <p className="font-semibold">Branch #1</p>
                    <p>2nd Bridge, Prek Leap, National Road Number 6, Phnom Penh, Cambodia</p>
                </div>

                <button type="button" className="w-[162px] h-[60px] bg-[#027AC6] my-[15px] flex flex-col justify-center items-center rounded-xl">
                    <span className="font-semibold text-white">Get Direction</span> 
                </button>
            </div>

            <div className="my-[25px] mx-auto container">
                <span className="font-semibold my-10 font-libre text-[30px]">CONTACT US</span>
            </div>
            <div className="mx-auto container">
                <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.slice(0, showMore ? users.length : 3).map((user, index) => (
                        <UserCard key={index} name={user.name} title={user.title} image={user.image} />
                    ))}
                </div>
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="mx-auto container text-gray-500"
                >
                    {showMore ? 'Show less' : 'See more'}
                </button>
            </div>

            <div className="my-[25px] mx-auto container">
                <span className="font-semibold my-10 font-libre text-[30px]">SEND MESSAGES</span>
            </div>
            <div className="mx-auto container">
                <div className="flex my-[25px]">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold">First Name </label>
                            <input type="text" className="w-[610px] h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>

                    <div>
                        <div className="ml-[60px] flex flex-col">
                            <label htmlFor="" className="font-semibold">Email </label>
                            <input type="text" className="w-[610px] h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>
                </div>

                <div className="flex mb-[25px]">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold">Subject </label>
                            <input type="text" className="w-[1280px] h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>
                </div>

                <div className="flex mb-[25px]">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold">Message </label>
                            <input type="text" className="w-[1280px] h-[430px] rounded-xl mt-[7px]" />
                        </div>
                    </div>
                </div>
                <button type="button" className="w-[162px] h-[60px] bg-[#027AC6] my-[15px] flex flex-col justify-center items-center rounded-xl">
                    <span className="font-semibold text-white">Send</span> 
                </button>
            </div>
        </div>
    )
}