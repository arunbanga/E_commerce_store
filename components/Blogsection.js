import React, { useState, useEffect } from "react";
import Link from "next/link";

const Blogsection = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="tabs">
        <div className="flex px-4 my-4 tablist">
          <button
            className="px-4 tablinks"
            onClick={() => setIndex(0)}
            style={{ backgroundColor: index ? "#f1f1f1" : "#ddd" }}
          >
            Best Sellers
          </button>
          <button
            className="px-4 tablinks"
            onClick={() => setIndex(1)}
            style={{ backgroundColor: index ? "#ddd" : "#f1f1f1" }}
          >
            Recent Searches
          </button>
        </div>

        <div className="tabcontent" hidden={index !== 0}>
          <section className=" text-gray-600 body-font active-content">
            <div className="container px-5 py-4 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={"product/%20wear%20the%20shirt1"}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/612/612/xif0q/sweatshirt/g/m/l/m-fc6049-fastcolors-original-imaggfhpzcjxm68f.jpeg?q=70"
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Hoodies
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Men Full Sleeve Printed Hooded Sweatshirt
                    </h2>
                    <p className="mt-1">₹ 450</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={"product/%20wear%20the%20shirt1"}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/612/612/xif0q/sweatshirt/0/j/3/xl-sweat-try-this-original-imagkwatxhebbhss.jpeg?q=70"
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Hoodies
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Men Full Sleeve Printed Hooded Sweatshirt
                    </h2>
                    <p className="mt-1">₹ 500</p>
                  </div>
                </div>

                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={"product/%20wear%20the%20shirt1"}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/612/612/xif0q/sweatshirt/u/s/s/xl-sweat-try-this-original-imagkwatreh5qxzc.jpeg?q=70"
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Hoodies
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Men Full Sleeve Printed Hooded Sweatshirt
                    </h2>
                    <p className="mt-1">₹ 789</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={"product/%20wear%20the%20shirt1"}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/612/612/xif0q/sweatshirt/0/j/3/xl-sweat-try-this-original-imagkwatxhebbhss.jpeg?q=70"
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Hoodies
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Men Full Sleeve Printed Hooded Sweatshirt
                    </h2>
                    <p className="mt-1">₹ 549</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="tabcontent" hidden={index !== 1}>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-4 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={"product/%20wear%20the%20shirt1"}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/612/612/l0e6kcw0/t-shirt/m/v/1/xl-half-triangel-black-one-nb-nicky-boy-original-imagc748kbszkvbz.jpeg?q=70"
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Tshirt
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Nikky Men Tshirt
                    </h2>
                    <p className="mt-1">₹ 450</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={"product/%20wear%20the%20shirt1"}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/o/e/j/m-all-war-one-nb-nicky-boy-original-imagjz84ggtf8dmx.jpeg?q=70"
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Tshirt
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Nikky Men Tshirt
                    </h2>
                    <p className="mt-1">₹ 500</p>
                  </div>
                </div>

                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={"product/%20wear%20the%20shirt1"}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/612/612/l4pxk7k0/t-shirt/e/o/6/m-half-hairy-one-lieo-trend-original-imagfkfrgymtupxv.jpeg?q=70"
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Tshirt
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Nikky Men Tshirt
                    </h2>
                    <p className="mt-1">₹ 789</p>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link
                    href={"product/%20wear%20the%20shirt1"}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://rukminim1.flixcart.com/image/612/612/l4pxk7k0/t-shirt/e/o/6/m-half-hairy-one-lieo-trend-original-imagfkfrgymtupxv.jpeg?q=70"
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Tshirt
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Nikky Men Tshirt
                    </h2>
                    <p className="mt-1">₹ 549</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blogsection;
