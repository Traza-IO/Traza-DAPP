import { Link, useLocation } from "react-router-dom";

import {
  FaInfoCircle,
  FaDashcube,
  FaInfinity,
  FaShareAlt,
  FaLeaf,
} from "react-icons/fa";

const Nav = () => {
  const location = useLocation(); // Hook de react-router-dom
  const pathname = location.pathname;

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed w-full bottom-0 left-0 right-0 bg-[#f5f5f4] shadow-lg">
      <ul className="flex w-full">
        <li
          className={`flex-1 ${
            isActive("/") ? "bg-[#797f75] text-white" : "text-[#5f6259]"
          }`}
        >
          <Link to="/:lng" className="py-3 block text-center">
            <FaInfoCircle className="mx-auto" size={24} />
            <span className="text-[10px]">Producto</span>
          </Link>
        </li>
        <li
          className={`flex-1 ${
            isActive("/traceability")
              ? "bg-[#797f75] text-white"
              : "text-[#5f6259]"
          }`}
        >
          <Link to="/:lng/traceability" className="py-3 block text-center">
            <FaDashcube className="mx-auto" size={24} />
            <span className="text-[10px]">Trazabilidad</span>
          </Link>
        </li>
        <li
          className={`flex-1 ${
            isActive("/sustainability")
              ? "bg-[#797f75] text-white"
              : "text-[#5f6259]"
          }`}
        >
          <Link to="/:lng/sustainability" className="py-3 block text-center">
            <FaLeaf className="mx-auto" size={24} />
            <span className="text-[10px]">Sostenibilidad</span>
          </Link>
        </li>
        <li
          className={`flex-1 ${
            isActive("/blockchain")
              ? "bg-[#797f75] text-white"
              : "text-[#5f6259]"
          }`}
        >
          <Link to="/:lng/blockchain" className="py-3 block text-center">
            <FaInfinity className="mx-auto" size={24} />
            <span className="text-[10px]">Blockchain</span>
          </Link>
        </li>
        <li
          className={`flex-1 ${
            isActive("/compartir")
              ? "bg-[#797f75] text-white"
              : "text-[#5f6259]"
          }`}
        >
          <Link to="/:lng/share" className="py-3 block text-center">
            <FaShareAlt className="mx-auto" size={24} />
            <span className="text-[10px]">Compartir</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
