import { Route, Routes } from "react-router-dom";
import "../Css/output.css";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import Classes from "./Pages/Classes";
import SingleClass from "./Pages/SingleClass";
import Teachers from "./Pages/Teachers";
import Event from "./Pages/Event";
import SingleTeacher from "./Pages/SingleTeacher";
import SingleEvent from "./Pages/SingleEvent";
import Contact from "./Pages/Contact";

const App = () => {
  const { scrollY } = useScroll();

  const [y, setY] = useState(0);

  const [mouseHover, setMouseHover] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setY(latest);
  });
  return (
    <div className="bg-background relative">
      <div className={``}>
        <motion.div
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
          style={{
            y,
            transition: "transform 2s ease-in",
          }}
          className="w-12 h-12 bg-background shadow-lg shadow-secondary z-[999] rounded-full absolute top-[80vh] right-[4rem]"
        >
          <button className="w-full h-full   relative rounded-full">
            <motion.span
              animate={
                mouseHover
                  ? {
                      width: "10rem",
                      height: "10rem",
                      visibility: "visible",
                      zIndex: "-10",

                      opacity: [0.8, 0.6, 0.4, 0.2, 0],
                      transition: {
                        duration: 1.5,
                        times: [0.15, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                      },
                    }
                  : {
                      width: ".5rem",
                      height: ".5rem",
                      visibility: "hidden",

                      opacity: 0,
                      transition: { duration: 0.25 },
                    }
              }
              className="absolute  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  rounded-full w-4 h-4 bg-secondary z-[-2]"
            ></motion.span>
            <motion.span
              animate={
                mouseHover
                  ? {
                      width: "9rem",
                      height: "9rem",
                      visibility: "visible",
                      zIndex: "-10",

                      opacity: [0.8, 0.6, 0.4, 0.2, 0],
                      transition: {
                        duration: 1.5,
                        delay:.1,                        
                        times: [0.15, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                      },
                    }
                  : {
                      width: ".5rem",
                      height: ".5rem",
                      visibility: "hidden",

                      opacity: 0,
                      transition: { duration: 0.25 },
                    }
              }
              className="absolute  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  rounded-full w-4 h-4 bg-secondary z-[-2]"
            ></motion.span>
            <motion.span
              animate={
                mouseHover
                  ? {
                      width: "8rem",
                      height: "8rem",
                      visibility: "visible",
                      zIndex: "-10",

                      opacity: [0.8, 0.6, 0.4, 0.2, 0],
                      transition: {
                        duration: 1.5,
                        delay:.2,                        
                        times: [0.15, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                      },
                    }
                  : {
                      width: ".5rem",
                      height: ".5rem",
                      visibility: "hidden",

                      opacity: 0,
                      transition: { duration: 0.25 },
                    }
              }
              className="absolute  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  rounded-full w-4 h-4 bg-secondary z-[-2]"
            ></motion.span>
            <motion.span
              animate={
                mouseHover
                  ? {
                      width: "7rem",
                      height: "7rem",
                      visibility: "visible",
                      zIndex: "-10",

                      opacity: [0.8, 0.6, 0.4, 0.2, 0],
                      transition: {
                        duration: 1.5,
                        delay:.3,                        
                        times: [0.15, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                      },
                    }
                  : {
                      width: ".5rem",
                      height: ".5rem",
                      visibility: "hidden",

                      opacity: 0,
                      transition: { duration: 0.25 },
                    }
              }
              className="absolute  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  rounded-full w-4 h-4 bg-secondary z-[-2]"
            ></motion.span>
            <div className="overflow-hidden w-full h-full   relative rounded-full grid pic pic place-items-center">
              <motion.span
                animate={
                  mouseHover
                    ? {
                        width: "5rem",
                        height: "5rem",
                        opacity: 1,
                        transition: { duration: 0.5 },
                      }
                    : {
                        width: ".5rem",
                        height: ".5rem",
                        opacity: 0,
                        transition: { duration: 0.25 },
                      }
                }
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  rounded-full bg-secondary z-10  overflow-hidden"
              ></motion.span>

              <MdShoppingCart
                className={`${
                  !mouseHover ? "text-secondary" : "text-white"
                } z-50 relative mx-auto`}
              />
            </div>
          </button>
        </motion.div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/single-class" element={<SingleClass />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/single-teacher" element={<SingleTeacher />} />

        <Route path="/events" element={<Event />} />
        <Route path="/single-event" element={<SingleEvent />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
