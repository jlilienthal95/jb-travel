import { RiArrowDownWideLine, RiArrowUpWideLine } from "react-icons/ri"
import Link from 'next/link';

type UIFrameProps = {
    id: string,
    bgClass: string,
    title: string,
    mainText: string,
    link: string,
    isArrowDown: boolean,
}

export default function UIFrame({ id, bgClass, title, mainText, link, isArrowDown }: UIFrameProps) {
    return (
        <div id={id} className={bgClass}>
            <div className="w-full h-1/2 bg-gradient-to-t from-black via-black/100 to-transparent flex justify-center overflow-x-hidden">
                <div className="max-w-5xl px-5 text-white md:text-2xl text-md mt-auto mb-16 mx-5">
                    <span className="text-[clamp(1.5rem,5vw,3rem)]">{title}<br/></span>
                    <span>{mainText}</span>
                    <div id="buttonContainer" className="flex pt-5 pb-5 items-center justify-center gap-x-20">
                        <Link href={link}>
                            {isArrowDown ? <RiArrowDownWideLine className="text-3xl md:text-4xl lg:text-5xl hover:text-white text-gray-400"/> : <RiArrowUpWideLine className="text-3xl md:text-4xl lg:text-5xl hover:text-white text-gray-400"/>}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
