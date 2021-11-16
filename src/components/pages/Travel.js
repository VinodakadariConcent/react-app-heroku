// import React from 'react';
// import '../../App.css';

// export default function Travel() {
//   return <h1 className='services'>Travel</h1>;
// }

import React, { useState } from "react";
import "../Cards.css";
import CardItem from "../CardItem";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Travel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const pic = [
    { img: "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg", name: "vinoda" },
    { img: "images/img-1.jpg", name: "vinoda" },
    { img: "images/img-2.jpg", name: "vinoda" },
    { img: "images/img-8.jpg", name: "vinoda" },
    { img: "images/img-9.jpg", name: "vinoda" },
  ];

  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {pic.map((userinfo) => {
        return (
          <div className="cards">
            <div className="cards__container">
              <div className="cards__wrapper">
                <ul className="cards__items">
                  <CardItem
                    src={userinfo.img}
                    //text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label="Adventure"
                    //path="/music"
                  />
                  <CardItem
                    src={userinfo.img}
                    // text='Travel through the Islands of Bali in a Private Cruise'
                    label="Luxury"
                   // path="/travel"
                  />
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Travel;

