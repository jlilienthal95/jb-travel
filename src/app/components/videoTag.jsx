import { RiArrowDownWideLine } from "react-icons/ri";
import Link from 'next/link'
import TripForm from './tripForm';

export default function VideoTag(props) {

    return(
        <div id="video+tag" className="bg-cover bg-center w-full h-full flex flex-col snap-start snap-always justify-end z-100 ">
            <video autoPlay muted loop playsInline className="hidden md:block w-full h-full object-cover">
                <source src="/JBThome.mp4" type="video/mp4"/>
                Not supported by your browser.
            </video>
            <video autoPlay muted loop playsInline className="md:hidden w-full h-full object-cover">
                <source src="/JBThomeMobile.mp4" type="video/mp4"/>
                Not supported by your browser.
            </video>
            <div className="w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent flex justify-center absolute">
                {!props.formIsOpen && (
                    <div className="max-w-5xl px-5 text-white md:text-2xl sm:text-lg text-md mt-auto mb-16 mx-5">
                        <span className="text-[clamp(1.5rem,5vw,3rem)] opacity-100">Luxury isn’t an upgrade—<span className="italic">
                        <br></br>it’s our standard.</span><br/></span>
                        <span>Experience the difference that comes from unmatched dedication, meticulous attention to detail, and a passion for curating extraordinary journeys.</span>
                        <div id="buttonContainer" className="flex pt-5 pb-5 items-center justify-center gap-x-20">
                            <Link href="#expertGuidance">
                                <RiArrowDownWideLine className="text-4xl md:text-5xl lg:text-6xl hover:text-white text-gray-400"/>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <div className='w-full absolute'>
                {props.formIsOpen && (
                    <div className="max-w-5xl text-white md:text-2xl sm:text-lg text-md mt-auto ml-auto mr-auto mb-16">
                        <TripForm/>
                    </div>
                )}
            </div>
        </div>
    )
}