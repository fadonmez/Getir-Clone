import React from "react";

export default function MobileApp() {
  return (
    <div className=" bg-tertiary md:bg-mobileApp py-8 rounded-lg  px-8 lg:px-16 flex justify-start items-center relative lg:h-[316px] m-4">
      <div className="flex flex-col justify-center items-start gap-4">
        <h3 className="text-white text-[26px] font-bold">Getir'i İndirin!</h3>
        <h4 className="text-white font-semibold mb-4">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </h4>

        <div className="flex flex-col gap-2 items-center lg:flex-row">
          <a href="#">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <figure className="absolute bottom-0 right-0 hidden xl:block">
        <img
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt=""
        />
      </figure>
    </div>
  );
}
