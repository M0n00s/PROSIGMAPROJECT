import "./statistics.css";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbClockDollar } from "react-icons/tb";

const statistics = [
  {
    key: 1,
    title: <TbClockDollar />,
    subtitle: "save time and increases profit",
  },
  {
    key: 2,
    title: <FaHandHoldingDollar />,
    subtitle: "lavor saving",
  },
  {
    key: 3,
    title: "24H",
    subtitle: "Response time",
  },
  {
    key: 4,
    title: "50+",
    subtitle: "clients in all Central Florida",
  },
  {
    key: 5,
    title: "100%",
    subtitle: "Happy Clients",
  },
];

export const Statistics = () => {
  return (
    <section className="statsCont">
      {statistics.map((stats) => (
        <div className="statsBox" key={stats.key}>
          <h2>{stats.title}</h2>
          <p>{stats.subtitle}</p>
        </div>
      ))}
    </section>
  );
};
