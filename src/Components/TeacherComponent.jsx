
import { RiShareFill } from "react-icons/ri";

const TeacherComponent = ({teacher}) => {
  return (
    <div className="basis-[23%]">
        <div className="rounded-3xl overflow-hidden relative">

      <img className="block w-full object-cover" src={teacher?.image} alt="" />
      <span className="absolute bottom-6 right-4 bg-primary w-10 h-10 grid place-items-center rounded-full">

      <RiShareFill className=" text-white text-xl "/>
      </span>
        </div>
        <div className="text-center">

        <h1>{teacher?.name}</h1>
        <p>{teacher?.position}</p>
        </div>
    </div>
  )
}

export default TeacherComponent
