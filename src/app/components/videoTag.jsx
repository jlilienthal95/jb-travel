import { FaChevronCircleDown } from "react-icons/fa";
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
                <div className="max-w-5xl w-full px-5 text-white md:text-2xl text-md mt-auto mx-5">
                    <span className="text-[clamp(1.5rem,5vw,3rem)] opacity-100">Luxury isn’t an upgrade—<span className="italic">it’s our standard. </span><br/></span>
                    <span>Experience the difference that comes from unmatched dedication, meticulous attention to detail, and a passion for curating extraordinary journeys.</span>
                    <div id="buttonContainer" className="flex pt-5 pb-5 items-center justify-start gap-x-20">
                        <Link href="#expertGuidance">
                            <FaChevronCircleDown className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl hover:text-white text-gray-300"/>
                        </Link>
                        <button className="bg-white bg-opacity-65 rounded-xl p-4 text-black border-2 box-border border-transparent hover:bg-opacity-100">Plan My Trip</button>
                    </div>
                </div>
            </div>
        </div>
    )
}