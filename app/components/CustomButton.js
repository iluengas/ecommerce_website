"use client";

import React, { useState } from "react";
import { addItemToCart } from "@/app/utils/cart";

export default function CustomButton({ className, buttonText, product }) {
  const [active, setActive] = useState(false);
  const product_item = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    category: product.category,
    description: product.description,
    image: product.image,
  };
  console.log("Product item before adding to cart:", product_item);

  const handleClick = () => {
    if (!product || !product.id) {
      console.error("Invalid product. Cannot add to cart.");
      return;
    }

    setActive((prev) => !prev);
    addItemToCart(product_item);
  };

  return (
    <div>
      <button
        className={`${className}`}
        onClick={handleClick}
        aria-pressed={active}
      >
        {buttonText}
      </button>
    </div>
  );
}
