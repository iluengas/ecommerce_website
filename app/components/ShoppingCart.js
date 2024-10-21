"use client";

import React, { useState, useEffect } from "react";
import { getCart, removeFromCart } from "@/app/utils/cart";

export default function ShoppingCart({ className }) {
  const [products, setProducts] = useState(getCart());
  const delivery_fee = 25;

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
    setProducts(getCart());
  };
  // Optional: Use useEffect to sync with local storage on mount
  useEffect(() => {
    setProducts(getCart());
  }, []);

  return (
    <main className={`${className}`}>
      <h1 className="text-4xl font-bold uppercase mb-16">Shopping Bag</h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <section className="w-full md:w-3/5 border border-blue-500">
          items
        </section>
        <section className="w-full md:w-3/12 h-96  border-red-500">
          <div className="flex flex-col">
            <div className="flex justify-between w-full  border-black">
              <h2 className="uppercase font-light">order value</h2>
              <div className="font-bold">${products.sub_total}</div>
            </div>
            <div className="flex justify-between w-full  border-black">
              <h2 className="uppercase font-light">promotions</h2>
              <div className="text-red-500 font-bold">
                -${products.discounts}
              </div>
            </div>
            <div className="flex justify-between w-full  border-black">
              <h2 className="uppercase font-light">delivery fee</h2>
              <div className="font-bold">${delivery_fee}</div>
            </div>
            <div className="flex justify-between w-full  border-black mt-10">
              <h2 className="font-bold text-lg">Total</h2>
              <div className="text-lg font-bold">${products.sub_total}</div>
            </div>
            <button className="hover:bg-gray-700 border border-black p-4 bg-black text-white font-light mt-4">Continue to Checkout</button>
          </div>
        </section>
      </div>
    </main>
  );
}
