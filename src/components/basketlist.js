import React, { useEffect, useState } from "react";
import Basket from "./basket";
import {  useSelector } from "react-redux";

export default function Basketlist() {
  const basket = useSelector((state) => state.basket.basket);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalx = 0;
    basket.map((p) => {
      totalx = totalx + p.price * p.amount;
    });
    setTotal(totalx);
  }, [basket]);

  return (
    <>
      <div className="d-flex flex-start">
        <div
          className="p-2 justify-center align-items-center fs-2 fw-3 "
          style={{
            position: "fixed",
            top: "10vh",
            backgroundColor: "white",
            width: "100%",
            borderBottom: "1px solid gray",
            borderTop: "1px solid gray",
          }}
        >
          <p
            style={{
              marginLeft: "3%",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontSize: "40px",
              float: "left",
              fontWeight: "bold",
            }}
          >
            Sepet Detayları
          </p>
        </div>
      </div>

      <div
        className="d-flex flex-column"
        style={{ paddingBottom: "45%", paddingTop: "25%" }}
      >
        {basket.map((basket1, index) => {
          if (basket1.amount > 0) {
            return <Basket key={index} basket={basket1} inc={basket1.amount} />;
          }
        })}

        <div className="d-flex flex-end">
          <div
            className="p-2 justify-center align-items-center fs-2 fw-3 "
            style={{
              position: "fixed",
              bottom: "0",
              backgroundColor: "green",
              width: "100%",
              borderTop: "1px solid gray",
            }}
          >
            <p
              style={{
                marginLeft: "3%",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "40px",
                float: "left",
                fontWeight: "bold",
              }}
            >
              Toplam {total} TL
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
