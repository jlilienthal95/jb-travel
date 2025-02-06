"use client"
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import { useState, Dispatch, SetStateAction, useEffect } from 'react';
// import { RiArrowUpWideLine } from "react-icons/ri"

type tripFrameProps = {
    step: number,
    setStep: Dispatch<SetStateAction<number>>
}

export type formProps = {
    labelClass?: string,
    inputClass?: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function TripFrame({step, setStep}:tripFrameProps) {
    const labelClass = "block text-sm font-medium text-gray-900"
    const inputClass = "block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"

    const [ formData, setFormData ] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        address: "",
        prefEmail: "off",
        prefPhone: "off",
        prefText: "off",
        tripDetails: "",
        travelers: [],
        tripType: "",
        destination: "",
        travelDates: "",
        isFlexible: false,
        budget: "",
        roomTypePref: "",
        activityPref: "",
    })

    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        console.log("Updated formData:", formData);
    }, [formData]);

    return (
        <div id="planTrip" className="bg-cover bg-center w-full h-full flex flex-col snap-start snap-always justify-end overflow-x-hidden bg-[url(/greece.jpg)]">
            <div className="w-full h-1/2 bg-gradient-to-t from-black via-black/100 to-transparent flex justify-center overflow-x-hidden">
            </div>
            <div className='w-full absolute'>
                <div className="w-fit max-w-xl text-white md:text-2xl sm:text-lg text-md ml-auto mr-auto mb-[10vh] items-center flex flex-col">
                    <form className="bg-white p-5 rounded-xl min-w-[450px]">
                        <div className="border-b border-gray-900/10 pb-12 min-w-5xl">
                            <h2 className="text-base font-semibold text-gray-900">Your Next Adventure</h2>  
                            <div className="flex flex-col mt-6 items-center">
                                {step === 1 && (
                                    <Form1 labelClass={labelClass} inputClass={inputClass} handleChange={handleChange}/>
                                )}
                                {step === 2 && (
                                    <Form2 labelClass={labelClass} handleChange={handleChange} />
                                )}
                                {step === 3 && (
                                    <Form3 labelClass={labelClass} inputClass={inputClass} handleChange={handleChange} />
                                )}
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center gap-x-6">
                            {step > 1 &&(
                            <button
                                type="button"
                                onClick={prevStep}
                                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                            >
                                Previous
                            </button>
                            )}
                            <button
                                type="button"
                                onClick={nextStep}
                                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                {/* <RiArrowUpWideLine className="text-3xl md:text-4xl lg:text-5xl hover:text-white text-gray-400" /> */}
                </div>
            </div>
        </div>
    );
}
