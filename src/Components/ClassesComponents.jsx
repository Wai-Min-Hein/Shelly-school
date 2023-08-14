import { FaRegCalendar } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";

const ClassesComponents = ({ singleClass }) => {
  console.log(singleClass);
  return (
    <div className="lg:basis-[31%] sm:basis-[48%] bg-white rounded-t-xl overflow-hidden  rounded-md">
      <div className=" border-b-4 border-primary">
        <img src={singleClass?.image} alt="" />
      </div>
      <div className="px-4 py-2">
        <h1 className="w-4/5 hover:text-primary duration-150 text-xl my-6">{singleClass?.title}</h1>
        <div className="flex items-center justify-start gap-6 border-b-2 border-b-blue pb-4 ">
            <div className="flex items-center justify-start gap-2">
                <FaRegCalendar className="text-primary"/>
                <span>{singleClass?.date}</span>
            </div>
            <div className="flex items-center justify-start gap-2">
                <BiSolidTimeFive className="text-primary"/>
                <span>{singleClass?.time}</span>
            </div>
        </div>
        <div className="flex items-center justify-between mt-4">
            <div className="flex-1 flex ic items-center justify-start gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img className="block" src={singleClass?.teacherImg} alt="" />
                </div>
                <h6>{singleClass?.teacherName}</h6>
            </div>
            <p>$ {singleClass?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassesComponents;
