import React, { useEffect } from "react";
import styles from "./Men.module.css";
import { useState } from "react";

const Men = () => {
  const [mensData, setMensData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(`http://localhost:3000/shoes`);
      let data = await response.json();

      let newData = data.filter((item) => item.gender === "MEN");
      console.log(newData);
      setMensData(newData);
    };
    getData();
  }, []);
  return (
    <div className={styles.men}>
      <h3 align="left">Men</h3>
      <div>
        <img
          className={styles.bannerimg}
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/9064fe24-7ac5-4baa-a7ee-8d15bb3a11ba/men-s-shoes-clothing-accessories.png"
          alt="banner"
        />
      </div>
      <div className={styles.container}>
        {mensData.map((item) => {
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

export default Men;
