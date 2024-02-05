import "./hero.css";
const starsImg =
  "https://res.cloudinary.com/dksz8cxlh/image/upload/v1706218738/PROSIGMA/clean-and-hygiene-symbol-sparkle-shine-and-twinkle-icon-illustration-free-vector_jojust.png";

export const Hero = () => {
  return (
    <section id="home" className="heroContainer">
      <div className="heroTextCont">
        <div className="heroText">
          <h1>
            <span className="textNaranja">PROSIGMA</span>, provider in the
            <span className="textNaranja">industrial cleaning</span>
          </h1>
          <h2>
            services that optimize the maintenance of commercial equipment
          </h2>
          <div className="heroBtn">
            <a href="#contact" className="naranja">
              Contact us
            </a>
            <a href="#services" className="ligthBlue">
              Services
            </a>
          </div>
        </div>
        <div className="heroText">
          <img
            src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1706804134/PROSIGMA/pexels-andrea-piacquadio-3831645_eprvmf.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
