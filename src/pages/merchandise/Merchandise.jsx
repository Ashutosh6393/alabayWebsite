import React, {useState} from "react";
import styles from "./merchandise.module.css";
import black1 from "../../assets/merchandise/black1.png";
import black2 from "../../assets/merchandise/black2.png";
import blue1 from "../../assets/merchandise/blue1.png";
import blue2 from "../../assets/merchandise/blue2.png";
import pink1 from "../../assets/merchandise/pink1.png";
import pink2 from "../../assets/merchandise/pink2.png";
import yellow1 from "../../assets/merchandise/yellow1.png";
import yellow2 from "../../assets/merchandise/yellow2.png";
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
        height: "3.2rem",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "3.2rem",
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
        height: "3.2rem",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "3.2rem",
        zIndex: "50",
        boxShadow: "8px 9px 19px 0 #0000006c",
      }}
      onClick={onClick}
    ></div>
  );
}


const Merchandise = () => {
  const images = [
    {
      img: black2,
      bg: black1,
    },
    {
      img: blue2,
      bg: blue1,
    },
    {
      img: pink2,
      bg: pink1,
    },
    {
      img: yellow2,
      bg: yellow1,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  const [background, setBackground] = useState()

  return (
    <div className={`${styles.container}`}>
      <h1>MERCHANDISE</h1>
      <div className={`${styles.carausel}`}>
        <Slider {...settings} className={`${styles.slider}`}>
          {images.map((data, index) => {
            return (
              <div key={index} className={`${styles.card}`}>
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
    </div>
  );
};

export default Merchandise;
