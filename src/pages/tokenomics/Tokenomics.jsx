import React from "react";
import styles from "./tokenomics.module.css";
import img1 from "../../assets/tokenomics/img1.png";

const Tokenomics = () => {
  const tiles = [
    { small: "LIQUIDITY", big: "LOCKED" },
    { small: "CONTRACT", big: "RENOUNCED" },
    { small: "TAXES", big: "0%" },
  ];
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.customShapeDividerTop}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className={`${styles.shapeFill}`}
          ></path>
        </svg>
      </div>
      <div className={`${styles.heading}`}>
        <h1>TOKENOMICS</h1>
      </div>

      <div className={`${styles.content}`}>
        <div className={`${styles.tiles}`}>
          {tiles.map((data) => {
            return (
              <div className={`${styles.tile}`}>
                <h4>{data.small}</h4>
                <h3>{data.big}</h3>
              </div>
            );
          })}
        </div>
        <div className={`${styles.imageContainer}`}>
          <img src={`${img1}`} alt="dog image" />
        </div>
      </div>

      <div className={`${styles.customShapeDividerBottom}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className={`${styles.shapeFill}`}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Tokenomics;
