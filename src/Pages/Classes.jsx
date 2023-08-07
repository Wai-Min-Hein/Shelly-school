import ClassesComponents from "../Components/ClassesComponents"
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import NavBar from "../Components/NavBar";

import { useEffect, useRef, useState } from "react";

const Classes = () => {
  const ref = useRef(null)

  const ifView = useInView(ref)
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const count1 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);

  
  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, Math.round);

  useEffect(() => {
    ifView&& animate(count, 570, { duration: 3 })
   
  }, [ifView, count]);

  useEffect(() => {
    ifView&& animate(count1, 27, { duration: 1.5 });

   
  }, [ifView, count1]);

  useEffect(() => {
    ifView&& animate(count2, 11, { duration: 1 });

   
  }, [ifView, count2]);



  const [y, setY] = useState(0)
  const [x, setX] = useState(0)


  

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setY(e.screenY *0.02)
      setX(e.screenX *0.02)
    })

    

    window.addEventListener('mouseleave', () => {
      setY(0), setX(0)
    })
  }, [])



    const classes = [
        {
            id:1,
            image:'https://shelly.merku.love/wp-content/uploads/2020/11/class8.png',
            title: 'Hospitality, Leisure & Sports Courses',
            date:'Mon-Fri',
            time: '10AM - 12AM',
            teacherImg: 'https://shelly.merku.love/wp-content/uploads/2020/11/img5-150x150.png',
            teacherName : 'Polina Kerston',
            price: 45
        },
        {
            id:2,
            image:'https://shelly.merku.love/wp-content/uploads/2020/11/class8.png',
            title: 'Hospitality, Leisure & Sports Courses',
            date:'Mon-Fri',
            time: '10AM - 12AM',
            teacherImg: 'https://shelly.merku.love/wp-content/uploads/2020/11/img5-150x150.png',
            teacherName : 'Polina Kerston',
            price: 45
        },
        {
            id:3,
            image:'https://shelly.merku.love/wp-content/uploads/2020/11/class8.png',
            title: 'Hospitality, Leisure & Sports Courses',
            date:'Mon-Fri',
            time: '10AM - 12AM',
            teacherImg: 'https://shelly.merku.love/wp-content/uploads/2020/11/img5-150x150.png',
            teacherName : 'Polina Kerston',
            price: 45
        },
        {
            id:4,
            image:'https://shelly.merku.love/wp-content/uploads/2020/11/class8.png',
            title: 'Hospitality, Leisure & Sports Courses',
            date:'Mon-Fri',
            time: '10AM - 12AM',
            teacherImg: 'https://shelly.merku.love/wp-content/uploads/2020/11/img5-150x150.png',
            teacherName : 'Polina Kerston',
            price: 45
        },
        {
            id:5,
            image:'https://shelly.merku.love/wp-content/uploads/2020/11/class8.png',
            title: 'Hospitality, Leisure & Sports Courses',
            date:'Mon-Fri',
            time: '10AM - 12AM',
            teacherImg: 'https://shelly.merku.love/wp-content/uploads/2020/11/img5-150x150.png',
            teacherName : 'Polina Kerston',
            price: 45
        }
    ]
  return (
    <div className="bg-background max-w-screen min-h-screen  overflow-hidden mb-28">
        <section className="bg-white h-[60vh] relative overflow-hidden">
        <NavBar />
        <div className="container px-[5rem] mx-auto">
          <div className="flex items-center justify-start gap-4  ">
            <p className="text- capitalize text-md text-para-text-color">
              home
            </p>
            <p className="">.</p>
            <p className="text- capitalize text-md text-para-text-color">
              classes
            </p>
          </div>
          <h1>Classes</h1>
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

      <section className="flex items-center justify-start gap-6 flex-wrap container px-[5rem] mx-auto">
                   {classes?.map((singleClass) => (
                    <ClassesComponents key={singleClass?.id} singleClass={singleClass} />
                  ))}
            
      </section>

      <section ref={ref} className="container px-[5rem] mx-auto  my-14">
          <div className="p-10 flex items-center justify-between bg-form-gradient rounded-[3rem] text-white py-20 px-16  relative z-40">
            <motion.span
            style={{
              x,
              y,
              transition:{
                duration:.5,
                
              }
            }}
            className="p-4 rounded-full bg-bubble-1-gradient absolute top-0 left-0 z-10"></motion.span>
            <motion.span 
            style={{
              x:-x,
              y:-y,
              transition:{
                duration:.5
              }
            }}
            className="p-2 rounded-full bg-bubble-1-gradient absolute bottom-0 left-0 z-10"></motion.span>
            <div className=" text-white basis-1/4">
              <h1 className="text-3xl font-semibold">Join us <span className="block">and stay tuned!</span> </h1>
              <button className="bg-secondary px-4 py-2 rounded-2xl mt-4 capitalize">graduate</button>
            </div>

            <div className="">
              <motion.span className="text-5xl  font-semibold">{rounded}</motion.span>
              <p className="capitalize text-xl mt-2 font-normal">graduated</p>
            </div>

            <div className="">
              <motion.span className="text-5xl  font-semibold">{rounded1}</motion.span>
              <p className="capitalize text-xl mt-2 font-normal">teachers</p>
            </div>

            <div className="">
              <motion.span className="text-5xl  font-semibold">{rounded2}</motion.span>
              <p className="capitalize text-xl mt-2 font-normal">awards</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Classes
