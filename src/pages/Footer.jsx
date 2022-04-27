import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div>
          <div>
            <Link
              to="/aboutus"
              style={{ textDecoration: "none", color: "white" }}
            >
              About Us
            </Link>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Sustainability</p>
          </div>
        </div>
        <div>
          <div>
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/faq" style={{ textDecoration: "none", color: "white" }}>
              FaQ
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.icon}>
          <a href="https://twitter.com">
            <i class="fa-brands fa-twitter-square"></i>
          </a>
          <a href="https://facebook.com">
            <i class="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://youtube.com">
            <i class="fa-brands fa-youtube-square"></i>
          </a>
          <a href="https://instagram.com">
            <i class="fa-brands fa-instagram-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
