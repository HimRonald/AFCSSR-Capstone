import Image from "next/image";

export default function ExecutiveCommittee() {
  const committee = {
    president: {
      name: "GNEL Rattha",
      title: "President",
      image:
        "/Images/ACSSR-Member-Pics/Membership of Executive Committee  /gnel_rattha.png",
    },
    vicePresident: [
      {
        name: "HEAN Samboeun",
        title: "1st Vice President",
        image:
          "/Images/ACSSR-Member-Pics/Membership of Executive Committee  /hean_samboeun.jpg",
      },
      {
        name: "NOV Kimsan",
        title: "2nd Vice President",
        image:
          "/Images/ACSSR-Member-Pics/Membership of Executive Committee  /nov_kimsan.jpg",
      },
      {
        name: "HO Chantha",
        title: "3rd Vice President",
        image:
          "/Images/ACSSR-Member-Pics/Membership of Executive Committee  /ho_chantha.jpg",
      },
    ],
    support: [
      {
        name: "SOR Seileang",
        title: "Treasurer & President Assistant",
        image:
          "/Images/ACSSR-Member-Pics/Membership of Executive Committee  /sor_seileang.jpg",
      },
      {
        name: "NORNG Rithy",
        title: "Secretary-General",
        image:
          "/Images/ACSSR-Member-Pics/Membership of Executive Committee  /norng_rithy.jpg",
      },
    ],
  };

  return (
    <section className="bg-[#3B82F6] py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <div className="h-[1px] bg-white flex-1 max-w-[100px] sm:max-w-[150px] md:max-w-[200px]" />
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-libre font-bold text-center whitespace-nowrap">
            Executive Committee
          </h2>
          <div className="h-[1px] bg-white flex-1 max-w-[100px] sm:max-w-[150px] md:max-w-[200px]" />
        </div>

        {/* Committee Grid */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Chairman */}
          <div className="flex flex-col items-center">
            <div className="w-48 aspect-[3/4] relative mb-3">
              <Image
                src={committee.president.image}
                alt={committee.president.name}
                fill
                className="object-cover rounded-[15px]" // Same size and radius applied
                priority
              />
            </div>
            <h3 className="text-white text-xl font-semibold">
              {committee.president.name}
            </h3>
            <p className="text-white/90 text-lg">{committee.president.title}</p>
          </div>

          {/* Vice Chairmen */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
            {committee.vicePresident.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="w-48 aspect-[3/4] relative mb-3">
                  {" "}
                  {/* Same size for all images */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-[15px]" // Same size and radius applied
                  />
                </div>
                <h3 className="text-white text-lg font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-white/90 text-center">{member.title}</p>
              </div>
            ))}
          </div>

          {/* Support Roles */}
          <div className="grid grid-cols-2 gap-8 sm:gap-16 w-full max-w-2xl">
            {committee.support.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <div className="w-48 aspect-[3/4] relative mb-3">
                  {" "}
                  {/* Same size for all images */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-[15px]" // Same size and radius applied
                  />
                </div>
                <h3 className="text-white text-lg font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-white/90 text-center text-sm sm:text-base">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
