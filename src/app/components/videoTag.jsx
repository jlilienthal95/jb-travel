import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link'

export default function VideoTag() {
    return(
        <div id="video+tag" className="bg-cover bg-center w-full h-full flex flex-col snap-start snap-always justify-end z-100">
            <video autoPlay muted loop playsInline className="hidden md:block w-full h-full object-cover">
                <source src="/JBThome.mp4" type="video/mp4"/>
                Not supported by your browser.
            </video>
            <video autoPlay muted loop playsInline className="md:hidden w-full h-full object-cover">
                <source src="/JBThomeMobile.mp4" type="video/mp4"/>
                Not supported by your browser.
            </video>
            <div className="w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent flex justify-center absolute">
                <div className="max-w-5xl w-full px-5 text-white md:text-2xl text-md mt-auto mb-16 mx-5">
                    <span className="text-[clamp(1.5rem,5vw,3rem)] opacity-100">Luxury isn’t an upgrade—<span className="italic">it’s our standard. </span><br/></span>
                    <span>Experience the difference that comes from unmatched dedication, meticulous attention to detail, and a passion for curating extraordinary journeys.</span>
                    <div id="buttonContainer" className="flex pt-5 pb-5 items-center justify-between gap-x-20">
                        <button className="hover:bg-white hover:bg-opacity-25 rounded-xl p-4 text-white border-2 border-opacity-25 border-gray-50 min-w-40">Plan My Trip</button>
                        <Link href="#expertGuidance">
                            <FaChevronDown className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl hover:text-white text-gray-400"/>
                        </Link>
                        <button className="rounded-xl p-4 border-gray-50 text-transparent">Plan My Trip</button>
                    </div>
                </div>
            </div>
        </div>
    )
}