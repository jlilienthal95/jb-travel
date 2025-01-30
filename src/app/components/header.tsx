import Link from 'next/link';

export default function Header() {
    return (
        <div id="header"
            className="bg-white w-full h-1/8 flex items-center justify-around fixed top-0 z-10 opacity-65">
            <Link href="/">
                <img src="/sitelogo.png"
                    alt="J. Brescia Travel Co."
                    className="h-20 w-auto md:h-32 md:w-auto">
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