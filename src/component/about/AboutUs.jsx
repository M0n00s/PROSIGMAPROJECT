import { AboutCard } from "../aboutCard/AboutCard";
import "./about.css";
export const AboutUs = () => {
  return (
    <section className="aboutContainer">
      <div>
        <h3>
          Welcome to <span className="textNaranja">PROSIGMA</span>
        </h3>
        <p>
          a leading provider in the industrial cleaning and maintenance of
          kitchen equipment for restaurant chains and franchises. Established in
          2015 by engineer Gustavo Villamizar, our company emerged with the
          vision to offer specialized outsourcing services that optimize the
          maintenance of commercial equipment.
        </p>
      </div>
      <div className="aboutBoxes">
        {/* <div className="aboutLogoCont">
          <img
            src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1706294930/PROSIGMA/logo-prosigma_qdzjnn.png"
            alt=""
          />
        </div> */}
        <div className="aboutCaraterCont">
          <p>
            At PROSIGMA, we believe in boosting our clients' productivity. We
            deliver optimal and efficient technical services, allowing each
            restaurant to focus on its core business. Our proposition is
            straightforward: provide specialized maintenance that ensures
            operational continuity without interruptions.
          </p>
          <AboutCard />
        </div>
      </div>
    </section>
  );
};
