"use client"
import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import { Button } from "@/components/ui/button";
import TitleBar from "@/components/ui/title_bar";

export default function Page(){
const [employmentType, setEmploymentType] = useState('');

    return(
        <div>
            <TitleBar title_bar="Membership" />
            <div className="mx-[79px] mt-[50px]">
                <span className="font-libre font-bold text-[28px]">MEMBERSHIPS REGISTRATION</span>
            </div>

            <div>
                <div className="w-[1197px] h-[477px] mx-[100px] mt-[40px]">
                    <span className="font-semibold font-libre text-[#027AC6] text-[20px]">Personal Information</span>
                    <div className="mx-auto mt-[25px] flex justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold">First Name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col ml-[50px]">
                            <label htmlFor="" className="font-semibold">Last Name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col ml-[50px]">
                            <label htmlFor="" className="font-semibold">Title <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>

                    <div className="mx-auto mt-[25px] flex justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold">Gender <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col ml-[50px]">
                            <label htmlFor="" className="font-semibold">Place of Birth <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col ml-[50px]">
                            <label htmlFor="" className="font-semibold">Citizenship <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>

                    <div className="mx-auto mt-[25px] flex justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold">Personal Email <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[726px] h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col ml-[50px]">
                            <label htmlFor="" className="font-semibold">Personal Phone Number <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>

                    <div className="mx-auto mt-[25px] flex justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold">Current Address <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[1114px] h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>
                </div>

                <div className="w-[1197px] h-[201px] mx-[100px] mt-[40px]">
                    <span className="font-semibold text-[#027AC6] text-[20px] font-libre">Education Information</span>
                    <div className="mx-auto mt-[25px] flex justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold">Name of Attended University <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col ml-[50px]">
                            <label htmlFor="" className="font-semibold">Qualification <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col ml-[50px]">
                            <label htmlFor="" className="font-semibold">Field of Study / Major <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>

                    <div className="mx-[41px] mt-[25px] flex">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-semibold">Commencement Date <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col ml-[50px]">
                            <label htmlFor="" className="font-semibold">Graduation Date <span className="text-red-500">*</span></label>
                            <input type="text" className="w-[338px] h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>
                </div>

                <div className="w-[1197px] h-[88px] mx-[100px] mt-[90px]">
                    <span className="font-semibold text-[#027AC6] text-[20px] font-libre">Professional Information</span>
                    <div className="mx-[41px] mt-[25px] flex">
                        <div className="flex">
                            <div className="flex flex-col">
                                <label htmlFor="employmentType" className="font-semibold">Type of Employment <span className="text-red-500">*</span></label>
                                <select 
                                    id="employmentType" 
                                    className="w-[338px] h-[56px] rounded-xl mt-[7px]"
                                    value={employmentType} 
                                    onChange={(e) => setEmploymentType(e.target.value)}
                                >
                                    <option value="" disabled>Select</option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                            </div>

                            {employmentType === 'public' &&(
                                <div className="flex">
                                    <div className="flex flex-col ml-[50px]">
                                        <label htmlFor="ministry" className="font-semibold">Ministry <span className="text-red-500">*</span></label>
                                        <input type="text" id="ministry" className="w-[338px] h-[56px] rounded-xl mt-[7px]"/>
                                    </div>
                                    <div className="flex flex-col ml-[50px]">
                                        <label htmlFor="publicPosition" className="font-semibold">Position <span className="text-red-500">*</span></label>
                                        <input type="text" id="publicPosition" className="w-[338px] h-[56px] rounded-xl mt-[7px]"/>
                                    </div>  
                                </div>
                            )}

                            {employmentType === 'private' &&(
                                <div className="flex">
                                    <div className="flex flex-col ml-[50px]">
                                        <label htmlFor="company" className="font-semibold">Company / Organization <span className="text-red-500">*</span></label>
                                        <input type="text" id="company" className="w-[338px] h-[56px] rounded-xl mt-[7px]"/>
                                    </div>
                                    <div className="flex flex-col ml-[50px]">
                                        <label htmlFor="privatePosition" className="font-semibold">Position <span className="text-red-500">*</span></label>
                                        <input type="text" id="privatePosition" className="w-[338px] h-[56px] rounded-xl mt-[7px]"/>
                                    </div>  
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full h-full mx-[100px] mt-[90px]">
                    <span className="font-semibold text-[#027AC6] text-[20px] font-libre">Bussiness Information (Optional)</span>
                    <div className="w-[1198px] h-[511px] mt-[25px] flex border-x-2 border-y-2 rounded-xl">
                        <div>
                            
                        </div>
                    </div>
                    <button id="addBussiness" type="button" className="w-[1198px] h-[75px] bg-[#027AC6] my-[15px] mx-[21px] rounded-xl">
                        <span className="font-semibold text-white">Add +</span>
                    </button>
                </div>
            </div>
        </div>
    )
}