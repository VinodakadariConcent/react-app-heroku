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
      text: "The edge of nothing lake",discription:"eh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",comment:"12 Comments",
      lifestyle:"LIFESTYLE", date:"march 15, 2015 "
    },
    { img: "images/img-8.jpg", text: "the waves are high & beautiful" ,discription:"eh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",comment:"12 Comments", lifestyle:"LIFESTYLE",date:"march 15, 2015 "},
    { img: "images/img-8.jpg", text: "the waves are high & beautiful" ,discription:"Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",comment:"12 Comments",lifestyle:"LIFESTYLE",date:"march 15, 2015 "},
    { img: "images/img-9.jpg", text: "GQ at the new yacht club" ,discription:"Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",comment:"12 Comments",lifestyle:"LIFESTYLE",date:"march 15, 2015 "},
    { img: "images/img-1.jpg", text: "This is one beautiful car & photo",discription:"Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",comment:"12 Comments" ,lifestyle:"LIFESTYLE",date:"march 15, 2015 "},
    { img: "images/img-2.jpg", text: "Coffe in the morning is the absolute best", discription:"Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",comment:"12 Comments",lifestyle:"LIFESTYLE",date:"march 15, 2015 "},
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
                    text={userinfo.text}
                    comment={userinfo.comment}
                    description={userinfo.discription}
                    lifestyle = {userinfo.lifestyle}
                    date={userinfo.date}
                    // label="Adventure"
                    // path="/music"
                  />
                  <CardItem
                    src={userinfo.img}
                    text={userinfo.text}
                    comment={userinfo.comment}
                    description={userinfo.discription}
                    lifestyle = {userinfo.lifestyle}
                    date={userinfo.date}
                    // label="Luxury"
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
