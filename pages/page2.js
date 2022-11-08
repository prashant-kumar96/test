import React from "react";
import Header from "../components/Header";
import Component2 from "../components/Component2";
import styles from "../styles/Page2.module.css";
import AboutUs from "../components/AboutUs";
import Approach from "../components/Approach";
import Why from "../components/Why";

const page2 = () => {
  return (
    <div className={styles.page2}>
      <Header />
      <Component2 />
      <AboutUs />
      <Approach />
      <Why />
    </div>
  );
};

export default page2;
