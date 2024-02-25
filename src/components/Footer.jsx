import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-thirdGreen py-6 mt-auto">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            {/* First Column - Useful Links */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
              <ul className="flex flex-col gap-2">
                  <Link className="" to="/">
                    Home
                  </Link>
                  <Link className="" to="/about">
                    About
                  </Link>
                  <Link className="" to="/">
                    For Sale
                  </Link>
                  <Link className="" to="/">
                    For Rent
                  </Link>
              </ul>
            </div>
            {/* Second Column - Services */}
            <div className="">
              <h2 className="text-lg font-semibold mb-4">Our Services</h2>
              <div className="">
                <div className="flex flex-col mb-2">
                  <h3 className="">
                    Property Buying and Selling
                  </h3>
                  {/* Description can be added here */}
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <h3 className="">Property Valuation</h3>
                  <h3 className="">Property Management</h3>
                  <h3 className="">Investment Advisory</h3>
                </div>
              </div>
            </div>
            {/* Third Column - Contact Us */}
            <div>
              <h2 className="text-lg font-semibold">Contact Us</h2>
              <div className="mt-2 gap-2 mb-4 flex flex-col">
                <p className="">
                  <strong>Phone:</strong> +250789868814
                </p>
                <p className="">
                  <strong>Email:</strong> gbestates@gmail.com
                </p>
                <p className="">
                  <strong>Address:</strong> KK 346 ST Kanombe
                </p>
              </div>
            </div>
          </div>
          <div className="text-2xl m-2 gap-12 sm:gap-16 flex justify-center cursor-pointer">
            <FaFacebook className="" />
            <FaInstagramSquare className="" />
            <FaSquareXTwitter className="" />
            <FaLinkedin className="" />
          </div>
        </div>
      </footer>
      <div className="border border-black w-full "></div>
      <div className=" bg-thirdGreen font-semibold text-medium px-8 p-4">
        <p className="text-sm md:text-md mx-auto md:ml-24">Copyright &copy; 2024, GBE. All rights reserved.</p>
      </div>
    </div>
  );
}
