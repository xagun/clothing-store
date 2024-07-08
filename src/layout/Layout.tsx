import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/images/feat1.png";
import img2 from "../assets/images/feat2.png";
import img3 from "../assets/images/feat3.png";
import img4 from "../assets/images/feat4.png";

const Layout = () => {
  return (
    <div className="font-nunito mx-auto">
      <Header />
      <div className="max-w-[1440px]  px-[100px] mx-auto py-5 max-lg:px-[40px]">
        <Outlet />
        <h1 className="text-[32px] font-bold py-[56px]">
          More on Chic Seduire:{" "}
        </h1>
        <div className="flex gap-4 flex-wrap justify-center mb-10">
          <img
            className="w-[292px] h-[458px]"
            src={img1}
            alt="No preview available"
          />
          <img
            className="w-[292px] h-[458px]"
            src={img2}
            alt="No preview available"
          />
          <img
            className="w-[292px] h-[458px]"
            src={img3}
            alt="No preview available"
          />
          <img
            className="w-[292px] h-[458px]"
            src={img4}
            alt="No preview available"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
