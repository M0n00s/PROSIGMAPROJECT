import { AboutCard } from "../aboutCard/AboutCard";
import "./about.css";
export const AboutUs = () => {
  return (
    <section id="about" className="aboutContainer">
      <div>
        <h3>
          Welcome to <span className="textNaranja">PROSIGMA</span>
        </h3>
        <p>
          A leading provider in the industrial cleaning and maintenance of
          kitchen equipment for restaurant chains and franchises. Established in
          2015 by engineer Gustavo Villamizar, our company emerged with the
          vision to offer specialized outsourcing services that optimize the
          operation and function of the commercial food equipment.
        </p>
      </div>
      <div className="aboutBoxes">
        <div className="aboutCaraterCont">
          <p>
            <span className="textNaranja">PROSIGMA</span> implement preventive
            maintenance programs for your Shake machines. This includes regular
            inspections, deep cleaning, and necessary adjustments to prevent
            issues before they occur, minimizing downtime and ensuring
            continuous operation.
          </p>
          <AboutCard />
        </div>
      </div>
    </section>
  );
};
