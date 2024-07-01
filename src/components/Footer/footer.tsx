"use client"
import Image from "next/image"
import {
    Footer,
  } from "flowbite-react";
import Link from "next/link";
import { PhoneCallIcon, Mail } from "lucide-react";
export default function FooterComponent(){
    return(
      <footer className="bg-[#027AC6] py-8 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <div className="flex flex-col items-center md:items-start">
          <Image src="/Images/afcssr-logo.svg" alt="footer logo" width={123} height={123} className="mb-4"/>
          <p className="font-moul text-[18px] font-light md:text-left text-center">សមាគមអតីតនិស្សិតកម្ពុជាពីសូវៀត និងរុស្សុី</p>
          <p className="text-center md:text-left mt-2">ASSOCIATION OF FORMER CAMBODIAN STUDENTS FROM<br/>SOVIET UNION AND RUSSIA</p>
          <p className="text-center md:text-left mt-2">АССОЦИАЦИЯ БЫВШИХ КАМБОДЖИЙСКИХ СТУДЕНТОВ ИЗ СОВЕТСКОГО СОЮЗА И РОССИИ</p>
          </div>
          <div className="flex flex-col md:ml-8 md:gap-5">
            <h3 className="font-bold mb-2">AFCSSR</h3>
            <Link href='/'>HOME</Link>
            <Link href='/AboutUs'>ABOUT US</Link>
            <Link href='/Membership/Benefits'>MEMEBRSHIP</Link>
            <Link href='/News&Events'>NEWS & EVENTS</Link>
            <Link href='/Contact'>CONTACT US</Link>
          </div>
          <div className="flex flex-col md:gap-5">
            <h3 className="font-bold mb-2">ADDRESS</h3>
            <p className="font-bold">Branch #1</p>
            <Link href='#' className="hover:underline underline-offset-4">Room 519, IU University Building
            Khan Sen Sok, Phnom Penh</Link>
            <p className="font-bold">Branch #2</p>
            <Link href='#' className="hover:underline underline-offset-4">#23 F, Nat.5, Svay Pak District 
            Khan Russei Keo, Phnom Penh</Link>
          </div>
          <div className="flex flex-col md:gap-5">
            <h3 className="font-bold mb-2">CONTACT US</h3>
            <p>
             <PhoneCallIcon className="inline-block mr-2"/> General Secretariat AFCSSR
            </p>
            <p>(+855) 70 321 481</p>
            <p>(+855) 96 811 1007</p>
            <p>
              <Mail className="inline-block mr-2" /><Link href='https://gmail.com'>acssr@info.com</Link>
            </p>
            <h3>SOCIAL MEDIA</h3>
            <div className="flex space-x-4 mt-2">
              <Link href='https://facebook.com'>
                <Image src="/Images/Facebook Icon.svg" alt="facebook" width={30} height={30}/> 
              </Link>
              <Link href='#'>
                <Image src="/Images/Telegram Icon.svg" alt="telegram" width={30} height={30}/>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-8 pt-4 text-center flex justify-center">
          <p>@ 2024-2025 ACSSR. All Right Reserved</p>
        </div>
      </footer>
    );
}