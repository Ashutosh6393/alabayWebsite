import React from "react";
import styles from "./project-vision.module.css";
import img1 from "../../assets/project/img1.png";

const ProjectVision = () => {
  return (
    <div>
      <div className={`${styles.headingContainer}`}>
        <h1 className={`${styles.heading}`}>PROJECT VISION</h1>
      </div>
      <div className={`${styles.textArea}`}>
        <div className={`${styles.customShapeDividerTop1728741466}`}>
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
        <div className={`${styles.imageContainer}`}>
          <img src={`${img1}`} alt="many dogs image" />
        </div>
        <p>
          Our mission is to honor the heritage of the Alabay by creating a
          vibrant, loyal, and powerful community. Just as the Alabay protects
          its flock, we aim to build a pack that stands strong together.
        </p>
      </div>
    </div>
  );
};

export default ProjectVision;
