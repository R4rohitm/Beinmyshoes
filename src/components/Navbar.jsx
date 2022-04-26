import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles.image}>
        <img
          onClick={() => navigate("/")}
          src="https://cdn.iconscout.com/icon/free/png-256/asics-tiger-3421937-2854442.png"
          alt="icon"
        />
      </div>
      <div className={styles.nav}>
        <div>
          <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
            Men
          </Link>
        </div>
        <div>
          <Link to="/women" style={{ textDecoration: "none", color: "black" }}>
            Women
          </Link>
        </div>
        <div>
          <Link to="/kids" style={{ textDecoration: "none", color: "black" }}>
            Kids
          </Link>
        </div>
        <div>
          <Link
            to="/aboutus"
            style={{ textDecoration: "none", color: "black" }}
          >
            About Us
          </Link>
        </div>
        <div>
          <Link
            to="/contactus"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact Us
          </Link>
        </div>
        <div>
          <Link to="/faq" style={{ textDecoration: "none", color: "black" }}>
            FaQ
          </Link>
        </div>
      </div>
      <div className={styles.search}>
        <div>
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_83580.png"
            alt="Search"
          />
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div>
        <img src="https://imgur.com/9NUftGS.png" alt="bag" />
      </div>
    </div>
  );
};

export default Navbar;
