import VideoTag from './components/videoTag';
import Header from './components/header'

export default function Home() {
  return (
    <div className="bg-green-300 w-full h-screen flex flex-col font-montserrat">
      <Header/>

      <div id="mainContainer"
        className="relative h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar scroll-smooth">
        <VideoTag />
        <div id="expertGuidance"
          className="bg-gray-400 w-full h-full flex snap-start snap-always z-200">
          div 2
        </div>
        <div id="personalizedPlanning"
          className="bg-gray-500 w-full h-full flex snap-start snap-always">
          div 3
        </div>
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
