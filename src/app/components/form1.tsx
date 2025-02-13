import { FormPropsType } from "./tripFrame"

export default function form1({labelClass, inputClass, handleChange}: FormPropsType) {
    return(
        <div className="flex flex-col flex-grow justify-around">
            <div className="w-full">
                <label htmlFor="destination" className={labelClass}>Desired Destination(s)</label>
                <div className="mt-2">
                    <input
                        id="destination"
                        name="destination"
                        type="text"
                        required
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label className={labelClass}>Travel Dates</label>
    
                <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col">
                        <label htmlFor="travelDateStart" className="text-md text-gray-700">Start Date</label>
                        <input
                            type="date"
                            id="travelDateStart"
                            name="travelDateStart"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="travelDateEnd" className="text-sm text-gray-700">End Date</label>
                        <input
                            type="date"
                            id="travelDateEnd"
                            name="travelDateEnd"
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <fieldset className="flex flex-col items-start">
                <legend className={labelClass}>Are Your Travel Dates Flexible?</legend>
                <div className="flex flex-row gap-2 mt-2 items-center">
                    <input
                        type="radio"
                        id="yes"
                        name="isFlexible"
                        value="Yes"
                        className="w-4 h-4 appearance-none border-2 border-black rounded-full grid place-content-center checked:bg-black"
                        onChange={handleChange}
                    />
                    <label htmlFor="yes" className={labelClass}>Yes</label>
                </div>
                <div className="flex flex-row gap-2 mt-2 items-center">
                    <input
                        type="radio"
                        id="no"
                        value="No"
                        name="isFlexible"
                        className="w-4 h-4 appearance-none border-2 border-black rounded-full grid place-content-center checked:bg-black"
                        onChange={handleChange}
                    />
                    <label htmlFor="no"className={labelClass}>No</label>
                </div>
            </fieldset>
        </div>
    )
}