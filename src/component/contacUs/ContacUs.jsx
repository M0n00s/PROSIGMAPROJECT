import { Formulario } from "./Formulario";
import "./contactUs.css";

export const ContacUs = () => {
  return (
    <section className="contact-container">
      <div className="contact_formCardContainer">
        <div className="contact_formContainer">
          <Formulario />
        </div>
        <div className="contact_textContainer">
          <div className="contact_textContainerInner">
            <h3>Ask us about anything</h3>
            <div className="contactUsDataCont">
              Email
              <br />
              <span className="textNaranja"> info@prosigmausa.com</span> <br />
              <br />
              Phone Number
              <br />
              <span className="textNaranja"> +58-424-2812010</span>
              <br />
              <br />
              Adress
              <br />
              <span className="textNaranja"> Miami, FL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
