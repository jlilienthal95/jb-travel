import Header from './components/header'
import VideoTag from './components/videoTag';
import ExpertGuidance from './components/expertGuidance';
import PersonalizedPlanning from './components/personalizedPlanning';

export default function Home() {
  return (
    <div className="bg-green-300 w-full h-screen flex flex-col font-montserrat">
      <Header/>

      <div id="mainContainer"
        className="relative h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar scroll-smooth">
        <VideoTag />
        <ExpertGuidance />
        <PersonalizedPlanning />
        <div id="unmatchedSupport"
          className="bg-gray-600 w-full h-full flex snap-start snap-always">
          div 4
        </div>
        <div id="elevatedExperience"
          className="bg-gray-700 w-full h-full flex snap-start snap-always">
          div 5
        </div>
      </div>
    </div>
);
}
