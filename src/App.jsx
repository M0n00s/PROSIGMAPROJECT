import { AboutUs } from "./component/about/AboutUs";
import { CallAction } from "./component/calltoaction/CallAction";
import { Hero } from "./component/hero/Hero";
import { Navbar } from "./component/navbar/Navbar";
import { Statistics } from "./component/statistics/Statistics";
import { Testimonials } from "./component/testimonials/Testimonials";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <AboutUs />
      <CallAction />
      <Testimonials />
    </>
  );
};
