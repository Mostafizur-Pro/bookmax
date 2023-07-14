import bannerImage from "../../assets/HomePage/bannerpage.jpg";

export default function BannerPage() {
  return (
    <div
      className=" min-h-full place-items-end"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="hero-content  h-96 text-right text-neutral-content">
        <div className="max-w-md">
          <p>CLASSIC BOOKS</p>
          <h1 className=" text-4xl font-semibold">Everyone Love's</h1>
          <h1 className=" text-4xl font-semibold">Literature</h1>

          <button className="mt-20 btn rounded-none btn-neutral border-black">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
