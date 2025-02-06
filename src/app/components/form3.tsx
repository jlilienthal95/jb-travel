import { formProps } from "./tripFrame"

export default function Form3({labelClass, inputClass}: formProps) {
    return (
      <>
        {/* Traveler 1 */}
        <div className="sm:col-span-3">
            <h2 className="text-sm font-semibold text-gray-900">Who will be traveling?</h2>
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
                <label htmlFor="travelDate-1" className={labelClass}>Travel Date</label>
                <input
                type="date"
                id="travelDate-1"
                name="travelDate-1"
                className={inputClass}
                />

            </div>
  
          <div id="buttonContainer" className="flex justify-around items-center mt-2 sm:mt-6">
            <button
                type="button"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
            >
                Add Traveler
            </button>
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Delete Traveler
            </button>
          </div>
        </div>
  
        <div id="addTraveler" className="flex justify-center mt-6">
        </div>
      </>
    );
  }
  