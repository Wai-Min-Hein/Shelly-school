import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

import { ImLocation } from "react-icons/im";


import {} from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import teacher from "../../Images/teacher.svg";
import certificate from "../../Images/certificate.svg";

import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Home = () => {
  const nav = useNavigate();

  return (
    <div className="relative">
      
      <div className="bg-white">
        <div className="flex items-center  justify-between py-8 border-b border-b-blue container mx-auto px-[5rem]">
          <div className="flex items-center  justify-start gap-4">
            <img
              className="w-[2.5rem]"
              src="https://shelly.merku.love/wp-content/uploads/2021/07/logo.png"
              alt=""
            />
            <button className="uppercase text-para-text-color font-semibold text-xl">
              shelly
            </button>
          </div>

          <div className="flex items-center justify-between gap-16">
            <div className="flex items-start justify-start gap-4">
              <FaPhoneAlt className="text-primary text-xl" />
              <div className="">
                <h6 className="text-header-text-color font-semibold">
                  Call Us
                </h6>
                <p className="text-para-text-color">+959785735527</p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4">
              <BiSolidTimeFive className="text-primary text-xl" />
              <div className="">
                <h6>Call Us</h6>
                <p>+959785735527</p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-4">
              <MdLocationOn className="text-primary text-xl" />
              <div className="">
                <h6>Call Us</h6>
                <p>+959785735527</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-24 py-6 container mx-auto px-[5rem]">
          <ul className="flex items-center justify-start gap-10 flex-1">
            <li
              onClick={() => nav("/about-us")}
              className="capitalize text-md font-medium nav-link relative inline-block hover:text-primary duration-150 text-secondary"
            >
              Home
            </li>
            <li className="capitalize text-md font-medium nav-link relative inline-block hover:text-primary duration-150 text-secondary">
              about us
            </li>
            <li className="capitalize text-md nav-link font-medium  relative  group flex items-center  justify-start gap-2">
              <span className="hover:text-primary duration-150 text-secondary">
                classes
              </span>
              <AiOutlineCaretDown className="text-xs text-secondary" />
              <span className="absolute top-[3rem] left-0 w-[10rem] bg-white h-[2rem] hidden group-hover:inline-block">
                <span className="text-secondary shadow-lg px-5 py-2  ">
                  Single Class
                </span>
              </span>
            </li>

            <li className="capitalize text-md nav-link font-medium  relative flex items-center  justify-start gap-2 group">
              <span className="hover:text-primary duration-150 text-secondary">
                teacher
              </span>
              <AiOutlineCaretDown className="text-xs text-secondary" />

              <span className="absolute top-[3rem] left-0 w-[10rem] bg-white h-[2rem] hidden group-hover:inline-block">
                <span className="text-secondary shadow-lg px-5 py-2  ">
                  teacher single
                </span>
              </span>
            </li>
            <li className="capitalize text-md nav-link font-medium  relative flex items-center  justify-start gap-2 group">
              <span className="hover:text-primary duration-150 text-secondary">
                events
              </span>
              <AiOutlineCaretDown className="text-xs text-secondary" />

              <span className="absolute top-[3rem] left-0 w-[10rem] bg-white h-[2rem] hidden group-hover:inline-block">
                <span className="text-secondary shadow-lg px-5 py-2  ">
                  event single
                </span>
              </span>
            </li>
            <li className="capitalize text-md font-medium nav-link relative inline-block hover:text-primary duration-150 text-secondary">
              blog
            </li>
            <li className="capitalize text-md font-medium nav-link relative inline-block hover:text-primary duration-150 text-secondary">
              contact
            </li>
          </ul>
          <div className="flex items-center justify-start gap-5">
            <span className=" w-[2rem] h-[2rem] rounded-full border-2 border-primary grid place-items-center">
              <AiOutlineTwitter className="text-primary text-xl" />
            </span>
            <span className=" w-[2rem] h-[2rem] rounded-full border-2 border-primary grid place-items-center">
              <FaFacebookF className="text-primary text-xl" />
            </span>
            <span className=" w-[2rem] h-[2rem] rounded-full border-2 border-primary grid place-items-center">
              <FaLinkedinIn className="text-primary text-xl" />
            </span>
          </div>
        </div>

        <section className="flex i items-center justify-between min-h-screen gap-6 container mx-auto px-[5rem]">
          <div className="basis-1/2">
            <h1>The Smarter Way to Learn Anything</h1>
            <p>
              More than a pixel-perfect WordPress theme: bold design, innovative
              features, developed for education/academic websites.
            </p>
            <div className="flex items-center justify-between border border-blue rounded-full px-5 py-4">
              <input
                type="text"
                placeholder="Search here"
                className="focus:outline-none"
                name=""
                id=""
              />
              <HiSearch />
            </div>
          </div>
          <div className="basis-1/2 grid place-items-center">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-1.jpg"
              className="justify-self-start w-[15rem] h-[15rem] rounded-full"
              alt=""
            />
            <div className="flex items-center justify-start gap-16">
              <img
                src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-2.jpg"
                className="w-[9rem] h-[9rem] rounded-full translate-y-[3rem]"
                alt=""
              />
              <img
                src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-3.jpg"
                className="w-[12rem] h-[12rem] rounded-full translate-y-[-3rem]"
                alt=""
              />
            </div>
            <img
              src="https://shelly.merku.love/wp-content/uploads/2021/06/hero-4.jpg"
              className="w-[6rem] h-[6rem] mt-8 rounded-full"
              alt=""
            />
          </div>
        </section>
      </div>

      <section className="container mx-auto px-[5rem] relative py-20">
        <div className="text-center">
          <h1>
            Welcome to <span className="text-primary">Shelly</span>{" "}
          </h1>
          <p>
            Ecosystem blended learning off-the-shelf learning storytelling
            explainer animation completion criteria.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="basis-1/3 bg-white rounded-2xl shadow-lg grid place-items-center py-12">
            <div className="relative after:content-[''] after:absolute after:w-[3rem] after:h-[3rem] after:bg-yellow after:top-0 after:left-[.5rem] after:z-10  after:rounded-full">
              <img className="w-[3rem] z-50 relative" src={teacher} alt="" />
            </div>
            <h6>Experienced Teachers</h6>
            <p>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
          </div>
          <div className="basis-1/3 bg-white rounded-2xl shadow-lg  grid place-items-center  py-12">
            <div className="">
              <img
                className="w-[6rem] h-[6rem] rounded-full"
                src="https://shelly.merku.love/wp-content/uploads/2021/08/kids-at-lesson-SEUX7GM-150x150.jpg"
                alt=""
              />
            </div>
            <h6>Experienced Teachers</h6>
            <p>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
            <button className="px-4 py-2 rounded-full border-2 border-primary text-primary">
              Learn More
            </button>
          </div>
          <div className="basis-1/3 bg-white rounded-2xl shadow-lg grid place-items-center  py-12">
            <div className="relative after:content-[''] after:absolute after:w-[3rem] after:h-[3rem] after:bg-yellow after:top-0 after:left-[.5rem] after:z-10  after:rounded-full">
              <img
                className="w-[3rem] z-20 relative"
                src={certificate}
                alt=""
              />
            </div>
            <h6>Experienced Teachers</h6>
            <p>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
          </div>
        </div>
      </section>

      <section className="flex justify-between items-stretch gap-12 container mx-auto px-[5rem]">
        <div className="basis-1/2 flex flex-col ">
          <div className="">
            <h1>
              Upcoming <span>Event</span>{" "}
            </h1>
            <p>
              Learning record store (lrs) bite-sized learning avatar elearning,
              multimedia scenario serious games
            </p>
          </div>
          <div className="flex items-start justify-between gap-8 flex-1 mt-8">
            <div className="basis-2/3">
              <img
                src="https://shelly.merku.love/wp-content/uploads/2021/06/gallery-12-1.jpg"
                className="rounded-2xl"
                alt=""
              />
            </div>
            <div className="basis-1/3 self-end ">
              <img
                src="https://shelly.merku.love/wp-content/uploads/2021/06/gallery-14.jpg"
                className="rounded-2xl"
                alt=""
              />
              <img
                src="https://shelly.merku.love/wp-content/uploads/2021/06/gallery-13-1.jpg"
                className="rounded-2xl mt-4"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="card w-[80%] mx-auto bg-white shadow-lg px-8 py-12 rounded-xl">
            <div className="flex items-center justify-start gap-4 pb-8">
              <div className="flex items-center justify-start gap-2">
                <FaRegCalendar />
                <span>2022-12-30</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <BiSolidTimeFive />
                <span>12:00</span>
              </div>
              <div className="flex-1 text-right">
                <p>$8</p>
              </div>
            </div>
            <h1 className="pb-4">Explore Watercolor Illustration</h1>
            <p className="flex items-center justify-start gap-2">
              <ImLocation />
              <span>25 Grafton St, Worcester</span>
            </p>
          </div>
          <div className="card w-[80%] ml-auto mr-[2rem] bg-white shadow-lg px-8 py-12 rounded-xl my-6">
            <div className="flex items-center justify-start gap-4 pb-8">
              <div className="flex items-center justify-start gap-2">
                <FaRegCalendar />
                <span>2022-12-30</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <BiSolidTimeFive />
                <span>12:00</span>
              </div>
              <div className="flex-1 text-right">
                <p>$8</p>
              </div>
            </div>
            <h1 className="pb-4">Explore Watercolor Illustration</h1>
            <p className="flex items-center justify-start gap-2">
              <ImLocation />
              <span>25 Grafton St, Worcester</span>
            </p>
          </div>
          <div className="card w-[80%] mx-auto bg-white shadow-lg px-8 py-12 rounded-xl">
            <div className="flex items-center justify-start gap-4 pb-8">
              <div className="flex items-center justify-start gap-2">
                <FaRegCalendar />
                <span>2022-12-30</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <BiSolidTimeFive />
                <span>12:00</span>
              </div>
              <div className="flex-1 text-right">
                <p>$8</p>
              </div>
            </div>
            <h1 className="pb-4">Explore Watercolor Illustration</h1>
            <p className="flex items-center justify-start gap-2">
              <ImLocation />
              <span>25 Grafton St, Worcester</span>
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-[5rem] py-24">
        <div className="">
          <h1>
            our <span>classes</span>{" "}
          </h1>
          <p>
            Application programming interface voice-over (vo) instructor led
            training curation, user created content
          </p>
        </div>
        <div className="mt-10">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
          >
            <SwiperSlide>
              <div className="bg-white rounded-xl px-8 py-6">
                <div className="">
                  <img
                    src="https://shelly.merku.love/wp-content/uploads/2020/11/class2-270x180.png"
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2">
                      <FaRegCalendar />
                      <span>2022-12-30</span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <BiSolidTimeFive />
                      <span>12:00</span>
                    </div>
                  </div>
                  <div className="">
                    <h1>natural science & mathematics courses</h1>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <img
                          src="https://shelly.merku.love/wp-content/uploads/2020/11/teacher5-150x150.png"
                          className="w-[1.5rem] h-[1.5rem] rounded-full"
                          alt=""
                        />
                        <p>dai jiang</p>
                      </div>
                      <span>$45</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-xl px-8 py-6">
                <div className="">
                  <img
                    src="https://shelly.merku.love/wp-content/uploads/2020/11/class2-270x180.png"
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2">
                      <FaRegCalendar />
                      <span>2022-12-30</span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <BiSolidTimeFive />
                      <span>12:00</span>
                    </div>
                  </div>
                  <div className="">
                    <h1>natural science & mathematics courses</h1>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <img
                          src="https://shelly.merku.love/wp-content/uploads/2020/11/teacher5-150x150.png"
                          className="w-[1.5rem] h-[1.5rem] rounded-full"
                          alt=""
                        />
                        <p>dai jiang</p>
                      </div>
                      <span>$45</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-xl px-8 py-6">
                <div className="">
                  <img
                    src="https://shelly.merku.love/wp-content/uploads/2020/11/class2-270x180.png"
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2">
                      <FaRegCalendar />
                      <span>2022-12-30</span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <BiSolidTimeFive />
                      <span>12:00</span>
                    </div>
                  </div>
                  <div className="">
                    <h1>natural science & mathematics courses</h1>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <img
                          src="https://shelly.merku.love/wp-content/uploads/2020/11/teacher5-150x150.png"
                          className="w-[1.5rem] h-[1.5rem] rounded-full"
                          alt=""
                        />
                        <p>dai jiang</p>
                      </div>
                      <span>$45</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-xl px-8 py-6">
                <div className="">
                  <img
                    src="https://shelly.merku.love/wp-content/uploads/2020/11/class2-270x180.png"
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2">
                      <FaRegCalendar />
                      <span>2022-12-30</span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <BiSolidTimeFive />
                      <span>12:00</span>
                    </div>
                  </div>
                  <div className="">
                    <h1>natural science & mathematics courses</h1>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <img
                          src="https://shelly.merku.love/wp-content/uploads/2020/11/teacher5-150x150.png"
                          className="w-[1.5rem] h-[1.5rem] rounded-full"
                          alt=""
                        />
                        <p>dai jiang</p>
                      </div>
                      <span>$45</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-xl px-8 py-6">
                <div className="">
                  <img
                    src="https://shelly.merku.love/wp-content/uploads/2020/11/class2-270x180.png"
                    className="w-full h-auto"
                    alt=""
                  />
                </div>
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-2">
                      <FaRegCalendar />
                      <span>2022-12-30</span>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <BiSolidTimeFive />
                      <span>12:00</span>
                    </div>
                  </div>
                  <div className="">
                    <h1>natural science & mathematics courses</h1>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex items-center justify-start gap-4">
                        <img
                          src="https://shelly.merku.love/wp-content/uploads/2020/11/teacher5-150x150.png"
                          className="w-[1.5rem] h-[1.5rem] rounded-full"
                          alt=""
                        />
                        <p>dai jiang</p>
                      </div>
                      <span>$45</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex items-center justify-between mt-6">
            <button>Classes</button>
            <div className="flex items-center justify-start gap-4">
              <div className="prev px-1 py-1 rounded-full border border-primary">
                <MdOutlineKeyboardArrowLeft className="text-3xl text-primary" />
              </div>
              <div className="next px-1 py-1 rounded-full border border-primary">
                <MdOutlineKeyboardArrowRight className="text-3xl text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-[5rem] py-24">
        <div className="text-center">
          <h1>Study Process Gallery</h1>
          <p className="w-3/5 mx-auto">
            Instructor led training digital learning cbt completion criteria
            learning management system cognitive load byod self-directed
            learning knowledge
          </p>
        </div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr] grid-rows-4 h-[65vh] gap-4 mt-12">
          <div className="col-start-1 col-span-1 row-start-1 row-span-1 ml-auto flex items-end">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/gallery10.jpg"
              className=" block object-cover w-auto h-3/5 rounded-lg"
              alt=""
            />
          </div>
          <div className="col-start-1 col-span-1 row-start-2 row-span-3">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/gallery1.jpg"
              className=" block object-cover w-auto h-full  rounded-lg"
              alt=""
            />
          </div>
          <div className="col-start-2 col-span-1 row-start-1 row-span-3">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/gallery2.jpg"
              className=" block object-cover w-auto h-full  rounded-lg"
              alt=""
            />
          </div>
          <div className="col-start-2 col-span-1 row-start-4 row-span-1">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/class5.png"
              className=" block object-cover w-auto h-full  rounded-lg"
              alt=""
            />
          </div>
          <div className="col-start-3 col-span-1 row-start-1 row-span-3 ">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/gallery4.jpg"
              className=" block object-cover w-auto h-[80%]   rounded-lg mt-6"
              alt=""
            />
          </div>
          <div className="col-start-3 col-span-1 row-start-4 row-span-1  translate-y-[-3rem]">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/gallery5.jpg"
              className=" block object-cover w-auto h-[80%]  rounded-lg"
              alt=""
            />
          </div>

          <div className="col-start-4 col-span-1 row-start-1 row-span-1">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/gallery6.jpg"
              className=" block object-cover w-auto h-full rounded-lg"
              alt=""
            />
          </div>
          <div className="col-start-4 col-span-1 row-start-2 row-span-3">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/gallery7.jpg"
              className=" block object-cover w-auto h-full  rounded-lg"
              alt=""
            />
          </div>

          <div className="col-start-5 col-span-1 row-start-1 row-span-2">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/gallery8.jpg"
              className=" block object-cover w-auto h-full rounded-lg"
              alt=""
            />
          </div>
          <div className="col-start-5 col-span-1 row-start-3 row-span-2">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/gallery9.jpg"
              className=" block object-cover w-auto h-full  rounded-lg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-[5rem] py-24">
        <div className="text-center">
          <h1>Our Awesome Teachers</h1>
          <p className="w-3/5 mx-auto">
            Instructor led training digital learning cbt completion criteria
            learning management system cognitive load byod self-directed
            learning knowledge
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 mt-8">
          <div className="basis-1/4">
            <div className="relative">
              <img
                src="https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
                className="rounded-2xl"
                alt=""
              />
              <button className="w-10 h-10 rounded-full grid place-items-center bg-btn-gradient absolute mx-6 mb-4 bottom-0 right-0">
                <FaShareAlt className="text-white" />
              </button>
            </div>
            <div className="text-center">
              <h6>Polina Kerston</h6>
              <p>English Teacher</p>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="relative">
              <img
                src="https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
                className="rounded-2xl"
                alt=""
              />
              <button className="w-10 h-10 rounded-full grid place-items-center bg-btn-gradient absolute mx-6 mb-4 bottom-0 right-0">
                <FaShareAlt className="text-white" />
              </button>
            </div>
            <div className="text-center">
              <h6>Polina Kerston</h6>
              <p>English Teacher</p>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="relative">
              <img
                src="https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
                className="rounded-2xl"
                alt=""
              />
              <button className="w-10 h-10 rounded-full grid place-items-center bg-btn-gradient absolute mx-6 mb-4 bottom-0 right-0">
                <FaShareAlt className="text-white" />
              </button>
            </div>
            <div className="text-center">
              <h6>Polina Kerston</h6>
              <p>English Teacher</p>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="relative">
              <img
                src="https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
                className="rounded-2xl"
                alt=""
              />
              <button className="w-10 h-10 rounded-full grid place-items-center bg-btn-gradient absolute mx-6 mb-4 bottom-0 right-0">
                <FaShareAlt className="text-white" />
              </button>
            </div>
            <div className="text-center">
              <h6>Polina Kerston</h6>
              <p>English Teacher</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-[5rem]  my-14">
        <div className="p-10 flex items-center justify-between bg-form-gradient rounded-3xl ">
        <div className="basis-1/3 text-white">
          <h1>Join us and stay tuned!</h1>
          <p>
            Curation active learning ecosystem learning content management
            system lxd lxp rapid learning{" "}
          </p>
        </div>
        <div className="basis-1/3">
            <form action="">
                <div className="flex items-center justify-between gap-6">

                <input type="text" placeholder="Your Name" name="" id="" className="focus:outline-none" />
                <input type="text" placeholder="Your Email" name="" id="" className="focus:outline-none" />
                </div>
                <textarea cols={40} rows={4} className="w-full mt-5 rounded-2xl" placeholder="message" />
            </form>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
