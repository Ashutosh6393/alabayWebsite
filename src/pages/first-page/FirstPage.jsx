import React from "react";
import bg from "../../assets/bg.png";
import styles from "./firstPage.module.css";

const FirstPage = () => {
  return (
    <div className={`w-full h-full fixed top-0 z-10 ${styles.container}`}>
      <h1 className={`text-8xl text-center mt-6`}>WELCOME TO ALABAY WORLD</h1>

      <div className={`${styles.heroText} w-full px-24 py-4 `}>
        <p className="text-center text-4xl">
          where the <span>legendary Central Asian Shepherd Dog</span> meets a
          new-age adventure. <span>Join us</span> in celebrating the{" "}
          <span>strength</span>, <span>loyalty</span>, and <span>heritage </span>
          of the Alabay breed.
        </p>
      </div>
    </div>
  );
};

export default FirstPage;
