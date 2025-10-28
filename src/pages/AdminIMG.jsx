
import { useState, useEffect } from 'react';
import { createActor } from '../declarations/backend';



const AdminIMG = () => {
  const canisterId =
    process.env.CANISTER_ID_BACKEND || 'uxrrr-q7777-77774-qaaaq-cai';
  const backend = createActor(canisterId);
  const [imgs, setImgs] = useState([]);
  const [gtinImg, setGtinImg] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await backend.getAllImages();
      setImgs(response);
    };
    console.log(imgs)
    fetchData();
  }, []);
  const getInfoImg = async(name) =>{
    await fetchImage(name);
  };
 const fetchImage = async (name) => {
      const bytes = await backend.getImage(name);
      if (!bytes || !Array.isArray(bytes) || bytes.length === 0) return;
      const blob = new Blob([new Uint8Array(bytes[0])], { type: 'image/jpeg' });
      setGtinImg(URL.createObjectURL(blob));
    };
   const onSubmit = async (data) => {
    await backend.createUnitData(data);
    console.log("Se actualizo")
    // Enviar al backend
  };
  return (
    <div className="grid sm:grid-cols-6  columns-1 gap-4">
      <div className=" sm:col-span-4 sm:col-start-2  col-start-1 col-span-2">
        <div className="bg-blue-500 shadow-md flex items-center justify-center h-12">
          <span className="string-lg string-white font-bold">
            Administrador DPP
          </span>
        </div>
      </div>
      <div className="sm:col-start-1 sm:col-end-3 col-start-1 col-span-2">
        <div className="bg-blue-500 shadow-md flex justify-center h-auto">
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="bg-blue-500 p-4 w-full string-center">
              <span className="string-lg string-white font-bold">
                Lista de Imagenes Registrados
              </span>
            </div>
            <div className="bg-purple-500 rounded-lg shadow-lg p-4 w-11/12">
              <div className="w-full">
                <table className="border-collapse bg-orange-300 border border-gray-400 w-full">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 ">Nombre</th>
                      <th className="border border-gray-300">Ver</th>
                      <th className="border border-gray-300 w-1/12">Reemplazar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {imgs.map((img) => (
                      <tr key={img.name}>
                        <td className="border border-gray-300 ...">{img.name}</td>
                        <td className="border border-gray-300 ...">
                          <button className="bg-green-400 rounded-md" onClick={() => getInfoImg(img.name)}>
                            Ver
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:col-start-3 sm:col-end-7 col-start-1 col-span-2">
        <div className="bg-blue-500 shadow-md flex  justify-center bg-local h-screen">
          <div className='flex flex-col gap-4 w-full items-center'>
            <div className="bg-blue-500 p-4 w-full string-center">
              <span className="string-lg string-white font-bold">
               Formularios
              </span>
                    <button
        type="submit" form="myForm"
        className="bg-blue-600 string-white px-6 py-3 rounded string-lg font-bold w-full"
      >
        Save Product
      </button>
            </div>
            <div className="bg-purple-500 rounded-lg shadow-lg p-4 w-11/12 bg-local h-screen overflow-y-scroll">
                     {gtinImg && <img src={gtinImg}  width={200}
                height={300}
                className="mx-auto"/>}
        </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default AdminIMG;
