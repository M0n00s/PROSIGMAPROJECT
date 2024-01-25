import "./hero.css";
const starsImg =
  "https://res.cloudinary.com/dksz8cxlh/image/upload/v1706218738/PROSIGMA/clean-and-hygiene-symbol-sparkle-shine-and-twinkle-icon-illustration-free-vector_jojust.png";

export const Hero = () => {
  return (
    <section className="heroContainer">
      <div className="heroText">
        <img className="starsImg p2" src={starsImg} alt="" />
        <h1>
          Spotless Solutions{" "}
          <span className="textNaranja">for Your Business</span>
        </h1>
        <h2>Leading the way in health and safety innovation</h2>
      </div>
      <div className="heroBtn">
        <button className="naranja">Contact us</button>
        <button className="ligthBlue">Services</button>
      </div>
    </section>
  );
};
