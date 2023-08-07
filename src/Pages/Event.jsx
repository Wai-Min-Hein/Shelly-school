import NavBar from "../Components/NavBar";

import { FaRegCalendar } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import SchoolHistoryBox from "../Components/SchoolHistoryBox";

const Event = () => {
  return (
    <div className="bg-background">
      <section className="bg-white h-[60vh] relative overflow-hidden">
        <NavBar />
        <div className="container px-[5rem] mx-auto">
          <div className="flex items-center justify-start gap-4  ">
            <p className="text- capitalize text-md text-para-text-color">
              home
            </p>
            <p className="">.</p>
            <p className="text- capitalize text-md text-para-text-color">
              Events
            </p>
          </div>
          <h1>Events</h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="shelly-shape absolute bottom-[-1rem] h-[12rem] left-0 w-[200vw]"
        >
          <path
            className="shelly-shape--fill"
            fill="#f5fcff"
            d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
            c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
            c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
          ></path>
        </svg>
      </section>

      <section className="container px-[5rem] mx-auto py-16">
        <div className="bg-white flex items-start justify-start gap-6 p-10 rounded-md">
          <div className="basis-1/3 rounded-lg overflow-hidden">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5-1-300x200.png"
              alt=""
            />
          </div>
          <div className="basis-2/3 flex-1 flex items-start justify-between">
            <div className="flex-1">
              <div className="flex justify-start gap-6">
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-full grid place-items-center bg-blue">
                    <FaRegCalendar className=" text-sm" />
                  </div>
                  <span>2022-12-30</span>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-full grid place-items-center bg-blue">
                    <BiSolidTimeFive className=" text-sm" />
                  </div>
                  <span>12:00</span>
                </div>
              </div>

              <h1>Explore Watercolor Illustration</h1>

              <div className="flex items-center justify-start gap-2">
                <GrLocation />
                <p>25 Grafton St, Worcester</p>
              </div>
            </div>

            <div className="">
              <span className="text-primary text-xl">$ 8</span>
            </div>
          </div>
        </div>

        <div className="bg-white flex items-start justify-start gap-6 p-10 rounded-md my-12">
          <div className="basis-2/3 flex-1 flex items-start justify-between">
            <div className="flex-1">
              <div className="flex justify-start gap-6">
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-full grid place-items-center bg-blue">
                    <FaRegCalendar className=" text-sm" />
                  </div>
                  <span>2022-12-30</span>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-full grid place-items-center bg-blue">
                    <BiSolidTimeFive className=" text-sm" />
                  </div>
                  <span>12:00</span>
                </div>
              </div>

              <h1>Explore Watercolor Illustration</h1>

              <div className="flex items-center justify-start gap-2">
                <GrLocation />
                <p>25 Grafton St, Worcester</p>
              </div>
            </div>

            <div className="">
              <span className="text-primary text-xl">$ 8</span>
            </div>
          </div>
        </div>
      </section>

      <SchoolHistoryBox />

      


    </div>
  );
};

export default Event;
