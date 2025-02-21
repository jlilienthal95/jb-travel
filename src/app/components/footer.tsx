import Link from "next/link"
import { FaCheck } from "react-icons/fa";
import Image from "next/image"

export default function Footer() {
    const logoClass = "w-full h-full object-contain md:p-6 p-12"
    const imgHeight = 100
    const imgWidth = 200
    return(
        <div id="footer" className="flex md:flex-row flex-col w-full h-full snap-end snap-always bg-white p-10 md:text-lg text-sm">
            <div id="content" className="flex md:flex-row flex-col h-5/6 md:mt-24 mt-[4.5rem]">
                <div id="representing" className="flex flex-col h-full w-full md:w-2/3 gap-2 items-center overflow-hidden max-w-full">
                    <div className="border-b-2 pb-1 w-2/3 place-items-center">
                        <div className="text-black md:text-xl text-center">
                            Proudly Representing
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:auto-rows-fr md:overflow-hidden overflow-x-scroll md:gap-0 gap-10 md:animate-none h-full w-full place-items-center flex">
                        <Image alt="Disney Logo" src="/representing/disneylogo.gif" className={logoClass} width={imgWidth} height={imgHeight} priority />
                        <Image alt="Disney Travel Logo" src="/representing/Walt_Disney_travel.png" className={logoClass} width={imgWidth} height={imgHeight} />
                        <Image alt="Universal Logo" src="/representing/UPRV-Logo-2018.jpg" className={logoClass} width={imgWidth} height={imgHeight} />
                        <Image alt="Apple Vacations Logo" src="/representing/apple-vacations.webp" className={logoClass} width={imgWidth} height={imgHeight} />
                        <Image alt="Seabourn Logo" src="/representing/seabournlogo.gif" className={logoClass} width={imgWidth} height={imgHeight} />
                        <Image alt="Carnival Logo" src="/representing/carnivallogo.jpg" className={logoClass} width={imgWidth} height={imgHeight} />
                        <Image alt="Viking Ocean Cruises Logo" src="/representing/viking-ocean-cruises.jpg" className={logoClass} width={imgWidth} height={imgHeight} />
                        <Image alt="Legoland Logo" src="/representing/legoland.png" className={logoClass} width={imgWidth} height={imgHeight} />
                        <Image alt="Palace Resorts Logo" src="/representing/palaceResortsLogo.png" className={logoClass} width={imgWidth} height={imgHeight} />
                    </div>
                </div>
                <div id="contact" className="flex flex-col h-full w-full md:w-1/3 justify-between text-gray-700 md:px-16">
                    <div className="flex flex-col h-full items-center justify-center gap-y-4 md:mt-0 mt-2 md:border-t-0 border-t-2">
                        <div>
                            J. Brescia Travel Co.
                        </div>
                        <div id="contactInfoCont" className="flex flex-col items-center">
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
                    <div id="websiteBy" className="flex justify-center w-full text-sm font-normal">
                        <div className="flex text-slate-600 font-bold xl:text-sm text-xs items-end">
                            <div className="flex flex-row items-end justify-center border-2 border-black border-opacity-50 rounded-lg md:p-2 p-1 min-w-72 opacity-90">
                                <span>Designed and Built by</span>
                                <a href="mailto:JLDevWorks@gmail.com" className="ml-1 flex items-center text-blue-500 hover:underline z-20">
                                    J.L. DevWorks
                                    <FaCheck className="ml-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}