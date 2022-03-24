import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ChevronRight } from "../icons";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(15, "Too Short").required("Required"),
});

const ContacForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        message: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        // same shape as initial values
        console.log(values);
        resetForm();
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="mt-4 rounded-md">
          <div className="grid w-full grid-cols-4 gap-4 ">
            <label className="text-lg text-gray-400 col-span-full md:col-span-2">
              Nombre y apellido
              <Field
                className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
                name="name"
              />
              {errors.name && touched.name && (
                <span className="text-red-500 text-">{errors.name}</span>
              )}
            </label>
            <label className="text-lg text-gray-400 col-span-full md:col-span-2">
              Teléfono
              <Field
                className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
                name="phone"
              />
              {errors.phone && touched.phone && (
                <span className="text-red-500 text-">{errors.phone}</span>
              )}
            </label>
            <label className="text-lg text-gray-400 col-span-full">
              Email
              <Field
                className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
                name="email"
                type="email"
              />
              {errors.email && touched.email && (
                <span className="text-red-500 text-">{errors.email}</span>
              )}
            </label>
            <label className="text-lg text-gray-400 col-span-full">
              Mensaje
              <Field
                className="w-full p-2 mt-2 border bg-[#EDF0F2] border-gray-400 rounded-md"
                name="message"
                component="textarea"
              />
              {errors.message && touched.message && (
                <span className="text-red-500 text-">{errors.message}</span>
              )}
            </label>
          </div>
          <div className="flex justify-end mt-4">
            <button
              disabled={isSubmitting}
              className="flex items-center text-primary"
              type="submit"
            >
              Enviar mensaje
              <span className="flex items-center justify-center w-6 h-6 ml-2 text-white rounded-full bg-primary">
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default ContacForm;
