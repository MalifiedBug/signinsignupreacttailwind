import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import Alert from "@mui/material/Alert";

export default function SendEmail() {
  const [response, setResponse] = useState("");
//   if (response.msg === "email sent") {
    
//     setTimeout(() => {
//       navigate("/protected");
//     }, 2000);
//   }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Enter email to send reset link
          </h2>
        </div>
        <Formik
          initialValues={{
            email: "",
           
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),           
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setResponse(null);            
            const { email } = values;
            setTimeout(() => {
              const url = "https://signinbackend.onrender.com/sendmail";
              try {
                fetch(url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ email }),
                })
                  .then((data) => data.json())
                  .then((response) => {
                    setResponse(response);                    
                  })
                  .then(alert(`Stored in Local Storage with email: ${sessionStorage.getItem("email")}`))
                  
              } catch (error) {
                alert(error);
              }                
              setSubmitting(false);
            }, 4000);
          }}
        >
          <Form method="POST" className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <Field
                  placeholder="Email"
                  className="relative block w-full rounded-t-md appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  name="email"
                  type="email"
                />
                <ErrorMessage sx={{ color: "red" }} name="email">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>              
            </div>
            {response ? (
              <div>
                {response.msg === "email sent" ? (
                  <Alert severity="success">Click here 👉 <a href={response.previewurl} rel="noopener noreferrer" target="_blank"><u className="text-sky-400">Go to demo mail</u></a></Alert>
                ) : (
                  <div>
                    <Alert severity="error">{response.msg}</Alert>
                    <a href="/">👉Create a new account now!!!👈</a>
                  </div>
                )}
              </div>
            ) : null}

            <div>
              {response === null ? (
                <div class="flex justify-center">
                  <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-4 m-4 h-8 w-8"></div>
                </div>
              ) : null}
            </div>

            

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute font-bold inset-y-0 left-0 flex items-center pl-3"></span>
                Send link in email
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
