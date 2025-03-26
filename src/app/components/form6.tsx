"use client";
import { useState } from 'react';
import { FormPropsType, TravelerObjectType } from './tripFrame';

export default function Form6({ labelClass, inputClass, setFormData }: FormPropsType) {
  function handleTravelers(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (!setFormData) return;

    const travelerKey = e.target.name as keyof TravelerObjectType;
    
    setFormData((prev) => ({
      ...prev,
      travelers: {
        ...prev.travelers,
        [e.target.name]: {
          ...prev.travelers[travelerKey],
          [e.target.id]: e.target.value,
        },
      },
    }));
  }
  // Limit the number of travelers to 4.
  const [travelers, setTravelers] = useState(1);

  // Increase traveler count, but do not exceed 4
  const addTraveler = () => {
    if (travelers < 4) setTravelers(travelers + 1);
  };

  // Decrease traveler count, but not below 1
  const deleteTraveler = () => {
    if (travelers > 1) setTravelers(travelers - 1);
  };

  // Render the traveler info as a grid.
  // This function returns the traveler cards.
  const TravelerInfo = () => {
    return (
      <div className="grid grid-cols-2 gap-2 text-wrap">
        {Array.from({ length: travelers }).map((_, index) => (
          <div key={index} className="p-2 border border-gray-300 rounded-md">
            <div className="flex flex-col">
              <label htmlFor={`fName`} className={labelClass}>First Name</label>
              <input
                type="text"
                id={`fName`}
                name={`traveler-${index}`}
                className={inputClass}
                onChange={handleTravelers}
                autoComplete="first-name"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor={`lName`} className={labelClass}>Last Name</label>
              <input
                type="text"
                id={`lName`}
                name={`traveler-${index}`}
                className={inputClass}
                onChange={handleTravelers}
                autoComplete="family-name"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor={`dateOfBirth`} className={labelClass}>Date of Birth</label>
              <input
                type="date"
                id={`dateOfBirth`}
                name={`traveler-${index}`}
                className={inputClass}
                onChange={handleTravelers}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col flex-grow justify-between items-center">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Who will be traveling?</h2>
        {/* Traveler grid container: This will only show 4 traveler cards max, laid out in 2 columns */}
        <div className="w-full pb-2">
          {TravelerInfo()}
        </div>
    </div>
      <div className="flex gap-x-2">
        {travelers < 4 && (
          <button
            type="button"
            onClick={addTraveler}
            className="bg-indigo-600 text-white text-sm sm:text-md px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Add Traveler
          </button>
        )}
        {travelers > 1 && (
          <button
            type="button"
            onClick={deleteTraveler}
            className="bg-red-600 text-white text-sm sm:text-md px-4 py-2 rounded-md hover:bg-red-700"
          >
            Delete Traveler
          </button>
        )}
      </div>
    </div>
  );
}
