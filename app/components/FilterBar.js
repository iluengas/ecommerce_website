"use client";
import React, { useState, useEffect } from "react";

export default function FilterBar({ className }) {
  return (
    <nav
      className={`${className} border-black w-full flex items-end text-md font-medium`}
    >
      <div className="w-full flex justify-between space-x-6">
        <div className=" p-1 px-2 border-black flex items-center">
          SORT BY
        </div>
        <div className="p-1 px-2">FILTERS</div>
      </div>
    </nav>
  );
}
