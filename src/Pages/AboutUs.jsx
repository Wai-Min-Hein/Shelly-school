import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import NavBar from "../Components/NavBar";
import { BsFillPenFill } from "react-icons/bs";

import { useEffect, useRef, useState } from "react";
import teacher from "../../Images/teacher.svg";

const AboutUs = () => {

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

  const aboutRef = useRef()


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




  return (
    <div ref={aboutRef} className="bg-background max-w-screen min-h-screen  overflow-hidden mb-28">
      <section className="bg-white h-[60vh] relative overflow-hidden">
        <NavBar />
        <div className="container px-[5rem] mx-auto">
          <div className="flex items-center justify-start gap-4  ">
            <p className="text- capitalize text-md text-para-text-color">
              home
            </p>
            <p className="">.</p>
            <p className="text- capitalize text-md text-para-text-color">
              about
            </p>
          </div>
          <h1>about us</h1>
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

      <section className=" container px-[5rem] mx-auto">
        <div className="flex items-center justify-between gap-12">
          <div className="basis-1/2">
            <div className="">
              <h1>welcome to</h1>
              <h1>school</h1>
            </div>
            <p>
              Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id
              purus urna. Maecenas ultrices ligula a nisi dictum tristique.
            </p>

            <div className="">
              <div className="px-6 py-3 rounded-full overflow-hidden bg-gray-400 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: "90%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="bg-green-500 w-0 h-full absolute z-10 top-0 left-0"
                ></motion.div>
                <span className="z-20 relative">creative skill</span>
              </div>
            </div>
            <div className="mt-8">
              <div className="px-6 py-3 rounded-full overflow-hidden bg-gray-400 relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: "75%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="bg-green-500 w-0 h-full absolute z-10 top-0 left-0"
                ></motion.div>
                <span className="z-20 relative">creative skill</span>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="relative">
              <img
                src="https://shelly.merku.love/wp-content/uploads/2021/06/gallery-15.jpg"
                className="block w-[30rem] h-[30rem] object-cover  rounded-full"
                alt=""
              />

              <div className="absolute top-0 left-0 w-[8rem] h-[8rem] rounded-full overflow-hidden">
                <img
                  src="https://shelly.merku.love/wp-content/uploads/2021/06/gallery-14.jpg"
                  className="w-full h-full  object-cover "
                  alt=""
                />
              </div>

              <div className="absolute top-1/2 left-[-3rem] w-[6rem] h-[6rem] rounded-full overflow-hidden">
                <img
                  src="https://shelly.merku.love/wp-content/uploads/2021/06/gallery-15.jpg"
                  className="w-full h-full  object-cover "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-12 mt-24">
          <div className="basis-1/2">
            <div className="">
              <img
                src="https://shelly.merku.love/wp-content/uploads/2020/11/abt2.png"
                className="w-[30rem] h-[30rem] object-cover rounded-full"
                alt=""
              />
            </div>
          </div>

          <div className="basis-1/2">
            <h1>our mission</h1>
            <p>
              Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel.
              Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae
              elit ligula. Fusce eu rutrum nisl.
            </p>
            <div className="">
              <div className="flex items-center justify-start gap-4">
                <BsFillPenFill />
                <span>Etiam ante nisl, maximus vitae sem non, dignissim</span>
              </div>
              <div className="flex items-center justify-start gap-4">
                <BsFillPenFill />
                <span>Etiam ante nisl, maximus vitae sem non, dignissim</span>
              </div>
              <div className="flex items-center justify-start gap-4">
                <BsFillPenFill />
                <span>Etiam ante nisl, maximus vitae sem non, dignissim</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-12">
          <div className="basis-1/3">
            <div className="">
              <h1>Benefits of</h1>
              <h1>Shelly School</h1>
            </div>
            <p>
              Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id
              purus urna. Maecenas ultrices ligula a nisi dictum tristique.
              Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum
              leo sagittis et.
            </p>
            <button>contact us</button>
          </div>
          <div className="basis-2/3 flex items-center justify-between gap-4 flex-wrap">
            <div className="basis-[48.5%]">
              <div className=" bg-white rounded-2xl shadow-lg grid place-items-center py-12">
                <div className="relative after:content-[''] after:absolute after:w-[3rem] after:h-[3rem] after:bg-yellow after:top-0 after:left-[.5rem] after:z-10  after:rounded-full">
                  <img
                    className="w-[3rem] z-50 relative"
                    src={teacher}
                    alt=""
                  />
                </div>
                <h6>Experienced Teachers</h6>
                <p>
                  Morbi vel augue et metus pellentesque lacinia eu non odio.
                </p>
                <button>read more</button>
              </div>
            </div>
            <div className="basis-[48.5%] translate-y-5">
              <div className=" bg-white rounded-2xl shadow-lg grid place-items-center py-12">
                <div className="relative after:content-[''] after:absolute after:w-[3rem] after:h-[3rem] after:bg-yellow after:top-0 after:left-[.5rem] after:z-10  after:rounded-full">
                  <img
                    className="w-[3rem] z-50 relative"
                    src={teacher}
                    alt=""
                  />
                </div>
                <h6>Experienced Teachers</h6>
                <p>
                  Morbi vel augue et metus pellentesque lacinia eu non odio.
                </p>
                <button>read more</button>
              </div>
            </div>
            <div className="basis-[48.5%]">
              <div className=" bg-white rounded-2xl shadow-lg grid place-items-center py-12">
                <div className="relative after:content-[''] after:absolute after:w-[3rem] after:h-[3rem] after:bg-yellow after:top-0 after:left-[.5rem] after:z-10  after:rounded-full">
                  <img
                    className="w-[3rem] z-50 relative"
                    src={teacher}
                    alt=""
                  />
                </div>
                <h6>Experienced Teachers</h6>
                <p>
                  Morbi vel augue et metus pellentesque lacinia eu non odio.
                </p>
                <button>read more</button>
              </div>
            </div>
            <div className="basis-[48.5%]  translate-y-5">
              <div className=" bg-white rounded-2xl shadow-lg grid place-items-center py-12">
                <div className="relative after:content-[''] after:absolute after:w-[3rem] after:h-[3rem] after:bg-yellow after:top-0 after:left-[.5rem] after:z-10  after:rounded-full">
                  <img
                    className="w-[3rem] z-50 relative"
                    src={teacher}
                    alt=""
                  />
                </div>
                <h6>Experienced Teachers</h6>
                <p>
                  Morbi vel augue et metus pellentesque lacinia eu non odio.
                </p>
                <button>read more</button>
              </div>
            </div>
          </div>
        </div>

        <div ref={ref} className="  my-14">
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
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

// <div className="flex items-center gap-5 justify-between">
// <div className="basis-1/2  container px-[5rem] mx-auto">
//     <h4>welcome to</h4>
//     <h4>shelly</h4>
//     <p>
//     Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique.
//     </p>
//     <div className="bg-gray-100 h-[2rem] w-full relative">
//         <h6 className="z-20 text-white relative">Creative skill</h6>
//         <motion.div
//         initial={{width: '0'}}
//         whileInView={{width: '70%'}}
//         transition={{duration: .5}}
//         viewport={{once: true}}

//          className="absolute bg-primary top-0 left-0 z-10 h-full ">

//          </motion.div>

//     </div>
// </div>
// <div className="basis-1/2"></div>
// </div>
