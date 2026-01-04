import Header from "./components/Header";
import EducationCourse from "./UI/EducationCourse";
import Hero from "./UI/Hero";
import Journey from "./UI/Journey";
import Portfolio from "./UI/Portfolio";
import SkillSet from "./UI/SkillSet";
import Toolbox from "./UI/Toolbox";
import WorkHistory from "./UI/WorkHistory";

export default function Home() {
  return (
    <>
    
    <Hero/>
    <Journey/>
    <WorkHistory/>
    <EducationCourse/>
    <SkillSet/>
    <Toolbox/>
    <Portfolio/>
    </>
  );
}