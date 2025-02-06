import { formProps } from "./tripFrame"

export default function form2({labelClass, handleChange}: formProps) {
    return(
        <>
            <fieldset className="max-w-lg w-full">
                <div className="gap-x-4">
                    <label className={labelClass}>Preferred  Method</label>
                    <div className="flex flex-row items-center gap-2 mt-2">
                        <input
                            type="checkbox"
                            name="prefEmail"
                            id="prefEmail"
                            onChange={handleChange}
                        />
                        <label htmlFor="prefEmail" className={labelClass}>Email</label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <input
                            type="checkbox"
                            name="prefPhone"
                            id="prefPhone"
                            onChange={handleChange}
                        />
                        <label htmlFor="prefPhone" className={labelClass}>Phone</label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <input
                            type="checkbox"
                            name="prefText"
                            id="prefText"
                            onChange={handleChange}
                        />
                        <label htmlFor="prefText" className={labelClass}>Text</label>
                    </div>
                </div>
            </fieldset>

            <div className="max-w-lg w-full mt-2">
                <label htmlFor="tripDetails" className={labelClass}>Trip Details</label>
                <div className="mt-2">
                    <textarea
                        name="tripDetails"
                        rows={3}
                        id="tripDetails"
                        className="bg-slate-100 block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    )
}