"use client"
import { formProps } from "./tripFrame"
import { useState } from 'react';

export default function Form4({labelClass, inputClass}: formProps) {
  function TravelerInfo() {
    const [ travelers, setTravelers] = useState(1);
    return (
      <div className="flex flex-col flex-grow overflow-y-scroll">
        {Array.from({ length: travelers }).map((_, index) => (
          <div key={index}>
            <div className="flex flex-col mt-4">
              <label htmlFor="fName-1" className={labelClass}>First Name</label>
              <input
              type="text"
              id="fName-1"
              name="fName-1"
              className={inputClass}
              />
            </div>
      
            <div className="flex flex-col mt-4">
                <label htmlFor="lName-1" className={labelClass}>Last Name</label>
                <input
                type="text"
                id="lName-1"
                name="lName-1"
                className={inputClass}
                />
            </div>

            <div className="flex flex-col mt-4">
                <label htmlFor="travelDate-1" className={labelClass}>Date of Birth</label>
                <input
                type="date"
                id="travelDate-1"
                name="travelDate-1"
                className={inputClass}
                />
            </div>
          </div>
        ))}
          <button
            type="button"
            onClick={() => setTravelers((prev) => prev + 1)}
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
          Add Traveler
          </button>
          <button
            type="button"
            className="mt-4 p-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete Traveler
          </button>
      </div>
    )
  }
    return (
      <div className="flex flex-grow">
        {/* Traveler 1 */}
        <div className="max-w-lg flex flex-grow flex-col">
            <h2 className="text-sm font-semibold text-gray-900">Who will be traveling?</h2>
            <div className="flex flex-grow flex-row flex-wrap gap-2">
              {TravelerInfo()}
            </div>
        </div>
  
        <div id="addTraveler" className="flex justify-center mt-6">
        </div>
      </div>
    );
  }
  