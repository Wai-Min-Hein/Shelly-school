import NavBar from "../Components/NavBar";
import { GiPhone } from "react-icons/gi";
import SchoolHistoryBox from "../Components/SchoolHistoryBox";

const Contact = () => {
  return (
    <div className="bg-background">
      <section className="bg-white h-[60vh] relative overflow-hidden">
        <NavBar />
        <div className="container px-[5rem] mx-auto">
          <div className="flex items-center justify-start gap-4  ">
            <p className="text- capitalize text-md text-para-text-color">
              home
            </p>
            <p className="">.</p>
            <p className="text- capitalize text-md text-para-text-color">
              contacts
            </p>
          </div>
          <h1>contacts</h1>
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

      <section className="container px-[5rem] mx-auto">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14789.002615636826!2d94.89700549585511!3d22.078242511896338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b566100ef357e9%3A0xf59bffc2571aec8a!2sYin%20Mar%20Bin!5e0!3m2!1sen!2smm!4v1691332390364!5m2!1sen!2smm"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex items-center justify-between gap-8">
          <div className="basis-1/3">
            <h2>contact us</h2>
            <div className="flex items-start gap-2">
              <GiPhone />
              <div className="">
                <h6>call us</h6>
                <span>+2 342 5446 67</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <GiPhone />
              <div className="">
                <h6>call us</h6>
                <span>+2 342 5446 67</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <GiPhone />
              <div className="">
                <h6>call us</h6>
                <span>+2 342 5446 67</span>
              </div>
            </div>
          </div>
          <div className="basis-2/3">
            <h2>talk to a human</h2>
            <form action="">
                <div className="flex items-center justify-between gap-12">
                    <input className="basis-1/2" type="text" placeholder="Your Name" />
                    <input className="basis-1/2" type="email" placeholder="Your Email" />
                </div>
                <textarea name="" placeholder="Message" className="w-full mt-6" id="" cols="30" rows="4"></textarea>
                <button>send a message</button>
            </form>
          </div>
        </div>
      </section>

      <SchoolHistoryBox/>
    </div>
  );
};

export default Contact;
