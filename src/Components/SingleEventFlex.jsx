import { BsPen } from "react-icons/bs";
import { MdOutlineLocationOn, MdDateRange } from "react-icons/md";
import { BiTimeFive, BiWallet } from "react-icons/bi";
import BtnComponent from "../Components/BtnComponent";

const SingleEventFlex = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between xl:container xl:px-[5rem] px-4 sm:px-6 gap-6 mx-auto py-10">
      <div className="basis-[75%] bg-white py-12 rounded-lg">
        <div className="">
          <img
            src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5.png"
            className="rounded-2xl"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between gap-6 mt-4">
          <div className="">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5.png"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5.png"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5.png"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5.png"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6 mb-4">
          <div className="">
            <div className="relative w-12 h-12 rounded-full bg-primary grid place-items-center text-white mt-4">
              <span className="text-xl text-white font-semibold">1</span>
            </div>
            <h6 className="text-primary font-semibold  capitalize text-xl my-4">program opening</h6>
            <p>
              Learning ipsum dolor amet user created content (ucc) or user amet
            </p>
          </div>
          <div className="">
            <div className="relative w-12 h-12 rounded-full bg-primary grid place-items-center text-white mt-4">
              <span className="text-xl text-white font-semibold">2</span>
            </div>
            <h6 className="text-primary font-semibold  capitalize text-xl my-4">program opening</h6>
            <p>
              Learning ipsum dolor amet user created content (ucc) or user amet
            </p>
          </div>
          <div className="">
            <div className="relative w-12 h-12 rounded-full bg-primary grid place-items-center text-white mt-4">
              <span className="text-xl text-white font-semibold">3</span>
            </div>
            <h6 className="text-primary font-semibold  capitalize text-xl my-4">program opening</h6>
            <p>
              Learning ipsum dolor amet user created content (ucc) or user amet
            </p>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          venenatis felis. Fusce id lectus sit amet nisi ornare ultricies. In
          sagittis lacinia lorem et tristique. Quisque mauris neque,
          sollicitudin sit amet imperdiet in, scelerisque sit amet arcu. In
          vehicula sem eget nisi convallis, a mattis orci imperdiet. Curabitur
          vitae sapien vel lectus sagittis consequat. Nullam enim velit,
          dignissim vel viverra ac, eleifend ut tellus.
        </p>

        <p className="py-6">
          Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend.
          Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis
          nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus
          facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum
          ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo
          elementum tempus. In hac habitasse platea dictumst.
        </p>

        <div className="">
          <h4 className="pt-2 pb-3 text-xl font-semibold ">Activities Involved</h4>

          <div className="flex items-start justify-start gap-2">
            <BsPen className="text-primary mr-2" />
            <span className="text-[1rem] text-para-text-color">Program opening</span>
          </div>
          <div className="flex items-start justify-start gap-2 py-2">
            <BsPen className="text-primary mr-2" />
            <span className="text-[1rem] text-para-text-color">Program opening</span>
          </div>
          <div className="flex items-start justify-start gap-2 pb-2">
            <BsPen className="text-primary mr-2" />
            <span className="text-[1rem] text-para-text-color">Program opening</span>
          </div>
          <div className="flex items-start justify-start gap-2">
            <BsPen className="text-primary mr-2" />
            <span className="text-[1rem] text-para-text-color">Program opening</span>
          </div>
        </div>
      </div>
      <div className="basis-[25%] rounded-lg overflow-hidden top-4 sticky">
        <div
          style={{
            maxWidth: "100%",
            listStyle: "none",
            transition: "none",
            overflow: "hidden",
            width: "100%",
            height: 300,
          }}
        >
          <div
            id="display-google-map"
            style={{ height: "100%", width: "100%", maxWidth: "100%" }}
          >
            <iframe
              style={{ height: "100%", width: "100%", border: 0 }}
              frameBorder={0}
              src="https://www.google.com/maps/embed/v1/place?q=yinmabin&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
          <a
            className="embed-ded-maphtml"
            href="https://www.bootstrapskins.com/themes"
            id="auth-map-data"
          >
            premium bootstrap themes
          </a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "#display-google-map img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}",
            }}
          />
        </div>

        <div className="border-b-2 border-secondary border-opacity-40 pb-4">
          <div className="flex items-start justify-start gap-2 my-4">
            <MdOutlineLocationOn className="text-secondary text-[1.2rem]"/>
            <span className="font-semibold text-[1rem] text-para-text-color ">25 Grafton St, Worcester</span>
          </div>

          <div className="flex items-start justify-start gap-2">
            <MdDateRange className="text-secondary text-[1.2rem]" />
            <span className="font-semibold text-[1rem] text-para-text-color ">Program opening</span>
          </div>

          <div className="flex items-start justify-start gap-2 my-3">
            <BiTimeFive className="text-secondary text-[1.2rem]" />
            <span className="font-semibold text-[1rem] text-para-text-color ">Program opening</span>
          </div>

          <div className="flex items-start justify-start gap-2">
            <BiWallet className="text-secondary text-[1.2rem]" />
            <span className="font-semibold text-[1rem] text-para-text-color ">Program opening</span>
          </div>
        </div>

<div className="mt-4">

        <BtnComponent text={'Enroll now'}/>
</div>
      </div>
    </section>
  );
};

export default SingleEventFlex;
