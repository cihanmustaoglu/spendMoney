import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementBasket,
  addBasket,
  removeProduct,
} from "../redux/basket/basketSlice";

export default function Basket({ basket, inc }) {
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch(decrementBasket(basket));
  };

  const increment = () => {
    dispatch(addBasket(basket));
  };

  const remove = () => {
    dispatch(removeProduct(basket));
  };

  return (
    <div
      className="d-flex flex-row"
      style={{
        padding: "15px",
        fontSize: "10px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        src={basket.image}
        alt=""
        style={{
          width: "40%",
          height: "16vh",
          borderRadius: " 15px",
          marginRight: "20px",
        }}
      />
      <div className="d-flex flex-column" style={{ width: "100%" }}>
        <h5>{basket.title}</h5>
        <div>{basket.description}</div>
        <div>Burası buton</div>
        <div
          className="d-flex flex-column "
          style={{
            border: "gray solid 1px",
            borderRadius: "10px",
            marginRight: "10px",
            width: "50%",
            marginTop: "10px",
            alignItems: "center",
          }}
        >
          <div className="d-flex flex-row justify-center align-items-center">
            <div
              className="px-2 fs-4 "
              style={{ color: "gray" }}
              onClick={increment}
            >
              +
            </div>
            <div className="px-2 fs-6">{basket.amount}</div>
            <div
              className="px-2 fs-4 "
              style={{ color: "gray" }}
              onClick={decrement}
            >
              -
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <button
          className="btn btn-secondary bg-light text-black"
          style={{ padding: "10px" }}
          onClick={remove}
        >
          Sil
        </button>
      </div>
    </div>
  );
}
