import { RiShareFill } from "react-icons/ri";


import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF,FaLinkedinIn,FaShareAlt } from "react-icons/fa";

const TeacherComponent = ({ teacher }) => {
  return (
    <div className="basis-[23%]">
      {/* <div className="rounded-3xl overflow-hidden relative">
        <img
          className="block w-full object-cover"
          src={teacher?.image}
          alt=""
        />
        <span className="absolute bottom-6 right-4 bg-primary w-10 h-10 grid place-items-center rounded-full">
          <RiShareFill className=" text-white text-xl " />
        </span>
      </div> */}

      <div className="relative overflow-hidden rounded-2xl">
              <img
                src={teacher?.image}
                className="w-full rounded-2xl hover:scale-110 duration-500"
                alt=""
              />
              <div className="p-4 rounded-full cursor-pointer grid place-items-center bg-btn-gradient absolute mx-6 mb-4 bottom-0 right-0 group">
                <FaFacebookF className="text-white group-hover:block hidden" />
                <FaLinkedinIn className="text-white group-hover:block hidden my-4" />
                <AiOutlineTwitter className="text-white group-hover:block hidden mb-4" />
                <FaShareAlt className="text-white" />
              </div>
            </div>
            <div className="text-center">
              <h6 className="text-xl mt-6">{teacher?.name}</h6>
              <p className="text-secondary">{teacher?.position}</p>
            </div>
      
    </div>
  );
};

export default TeacherComponent;
