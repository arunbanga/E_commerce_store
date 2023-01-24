import Link from "next/link";
import { useRef } from "react";
import styles from "../styles/navbar.module.css";
import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
const Navbar = ({ cart, addtoCart, removeFromCart, clearCart, subtotal }) => {
  console.log(cart, addtoCart, removeFromCart, clearCart, subtotal);
  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-start py-4 w-full sticky top-0 bg-white z-10">
        <div className="logo mx-5">
          <Link href={"/"} className={styles.nav_link}>
            <p>Logo</p>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-8 font-bold">
            <Link href={"/tshirts"} className={styles.nav_link}>
              <li>T-shirts</li>
            </Link>
            <Link href={"/mugs"} className={styles.nav_link}>
              <li>Mugs</li>
            </Link>
            <Link href={"/hoodies"} className={styles.nav_link}>
              <li>Hoodies</li>
            </Link>
            <Link href={"/stickers"} className={styles.nav_link}>
              <li>Stickers</li>
            </Link>
          </ul>
        </div>
        <div className="mx-4 absolute right-0 top-2 flex">
          <Link href={"/login"}>
            <MdAccountCircle className="text-xl md:text-4xl cursor-pointer" />
          </Link>
          <AiOutlineShoppingCart
            className="text-xl md:text-4xl cursor-pointer"
            onClick={togglecart}
          />
        </div>
        <div
          ref={ref}
          className={`w-72 h-[100vh] sidecart absolute top-0 right-0 bg-gray-300 p-10 px-8 transform transition-transform ${
            Object.keys(cart).length !== 0
              ? "translate-x-0"
              : "translate-x-full"
          } z-10`}
        >
          <h2 className="text-xl font-bold">Shopping cart</h2>
          <span
            onClick={togglecart}
            className="absolute top-4 right-2 cursor-pointer"
          >
            <AiOutlineCloseCircle className="text-2xl text-gray-900" />
          </span>
          <ol className="list-decimal">
            {Object.keys(cart).length == 0 && (
              <div className="my-4 font-semibold">Your cart is empty</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="flex">
                    <div className="w-2/3 font-semibold">{cart[k].name}</div>
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
          <div className="font-bold mx-4 my-2">Subtotal: ₹ {subtotal} </div>
          <div className="flex">
            <Link href={"/checkout"}>
              <button className="flex mt-6 mr-1 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <BsFillBagCheckFill className="mt-1 mx-1" />
                Checkout
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="flex mt-6 mr-1 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Clear cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
