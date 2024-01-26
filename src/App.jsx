import { AboutUs } from "./component/about/AboutUs";
import { CallAction } from "./component/calltoaction/CallAction";
import { Hero } from "./component/hero/Hero";
import { Navbar } from "./component/navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <CallAction />
    </>
  );
};
