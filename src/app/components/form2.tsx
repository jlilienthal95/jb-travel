import { formProps } from "./tripFrame"

export default function form2({labelClass}: formProps) {
    return(
        <>
            <fieldset className="max-w-lg w-full">
                <div className="gap-x-4">
                    <label className={labelClass}>Preferred Contact Method</label>
                    <div className="flex flex-row items-center gap-2 mt-2">
                        <input
                            type="checkbox"
                            name="email"
                            id="email"
                        />
                        <label htmlFor="email" className={labelClass}>Email</label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <input
                            type="checkbox"
                            name="phone"
                            id="phone"
                        />
                        <label htmlFor="phone" className={labelClass}>Phone</label>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <input
                            type="checkbox"
                            name="text"
                            id="text"
                        />
                        <label htmlFor="text" className={labelClass}>Text</label>
                    </div>
                </div>
            </fieldset>

            <div className="max-w-lg w-full mt-2">
                <label htmlFor="trip-details" className={labelClass}>Trip Details</label>
                <div className="mt-2">
                    <textarea
                        name="trip-details"
                        rows={3}
                        id="trip-details"
                        className="bg-slate-100 block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                    />
                </div>
            </div>
        </>
    )
}