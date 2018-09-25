import React from "react";

const Travel = ({ destination,country, image,distance }) => (
  <figure>
      <h1>{country}</h1>
      <h2>{distance}</h2>
    <img src={image} alt={destination} />
    <figcaption>
      <h3>{destination}</h3>
    </figcaption>
  </figure>
);

export default Travel;