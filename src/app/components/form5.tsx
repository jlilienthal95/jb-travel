import { FormPropsType } from "./tripFrame"

export default function form5({labelClass, inputClass, handleChange}: FormPropsType) {
    return(
        <div className="flex flex-col flex-grow justify-around">
            <fieldset className="w-full">
                <div className="gap-x-4">
                    <label className={labelClass}>Preferred Contact Method</label>
                    <div className="flex flex-row items-center gap-2 mt-2">
                        <input
                            type="checkbox"
                            name="prefContact"
                            id="prefEmail"
                            onChange={handleChange}
                        />
                        <label htmlFor="prefEmail" className={labelClass}>Email</label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <input
                            type="checkbox"
                            name="prefContact"
                            id="prefPhone"
                            onChange={handleChange}
                        />
                        <label htmlFor="prefPhone" className={labelClass}>Phone</label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <input
                            type="checkbox"
                            name="prefContact"
                            id="prefText"
                            onChange={handleChange}
                        />
                        <label htmlFor="prefText" className={labelClass}>Text</label>
                    </div>
                </div>
            </fieldset>
            <div className="w-full">
                <label htmlFor="address" className={labelClass}>Street Address</label>
                <div className="mt-2">
                    <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        autoComplete="address-line1"
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="city" className={labelClass}>City</label>
                <div className="mt-2">
                    <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        autoComplete="address-level2"
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="state" className={labelClass}>State</label>
                <div className="mt-2">
                    <input
                        id="state"
                        name="state"
                        type="text"
                        required
                        autoComplete="address-level1"
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="zip" className={labelClass}>Zip Code</label>
                <div className="mt-2">
                    <input
                        id="zip"
                        name="zip"
                        type="text"
                        required
                        autoComplete="postal-code"
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}