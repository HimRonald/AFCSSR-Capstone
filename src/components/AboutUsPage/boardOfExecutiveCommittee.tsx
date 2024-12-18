import Image from 'next/image'

export default function ExecutiveCommittee() {
    const committee = {
        chairman: {
            name: 'GNEL Rattha',
            title: 'Chairman',
            image: '/Images/ACSSR-Member-Pics/Membership of Executive Committee  /GNEL RATTHA.png'
        },
        viceChairmen: [
            {
                name: 'HEAN Samboeun',
                title: '1st Vice Chairman',
                image: '/Images/ACSSR-Member-Pics/Membership of Executive Committee  /HEAN Samboeun.jpg'
            },
            {
                name: 'NOV Kimsan',
                title: '2nd Vice Chairman',
                image: '/Images/ACSSR-Member-Pics/Membership of Executive Committee  /NOV Kimsan.jpg'
            },
            {
                name: 'HO Chantha',
                title: '3rd Vice Chairman',
                image: '/Images/ACSSR-Member-Pics/Membership of Executive Committee  /HO Chantha.jpg'
            }
        ],
        support: [
            {
                name: 'SOR Seileang',
                title: 'Treasurer & Chairman Assistant',
                image: '/Images/ACSSR-Member-Pics/Membership of Executive Committee  /SOR Seileang .jpg'
            },
            {
                name: 'NORNG Rithy',
                title: 'Secretary',
                image: '/Images/ACSSR-Member-Pics/Membership of Executive Committee  /norngrithy.jpg'
            }
        ]
    }

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
                                src={committee.chairman.image}
                                alt={committee.chairman.name}
                                fill
                                className="object-cover rounded-[15px]" // Same size and radius applied
                                priority
                            />
                        </div>
                        <h3 className="text-white text-xl font-semibold">{committee.chairman.name}</h3>
                        <p className="text-white/90 text-lg">{committee.chairman.title}</p>
                    </div>

                    {/* Vice Chairmen */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
                        {committee.viceChairmen.map((member) => (
                            <div key={member.name} className="flex flex-col items-center">
                                <div className="w-48 aspect-[3/4] relative mb-3"> {/* Same size for all images */}
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-[15px]" // Same size and radius applied
                                    />
                                </div>
                                <h3 className="text-white text-lg font-semibold text-center">{member.name}</h3>
                                <p className="text-white/90 text-center">{member.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Support Roles */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-16 w-full max-w-2xl">
                        {committee.support.map((member) => (
                            <div key={member.name} className="flex flex-col items-center">
                                <div className="w-48 aspect-[3/4] relative mb-3"> {/* Same size for all images */}
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-[15px]" // Same size and radius applied
                                    />
                                </div>
                                <h3 className="text-white text-lg font-semibold text-center">{member.name}</h3>
                                <p className="text-white/90 text-center text-sm sm:text-base">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>


    )
}

