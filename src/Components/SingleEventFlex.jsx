import { BsPen } from "react-icons/bs";
import { MdOutlineLocationOn, MdDateRange } from "react-icons/md";
import { BiTimeFive, BiWallet } from "react-icons/bi";

const SingleEventFlex = () => {
  return (
    <section className="flex its items-start justify-between container px-[5rem] mx-auto">
      <div className="basis-[70%] bg-white p-12 rounded-lg">
        <div className="">
          <img
            src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between gap-6 mt-4">
          <div className="">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="https://shelly.merku.love/wp-content/uploads/2020/11/blog-large5.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="">
            <span>1</span>
            <h6>program opening</h6>
            <p>
              Learning ipsum dolor amet user created content (ucc) or user amet
            </p>
          </div>
          <div className="">
            <span>1</span>
            <h6>program opening</h6>
            <p>
              Learning ipsum dolor amet user created content (ucc) or user amet
            </p>
          </div>
          <div className="">
            <span>1</span>
            <h6>program opening</h6>
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

        <p>
          Nunc at tincidunt nisl. Nullam fringilla quis odio vitae eleifend.
          Quisque sed mi erat. In hac habitasse platea dictumst. Vivamus mattis
          nunc quis turpis pretium sollicitudin. In eu semper justo. Phasellus
          facilisis hendrerit massa, sed auctor lacus convallis et. Vestibulum
          ac odio interdum, efficitur nisl ut, sollicitudin arcu. Donec commodo
          elementum tempus. In hac habitasse platea dictumst.
        </p>

        <div className="">
          <h4>Activities Involved</h4>

          <div className="flex items-start justify-start gap-2">
            <BsPen />
            <span>Program opening</span>
          </div>
          <div className="flex items-start justify-start gap-2">
            <BsPen />
            <span>Program opening</span>
          </div>
          <div className="flex items-start justify-start gap-2">
            <BsPen />
            <span>Program opening</span>
          </div>
          <div className="flex items-start justify-start gap-2">
            <BsPen />
            <span>Program opening</span>
          </div>
        </div>
      </div>
      <div className="basis-[30%]">
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

        <div className="">
          <div className="flex items-start justify-start gap-2">
            <MdOutlineLocationOn />
            <span>Program opening</span>
          </div>

          <div className="flex items-start justify-start gap-2">
            <MdDateRange />
            <span>Program opening</span>
          </div>

          <div className="flex items-start justify-start gap-2">
            <BiTimeFive />
            <span>Program opening</span>
          </div>

          <div className="flex items-start justify-start gap-2">
            <BiWallet />
            <span>Program opening</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleEventFlex;
