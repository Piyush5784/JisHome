import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InsightsSection from "./components/InsightsSection";
import MarqueeLogo from "./components/MarqueeLogo";
import PricingSection11 from "./components/PricingSection";
import ProjectsSection from "./components/ProjectsSection";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="md:h-[650px] h-[750px]  md:p-0 hero duration-200">
      <HeroSection />

      <InsightsSection />

      <Steps />
      <ProjectsSection />
      <PricingSection11 />
      <Services />

      <div className=" bg-customBlack text-white md:h-[270px]">
        <div className="text-center p-10 ">
          <p className="pt-5 text-4xl font-light">
            We are collabrating with the top brands around the world
          </p>
        </div>

        <MarqueeLogo />
      </div>

      <div>
        <Testimonials />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}
