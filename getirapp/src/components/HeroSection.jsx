import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slick1 from "../images/slick1.jpg";
import slick2 from "../images/slick2.jpg";
import getir from "../images/getir.svg";
import ReactFlagsSelect from "react-flags-select";
export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    GB: "+44",
    FR: "+33",
    DE: "+49",
    IT: "+39",
    TR: "+90",
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="relative h-[236px] md:h-[500px] outline-none">
      <Slider className="hidden md:block" {...settings}>
        <div>
          <img className="w-full h-[500px] object-cover " src={slick1} alt="" />
        </div>
        <div>
          <img className="w-full h-[500px] object-cover" src={slick2} alt="" />
        </div>
      </Slider>
      <div className="container absolute top-0 left-[50%] translate-x-[-50%] h-full flex items-center justify-between md:p-4">
        <div className="hidden md:block">
          <img src={getir} alt="" />
          <p className="text-white font-semibold text-4xl mt-6">
            Dakikalar içinde <br /> kapınızda
          </p>
        </div>
        <div className="w-full md:w-[400px] rounded-lg bg-white px-4 py-8 flex flex-col gap-y-4 justify-center items-center">
          <h4 className="text-primary font-semibold">
            Giriş yap veya kayıt ol
          </h4>
          <div className="flex items-center gap-x-2 w-full">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={(code) => setSelected(code)}
              selected={selected}
              className="flag-select"
            />
            <label className="relative block w-full">
              <input
                required
                type="text"
                className="h-[56px] px-4 py-6 border border-gray-300 rounded w-full hover:border-primary transition-colors focus:border-primary  outline-none peer text-sm"
              />
              <span className="pointer-events-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-500 text-sm w-full ml-3 peer-focus:h-12 peer-focus:text-primary peer-focus:text-xs transition-all  peer-valid:h-12 peer-valid:text-primary peer-valid:text-xs">
                Telefon Numarası
              </span>
            </label>
          </div>
          <button className="bg-secondary text-tertiary py-3 px-12 rounded-md w-full text-sm font-semibold hover:bg-tertiary hover:text-secondary transition-colors mt-4">
            Telefon Numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  );
}
