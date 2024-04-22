"use client";

import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./ProductButton.css";
import TopRatedModal from "../TopRatedModal/TopRatedModal";
const ProductButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div onClick={handleOpen} className="flex items-center detailsBtn">
        <button>Details </button>
        <HiOutlineArrowNarrowRight className="ml-2" size={20} />
      </div>
      {/* {open && <TopRatedModal onClose={handleClose} />} */}
    </>
  );
};

export default ProductButton;
