
export default function Footer() {
    const logoClass = "max-w-[6vw] h-2/3 object-contain"
    return(
        <div id="footer" className="flex flex-row w-full h-1/3 snap-start snap-always bg-white">
            <div id="presenting" className="flex flex-row h-full w-2/3 gap-10 items-end bg-red-400">
                <img alt="Disney Logo" src="/presenting/disneylogo.gif" className={logoClass}></img>
                <img alt="Disney Travel Logo"  src="/presenting/walt_disney_travel.png" className={logoClass}></img>
                <img alt="Universal Logo" src="/presenting/UPRV-Logo-2018.jpg" className={logoClass}></img>
                <img alt="Apple Vacations Logo" src="/presenting/apple-vacations.webp" className={logoClass}></img>
                <img alt="Seabourn Logo" src="/presenting/seabournlogo.gif" className={logoClass}></img>
                <img alt="Carnival Logo" src="/presenting/carnivallogo.jpg" className={logoClass}></img>
                <img alt="Viking Ocean Cruises Logo" src="/presenting/viking-ocean-cruises.jpg" className={logoClass}></img>
                <img alt="Legoland Logo" src="/presenting/legoland.png" className={logoClass}></img>
                <img alt="Palace Resorts Logo" src="/presenting/Palaceresorts.jpg" className={logoClass}></img>
            </div>
            <div id="websiteBy">

            </div>
        </div>
    )
}