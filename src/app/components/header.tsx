import Link from 'next/link';
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Header() {
    return (
        <div id="header" className="w-full flex items-center justify-around place-items-center fixed top-0 z-10 px-2 max-h-30 overflow-x-hidden">
            <div className='absolute inset-0 bg-white opacity-65 z-0'></div>
            <Link href="#video+tag">
                <img src="/JBTC-Logo-v2Noborder.png"
                    alt="J. Brescia Travel Co."
                    className="max-h-20 md:max-h-24 min-h-[80px] object-contain relative z-10 hover:opacity-55">
                </img>
            </Link>
            <div id="contactAndButtons" className="text-black flex flex-row md:gap-8 gap-3 items-center justify-between relative z-10">
                <div id="contactInfoCont" className='hidden md:flex flex-row md:flex-col'>
                    <div id="phone" className='flex flex-row items-center gap-2 hover:text-gray-600'>
                        <Link href="tel:7272665282">
                            <FaSquarePhone className="text-[38px] md:text-2xl"/>
                        </Link>
                        <Link className='hidden md:block' href="tel:7272665282">
                            (727) 266-JBTC
                        </Link>
                    </div>
                    <div id="email" className='flex flex-row items-center gap-2 hover:text-gray-600'>
                        <Link href="mailto:JBTravelCo@icloud.com">
                            <IoMdMail className="text-5xl md:text-2xl" />
                        </Link>
                        <Link className='hidden md:block' href="mailto:JBTravelCo@icloud.com">
                            JBTravelCo@icloud.com
                        </Link>
                    </div>
                </div>
                <div id="buttonContainer" className='flex flew-row md:gap-5 gap-2'>
                    <Link href="#startAdventure">
                        <button className='text-sm md:text-md rounded-2xl border-2 border-black border-opacity-30 md:p-4 p-2 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40 text-nowrap'>
                            Start My Adventure
                        </button>
                    </Link>
                    <button className='text-sm md:text-md rounded-2xl border-2 border-black border-opacity-30 md:p-4 p-2 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40 text-nowrap'>
                        <Link href="https://crm.myagentgenie.com/portal/login" target="_blank" rel="noopener noreferrer">
                            Login
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

