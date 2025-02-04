export default function Footer() {
    const certClass = "w-1/3 h-auto object-contain"
    const logoClass = "max-w-[6vw] h-2/3 object-contain"
    return(
        <div id="footer" className="flex flex-row w-full h-1/3 snap-start snap-always bg-white">
            {/* <div className="flex flex-col h-full w-1/3 items-center">
                <div>
                    J. Brescia Travel Co.
                </div>
                <div id="certs" className="flex flex-row h-full items-center bg-red-400">
                    <img src="/Certified-themepark.png" alt="Certified Theme Park Expert" className={certClass}></img>
                    <img src="/Certified-Mexico.png" alt="Certified Mexico Expert" className={certClass}></img>
                    <img src="/Certified-Ocean.png" alt="Certified Ocean Cruising Expert" className={certClass}></img>
                </div>
            </div> */}
            <div id="presenting" className="flex flex-row h-full w-2/3 gap-10 items-end bg-red-400">
                <img src="/presenting/disneylogo.gif" className={logoClass}></img>
                <img src="/presenting/walt_disney_travel.png" className={logoClass}></img>
                <img src="/presenting/UPRV-Logo-2018.jpg" className={logoClass}></img>
                <img src="/presenting/apple-vacations.webp" className={logoClass}></img>
                <img src="/presenting/seabournlogo.gif" className={logoClass}></img>
                <img src="/presenting/carnivallogo.jpg" className={logoClass}></img>
                <img src="/presenting/viking-ocean-cruises.jpg" className={logoClass}></img>
                <img src="/presenting/legoland.png" className={logoClass}></img>
                <img src="/presenting/Palaceresorts.jpg" className={logoClass}></img>
            </div>
            <div id="websiteBy">

            </div>
        </div>
    )
}