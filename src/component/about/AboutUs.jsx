import { AboutCard } from "../aboutCard/AboutCard";
import "./about.css";
export const AboutUs = () => {
  return (
    <section id="about" className="aboutContainer">
      <div>
        <h3>
          Transforming Kitchen Equipment
          <span className="textNaranja"> Performance</span>
        </h3>
        <p>
          A leading provider in industrial cleaning and maintenance of kitchen
          equipment for restaurant chains and franchises, PROSIGMA was
          established in 2015 by engineer Gustavo Villamizar. Our company
          emerged with a vision to offer specialized outsourcing services that
          optimize the operation and function of commercial food equipment.
        </p>
      </div>
      <div className="aboutBoxes">
        <div className="aboutCaraterCont">
          <p>
            <span className="textNaranja">At PROSIGMA</span> , we implement
            preventive maintenance programs for your Shake machines, which
            include regular inspections, deep cleaning, and necessary
            adjustments to prevent issues before they occur. This approach
            minimizes downtime and ensures continuous operation, helping you
            maintain peak efficiency.
          </p>
          <AboutCard />
        </div>
      </div>
    </section>
  );
};
