import React, { useState } from "react";
import Link from "next/link";
const signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    let res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-[50%] justify-center mx-auto">
        <div>
          <p className="block text-grey-darker text-xl font-bold mb-2 text-center">
            Sign up Your Accout
          </p>
          <Link href={"/login"}>
            <p className="block text-grey-darker text-sm font-bold text-center cursor-pointer">
              or SignIn
            </p>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              autoComplete="off"
              placeholder="*******"
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue hover:bg-blue-dark text-drak font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </div>
        </form>
        <div className="flex items-center justify-end">
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

export default signup;
