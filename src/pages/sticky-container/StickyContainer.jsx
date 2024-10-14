import React from "react";
import styles from "./sticky-container.module.css";
import {
  History,
  ProjectVision,
  Roadmap,
  Tokenomics,
  Merchandise,
  Games,
  Social,
} from "../index";

const StickyContainer = () => {
  return (
    <div
      className={`${styles.customScroll} h-[92vh] w-[92%] bg-white z-20 sticky overflow-y-scroll overflow-x-hidden  mx-auto rounded-t-3xl `}
    >
      <History />
      <ProjectVision />
      <Roadmap />
      <Tokenomics />
      <Merchandise />
      <Games />
      <Social />
    </div>
  );
};

export default StickyContainer;
