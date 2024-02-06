import { Card } from "./Card";
import "./aboutCard.css";

const dataCard = [
  {
    title: "Punctuality",
    description: "We uphold our commitments in a timely manner.",
  },
  {
    title: "Discipline",
    description:
      "We maintain high work standards to guarantee exceptional results.",
  },
  {
    title: `Immediate Attention`,
    description:
      "We are ready to respond to emergencies quickly and effectively.",
  },
  {
    title: "Honesty",
    description: "We foster relationships based on transparency and integrity.",
  },
  {
    title: "Expertise and Experience",
    description: "Our team is highly qualified with years of experience.",
  },
  {
    title: "Quality and Certification",
    description:
      "We strive to deliver services of the highest quality, backed by recognized certifications in the industry.",
  },
];

export const AboutCard = () => {
  return (
    <div className="container">
      <div className="card__container">
        {dataCard.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};
