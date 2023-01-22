import React from "react";
import Head from "next/head";
import Link from "next/link";
import { tdata } from "../components/Data/tshirts";
const tshirts = () => {
  return (
    <>
      <Head>
        <title>T-shirts</title>
      </Head>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              {tdata.map((cur) => {
                return (
                  <>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                      <Link
                        href={"/product/wear-the-shirt"}
                        className="block relative h-48 rounded overflow-hidden"
                      >
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={cur.img}
                        />
                      </Link>

                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {cur.title}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {cur.desc}
                        </h2>
                        <p className="mt-1">{cur.price}</p>
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

export default tshirts;
