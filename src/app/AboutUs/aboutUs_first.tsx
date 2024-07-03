"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
export function AboutUsFirst(){
    return(
        <section className="relative w-full overflow-hidden">
            <img src="/Images/landing.png" alt="background image" className="absolute inset-0 h-full w-full object-cover" />
            <div className="relative  max-w-5xl px-4 py-40 text-left sm:px-6 lg-px-8  mx-8">
                <h2 className="text-[#F9EB1E] font-libre text-4xl font-bold mb-5">
                About the Association of Former Cambodian Students From Soviet Union and Russia
                </h2>
                <p className="text-white font-libre mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type including versions of Lorem Ipsum.
                </p>
                <Button variant='btn_navbar' size='size_nav' asChild>
                    <Link href='/Contact'>contact</Link>
                </Button>
            </div>
        </section>
    )
}