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
          <div className="basis-1/2 flex items-center justify-between gap-4">
            <div className="basis-1/2">
              <h1>call us</h1>
              <div className="flex items-start justify-start gap-2">
                <GiPhone />
                <div className="">
                  <h4>call us</h4>
                  <p>+2 342 5446 67</p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-2">
                <GiPhone />
                <div className="">
                  <h4>call us</h4>
                  <p>+2 342 5446 67</p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-2">
                <GiPhone />
                <div className="">
                  <h4>call us</h4>
                  <p>+2 342 5446 67</p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <h1>quick links</h1>

              <div className="flex items-center justify-start group gap-2">
                <p className="w-4 h-[2px] bg-black relative  group-hover:w-8 duration-150"></p>
                <span>about us</span>
              </div>
              <div className="flex items-center justify-start gap-2 group ">
                <p className="w-4 h-[2px] bg-black relative group-hover:w-8 duration-150"></p>
                <span>about us</span>
              </div>
              <div className="flex items-center justify-start group gap-2">
                <p className="w-4 h-[2px] bg-black relative group-hover:w-8 duration-150"></p>
                <span>about us</span>
              </div>
              <div className="flex items-center justify-start group gap-2">
                <p className="w-4 h-[2px] bg-black relative group-hover:w-8 duration-150"></p>
                <span>about us</span>
              </div>
              <div className="flex items-center justify-start group gap-2">
                <p className="w-4 h-[2px] bg-black relative group-hover:w-8 duration-150"></p>
                <span>about us</span>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex items-center justify-start gap-4">
              <div className="">
                <img
                  src="https://shelly.merku.love/wp-content/uploads/2020/11/girl-doing-homework-or-online-education-KCM5Z2A.jpg"
                  alt=""
                  className="w-28 object-cover block"
                />
              </div>
              <div className="">
                <h1>This Long-Awaited Technology May Finally</h1>
                <div className="">
                  <FaRegCalendar />
                  <span>November 28, 2020</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 mt-6">
              <div className="">
                <img
                  src="https://shelly.merku.love/wp-content/uploads/2020/11/girl-doing-homework-or-online-education-KCM5Z2A.jpg"
                  alt=""
                  className="w-28 object-cover block"
                />
              </div>
              <div className="">
                <h1>This Long-Awaited Technology May Finally</h1>
                <div className="">
                  <FaRegCalendar />
                  <span>November 28, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-8">
          <p>© Copyrights 2021 Shelly All rights reserved</p>
          <div className="flex items-center justify-start gap-4">
            <AiOutlineTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>    
      </div>
    </footer>
  );
};

export default Footer;
