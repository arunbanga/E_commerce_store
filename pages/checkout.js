import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";
const checkout = ({ cart, subtotal, addtoCart, removeFromCart }) => {
  return (
    <>
      <div className="container m-auto w-[90%]">
        <h1 className="font-bold text-2xl my-8 text-center">Checkout</h1>
        <h2 className="font-bold text-xl"> 1.Delivery Details</h2>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 
                px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="px-2 w-full">
          <div className=" mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>

            <textarea
              name="address"
              id="address"
              cols="30"
              rows="2"
              autoComplete="off"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm 
                text-gray-600"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                autoComplete="off"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                autoComplete="off"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                autoComplete="off"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                autoComplete="off"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <h2 className="font-bold text-xl"> 2. Reviews Cart Items & Pay</h2>
        <div className="sidecart  bg-gray-300 p-10 px-8 z-10">
          {/* <span
            onClick={togglecart}
            className="absolute top-4 right-2 cursor-pointer"
          >
            <AiOutlineCloseCircle className="text-2xl text-gray-900" />
          </span> */}
          <ol className="list-decimal">
            {Object.keys(cart).length == 0 && (
              <div className="my-4 font-semibold">Your cart is empty</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="flex">
                    <div className="w-2/3 font-semibold">
                      {cart[k].name} ({cart[k].size}/{cart[k].variant})
                    </div>
                    <div className="w-1/3 flex  items-center justify-center text-lg">
                      <AiFillMinusCircle
                        className="cursor-pointer"
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                      />
                      <span className="mx-2">{cart[k].qty}</span>
                      <AiFillPlusCircle
                        className="cursor-pointer"
                        onClick={() =>
                          addtoCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          )
                        }
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <span className="total">Subtotal: ₹ {subtotal} </span>
        </div>
        <div className="mx-4">
          <Link href={"/checkout"}>
            <button className="flex mt-6 mr-1 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <BsFillBagCheckFill className="mt-1 mx-1" />
              Pay ₹ {subtotal}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default checkout;
