import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./services.css";

const servicesBox = [
  {
    className: "box1",
    title: "Maximize Shake Machine Performance with PROSIGMA.",
    subTitle:
      "In the competitive world of shake machines, every minute counts. Maintaining your shake machines in top condition is crucial for ensuring smooth operations and customer satisfaction. Explore how PROSIGMA's maintenance services can provide the solution you're seeking.",
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
        <span className="textNaranja">PROSIGMA's</span> Expert Services
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
