import { useState } from "react"

export const ModalCoockies = () => {
  const [viewModal, setViewModal] = useState(true)
  return viewModal ? (
    <div
      className="p-5 fixed bottom-3 rounded-[10px] bg-[#45483d] left-[2%] right-[2%] z-[2] flex flex-col md:flex-row justify-center gap-4 items-center">
      <p className="text-white leading-[1.2]">Nosotros utilizamos cookies propias para obtener datos estadisticos de la navegacion de los usuarios y mejorar nuestros servicios. Leer mas informacion.</p>
      <button
        onClick={() => setViewModal(false)}
        className="border-2 border-solid border-[#acb2a8] rounded-[5px] h-[38px] items-center text-white max-md:mt-3 min-w-[150px]"
      >Aceptar</button>
    </div>
  ) : null
}
