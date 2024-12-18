import Image from 'next/image'

export default function BoardAdvisors() {
    const advisors = [
        { name: 'H.E Dr. Hun Thoraksy', image: '/Images/ACSSR-Member-Pics/Membership of Board of Advisors/Raksing.png' },
        { name: 'H.E Khoung Sreng', image: '/Images/ACSSR-Member-Pics/Membership of Board of Advisors/khoung_sreng.png' },
        { name: 'H.E Dr. Sok Toch', image: '/Images/ACSSR-Member-Pics/Membership of Board of Advisors/sok_touch.jpg' },
        { name: 'H.E Dr. Ly Reaksmey', image: '/Images/ACSSR-Member-Pics/Membership of Board of Advisors/ly_reaksmey.png' },
        { name: 'H.E Men Nearysopheak', image: '/Images/ACSSR-Member-Pics/Membership of Board of Advisors/Men Nearysopheak.jpg' },
        { name: 'H.E Dr. Morm Sarith', image: '/Images/ACSSR-Member-Pics/Membership of Board of Advisors/ម៉ម សារិទ្ធ.jpg' },
        { name: 'Mr. Var Vireak', image: '/Images/ACSSR-Member-Pics/Membership of Board of Advisors/Va_vireak.jpg' },
    ]

    return (
        <section className="bg-[#3B82F6] py-8 sm:py-12 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Title with decorative lines */}
                <div className="flex items-center justify-center gap-4 mb-8 sm:mb-12 md:mb-16">
                    <div className="h-[1px] bg-white flex-1 max-w-[100px] sm:max-w-[150px] md:max-w-[200px]" />
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-libre font-bold text-center whitespace-nowrap">
                        Board of Advisors
                    </h2>
                    <div className="h-[1px] bg-white flex-1 max-w-[100px] sm:max-w-[150px] md:max-w-[200px]" />
                </div>

                {/* Advisors Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {advisors.map((advisor, index) => (
                        <div
                            key={advisor.name}
                            className={`flex flex-col items-center ${index >= 4 ? "sm:col-start-2 md:col-start-2 lg:col-start-auto" : ""
                                }`}
                        >
                            <div className="w-full aspect-[4/5] relative mb-2 sm:mb-3 md:mb-4">
                                <Image
                                    src={advisor.image}
                                    alt={advisor.name}
                                    fill
                                    className="object-cover rounded-[15px]" // Adjusted radius value
                                />
                            </div>
                            <h3 className="text-white text-center text-sm sm:text-base md:text-lg font-medium px-2">
                                {advisor.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}