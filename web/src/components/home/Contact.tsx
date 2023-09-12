"use client";
import { useRef } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const firstNameRef = useRef("") as any;
  const lastNameRef = useRef("") as any;
  const emailRef = useRef("") as any;

  const subscribeUser = async (e: any) => {
    e.preventDefault();

    // this is where your mailchimp request is made
    console.log("subscribeUser");

    await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    })
      .then(async (response) => {
        const errorMessage = await response.json();

        if (response.status >= 400) {
          const el = document.createElement("div");
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            html: errorMessage.error,
          });
        } else if (response.status >= 200) {
          console.log("result");
          Swal.fire({
            icon: "success",
            title: "Subscribed Successfully",
          });
        }
      })
      .catch((error: any) => {
        console.error(error);
      });

    e.target.reset();
  };

  return (
    <div className="w-full h-[35rem] relative">
      <img
        src="/images/train/ria1.jpg"
        alt="karate"
        className="w-full h-full object-cover"
      />
      <div className="w-full h-full bg-[#234C96] opacity-30 absolute top-0 left-0"></div>

      <div className="absolute inset-x-0 inset-y-0 max-w-7xl mx-auto flex justify-end items-center px-5">
        <form
          onSubmit={subscribeUser}
          className="bg-slate-100 p-5 rounded border flex flex-col gap-5 opacity-90"
        >
          <h2 className="text-3xl font-semibold leading-normal my-5 text-center uppercase tracking-tight">
            Join Our Mailing List
          </h2>
          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-md">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border rounded p-2"
                placeholder="Enter Your First Name"
                name="firstName"
                ref={firstNameRef}
                required
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-md">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="border rounded p-2"
                placeholder="Enter Your Last Name"
                name="lastName"
                ref={lastNameRef}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-md">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="border rounded p-2"
              placeholder="Enter Your Email"
              name="email"
              ref={emailRef}
              required
            />
          </div>

          <button
            type="submit"
            name="subscribe"
            className="w-full rounded-md p-2 bg-blue-500 text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
