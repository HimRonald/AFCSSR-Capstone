export default function Page(){
    return (
        <div>
            <div className="w-full h-32 bg-[#027AC6] justify-center flex flex-col items-center">
                <span className="text-[40px] text-white font-libre font-semibold">Membership</span>
            </div>
            <div className="mx-[79px] mt-[50px]">
                <span className="font-libre font-bold text-[28px]">MEMBERSHIPS PROCESS</span>
            </div>

            <div className="flex mx-[80px] mt-[50px]">
                <div className="w-[312px] h-[354px] border-x-2 border-y-2 rounded-xl">
                    <div className="flex justify-center mt-[50px]">
                        <img src="/Images/Group 37.svg" alt="" />
                    </div>
                    <div className="flex justify-center mt-[25px]">
                        <span className="font-bold text-[16px]">Step1</span>
                    </div>
                    <div className="flex justify-center mt-[25px]">
                        <span className="text-[16px]">Complete Registration Form</span>
                    </div>
                </div>

                <div className="w-[312px] h-[354px] ml-[11px] border-x-2 border-y-2 rounded-xl">
                    <div className="flex justify-center mt-[50px]">
                        <img src="/Images/Group 38.svg" alt="" />
                    </div>
                    <div className="flex justify-center mt-[25px]">
                        <span className="font-bold text-[16px]">Step2</span>
                    </div>
                    <div className="flex justify-center mt-[25px]">
                        <span className="text-[16px]">Make Membership Payment</span>
                    </div>
                </div>

                <div className="w-[312px] h-[354px] ml-[11px] border-x-2 border-y-2 rounded-xl">
                    <div className="flex justify-center mt-[50px]">
                        <img src="/Images/Group 39.svg" alt="" />
                    </div>
                    <div className="flex justify-center mt-[25px]">
                        <span className="font-bold text-[16px]">Step3</span>
                    </div>
                    <div className="flex justify-center mt-[25px]">
                        <span className="text-[16px]">Upload Payment Receipt</span>
                    </div>
                </div>

                <div className="w-[312px] h-[354px] ml-[11px] border-x-2 border-y-2 rounded-xl">
                    <div className="flex justify-center mt-[50px]">
                        <img src="/Images/Group 40.svg" alt="" />
                    </div>
                    <div className="flex justify-center mt-[25px]">
                        <span className="font-bold text-[16px]">Step4</span>
                    </div>
                    <div className="flex justify-center mt-[25px]">
                        <span className="text-[16px]">Await for Approval</span>
                    </div>
                </div>
            </div>

            <div className="ml-[160px] mt-[50px]">
                <span className="font-bold text-[24px] text-[#027AC6]">Step 1:</span> <br />
            </div>
            <div className="mx-[160px] mt-[25px]">
                <span className="text-[18px]">Begin by filling out our online membership application form. In this form, you 
                    will need to provide your personal and professional details, along with specific information about your study 
                    period in the Soviet Union or Russia. This includes the institution you attended and the years you studied there. 
                    Additionally, you may need to submit relevant documentation, such as a copy of your diploma or other proof of 
                    attendance. This information helps us verify your eligibility and better understand your background.</span>
            </div>
            <div className="ml-[160px] mt-[50px]">
                <span className="font-bold text-[24px] text-[#027AC6]">Step 2:</span> <br />
            </div>
            <div className="mx-[160px] mt-[25px]">
                <span className="text-[18px]">As you complete the membership application form, you will also be required to make the 
                    annual membership payment of $15. Our membership fees are designed to be affordable and are essential for supporting 
                    the various activities and services provided by the association. Payment can be conveniently made online through our 
                    secure payment gateway integrated into the application form.</span>
            </div>
            <div className="ml-[160px] mt-[50px]">
                <span className="font-bold text-[24px] text-[#027AC6]">Step 3:</span> <br />
            </div>
            <div className="mx-[160px] mt-[25px]">
                <span className="text-[18px]">After making your payment, you will need to upload a copy of your payment receipt within the same application form. This step is crucial for our records and helps us process your membership efficiently. Ensure you have a digital copy of your payment receipt ready to upload during the application process. If you encounter any issues, our support team is available to assist you.</span>
            </div>
            <div className="ml-[160px] mt-[50px]">
                <span className="font-bold text-[24px] text-[#027AC6]">Step 4:</span> <br />
            </div>
            <div className="m-[160px] mt-[25px]">
                <span className="text-[18px]">Once your application and payment receipt have been submitted, our team will review your submission to ensure everything is in order. This approval process typically takes a few business days. You will receive a confirmation email once your membership is officially approved. This email will include your unique membership ID and instructions on how to access the members-only portal. From there, you can start enjoying all the benefits and opportunities that come with being a member of our association.</span>
            </div>
        </div>
    )
}