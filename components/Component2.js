import React from "react";
import styles from "./Component2.module.css";
import Image from "next/image";
import Link from "next/link";

const Component2 = () => {
  return (
    <div className={styles.component2}>
      <div className={styles.buttondiv}>
        <button className={styles.buttontop}>Mobile App development</button>
      </div>

      <div className={styles.second}>
        <div className={styles.paradiv}>
          Converting your idea into reality by offering{" "}
          <span className={styles.blue}>
            {" "}
            Zyrop’s cutting-edge and cost effective{" "}
          </span>{" "}
          custom mobile app development solutions.
        </div>

        <div className={styles.framediv}>
<<<<<<< HEAD
          <Image src={"/Frame.png"} width="562" height="415" />
=======
          <Image src="/Frame.png" width="562" height="415" />
>>>>>>> e78e4404352dd78c22e51e6dbeb8a8545fcb6665
        </div>
      </div>
    </div>
  );
};

export default Component2;
