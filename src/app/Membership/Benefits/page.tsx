import React from "react"
import Image from "next/image";
import { text } from "stream/consumers";
import TitleBar from "@/components/ui/title_bar";

export default function Page(){
    return(
        <div className="">
            <TitleBar title_bar="Membership" />
            <div className="mx-[79px] mt-[50px]">
             <span className="font-libre font-bold text-[28px]">MEMBERSHIPS BENEFITS </span> <br />
             <span>As a member of the Association of Former Cambodian Students from the Soviet Union and Russia, you will gain access to a host of exclusive benefits designed to enrich your professional and personal life:</span>
            </div>
            <div>
                <div className="w-[1280px] h-[311px] mx-[80px] mt-[16px] border-x-2 border-y-2 rounded-xl flex">
                    <div className="w-[317px] h-[211.07px] mx-[50px] mt-[50px]">
                        <img src="/Images/NetworkingSVG.png" alt="" className="w-full h-[175.17px]" />
                        <span className="mt-[14px] font-bold text-[16px] flex justify-center">Network Opportunities</span>
                    </div>
                    <ul className="flex flex-col justify-center w-[834px] h-[211px] mx-[29px] mt-[50px] space-y-[27px]">
                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Connect with fellow alumni from diverse fields and backgrounds</span>
                        </li>

                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Attend regional and international alumni meetups and reunions</span>
                        </li>
                        
                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Engage in our online community through members-only forums and social media groups</span>
                        </li>
                    </ul>
                </div>

                <div className="w-[1280px] h-[311px] mx-[80px] mt-[25px] border-x-2 border-y-2 rounded-xl flex">
                    <ul className="flex flex-col justify-center w-[834px] h-[211px] mx-[50px] mt-[50px] space-y-[27px]">
                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Access to workshops, webinars, and training sessions on various professional skills</span>
                        </li>

                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Opportunities for mentorship and guidance from experienced alumni in your field</span>
                        </li>
                        
                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Job postings and career advancement opportunities through our network</span>
                        </li>
                    </ul>
                    
                    <div className="w-[317px] h-[211.07px] mt-[50px] mr-[100px]">
                        <img src="/Images/ProfessionalGrowth.svg" alt="" className="w-full h-[175.17px]" />
                        <span className="mt-[14px] font-bold text-[16px] flex justify-center">Professional Development</span>
                    </div>
                </div>

                <div className="w-[1280px] h-[311px] mx-[80px] mt-[25px] border-x-2 border-y-2 rounded-xl flex">
                    <div className="w-[317px] h-[211.07px] mx-[50px] mt-[50px]">
                        <img src="/Images/SocialEvent.svg" alt="" className="w-full h-[175.17px]" />
                        <span className="mt-[14px] font-bold text-[16px] flex justify-center">Cultural and Social Events</span>
                    </div>
                    
                    <ul className="flex flex-col justify-center w-[834px] h-[211px] mx-[29px] mt-[50px] space-y-[27px]">
                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Invitations to cultural events celebrating our shared heritage and history</span>
                        </li>

                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Participation in social gatherings, dinners, and special occasions organized by the association</span>
                        </li>
                        
                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Exclusive access to cultural exchange programs and travel opportunities</span>
                        </li>
                    </ul>
                </div>

                <div className="w-[1280px] h-[311px] mx-[80px] mt-[25px] border-x-2 border-y-2 rounded-xl flex">
                    <ul className="flex flex-col justify-center w-[834px] h-[211px] mx-[50px] mt-[50px] space-y-[27px]">
                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Assistance with relocation, job search, and other support for members moving to new regions</span>
                        </li>

                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Access to scholarships and grants for members and their families</span>
                        </li>
                        
                        <li className="flex items-center">
                            <img src="/Images/Vector.svg" alt="" className="mr-[25px]" />
                            <span className="font-semibold text-[16px]">Opportunities to give back to the community through volunteer programs and charity events</span>
                        </li>
                    </ul>
                    
                    <div className="w-[317px] h-[211.07px] mt-[50px] mr-[100px]">
                        <img src="/Images/CommunitySupport.svg" alt="" className="w-full h-[175.17px]" />
                        <span className="mt-[14px] font-bold text-[16px] flex justify-center">Community Support</span>
                    </div>
                </div>

                <div className="w-[1280px] h-[595px] m-[80px] mt-[16px] border-x-2 border-y-2 rounded-xl flex">
                    <div className="w-[317px] h-[211.07px] mx-[50px] mt-[50px]">
                        <span className="mt-[14px] font-bold text-[16px] flex justify-center">Services and Discounts</span>
                        <ul className="mt-[48px]">
                            <li className="flex">
                                <img src="/Images/NetworkingSVG.png" alt="" className="w-full h-[175.17px]" />
                            </li>
                        </ul>

                        <ul className="mt-[48px]">
                            <li className="flex">
                                <img src="/Images/NetworkingSVG.png" alt="" className="w-full h-[175.17px]" />
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    );
}