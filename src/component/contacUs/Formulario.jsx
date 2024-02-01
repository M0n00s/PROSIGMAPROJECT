import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";

const validationSchema = yup.object().shape({
  nombre: yup.string().required().min(3),
  correo: yup.string().required().email(),
  subject: yup.string().required(),
  mensaje: yup.string().required(),
});

const policy = `Comprehensive privacy notice
PROSIGMA, with address in Miami FL and internet portal www.prosigmausa.com, is responsible for the use and protection of your personal data, and in this regard we inform you of the following:
For what purposes will we use your personal data?
We will use the personal data that we collect from you for the following purposes that are necessary for the service you request:
Reply to contact form messages
What personal data will we use for these purposes?
To carry out the purposes described in this privacy notice, we will use the following personal data:
Identification and contact data
How can you access, rectify or cancel your personal data, or oppose its use or exercise the revocation of consent?
You have the right to know what personal data we have about you, what we use it for and the conditions of use we give it (Access). Likewise, it is your right to request the correction of your personal information if it is outdated, inaccurate or incomplete (Rectification); that we delete it from our records or databases when we consider that it is not being used appropriately (Cancellation); as well as oppose the use of your personal data for specific purposes (Opposition). These rights are known as ARCO rights.
To exercise any of the ARCO rights, you must send a request via email to info@prosigmausa.com and it must contain:
Full name of the owner.
Email used on this website.
Matter “ARCO Rights”
Description of the purpose of the writing, which may be, but are not limited to, the following: Revocation of consent to process your personal data; and/or Notification of improper use of the processing of your personal data; and/or Exercise your ARCO Rights, with a clear and precise description of the data to Access, Rectify, Cancel or Oppose. In the case of rectification of personal data, you must indicate the exact modification and attach the supporting documentation; It is important in the event of revocation of consent, that you bear in mind that not in all cases we will be able to respond to your request or conclude the use immediately, since it is possible that due to some legal obligation we require to continue processing your personal data. Likewise, you must consider that for certain purposes, the revocation of your consent will imply that we will not be able to continue providing the service you requested from us, or the conclusion of your relationship with us.
In how many days will we respond to your request?
5 days
By what means will we communicate the response to your request?
To the same email from which the request was sent.
How can you find out about changes to this privacy notice?
This privacy notice may be modified, changed or updated due to new legal requirements; of our own needs for the products or services we offer; of our privacy practices; Changes in our business model, or other causes. We are committed to keeping this privacy notice updated regarding any changes it may undergo and you can always consult any updates that exist on the website www.prosigmausa.com.
Last update of this privacy notice: 02/01/2024`;

export const Formulario = () => {
  const [spiner, setspiner] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const handlePolicy = () => {
    Swal.fire({
      text: policy,
    });
  };
  return (
    <Formik
      initialValues={{
        nombre: "",
        correo: "",
        subject: "",
        mensaje: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(valores, { resetForm }) => {
        console.log({ valores });
        resetForm();
        setspiner(true);
        // console.log("submit");

        // email js
        // emailjs
        //   .send(
        //     "service_0vc8lgs",
        //     "template_0shbg89",
        //     { ...valores },
        //     "vQxZH2SWWh0zMBOMa"
        //   )
        //   .then(
        //     function () {
        //       // console.log("SUCCESS!", response.status, response.text);
        //       Swal.fire(
        //         `informacion enviada`,
        //         `Gracias por confiar en nosotros, en breve nos comunicaremos con usted`,
        //         "success"
        //       );
        //       setspiner(false);
        //     },
        //     function () {
        //       // console.log("FAILED...", error);
        //       Swal.fire("oh ohh!", `ha pasado un error!`, "error");
        //       setspiner(false);
        //     }
        //   );
      }}

      //
    >
      {({ errors, touched }) => (
        <Form className="form">
          <div className="formbox1Container">
            <div className="">
              <Field
                className={`${
                  errors.nombre && touched.nombre && "errorInput"
                }  inputbox`}
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Name"
                autoComplete="off"
              />
            </div>
            <div className="">
              <Field
                className={`${
                  errors.correo && touched.correo && "errorInput"
                }  inputbox`}
                type="text"
                id="correo"
                name="correo"
                placeholder="Email"
              />
            </div>
          </div>
          {/* asunto */}
          <div className="">
            <Field
              className={`${
                errors.subject && touched.subject && "errorInput"
              } inputbox`}
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              autoComplete="off"
            />
          </div>
          {/* textarea */}
          <div className="">
            <Field
              as="textarea"
              className={`${
                errors.mensaje && touched.mensaje && "errorInput"
              } inputbox textArea`}
              type="textarea"
              id="mensaje"
              name="mensaje"
              placeholder="Write your message here"
              autoComplete="off"
            />
          </div>
          {/* textos y botones */}
          <div className="contact_terminosContainer ">
            <div className="terminosContainer ">
              <input
                type="checkbox"
                value={privacy}
                onClick={() => setPrivacy(!privacy)}
                className=" "
              />
              <label className="">
                I accept the{" "}
                <span onClick={handlePolicy} className="">
                  security terms
                </span>
              </label>
            </div>
            <button
              type="submit"
              disabled={!privacy}
              className={`${!privacy ? "buttonDisabled" : "button"}  `}
            >
              {spiner ? (
                <>
                  <IoReloadOutline size={25} />
                  <p>Sending </p>
                </>
              ) : (
                <>
                  <FaRegPaperPlane size={25} />
                  <p>Send </p>
                </>
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
