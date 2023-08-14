import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import NavBar from "../Components/NavBar";

import { useEffect, useRef, useState } from "react";
import TeacherComponent from "../Components/TeacherComponent";
import SchoolHistoryBox from "../Components/SchoolHistoryBox";


const Teachers = () => {
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


    const teachers = [
        {
            id:'1',
            name:'Polina Kerston',
            position: 'English Teacher',
            image: "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
        },
        {
            id:'2',
            name:'Polina Kerston',
            position: 'English Teacher',
            image: "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
        },
        {
            id:'3',
            name:'Polina Kerston',
            position: 'English Teacher',
            image: "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
        },
        {
            id:'4',
            name:'Polina Kerston',
            position: 'English Teacher',
            image: "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
        },
        {
            id:'5',
            name:'Polina Kerston',
            position: 'English Teacher',
            image: "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
        },
        {
            id:'6',
            name:'Polina Kerston',
            position: 'English Teacher',
            image: "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
        },
        {
            id:'7',
            name:'Polina Kerston',
            position: 'English Teacher',
            image: "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
        },
        {
            id:'8',
            name:'Polina Kerston',
            position: 'English Teacher',
            image: "https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png"
        },
    ]
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
          </div>
          <h1>Teachers</h1>
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

      <section className="flex items-center justify-between gap-y-3 flex-wrap container px-[5rem] mx-auto">
                   {teachers?.map((teacher) => (
                    <TeacherComponent key={teacher?.id} teacher={teacher} />
                  ))}
            
      </section>

      <section ref={ref} className="container px-[5rem] mx-auto  my-14">
         <SchoolHistoryBox/>
        </section>
    </div>
  )
}

export default Teachers
