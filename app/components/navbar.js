"use client";

import Link from "next/link";
import { PiBagThin } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { Smooch } from "next/font/google";

const smooch = Smooch({ weight: "400", subsets: ["latin"] });

export default function Navbar({ className }) {
  return (
    <nav className={`${smooch.className} ${className} flex`}>
      <div className="w-2/3 flex justify-left items-center space-x-8 ">
        <Link href="/" className="text-3xl text-red-700">
          S.G.
        </Link>
        <button className="hover:text-gray-800">
          <FiMenu className="text-2xl" />
        </button>
      </div>
      <div className="w-1/3  flex justify-end items-center">
        <Link href="/pages/cart">
          <PiBagThin className="hover:text-gray-800 text-3xl" />
        </Link>
      </div>
    </nav>
  );
}
