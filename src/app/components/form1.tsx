import { formProps } from "./tripFrame"

export default function form1({labelClass, inputClass}: formProps) {
    return(
        <>
            <div className="max-w-lg w-full">
                <label htmlFor="first-name" className={labelClass}>First Name</label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="max-w-lg w-full mt-2">
                <label htmlFor="last-name" className={labelClass}>Last Name</label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="max-w-lg w-full mt-2">
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="max-w-lg w-full mt-2">
                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                <div className="mt-2">
                    <input
                        id="phone"
                        name="phone"
                        type="email"
                        autoComplete="email"
                        required
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="max-w-lg w-full mt-2">
                <label htmlFor="address" className={labelClass}>Street Address</label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="street-address"
                        className={inputClass}
                    />
                </div>
            </div>
        </>
    )
}