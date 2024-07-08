import React, { useState } from "react";
import logo from "../assets/logo.svg";
import CartIcon from "../assets/icons/CartIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import FavouritesIcon from "../assets/icons/FavouritesIcon";
import { Link } from "react-router-dom";
import { RxCaretDown, RxHamburgerMenu } from "react-icons/rx";
import { useCartStore } from "../store/CartStore";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const { cart } = useCartStore();

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="w-full px-[100px] max-lg:px-[50px] max-md:px-[40px] py-[16px] max-w-[1440px] mx-auto">
      <div className="flex justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="No preview available" />
            <span className="text-[24px] font-bold max-sm:text-[20px]">
              Chic Seduire
            </span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-6 max-xl:gap-1">
          <span className="w-[114px] flex items-center gap-2 font-[200]">
            Winter <RxCaretDown />{" "}
          </span>
          <span className="w-[114px] flex items-center gap-2">
            Summer <RxCaretDown />{" "}
          </span>
          <span className="w-[114px]">Accessories</span>
          <span className="w-[114px]">Dresses</span>
          <span className="w-[114px]">Shoes</span>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <SearchIcon />
          <Link to="/cart" className="relative">
            <CartIcon />
            {cart.length > 0 && (
              <div className="bg-primary absolute rounded-full text-white text-xs p-2 -top-6 left-3 h-8 w-8 flex items-center justify-center">
                {cart.length}
              </div>
            )}
          </Link>
          <FavouritesIcon />
        </div>
        <div
          className={`flex items-center justify-center lg:hidden z-20 ${
            isMobileNavOpen ? "text-white" : ""
          }`}
        >
          <RxHamburgerMenu
            size={28}
            onClick={toggleMobileNav}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-opacity duration-300 ease-in-out absolute top-0 bg-primary text-white z-10 w-[240px] h-[100vh] right-0 p-5 pt-[100px] ${
          isMobileNavOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 mt-4">
          <span className="w-[114px] flex items-center gap-2 font-[200]">
            Winter <RxCaretDown />{" "}
          </span>
          <span className="w-[114px] flex items-center gap-2">
            Summer <RxCaretDown />{" "}
          </span>
          <span className="w-[114px]">Accessories</span>
          <span className="w-[114px]">Dresses</span>
          <span className="w-[114px]">Shoes</span>
          <div className="flex items-center gap-6 text-white mt-10">
            <SearchIcon color="white" />
            <Link to="/cart" className="relative">
              <CartIcon color="white" />
              {cart.length > 0 && (
                <div className="bg-primary absolute rounded-full text-white text-xs p-2 -top-6 left-3 h-8 w-8 flex items-center justify-center">
                  {cart.length}
                </div>
              )}
            </Link>
            <FavouritesIcon color="white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
