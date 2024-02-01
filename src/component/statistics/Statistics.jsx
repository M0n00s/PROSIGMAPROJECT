import "./statistics.css";

const statistics = [
  {
    title: "24H",
    subtitle: "Response time",
  },
  {
    title: "35+",
    subtitle: "Number of stores served",
  },
  {
    title: "100%",
    subtitle: "Happy customers",
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
