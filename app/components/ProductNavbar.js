"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Lekton } from "next/font/google";

const lekton = Lekton({ weight: "400", subsets: ["latin"] });

export default function ProductNavbar({ pageName, className }) {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("");

  return (
    <nav className={`${className} pt-10 w-full h-fit space-y-14 `}>
      <h2 className={`${lekton.className} text-5xl font-semibold`}>
        {pageName.toUpperCase()}
      </h2>
      <ul className={`flex space-x-1 md:space-x-4 text-lg`}>
        <li className={`border border-black px-1 ${pageName === "All Products" ? "bg-black text-white" : "bg-white"}`}>
          <button
            type="button"
            onClick={() => router.push("/pages/allproducts")}
          >
            View All
          </button>
        </li>
        <li className={`border border-black px-1 ${pageName === "Shirt" ? "bg-black text-white" : "bg-white"}`}>
          <button type="button" onClick={() => router.push("/pages/shirts")}>
            Shirts
          </button>
        </li>
        <li className={`border border-black px-1 ${pageName === "Hoodie" ? "bg-black text-white" : "bg-white"}`}>
          <button type="button" onClick={() => router.push("/pages/hoodies")}>
            Hoodies
          </button>
        </li>
        <li className={`border border-black px-1 ${pageName === "Moto-Jersey" ? "bg-black text-white" : "bg-white"}`}>
          <button type="button" onClick={() => router.push("/pages/jersey")}>
            Jerseys
          </button>
        </li>
        <li className={`border border-black px-1 ${pageName === "Sweats" ? "bg-black text-white" : "bg-white"}`}>
          <button type="button" onClick={() => router.push("/pages/sweats")}>
            Sweats
          </button>
        </li>
        <li className={`border border-black px-1 ${pageName === "Ski-Mask" ? "bg-black text-white" : "bg-white"}`}>
          <button type="button" onClick={() => router.push("/pages/masks")}>
            Masks
          </button>
        </li>
      </ul>
    </nav>
  );
}
