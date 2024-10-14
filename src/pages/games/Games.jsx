import React from "react";
import styles from "./game.module.css";
import img1 from "../../assets/games/img1.png";
import img2 from "../../assets/games/img2.png";
import img3 from "../../assets/games/img3.png";
import img4 from "../../assets/games/img4.png";
import img5 from "../../assets/games/img5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{
        ...style,
        background: "#353535",
        right: "2rem",
        height: "6rem",
        borderRadius: ".9rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "2.5rem",
        boxShadow: "8px 9px 19px 0 #0000006c",
      }}
      onClick={onClick}
    ></div>
  );
}

function PreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{
        ...style,
        background: "#353535",
        left: "2rem",
        height: "6rem",
        borderRadius: ".9rem",
        display: "flex",
        justifyContent: "center", 
        zIndex: "50",
        alignItems: "center",
        width: "2.5rem",
        boxShadow: "8px 9px 19px 0 #0000006c",
      }}
      onClick={onClick}
    ></div>
  );
}

function NextArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{
        ...style,
        background: "#353535",
        right: "-2rem",
        height: "6rem",
        borderRadius: ".9rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "2.5rem",
        boxShadow: "8px 9px 19px 0 #0000006c",
      }}
      onClick={onClick}
    ></div>
  );
}



const Games = () => {
  const gamePreviewImages = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];

  const games = [
    {
      img: img4,
    },
    { img: img5 },
  ];

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow2 />,
    // prevArrow: <></>,
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.headingContainer}`}>
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
          <h1>GAMES</h1>
          <p>Stay tuned for upcoming games !</p>
        </div>
        <div className={`${styles.carausel1}`}>
        <button className={`${styles.button1}`}>Discover</button>

        <Slider {...settings2} className={`${styles.slider1}`}>

          {games.map((data, index) => {
            return (
              <div key={index} className={`${styles.card1}`}>
                <div
                  className={`${styles.sliderItem}`}
                  style={{
                    backgroundImage: `url(${data.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img src={data.img} alt="game preview image" />
                </div>
              </div>
            );
          })}
        </Slider>
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

      <div className={`${styles.previews}`}>
        <h3>
          <span>GAME </span>
          <span>PREVIEWS</span>
        </h3>
        <div className={`${styles.cards}`}>
          <Slider {...settings} className={`${styles.slider}`}>
            {gamePreviewImages.map((data, index) => {
              return (
                <div key={index} className={`${styles.card}`}>
                  <img src={data.img} alt="game preview image" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Games;
