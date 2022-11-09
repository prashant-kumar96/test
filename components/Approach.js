import React from "react";
import styles from "./Approach.module.css";
import Image from "next/image";

const Approach = () => {
  const boxdata = [
    {
      heading: "AR/VR",
      para: "Our mobile app development team builds interactive & engaging AR-enabled mobile apps overlaying digital information and extending real-world scenes. We make use of the latest technologies in video streaming, audio, GPS data, etc",
    },
    {
      heading: "Geo Tracking",
      para: "Our mobile app development team directs GPS technology to equip mobile apps with real-time tracking features, geo-targeting, geo-fencing, geotagging, geo-conquesting, and location-aware in-app messaging.",
    },
    {
      heading: "Biometric Sensors",
      para: "Our mobile app development company carries out biometric recognition technologies by merging fingerprint scanning, voice & face recognition, and other biometrics. With this characteristic feature, you can accomplish high-security user authentication.",
    },
    {
      heading: "Internet of Things (IOT)",
      para: "Elevate your business efficiency, burrow our advanced business opportunities, and create feature-rich  products with our lOT-led digital transformation services. We help you in developing connected ecosystems for sharp decisions.",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className={styles.approach}>
          <Image
            src="/Rectangleright2nd.png"
            width="155"
            height="534"
            className={styles.rectagle}
          />
          <div className={styles.first}>
            <Image src="/bg.png" width="720" height="450" />
          </div>
          <div className={styles.paraabsolute}>
            <p>Our App Development Approach</p>
          </div>

          <p className={styles.para}>
            Here at Zyrop, we work with different mobile app development
            approaches as per your business requirements to assemble routine
            tasks that stimulate the development process.
          </p>
        </div>

        <div className={styles.second}>
          <div className={styles.left}>
            <Image
              src="/Groupicon.png"
              width="37"
              height="38"
              className={styles.groupIcon}
            />
            <div className={styles.leftchild}>
              <div className={styles.ellipse}></div>
              <div className={styles.heading1}>
                <p>Native App Development</p>
              </div>

              <div className={styles.para1}>
                Our core team of the best iPhone app developers in India adopt
                the latest technologies including Swift, Objective C,
                CoreGraphics API, and OpenGL ES, Cocoa Touch Development, SQLite
                database, Programming Tools: XCode 7, Interface Builder to make
                extraordinary and fully operational iPhone apps.
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Image
              src="/Groupicon.png"
              width="37"
              height="38"
              className={styles.groupIcon}
            />
            <div className={styles.leftchild}>
              <div className={styles.ellipse}></div>
              <div className={styles.heading1}>
                <p>Hybrid App Development</p>
              </div>

              <div className={styles.para1}>
                Hybrid mobile app development makes use of quality web
                technologies like CSS, JavaScript, and HTML5. The shared code is
                cocooned in a native container using variant tools and shipped
                as a regular app. One of the biggest advantages that a hybrid
                app offers is its reduced cost to build and run.
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/Ellipse.png"
          width="452"
          height="452"
          className={styles.ellipsebig}
        />
        <div className={styles.evolve}>
          <p>
            Evolve with <span className={styles.blue}> Latest Technology </span>
            Trends
          </p>
        </div>
      </div>
      <div className={styles.fourboxesparent}>
        {boxdata.map((value, index) => (
          <div className={styles.smallBox}>
            <div className={styles.content}>
              <div className={styles.headingsmallbox}>{value.heading}</div>
              <div className={styles.parasmallbox}>{value.para}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Approach;
