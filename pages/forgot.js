import React from "react";
import Link from "next/link";
const forgot = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-[50%] justify-center mx-auto">
        <div>
          <p className="block text-grey-darker text-xl font-bold mb-2 text-center">
            Forgot Password
          </p>
          <Link href={"/login"}>
            <p className="block text-grey-darker text-sm font-bold text-center cursor-pointer">
              or SignIn
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
        <button
          className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
          type="button"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default forgot;
