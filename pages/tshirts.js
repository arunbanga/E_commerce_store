import React from "react";
import Head from "next/head";
import Link from "next/link";
import Product from "@/models/Product";
import mongoose from "mongoose";
const tshirts = ({ products }) => {
  return (
    <>
      <Head>
        <title>T-shirts</title>
      </Head>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              {Object.keys(products).map((cur) => {
                return (
                  <>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                      <Link
                        href={`/product/ ${products[cur].slug}`}
                        key={cur.id}
                        className="block relative h-48 rounded overflow-hidden"
                      >
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={products[cur].img}
                        />
                      </Link>

                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {products[cur].title}
                        </h3>
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {products[cur].desc}
                        </h3>
                        <p className="mt-1"> ₹ {products[cur].price}</p>
                        <div className="text-gray-900 title-font text-lg font-medium">
                          {/* Size: {products[cur].size} */}
                          {products[cur].size.includes("S") && <span>S</span>}
                          {products[cur].size.includes("M") && <span>M</span>}
                          {products[cur].size.includes("L") && <span>L</span>}
                          {products[cur].size.includes("XL") && <span>XL</span>}
                          {products[cur].size.includes("XXL") && (
                            <span>XXL</span>
                          )}
                          Size: {products[cur].size}
                        </div>
                        <div className="text-gray-900 title-font text-lg font-medium">
                          {products[cur].color.includes("White") && (
                            <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                          )}
                          {products[cur].color.includes("Black") && (
                            <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                          )}
                          {products[cur].color.includes("Gray") && (
                            <button className="border-2 border-gray-300 ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>
                          )}
                          {products[cur].color.includes("Blue") && (
                            <button className="border-2 border-gray-300 ml-1 bg-blue-900 rounded-full w-6 h-6 focus:outline-none"></button>
                          )}
                          {products[cur].color.includes("Yellow") && (
                            <button className="border-2 border-gray-300 ml-1 bg-yellow-600 rounded-full w-6 h-6 focus:outline-none"></button>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "Tshirt" });
  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }
  // console.log(products);
  return {
    props: { products: JSON.parse(JSON.stringify(tshirts)) },
  };
}
export default tshirts;
