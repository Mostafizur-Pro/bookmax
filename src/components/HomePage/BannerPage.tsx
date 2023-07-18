import bannerImage1 from "../../assets/HomePage/bannerpage.jpg";
import bannerImage3 from "../../assets/HomePage/banner3.jpg";
import bannerImage4 from "../../assets/HomePage/banner4.jpg";
// import { Zoom } from "react-reveal";

export default function BannerPage() {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative min-h-fit  w-full">
          <div
            className="hero "
            style={{
              backgroundImage: `url(${bannerImage1})`,
            }}
          >
            <div className="flex justify-around h-96 text-white items-center w-full">
              <div></div>
              <div className=" text-left ml-20 ">
                <p>CLASSIC BOOKS</p>

                <h1 className=" text-4xl font-semibold">Everyone Love's</h1>
                <h1 className=" text-4xl font-semibold">Literature</h1>

                <button className="mt-20 btn rounded-none btn-neutral border-black">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero  "
            style={{
              backgroundImage: `url(${bannerImage4})`,
            }}
          >
            <div className="flex justify-around h-96  items-center w-full">
              <div className=" text-left ml-20 ">
                <p>CLASSIC BOOKS</p>

                <h1 className=" text-4xl font-semibold">Everyone Love's</h1>
                <h1 className=" text-4xl font-semibold">Literature</h1>

                <button className="mt-20 btn rounded-none btn-neutral border-black">
                  SHOP NOW
                </button>
              </div>
              <div></div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage: `url(${bannerImage3})`,
            }}
          >
            <div className="flex justify-around h-96 text-white items-center w-full">
              <div></div>
              <div className=" text-left ml-20 ">
                <p>CLASSIC BOOKS</p>

                <h1 className=" text-4xl font-semibold">Everyone Love's</h1>
                <h1 className=" text-4xl font-semibold">Literature</h1>

                <button className="mt-20 btn rounded-none btn-neutral border-black">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
