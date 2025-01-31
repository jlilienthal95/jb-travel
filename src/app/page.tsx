import Header from './components/header'
import VideoTag from './components/videoTag';
import ExpertGuidance from './components/expertGuidance';
import PersonalizedPlanning from './components/personalizedPlanning';
import UnmatchedSupport from './components/unmatchedSupport';
import ElevatedExperience from './components/elevatedExperience';

export default function Home() {
  return (
    <div className="bg-green-300 w-full h-screen flex flex-col font-montserrat">
      <Header/>

      <div id="mainContainer"
        className="relative h-full snap-y snap-mandatory overflow-y-scroll no-scrollbar scroll-smooth">
        <VideoTag />
        <ExpertGuidance />
        <PersonalizedPlanning />
        <UnmatchedSupport />
        <ElevatedExperience/>
      </div>
    </div>
);
}
