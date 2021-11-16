// import React from "react";
import React, { useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Row, Col } from "react-bootstrap";
import { render } from "@testing-library/react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const pic = [
    {
      img: "https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg",
      name: "vinoda",
    },
    { img: "images/img-8.jpg", name: "vinoda" },
    { img: "images/img-9.jpg", name: "vinoda" },
    { img: "images/img-1.jpg", name: "vinoda" },
    { img: "images/img-2.jpg", name: "vinoda" },
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
                    // path="/music"
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

export default Hero;
