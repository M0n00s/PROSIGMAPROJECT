import "./statistics.css";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbClockDollar } from "react-icons/tb";

const statistics = [
  {
    key: 1,
    title: <TbClockDollar />,
    subtitle: "Save time and increase profit",
    text: "At PROSIGMA, we help restaurants save time and increase profits. Our expert team handles all aspects of shake machine cleaning and maintenance, freeing up your resources to focus on running your business smoothly. By minimizing downtime and ensuring peak performance of your equipment, we optimize your operations for maximum profitability. Trust PROSIGMA to enhance your restaurant's efficiency and bottom line.",
  },
  {
    key: 2,
    title: <FaHandHoldingDollar />,
    subtitle: "labor saving",
    text: "PROSIGMA's shake machine cleaning and maintenance services can result in substantial long-term savings. By choosing us, you can avoid the expenses of hiring internal staff, training, and acquiring specialized tools and spare parts, enabling you to optimize your financial resources.",
  },
  {
    key: 3,
    title: "24H",
    subtitle: "Response time",
    text: "At PROSIGMA, we prioritize prompt and responsive service. We commit to responding to all inquiries and service requests within 24 hours. Whether you have questions, need maintenance assistance, or require urgent support, count on us to address your needs swiftly and efficiently. Your satisfaction is our priority, and we're dedicated to delivering exceptional service with a quick turnaround.",
  },
  {
    key: 4,
    title: "50+",
    subtitle: "clients in Central Florida",
    text: "At PROSIGMA, we serve over 50 clients in Central Florida, including Miami, Orlando, and Tampa. While based in these cities, we're equipped to reach any location across Central Florida. Whether you're in a major city or a smaller town, count on us to deliver exceptional service and expertise tailored to your needs. Contact us today to optimize your equipment and operations with PROSIGMA.",
  },
  {
    key: 5,
    title: "100%",
    subtitle: "Happy Clients",
    text: "At PROSIGMA, we prioritize customer satisfaction above all else. Our commitment to excellence is evident in the positive feedback we receive from our satisfied clients. We strive to build strong, trusted relationships by delivering exceptional service and exceeding expectations. Join our community of happy clients and experience the PROSIGMA difference. Contact us today to optimize your equipment and streamline your operations.",
  },
];

export const Statistics = () => {
  return (
    <section className="statsCont">
      {statistics.map((stats) => (
        <>
          {/* {stats.key !== 2 ? (
            <div className="statsBox">
              <h2>{stats.title}</h2>
              <p className="stats-subtitle">{stats.subtitle}</p>
            </div>
          ) : ( */}
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
          {/* )} */}
        </>
      ))}
    </section>
  );
};
