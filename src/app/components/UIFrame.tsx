import { FaChevronDown, FaChevronUp } from "react-icons/fa"

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
                <div className="max-w-5xl w-full px-5 text-white md:text-2xl text-md mt-auto mb-16 mx-5">
                    <span className="text-[clamp(1.5rem,5vw,3rem)]">{props.title}<br/></span>
                    <span>{props.mainText}</span>
                    <div id="buttonContainer" className="flex pt-5 pb-5 items-center justify-between gap-x-20">
                        <button className="hover:bg-white hover:bg-opacity-25 rounded-xl p-4 text-white border-2 border-opacity-25 border-gray-50">Plan My Trip</button>
                        <Link href={props.link}>
                            {props.isArrowDown ? <FaChevronDown className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl hover:text-white text-gray-400"/> : <FaChevronUp className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl hover:text-white text-gray-300"/>}
                        </Link>
                        <button className="rounded-xl p-4 border-gray-50 text-transparent">Plan My Trip</button>
                    </div>
                </div>
            </div>
            {/* <div className='relative flex w-full'>
                <FaChevronDown className='size-20'/>
            </div> */}
        </div>
    );
}
