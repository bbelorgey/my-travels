import React from "react";
import "./style.css"

const TravelItems = ({ destination, country, image,bruno }) => (
  <div class="myDiv">
    <h1>{destination}</h1>
    <p><img class="myImg" src={image} alt={destination} /></p>
    <div>
      <h2>{country}</h2>
      <h3>{bruno}</h3>
    </div>
  </div>
);

export default TravelItems;