import React from "react";
import styles from "./AboutUs.module.css";
import Box from "./Box";
import Image from "next/image";

const AboutUs = () => {
  const data = [
    {
      heading: "Blockchain App Development",
      para: "Our highly skilled blockchain app developers have excelled their skills at working with multiple platforms, like Ethereum and Solidity, and thus give you enough options and solutions while planning to step into this world.",
    },
    {
      heading: "Native App Development",
      para: "With our command over building apps based on Native, our clients have been able to augment ROI generation and reduce the onboarding time cycle from months to days. Zyrop is a leading Native app development company with more than 2+ years of experience in building solutions that are growth-oriented and built for change,thereby promising for a better ROI.",
    },
    {
      heading: "Cross Platform App Development",
      para: "Our proficiency in building cross-platform mobile applications and web experiences using the standard technologies,including the Python, Java, Flutter etc. for mobile applications and responsive and adaptive techniques for websites is exceptional in this business discipline.",
    },
    {
      heading: "Android App Development",
      para: "We are always abreast with the latest technological advancements and updates to Android app development. This helps us develop intuitive and user-friendly apps which also includes social media, eCommerce, travel etc. for our global clients.",
    },
    {
      heading: "IOS App Development",
      para: "Our core team of the best iPhone app developers in India adopt the latest technologies including Swift, Objective C, CoreGraphics API, and OpenGL ES, Cocoa Touch Development, SQLite database, Programming Tools: XCode 7, Interface Builder to make extraordinary and fully operational iPhone apps",
    },
    {
      heading: "IOT App Development",
      para: "We design cloud based, high speed IoT solutions that strike the tremendous power of our client’s information. Our services in this discipline acknowledge the complexities of an IoT ecosystem, as well as the changing hardware and software requirements that enable a flawless UX for IoT applications.",
    },
    {
      heading: "Design & Prototyping",
      para: "We design visually appealing apps that are interactive and user friendly. Our mobile app design team administers creating highly engaging, easily operable  and consistent user interfaces across different types of mobile platforms",
    },
    {
      heading: "React native App Development",
      para: "Hire React Native developers from Zyrop who have a successful track record of delivering React Native services for iOS development and developing apps for the android play store.",
    },
    {
      heading: "Flutter App Development",
      para: "We build advanced mobile applications for businesses and are experts in creating user interfaces and graphics. We also commit to take care of unique design ideas via Flutter app development so you don't require a substantial IT background.",
    },
    {
      heading: "Xamarin App Development",
      para: "We are ardent about building high- quality apps that meet your business needs. With our proficiency in Xamarin application development, we provide you faster time to market with better code reusability and scalability for future business projects.",
    },
  ];

  return (
    <>
      <Image
        src="/RectangleLeft"
        className={styles.leftrectangle}
        width="155"
        height="534"
      />

      <Image
        src="/RectangleLeft"
        className={styles.rightRectangle}
        width="155"
        height="534"
      />

      <div className={styles.topmostdiv}>
        <div className={styles.left}>
          <div className={styles.aboutusdiv}>
            <hr className={styles.abouthr} />
            <p className={styles.aboutus}>ABOUT US</p>
          </div>
          <div className={styles.whatmakes}>
            What makes us the BEST CHOICE of more than 1000 businesses across
            the world
          </div>

          <div className={styles.hereat}>
            Here at Zyrop, we provide a full cycle of mobile app development
            solutions involving the initiation stage, designing, integration,
            and management. Be it a completely customer-oriented or
            business-level application, we offer end-to-end mobile application
            development services across diverse business verticals.
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightpara}>
            Utilizing an integrated approach to Mobile App Development, Zyrop
            aims at creating mobile apps that are spontaneous, user-friendly,
            reliable, and fully-operational. Whether it is iOS, Android, or
            cross-platform performing applications, we have the best team of
            engineers to help you bring your dream project to life!
          </div>
        </div>
      </div>

      <div className={styles.middlediv}>
        <p className={styles.middledivpara}>
          Custom Mobile App Development exepertise that we offer
        </p>
        <p className={styles.middledivpara2}>
          Whether you are in need of a native or cross-platform application, as
          the best mobile application development service providers, we deliver
          leading-edge, tailored mobility solutions for your unique business
          requirements. We make use of advanced methodologies and technologies
          to make apps with a path-breaking interface and cutting-edge features.
        </p>
      </div>

      <div className={styles.thirddiv}>
        {data.map((value, index) => (
          <Box heading={value.heading} para={value.para} key={String(index)} />
        ))}
      </div>
    </>
  );
};

export default AboutUs;
