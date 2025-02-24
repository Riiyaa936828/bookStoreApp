import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("Form Data:", data);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box relative">
          {/* Close Button - Redirects to Home */}
          <a
            href="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </a>

          <h3 className="font-bold text-lg">Contact Us</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            {/* Name Field */}
            <div>
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="block w-full my-1 px-3 border rounded-md outline-none"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div>
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="block w-full my-1 px-3 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            {/* Message Field */}
            <div>
              <span>Message</span>
              <textarea
                placeholder="Enter your message"
                className="block w-full my-1 px-3 border rounded-md outline-none h-24"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-32 border bg-green-500 rounded-full text-white px-3 py-1 hover:bg-green-700 duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
