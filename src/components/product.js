import React,{ useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBasket, decrementBasket } from "../redux/basket/basketSlice";

export default function Product({product_id}) {

  const [inc, setInc] = useState(0);
  const product = useSelector((state) => state.product.value).find((p) => p.id === product_id);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  useEffect(() => {
        if(basket.find((p) => p.id === product.id)){
          setInc(basket.find((p) => p.id === product.id)?.amount);
        } else {
          setInc(0);
        }
  } , [basket]);

  const decrement = () => {
    if (inc === 0) {
      return;
    }
    dispatch(decrementBasket(product));
    setInc(basket.find((p) => p.id === product.id)?.amount);
  };
  
  const increment = () => {
    dispatch(addBasket(product));
    setInc(basket.find((p) => p.id === product.id)?.amount);
  };

  return (
    <div
      className="card"
      style={{
        width: "18rem",
        margin: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        className="card-img-top"
        style={{ width: "80%", height: "80%", resizeMode: "contain" }}
        src={product.image}
        alt={product.title}
      />
      <div
        className="card-body"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text fs-5">{product.description}</p>
        <p className="card-text" style={{ fontWeight: 700, fontSize: 25 }}>
          {product.price.toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
          })}
        </p>
        <div
          className="d-flex flex-row justify-content-around align-items-center"
          style={{ width: "70%", marginLeft: "15%" }}
        >
          <button
            disable={inc == 0 ? true : false}
            className="btn btn-secondary"
            onClick={decrement}
          >
            Çıkar
          </button>
          <div style={{ marginLeft: 10, marginRight: 10 }}>{inc}</div>
          <div className="btn btn-success" onClick={increment}>
            Ekle
          </div>
        </div>
      </div>
    </div>
  );
}
