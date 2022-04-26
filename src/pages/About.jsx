import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <h1 style={{ marginBottom: "50px" }}>About Us</h1>
      <div className={styles.aboutus}>
        <div>
          <p>
            <span>BeInMyShoes</span> is your place for athletic and easygoing
            shoes for the entire family from many name brands.
            <p>
              You’ll discover styles for ladies, men and children from brands
              like Nike, Converse, Vans, Sperry, Madden Girl, Skechers, ASICS
              and then some! With stores in the U.S. furthermore, Canada and
              much more choice online at <i>BeInMyShoes.com </i> and{" "}
              <i>FamousFootwear.ca.</i>
              <b> ‘BeInMyShoes’</b> is a main family footwear goal for the
              popular brands you know and love.
            </p>
            <b> ‘BeInMyShoes’</b> is a piece of parent Inc., an assorted
            arrangement of worldwide footwear brands. Joined, these brands
            enable make to parent an organization with both an inheritance and a
            mission. Parent organization’ inheritance incorporates over 130-long
            stretches of craftsmanship, an enthusiasm for fit and a business
            canny, with a mission to keep on rousing individuals to feel better…
            feet first.
          </p>
        </div>
        <div>
          <img src="https://wallpaperaccess.com/full/680073.jpg" alt="about" />
        </div>
      </div>
    </>
  );
};

export default About;
