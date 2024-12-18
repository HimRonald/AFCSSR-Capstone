import { Card } from "../ui/card"
export default function AboutUsMisVis() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 py-10">
      <Card className="flex flex-col md:flex-row bg-[#F9EB1E] rounded-xl">
        <div className="md:w-1/2">
          <img src="/Images/mission.png" alt="Vision" className="h-full w-full object-cover rounded-xl" />
        </div>
        <div className="flex flex-col justify-center p-6 md:w-1/2 ">
          <h3 className="text-2xl font-bold font-libre">Our Vision</h3>
          <p className="mt-4">
            To become an institution that plays an important role in humanitarian work, development, sharing, and exchange of experience, knowledge, skills, technical standards, and culture between Cambodia, Russia, and with other countries across the globe.
          </p>
        </div>
      </Card>
      <Card className="flex flex-col md:flex-row bg-[#027AC6] rounded-xl">
        <div className="md:w-1/2">
          <img src="/Images/mission.png" alt="Mission" className="h-full w-full object-cover rounded-xl" />
        </div>
        <div className="flex flex-col justify-center p-6 md:w-1/2 text-white">
          <h3 className="text-2xl font-bold font-libre">Our Mission</h3>
          <p className="mt-4">
            To achieve the stated vision, some missions are defined as follows:
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Promote internal spirit of solidarity, cultivate the will to participate, develop human resources, carry out social activities, increase national-international relations in the fields of economy, social work, science, technology, and culture.</li>
            <li>Raise funds from various sources to participate in humanitarian work, develop, share, exchange experiences, knowledge, skills, and culture of Cambodia-Russia and with other countries across the globe.</li>
            <li>Help alleviate the difficult burden of association members if needed.</li>
          </ul>
        </div>
      </Card>
    </div>
  )
}