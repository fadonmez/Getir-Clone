import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banners from "../api/banners.json";
import { useEffect, useState } from "react";
import Title from "../components/ui/Title.jsx";

export default function Campaigns() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setBanners(Banners);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="hidden md:block container mx-auto py-4 pointer-events-none">
      <Title>Kampanyalar</Title>
      <Slider {...settings}>
        {banners.length &&
          banners.map((banner) => (
            <div className="p-2" key={banner.id}>
              <img src={banner.image} alt="" className="rounded" />
            </div>
          ))}
      </Slider>
    </div>
  );
}
