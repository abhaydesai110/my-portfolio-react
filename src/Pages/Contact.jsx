import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const initialValues = { from_name: "", email: "", message: "" };

  const validationSchema = Yup.object().shape({
    from_name: Yup.string().required("Name is Required!"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required!"),
    message: Yup.string().required("Message is Required!"),
  });

  const onSubmit = (values) => {
    console.log("values", values);
    emailjs
      .sendForm(
        "service_65yr8m5",
        "template_1nxje1f",
        form.current,
        "nQnP1slWK_--QRpO-"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.success("Email sent successfully: ", {
            icon: "🚀",
          });
          resetForm({
            from_name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
        }
      );
  };
  return (
    <div
      className=""
      // style={{ backgroundImage: `url('../src/assets/img/Experience.jpg')` }}
    >
      <div className="container py-16 md:py-20" id="contacts">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
            Feel free to share any additional details or questions you may have.
            Once you've filled out this contact form, please click the "Submit"
            button below. Our team will review your information and get back to
            you as soon as possible to discuss your project in more detail and
            explore how we can assist you in achieving your goals.
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleBlur }) => (
            <Form ref={form} className="mx-auto w-full pt-10 sm:w-3/4">
              <div className="flex flex-col w-full md:flex-row">
                <div className="flex w-full md:w-1/2 flex-col">
                  <Field
                    className="mr-3 w-full rounded border border-primary  px-4 py-3 font-body text-black lg:mr-5"
                    placeholder="Name"
                    type="text"
                    name="from_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="from_name"
                  />
                  <span className="text-xs text-formerror">
                    <ErrorMessage name="from_name" />
                  </span>
                </div>
                <div className="flex flex-col w-full md:w-1/2 mt-6 md:mt-0 md:ml-3 lg:ml-5">
                  <Field
                    className="rounded border border-primary px-4 py-3 font-body text-black"
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-xs text-formerror">
                    <ErrorMessage name="email" />
                  </span>
                </div>
              </div>
              <Field
                as="textarea"
                name="message"
                className="mt-6 w-full rounded border border-primary px-4 py-3 font-body text-black md:mt-8"
                placeholder="Message"
                id="message"
                cols="30"
                rows="10"
                onChange={handleChange}
                onBlur={handleBlur}
              ></Field>
              <span className="text-xs  text-formerror">
                <ErrorMessage name="message" />
              </span>
              <button
                type="submit"
                className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header duration-300 text-lg font-bold uppercase bg-white border border-primary text-primary hover:bg-primary hover:text-white"
              >
                Send
                <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
              </button>
            </Form>
          )}
        </Formik>

        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <i className="bx bx-phone text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Phone
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              (+91) 88494 54323
            </p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Email
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              abhaydesai110@gmail.com
            </p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Address
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              Surat - 395009
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
