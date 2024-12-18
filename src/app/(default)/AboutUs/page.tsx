import { AboutUsFirst } from "@/components/AboutUsPage/aboutUs_first"
import AboutUsBackground from "@/components/AboutUsPage/aboutUs_background"
import AboutUsMisVis from "@/components/AboutUsPage/aboutUs_MisVis"
import BoardAdvisors from "@/components/AboutUsPage/boardOfAdvisor"
import BoardDirectors from "@/components/AboutUsPage/boardOfDirectors"
import ExecutiveCommittee from "@/components/AboutUsPage/boardOfExecutiveCommittee"
import FirstCommittee from "@/components/AboutUsPage/firstCommittee"
import SecondCommittee from "@/components/AboutUsPage/secondCommittee"
import ThirdCommittee from "@/components/AboutUsPage/thirdCommittee"

export default function Page(){
    return(
        <>
        <AboutUsFirst />
        <AboutUsBackground />
        <AboutUsMisVis />
        <BoardAdvisors />
        <BoardDirectors />
        <ExecutiveCommittee />
        <FirstCommittee />
        <SecondCommittee />
        <ThirdCommittee />
        </>
    )
}