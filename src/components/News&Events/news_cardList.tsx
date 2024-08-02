import NewsCard from "./news_card";

interface NewsCardProps {
    date: string;
    title: string;
    description: string;
    imageUrl: string;
}

const NewsCardList: React.FC<{ cards: NewsCardProps[] }> = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
            {cards.map((card, index) => (
                <NewsCard
                    key={index}
                    date={card.date}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                />
            ))}
        </div>
    );
}
export default NewsCardList;