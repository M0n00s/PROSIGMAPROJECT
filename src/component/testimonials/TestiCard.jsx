import React from "react";
import { FaStar } from "react-icons/fa";

export const TestiCard = ({ icon, title, description, name, jobs }) => {
  return (
    <div className="testicardcont">
      <div className="testimonialsTextCont">
        <h2>
          {icon}
          {title}
        </h2>
        <p>{description}</p>
        <div className="testiStars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className="testimonialsPersonCont">
        <div>
          <h3 className="textMain">{name}</h3>
          <p className="textNaranja">{jobs}</p>
        </div>
      </div>
    </div>
  );
};
