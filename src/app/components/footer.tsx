import Image from 'next/image';

export default function Footer() {
    const logoClass = "max-w-[6vw] h-2/3 object-contain"
    return(
        <div id="footer" className="flex flex-row w-full h-1/3 snap-start snap-always bg-white">
            <div id="presenting" className="flex flex-row h-full w-2/3 gap-10 items-end bg-red-400">
                <Image alt="Disney Logo" src="/presenting/disneylogo.gif" className={logoClass}></Image>
                <Image alt="Disney Travel Logo"  src="/presenting/walt_disney_travel.png" className={logoClass}></Image>
                <Image alt="Universal Logo" src="/presenting/UPRV-Logo-2018.jpg" className={logoClass}></Image>
                <Image alt="Apple Vacations Logo" src="/presenting/apple-vacations.webp" className={logoClass}></Image>
                <Image alt="Seabourn Logo" src="/presenting/seabournlogo.gif" className={logoClass}></Image>
                <Image alt="Carnival Logo" src="/presenting/carnivallogo.jpg" className={logoClass}></Image>
                <Image alt="Viking Ocean Cruises Logo" src="/presenting/viking-ocean-cruises.jpg" className={logoClass}></Image>
                <Image alt="Legoland Logo" src="/presenting/legoland.png" className={logoClass}></Image>
                <Image alt="Palace Resorts Logo" src="/presenting/Palaceresorts.jpg" className={logoClass}></Image>
            </div>
            <div id="websiteBy">

            </div>
        </div>
    )
}