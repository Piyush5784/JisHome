import Marquee from "react-fast-marquee";
import { BsDropbox, BsSlack, BsSnapchat } from "react-icons/bs";
import { FaSteamSquare } from "react-icons/fa";

const MarqueeLogos = () => {
  return (
    <>
      <div className="p-5 pt-8 opacity-60">
        <Marquee>
          <div className="flex gap-24 overflow-hidden">
            <div className="flex gap-4 items-center justify-center">
              <p className="text-2xl font-bold">Google</p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <BsDropbox size={30} />{" "}
              <p className="text-2xl font-bold">DropBox</p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <BsSlack size={30} /> <p className="text-2xl font-bold">Slack</p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <BsSnapchat size={30} />{" "}
              <p className="text-2xl font-bold">Snapchat</p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <p className="text-3xl font-bold">Zoom</p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              <FaSteamSquare size={30} />{" "}
              <p className="text-2xl font-bold">Stream</p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              {/* <BsGoogle /> */}
              <p className="text-3xl font-bold">coinbase</p>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeLogos;
