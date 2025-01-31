import Link from 'next/link';

export default function Header() {
    return (
        <div id="header"
            className="bg-white w-full flex items-center justify-around fixed top-0 z-10 opacity-65 max-h-30">
            <Link href="/">
                <img src="/sitelogo.png"
                    alt="J. Brescia Travel Co."
                    className="max-h-14 sm:max-h-20 md:max-h-28 w-auto">
                </img>
            </Link>
            <div className="text-black">
                <div id="phone">
                    (727) 266-JBTC
                </div>
                <div id="email">
                    JBTravelCo@icloud.com
                </div>
            </div>
        </div>
    )
}