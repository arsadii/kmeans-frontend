import React from "react";

export default function Navbar() {
  return (
    <div className="w-full bg-white shadow-xl relative h-16">
      <div className="container flex justify-between items-center h-full">
        <div className="">
          <h1 className="italic font-bold text-gray-800">K-Means</h1>
        </div>
        <div className="flex space-x-3">
          <a className="text-gray-600 hover:text-gray-800" href="">
            Home
          </a>
          <a className="text-gray-600 hover:text-gray-800" href="">
            Result
          </a>
          <a className="text-gray-600 hover:text-gray-800" href="">
            About
          </a>
        </div>
      </div>
    </div>
  );
}
