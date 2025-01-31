import { FaChevronCircleDown } from "react-icons/fa";
import Link from 'next/link';

export default function UnmatchedSupport() {
    return (
        <div id="unmatchedSupport" className="bg-[url(/hawaii.jpg)] bg-cover bg-center w-full h-full flex flex-col snap-start snap-always justify-end z-09">
            <div className="w-full h-1/2 bg-gradient-to-t from-black via-black/100 to-transparent flex justify-center">
                <div className="max-w-5xl w-full px-5 text-white md:text-2xl text-md mt-auto mb-10 mx-5">
                    <span className="text-[clamp(1.5rem,5vw,3rem)]">- Unmatched Support<br/></span>
                    <span>Luxury means peace of mind. From your first consultation until you return home, we’re with you every step of the way. Need last-minute changes or assistance abroad? We’re available 24/7, just a call or message away.</span>
                    <div id="buttonContainer" className="flex pt-5 pb-5 items-center justify-start gap-x-20">
                        <Link href="#elevatedExperience">
                            <FaChevronCircleDown className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl hover:text-white text-gray-300"/>
                        </Link>
                        <button className="bg-white bg-opacity-65 rounded-xl p-4 text-black border-2 box-border border-transparent hover:bg-opacity-100">Plan My Trip</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
