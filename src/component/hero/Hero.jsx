import "./hero.css";
const starsImg =
  "https://res.cloudinary.com/dksz8cxlh/image/upload/v1706218738/PROSIGMA/clean-and-hygiene-symbol-sparkle-shine-and-twinkle-icon-illustration-free-vector_jojust.png";

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
            we are provider in the services industrial cleaning and optimize the
            maintenance of commercial equipment
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
            src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1707249195/PROSIGMA/pexels-andrea-piacquadio-38316a45_jv0dno.webp"
            alt="hero-img"
          />
        </div>
      </div>
    </section>
  );
};
