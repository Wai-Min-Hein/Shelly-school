import {
    animate,
    motion,
    useInView,
    useMotionValue,
    useTransform,
  } from "framer-motion";
  
  
  import { useEffect, useRef, useState } from "react";
const SchoolHistoryBox = () => {

    const ref = useRef(null);

    const ifView = useInView(ref);
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
  
    const count1 = useMotionValue(0);
    const rounded1 = useTransform(count1, Math.round);
  
    const count2 = useMotionValue(0);
    const rounded2 = useTransform(count2, Math.round);
  
    useEffect(() => {
      ifView && animate(count, 570, { duration: 3 });
    }, [ifView, count]);
  
    useEffect(() => {
      ifView && animate(count1, 27, { duration: 1.5 });
    }, [ifView, count1]);
  
    useEffect(() => {
      ifView && animate(count2, 11, { duration: 1 });
    }, [ifView, count2]);
  
    const [y, setY] = useState(0);
    const [x, setX] = useState(0);
  
    useEffect(() => {
      window.addEventListener("mousemove", (e) => {
        setY(e.screenY * 0.02);
        setX(e.screenX * 0.02);
      });
  
      window.addEventListener("mouseleave", () => {
        setY(0), setX(0);
      });
    }, []);
  return (
    <section ref={ref} className="container px-[5rem] mx-auto  my-14">
        <div className="p-10 flex items-center justify-between bg-form-gradient rounded-[3rem] text-white py-20 px-16  relative z-40">
          <motion.span
            style={{
              x,
              y,
              transition: {
                duration: 0.5,
              },
            }}
            className="p-4 rounded-full bg-bubble-1-gradient absolute top-0 left-0 z-10"
          ></motion.span>
          <motion.span
            style={{
              x: -x,
              y: -y,
              transition: {
                duration: 0.5,
              },
            }}
            className="p-2 rounded-full bg-bubble-1-gradient absolute bottom-0 left-0 z-10"
          ></motion.span>
          <div className=" text-white basis-1/4">
            <h1 className="text-3xl font-semibold">
              Join us <span className="block">and stay tuned!</span>{" "}
            </h1>
            <button className="bg-secondary px-4 py-2 rounded-2xl mt-4 capitalize">
              graduate
            </button>
          </div>

          <div className="">
            <motion.span className="text-5xl  font-semibold">
              {rounded}
            </motion.span>
            <p className="capitalize text-xl mt-2 font-normal">graduated</p>
          </div>

          <div className="">
            <motion.span className="text-5xl  font-semibold">
              {rounded1}
            </motion.span>
            <p className="capitalize text-xl mt-2 font-normal">teachers</p>
          </div>

          <div className="">
            <motion.span className="text-5xl  font-semibold">
              {rounded2}
            </motion.span>
            <p className="capitalize text-xl mt-2 font-normal">awards</p>
          </div>
        </div>
      </section>
  )
}

export default SchoolHistoryBox
