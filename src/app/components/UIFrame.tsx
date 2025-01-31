import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";

import Link from 'next/link';

type UIFrameProps = {
    id: string,
    bgClass: string,
    title: string,
    mainText: string,
    link: string,
    isArrowDown: boolean,
}

export default function UIFrame(props: UIFrameProps) {
    return (
        <div id={props.id} className={props.bgClass}>
            <div className="w-full h-1/2 bg-gradient-to-t from-black via-black/100 to-transparent flex justify-center">
                <div className="max-w-5xl w-full px-5 text-white md:text-2xl text-md mt-auto mb-14 mx-5">
                    <span className="text-[clamp(1.5rem,5vw,3rem)]">- {props.title}<br/></span>
                    <span>{props.mainText}</span>
                    <div id="buttonContainer" className="flex pt-5 pb-5 items-center justify-start gap-x-20">
                        <Link href={props.link}>
                            {props.isArrowDown ? <FaChevronCircleDown className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl hover:text-white text-gray-300"/> : <FaChevronCircleUp className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl hover:text-white text-gray-300"/>}
                        </Link>
                        <button className="bg-white bg-opacity-65 rounded-xl p-4 text-black border-2 box-border border-transparent hover:bg-opacity-100">Plan My Trip</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
