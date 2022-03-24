import React from "react";

const ScheduleAnAppointment = ({ errors, values, handleChange }: any) => {
  return (
    <>
      <h3 className="mb-10 text-2xl font-semibold text-center">
        Agendar de cita
      </h3>

      <div className="grid w-full grid-cols-4 gap-4 ">
        <div className="mb-4 col-span-full">
          <div className="flex flex-col">
            <label>
              Sede Chacao
              <input
                className="ml-4"
                name="agency"
                type="radio"
                value="Sede Chacao"
                onChange={handleChange}
              />
            </label>
            <label>
              Sede Los Palos Grandes
              <input
                className="ml-4"
                name="agency"
                type="radio"
                value="Sede Los Palos Grandes"
                onChange={handleChange}
              />
            </label>
            {errors.agency && (
              <span className="text-red-500 text-">{errors.agency}</span>
            )}
          </div>
        </div>

        <label className="text-lg col-span-full md:col-span-2">
          Fechas Disponibles
          <input
            className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
            name="date"
            type="date"
            value={values.date}
            onChange={handleChange}
          />
          {errors.date && (
            <span className="text-red-500 text-">{errors.date}</span>
          )}
        </label>
        <label className="text-lg col-span-full md:col-span-2">
          Modelo de vehiculo
          <input
            className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
            name="hour"
            value={values.hour}
            onChange={handleChange}
          />
          {errors.hour && (
            <span className="text-red-500 text-">{errors.hour}</span>
          )}
        </label>
      </div>
    </>
  );
};

export default ScheduleAnAppointment;
