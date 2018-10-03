import React from "react";
import TravelItems from "./TravelItems";

const travels = [
  {
    destination:"Holliday in Roubaix",
    country:"FRANCE",
    image:"https://www.valeursactuelles.com/sites/default/files/styles/image_article/public/2017-10/Capture%20d%E2%80%99e%CC%81cran%202017-10-09%20a%CC%80%2013.26.06.png?itok=WyhtwKGE",
    distance:"823 km"
  },
  {
    destination:"Holliday in Valenciennes",
    country:"FRANCE",
    image:"http://www.laforet.com/sites/default/files/styles/slide-home__1366x627_/public/immobilier-valenciennes-1.jpg?itok=IB7kDzfp",
    distance:"855 km"
  },
  {
    destination:"Holliday in Denain",
    country:"FRANCE",
    image:"https://resize2-lejdd.ladmedia.fr/rcrop/620,310/img/var/europe1/storage/images/lejdd/politique/ambiance-baron-noir-a-denain-795868/34705706-2-fre-FR/Ambiance-Baron-noir-a-Denain.jpg",
    distance:"872 km"
  },
  {
    destination:"Holliday in Quievrain",
    country:"FRANCE",
    image:"https://t1.ldh.be/ZOBfb7HxnBrDH_6eAF6tIYZi_3s=/0x153:3968x2137/940x470/5b13fb875532160896000c8e.jpg",
    distance:"854 km"
  },
  {
    destination:"Holliday in Wambrechies",
    country:"FRANCE",
    image:"https://www.wambrechies.fr/sites/default/files/le_port_de_plaisance_vu_de_la_deule_0.jpg",
    distance:"864 km"
  }
];

const Travel = () => (
  <div>
  {
    travels.map((travel,index) => (
      <TravelItems destination={travel.destination} image={travel.image} country={travel.country} bruno={travel.distance} key={index}/>
    ))
  }
</div>
);

export default Travel;