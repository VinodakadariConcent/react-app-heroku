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
    {
      img: "https://i.pinimg.com/originals/03/ce/01/03ce015ea85dc84a17fb4c24a96cd87e.jpg",
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
      img: "images/img-8.jpg",
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
                    // label="Adventure"
                    // path="/music"
                  />
                  <CardItem
                    src={userinfo.img}
                    text={userinfo.text}
                    comment={userinfo.comment}
                    description={userinfo.discription}
                    lifestyle={userinfo.lifestyle}
                    date={userinfo.date}
                    // label="Adventure"
                    // path="/music"
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
