import NavBar from "../Components/NavBar"
import SingleEventFlex from "../Components/SingleEventFlex"

const SingleEvent = () => {
  return (
    <div>
        <NavBar/>
       <section
        className="max-w-screen  h-screen bg-center object-contain bg-cover overflow-hidden relative before:absolute before:top-0  before:left-0  before:content-['']  before:bg-white  before:w-full  before:h-full before:opacity-40 before:z-10"
        style={{
          backgroundImage: `url(${"https://shelly.merku.love/wp-content/uploads/2020/11/class4.png"})`,
        }}
      >
        <div className="z-20 relative container px-[5rem] mx-auto mt-[60vh]">
          <div className="">
            <span className="relative px-2 before:top-1/2  before:translate-y-[-50%] before:left-0  before:content-['']  before:absolute  before:p-[2px]  before:rounded-full  before:bg-secondary">
              Home
            </span>
            <span className="relative mx-5 px-2 before:top-1/2  before:translate-y-[-50%] before:left-0  before:content-['']  before:absolute  before:p-[2px]  before:rounded-full  before:bg-secondary">
            Event
            </span>
            <span className="relative mx-5 px-2 before:top-1/2  before:translate-y-[-50%] before:left-0  before:content-['']  before:absolute  before:p-[2px]  before:rounded-full  before:bg-secondary">
              Explore Watercolor Illustration
            </span>
          </div>
          <h1>Explore Watercolor Illustration</h1>
          <div className="flex items-center justify-start gap-6">
            <div className="flex items-center justify-start gap-2">
                <img src="https://shelly.merku.love/wp-content/uploads/2020/11/teacher7-150x150.png" className="w-6 h-6 rounded-full object-cover" alt="" />
                <span>Vincent Luggers</span>
            </div>
            <button>enroll for $8</button>
          </div>
        </div>
      </section>
      <SingleEventFlex/>
    </div>
  )
}

export default SingleEvent
