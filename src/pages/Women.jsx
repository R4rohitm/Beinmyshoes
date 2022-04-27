import React, { useEffect } from "react";
import styles from "./Women.module.css";
import { useState } from "react";

const Women = () => {
  const [womensData, setWomensData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(`http://localhost:3000/shoes`);
      let data = await response.json();

      let newData = data.filter((item) => item.gender === "WOMEN");
      console.log(newData);
      setWomensData(newData);
    };
    getData();
  }, []);
  return (
    <div className={styles.men}>
      <h3 align="left">Women</h3>
      <div>
        <img
          className={styles.bannerimg}
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/0bd9ced4-574b-4d8f-bbac-2e1c2a9f5af4/women-s-shoes-clothing-accessories.jpg"
          alt="banner"
        />
      </div>
      <div className={styles.container}>
        {womensData.map((item) => {
          return (
            <div className={styles.itemdiv} key={item.id}>
              <img src={item.imageURL} alt={item.name} />
              <h3>{item.name}</h3>
              <div className={styles.div1}>
                <h6>Category : {item.category}</h6>
                <h6>Brand : {item.brand}</h6>
              </div>
              <div className={styles.div2}>
                <h4>Price : ${item.price}</h4>
                <h4>Items Left : {item.items_left}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Women;
