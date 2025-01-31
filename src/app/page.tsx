import Header from './components/header'
import VideoTag from './components/videoTag';
import UIFrame from './components/UIFrame';

export default function Home() {
  const defBgClass = "bg-cover bg-center w-full h-full flex flex-col snap-start snap-always justify-end z-09"
  return (
    <div className="bg-green-300 w-full h-screen flex flex-col font-montserrat relative">
      <Header/>

      <div id="mainContainer"
        className="relative h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar scroll-smooth">
        <VideoTag />
        <UIFrame
          id="expertGuidance"
          bgClass={defBgClass + ' bg-[url(/alaska.jpg)]'}
          title="Expert Guidance"
          mainText="Our industry expertise and insider knowledge offer exclusive recommendations—from hidden gems to can’t-miss attractions—ensuring your trip goes well beyond the ordinary."
          link="#personalizedPlanning"
          isArrowDown={true} />
        <UIFrame 
          id="personalizedPlanning"
          bgClass={defBgClass + ' bg-[url(/italy.jpg)]'}
          title="Personalized Planning"
          mainText="Your journey should reflect you. We take the time to understand your preferences and aspirations, then craft an itinerary that’s uniquely yours. From private villas and tailor-made cruises to fun-filled family getaways, every detail is designed around your vision."
          link="#unmatchedSupport"
          isArrowDown={true} />
        <UIFrame 
          id="unmatchedSupport"
          bgClass={defBgClass + ' bg-[url(/hawaii.jpg)]'}
          title="Unmatched Support"
          mainText="Luxury means peace of mind. From your first consultation until you return home, we’re with you every step of the way. Need last-minute changes or assistance abroad? We’re available 24/7, just a call or message away."
          link="#elevatedExperience"
          isArrowDown={true} />
        <UIFrame
          id="elevatedExperience"
          bgClass={defBgClass + ' bg-[url(/mexico.jpg)]'}
          title="Elevated Experience"
          mainText="Gain access to exclusive perks, VIP check-ins, premium reservations, and curated experiences that take your trip from special to spectacular."
          link="#video+tag"
          isArrowDown={false} />
      </div>
    </div>
);
}
