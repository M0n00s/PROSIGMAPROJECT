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
    subtitle: "labor saving",
    text: "PROSIGMA shake machine cleaning and maintenance can lead to significant long-term savings. You avoid the costs associated with hiring internal staff, training, and acquiring specialized tools and spare parts, allowing you to optimize your financial resources.",
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
        <>
          {stats.key !== 2 ? (
            <div className="statsBox">
              <h2>{stats.title}</h2>
              <p className="stats-subtitle">{stats.subtitle}</p>
            </div>
          ) : (
            <div className="statsBox">
              <div className="content">
                <div className=" front">
                  <h2>{stats.title}</h2>
                  <p className="stats-subtitle">{stats.subtitle}</p>
                </div>
                <div className=" back">
                  <p>{stats.text}</p>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </section>
  );
};
