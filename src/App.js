import React, { useEffect, useState } from "react";
import Header from "./components/header";
import BasketList from "./components/basketlist";
import styles from "./styles/styles";
import Product from "./components/product";
import { useSelector } from "react-redux";


function App() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const products = useSelector((state) => state.product.value);

  useEffect(() => {
    let totalx = 0;
    basket.map((p) => {
      totalx = totalx + p.price * p.amount;
    });
    setTotal(totalx);
  }, [basket]);

  return (
    <>
      <div className="fixed-top" style={styles.container}>
          <Header />
        <div style={styles.bodyContainer}>
          <div style={styles.leftContainer}>
            <div style={styles.cardContainer}>
              {products.map((p) => {
                return <Product key={p.id} product_id={p.id} />;
              })}
            </div>
          </div>
          <div style={styles.rightContainer}>
            <BasketList />
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
