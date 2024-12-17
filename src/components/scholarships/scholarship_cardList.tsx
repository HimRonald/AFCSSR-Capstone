"use client";
import ScholarshipCard from "./scholarship_card";

interface ScholarshipCardProps {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ScholarshipCardList: React.FC<{ cards: ScholarshipCardProps[] }> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
      {cards.map((card) => (
        <ScholarshipCard
          key={card.id}
          id={card.id}
          date={card.date}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default ScholarshipCardList;
