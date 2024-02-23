import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./services.css";

const servicesBox = [
  {
    className: "box1",
    title: "Profesional Shake machine cleaning",
    subTitle:
      "In the competitive world of the  shake machine every minute counts. Keeping your shakes machines in top condition is essential to ensure smooth operations and customer satisfaction. Discover how PROSIGMA maintenance, can be the solution you’re looking for.",
  },
  // {
  //   className: "box2",
  //   title: "Comercial Window Cleaning",
  //   subTitle:
  //     "Restore, protect and maintain your commercial windows to keep your business looking its best",
  // },
  // {
  //   className: "box3",
  //   title: "Virus Vaporizer Service",
  //   subTitle:
  //     "Protect any surface with an electrostatic treatment, creating a food-safe shield against and bacteria.",
  // },
  // {
  //   className: "box4",
  //   title: "Hand Hygiene program ",
  //   subTitle:
  //     "keep hands clean with our complete service and products for maintaining your facilitys hand sanitizing solution",
  // },
];

export const Services = () => {
  return (
    <section id="services">
      <h2 className="servicesTitle">
        Our <span className="textNaranja"> Services</span> &{" "}
        <span className="textNaranja">Products</span>
      </h2>
      <div className="ServicesWrapper">
        {servicesBox.map((service) => (
          <article
            key={service.className}
            className={`${service.className} box`}
          >
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1708725284/PROSIGMA/ruDw9tL7t5keQsAS8_YEt-transdformed_sdpw2m.jpg"
                  alt="img-serv"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1708725284/PROSIGMA/ruDw9tL7t5keQsAS8_YEt-transformed_ulgtfm.jpg"
                  alt="img-serv"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1708725290/PROSIGMA/ruDw9tL7t5keQsAS8_YEt-transfgormed_rtho2k.jpg"
                  alt="img-serv"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1708725287/PROSIGMA/ddf_j6lyud.jpg"
                  alt="img-serv"
                />
              </SwiperSlide>
            </Swiper>
            <div className="efect">
              <h3>{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
