import React from "react";

const TypeOfService = ({ errors, values, handleChange }: any) => {
  return (
    <>
      <h3 className="mb-10 text-2xl font-semibold text-center">
        Tipo de Servicio
      </h3>
      <div className="flex flex-col">
        <div className="flex flex-col w-full mb-4">
          <label>
            Mantenimiento
            <input
              className="ml-4"
              name="typeOfService"
              type="radio"
              value="mantenimiento"
              onChange={handleChange}
            />
          </label>
          <label>
            Mecánica
            <input
              className="ml-4"
              name="typeOfService"
              type="radio"
              value="mecanica"
              onChange={handleChange}
            />
          </label>
          {errors.typeOfService && (
            <span className="text-red-500 text-">{errors.typeOfService}</span>
          )}
        </div>
        <label className="w-full mb-4">
          Selecciona el servicio
          <select
            className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
            name="service"
            onChange={handleChange}
            value={values.service}
          >
            <option value="">--Seleciona un valor --</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          {errors.service && (
            <span className="text-red-500 text-">{errors.service}</span>
          )}
        </label>
        <label className="w-full">
          Detalles Adicionales
          <textarea
            className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
            name="additionalDetails"
            onChange={handleChange}
            value={values.additionalDetails}
          />
          {errors.additionalDetails && (
            <span className="text-red-500 text-">
              {errors.additionalDetails}
            </span>
          )}
        </label>
      </div>
    </>
  );
};

export default TypeOfService;
