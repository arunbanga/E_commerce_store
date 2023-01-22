import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-[50%] justify-center mx-auto">
        <div>
          <p className="block text-grey-darker text-xl font-bold mb-2 text-center">
            Sign in Your Accout
          </p>
          <Link href={"/signup"}>
            <p className="block text-grey-darker text-sm font-bold text-center cursor-pointer">
              or Signup
            </p>
          </Link>
        </div>

        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            autoComplete="off"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            autoComplete="off"
            placeholder="*******"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
          <Link
            href={"/forgot"}
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </>
  );
};

export default login;
