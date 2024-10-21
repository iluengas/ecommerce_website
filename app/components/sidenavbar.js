"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Sidenavbar({ className }) {
  const [currentPage, setCurrentPage] = useState("Products");

  const handleClick = (pageName) => {
    setCurrentPage(pageName)
  };

  return (
    <nav
      className={`hidden md:flex md:flex-col space-y-6 w-64 ${className}`}
    >
      <h2>Clothing / {currentPage}</h2>
      <ul className="flex flex-col space-y-2 text-lg">
        <li className="hover:text-gray-500">
          <Link href="/allproducts" passHref>
            <button onClick={() => handleClick("Products")}>
              All Products
            </button>
          </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link href="/shirts" passHref>
            <button onClick={() => handleClick("Shirts")}>Shirts</button>
          </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link href="/hoodies" passHref>
            <button onClick={() => handleClick("Hoodies")}>Hoodies</button>
          </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link href="/jersey" passHref>
            <button onClick={() => handleClick("Moto Jerseys")}>
              Moto Jerseys
            </button>
          </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link href="/crop_tops" passHref>
            <button onClick={() => handleClick("Crop Tops")}>Crop Tops</button>
          </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link href="/sweats" passHref>
            <button onClick={() => handleClick("Sweats")}>Sweats</button>
          </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link href="/masks" passHref>
            <button onClick={() => handleClick("Masks")}>Masks</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
