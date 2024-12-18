import Image from 'next/image'

export default function BoardDirectors() {
    const directors = {
        chair: {
            name: 'SEANG Phalla',
            title: 'Chairwoman',
            image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /SEANG Phalla.jpg'
        },
        viceChairs: [
            {
                name: 'MAR Samborana',
                title: 'Vice Chairman',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /MAR Samborana.jpg'
            },
            {
                name: 'IM Vutha',
                title: 'Vice Chairman',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /IM Vutha.jpg'
            }
        ],
        members: [
            {
                name: 'SOURN Sokhim',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /SOURN Sokhim.jpg'
            },
            {
                name: 'SABO Ojano',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /SABO Ojano.png'
            },
            {
                name: 'HUN Sochara',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /HUN Sochara.jpg'
            },
            {
                name: 'MOM Chanthy',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /MOM Chanthy.jpg'
            },
            {
                name: 'GNEL Rattha',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /GNEL RATTHA.png'
            },
            {
                name: 'HO Chantha',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /HO Chantha.jpg'
            },
            {
                name: 'KHIEM Colneath',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /KHIEM Colneath.jpg'
            },
            {
                name: 'HENG Mony',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /Heng Mony.jpg'
            },
            {
                name: 'PAL Chhan',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /PAL Chhan.jpg'
            },
            {
                name: 'HEAN Samboeun',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /HEAN Samboeun.jpg'
            },
            {
                name: 'NOV Kimsan',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /NOV Kimsan.jpg'
            },
            {
                name: 'CHHOM Amnoth',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Membership of Board of Directors /CHHOM Amnoth.jpg'
            }
        ]
    }

    return (
        <section className="bg-[#3B82F6] py-8 sm:py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Title with decorative lines */}
                <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12 md:mb-16">
                    <div className="h-[1px] bg-white flex-1 max-w-[100px] sm:max-w-[150px] md:max-w-[200px]" />
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-libre font-bold text-center whitespace-nowrap">
                        Board of Directors
                    </h2>
                    <div className="h-[1px] bg-white flex-1 max-w-[100px] sm:max-w-[150px] md:max-w-[200px]" />
                </div>

                {/* Directors Grid */}
                <div className="flex flex-col items-center gap-8 md:gap-12">
                    {/* Chairwoman */}
                    <div className="flex flex-col items-center">
                        <div className="w-48 aspect-[3/4] relative mb-3">
                            <Image
                                src={directors.chair.image}
                                alt={directors.chair.name}
                                fill
                                className="object-cover rounded-[15px]" // Adjusted radius to 15px
                            />
                        </div>
                        <h3 className="text-white text-xl font-semibold">{directors.chair.name}</h3>
                        <p className="text-white/90 text-lg">{directors.chair.title}</p>
                    </div>

                    {/* Vice Chairmen */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 w-full max-w-2xl">
                        {directors.viceChairs.map((director) => (
                            <div key={director.name} className="flex flex-col items-center">
                                <div className="w-48 aspect-[3/4] relative mb-3 rounded-[15px]">
                                    <Image
                                        src={director.image}
                                        alt={director.name}
                                        fill
                                        className="object-cover rounded-[15px]" // Adjusted radius to 15px
                                    />
                                </div>
                                <h3 className="text-white text-lg font-semibold">{director.name}</h3>
                                <p className="text-white/90">{director.title}</p>
                            </div>
                        ))}
                    </div>

                    {/* Members */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 w-full">
                        {directors.members.map((director) => (
                            <div key={director.name} className="flex flex-col items-center">
                                <div className="w-full aspect-[3/4] relative mb-2 rounded-[15px]">
                                    <Image
                                        src={director.image}
                                        alt={director.name}
                                        fill
                                        className="object-cover rounded-[15px]" // Adjusted radius to 15px
                                    />
                                </div>
                                <h3 className="text-white text-sm sm:text-base font-semibold text-center">
                                    {director.name}
                                </h3>
                                <p className="text-white/90 text-sm text-center">{director.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}