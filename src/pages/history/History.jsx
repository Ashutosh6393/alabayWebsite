import React, { useRef } from "react";
import styles from "./history.module.css";
import img1 from "../../assets/history/img1.png";
import img2 from "../../assets/history/img2.png";
import img3 from "../../assets/history/img3.png";
import img4 from "../../assets/history/img4.png";
import img5 from "../../assets/history/img5.png";
import img6 from "../../assets/history/img6.png";
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
        // display: "block",
        background: "#353535",
        left: "2rem",
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

const History = () => {
  let sliderRef = useRef(null);

  const all = () => {
    sliderRef.slickGoTo(1);
  };
  const photos = () => {
    sliderRef.slickGoTo(3);
  };
  
  const videos = () => {
    sliderRef.slickGoTo(5);
  };

  const images = [
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return (
    <div>
      <div className={`${styles.history} w-full h-[110vh]  relative flex `}>
        <hr />
        <div className={`w-[50%] ${styles.imageContainer}`}>
          <img src={`${img1}`} alt="alabay dog image" />
        </div>
        <div className={`${styles.textArea} text-right`}>
          <h2 className="">History Of</h2>
          <h1>ALABAY</h1>
          <p>
            The Central Asian Shepherd Dog, also known as Alabay, has been a
            guardian of livestock and property for centuries. Originating from
            Central Asia, these dogs are renowned for their courage, strength,
            and loyalty.
          </p>
        </div>

        <div className={`${styles.customShapeDividerBottom} `}>
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
      <div className={`${styles.imageSliderContainer} `}>
        <div className={`${styles.sliderLinks}`}>
          <button autoFocus  onClick={all}>ALL</button>
          <button onClick={photos}>PHOTOS</button>
          <button onClick={videos}>VIDEOS</button>
        </div>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
          className={`${styles.slider}`}
        >
          {images.map((data, index) => {
            return (
              <div key={index} className={`${styles.card}`}>
                <img src={data.img} alt="game preview image"  />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default History;
