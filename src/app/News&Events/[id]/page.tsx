import { Badge } from "@/components/ui/badge"
import { notFound } from 'next/navigation'

interface NewsItem {
    id: string;
    date: string;
    title: string;
    description: string;
    imageUrl: string;
    fullContent: string;
}

const newsItems: NewsItem[] = [
    {
        id: "1",
        date: "June 1, 2024",
        title: "Exciting New Feature Release",
        description: "Purus in mollis nunc sed id. Commodo nulla facilisi nullam vehicula ipsum a.",
        imageUrl: "/Images/newsPic.png",
        fullContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: "2",
        date: "June 15, 2024",
        title: "Company Milestone Achieved",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
        imageUrl: "/Images/newsPic.png",
        fullContent: "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    },
    {
        id: "3",
        date: "July 3, 2024",
        title: "New Partnership Announcement",
        description: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
        imageUrl: "/Images/newsPic.png",
        fullContent: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa."
    }
];

function getNewsItem(id: string): NewsItem | undefined {
    return newsItems.find(item => item.id === id);
}

export default function NewsDetail({ params }: { params: { id: string } }) {
    const newsItem = getNewsItem(params.id);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="mx-auto container px-10 py-8">
            <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-64 object-cover rounded-xl mb-6" />
            <Badge variant='news' className="mb-3">{newsItem.date}</Badge>
            <h1 className="text-3xl font-bold mb-4 text-[#027AC6]">{newsItem.title}</h1>
            <p className="text-lg mb-6">{newsItem.description}</p>
            <div className="prose max-w-none">
                {newsItem.fullContent}
            </div>
        </div>
    );
}