import { GoArrowUp } from "react-icons/go";
import { PiDatabaseThin } from "react-icons/pi";
import { RiSparkling2Line } from "react-icons/ri";
import { SiWikidata } from "react-icons/si";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import ButtonWithGlow from "./components/ButtonWithGlow";
import Insights from "./components/Insights";
import MarqueeLogos from "./components/MarqueeLogos";
import Topbar from "./components/Topbar";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="md:h-[650px] h-[750px]  md:p-0 hero duration-200">
      <div className="lg:mx-20 h-screen p-5">
        <Topbar />
        <div className=" font-bold flex items-center justify-center text-center ">
          <div className="flex items-center flex-col text-white pt-10 mb-10 ">
            <span className="rounded-full w-[200px] text-slate-900 border-slate-950 flex items-center border p-3 justify-center">
              <RiSparkling2Line className=" text-[2rem]" />
              <p className=" text-[1rem] w-full font-light text-slate-900">
                Impresive Designs
              </p>
            </span>
            <p className="text-6xl">
              Beautiful Designs <br /> For Everyone
            </p>
            <p className="font-light pt-5">
              Transform your living spaces into a reflection of your unique
              style. Whether you're dreaming of a modern, <br /> minimalist home
              or a cozy, rustic retreat, our team at @info will bring your
              vision to life.
            </p>
            <div className="flex gap-4 p-3">
              <ButtonWithGlow>Get Started</ButtonWithGlow>
              <button className=" rounded-full px-3 hover:bg-slate-200 duration-200 font-light bg-white text-black">
                {" "}
                Latest Designs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <Insights />
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-60 gap-20">
          <div className="md:pt-10 md:pl-10 lg:pl-0">
            <img
              src={"/ContentImage.jpg"}
              alt="reload"
              height={300}
              width={500}
              className="rounded"
            />
          </div>
          <div className="md:pl-10 lg:pl-0">
            <p className="text-6xl font-bold">
              Enhance Your <br /> Interior <br /> Through Design
            </p>
            <p className="pt-10 text-xl">
              Our practice is Designing complete environments exceptional <br />
              buildings, communities and places in special situations, where{" "}
              <br /> a unique historic or nature enviroment requests an
              especially <br /> thoughtful and innovative solution.
            </p>

            <button className="px-4 py-3 bg-white text-black mt-10 hover:bg-gray-950 hover:text-white duration-200 rounded-full border-black border text-lg">
              <div className="flex gap-2 items-center justify-center ">
                About us <GoArrowUp size={25} className="rotate-45" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-[#f2efed] mt-14 p-5">
        <div className="text-center p-10">
          <p className="font-bold text-5xl ">See How We Works</p>
          <p className="pt-5">
            Collaborate with your designer online on our easy <br /> to use
            platform
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around">
          <div>
            <span className="text-[#5f5f5f]">STEP 01</span>
            <p className="text-4xl font-semibold">Get Started</p>
            <p className="py-5">
              Share your photos and inspiration, in addition to the <br />{" "}
              things you want to keep so we can match you with the <br />{" "}
              perfect designer for you space, style, and budget.
            </p>
            <div className="h-[1px] bg-gray-400 rounded my-4"></div>

            <span className="text-[#5f5f5f]">STEP 02</span>
            <p className="text-4xl font-semibold">Design Together</p>
            <p className="py-5">
              See your space transformed online and collaborate with <br />
              your designer to share what you like and dislike
            </p>
            <div className="h-[1px] bg-gray-400 rounded my-4"></div>

            <span className="text-[#5f5f5f]">STEP 03</span>
            <p className="text-4xl font-semibold">Shop & Save</p>
            <p className="py-5">
              After you receive your final design, a curated shopping <br />
              list of products can be purchased.
            </p>
            <div className="h-[1px] bg-gray-400 rounded mb-10 md:mb-0"></div>
          </div>
          <div>
            <img
              src={"/ContentImage2.jpg"}
              alt="reload"
              height={300}
              width={500}
              className="rounded"
            />
          </div>
        </div>
      </div>

      <div className="lg:h-screen p-10 text-center">
        <p className=" py-10 text-6xl font-bold">Services We're Providing</p>
        <p>
          We are working primarily in and around London and the Home Counties,
          on schemes <br /> that range from small intimate spaces to large
          projects.
        </p>

        <div className="flex items-center flex-col md:pl-20 lg:flex-row gap-32 p-5 pb-0 pt-10 justify-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <VscWorkspaceTrusted size={80} />{" "}
            <div>
              <p className="text-3xl py-5">Architecture</p>
              <p className="text-gray-500">
                We develop the full cycle of project <br /> documentation & full
                details. Our <br /> Clients satisfaction is most priority
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <PiDatabaseThin size={80} />{" "}
            <div>
              <p className="text-3xl py-5">Interior Work</p>
              <p className="text-gray-500">
                we will take care of the interior <br /> design, build &
                management of all <br /> kind of living projects.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <SiWikidata size={80} />{" "}
            <div>
              <p className="text-3xl py-5">Retail Designs</p>
              <p className="text-gray-500">
                We can help you with the retails <br /> interior design and
                third party <br />
                management to create best.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className=" bg-customBlack text-white md:h-[270px]">
        <div className="text-center p-10 ">
          {/* <p className="font-bold text-5xl">
            We Have Gained Trust Over the Years
          </p> */}
          <p className="pt-5 text-4xl font-light">
            We are collabrating with the top brands around the world
          </p>
        </div>
        <MarqueeLogos />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        {" "}
        <div className="flex flex-col pl-5 md:pl-0 md:flex-row justify-around items-start pt-20  bg-customBlack text-white">
          <div className="flex flex-col font-bold text-5xl">
            <div>
              Ready To <br /> Work With Us
            </div>
            <div>
              {" "}
              <button className="px-4 py-3 hover:bg-white hover:text-black mt-10 border-white duration-200 rounded-full border text-lg">
                <div className="flex gap-2 items-center justify-center ">
                  Contact us <GoArrowUp size={25} className="rotate-45" />
                </div>
              </button>
            </div>
          </div>

          <div className="pt-10">
            <p>
              if you're not happy, we're not happy.We work tirelessly <br /> to
              make sure your experience is dilightful. That's why we offer{" "}
              <br /> the happiness guarantee.
            </p>
            <div className="h-[0.5px] my-4 bg-gray-500 rounded"></div>

            <div className="flex gap-5 md:gap-20">
              <div>
                <p className="py-10">Contact Us</p>
                <p className="pb-10 cursor-pointer">
                  Email: <br />
                  info@jishome.com
                </p>
                <p className="pb-10 ">
                  Phone: <br />
                  888-888-888
                </p>
                <p className="pb-10">
                  Address: <br />
                  123 High Street London, <br /> SW1A 1AA United <br /> Kingdom
                </p>
              </div>
              <div>
                <p className="py-10 ">Social Media</p>
                <p className="pb-10 hover:underline cursor-pointer">
                  Instagram
                </p>
                <p className="pb-10 hover:underline cursor-pointer">Fackbook</p>
                <p className="pb-10 hover:underline cursor-pointer">Behance</p>
                <p className="pb-10 hover:underline cursor-pointer">Twitter</p>
                <p className="pb-10 hover:underline cursor-pointer">Linkedin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
