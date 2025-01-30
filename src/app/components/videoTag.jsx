import { FaChevronCircleDown } from "react-icons/fa";
import Link from 'next/link'

export default function VideoTag() {
    return(
        <div id="video+tag" className="bg-gray-300 w-full h-full flex snap-start snap-always justify-center z-0">
            <video autoPlay muted loop playsInline className="hidden md:block w-full h-full object-cover">
                <source src="/JBThome.mp4" type="video/mp4"/>
                Not supported by your browser.
            </video>
            <video autoPlay muted loop playsInline className="md:hidden w-full h-full object-cover">
                <source src="/JBThomeMobile.mp4" type="video/mp4"/>
                Not supported by your browser.
            </video>
            <div className="absolute bottom-0 z-0 w-full h-1/3 border-box bg-gradient-to-t from-black to-transparent">
            </div>  
            <div className="md:text-2xl text-md absolute top-[clamp(70%,70%,70%)] left-[clamp(5%,2%,10%)] z-10 center-on-small-height max-w-5xl">
                <span className="text-[clamp(1.5rem,5vw,3rem)] opacity-100">Luxury isn’t an upgrade—<span className="italic">it’s our standard. </span><br/></span>
                <span className="">Experience the difference that comes from unmatched dedication, meticulous attention to detail, and a passion for curating extraordinary journeys.</span>
                <div id="buttonContainer" className="flex pt-5 pb-5 items-center justify-start gap-x-20 max-w-auto">
                    <Link href="#expertGuidance">
                        <FaChevronCircleDown className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl hover:text-white text-gray-300"/>
                    </Link>
                    <button className="bg-black rounded-xl p-4 text-white border-2 box-border border-transparent hover:border-gray-300">Plan My Trip</button>
                </div>
            </div>
        </div>
    )
}