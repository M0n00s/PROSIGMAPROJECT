import { Formulario } from "./Formulario";
import "./contactUs.css";

export const ContacUs = () => {
  return (
    <section id="contact" className="contact-container">
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
              <span className="textNaranja"> rrhh@prosigmausa.com</span> <br />
              <br />
              Phone Number
              <br />
              <span className="textNaranja"> {`+1 (407) 765 5499`}</span>
              <br />
              <br />
              Address
              <br />
              <span className="textNaranja">
                10524 Moss Park Rd, Ste. 204-149, Orlando FL 32833 United States
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
