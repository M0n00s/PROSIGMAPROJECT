import "./services.css";

const servicesBox = [
  {
    className: "box1",
    title: "Pressure Wasihng Service",
    subTitle:
      "Enhance the crub appeal, health and safety of your business our re-fresh commercial power washing services",
  },
  {
    className: "box2",
    title: "Comercial Window Cleaning",
    subTitle:
      "Restore, protect and maintain your commercial windows to keep your business looking its best",
  },
  {
    className: "box3",
    title: "Virus Vaporizer Service",
    subTitle:
      "Protect any surface with an electrostatic treatment, creating a food-safe shield against and bacteria.",
  },
  {
    className: "box4",
    title: "Hand Hygiene program ",
    subTitle:
      "keep hands clean with our complete service and products for maintaining your facilitys hand sanitizing solution",
  },
];

export const Services = () => {
  return (
    <section>
      <h2 className="servicesTitle">
        Our <span className="textNaranja"> Services</span> &{" "}
        <span className="textNaranja">Products</span>
      </h2>
      <div className="ServicesWrapper">
        {servicesBox.map((service) => (
          <article
            key={service.className}
            className={`${service.className} box`}
          >
            <div className="efect">
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
