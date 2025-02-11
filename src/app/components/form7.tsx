import Link from 'next/link';

export default function form7() {
    return(
        <div className="flex flex-col flex-grow mt-10 text-wrap">
            <div className="text-black text-xl md:px-5 px-3 justify-around">
                <span className="text-gray-600 italic">From Dream to Destination...</span>
                <br></br><br></br><br></br>
                We have received your submission and will get working on planning your next adventure right away!
                <br></br><br></br>
                In the meantime, if you have any additional questions or requests, please call
                <Link href="tel:7272665282" className="font-bold hover:text-gray-600"> (727) 266-5282</Link> or email
                <Link href="mailto:JBTravelCo@icloud.com" className="font-bold hover:text-gray-600"> JBTravelCo@icloud.com</Link>.
                <br></br><br></br><br></br>
                Thank you!
            </div>
        </div>
    )
}