
import NavBar from "../Components/NavBar";

import { RiShareFill } from "react-icons/ri";

import SingleTeacherFlex from "../Components/SingleTeacherFlex";
import SchoolHistoryBox from "../Components/SchoolHistoryBox";

const SingleTeacher = () => {
 
  // const teachers = [
    
  //   {
  //     id: "1",
  //     name: "Polina Kerston",
  //     position: "English Teacher",
  //     image:
  //       "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png",
  //   },
  //   {
  //     id: "2",
  //     name: "Polina Kerston",
  //     position: "English Teacher",
  //     image:
  //       "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png",
  //   },
  //   {
  //     id: "3",
  //     name: "Polina Kerston",
  //     position: "English Teacher",
  //     image:
  //       "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png",
  //   },
  //   {
  //     id: "4",
  //     name: "Polina Kerston",
  //     position: "English Teacher",
  //     image:
  //       "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Polina Kerston",
  //     position: "English Teacher",
  //     image:
  //       "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png",
  //   },
  //   {
  //     id: "6",
  //     name: "Polina Kerston",
  //     position: "English Teacher",
  //     image:
  //       "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png",
  //   },
  //   {
  //     id: "7",
  //     name: "Polina Kerston",
  //     position: "English Teacher",
  //     image:
  //       "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png",
  //   },
  //   {
  //     id: "8",
  //     name: "Polina Kerston",
  //     position: "English Teacher",
  //     image:
  //       "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png",
  //   },
  // ];
  return (
    <div>
      <section className="bg-white h-[60vh] relative overflow-hidden">
        <NavBar />
        <div className="container px-[5rem] mx-auto">
          <div className="flex items-center justify-start gap-4  ">
            <p className="text- capitalize text-md text-para-text-color">
              home
            </p>
            <p className="">.</p>
            <p className="text- capitalize text-md text-para-text-color">
              Teachers
            </p>
            <p className="">.</p>
            <p className="text- capitalize text-md text-para-text-color">
              Polina Kerston
            </p>
          </div>
          <h1>Polina Kerston</h1>
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

      <section className=" container px-[5rem] mx-auto">
        <SingleTeacherFlex />
      </section>

      <section className="container px-[5rem] mx-auto">
        <h1>Other Teachers</h1>

        <div className="flex items-center justify-between">
          <div className="basis-[23%]">
            <div className="rounded-3xl overflow-hidden relative">
              <img
                className="block w-full object-cover"
                src="https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
                alt=""
              />
              <span className="absolute bottom-6 right-4 bg-primary w-10 h-10 grid place-items-center rounded-full">
                <RiShareFill className=" text-white text-xl " />
              </span>
            </div>
            <div className="text-center">
              <h1>Polina Kerston</h1>
              <p>English Teacher</p>
            </div>
          </div>
          <div className="basis-[23%]">
            <div className="rounded-3xl overflow-hidden relative">
              <img
                className="block w-full object-cover"
                src="https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
                alt=""
              />
              <span className="absolute bottom-6 right-4 bg-primary w-10 h-10 grid place-items-center rounded-full">
                <RiShareFill className=" text-white text-xl " />
              </span>
            </div>
            <div className="text-center">
              <h1>Polina Kerston</h1>
              <p>English Teacher</p>
            </div>
          </div>
          <div className="basis-[23%]">
            <div className="rounded-3xl overflow-hidden relative">
              <img
                className="block w-full object-cover"
                src="https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
                alt=""
              />
              <span className="absolute bottom-6 right-4 bg-primary w-10 h-10 grid place-items-center rounded-full">
                <RiShareFill className=" text-white text-xl " />
              </span>
            </div>
            <div className="text-center">
              <h1>Polina Kerston</h1>
              <p>English Teacher</p>
            </div>
          </div>
          <div className="basis-[23%]">
            <div className="rounded-3xl overflow-hidden relative">
              <img
                className="block w-full object-cover"
                src="https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
                alt=""
              />
              <span className="absolute bottom-6 right-4 bg-primary w-10 h-10 grid place-items-center rounded-full">
                <RiShareFill className=" text-white text-xl " />
              </span>
            </div>
            <div className="text-center">
              <h1>Polina Kerston</h1>
              <p>English Teacher</p>
            </div>
          </div>
        </div>
      </section>

      
      <SchoolHistoryBox/>
    </div>
  );
};

export default SingleTeacher;
