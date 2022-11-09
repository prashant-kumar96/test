import React from "react";
import styles from "./Why.module.css";
import Image from "next/image";
const Why = () => {
  return (
    <>
      <div className={styles.why}>
        <div className={styles.firstLine}>
          Why Does Your Business Need a Mobile App?
        </div>

        <div className={styles.secondLine}>
          <div className={styles.left}>
            <div className={styles.onecontent}>
              <Image
                src="/diamond.png"
                width="15"
                height="15"
                className={styles.diamond}
              />
              <div className={styles.parent}>
                <div className={styles.heading}>Improve Visibility</div>
                <div className={styles.para}>
                  A mobile app offers a direct jump into the pocket of your
                  customer. It's an easy way to reach out to people when they're
                  on the go, and it allows you to deliver information that is
                  significant to them.
                </div>
              </div>
            </div>
            <div className={styles.onecontent}>
              <Image
                src="/diamond.png"
                width="15"
                height="15"
                className={styles.diamond}
              />
              <div className={styles.parent}>
                <div className={styles.heading}>Grow Your Brand Name</div>
                <div className={styles.para}>
                  An app's interactive components provide a chance for users to
                  engage with your company and form an acquaintance with your
                  brand.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.middle}>
            <Image src="/Mobile.png" width="200" height="356" />
          </div>
          <div className={styles.left}>
            <div className={styles.onecontent}>
              <Image
                src="/diamond.png"
                width="15"
                height="15"
                className={styles.diamond}
              />
              <div className={styles.parent}>
                <div className={styles.heading}>Improve Sales</div>
                <div className={styles.para}>
                  A fully responsive app allows users to examine product
                  information, share products via social media platforms, make
                  purchases, and complete financial transactions.
                </div>
              </div>
            </div>
            <div className={styles.onecontent}>
              <Image
                src="/diamond.png"
                width="15"
                height="15"
                className={styles.diamond}
              />
              <div className={styles.parent}>
                <div className={styles.heading}>
                  Drive Traffic to Your Website
                </div>
                <div className={styles.para}>
                  An app is a perfect platform where you can deliver coupons and
                  deals that are relevant to a user's choice. It's also
                  convenient for you to fascinate users to your website so they
                  can educate themselves more about your line of business.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.why2}>
        <div className={styles.why2firstline}>
          <div className={styles.leftfirstline}>
            <p>
              Why should you choose Zyrop for your Mobile App Development needs?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
