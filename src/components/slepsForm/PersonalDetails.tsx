import React from "react";

const PersonalDetails = ({ errors, values, handleChange }: any) => {
  return (
    <>
      <h3 className="mb-10 text-2xl font-semibold text-center">
        Datos Personales
      </h3>

      <div className="grid w-full grid-cols-4 gap-4 ">
        <label className="text-lg col-span-full md:col-span-2">
          Nombre y apellido
          <input
            className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="text-red-500 text-">{errors.name}</span>
          )}
        </label>
        <label className="text-lg col-span-full md:col-span-2">
          C.l
          <input
            className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
            name="identificationNumber"
            onChange={handleChange}
            value={values.identificationNumber}
          />
          {errors.identificationNumber && (
            <span className="text-red-500 text-">
              {errors.identificationNumber}
            </span>
          )}
        </label>
        <label className="text-lg col-span-full md:col-span-2">
          Teléfono
          <input
            className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
            name="phone"
            onChange={handleChange}
            value={values.phone}
          />
          {errors.phone && (
            <span className="text-red-500 text-">{errors.phone}</span>
          )}
        </label>
        <label className="text-lg col-span-full md:col-span-2">
          Email
          <input
            className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500 text-">{errors.email}</span>
          )}
        </label>
      </div>
    </>
  );
};

export default PersonalDetails;
