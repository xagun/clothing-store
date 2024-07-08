import React from "react";
import { useCartStore } from "../store/CartStore";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) =>
    state.cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  );
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const calculateTotalPrice = () => {
    const total = parseFloat(totalPrice.toFixed(2)) + 100;
    return total.toFixed(2);
  };

  return (
    <div className="p-4 min-h-[80vh]">
      <h2 className="text-2xl font-bold mb-4">Shopping Bag</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="overflow-x-auto min-h-[60vh]">
            <table className="min-w-full bg-white">
              <thead className="border-t-2 border-b-2 font-bold text-[24px]">
                <tr>
                  <th className="px-4 py-4"></th>
                  <th className="px-4 py-4 text-start">Item</th>
                  <th className="px-4 py-4 text-start">Price</th>
                  <th className="px-4 py-4 text-start">Quantity</th>
                  <th className="px-4 py-4 text-start">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(({ product, quantity }) => (
                  <tr key={product.id} className="border-b last:border-b-0">
                    <td className="px-4 py-2">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-[100px] h-[200px] object-contain"
                      />
                    </td>
                    <td className="px-4 py-2 w-[250px]">{product.title}</td>
                    <td className="px-4 py-2">${product.price.toFixed(2)}</td>
                    <td className="px-4 py-2">
                      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 items-start sm:items-center">
                        <div className="flex space-x-2 items-center">
                          <button
                            className="bg-red-500 text-white p-2 h-6 w-6 rounded-full flex items-center"
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            -
                          </button>
                          <span>{quantity}</span>
                          <button
                            className="bg-primary text-white p-2 h-6 w-6 rounded-full flex items-center"
                            onClick={() => increaseQuantity(product.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 flex flex-col gap-8">
                      <span>${(product.price * quantity).toFixed(2)}</span>
                      <button
                        className="bg-transparent border-red-500 border px-2 py-1 rounded-[25px] mt-2 sm:mt-0 w-[82px] text-sm text-red-500"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end gap-[70px] md:gap-[200px] lg:gap-[300px] xl:gap-[400px] font-bold text-[24px] max-sm:text-[16px] border-t border-t-black py-6">
            <div className="px-4 py-2 text-left font-bold">
              <h1>Sub total:</h1>
              <h1>Shipping:</h1>
              <h1>Total:</h1>
            </div>
            <div className="px-4 py-2 font-bold">
              <h1>${totalPrice.toFixed(2)}</h1>
              <h1>$ 100</h1>
              <h1>{calculateTotalPrice()}</h1>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="rounded-[50px] w-[236px] h-[64px] text-[20px] bg-primary text-white">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
