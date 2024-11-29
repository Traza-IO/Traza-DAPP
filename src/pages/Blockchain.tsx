import { MdOutlineContentCopy } from 'react-icons/md';
import icp from '../assets/icp.png';
const Blockchain = () => {
  return (
    <div className="max-w-[1024px] mx-auto mt-8 px-5">
      <figure className="flex items-center justify-center max-w-[220px] mx-auto">
        <img src={icp} alt="" />
      </figure>
      <div className="text-center mt-4">
        <h4 className="text-[#45483d] dark:text-white font-bold text-[17px]">
          Polerón con Capucha{' '}
        </h4>
        <p className="text-[#45483d] dark:text-white"> GTIN: 17751234567890 </p>
      </div>
      <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold dark:bg-[#5f6259] dark:text-white">
        Confección
      </h5>
      <div className="px-5">
        <p className="mt-5 text-[#45483d] font-bold mb-3 dark:text-white">
          Localizacion y Diseño:
        </p>
        <ul className="mb-3">
          <li className="mb-4">
            <p className="text-[13px] mb-2 dark:text-white">
              Código de transacción de Localización e inicio de Diseño (Hash):
            </p>
            <div className="border border-solid border-[#acb2a8] px-5 py-3 flex justify-between">
              <span className="text-[13px] dark:text-white">
                0xwefbqwubggkagaighierheigwii2er
              </span>
              <button>
                <MdOutlineContentCopy className="text-[#45483d] text-[20px] ml-3" />
              </button>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-[13px] mb-2 dark:text-white">
              Código de transacción de Localización e inicio de Diseño (Hash):
            </p>
            <div className="border border-solid border-[#acb2a8] dark:border-[#ffffff] px-5 py-3 flex justify-between">
              <span className="text-[13px] dark:text-white">
                0xwefbqwubggkagaighierheigwii2er
              </span>
              <button>
                <MdOutlineContentCopy className="text-[#45483d] text-[20px] ml-3" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blockchain;
