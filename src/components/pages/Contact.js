// import React from 'react';
// import '../../App.css';

// export default function Contact() {
//   return <h1 className='products'>Contact</h1>;
// }

import React, { useState } from "react";
import "../Cards.css";
import CardItem from "../CardItem";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const pic = [
    {
      img: "https://www.insidehook.com/wp-content/uploads/2020/03/steph-curry-nba-jam-e1583192954848.jpg?fit=734%2C488",
      name: "vinoda",
    },
    { img: "images/img-1.jpg", name: "vinoda" },
    { img: "images/img-2.jpg", name: "vinoda" },
    { img: "images/img-3.jpg", name: "vinoda" },
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

export default Contact;
