import sr1 from '../../assets/sr1.jpg';
import sr2 from '../../assets/sr2.jpg';
import sr3 from '../../assets/sr3.jpg';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
  <div>
    <img src={sr1} alt="Slider 1" style={{ width: '100%', height: '35rem',  }} />
  </div>
  <div>
    <img src={sr2} alt="Slider 2" style={{ width: '100%', height: '35rem' }} />
  </div>
  <div>
    <img src={sr3} alt="Slider 3" style={{ width: '100%', height: '35rem' }} />
  </div>
</Slider>

  );
};

export default HeroSlider;
