import "./statistics.css";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbClockDollar } from "react-icons/tb";

const statistics = [
  {
    title: <TbClockDollar />,
    subtitle: "save time and increases profit",
  },
  {
    title: <FaHandHoldingDollar />,
    subtitle: "lavor saving",
  },
  {
    title: "24H",
    subtitle: "Response time",
  },
  {
    title: "50+",
    subtitle: "clients in all Central Florida",
  },
  {
    title: "100%",
    subtitle: "Happy Clients",
  },
];

export const Statistics = () => {
  return (
    <section className="statsCont">
      {statistics.map((stats) => (
        <div className="statsBox" key={stats.title}>
          <h2>{stats.title}</h2>
          <p>{stats.subtitle}</p>
        </div>
      ))}
    </section>
  );
};
