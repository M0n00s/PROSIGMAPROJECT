import "./hero.css";

export const Hero = () => {
  return (
    <section id="home" className="heroContainer">
      <div className="heroTextCont">
        <div className="heroText">
          <h1>
            <img
              className="herotectimglogo"
              src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1706311083/PROSIGMA/Sin-t%C3%ADtulo-1_za3hyt.png"
              alt=""
            />
            <span className="textNaranja">ROSIGMA</span>
          </h1>

          <h2>
            We are service providers in industrial cleaning and optimization of
            the maintenance of Shake machines, and all their components, in the
            kitchen area of restaurant chains and franchises recognized
            worldwide.
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
            className="heroTextImg"
            src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1707335125/PROSIGMA/pexels-andrea-piacquadio-3831645_1_r4huar.webp"
            alt="hero-img"
          />
        </div>
      </div>
    </section>
  );
};
