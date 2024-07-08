import React from "react";

import logoLight from "../assets/logo-light.svg";
import FacebookIcon from "../assets/icons/FacebookIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import WhatsAppIcon from "../assets/icons/WhatsAppIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";

const Footer = () => {
  return (
    <div className="w-full bg-primary ">
      <div className="text-white px-[80px] pt-[80px] max-md:p-[40px] max-w-[1440px] mx-auto">
        <div className="flex max-md:flex-wrap gap-[38px] pb-[40px]">
          <div className="flex flex-col gap-6 w-[305px]">
            <h1 className="text-[20px] font-semibold">Navigate</h1>
            <div className="flex flex-col">
              <h2 className="text-[16px]">Home</h2>
              <h2 className="text-[16px]">About</h2>
              <h2 className="text-[16px]">Services</h2>
              <h2 className="text-[16px]">Terms & Conditions</h2>
              <h2 className="text-[16px]">Contact</h2>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[305px]">
            <h1 className="text-[20px] font-semibold"> Shop</h1>
            <div className="flex flex-col">
              <h2 className="text-[16px]">Women</h2>
              <h2 className="text-[16px]">Men</h2>
              <h2 className="text-[16px]">Jackets</h2>
              <h2 className="text-[16px]">New Arrivals</h2>
              <h2 className="text-[16px]">Hot Picks</h2>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[305px]">
            <h1 className="text-[20px] font-semibold">Explore</h1>
            <div className="flex flex-col">
              <h2 className="text-[16px]">T-Shirts</h2>
              <h2 className="text-[16px]">My Orders</h2>
              <h2 className="text-[16px]">Wishlist</h2>
              <h2 className="text-[16px]">Coats</h2>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[305px]">
            <div className="flex items-center gap-2 text-[24px] font-bold">
              <img src={logoLight} alt="No preview available" />
              <span>Chic Seduire</span>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[16px]">60-49 Road 11378 New York</h2>
              <h2 className="text-[16px]">+65 11 188 888</h2>
              <h2 className="text-[16px]">chicseduire@gmail.com</h2>
              <div className="flex gap-6 py-5">
                <FacebookIcon />
                <InstagramIcon />
                <WhatsAppIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10 border-t-gray-600 border-t">
          Copyright © 2023 . All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
