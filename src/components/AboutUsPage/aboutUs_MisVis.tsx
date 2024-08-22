import { Card } from "../ui/card"
export default function AboutUsMisVis(){
    return(
        <div className="container mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 py-10">
            <Card className="flex flex-col md:flex-row bg-[#027AC6] rounded-xl">
              <div className="md:w-1/2">
                <img src="/Images/mission.png" alt="Mission" className="h-full w-full object-cover rounded-xl" />
              </div>
              <div className="flex flex-col justify-center p-6 md:w-1/2 text-white">
                <h3 className="text-2xl font-bold font-libre">Our Mission</h3>
                <p className="mt-4">
                  Our mission is to empower businesses and individuals to achieve their goals through innovative solutions and
                  exceptional service. We believe in the power of technology to transform lives and create a better future for
                  all.
                </p>
              </div>
            </Card>
            <Card className="flex flex-col md:flex-row bg-[#F9EB1E] rounded-xl">
              <div className="md:w-1/2">
                <img src="/Images/mission.png" alt="Vision" className="h-full w-full object-cover rounded-xl" />
              </div>
              <div className="flex flex-col justify-center p-6 md:w-1/2 ">
                <h3 className="text-2xl font-bold font-libre">Our Vision</h3>
                <p className="mt-4">
                  Our vision is to be the leading provider of cutting-edge technology solutions that drive growth, efficiency,
                  and innovation. We are committed to continuously expanding our capabilities and delivering exceptional value
                  to our clients.
                </p>
              </div>
            </Card>
    </div>
    )
}