import React from "react";
import CardStyle from "./LessonCard.module.css";

const LessonCard = (props) => {
  const { name, age, image } = props;
  return (
    <div className={CardStyle.cards}>
      <div className={CardStyle.image_div}>
        <img className={CardStyle.image} src={image} alt="" />
      </div>
      <div className={CardStyle.content}>
        <p className={CardStyle.content_p}>
          Lesson Name: <span className={CardStyle.content_span}>{name}</span>
        </p>
        <p className={CardStyle.content_p}>
          Lesson Hour: <span className={CardStyle.content_span}>{age}</span>
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
