import Link from 'next/link';
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

type headerProps = {
    formIsOpen: boolean,
    setFormIsOpen: Function
}

export default function Header(props:headerProps) {
    const openForm = () => {
        if(props.formIsOpen){
            props.setFormIsOpen(false);
        } else{
            props.setFormIsOpen(true);
        };
    };
    return (
        <div id="header"
            className="w-full flex items-center justify-around fixed top-0 z-10 max-h-30 overflow-x-hidden">
            <div className='absolute inset-0 bg-white opacity-65 z-0'></div>
            <Link href="/">
                <img src="/sitelogo.png"
                    alt="J. Brescia Travel Co."
                    className="max-h-14 sm:max-h-20 md:max-h-28 w-auto relative z-10 hover:opacity-70">
                </img>
            </Link>
            <div className="text-black flex flex-row gap-10 justify-between items-center relative z-10">
                <div id="contactInfoCont" className='hidden md:block'>
                    <div id="phone" className='flex flex-row items-center gap-2'>
                        <FaSquarePhone />
                        <Link href="tel:7272665282">
                            (727) 266-JBTC
                        </Link>
                    </div>
                    <div id="email" className='flex flex-row items-center gap-2'>
                        <IoMdMail />
                        <Link href="mailto:JBTravelCo@icloud.com">
                            JBTravelCo@icloud.com
                        </Link>
                    </div>
                </div>
                <div id="buttonContainer" className='flex flew-row gap-5'>
                    <Link href="#video+tag">
                        <button onClick={openForm} className='rounded-xl border-2 border-black border-opacity-30 p-4 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40'>
                            Plan My Trip
                        </button>
                    </Link>
                    <button className='rounded-xl border-2 border-black border-opacity-30 p-4 hover:border-opacity-100 hover:bg-white hover:bg-opacity-40'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

