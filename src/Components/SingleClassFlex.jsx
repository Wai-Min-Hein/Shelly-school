import { BsFillPenFill } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";

// import Swiper core and required modules
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BtnComponent from "./BtnComponent";

const SingleClassFlex = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-start gap-4 shadow-lg pb-2 single-class">
      <div className="basis-2/3 bg-white rounded-xl px-12 py-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In
          sagittis lacinia lorem et tristique. Quisque mauris neque,
          sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In
          vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur
          vitae sapien vel lectus sagittis consequat. Nullam enim velit,
          dignissim vel viverra ac, eleifend ut tellus.
        </p>
        <p className="my-4">
        Nunc at tincidunt nisl.
          Nullam fringilla quis odio vitae eleifend. Quisque sed mi erat. In hac
          habitasse platea dictumst. Vivamus mattis nunc quis turpis pretium
          sollicitudin. In eu semper justo. Phasellus facilisis hendrerit massa,
          sed auctor lacus convallis et. Vestibulum ac odio interdum, efficitur
          nisl ut, sollicitudin arcu. Donec commodo elementum tempus. In hac
          habitasse platea dictumst.
        </p>
        <div className="">
          <img
          className="rounded-2xl"
            src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large8.png"
            alt=""
          />
          <div className="flex items-center justify-start gap-2 mt-4">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large8.png"
              className="basis-1/4 w-10 object-cover rounded-md"
              alt=""
            />
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large8.png"
              className="basis-1/4 w-10 object-cover rounded-md"
              alt=""
            />
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large8.png"
              className="basis-1/4 w-10 object-cover rounded-md"
              alt=""
            />
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large8.png"
              className="basis-1/4 w-10 object-cover rounded-md"
              alt=""
            />
          </div>
        </div>
        <p className="my-6">
          Donec luctus hendrerit sagittis. Cras pellentesque convallis tempus.
          Praesent finibus lacus at urna fringilla, fermentum sodales enim
          sodales. Sed vel eros a mi egestas consectetur. Donec eleifend ornare
          mauris, in tincidunt ex laoreet et. Donec eu arcu euismod,
          pellentesque arcu eu, condimentum nibh. Sed blandit id mauris sed
          suscipit.
        </p>
        <p>
        Nam aliquet euismod metus in hendrerit. Quisque finibus
          facilisis velit, eget posuere nulla suscipit ut. Vivamus non quam
          massa. Nulla facilisi. Mauris vitae viverra leo. Praesent nec risus
          non dui iaculis vehicula at id ante. Morbi hendrerit leo libero, in
          dictum dolor condimentum eu. Etiam dictum enim neque, eu pharetra orci
          euismod at.
        </p>
        <div className="">
          <h1 className="my-6">Education Programs</h1>
          <p>
            Aliquam dui tellus, sollicitudin eget malesuada at, blandit id
            magna. Integer non mauris urna. Curabitur placerat metus in pulvinar
            imperdiet. 
          </p>
          <p className="my-6">
          Vivamus bibendum eu tellus quis consectetur. Aliquam
            tincidunt dui augue, at porttitor quam semper et. Vestibulum aliquam
            leo sed ultricies ullamcorper. Aliquam eu rutrum est, quis faucibus
            ligula. Nulla dignissim odio lorem, id imperdiet sem dignissim eget.
            Nullam feugiat quam nec dolor posuere tempus sed eu mauris.
            Phasellus tempus sapien at nunc volutpat, et convallis magna
            ultrices. Duis eu neque ut arcu accumsan consectetur.
          </p>
        </div>
        <div className="">
          <h1>Activities Involved</h1>
          <div className="">
            <div className="flex items-center justify-start gap-2">
              <BsFillPenFill className="text-primary" />
              <span>Sensory Time</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <BsFillPenFill className="text-primary" />
              <span>Sensory Time</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <BsFillPenFill className="text-primary" />
              <span>Sensory Time</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <BsFillPenFill className="text-primary" />
              <span>Sensory Time</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <BsFillPenFill className="text-primary" />
              <span>Sensory Time</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <BsFillPenFill className="text-primary" />
              <span>Sensory Time</span>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/3 sticky top-0 overflow-hidden group px-4">
        <div className="border-b-2 border-secondary border-opacity-40 pb-4 ">
          <span className="w-8 h-[3px] group-hover:w-12 duration-200 rounded-md bg-primary inline-block"></span>
          <h1 className="my-4">About classes</h1>
          <div className="">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                <FaRegCalendar className="text-secondary" />
                <span className="text-[1.1rem] font-semibold text-header-text-color">Mon - Fri</span>
              </div>
              <p className="text-secondary font-semibold text-[1.1rem]">10 AM - 12 AM</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                <FaRegCalendar className="text-secondary" />
                <span className="text-[1.1rem] font-semibold text-header-text-color">Mon - Fri</span>
              </div>
              <p className="text-secondary font-semibold text-[1.1rem]">10 AM - 12 AM</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                <FaRegCalendar className="text-secondary" />
                <span className="text-[1.1rem] font-semibold text-header-text-color">Mon - Fri</span>
              </div>
              <p className="text-secondary font-semibold text-[1.1rem]">10 AM - 12 AM</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                <FaRegCalendar className="text-secondary" />
                <span className="text-[1.1rem] font-semibold text-header-text-color">Mon - Fri</span>
              </div>
              <p className="text-secondary font-semibold text-[1.1rem]">10 AM - 12 AM</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 mt-8">
          <div className="flex items-center justify-start gap-2">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/teacher7-150x150.png"
              className="w-6 h-6 rounded-full object-cover"
              alt=""
            />
            <span>Vincent Luggers</span>
          </div>
          <BtnComponent text={'Enroll'}/>
        </div >

        <div className="lg:h-[40rem] h-[20rem] w-full overflow-hidden">


          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            pagination={{ clickable: true,
                renderBullet: function(index, className) {
                    return '<span class="' + className + '"></span>';
                }
            }}
          >
            <SwiperSlide>

                <div className="rounded-2xl overflow-hidden">
                    <div className="border-b-4 border-b-primary">
                        <img src="https://shelly.merku.love/wp-content/uploads/2020/11/class8.png" className="w-full h-full object-cover" alt="" />
                    </div>
                    <h6 className="hover:text-primary duration-200 my-4 text-secondary font-semibold text-xl">Natural Sciences & Mathematics Courses</h6>
                </div>


            </SwiperSlide>

            <SwiperSlide>

                <div className="rounded-2xl overflow-hidden">
                    <div className="border-b-4 border-b-primary">
                        <img src="https://shelly.merku.love/wp-content/uploads/2020/11/class8.png" className="w-full h-full object-cover" alt="" />
                    </div>
                    <h6 className="hover:text-primary duration-200 my-4 text-secondary font-semibold text-xl">Natural Sciences & Mathematics Courses</h6>
                </div>


            </SwiperSlide>
            <SwiperSlide>

                <div className="rounded-2xl overflow-hidden">
                    <div className="border-b-4 border-b-primary">
                        <img src="https://shelly.merku.love/wp-content/uploads/2020/11/class8.png" className="w-full h-full object-cover" alt="" />
                    </div>
                    <h6 className="hover:text-primary duration-200 my-4 text-secondary font-semibold text-xl">Natural Sciences & Mathematics Courses</h6>
                </div>


            </SwiperSlide>
            <SwiperSlide>

                <div className="rounded-2xl overflow-hidden">
                    <div className="border-b-4 border-b-primary">
                        <img src="https://shelly.merku.love/wp-content/uploads/2020/11/class8.png" className="w-full h-full object-cover" alt="" />
                    </div>
                    <h6 className="hover:text-primary duration-200 my-4 text-secondary font-semibold text-xl">Natural Sciences & Mathematics Courses</h6>
                </div>


            </SwiperSlide>
            <SwiperSlide>

                <div className="rounded-2xl overflow-hidden">
                    <div className="border-b-4 border-b-primary">
                        <img src="https://shelly.merku.love/wp-content/uploads/2020/11/class8.png" className="w-full h-full object-cover" alt="" />
                    </div>
                    <h6 className="hover:text-primary duration-200 my-4 text-secondary font-semibold text-xl">Natural Sciences & Mathematics Courses</h6>
                </div>


            </SwiperSlide>
            
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default SingleClassFlex;
