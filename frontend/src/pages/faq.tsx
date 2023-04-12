import Layout from "@/components/layout/Layout";
import { Disclosure } from "@headlessui/react";

import Image from "next/image";

//internal import

import { IoChevronUpCircleOutline } from "react-icons/io5";

const Faq = () => {
  return (
    <Layout title="FAQ" description="This is faq page">
      {/* <PageHeader title="Frequently Asked Questions" /> */}
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-10 lg:py-12">
          <div className="grid gap-4 lg:mb-8 items-center md:grid-cols-2 xl:grid-cols-2">
            <div className="pr-16">
              <Image width={720} height={550} src="/faq.svg" alt="logo" />
            </div>
            <div className="">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>How does the kollsh work?</span>
                      <IoChevronUpCircleOutline
                        className={`${
                          open ? "transform rotate-180 text-green-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Welcome to Kollsh, your go-to online marketplace for
                      buying and selling new and used products in Saudi Arabia.
                      Whether your looking for the latest gadgets, trendy
                      fashion items, or household essentials, Kollsh offers a
                      convenient and hassle-free way to connect with buyers and
                      sellers across all cities in the country.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>Can I cancel my subscription anytime?</span>
                      <IoChevronUpCircleOutline
                        className={`${
                          open ? "transform rotate-180 text-green-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Welcome to Kollsh, your go-to online marketplace for
                      buying and selling new and used products in Saudi Arabia.
                      Whether youre looking for the latest gadgets, trendy
                      fashion items, or household essentials, Kollsh offers a
                      convenient and hassle-free way to connect with buyers and
                      sellers across all cities in the country.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>Whice payment method you should accept?</span>
                      <IoChevronUpCircleOutline
                        className={`${
                          open ? "transform rotate-180 text-green-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Welcome to Kollsh, your go-to online marketplace for
                      buying and selling new and used products in Saudi Arabia.
                      Whether youre looking for the latest gadgets, trendy
                      fashion items, or household essentials, Kollsh offers a
                      convenient and hassle-free way to connect with buyers and
                      sellers across all cities in the country.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>Can I cancel my subscription anytime?</span>
                      <IoChevronUpCircleOutline
                        className={`${
                          open ? "transform rotate-180 text-green-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Welcome to Kollsh, your go-to online marketplace for
                      buying and selling new and used products in Saudi Arabia.
                      Whether youre looking for the latest gadgets, trendy
                      fashion items, or household essentials, Kollsh offers a
                      convenient and hassle-free way to connect with buyers and
                      sellers across all cities in the country.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>What is kollsh EC2 auto scaling?</span>
                      <IoChevronUpCircleOutline
                        className={`${
                          open ? "transform rotate-180 text-green-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Welcome to Kollsh, your go-to online marketplace for
                      buying and selling new and used products in Saudi Arabia.
                      Whether youre looking for the latest gadgets, trendy
                      fashion items, or household essentials, Kollsh offers a
                      convenient and hassle-free way to connect with buyers and
                      sellers across all cities in the country.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>
                        What are the benefits of using kollsh affliate?
                      </span>
                      <IoChevronUpCircleOutline
                        className={`${
                          open ? "transform rotate-180 text-green-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Welcome to Kollsh, your go-to online marketplace for
                      buying and selling new and used products in Saudi Arabia.
                      Whether youre looking for the latest gadgets, trendy
                      fashion items, or household essentials, Kollsh offers a
                      convenient and hassle-free way to connect with buyers and
                      sellers across all cities in the country.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>What is a affliates product configuration?</span>
                      <IoChevronUpCircleOutline
                        className={`${
                          open ? "transform rotate-180 text-green-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Welcome to Kollsh, your go-to online marketplace for
                      buying and selling new and used products in Saudi Arabia.
                      Whether youre looking for the latest gadgets, trendy
                      fashion items, or household essentials, Kollsh offers a
                      convenient and hassle-free way to connect with buyers and
                      sellers across all cities in the country.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-base font-medium text-left text-gray-600 focus:text-green-500 bg-gray-50 hover:bg-green-50 rounded-lg focus:outline-none">
                      <span>
                        What is fleet management and how is it different from
                        dynamic scaling?
                      </span>
                      <IoChevronUpCircleOutline
                        className={`${
                          open ? "transform rotate-180 text-green-500" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-3 pb-8 text-sm leading-7 text-gray-500">
                      Welcome to Kollsh, your go-to online marketplace for
                      buying and selling new and used products in Saudi Arabia.
                      Whether youre looking for the latest gadgets, trendy
                      fashion items, or household essentials, Kollsh offers a
                      convenient and hassle-free way to connect with buyers and
                      sellers across all cities in the country.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
