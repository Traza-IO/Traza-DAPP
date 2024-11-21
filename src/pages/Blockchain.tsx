import { MdOutlineContentCopy } from "react-icons/md";

const Blockchain = () => {
  return (
    <div className="max-w-[1024px] mx-auto mt-6">
      <h5 className="mt-5 p-3 bg-[#acb2a8] font-bold">Confección</h5>
      <div className="px-5">
        <p className="mt-5 text-[#45483d] font-bold mb-3">
          Localizacion y Diseño:
        </p>
        <ul className="mb-3">
          <li className="mb-4">
            <p className="text-[13px] mb-2">
              Código de transacción de Localización e inicio de Diseño (Hash):
            </p>
            <div className="border border-solid border-[#acb2a8] px-5 py-3 flex justify-between">
              <span className="text-[13px]">
                0xwefbqwubggkagaighierheigwii2er
              </span>
              <button>
                <MdOutlineContentCopy className="text-[#45483d] text-[20px] ml-3" />
              </button>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-[13px] mb-2">
              Código de transacción de Localización e inicio de Diseño (Hash):
            </p>
            <div className="border border-solid border-[#acb2a8] px-5 py-3 flex justify-between">
              <span className="text-[13px]">
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
