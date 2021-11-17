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
      text: "The edge of nothing lake",
      discription:
        "eh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",
      comment: "12 Comments",
      lifestyle: "LIFESTYLE",
      date: "march 15, 2015 ",
    },
    {
      img: "images/img-1.jpg",
      text: "The edge of nothing lake",
      discription:
        "eh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",
      comment: "12 Comments",
      lifestyle: "LIFESTYLE",
      date: "march 15, 2015 ",
    },
    {
      img: "images/img-2.jpg",
      text: "The edge of nothing lake",
      discription:
        "eh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",
      comment: "12 Comments",
      lifestyle: "LIFESTYLE",
      date: "march 15, 2015 ",
    },
    {
      img: "images/img-3.jpg",
      text: "The edge of nothing lake",
      discription:
        "eh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",
      comment: "12 Comments",
      lifestyle: "LIFESTYLE",
      date: "march 15, 2015 ",
    },
    {
      img: "images/img-9.jpg",
      text: "The edge of nothing lake",
      discription:
        "eh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth animation 8-bit hella",
      comment: "12 Comments",
      lifestyle: "LIFESTYLE",
      date: "march 15, 2015 ",
    },
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
                    lifestyle={userinfo.lifestyle}
                    date={userinfo.date}
                    // label="Luxury"
                    // path="/travel"
                  />
                  <CardItem
                    src={userinfo.img}
                    text={userinfo.text}
                    comment={userinfo.comment}
                    description={userinfo.discription}
                    lifestyle={userinfo.lifestyle}
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

export default Contact;
