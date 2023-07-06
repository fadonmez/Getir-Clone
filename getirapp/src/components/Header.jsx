import React from "react";
import getirLogo from "../images/logo.svg";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";

export default function header() {
  return (
    <div className="bg-primary  ">
      <div className="container w-full lg:mx-auto md:h-11 flex flex-col-reverse md:flex-row  md:justify-between">
        <a
          className="p-6 flex justify-center bg-tertiary md:bg-primary md:items-center md:p-0"
          href="#"
        >
          <img src={getirLogo} alt="" />
        </a>

        <nav className="flex gap-x-8 text-xs md:text-sm  font-semibold p-2">
          <a
            className="text-white flex items-center gap-x-2 text-opacity-80 hover:text-opacity-100 transition-colors"
            href=""
          >
            <AiOutlineGlobal size={20} />
            Türkçe (TR)
          </a>
          <a
            className="text-white flex items-center gap-x-2 text-opacity-80 hover:text-opacity-100 transition-colors"
            href=""
          >
            <AiOutlineUser size={20} />
            Giriş Yap
          </a>
          <a
            className="text-white flex items-center gap-x-2 text-opacity-80 hover:text-opacity-100 transition-colors"
            href=""
          >
            <AiOutlineUserAdd size={20} />
            Kayıt Ol
          </a>
        </nav>
      </div>
    </div>
  );
}
