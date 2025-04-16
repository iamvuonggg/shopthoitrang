import React from "react";
import { assets } from "../assets/assets";
import { div } from "framer-motion/client";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet tenetur repellendus Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Delectus odit maiores
            perferendis, odio ut dolore saepe voluptas ab numquam harum qui
            tempora, doloremque provident eveniet, assumenda minus molestiae
            similique exercitationem! nihil placeat?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+84329_123_124</li>
                <li>contact@vuongnguyen.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@vuong.com - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
