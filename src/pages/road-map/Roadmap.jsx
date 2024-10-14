import React from "react";
import styles from "./roadmap.module.css";
import img1 from "../../assets/roadmap/img1.png";
import img2 from "../../assets/roadmap/img2.png";
import img3 from "../../assets/roadmap/img3.png";
import img4 from "../../assets/roadmap/img4.png";
import img5 from "../../assets/roadmap/img5.png";

const Roadmap = () => {
  const cardsData = [
    {
      heading: "Comunity Building",
      subheading: "and Initial Launch",
      img: img3,
    },
    {
      heading: "Merchandise",
      subheading: "Store Launch",
      img: img4,
    },
    {
      heading: "Comunity Events",
      subheading: "and Contests",
      img: img5,
    },
    {
      heading: "Expansion and New",
      subheading: "Features",
      img: img2,
    },
  ];

  return (
    <div>
      <div className={`${styles.heading}`}>
        <h1>ROAD MAP</h1>
        <div className={`${styles.customShapeDividerBottom1728746931}`}>
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
      <div className={`${styles.textArea}`}>
        <div className={`${styles.text}`}>
          <p>
            Our journey is just beginning. Explore our roadmap to see the
            exciting milestones and future plans we have in store.
          </p>
          <p>Join us as we grow and achieve new heights.</p>
        </div>
        <div className={`${styles.imageContainer}`}>
          <img src={`${img1}`} alt="dog image" />
        </div>
      </div>
      <div className={`${styles.cardsContainer}`}>
        {cardsData.map((card, index) => (
          <div className={`${styles.card}`} key={index}>
            <div>
              <h2>{card.heading}</h2>
              <h3>{card.subheading}</h3>
            </div>

            <img src={`${card.img}`} alt="dog image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
