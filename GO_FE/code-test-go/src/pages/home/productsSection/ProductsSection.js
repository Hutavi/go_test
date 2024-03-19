import React, { useEffect, useState } from "react";
import classes from "./ProductsSection.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { LoadingDonut } from "../../../components/loading/Loading";
import { initProducts } from "../../../stores/reducers/productReducer";
import CardForProduct from "../../../components/cardForProducts/CardForProduct";
import shoesData from "../../../data/shoes.json";
import axios from "axios";

const ProductsSection = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shoes, setShoes] = useState([]);
  const shoesStore = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(initProducts(shoesData.shoes));
  // }, [dispatch]);

  useEffect(() => {
    // Call API using Axios
    axios
      .get("https://go-shoe.mtech.id.vn/shoe")
      .then((response) => {
        setShoes(response.data.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Dispatch action to initialize products (if needed)
  useEffect(() => {
    if (shoes.length > 0) {
      dispatch(initProducts(shoes));
    }
  }, [shoes, dispatch]);

  return (
    <div className={classes.shop}>
      {shoesStore.length ? (
        shoesStore.map((item, idx) => (
          <div className={classes.shop__item} key={+idx}>
            <CardForProduct item={item} />
          </div>
        ))
      ) : (
        <div className={classes.shop__loading}>
          <LoadingDonut />
        </div>
      )}
    </div>
  );
};

ProductsSection.propTypes = {};

export default ProductsSection;
