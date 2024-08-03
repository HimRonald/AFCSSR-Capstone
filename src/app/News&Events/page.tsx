import TitleBar from "@/components/ui/title_bar"
import MainCard from "@/components/News&Events/main_card"
import NewsCardList from "@/components/News&Events/news_cardList"
export default function Page(){
    const newsCards = [
        {
            id: "1",
            date: "June 1, 2024",
            title: "Exciting New Feature Release",
            description: "Purus in mollis nunc sed id. Commodo nulla facilisi nullam vehicula ipsum a. Ac orci phasellus egestas tellus.",
            imageUrl: "/Images/newsPic.png"
        },
        {
            id: "2",
            date: "June 2, 2024",
            title: "Company Milestone Achieved",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            imageUrl: "/Images/newsPic.png"
        },
        {
            id: "3",
            date: "June 3, 2024",
            title: "New Partnership Announcement",
            description: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
            imageUrl: "/Images/newsPic.png"
        },
        {
            id: "4",
            date: "June 4, 2024",
            title: "Upcoming Event",
            description: "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            imageUrl: "/Images/newsPic.png"
        },
        {
            id: "5",
            date: "June 5, 2024",
            title: "Product Update",
            description: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.",
            imageUrl: "/Images/newsPic.png"
        },
        {
            id: "6",
            date: "June 6, 2024",
            title: "Team Expansion",
            description: "In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.",
            imageUrl: "/Images/newsPic.png"
        }
    ];

    return(
        <>
        <TitleBar title_bar="ACFSSR NEWS" />
        <div className="mx-auto container px-10">
            <MainCard />
            <h3 className="font-libre text-[#027AC6] text-4xl mb-8">Recent News</h3>
            <NewsCardList cards={newsCards}/>
        </div>
        </>
    )
}