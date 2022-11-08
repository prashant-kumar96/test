import React from "react";
import styles from "./Box.module.css";
const Box = (props) => {
  return (
    <div className={styles.box}>
      <p className={styles.heading}>{props.heading}</p>
      <p className={styles.para}>{props.para}</p>
    </div>
  );
};

export default Box;
