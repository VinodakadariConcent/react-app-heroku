import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
            <figcaption>
              <b>{props.text}</b>
              <br />
              {/* <pre> </pre> */}
              <div>&nbsp;</div>
              <i>{props.comment}</i>
              <br />
              <div>&nbsp;</div>
              <p>{props.description}</p>
              <div>
                &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
              </div>
              <div className="row">
                <h class="left">{props.lifestyle}</h>
                <h class="right">{props.date}</h>

                {/* <h> {props.lifestyle}</h>
            <h> {props.lifestyle}</h> */}
              </div>
            </figcaption>
          </figure>
          {/* <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div> */}
        </Link>
      </li>
    </>
  );
}

export default CardItem;
