import "./hero.css";
const starsImg =
  "https://res.cloudinary.com/dksz8cxlh/image/upload/v1706218738/PROSIGMA/clean-and-hygiene-symbol-sparkle-shine-and-twinkle-icon-illustration-free-vector_jojust.png";

export const Hero = () => {
  return (
    <section className="heroContainer">
      <div className="heroTextCont">
        <div className="heroText">
          <h1>
            provider in the
            <span className="textNaranja">industrial cleaning</span>
          </h1>
          <h2>
            services that optimize the maintenance of commercial equipment
          </h2>
          <div className="heroBtn">
            <button className="naranja">Contact us</button>
            <button className="ligthBlue">Services</button>
          </div>
        </div>
        <div className="heroText"></div>
      </div>
    </section>
  );
};
