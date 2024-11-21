"use client";

import imgBussiness from "../../assets/logo-mestiza.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoCart } from "react-icons/io5";

const Materials = () => {
  return (
    <div className="flex items-start justify-between max-w-[1024px] mx-auto mt-4 px-4 w-full">
      <div className="max-md:text-center max-md:mb-4 w-full">
        <h4 className="font-bold text-[#5f6259] text-[15px] text-left">
          Materiales
        </h4>
        <ul className="p-0 text-left">
          <li className="text-[11px] text-[#5f6259]">100% algodón tangüis</li>
          <li className="text-[11px] text-[#5f6259]">100% tintes ecológicos</li>
        </ul>
      </div>
      <div className="max-md:text-center max-md:mb-4 w-full">
        <h4 className="font-bold text-[#5f6259] text-[15px] uppercase">
          hooded sweatshirt
        </h4>
        <ul>
          <li className="text-[14px] mt-3">Trazable</li>
        </ul>
      </div>
      <div className="max-md:text-center max-md:mb-4 w-full">
        <h4 className="font-bold text-[#5f6259] text-[15px]">Empresa</h4>
        <figure>
          <img
            src={imgBussiness}
            width={100}
            alt={imgBussiness}
            className="block mx-auto"
          />
        </figure>
        <div className="w-full flex justify-between max-w-[90px] mx-auto mt-2">
          <button>
            <FaFacebookSquare color="#acb2a8" size={18} />
          </button>
          <button>
            <FaInstagram color="#acb2a8" size={18} />
          </button>
          <button>
            <FaWhatsapp color="#acb2a8" size={18} />
          </button>
          <button>
            <IoCart color="#acb2a8" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Materials;
