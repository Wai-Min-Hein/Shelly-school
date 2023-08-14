import { ImLocation } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";

import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { GiPhone } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="  relative z-10 py-14">
      <div className="bg-white z-20 absolute top-0 left-0 w-full h-full"></div>
      <div className="container mx-auto px-[5rem] z-20 relative">
        <div className="flex items-center justify-between gap-4 pb-12 border-b border-secondary">
          <div className="basis-1/2 flex items-start justify-between gap-4">
            <div className="basis-1/2">
              <h1 className="text-xl font-semibold ca capitalize mb-6">
                contact us
              </h1>
              <div className="flex items-start justify-start gap-2">
                <GiPhone className="text-primary text-xl " />
                <div className="">
                  <h4 className="text-lg font-semibold ">call us</h4>
                  <p>+2 342 5446 67</p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-2">
                <GiPhone className="text-primary text-xl " />
                <div className="">
                  <h4 className="text-lg font-semibold ">call us</h4>
                  <p>+2 342 5446 67</p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-2">
                <GiPhone className="text-primary text-xl " />
                <div className="">
                  <h4 className="text-lg font-semibold ">call us</h4>
                  <p>+2 342 5446 67</p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <h1 className="text-xl font-semibold ca capitalize mb-6">
                quick links
              </h1>

              <div className="flex items-center justify-start group gap-2">
                <p className="w-6 h-[2px] bg-secondary relative  group-hover:w-8 duration-150"></p>
                <span className="text-secondary capitalize">about us</span>
              </div>
              <div className="flex items-center justify-start gap-2 group ">
                <p className="w-6 h-[2px] bg-secondary relative group-hover:w-8 duration-150"></p>
                <span className="text-secondary capitalize">about us</span>
              </div>
              <div className="flex items-center justify-start group gap-2">
                <p className="w-6 h-[2px] bg-secondary relative group-hover:w-8 duration-150"></p>
                <span className="text-secondary capitalize">about us</span>
              </div>
              <div className="flex items-center justify-start group gap-2">
                <p className="w-6 h-[2px] bg-secondary relative group-hover:w-8 duration-150"></p>
                <span className="text-secondary capitalize">about us</span>
              </div>
              <div className="flex items-center justify-start group gap-2">
                <p className="w-6 h-[2px] bg-secondary relative group-hover:w-8 duration-150"></p>
                <span className="text-secondary capitalize">about us</span>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex items-center justify-start gap-4 border-b-2 border-secondary border-opacity-40 pb-3">
              <div className="">
                <img
                  src="https://shelly.merku.love/wp-content/uploads/2020/11/girl-doing-homework-or-online-education-KCM5Z2A.jpg"
                  alt=""
                  className="w-28 object-cover rounded-lg block"
                />
              </div>
              <div className="">
                <h1>This Long-Awaited Technology May Finally</h1>
                <div className="flex items-center gap-3">
                  <FaRegCalendar className="text-secondary" />
                  <span className="text-sm mt-1">November 28, 2020</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 mt-6">
              <div className="">
                <img
                  src="https://shelly.merku.love/wp-content/uploads/2020/11/girl-doing-homework-or-online-education-KCM5Z2A.jpg"
                  alt=""
                  className="w-28 object-cover rounded-lg block"
                />
              </div>
              <div className="">
                <h1>This Long-Awaited Technology May Finally</h1>
                <div className="flex items-center gap-3">
                  <FaRegCalendar className="text-secondary" />
                  <span className="text-sm mt-1">November 28, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-8">
          <p>© Copyrights 2021 Shelly All rights reserved</p>
          <div className="flex items-center justify-start gap-4">
            <div className="w-8 h-8 border-2 border-primary rounded-full grid place-items-center hover:bg-primary duration-200 cursor-pointer">
              <AiOutlineTwitter className="text-primary hover:text-white duration-200" />
            </div>
            <div className="w-8 h-8 border-2 border-primary rounded-full grid place-items-center hover:bg-primary duration-200 cursor-pointer">
              <FaFacebookF className="text-primary  hover:text-white duration-200" />
            </div>
            <div className="w-8 h-8 border-2 border-primary rounded-full grid place-items-center hover:bg-primary duration-200 cursor-pointer">
              <FaLinkedinIn className="text-primary  hover:text-white duration-200" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
