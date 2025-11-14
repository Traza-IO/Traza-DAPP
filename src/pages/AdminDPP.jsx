
import { useState, useEffect } from 'react';
import { createActor } from '../declarations/backend';
import { useForm, useFieldArray } from 'react-hook-form';


const AdminDPP = () => {
  const canisterId =
    process.env.CANISTER_ID_BACKEND || 'uxrrr-q7777-77774-qaaaq-cai';
  const backend = createActor(canisterId);
  const [products, setProducts] = useState([]);
  const [gtinData, setGtinData] = useState({})
  const [colorBrand, setColorBrand] = useState('')

  const { register, handleSubmit, reset, control, watch, setValue } = useForm();
   const careArray = watch('care.care') || [];

  const addCare = () => {
    setValue('care.care', [...careArray, '']);
  };

  const removeCare = (index) => {
    setValue('care.care', careArray.filter((_, i) => i !== index));
  };

  const updateCare = (index, value) => {
    const newCare = [...careArray];
    newCare[index] = value;
    setValue('care.care', newCare);
  };
 // Para manejar arrays dinámicos
  const { fields: certiFields, append: appendCerti, remove: removeCerti} = useFieldArray({
    control,
    name: "compliance_process.certifications"
  });
  const { fields: supplierFields, append: appendSupplier, remove: removeSupplier } = useFieldArray({
    control,
    name: "trace_supplier"
  });

  const { fields: trbTimeLineFields, append: appendtrbTimeLineFields, remove: removetrbTimeLineFields } = useFieldArray({
    control,
    name: "traceability_batch.time_line"
  });
const { fields: trblotTimeLineFields, append: appendtrblotTimeLineFields, remove: removetrblotTimeLineFields } = useFieldArray({
    control,
    name: "traceability_blockchain_lot.time_line"
  });
const { fields: trbproTimeLineFields, append: appendtrbproTimeLineFields, remove: removetrbproTimeLineFields } = useFieldArray({
    control,
    name: "traceability_blockchain_product.time_line"
  });
const { fields: trproTimeLineFields, append: appendtrproTimeLineFields, remove: removetrproTimeLineFields } = useFieldArray({
    control,
    name: "traceability_product.time_line"
  });




  const { fields: compSupplierFields, append: appendCompSupplier, remove: removeCompSupplier } = useFieldArray({
    control,
    name: "compliance_supplier"
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await backend.getAllElements();
      setProducts(response);
    };

    fetchData();
  }, []);
  const getInfoFromDPP = async(gtin) =>{
    const response = await backend.getInfo(gtin);
    setGtinData(response)
     reset(response[0]);
     const colorBrandResp = await backend.getColorBrand(gtin);
     console.log("Color Brand:", colorBrandResp);
      setColorBrand(colorBrandResp[0] || '')
  };

   const onSubmit = async (data) => {
    await backend.createUnitData(data);
    await backend.uploadColorBrand(data.information_product.gtin, colorBrand);
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
                Lista de Productos Registrados
              </span>
            </div>
            <div className="bg-purple-500 rounded-lg shadow-lg p-4 w-11/12">
              <div className="w-full">
                <table className="border-collapse bg-orange-300 border border-gray-400 w-full">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 ">GTIN</th>
                      <th className="border border-gray-300">DESCRIPCIÓN</th>
                      <th className="border border-gray-300 w-1/12">Editar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((producto) => (
                      <tr>
                        <td className="border border-gray-300 ...">{producto.gtin}</td>
                        <td className="border border-gray-300 ...">{producto.description}</td>
                        <td className="border border-gray-300 ...">
                          <button className="bg-green-400 rounded-md" onClick={() => getInfoFromDPP(producto.gtin)}>
                            Editar
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="myForm">
      
      {/* Campos anidados - SÚPER FÁCIL */}
      <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Información Suelta</legend>
   <label>description_header</label>
<textarea
  {...register('description_header')}
  placeholder="description_header"
  className="border p-2 rounded w-full mb-2"
/>
   <label>color_brand</label>
<textarea
  value={colorBrand}
  onChange={(e) => setColorBrand(e.target.value)}
  placeholder="color_brand"
  className="border p-2 rounded w-full mb-2"
/>
<label>gtin_product</label>
<textarea
  {...register('gtin_product')}
  placeholder="gtin_product"
  className="border p-2 rounded w-full mb-2" disabled
/>

<label>id_lot</label>
<textarea
  {...register('id_lot')}
  placeholder="id_lot"
  className="border p-2 rounded w-full mb-2"
/>

<label>id_model</label>
<textarea
  {...register('id_model')}
  placeholder="id_model"
  className="border p-2 rounded w-full mb-2"
/>

<label>id_model_export</label>
<textarea
  {...register('id_model_export')}
  placeholder="id_model_export"
  className="border p-2 rounded w-full mb-2"
/>

<label>id_product_parent_company</label>
<textarea
  {...register('id_product_parent_company')}
  placeholder="id_product_parent_company"
  className="border p-2 rounded w-full mb-2"
/>

<label>id_product_system_eu</label>
<textarea
  {...register('id_product_system_eu')}
  placeholder="id_product_system_eu"
  className="border p-2 rounded w-full mb-2"
/>

<label>lot_number_product</label>
<textarea
  {...register('lot_number_product')}
  placeholder="lot_number_product"
  className="border p-2 rounded w-full mb-2"
/>

<label>name_model</label>
<textarea
  {...register('name_model')}
  placeholder="name_model"
  className="border p-2 rounded w-full mb-2"
/>

      </fieldset>

      {/* Packing */}
      <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Brand Information</legend>
       <label>ecommerce</label>
<textarea
  {...register('brand_information.ecommerce')}
  placeholder="ecommerce"
  className="border p-2 rounded w-full mb-2"
/> 
   <label>facebook</label>
<textarea
  {...register('brand_information.facebook')}
  placeholder="facebook"
  className="border p-2 rounded w-full mb-2"
/> 
   <label>instagram</label>
<textarea
  {...register('brand_information.instagram')}
  placeholder="instagram"
  className="border p-2 rounded w-full mb-2"
/> 
   <label>logo_mestiza</label>
<textarea
  {...register('brand_information.logo_mestiza')}
  placeholder="logo_mestiza"
  className="border p-2 rounded w-full mb-2"
/> 
   <label>whatsapp</label>
<textarea
  {...register('brand_information.whatsapp')}
  placeholder="whatsapp"
  className="border p-2 rounded w-full mb-2"
/> 
      </fieldset>

      {/* Array simple - Care Instructions */}
      <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Care Instructions</legend>
        
          {careArray.map((care, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              value={care}
              onChange={(e) => updateCare(index, e.target.value)}
              className="border p-2 rounded flex-1"
            />
            <button
              type="button"
              onClick={() => removeCare(index)}
              className="bg-red-500 text-white px-3 rounded"
            >
              ❌
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={addCare}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Care
        </button>
        
        <textarea
          {...register('care.description')}
          placeholder="Description"
          className="border p-2 rounded w-full mt-4"
          rows={3}
        />
      </fieldset>

      {/* Packing */}
      <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Description Model</legend>
     <label>collection</label>
<textarea
  {...register('description_model.collection')}
  placeholder="collection"
  className="border p-2 rounded w-full mb-2"
/>

<label>name</label>
<textarea
  {...register('description_model.name')}
  placeholder="name"
  className="border p-2 rounded w-full mb-2"
/>

<label>summary</label>
<textarea
  {...register('description_model.summary')}
  placeholder="summary"
  className="border p-2 rounded w-full mb-2"
/>
      </fieldset>

      {/* Packing */}
      <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Information Product</legend>
  <label>brand</label>
<textarea
  {...register('information_product.brand')}
  placeholder="brand"
  className="border p-2 rounded w-full mb-2"
/>

<label>category</label>
<textarea
  {...register('information_product.category')}
  placeholder="category"
  className="border p-2 rounded w-full mb-2"
/>

<label>color</label>
<textarea
  {...register('information_product.color')}
  placeholder="color"
  className="border p-2 rounded w-full mb-2"
/>

<label>gtin</label>
<textarea
  {...register('information_product.gtin')}
  placeholder="gtin"
  className="border p-2 rounded w-full mb-2"
/>

<label>name</label>
<textarea
  {...register('information_product.name')}
  placeholder="name"
  className="border p-2 rounded w-full mb-2"
/>

<label>product_code</label>
<textarea
  {...register('information_product.product_code')}
  placeholder="product_code"
  className="border p-2 rounded w-full mb-2"
/>

<label>product_code_eu</label>
<textarea
  {...register('information_product.product_code_eu')}
  placeholder="product_code_eu"
  className="border p-2 rounded w-full mb-2"
/>

<label>season</label>
<textarea
  {...register('information_product.season')}
  placeholder="season"
  className="border p-2 rounded w-full mb-2"
/>

<label>size</label>
<textarea
  {...register('information_product.size')}
  placeholder="size"
  className="border p-2 rounded w-full mb-2"
/>

<label>year</label>
<textarea
  {...register('information_product.year')}
  placeholder="year"
  className="border p-2 rounded w-full mb-2"
/>

      </fieldset>


 <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Materials</legend>
     <label>composition</label>
<textarea
  {...register('materials.composition')}
  placeholder="collection"
  className="border p-2 rounded w-full mb-2"
/>

 <label>percentage_recycling</label>
<textarea
  {...register('materials.percentage_recycling')}
  placeholder="percentage_recycling"
  className="border p-2 rounded w-full mb-2"
/>
 <label>recycling</label>
<textarea
  {...register('materials.recycling')}
  placeholder="recycling"
  className="border p-2 rounded w-full mb-2"
/>
 <label>recycling_income</label>
<textarea
  {...register('materials.recycling_income')}
  placeholder="recycling_income"
  className="border p-2 rounded w-full mb-2"
/>
      </fieldset>



       <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Packing</legend>
   <label>pack_type</label>
<textarea
  {...register('packing.pack_type')}
  placeholder="pack_type"
  className="border p-2 rounded w-full mb-2"
/>

<label>percentage_recycling</label>
<textarea
  {...register('packing.percentage_recycling')}
  placeholder="percentage_recycling"
  className="border p-2 rounded w-full mb-2"
/>

<label>recycling</label>
<textarea
  {...register('packing.recycling')}
  placeholder="recycling"
  className="border p-2 rounded w-full mb-2"
/>

<label>volume</label>
<textarea
  {...register('packing.volume')}
  placeholder="volume"
  className="border p-2 rounded w-full mb-2"
/>

<label>weight</label>
<textarea
  {...register('packing.weight')}
  placeholder="weight"
  className="border p-2 rounded w-full mb-2"
/>
      </fieldset>


           <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Photo Product</legend>
  <label>frontal</label>
<textarea
  {...register('photo_product.frontal')}
  placeholder="frontal"
  className="border p-2 rounded w-full mb-2"
/>

<label>later</label>
<textarea
  {...register('photo_product.later')}
  placeholder="later"
  className="border p-2 rounded w-full mb-2"
/>

<label>left</label>
<textarea
  {...register('photo_product.left')}
  placeholder="left"
  className="border p-2 rounded w-full mb-2"
/>

<label>right</label>
<textarea
  {...register('photo_product.right')}
  placeholder="right"
  className="border p-2 rounded w-full mb-2"
/>

      </fieldset>



      {/* Array simple - Care Instructions */}
      <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Compliance Process</legend>
        <label>Descripcion</label>

        <textarea
          {...register('compliance_process.process')}
          placeholder="Description"
          className="border p-2 rounded w-full mt-4"
          rows={3}
        />

        {certiFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <div className="grid grid-cols-4 gap-2">
            <label>Audit_date</label>
            <input
              {...register(`compliance_process.certifications.${index}.audit_date`)}
              className="border p-2 rounded flex-1"
              placeholder='Audit_date'
            />
              <label>effective_date</label>
            <input
              {...register(`compliance_process.certifications.${index}.effective_date`)}
              className="border p-2 rounded flex-1"
              placeholder='effective_date'
            />
              <label>link</label>
            <input
              {...register(`compliance_process.certifications.${index}.link`)}
              className="border p-2 rounded flex-1"
              placeholder='link'
            />
              <label>logo</label>
            <input
              {...register(`compliance_process.certifications.${index}.logo`)}
              className="border p-2 rounded flex-1"
              placeholder='logo'
            />
                 <label>name</label>
            <input
              {...register(`compliance_process.certifications.${index}.name`)}
              className="border p-2 rounded flex-1"
              placeholder='name'
            />
                 <label>number</label>
            <input
              {...register(`compliance_process.certifications.${index}.number`)}
              className="border p-2 rounded flex-1"
              placeholder='number'
            />
                 <label>organization</label>
            <input
              {...register(`compliance_process.certifications.${index}.organization`)}
              className="border p-2 rounded flex-1"
              placeholder='organization'
            />
            <button
              type="button"
              onClick={() => removeCerti(index)}
              className="bg-blue-500 string-white px-3 rounded"
            >
              ❌
            </button>
            </div>
            <hr/>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => appendCerti({ audit_date : '', effective_date : '',
      link : '',
      logo : '',
      name : '',
      number : '',
      organization : ''})}
          className="bg-blue-500 string-white px-4 py-2 rounded"
        >
          + Add Certification
        </button>
        
      </fieldset>
      {/* Array de objetos - Trace Suppliers */}

 {/* Arrays anidados - Compliance Supplier con Certifications */}
      <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Compliance Suppliers</legend>
        
        {/* Puedes usar useFieldArray anidado para compliance_supplier */}
        <input
          {...register('compliance_supplier.0.supplier')}
          placeholder="Supplier Name"
          className="border p-2 rounded w-full mb-2"
        />
        
        {compSupplierFields.map((supplier, sIndex) => (
        <SupplierSection 
          key={supplier.id} 
          supplierIndex={sIndex} 
          register={register} 
          control={control}
          onRemove={() => removeCompSupplier(sIndex)}
        />
        
      ))}
         <button
        type="button"  className="bg-blue-400 string-white px-3 py-1 rounded mt-2"
        onClick={() => appendCompSupplier({ supplier: '', certifications: [] })}
      >
        + Add Supplier
      </button>
      </fieldset>




      <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">Trace Suppliers</legend>
        
        {supplierFields.map((field, index) => (
          <div key={field.id} className="border p-3 rounded mb-3 bg-gray-50">
            <div className="grid grid-cols-2 gap-2">
              <input
                {...register(`trace_supplier.${index}.ruc`)}
                placeholder="RUC"
                className="border p-2 rounded"
              />
              
              <input
                {...register(`trace_supplier.${index}.title`)}
                placeholder="Title"
                className="border p-2 rounded"
              />
              
              <input
                {...register(`trace_supplier.${index}.coords`)}
                placeholder="Coords"
                className="border p-2 rounded"
              />
              
              <input
                {...register(`trace_supplier.${index}.location`)}
                placeholder="Location"
                className="border p-2 rounded"
              />
            </div>
            
            <button
              type="button"
              onClick={() => removeSupplier(index)}
              className="bg-red-500 string-white px-3 py-1 rounded mt-2"
            >
              Remove
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => appendSupplier({ ruc: '', title: '', coords: '', location: '' })}
          className="bg-green-500 string-white px-4 py-2 rounded"
        >
          + Add Supplier
        </button>
      </fieldset>
      {/* Array simple - Care Instructions */}
      <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">traceability_batch</legend>
        <label>location</label>

        <textarea
          {...register('traceability_batch.location')}
          placeholder="location"
          className="border p-2 rounded w-full mt-4"
          rows={3}
        />

        {trbTimeLineFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <div className="grid grid-cols-4 gap-2">
            <label>end_time</label>
            <input
              {...register(`traceability_batch.time_line.${index}.end_time`)}
              className="border p-2 rounded flex-1"
              placeholder='end_time'
            />
                    <label>owner</label>
            <input
              {...register(`traceability_batch.time_line.${index}.owner`)}
              className="border p-2 rounded flex-1"
              placeholder='owner'
            />      <label>process</label>
            <input
              {...register(`traceability_batch.time_line.${index}.process`)}
              className="border p-2 rounded flex-1"
              placeholder='process'
            />      <label>start_time</label>
            <input
              {...register(`traceability_batch.time_line.${index}.start_time`)}
              className="border p-2 rounded flex-1"
              placeholder='start_time'
            />
            <button
              type="button"
              onClick={() => removetrbTimeLineFields(index)}
              className="bg-blue-500 string-white px-3 rounded"
            >
              ❌
            </button>
            </div>
            <hr/>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => appendtrbTimeLineFields({ end_time : '', owner : '',
      process : '',
      start_time : ''})}
          className="bg-blue-500 string-white px-4 py-2 rounded"
        >
          + Add TimeLine register
        </button>
        
      </fieldset>
           <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">traceability_blockchain_lot</legend>


        {trblotTimeLineFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <div className="grid grid-cols-4 gap-2">
            <label>hash_end</label>
            <input
              {...register(`traceability_blockchain_lot.time_line.${index}.hash_end`)}
              className="border p-2 rounded flex-1"
              placeholder='hash_end'
            />
                    <label>hash_start</label>
            <input
              {...register(`traceability_blockchain_lot.time_line.${index}.hash_start`)}
              className="border p-2 rounded flex-1"
              placeholder='hash_start'
            />      <label>label_end</label>
            <input
              {...register(`traceability_blockchain_lot.time_line.${index}.label_end`)}
              className="border p-2 rounded flex-1"
              placeholder='label_end'
            />  
                <label>label_start</label>
            <input
              {...register(`traceability_blockchain_lot.time_line.${index}.label_start`)}
              className="border p-2 rounded flex-1"
              placeholder='label_start'
            />
                <label>process</label>
            <input
              {...register(`traceability_blockchain_lot.time_line.${index}.process`)}
              className="border p-2 rounded flex-1"
              placeholder='process'
            />
            <button
              type="button"
              onClick={() => removetrblotTimeLineFields(index)}
              className="bg-blue-500 string-white px-3 rounded"
            >
              ❌
            </button>
            </div>
            <hr/>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => appendtrblotTimeLineFields({  hash_end : '',    hash_start : '',
    label_end : '', label_start : '',   process : ''})}
          className="bg-blue-500 string-white px-4 py-2 rounded"
        >
          + Add TimeLine register
        </button>
        
      </fieldset>

                    <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">traceability_blockchain_product</legend>


        {trbproTimeLineFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <div className="grid grid-cols-4 gap-2">
            <label>hash_end</label>
            <input
              {...register(`traceability_blockchain_product.time_line.${index}.hash_end`)}
              className="border p-2 rounded flex-1"
              placeholder='hash_end'
            />
                    <label>hash_start</label>
            <input
              {...register(`traceability_blockchain_product.time_line.${index}.hash_start`)}
              className="border p-2 rounded flex-1"
              placeholder='hash_start'
            />      <label>label_end</label>
            <input
              {...register(`traceability_blockchain_product.time_line.${index}.label_end`)}
              className="border p-2 rounded flex-1"
              placeholder='label_end'
            />  
                <label>label_start</label>
            <input
              {...register(`traceability_blockchain_product.time_line.${index}.label_start`)}
              className="border p-2 rounded flex-1"
              placeholder='label_start'
            />
                <label>process</label>
            <input
              {...register(`traceability_blockchain_product.time_line.${index}.process`)}
              className="border p-2 rounded flex-1"
              placeholder='process'
            />
            <button
              type="button"
              onClick={() => removetrbproTimeLineFields(index)}
              className="bg-blue-500 string-white px-3 rounded"
            >
              ❌
            </button>
            </div>
            <hr/>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => appendtrbproTimeLineFields({  hash_end : '',    hash_start : '',
    label_end : '', label_start : '',   process : ''})}
          className="bg-blue-500 string-white px-4 py-2 rounded"
        >
          + Add TimeLine register
        </button>
        
      </fieldset>

            <fieldset className="border p-4 rounded">
        <legend className="string-xl font-bold">traceability_product</legend>
        <label>Company Name</label>

        <textarea
          {...register('traceability_product.company_name')}
          placeholder="location"
          className="border p-2 rounded w-full mt-4"
          rows={3}
        />
<label>full_name</label>

        <textarea
          {...register('traceability_product.full_name')}
          placeholder="full_name"
          className="border p-2 rounded w-full mt-4"
          rows={3}
        />
        <label>ruc</label>

        <textarea
          {...register('traceability_product.ruc')}
          placeholder="ruc"
          className="border p-2 rounded w-full mt-4"
          rows={3}
        />
        {trproTimeLineFields.map((field, index) => (
          <div key={field.id} className="flex gap-2 mb-2">
            <div className="grid grid-cols-4 gap-2">
            <label>end_time</label>
            <input
              {...register(`traceability_product.time_line.${index}.end_time`)}
              className="border p-2 rounded flex-1"
              placeholder='end_time'
            />
                    <label>owner</label>
            <input
              {...register(`traceability_product.time_line.${index}.owner`)}
              className="border p-2 rounded flex-1"
              placeholder='owner'
            />      <label>process</label>
            <input
              {...register(`traceability_product.time_line.${index}.process`)}
              className="border p-2 rounded flex-1"
              placeholder='process'
            />      <label>start_time</label>
            <input
              {...register(`traceability_product.time_line.${index}.start_time`)}
              className="border p-2 rounded flex-1"
              placeholder='start_time'
            />
            <button
              type="button"
              onClick={() => removetrproTimeLineFields(index)}
              className="bg-blue-500 string-white px-3 rounded"
            >
              ❌
            </button>
            </div>
            <hr/>
          </div>
        ))}
        
        <button
          type="button"
          onClick={() => appendtrproTimeLineFields({ end_time : '', owner : '',
      process : '',
      start_time : ''})}
          className="bg-blue-500 string-white px-4 py-2 rounded"
        >
          + Add TimeLine register
        </button>
        
      </fieldset>

    </form>
        </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

// Componente separado para cada supplier
function SupplierSection({ supplierIndex, register, control, onRemove }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `compliance_supplier.${supplierIndex}.certifications`
  });

  return (
    <div className="border p-4 mb-4">
      <input
        {...register(`compliance_supplier.${supplierIndex}.supplier`)}
        placeholder="Supplier Name"
        className="border p-2 w-full mb-4"
      />

      <h4>Certifications:</h4>
      {fields.map((cert, cIndex) => (
        <div key={cert.id} className="border p-3 mb-2">
          <input
            {...register(`compliance_supplier.${supplierIndex}.certifications.${cIndex}.name`)}
            placeholder="Cert Name"
            className="border p-2 w-full mb-2"
          />
          <input
            {...register(`compliance_supplier.${supplierIndex}.certifications.${cIndex}.number`)}
            placeholder="Number"
            className="border p-2 w-full mb-2"
          />
          <input
            {...register(`compliance_supplier.${supplierIndex}.certifications.${cIndex}.organization`)}
            placeholder="Organization"
            className="border p-2 w-full mb-2"
          />
           <input
            {...register(`compliance_supplier.${supplierIndex}.certifications.${cIndex}.audit_date`)}
            placeholder="audit_date"
            className="border p-2 w-full mb-2"
          />
            <input
            {...register(`compliance_supplier.${supplierIndex}.certifications.${cIndex}.effective_date`)}
            placeholder="effective_date"
            className="border p-2 w-full mb-2"
          />
            <input
            {...register(`compliance_supplier.${supplierIndex}.certifications.${cIndex}.link`)}
            placeholder="link"
            className="border p-2 w-full mb-2"
          />
              <input
            {...register(`compliance_supplier.${supplierIndex}.certifications.${cIndex}.logo`)}
            placeholder="logo"
            className="border p-2 w-full mb-2"
          />
          <button className="bg-red-400 string-white px-3 py-1 rounded mt-2" type="button" onClick={() => remove(cIndex)}>
            Remove Cert
          </button>
        </div>
      ))}

      <button
        type="button" className="bg-blue-400 string-white px-3 py-1 rounded mt-2"
        onClick={() => append({
          audit_date: '',
          effective_date: '',
          link: '',
          logo: '',
          name: '',
          number: '',
          organization: ''
        })}
      >
        + Add Certification
      </button>

      <button type="button" onClick={onRemove} className="bg-red-400 string-white px-3 py-1 rounded mt-2">
        Remove Supplier
      </button>
    </div>
  );
}
export default AdminDPP;
