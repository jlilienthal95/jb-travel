import { formProps } from "./tripFrame"

export default function form1({labelClass, inputClass, handleChange}: formProps) {
    return(
        <>
            <div className="max-w-lg w-full">
                <label htmlFor="fName" className={labelClass}>First Name</label>
                <div className="mt-2">
                    <input
                        id="fName"
                        name="fName"
                        type="text"
                        autoComplete="given-name"
                        required
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="max-w-lg w-full mt-2">
                <label htmlFor="lName" className={labelClass}>Last Name</label>
                <div className="mt-2">
                    <input
                        id="lName"
                        name="lName"
                        type="text"
                        autoComplete="family-name"
                        required
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="max-w-lg w-full mt-2">
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="email"
                        required
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="max-w-lg w-full mt-2">
                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                <div className="mt-2">
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="phone"
                        required
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="max-w-lg w-full mt-2">
                <label htmlFor="address" className={labelClass}>Street Address - include City, State, and Country</label>
                <div className="mt-2">
                    <input
                        id="address"
                        name="address"
                        type="text"
                        autoComplete="street-address"
                        required
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    )
}