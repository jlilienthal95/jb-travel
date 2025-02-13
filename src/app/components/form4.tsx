import { FormPropsType } from "./tripFrame"

export default function form4({labelClass, inputClass, handleChange}: FormPropsType) {
    return(
        <div className="flex flex-col flex-grow justify-around">
            <div className="w-full">
                <label htmlFor="fName" className={labelClass}>First Name</label>
                <div className="mt-2">
                    <input
                        id="fName"
                        name="fName"
                        type="text"
                        required
                        autoComplete="first-name"
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="lName" className={labelClass}>Last Name</label>
                <div className="mt-2">
                    <input
                        id="lName"
                        name="lName"
                        type="text"
                        required
                        autoComplete="family-name"
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="text"
                        required
                        autoComplete="email"
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                <div className="mt-2">
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="phone"
                        className={inputClass}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}  