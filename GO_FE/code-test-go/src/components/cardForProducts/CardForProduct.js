import React, { memo } from "react";
import { object } from "prop-types";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../stores/reducers/productReducer";
import { addToCart } from "../../stores/reducers/cartReducer";
import iconCheck from "../../assets/imgs/check.png";
import ButtonCustom from "../botton/BottonCustom";
import classes from "./CardForProduct.module.scss";

const CardForProduct = ({ item }) => {
  const { id, image, name, description, price, color, addedToCart } = item;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(updateProduct({ id: id, status: true }));
    dispatch(addToCart(item));
  };
  return (
    <div className={classes.cardProduct}>
      <div
        className={classes.cardProduct__img}
        style={{ backgroundColor: color }}
      >
        <img src={image} alt="image1" />
      </div>
      <h3 className={classes.cardProduct__name}>{name}</h3>
      <p className={classes.cardProduct__description}>{description}</p>
      <div className={classes.cardProduct__price}>
        <p>{`$${price}`}</p>
        {addedToCart ? (
          <ButtonCustom primary large circleBtn disabled>
            <img width={16} src={iconCheck} alt="check" />
          </ButtonCustom>
        ) : (
          <ButtonCustom primary large borderRadius onClick={handleAddToCart}>
            Add to cart
          </ButtonCustom>
        )}
      </div>
    </div>
  );
};

CardForProduct.propTypes = {
  item: object,
};

export default memo(CardForProduct);
