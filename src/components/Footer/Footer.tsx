
import Logo from "../../assets/logo-traza-w.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-8 mb-[90px]">
      <p className="text-[14px] mb-3">
        Con trazabilidad cada prenda cuenta su historia ...
      </p>
      <figure>
        <img src={Logo} width={200} alt="Mestiza" />
      </figure>
    </div>
  );
};

export default Footer;
