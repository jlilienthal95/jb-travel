export default function VideoTag() {
    return(
        <div id="video+tag" className="bg-gray-300 w-full h-full flex flex-col snap-start snap-always justify-center z-0">
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
            <div className="md:text-2xl text-md absolute md:top-[clamp(70%,70%,80%)] top-[clamp(40%,40%,50%)] left-[clamp(5%,2%,10%)] z-10 center-on-small-height">
                <span className="text-[clamp(1.5rem,5vw,3rem)] opacity-100">Luxury isn’t an upgrade—<span className="italic">it’s our standard. </span><br/></span>
                <span className="hidden md:block">Experience the difference that comes from unmatched dedication, meticulous attention to detail, and a passion for curating extraordinary journeys.</span>
            </div>
        </div>
    )
}