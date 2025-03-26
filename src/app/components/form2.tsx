import { FormPropsType } from "./tripFrame"

export default function form2({formData, labelClass, inputClass, handleChange}: FormPropsType) {
    return(
        <div className="flex flex-col flex-grow justify-around">
            <div className="w-full">
                <label htmlFor="budget" className={labelClass}>What is your budget?</label>
                <div className="mt-2">
                    <div className="flex flex-row items-center text-black text-sm gap-1">
                        <span>$</span>
                        <input
                            id="budget"
                            name="budget"
                            type="number"
                            min='1'
                            placeholder="10000"
                            value={formData.budget}
                            required
                            className={inputClass}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <fieldset className="flex flex-col items-start">
                <legend className={labelClass}>Budget is Total or Per Person?</legend>
                <div className="flex flex-row gap-4 mt-4">
                    <input
                        type="radio"
                        id="total"
                        value="Total"
                        name="budgetIsTotal"
                        onChange={handleChange}
                    />
                    <label htmlFor="total" className={labelClass}>Total</label>
                </div>
                <div className="flex flex-row gap-4 mt-2">
                    <input
                        type="radio"
                        id="perPerson"
                        value="perPerson"
                        name="budgetIsTotal"
                        onChange={handleChange}
                    />
                    <label htmlFor="perPerson"className={labelClass}>Per Person</label>
                </div>
            </fieldset>

            <div className="w-full mt-2">
                <label htmlFor="roomTypePref" className={labelClass}>Preferred Accommodations</label>
                <div className="mt-2">
                    <input
                        id="roomTypePref"
                        name="roomTypePref"
                        type="text"
                        placeholder="e.g. Hotel, Apartment, AirBNB"
                        required
                        value={formData.roomTypePref}
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full mt-2">
                <label htmlFor="specialRequests" className={labelClass}>Special Requests or Needs</label>
                <div className="mt-2">
                    <input
                        id="specialRequests"
                        name="specialRequests"
                        type="text"
                        required
                        placeholder="Allergies, Disability, Need Workspace"
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}