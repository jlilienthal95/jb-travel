import Link from "next/link"
import { FaCheck } from "react-icons/fa";


export default function Footer() {
    const logoClass = "max-w-[8vw] object-contain"
    return(
        <div id="footer" className="flex md:flex-row flex-col w-full h-1/2 snap-start snap-always bg-white py-10 text-sm">
            <div className="flex flex-col h-full w-full md:w-2/3 gap-2 items-center">
                <div className="border-b-2 pb-1 w-2/3 place-items-center">
                    <div className="text-black md:text-xl">
                        Proudly Representing
                    </div>
                </div>
                <div id="presenting" className="grid grid-cols-3 auto-rows-fr h-full w-full place-items-center">
                    <img alt="Disney Logo" src="/presenting/disneylogo.gif" className={logoClass}></img>
                    <img alt="Disney Travel Logo"  src="/presenting/Walt_Disney_travel.png" className={logoClass}></img>
                    <img alt="Universal Logo" src="/presenting/UPRV-Logo-2018.jpg" className={logoClass}></img>
                    <img alt="Apple Vacations Logo" src="/presenting/apple-vacations.webp" className={logoClass}></img>
                    <img alt="Seabourn Logo" src="/presenting/seabournlogo.gif" className={logoClass}></img>
                    <img alt="Carnival Logo" src="/presenting/carnivallogo.jpg" className={logoClass}></img>
                    <img alt="Viking Ocean Cruises Logo" src="/presenting/viking-ocean-cruises.jpg" className={logoClass}></img>
                    <img alt="Legoland Logo" src="/presenting/legoland.png" className={logoClass}></img>
                    <img alt="Palace Resorts Logo" src="/presenting/Palaceresorts.jpg" className={logoClass}></img>
                </div>
            </div>
            <div className="flex flex-col h-full w-full md:w-1/3 justify-between text-gray-700 px-16">
                <div className="flex flex-col h-full items-center justify-center gap-y-4">
                    <div className="">
                        J. Brescia Travel Co.
                    </div>
                    <div id="contactInfoCont" className="flex flex-col  items-center">
                        <div id="phone" className='flex items-center gap-2 hover:text-gray-400'>
                            {/* <Link href="tel:7272665282">
                                <FaSquarePhone className="text-xl"/>
                            </Link> */}
                            <Link href="tel:7272665282">
                                (727) 266-JBTC
                            </Link>
                        </div>
                        {/* <div className="text-5xl">•</div> */}
                        <div id="email" className='flex flex-row items-center gap-2 hover:text-gray-400'>
                            {/* <Link href="mailto:JBTravelCo@icloud.com">
                                <IoMdMail className="text-xl" />
                            </Link> */}
                            <Link href="mailto:JBTravelCo@icloud.com">
                                JBTravelCo@icloud.com
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row text-center">
                        An Independent Affiliate of A. S. A. P. Cruises Inc., Florida Seller of Travel Ref. No. ST15578 – Washington UBID No. 603189022
                    </div>
                </div>
                <div id="websiteBy" className="flex justify-end w-full">
                    <div className="flex text-black font-bold text-sm items-end">
                        <div className="flex flex-row items-end border-2 rounded-lg p-2">
                            <span>Designed and Built by</span>
                            <a href="mailto:jilienthal@gmail.com" className="ml-1 flex items-center text-blue-500 hover:underline z-20">
                                J.L. Software
                                <FaCheck className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}