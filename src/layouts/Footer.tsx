import Subscribe from "../components/Subscribe/Subscribe";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <>
      <Subscribe />
      <div className="bg-[#F2F3F5] px-10 ">
        <div className="flex flex-col lg:flex-row justify-between container mx-auto font-Libre mb-16 py-10 px-3 lg:px-0">
          <aside className="">
            <h1 className="text-3xl capitalize text-black font-semibold mb-5">
              <Link to="/">
                𝘽𝙊𝙊𝙆<span className="text-red-200 ">𝙈𝘼𝙓</span>
              </Link>
            </h1>
            <p className="text-[16px] text-[#121212] mb-5">
              Our company is dedicated to creating unique and <br /> comfortable
              clothing for men and women.
            </p>

            <div className="flex items-center text-[14px] space-x-3 mb-3">
              <IconContext.Provider value={{ size: 16 }}>
                <FaPhoneAlt />
              </IconContext.Provider>
              <p>Call Us : +880 1950 165017</p>
            </div>
            <div className="flex items-center text-[14px] space-x-3">
              <IconContext.Provider value={{ size: 19 }}>
                <IoMdMailOpen />
              </IconContext.Provider>
              <p>mostafizur0195@gmail.com</p>
            </div>
          </aside>
          <aside className="mt-7 lg:mt-0">
            <h1 className="text-[16px] uppercase text-[#121212] leading-4 font-semibold">
              Company
            </h1>

            <div className="text-[14px] text-[#797B7E] space-y-3 mt-4">
              <p>Delivery</p>
              <p>Refund Policy</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Terms and conditions</p>
            </div>
          </aside>
          <aside className="mt-7 lg:mt-0">
            <h1 className="text-[16px] uppercase text-[#121212] leading-4 font-semibold">
              Information
            </h1>
            <div className="text-[14px] text-[#797B7E] space-y-3 mt-4">
              <p>FAQ's</p>
              <p>Terms</p>
              <p>Delivery Info</p>
              <p>Refund Policy</p>
              <p>Size Guide</p>
            </div>
          </aside>
          <aside className="mt-7 lg:mt-0">
            <h1 className="text-[16px] uppercase text-[#121212] leading-4 font-semibold">
              Orders
            </h1>
            <div className="text-[14px] text-[#797B7E] space-y-3 mt-4">
              <p>My Account</p>
              <p>Orders</p>
              <p>View Cart</p>
              <p>Wishlist</p>
              <p>Checkout</p>
            </div>
          </aside>
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row justify-between font-Libre py-5 lg:py-3 border-t space-y-2 -mt-10 lg:-mt-0">
          <aside className="flex justify-center lg:justify-start items-center">
            <p className="text-sm">
              © 2023 - E-Book Created by Mostafizur Rahman
            </p>
          </aside>
          <div className="flex justify-center lg:justify-start items-center space-x-5">
            <a
              target="_blank"
              href="https://www.facebook.com/mostafizur.proo/"
              rel="noreferrer"
            >
              <aside className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                <FaFacebookF />
              </aside>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/mostafizur-pro/"
              rel="noreferrer"
            >
              <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                <FaLinkedinIn />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
