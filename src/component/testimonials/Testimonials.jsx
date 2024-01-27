import { TestiCard } from "./TestiCard";
import { BiSolidQuoteLeft } from "react-icons/bi";

import "./testimonials.css";

const Testi = [
  {
    icon: <BiSolidQuoteLeft />,
    title: "awesome cleaning",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem
    exercitationem praesentium sit placeat doloribus esse inventore quasi
    at, eaque blanditiis sequi molestiae `,
    stars: 5,
    img: "",
    name: "Carla Andrade",
    jobs: "Cleaning Manager",
  },
  {
    icon: <BiSolidQuoteLeft />,
    title: "the best",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem
    exercitationem praesentium sit placeat doloribus esse inventore quasi
    at.`,
    stars: 5,
    img: "",
    name: "Manuel Contreras",
    jobs: "Product Owner",
  },
];

export const Testimonials = () => {
  return (
    <section className="testimonialsCont">
      <h2 className="testititle">What the clients is saying</h2>
      {Testi.map((testi) => (
        <TestiCard key={testi.title} {...testi} />
      ))}
    </section>
  );
};
