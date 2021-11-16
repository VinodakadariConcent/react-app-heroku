// import React from 'react';
// import '../../App.css';

// export default function Music() {
//   return <h1 className='products'>Music</h1>;
// }

import React, { useState } from "react";
import "../Cards.css";
import CardItem from "../CardItem";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Music = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const pic = [
    { img: "images/img-1.jpg", name: "vinoda" },
    { img: "images/img-2.jpg", name: "vinoda" },
    { img: "images/img-3.jpg", name: "vinoda" },
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
                    //path="/travel"
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

export default Music;
