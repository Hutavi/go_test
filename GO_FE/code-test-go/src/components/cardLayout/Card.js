import React from "react";
import PropTypes from "prop-types";
import classes from "./Card.module.scss";
import iconNike from "../../assets/imgs/nike.png";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__heading}>
        <div className={classes["card__heading-logo"]}>
          <img height={"100%"} src={iconNike} alt="nike" />
        </div>
        <div className={classes["card__heading-content"]}>
          <p>{props.title}</p>
          <p>{props.summary}</p>
        </div>
      </div>
      <div className={classes.card__body}>{props.children}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
};

export default Card;
