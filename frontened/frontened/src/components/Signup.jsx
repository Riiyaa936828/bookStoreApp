import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className='w-[600px]'>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close Button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name Field */}
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input 
                  type="text"
                  placeholder='Enter your Name' 
                  className='my-1 w-80 px-3 border rounded-md outline-none'
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input 
                  type="email"
                  placeholder='Enter your Email' 
                  className='my-1 w-80 px-3 border rounded-md outline-none'
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              {/* Password Field */}
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input 
                  type="password"
                  placeholder='Enter your Password' 
                  className='my-1 w-80 px-3 border rounded-md outline-none'
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>

              {/* Signup & Login Button */}
              <div className='mt-4 flex justify-around'>
                <button 
                  type="submit"  // Added type="submit" so form submits
                  className='w-24 border bg-green-500 rounded-full text-white px-3 py-1 hover:bg-green-700 duration-200'>
                  Signup
                </button>

                <div>
                  Have an account?{" "}
                  <button 
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }>
                    Login
                  </button>
                  <Login/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
