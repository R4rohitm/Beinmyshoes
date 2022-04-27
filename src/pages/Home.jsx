import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <img
        style={{ marginTop: "40px" }}
        src="https://thumbs.gfycat.com/GoodnaturedDapperAntarcticfurseal-max-1mb.gif"
        alt="banner"
      />

      <h2>More BeInMyShoes</h2>
      <div className={styles.endsection}>
        <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_500,c_limit/05e6cecd-0004-42ab-b80f-71eccce19171/men-s-shoes-clothing-accessories.png"
            alt="men"
          />
          Men
        </Link>
        <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
          <img
            src="https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,q_auto:eco,so_0/e328b4f3-ff6f-4d55-af2a-393cdc5ee755/air-max-sc-shoe-FVn5sK.jpg"
            alt="women"
          />
          Women
        </Link>
        <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/eba1e6c0-c702-4faf-a6f6-d1e9da907a0f/nike-kids-shoes-clothing-and-accessories-nike-com.jpg"
            alt="kids"
          />
          Kids
        </Link>
      </div>
    </>
  );
};

export default Home;
