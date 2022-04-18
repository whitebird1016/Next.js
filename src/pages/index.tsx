import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { HeroView, UpcomingView } from "views/Home";
import Gonear from "views/Home/Gonear";
import RoadMap from "views/Home/RoadMap";
import LearnMore from "views/Home/LearnMore";
import Funds from "views/Home/Funds";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="home" description="this is home page" />
      <HeroView />
      <UpcomingView />
      <Gonear />
      <RoadMap />
      <LearnMore />
      <Funds />
    </>
  );
};

export default Home;
