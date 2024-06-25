import "./callAction.css";

export const CallAction = () => {
  return (
    <section className="callCont">
      <div className="callTextCont">
        <div className="d-flex">
          <img
            src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1706311083/PROSIGMA/Sin-t%C3%ADtaaulo-1_japqas.png"
            alt="image-contact"
          />
          <div>
            {/* <h2>Contact us and be part of the change.</h2> */}
            <p>Reach out to us today for expert maintenance solutions!</p>
          </div>
        </div>
        <a href="#contact">Contact us</a>
      </div>
    </section>
  );
};
