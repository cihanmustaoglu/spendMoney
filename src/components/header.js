import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from '../styles/styles'

export default function Header() {

  const [total, setTotal] = useState(0);
  const basket = useSelector((state) => state.basket.basket);

  useEffect(() => {
    let totalx = 0;
    basket.map((p) => {
      totalx = totalx + p.price * p.amount;
    });
    setTotal(totalx);
  }, [basket]);

  return (
    <div style={total > 1000 ? styles.headerContainer2 : styles.headerContainer}>
      <div className="fs-2 text-white">
        {total > 1000 ? "Harcamayı tamamlamak için " : "Harcayacağınız "}
        <span className="fs-2" style={styles.span}>
          {1000 - total} TL
        </span>{" "}
        {total > 1000 ? "`ye ihtiyacınız var." : "kaldı."}
      </div>
    </div>
  );
}
