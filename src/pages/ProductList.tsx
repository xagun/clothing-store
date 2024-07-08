import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { fetchProducts, fetchProductsByCategory } from "../api/storeapi";
import ProductBox from "../components/ProductBox";
import Sidebar from "../components/Sidebar";

import Skeleton from "../components/Skeleton";
const ProductList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(9);

  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", activeCategory],
    queryFn:
      activeCategory !== ""
        ? () => fetchProductsByCategory(activeCategory)
        : fetchProducts,
  });

  const sortedData = products?.slice((page - 1) * pageSize, page * pageSize);

  console.log(sortedData);

  return (
    <>
      <div className="flex min-h-[80vh] gap-6 max-lg:flex-col mb-8">
        <Sidebar handleCategoryClick={handleCategoryClick} />

        <div>
          <h1 className="capitalize text-[32px] mb-[30px]">
            {activeCategory || "Our Collection: Tops, Bottoms, Jackets + More"}
          </h1>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <Skeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-6">
              {sortedData &&
                sortedData.map((product: any, index: number) => (
                  <ProductBox key={index} product={product} />
                ))}
            </div>
          )}
          <div className="flex mt-4 gap-2 justify-center">
            <button
              className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}
            >
              Prev
            </button>
            <button
              className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
              onClick={() => setPage((old) => old + 1)}
              disabled={products && products.length < 10}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
