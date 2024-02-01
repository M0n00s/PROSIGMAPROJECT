import "./statistics.css";

const statistics = [
  {
    title: "24H",
    subtitle: "Tiempo de respuesta",
  },
  {
    title: "35+",
    subtitle: "Cantidad de tiendas atendidas",
  },
  {
    title: "100%",
    subtitle: "Clentes felices",
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
