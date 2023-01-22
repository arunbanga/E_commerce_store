import React from "react";
import Head from "next/head";
import { data } from "../components/Data/Mugs";
const mugs = () => {
  return (
    <>
      <Head>
        <title>Mugs</title>
      </Head>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((cur) => {
                return (
                  <>
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="" src={cur.img} />
                      </a>
                      <div className="mt-4">
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {cur.title}
                        </h2>
                        <p className="mt-1">{cur.price}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className=""
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/mug/f/s/o/-original-imagj9ebdazsuub2.jpeg?q=70"
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Plastic Coffee Mug
                  </h2>
                  <p className="mt-1">₹239</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className=""
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/mug/f/s/o/-original-imagj9ebdazsuub2.jpeg?q=70"
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Plastic Coffee Mug
                  </h2>
                  <p className="mt-1">₹239</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className=""
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/mug/f/s/o/-original-imagj9ebdazsuub2.jpeg?q=70"
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Plastic Coffee Mug
                  </h2>
                  <p className="mt-1">₹239</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className=""
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/mug/f/s/o/-original-imagj9ebdazsuub2.jpeg?q=70"
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Plastic Coffee Mug
                  </h2>
                  <p className="mt-1">₹239</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/mug/f/s/o/-original-imagj9ebdazsuub2.jpeg?q=70"
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Plastic Coffee Mug
                  </h2>
                  <p className="mt-1">₹239</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/mug/f/s/o/-original-imagj9ebdazsuub2.jpeg?q=70"
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Plastic Coffee Mug
                  </h2>
                  <p className="mt-1">₹239</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className=""
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/mug/f/s/o/-original-imagj9ebdazsuub2.jpeg?q=70"
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Plastic Coffee Mug
                  </h2>
                  <p className="mt-1">₹239</p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default mugs;
