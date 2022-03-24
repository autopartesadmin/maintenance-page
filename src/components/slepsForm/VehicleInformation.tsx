import React from "react";

const VehicleInformation = ({ errors, values, handleChange }: any) => {
  return (
    <>
      <h3 className="mb-10 text-2xl font-semibold text-center">
        Información sobre su Vehiculo
      </h3>
      <>
        <div className="grid w-full grid-cols-4 gap-4 ">
          <label className="text-lg col-span-full md:col-span-2">
            Modelo de vehiculo
            <input
              className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
              name="vehicleModel"
              value={values.vehicleModel}
              onChange={handleChange}
            />
            {errors.vehicleModel && (
              <span className="text-red-500 text-">{errors.vehicleModel}</span>
            )}
          </label>
          <label className="text-lg col-span-full md:col-span-2">
            Placa del Vehiculo
            <input
              className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
              name="vehicleLicensePlate"
              onChange={handleChange}
              value={values.vehicleLicensePlate}
            />
            {errors.vehicleLicensePlate && (
              <span className="text-red-500 text-">
                {errors.vehicleLicensePlate}
              </span>
            )}
          </label>
          <label className="text-lg col-span-full md:col-span-2">
            Número de Carrocería
            <input
              className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
              name="BodyNumber"
              onChange={handleChange}
              value={values.BodyNumber}
            />
            {errors.BodyNumber && (
              <span className="text-red-500 text-">{errors.BodyNumber}</span>
            )}
          </label>
          <label className="text-lg col-span-full md:col-span-2">
            Color superior e inferior
            <input
              className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
              name="topAndBottomColor"
              value={values.topAndBottomColor}
              onChange={handleChange}
            />
            {errors.topAndBottomColor && (
              <span className="text-red-500 text-">
                {errors.topAndBottomColor}
              </span>
            )}
          </label>
          <label className="text-lg col-span-full md:col-span-2">
            Año del Vehiculo
            <input
              className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
              name="yearOfVehicle"
              value={values.yearOfVehicle}
              onChange={handleChange}
            />
            {errors.yearOfVehicle && (
              <span className="text-red-500 text-">{errors.yearOfVehicle}</span>
            )}
          </label>
          <label className="text-lg col-span-full md:col-span-2">
            Tapicería
            <input
              className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
              name="Upholstery"
              value={values.Upholstery}
              onChange={handleChange}
            />
            {errors.Upholstery && (
              <span className="text-red-500 text-">{errors.Upholstery}</span>
            )}
          </label>
        </div>
      </>
    </>
  );
};

export default VehicleInformation;
