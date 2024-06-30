"use client"
import Image from "next/image"
import {
    Footer,
  } from "flowbite-react";
export default function FooterComponent(){
    return(
        // <footer className="w-full h-[400px] bg-[#027AC6]">
        //     <div>
        //         <div className="pt-8 ml-14 mb-5">
        //             <Image src="/Images/afcssr-logo.svg" alt="footer logo" width={123} height={123}/>
        //             <div className="text-white grid gap-1 mt-3">
        //             <span className="text-[18px] font-light font-moul">សមាគមអតីតនិស្សិតកម្ពុជាពីសូវៀត និងរុស្សុី</span>
        //             <span className="text-[18px] font-moul">ASSOCIATION OF FORMER CAMBODIAN STUDENTS FROM<br/>SOVIET UNION AND RUSSIA</span>
        //             <span className="text-[18px]">АССОЦИАЦИЯ БЫВШИХ КАМБОДЖИЙСКИХ СТУДЕНТОВ <br/> ИЗ СОВЕТСКОГО СОЮЗА И РОССИИ</span>
        //             </div>
        //         </div>
        //     <div className="flex justify-center">
        //         <div className="h-[1px] w-[1280px] bg-white "></div>
        //     </div>
        //     <span className="flex justify-center text-white mt-5">@ 2024-2025 ACSSR. All Right Reserved</span>
        //     </div>
        // </footer>
        <Footer container className="">
         <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          <Image src="/Images/afcssr-logo.svg" alt="footer logo" width={123} height={123}/>
          <div className="text-black grid gap-1 mt-3">
             <span className="text-[18px] font-light font-moul">សមាគមអតីតនិស្សិតកម្ពុជាពីសូវៀត និងរុស្សុី</span>
             <span className="text-[18px] font-moul">ASSOCIATION OF FORMER CAMBODIAN STUDENTS FROM<br/>SOVIET UNION AND RUSSIA</span>
             <span className="text-[18px]">АССОЦИАЦИЯ БЫВШИХ КАМБОДЖИЙСКИХ СТУДЕНТОВ <br/> ИЗ СОВЕТСКОГО СОЮЗА И РОССИИ</span>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="AFCSSR" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">HOME</Footer.Link>
                <Footer.Link href="#">ABOUT US</Footer.Link>
                <Footer.Link href="#">MEMBERSHIP</Footer.Link>
                <Footer.Link href="#">NEWS & EVENTS</Footer.Link>
                <Footer.Link href="#">CONTACT</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="ADRESS" />
              <Footer.LinkGroup col>
                <span>Branch #1</span>
                <Footer.Link href="#">Room 519, IU University Building
                Khan Sen Sok, Phnom Penh</Footer.Link>
                <span>Branch #2</span>
                <Footer.Link href="#">#23 F, Nat.5, Svay Pak District 
                Khan Russei Keo, Phnom Penh</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className=""/>
        {/* <div className="flex justify-center">
            <div className="h-[1px] w-[1280px] bg-blue-400 "></div>
        </div> */}
        <div className="w-full justify-center flex items-center">
          <Footer.Copyright href="#" by="2024-2025 ACSSR. All Right Reserved"/>
        </div>
      </div>
      </Footer>
    );
}