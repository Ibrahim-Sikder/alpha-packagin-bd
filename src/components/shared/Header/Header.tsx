"use client";

import { motion } from "framer-motion";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { HiLocationMarker, HiOutlinePhone } from "react-icons/hi";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Header.css";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";
const Header = () => {
  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector(".navbar");
  //   header!.classList.toggle("sticky", window?.scrollY > 50);
  // });

  const [toggle, setToggle] = useState(true);
  const toggleMobileMenu = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div>
      <div className="bg-[#191919] text-white hidden sm:block">
        <Container className="">
          <nav className="flex items-center justify-between w-full h-10 ">
            <div className="flex items-center">
              <div className="mr-5">
                <span className="flex items-center ">
                  {" "}
                  <HiLocationMarker className="mr-2" />{" "}
                  <small>Kamrangirchar, Dhaka, Bangladesh</small>
                </span>
              </div>
              <span className="flex items-center ">
                {" "}
                <HiOutlinePhone className="mr-2" />{" "}
                <small> 01316-448992</small>
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
            </div>
          </nav>
        </Container>
      </div>
      <div className="navbarItemsWrap">
        <div className="navbar">
          <Container className="">
            <motion.header
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="h-[80px]  flex   w-full  "
            >
              <nav className="flex items-center justify-between w-full ">
                <Link href="/">
                  {/* <b className="text-xl md:text-4xl ">
                    <b className="text-[#018549] logoIcon">Alpha</b>
                    <b className="]">-packaging-bd</b>
                  </b> */}
                  <Image src={logo} alt="logo" className="logo" />
                </Link>

                <ul className="space-x-5  hiddenNavBar md:flex items-center navItems navList">
                  <li>
                    {" "}
                    <Link href="/"> Home</Link>
                  </li>
                  {/* <li>
                    {" "}
                    <Link href="/">Printed Gum Tape</Link>
                  </li> */}
                  <li>
                    {" "}
                    <Link href="/about">About Us</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/contact">Contact Us</Link>{" "}
                  </li>
                  {/* <li>
                    {" "}
                    <Link href="/about">Blog </Link>{" "}
                  </li> */}
                </ul>

                {/* <div className="flex items-center logOutBtnWrap">
                  <div>
                    <button className="logoutBtn text-black">Log In</button>
                  </div>
                </div> */}
              </nav>
              <button onClick={toggleMobileMenu} className="cursor-pointer">
                {toggle ? (
                  <>
                    {" "}
                    <FaBars
                      className="block lg:hidden  mobileIcon cursor-pointer"
                      size={20}
                    />
                  </>
                ) : (
                  <>X</>
                )}
              </button>
            </motion.header>

            <ul
              className={` space-y-4 ${toggle ? "mobileMenu2" : "mobileMenu"}`}
            >
              <li>
                {" "}
                <Link href="/">Home</Link>
              </li>
             
              <li>
                {" "}
                <Link href="/about">About Us</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/contact">Contact Us </Link>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;
