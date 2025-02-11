import { FormPropsType } from "./tripFrame"

export default function form3({labelClass, inputClass, handleChange}: FormPropsType) {
    return(
        <div className="flex flex-col flex-grow justify-around text-wrap">
            <div className="w-full">
                <label htmlFor="specialRequests" className={labelClass}> Are There Specific Attractions or Experiences You Want Included?</label>
                <div className="mt-2">
                    <input
                        id="specialRequests"
                        name="specialRequests"
                        type="text"
                        required
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <fieldset className="flex flex-col items-start">
                <legend className={labelClass}>Do You Need Assistance with Flights?</legend>
                <div className="flex flex-row gap-4 mt-4">
                    <input
                        type="radio"
                        id="yes"
                        value="Yes"
                        name="flightAssistance"
                        onChange={handleChange}
                    />
                    <label htmlFor="total" className={labelClass}>Yes</label>
                </div>
                <div className="flex flex-row gap-4 mt-2">
                    <input
                        type="radio"
                        id="no"
                        value="No"
                        name="flightAssistance"
                        onChange={handleChange}
                    />
                    <label htmlFor="perPerson"className={labelClass}>No</label>
                </div>
                <div className="flex flex-row gap-4 mt-2">
                    <input
                        type="radio"
                        id="maybe"
                        value="Maybe"
                        name="flightAssistance"
                        onChange={handleChange}
                    />
                    <label htmlFor="perPerson"className={labelClass}>Maybe</label>
                </div>
            </fieldset>

            <div className="w-full mt-2">
                <label htmlFor="anythingElse" className={labelClass}>Anything Else I Should Know to Make This Trip Perfect for You?</label>
                <div className="mt-2">
                    <input
                        id="anythingElse"
                        name="anythingElse"
                        type="text"
                        required
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}