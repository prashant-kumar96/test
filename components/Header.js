import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src="/white.png" width="65" height="49" />
        </div>
        <div className={styles.menus}>
          <Link href="#">Mobile App Development</Link>
          <Link href="#">E-Commerce</Link>
          <Link href="#">DevOps Engineering</Link>
          <Link href="#">UI/UX</Link>
          <Link href="#">Blockchain Development</Link>
          <Link href="#">White label solutions</Link>
          <Link href="#">Stock & Crypto</Link>
        </div>
      </div>
      <hr className={styles.hruler} />
    </>
  );
};

export default Header;
