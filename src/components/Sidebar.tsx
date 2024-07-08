import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../api/storeapi";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { cn } from "../lib/utils";

interface ISidebarProps {
  handleCategoryClick: (category: string) => void;
}

const Sidebar = ({ handleCategoryClick }: ISidebarProps) => {
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCategoryOpen(true); // Set to true on larger screens
      } else {
        setCategoryOpen(false); // Set to false on smaller screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 min-w-[187px] p-6 h-full shadow-lg ">
      <h1 className="text-[18px] border-b-2 pb-[10px] mb-6 flex justify-between ">
        Categories
        <div
          className="cursor-pointer z-50 max-lg:flex hidden"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          {categoryOpen ? <RxCaretUp /> : <RxCaretDown />}
        </div>
      </h1>
      <div
        className={cn(
          "flex flex-col gap-2 overflow-y-scroll transition-all duration-300",
          categoryOpen ? "max-h-[400px]" : "max-h-0"
        )}
      >
        <span
          className="text-[16px] font-light h-[42px] cursor-pointer"
          onClick={() => handleCategoryClick("")}
        >
          All
        </span>
        {categories?.map((cat: string, idx: number) => (
          <span
            className="capitalize font-light h-[42px] cursor-pointer"
            key={idx}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
