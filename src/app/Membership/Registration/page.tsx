"use client";

import React, { useState, useCallback } from "react";
import {useDropzone} from 'react-dropzone'


export default function Page(){
const [employmentType, setEmploymentType] = useState('');
const [addBusiness, setAddBusiness] = useState<number[]>([]);

const handleAddBusinessButton = () => {
    setAddBusiness([...addBusiness, addBusiness.length]);
};

const handleRemoveBusinessButton = (index: number) => {
    setAddBusiness(addBusiness.filter((_, i) => i !== index));
};

const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    },
  });
  
    return(
        <div>
            <div className="h-32 w-full bg-[#027AC6] justify-center flex flex-col items-center">
                <span className="text-[40px] text-white font-libre font-semibold">Membership</span>
            </div>

            <div className="mx-auto container">
                <div className="mx-[79px] mt-[50px]">
                    <span className="font-libre font-bold text-[28px]">MEMBERSHIPS REGISTRATION</span>
                </div>
                <div className="w-full max-w-screen-xl mx-auto mt-[40px]">
                    <span className="font-semibold font-libre text-[#027AC6] text-[20px]">Personal Information</span>
                    <div className="mx-auto mt-[25px] flex flex-wrap justify-center">
                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">First Name <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Last Name <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Title <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>

                    <div className="mx-auto mt-[25px] flex flex-wrap justify-center">
                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Gender <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Place of Birth <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Citizenship <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>

                    <div className="mx-auto mt-[25px] flex flex-wrap justify-center">
                        <div className="flex flex-col w-full md:w-[726px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Personal Email <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Personal Phone Number <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>

                    <div className="mx-auto mt-[25px] flex flex-wrap justify-center">
                        <div className="flex flex-col w-full md:w-[1114px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Current Address <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-screen-xl mx-auto mt-[40px]">
                    <span className="font-semibold text-[#027AC6] text-[20px] font-libre">Education Information</span>
                    <div className="mx-auto mt-[25px] flex flex-wrap justify-center">
                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Name of Attended University <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Qualification <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Field of Study / Major <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>

                    <div className="mx-auto mt-[25px] flex flex-wrap justify-center lg:mr-[389px]">
                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Commencement Date <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>

                        <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                            <label htmlFor="" className="font-semibold">Graduation Date <span className="text-red-500">*</span></label>
                            <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-screen-xl mx-auto mt-[90px]">
                    <span className="font-semibold text-[#027AC6] text-[20px] font-libre">Professional Information</span>
                    <div className="mt-[25px] lg:ml-[110px]">
                        <div className="mx-auto flex flex-wrap">
                            <div className="flex flex-col w-full md:w-[338px]">
                                <label htmlFor="employmentType" className="font-semibold">Type of Employment <span className="text-red-500">*</span></label>
                                <select 
                                    id="employmentType" 
                                    className="h-[56px] rounded-xl mt-[7px]"
                                    value={employmentType} 
                                    onChange={(e) => setEmploymentType(e.target.value)}
                                >
                                    <option value="" disabled>Select</option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                            </div>

                            {employmentType === 'public' &&(
                                <div className="mx-auto flex flex-wrap">
                                    <div className="flex flex-col md:w-[338px] w-full md:ml-[50px]">
                                        <label htmlFor="ministry" className="font-semibold">Ministry <span className="text-red-500">*</span></label>
                                        <input type="text" id="ministry" className="h-[56px] rounded-xl mt-[7px]"/>
                                    </div>
                                    <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                                        <label htmlFor="publicPosition" className="font-semibold">Position <span className="text-red-500">*</span></label>
                                        <input type="text" id="publicPosition" className="h-[56px] rounded-xl mt-[7px]"/>
                                    </div>  
                                </div>
                            )}

                            {employmentType === 'private' &&(
                                <div className="mx-auto flex flex-wrap">
                                    <div className="flex flex-col md:ml-[50px] w-full md:w-[338px]">
                                        <label htmlFor="company" className="font-semibold">Company / Organization <span className="text-red-500">*</span></label>
                                        <input type="text" id="company" className="h-[56px] rounded-xl mt-[7px]"/>
                                    </div>
                                    <div className="flex flex-col md:ml-[50px] w-full md:w-[338px]">
                                        <label htmlFor="privatePosition" className="font-semibold">Position <span className="text-red-500">*</span></label>
                                        <input type="text" id="privatePosition" className="h-[56px] rounded-xl mt-[7px]"/>
                                    </div>  
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-screen-xl flex flex-col justify-center mx-auto mt-[90px]">
                    <span className="font-semibold text-[#027AC6] text-[20px] font-libre">Bussiness Information (Optional)</span>      
                    {addBusiness.map((panel, index) => (  
                        <div key={index} className="md:w-[1198px] mt-[25px] flex flex-col border-x-2 border-y-2 rounded-xl px-5 md:px-0">
                            <button onClick={() =>handleRemoveBusinessButton(index)} className="cursor-pointer ml-auto relative">
                                <img src="/Images/Minus Sign.svg" alt="" />
                            </button>
                            <div className="flex flex-wrap mx-auto md:mt-[15px]">
                                <div className="flex flex-col w-full md:w-[338px] md:ml-[42px]">
                                    <label htmlFor="" className="font-semibold">Business Name <span className="text-red-500">*</span></label>
                                    <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                                </div>
    
                                <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                                    <label htmlFor="" className="font-semibold">Position / Title <span className="text-red-500">*</span></label>
                                    <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                                </div>
    
                                <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                                    <label htmlFor="" className="font-semibold">Business Type / Industry <span className="text-red-500">*</span></label>
                                    <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                                </div>
                            </div> 
    
                            <div className="w-full flex flex-wrap mx-auto md:mt-[25px]">
                                <div className="flex flex-col w-full md:w-[1114px] md:ml-[60px]">
                                    <label htmlFor="" className="font-semibold">Business Description <span className="text-red-500">*</span></label>
                                    <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                                </div>
                            </div>
    
                            <div className="w-full flex flex-wrap mx-auto md:mt-[25px]">
                                <div className="flex flex-col w-full md:w-[726px] md:ml-[60px]">
                                    <label htmlFor="" className="font-semibold">Business Email <span className="text-red-500">*</span></label>
                                    <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                                </div>
    
                                <div className="flex flex-col w-full md:w-[338px] md:ml-[50px]">
                                    <label htmlFor="" className="font-semibold">Business Phone Number <span className="text-red-500">*</span></label>
                                    <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                                </div>
                            </div>
    
                            <div className="w-full flex flex-wrap mx-auto md:mt-[25px] mb-[25px]">
                                <div className="flex flex-col w-full md:w-[1114px] md:ml-[60px]">
                                    <label htmlFor="" className="font-semibold">Business Address <span className="text-red-500">*</span></label>
                                    <input type="text" className="h-[56px] rounded-xl mt-[7px]" />
                                </div>
                            </div>
                        </div>                         
                    ))}
                    <button onClick={handleAddBusinessButton} id="addBusiness" type="button" className="md:w-[1198px] h-[75px] bg-[#027AC6] my-[15px] mx-[21px] flex flex-col justify-center items-center rounded-xl">
                        <span className="font-semibold text-white">Add +</span> 
                    </button>
                </div>

                <div className="w-full max-w-screen-xl flex flex-col justify-center mx-auto mt-[25px]">
                    <span className="font-semibold text-[#027AC6] text-[20px] font-libre">Payment Information</span>
                    <div className="">
                        <div className="w-full h-full mt-[25px] md:flex mx-auto container">
                            
                            <div className="md:ml-[50px] ml-[100px] container">
                                <img src="/Images/IMG_5308 1.png" alt="" />
                            </div>

                            <div className="md:ml-[100px]">
                                <div className="md:mt-[70px] mt-5 mb-[21px]">
                                    <span className="">
                                        Make a payment for the annual membership fee of 
                                        <span className="text-[#027AC6] font-semibold"> 30USD </span>through KHQR or our account information 
                                    </span>
                                </div>

                                <div className="mb-[21px]">
                                    <span>
                                        Bank Name : ACLEDA
                                    </span>
                                </div>

                                <div className="mb-[21px]">
                                    <span>
                                        Bank Account Number :
                                    </span>
                                </div>

                                <div className="mb-[21px]">
                                    <span>
                                        Bank Account Holder :
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-full mt-[25px] md:flex mx-auto container">
                            <div className="md:ml-[50px] ml-[100px] container">
                                <button>
                                    <div className="flex" {...getRootProps()} style={{ position: 'relative',}}>
                                        <input accept="image/png, image/jpg, image/svg," {...getInputProps()} />
                                        <img 
                                            src={'/Images/Upload Field.png'} 
                                        />
                                         {isDragActive && (
                                            <div className="absolute inset-0 w-full h-full bg-white bg-opacity-50 flex items-center justify-center">
                                                <p>Drop the file here...</p>
                                            </div>
                                        )}                                       
                                        {preview && (
                                            <img className="absolute w-full h-full object-cover" src={preview as string} />
                                        )}                   
                                    </div>          
                                </button>
                            </div>

                            <div className="md:ml-[100px] md:mt-[144px] mt-5">
                                <span>
                                    Once you have made the payment, take a screenshot of the transaction and upload it here
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="md:w-[1198px] w-full h-[75px] bg-[#027AC6] my-[15px] mx-auto justify-center items-center rounded-xl">
                    <span className="font-semibold text-white">Submit</span> 
                </button>
            </div>
        </div>
    )
}