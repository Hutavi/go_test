import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../stores/reducers/cartReducer";
import { updateProduct } from "../../stores/reducers/productReducer";
import Button from "../botton/BottonCustom";
import iconMinus from "../../assets/imgs/minus.png";
import iconPlus from "../../assets/imgs/plus.png";
import iconTrash from "../../assets/imgs/trash.png";
import classes from "./CardForCart.module.scss";

const CardForCart = ({ item }) => {
  const [actionLive, setActionLive] = useState(false);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateCart({ id: item?.id, count: item?.count + 1 }));
  };

  const handleDecrease = () => {
    if (item?.count === 1) {
      handleRemove();
    } else {
      dispatch(updateCart({ id: item?.id, count: item?.count - 1 }));
    }
  };

  const handleRemove = () => {
    setActionLive(true);
    const interval = setInterval(() => {
      dispatch(updateProduct({ id: item?.id, status: false }));
      dispatch(removeFromCart(item?.id));

      clearInterval(interval);
      setActionLive(false);
    }, 500);
  };
  return (
    <div
      className={`${classes.cardCart} ${
        actionLive && classes["cardCart-leave"]
      }`}
    >
      <div className={classes.cardCart__img}>
        <div
          className={classes["cardCart__img-circle"]}
          style={{ backgroundColor: item?.color }}
        >
          <div className="cardCart-block">
            <img src={item.image} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.cardCart__body}>
        <h4>{item?.name}</h4>
        <h3>{`$${item?.price}`}</h3>
        <div className={classes["cardCart__body-action"]}>
          <div className={classes["cardCart__body-action-count"]}>
            <Button gray small circleBtn onClick={handleDecrease}>
              <img width={10} src={iconMinus} alt="plus" />
            </Button>
            <span>{item?.count}</span>
            <Button gray small circleBtn onClick={handleIncrease}>
              <img width={10} src={iconPlus} alt="plus" />
            </Button>
          </div>
          <Button primary small circleBtn onClick={handleRemove}>
            <img width={16} src={iconTrash} alt="trash" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(CardForCart);
