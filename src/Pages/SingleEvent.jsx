import { useNavigate } from "react-router-dom"
import NavBar from "../Components/NavBar"
import SingleEventFlex from "../Components/SingleEventFlex"

const SingleEvent = () => {
  const nav = useNavigate()
  return (
    <div>
        <NavBar/>
       <section
        className="max-w-screen  h-screen bg-center object-contain bg-cover overflow-hidden relative before:absolute before:top-0  before:left-0  before:content-['']  before:bg-[rgba(255,255,255,0.7)]  before:w-full  before:h-full  before:z-10"
        style={{
          backgroundImage: `url(${"https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5-1.png"})`,
        }}
      >
        <div className="z-20 relative lg:container lg:px-[5rem] px-[1rem] md:px-4 mx-auto mt-[60vh]">
          <div className="">
            <button onClick={()=>nav('/')} className="relative px-2 before:top-1/2  before:translate-y-[-50%] before:left-0  before:content-['']  before:absolute  before:p-[2px]  before:rounded-full  before:bg-secondary">
              Home
            </button>
            <button  onClick={()=>nav('/events')} className="relative mx-2 px-2 before:top-1/2  before:translate-y-[-50%] before:left-0  before:content-['']  before:absolute  before:p-[2px]  before:rounded-full  before:bg-secondary">
              Events
            </button>
            <span className="relative mx-1 px-2 before:top-1/2  before:translate-y-[-50%] before:left-0  before:content-['']  before:absolute  before:p-[2px]  before:rounded-full  before:bg-secondary">
              Hospitality, Leisure & Sports Courses
            </span>
          </div>
          <h1 className="my-6 text-4xl">Hospitality, Leisure & Sports Courses</h1>
          <div className="flex items-center justify-start gap-6">
            <div className="flex items-center justify-start gap-2">
                <img src="https://shelly.merku.love/wp-content/uploads/2020/11/teacher7-150x150.png" className="w-6 h-6 rounded-full object-cover" alt="" />
                <span className="text-secondary font-medium">Vincent Luggers</span>
            </div>
            <button className="bg-yellow hover:bg-btn-gradient hover:text-white duration-200 text-header-text-color px-4 py-2 capitalize rounded-xl">enroll for 8$</button>
          </div>
        </div>
      </section>
      <SingleEventFlex/>
    </div>
  )
}

export default SingleEvent
