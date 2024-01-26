import React from "react";

export const Card = ({ img, title, description }) => {
  return (
    <article className="card__article">
      {/* <img src={img} alt="image" className="card__img" /> */}
      <h2>{title}</h2>

      <div className="card__data">
        <span className="card__description">{description}</span>
      </div>
    </article>
  );
};
