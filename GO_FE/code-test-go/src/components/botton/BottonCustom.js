import React from "react";
import classes from "./ButtonCustom.module.scss";

const BottonCustom = (props) => {
  const {
    content,

    disabled,
    block,
    large,
    medium,
    small,

    circleBtn,
    borderRadius,

    primary,
    gray,

    className,

    ...passProps
  } = props;

  const classProps = Object.keys(props)
    .map((el) => (classes[el] && props[el] === true ? classes[el] : ""))
    .join(" ");
  return (
    <button
      className={`
    ${classes["custom-btn"]}
    ${classProps}
    ${className}
  `}
      {...passProps}
    >
      <span className={classes["custom-btn__content"]}>
        {props.children || content}
      </span>
    </button>
  );
};

export default BottonCustom;
