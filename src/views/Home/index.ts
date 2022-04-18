import dynamic from "next/dynamic";
export const HeroView = dynamic(() => import("./HeroView"));
export const UpcomingView = dynamic(() => import("./UpcomingView"));
export const Gonear = dynamic(() => import("./Gonear"));
export const RoadMap = dynamic(() => import("./RoadMap"));
export const LearnMore = dynamic(() => import("./LearnMore"));
