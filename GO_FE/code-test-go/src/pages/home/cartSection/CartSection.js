import React from "react";
import { useSelector } from "react-redux";
import CardForCart from "../../../components/cardForCart/CardForCart";
import classes from "./CartSection.module.scss";

const CartSection = () => {
  const carts = useSelector((state) => state.carts.list);
  return (
    <div className={classes.cart}>
      {carts.length ? (
        carts.map((item, idx) => (
          <div key={+idx}>
            <CardForCart item={item} />
          </div>
        ))
      ) : (
        <p className={classes.cart__empty}>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartSection;
