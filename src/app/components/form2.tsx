import { formProps } from "./tripFrame"

export default function form2({labelClass, inputClass, handleChange}: formProps) {
    return(
        <div className="flex flex-col flex-grow justify-between">
            <div className="max-w-lg w-full">
                <label htmlFor="budget" className={labelClass}>What is your budget?</label>
                <div className="mt-2">
                    <input
                        id="budget"
                        name="budget"
                        type="text"
                        required
                        className={inputClass}
                        onChange={handleChange}
                    />
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

            <div className="max-w-lg w-full mt-2">
                <label htmlFor="roomTypePref" className={labelClass}>Preferred Accomodations</label>
                <div className="mt-2">
                    <input
                        id="roomTypePref"
                        name="roomTypePref"
                        type="text"
                        required
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="max-w-lg w-full mt-2">
                <label htmlFor="specialRequests" className={labelClass}>Special Requests or Needs</label>
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
        </div>
    )
}