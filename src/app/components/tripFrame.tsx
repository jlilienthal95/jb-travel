"use client"
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";
import Form5 from "./form5";
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
        destination: "",
        travelDateStart: "",
        travelDateEnd: "",
        isFlexible: "Yes",
        budget: "",
        budgetIsTotal: "Yes",
        roomTypePref: "",
        specialRequests: "",
        activityPref: "",
        flightAssistance: "No",
        anythingElse: "",
        fName: "",
        lName: "",
        email: "",
        phone: "",
        address: "",
        prefEmail: "off",
        prefPhone: "off",
        prefText: "off",
        travelers: [],
        tripType: "",
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
                    <form className="bg-white p-5 rounded-xl min-w-[450px] min-h-[600px] flex flex-col flex-grow h-full">
                        <div className="flex flex-col flex-grow justify-between">
                            <div className="min-w-5xl flex flex-col flex-grow">
                                <h2 className="text-base font-semibold text-gray-900">Your Next Adventure</h2>  
                                <div className="mt-6 mb-6 flex flex-col flex-grow">
                                    {step === 1 && (
                                        <Form1 labelClass={labelClass} inputClass={inputClass} handleChange={handleChange}/>
                                    )}
                                    {step === 2 && (
                                        <Form2 labelClass={labelClass} inputClass={inputClass} handleChange={handleChange} />
                                    )}
                                    {step === 3 && (
                                        <Form3 labelClass={labelClass} inputClass={inputClass} handleChange={handleChange} />
                                    )}
                                    {step === 4 && (
                                        <Form4 labelClass={labelClass} inputClass={inputClass} handleChange={handleChange} />
                                    )}
                                    {step === 5 && (
                                        <Form5 labelClass={labelClass} inputClass={inputClass} handleChange={handleChange} />
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-center gap-x-6 pt-4 border-t border-gray-900/10">
                                {step > 1 &&(
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="text-sm md:text-md text-black rounded-xl border-2 border-black border-opacity-30 md:p-4 p-2 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40"
                                >
                                    Previous
                                </button>
                                )}
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="text-sm md:text-md text-black rounded-xl border-2 border-black border-opacity-30 md:p-4 p-2 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40"
                                >
                                    Next
                                </button>

                            </div>
                        </div>
                    </form>
                {/* <RiArrowUpWideLine className="text-3xl md:text-4xl lg:text-5xl hover:text-white text-gray-400" /> */}
                </div>
            </div>
        </div>
    );
}
