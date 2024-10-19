import Accordion from "./components/FaqSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InsightsSection from "./components/InsightsSection";
import MarqueeLogo from "./components/MarqueeLogo";
import PricingSection11 from "./components/PricingSection";
import ProjectsSection from "./components/ProjectsSection";
import Services from "./components/Services";
import Steps from "./components/Steps";
import { Team } from "./components/TeamSection";
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
      <Team />
      <Accordion />
      <section className="bg-white px-5 w-full md:px-40">
        <div className=" md:px-6 py-12 mx-auto">
          <div className="text-center ">
            <p className="  text-black font-bold text-4xl">Contact us</p>

            <h1 className="mt-2 text-2xl font-semibold  md:text-3xl  text-black">
              We’d love to hear from you
            </h1>

            <p className="mt-3 text-gray-500 ">Chat to our friendly team.</p>
          </div>

          <img
            className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
            src="/grpImage.jpeg"
            alt="reload"
          />
        </div>
      </section>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}
