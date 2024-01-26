import { Card } from "./Card";
import "./aboutCard.css";

const dataCard = [
  {
    img: "https://res.cloudinary.com/dksz8cxlh/image/upload/v1706294930/PROSIGMA/logo-prosigma_qdzjnn.png",
    title: "punctuality",
    description: "We uphold our commitments in a timely manner.",
  },
  {
    img: "https://res.cloudinary.com/dksz8cxlh/image/upload/v1706294930/PROSIGMA/logo-prosigma_qdzjnn.png",
    title: "Discipline",
    description:
      "We maintain high work standards to guarantee exceptional results.",
  },
  {
    img: "https://res.cloudinary.com/dksz8cxlh/image/upload/v1706294930/PROSIGMA/logo-prosigma_qdzjnn.png",
    title: `Immediate Attention`,
    description:
      "We are ready to respond to emergencies quickly and effectively.",
  },
  {
    img: "https://res.cloudinary.com/dksz8cxlh/image/upload/v1706294930/PROSIGMA/logo-prosigma_qdzjnn.png",
    title: "Honesty",
    description: "We foster relationships based on transparency and integrity.",
  },
  {
    img: "https://res.cloudinary.com/dksz8cxlh/image/upload/v1706294930/PROSIGMA/logo-prosigma_qdzjnn.png",
    title: "Expertise and Experience",
    description: "Our team is highly qualified with years of experience.",
  },
  {
    img: "https://res.cloudinary.com/dksz8cxlh/image/upload/v1706294930/PROSIGMA/logo-prosigma_qdzjnn.png",
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
          <Card {...card} />
        ))}
      </div>
    </div>
  );
};
