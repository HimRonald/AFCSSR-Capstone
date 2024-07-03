"use client"
import LandingPic from "./landing_pic"
import LandingStats from "./landing_stats"
import LandingEvents from "./landing_events"
import LandingNews from "./landing_news"
import LandingMembers from "./landing_members"
export default function Landing(){
    return(
        <>
        <LandingPic/>
        <LandingStats/>
        <LandingEvents />
        <LandingNews />
        <LandingMembers />
        </>
    )
}