import React from "react";
import Card from "../../components/cardLayout/Card";
import ProductsSection from "./productsSection/ProductsSection";
import CartSection from "./cartSection/CartSection";
import { useSelector } from "react-redux";

const Home = () => {
  const totalPrice = useSelector((state) => state?.carts?.totalPrice);

  return (
    <>
      <Card title="Our Products">
        <ProductsSection />
      </Card>

      <Card title="Your cart" summary={`$${totalPrice.toFixed(2)}`}>
        <CartSection />
      </Card>
    </>
  );
};

export default Home;
