import React from "react";
import { Product } from "../types/Iproducts";
import { useCartStore } from "../store/CartStore";
import StarRating from "./Star";

function ProductBox({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="h-[420px] w-[240px] mb-5">
      <div className="group relative bg-[#F7F8FA] h-[300px] w-[240px] hover-overlay">
        <img
          className="h-full w-full object-contain p-4 mix-blend-multiply"
          src={product.image}
          alt="No preview"
        />
        <button
          onClick={() => addToCart(product)}
          className="absolute z-10 inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity bg-transparent text-white"
        >
          <span className="bg-primary text-white py-2 px-4 rounded-[25px]">
            Add to bag
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">
          {product.title}
        </h2>

        <h4>$ {product.price}</h4>
        <StarRating rating={product.rating.rate} />
      </div>
    </div>
  );
}

export default ProductBox;
