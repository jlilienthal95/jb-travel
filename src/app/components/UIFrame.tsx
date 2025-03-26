import { RiArrowDownWideLine } from "react-icons/ri"
import Link from 'next/link';

type UIFrameProps = {
    id: string,
    bgClass: string,
    title: string,
    mainText: string,
    link: string,
}

export default function UIFrame({ id, bgClass, title, mainText, link }: UIFrameProps) {
    return (
        <div id={id} className={bgClass}>
            <div className="w-full h-1/2 bg-gradient-to-t from-slate-900 via-black/80 to-transparent flex justify-center overflow-x-hidden">
                <div className="max-w-5xl px-5 text-white md:text-2xl text-md mt-auto mx-5">
                    <span className="text-[clamp(1.5rem,5vw,3rem)]">{title}<br/></span>
                    <span>{mainText}</span>
                    <div id="buttonContainer" className="flex pt-5 pb-5 items-center justify-center ">
                        <Link href={link}>
                            <RiArrowDownWideLine className="text-3xl md:text-4xl lg:text-5xl hover:text-white text-gray-400"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
