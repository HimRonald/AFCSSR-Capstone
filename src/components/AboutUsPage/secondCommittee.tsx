import Image from 'next/image'

export default function SecondCommittee() {
    const committee = {
        chairman: {
            name: 'NOV Kimsan',
            title: 'Chairman',
            image: '/Images/ACSSR-Member-Pics/Second Committee/nov_kimsan.jpg'
        },
        viceChairman: {
            name: 'រស់ សណ្ដាន',
            title: 'Vice Chairman',
            image: '/Images/ACSSR-Member-Pics/Second Committee/rous_sandan.png'
        },
        members: [
            {
                name: 'ឃុន សេរីពន្លឺ',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/Second Committee/khun_sereypunleu.png'
            },
            {
                name: 'NORNG Rithy',
                title: 'Permanent Member',
                image: '/Images/ACSSR-Member-Pics/Second Committee/norng_rithy.jpg'
            },
            {
                name: 'អ៊ុន សុីណេត',
                title: 'Member',
                image: '/Images/ACSSR-Member-Pics/First Committee/ហេង រតនា.JPG'
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
                        Second Committee
                    </h2>
                    <div className="h-[1px] bg-white flex-1 max-w-[100px] sm:max-w-[150px] md:max-w-[200px]" />
                </div>

                {/* Committee Grid */}
                <div className="flex flex-col items-center gap-12">
                    {/* Chairman */}
                    <div className="flex flex-col items-center">
                        <div className="w-48 aspect-[3/4] relative mb-3">
                            <Image
                                src={committee.chairman.image}
                                alt={committee.chairman.name}
                                fill
                                className="object-cover rounded-[15px]"
                                priority
                            />
                        </div>
                        <h3 className="text-white text-xl font-semibold">{committee.chairman.name}</h3>
                        <p className="text-white/90 text-lg">{committee.chairman.title}</p>
                    </div>

                    {/* Vice Chairman */}
                    <div className="flex flex-col items-center">
                        <div className="w-48 aspect-[3/4] relative mb-3">
                            <Image
                                src={committee.viceChairman.image}
                                alt={committee.viceChairman.name}
                                fill
                                className="object-cover rounded-[15px]"
                            />
                        </div>
                        <h3 className="text-white text-xl font-semibold">{committee.viceChairman.name}</h3>
                        <p className="text-white/90 text-lg">{committee.viceChairman.title}</p>
                    </div>

                    {/* Members */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
                        {committee.members.map((member) => (
                            <div key={member.name} className="flex flex-col items-center">
                                <div className="w-48 aspect-[3/4] relative mb-3">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-[15px]"
                                    />
                                </div>
                                <h3 className="text-white text-lg font-semibold text-center">{member.name}</h3>
                                <p className="text-white/90 text-center">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

