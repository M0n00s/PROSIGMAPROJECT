import { AboutUs } from "./component/about/AboutUs";
import { CallAction } from "./component/calltoaction/CallAction";
import { Hero } from "./component/hero/Hero";
import { Maps } from "./component/maps/Maps";
import { Navbar } from "./component/navbar/Navbar";
import { Services } from "./component/servicess/Services";
import { Statistics } from "./component/statistics/Statistics";
import { Testimonials } from "./component/testimonials/Testimonials";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <AboutUs />
      <Maps />
      <Services />
      <CallAction />
      <Testimonials />
    </>
  );
};
