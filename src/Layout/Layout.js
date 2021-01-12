import React, { useState } from "react";
import styles from "./Layout.module.css";
import {
  FaBars,
  FaDesktop,
  FaCogs,
  FaTablet,
  FaThLarge,
  FaInfoCircle,
  FaSlidersH,
} from "react-icons/fa";

const Layout = () => {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div>
      {/* <!-- HEADER AREA START --> */}
      <header style={{ marginLeft: `${fullScreen ? "0px" : "250px"}` }}>
        <div className={styles.left_area}>
          <a onClick={() => setFullScreen(!fullScreen)}>
            <FaBars />
          </a>
        </div>
        <div className={styles.right_area}>
          <a href="">Logout</a>
        </div>
      </header>
      {/* <!-- HEADER AREA ENDS --> */}

      {/* <!-- SIDEBAR START --> */}
      <div className={`${styles.sidebar} ${fullScreen && styles.sidebar_off} `}>
        <div className={styles.sidebar_logo}>
          <img src="/assets/images/cubebitv2.png" alt="" />
        </div>
        <center>
          <img
            src="assets/images/profile.jpg"
            className={styles.profile_image}
            alt=""
          />
          <h4>Random Name</h4>
        </center>
        <a href="">
          <FaDesktop />
          <span>Dashboard</span>
        </a>
        <a href="">
          <FaCogs />
          <span>Components</span>
        </a>
        <a href="">
          <FaTablet />
          <span>Table</span>
        </a>
        <a href="">
          <FaThLarge />
          <span>Forms</span>
        </a>
        <a href="">
          <FaInfoCircle />
          <span>About</span>
        </a>
        <a href="">
          <FaSlidersH />
          <span>Settings</span>
        </a>
      </div>
      {/* <!-- SIDEBAR ENDS --> */}

      {/* <!-- CONTENT AREA START  --> */}
      <div
        className={styles.content}
        style={{ paddingLeft: `${fullScreen ? "20px" : "270px"}` }}
      >
        <h2>i AM content</h2>
      </div>
      {/* <!-- CONTENT AREA ENDS --> */}
    </div>
  );
};

export default Layout;
