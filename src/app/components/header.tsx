"use client";
import Link from 'next/link';
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useState } from 'react'

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div id="header"
            className="w-full flex items-center justify-around fixed top-0 z-10 max-h-30 overflow-x-hidden">
            <div className='absolute inset-0 bg-white opacity-65 z-0'></div>
            <Link href="/">
                <img src="/sitelogo.png"
                    alt="J. Brescia Travel Co."
                    className="max-h-14 sm:max-h-20 md:max-h-28 w-auto relative z-10 hover:opacity-70">
                </img>
            </Link>
            <div className="text-black flex flex-row gap-10 justify-between items-center relative z-10">
                <div id="contactInfoCont" className='hidden md:block'>
                    <div id="phone" className='flex flex-row items-center gap-2'>
                        <FaSquarePhone />
                        <Link href="tel:7272665282">
                            (727) 266-JBTC
                        </Link>
                    </div>
                    <div id="email" className='flex flex-row items-center gap-2'>
                        <IoMdMail />
                        <Link href="mailto:JBTravelCo@icloud.com">
                            JBTravelCo@icloud.com
                        </Link>
                    </div>
                </div>
                <div id="buttonContainer" className='flex flew-row gap-5'>
                    <button onClick={openModal} className='rounded-xl border-2 border-black border-opacity-30 p-4 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40'>
                        Plan My Trip
                    </button>
                    <button className='rounded-xl border-2 border-black border-opacity-30 p-4 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40'>
                        Login
                    </button>
                </div>
                {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-scroll">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full">
              <form>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold text-gray-900">Personal Information</h2>  
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">First name</label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                          />
                        </div>
                      </div>
  
                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">Last name</label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                          />
                        </div>
                      </div>
  
                      <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                          />
                        </div>
                      </div>
  
                      <div className="sm:col-span-6">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-900">Street address</label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            autoComplete="street-address"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="mt-8 flex justify-end gap-x-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-sm font-semibold text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
            </div>
        </div>
    )
}

