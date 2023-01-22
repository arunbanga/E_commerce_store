import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subtotal, setSubTotal] = useState(0);
  useEffect(() => {
    console.log("useEffect is running");
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
    saveCart(cart);
  }, []);
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };
  const addtoCart = (itemcode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + qty;
    } else {
      newCart[itemcode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };
  const removeFromCart = (itemcode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty - qty;
    }
    if (newCart[itemcode]["qty"] <= 0) {
      delete newCart[itemcode];
    }
    setCart(newCart);
    console.log(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };
  return (
    <>
      <Navbar
        cart={cart}
        addtoCart={addtoCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subtotal={subtotal}
      />
      <Component
        cart={cart}
        addtoCart={addtoCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subtotal={subtotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}
