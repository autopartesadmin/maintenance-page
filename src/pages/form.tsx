import * as React from "react";
import { Title } from "@/components";
import { FormikWizard } from "formik-wizard-form";
import * as Yup from "yup";
import {
  PersonalDetails,
  TypeOfService,
  VehicleInformation,
  ScheduleAnAppointment,
} from "@/components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const AgendaForm = () => {
  const [finishPage, setFinishPage] = React.useState(false);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <div className="mb-36">
      <Title
        title="Et tortor ultricies posuere eget sit cras."
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id donec ut diam duis enim consectetur convallis non. Pharetra, diam ultricies."
      />
      <FormikWizard
        initialValues={{}}
        onSubmit={(values) => {
          console.log(values);
          setFinishPage(!finishPage);
        }}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: PersonalDetails,
            validationSchema: Yup.object().shape({
              name: Yup.string().required("Campo requerido requerido"),
              email: Yup.string().email().required("Campo requerido requerido"),
              phone: Yup.string()
                .required("Campo requerido requerido")
                .matches(phoneRegExp, "Teléfono de teleono invalido"),
              identificationNumber: Yup.number().required(
                "Campo requerido requerido"
              ),
            }),
          },
          {
            component: TypeOfService,
            validationSchema: Yup.object().shape({
              typeOfService: Yup.string().required("Campo requerido requerido"),
              service: Yup.string().required("Campo requerido requerido"),
              additionalDetails: Yup.string().required(
                "Campo requerido requerido"
              ),
            }),
          },
          {
            component: VehicleInformation,
            validationSchema: Yup.object().shape({
              vehicleModel: Yup.string().required("Campo requerido requerido"),
              vehicleLicensePlate: Yup.string().required(
                "Campo requerido requerido"
              ),
              topAndBottomColor: Yup.string().required(
                "Campo requerido requerido"
              ),
              yearOfVehicle: Yup.string().required("Campo requerido requerido"),
              Upholstery: Yup.string().required("Campo requerido requerido"),
              BodyNumber: Yup.string().required("Campo requerido requerido"),
            }),
          },
          {
            component: ScheduleAnAppointment,
            validationSchema: Yup.object().shape({
              date: Yup.string().required("Campo requerido requerido"),
              hour: Yup.string().required("Campo requerido requerido"),
              agency: Yup.string().required("Campo requerido requerido"),
            }),
          },
        ]}
      >
        {({
          renderComponent,
          handlePrev,
          handleNext,
          isNextDisabled,
          isPrevDisabled,
          isLastStep,
          currentStepIndex,
        }) => (
          <>
            <div className="relative flex flex-wrap justify-between">
              <div
                className={`z-0 w-full h-2 overflow-hidden rounded translate-y-9 ${
                  finishPage ? "bg-[#E7B864]" : "bg-primary"
                }`}
              />

              <span
                className={`z-10 flex items-center justify-center w-16 h-16 text-white rounded-full ${
                  Number(currentStepIndex) >= 0 ? "bg-[#E7B864]" : "bg-primary"
                }`}
              >
                01
              </span>
              <span
                className={`z-10 flex items-center justify-center w-16 h-16 text-white rounded-full bg-primary ${
                  Number(currentStepIndex) >= 1 ? "bg-[#E7B864]" : "bg-primary"
                }`}
              >
                02
              </span>
              <span
                className={`z-10 flex items-center justify-center w-16 h-16 text-white rounded-full bg-primary ${
                  Number(currentStepIndex) >= 2 ? "bg-[#E7B864]" : "bg-primary"
                }`}
              >
                03
              </span>
              <span
                className={`z-10 flex items-center justify-center w-16 h-16 text-white rounded-full bg-primary ${
                  Number(currentStepIndex) >= 3 ? "bg-[#E7B864]" : "bg-primary"
                }`}
              >
                04
              </span>
            </div>
            <div className="p-10 mt-10 rounded-lg shadow-[0px_4px_25px_rgba(124,128,132,0.2)]">
              {!finishPage ? (
                <>
                  {renderComponent()}

                  <div className="mt-10">
                    {!isPrevDisabled && (
                      <button
                        onClick={handlePrev}
                        disabled={isPrevDisabled}
                        className="flex items-center text-primary"
                        type="submit"
                      >
                        Atras
                        <span className="flex items-center justify-center w-6 h-6 ml-2 text-white rounded-full bg-primary">
                          <AiOutlineLeft className="w-4 h-4" />
                        </span>
                      </button>
                    )}
                    <button
                      onClick={handleNext}
                      disabled={isNextDisabled}
                      className="flex items-center text-primary"
                      type="submit"
                    >
                      {isLastStep ? "Enviar" : "Siguiente"}
                      <span className="flex items-center justify-center w-6 h-6 ml-2 text-white rounded-full bg-primary">
                        <AiOutlineRight className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="mb-10 text-3xl font-semibold text-center">
                    Gracias por solicitar tu cita
                  </h4>
                  <p className="max-w-3xl mx-auto tracking-widest text-center text-opacity-60">
                    Estas a un paso de realizar el servicio de tu carro,
                    estaremos en contacto contigo a traves de tu correo
                    eléctronico
                  </p>
                </>
              )}
            </div>
          </>
        )}
      </FormikWizard>
    </div>
  );
};

export default AgendaForm;
