"use client"
import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";
import Form5 from "./form5";
import Form6 from "./form6";
import Form7 from './form7';

type Traveler = {
    fName: string;
    lName: string;
    dob: string;
};

export type TravelerObjectType = {
    [travelerId: `traveler-${number}`] : Traveler
}

type FormDataType = {
    destination: string,
    travelDateStart: string,
    travelDateEnd: string,
    isFlexible: string,
    budget: string,
    budgetIsTotal: string,
    roomTypePref: string,
    specialRequests: string,
    attractions: string,
    flightAssistance: string,
    anythingElse: string,
    fName: string,
    lName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    prefEmail: string,
    prefPhone: string,
    prefText: string,
    travelers: TravelerObjectType,
}

type TripFrameProps = {
    step: number,
    setStep: Dispatch<SetStateAction<number>>
}

export type FormPropsType = {
    labelClass?: string,
    inputClass?: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    setFormData?: Dispatch<SetStateAction<FormDataType>>
}

export default function TripFrame({step, setStep}:TripFrameProps) {
    const labelClass = "block text-sm font-medium text-gray-900 text-wrap"
    const inputClass = "block w-full rounded-md bg-slate-100 px-3 py-1.5 text-sm text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"

    const [ formData, setFormData ] = useState({
        destination: "",
        travelDateStart: "",
        travelDateEnd: "",
        isFlexible: "",
        budget: "",
        budgetIsTotal: "",
        roomTypePref: "",
        specialRequests: "",
        attractions: "",
        flightAssistance: "",
        anythingElse: "",
        fName: "",
        lName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        prefEmail: "off",
        prefPhone: "off",
        prefText: "off",
        travelers: {},
    })

    const nextStep = () => {
        if (step === 1){
            if(!formData.destination || !formData.travelDateStart || !formData.travelDateEnd || !formData.isFlexible) {
                console.log("step:", step);
                alert("Please fill in all required fields before proceeding.");
                return;
        }
        }
        if (step === 2) {
            if(!formData.budget || !formData.budgetIsTotal || !formData.roomTypePref) {
                alert("Please fill in all required fields before proceeding.");
                return;
            }
        }
        if (step === 3){
            if(!formData.flightAssistance) {
                alert("Please fill in all required fields before proceeding.");
                return;
            } 
        }
        if (step === 4){
            if(!formData.fName || !formData.lName || !formData.email || !formData.phone) {
                alert("Please fill in all required fields before proceeding.");
                return;
            }
        }
        if (step === 5) {
            if(!formData.address || !formData.city || !formData.state || !formData.zip) {
                alert("Please fill in all required fields before proceeding.");
                return;
            }
        }
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

    const handleSubmit = async (data: FormDataType) => {
        console.log("handleSubmit formData:", data)
        try {
            const response = await fetch('/api/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData }),
            });
    
            if (response.ok) {
                console.log('')
                nextStep();
            } else {
                alert('Sorry about that... \nSomething went wrong. Please try again or contact us by phone at (727) 266-5282 or email at JBTravelCo@icloud.com.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email');
        }
    };

    useEffect(() => {
        console.log('formData:', formData);
    }, [formData]);

    return (
        <div id="startAdventure" className="relative flex flex-col flex-grow bg-cover bg-center w-full h-full snap-start snap-always justify-end overflow-x-hidden bg-[url(/greece.jpg)]">
            <div className="flex w-full h-1/4 bg-gradient-to-t from-slate-900 via-black/80 to-transparent justify-center overflow-x-hidden"></div>
            <div className='flex flex-grow w-full h-full absolute items-center justify-center'>
                <div className="flex flex-col w-full h-[86%] md:h-5/6 text-white md:text-2xl sm:text-lg text-md ml-auto mr-auto mt-auto items-center pb-24 px-2">
                    {/* min-w-[410px] min-h-[600px]  */}
                    <form className="flex flex-col flex-grow h-full w-full sm:w-2/3 lg:w-1/2 bg-white pt-5 px-5 pb-2 rounded-xl">
                        <div className="flex flex-col flex-grow justify-between">
                            <div className="min-w-5xl flex flex-col flex-grow">
                                <h2 className="text-base font-semibold text-gray-900">Your Next Adventure</h2>  
                                <div className="mb-2 flex flex-col flex-grow">
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
                                    {step === 6 && (
                                        <Form6 labelClass={labelClass} inputClass={inputClass} handleChange={handleChange} setFormData={setFormData}/>
                                    )}
                                    {step === 7 && (
                                        <Form7/>
                                    )}

                                </div>
                            </div>

                            <div className="flex justify-center gap-x-6 pt-2 border-t border-gray-900/10">
                                {step > 1 && step < 7 &&(
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="text-sm md:text-md text-black rounded-xl border-2 border-black border-opacity-30 md:px-2 py-2 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40"
                                >
                                    Previous
                                </button>
                                )}
                                {step < 6 &&(
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="text-sm md:text-md text-black rounded-xl border-2 border-black border-opacity-30 px-5 py-2 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40"
                                    >
                                        Next
                                    </button>
                                )}
                                {step === 6 &&(
                                    <button
                                        type="button"
                                        onClick={() => handleSubmit(formData)}
                                        className="text-sm md:text-md text-black rounded-xl border-2 border-black border-opacity-30 px-5 py-2 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40"
                                    >
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
