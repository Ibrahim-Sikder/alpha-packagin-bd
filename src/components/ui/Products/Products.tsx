import React from "react";
import "./Products.css";
import Container from "../Container";
import tap from "../../../assets/tape.jpg";
import tap2 from "../../../assets/tap2.png";
import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";
import ProductButton from "../ProductButton/ProductButton";
const Products = () => {
  const productData = [
    {
      id: 1,
      price: 445,
      title: "",
      brand: "Scotia Tape ",
    },
    {
      id: 1,
      price: 445,
      title: "",
      brand: "Scotia Tape ",
    },
    {
      id: 1,
      price: 445,
      title: "",
      brand: "Scotia Tape ",
    },
    {
      id: 1,
      price: 445,
      title: "",
      brand: "Scotia Tape ",
    },
    {
      id: 1,
      price: 445,
      title: "",
      brand: "Scotia Tape ",
    },
    {
      id: 1,
      price: 445,
      title: "",
      brand: "Scotia Tape ",
    },
    {
      id: 1,
      price: 445,
      title: "",
      brand: "Scotia Tape ",
    },
    {
      id: 1,
      price: 445,
      title: "",
      brand: "Scotia Tape ",
    },
  ];

  return (
    <Container className="sectionMargin">
      <h3 className="text-3xl font-semibold">Our Popular Products</h3>
      <div className="productsWrap mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-content-center place-items-center ">
        {productData.map((data, i) => (
          <div key={data.id} className="productCard">
            <div className="productCardImgWrap">
              <Image
                alt="product"
                src={tap}
                width={500}
                height={500}
                className="showImg"
              />
              <Image
                alt="product"
                src={tap2}
                width={500}
                height={500}
                className="hideImg"
              />
            </div>
            {/* <div className="iconWraps space-y-2">
              <div className="iconsWrap">
                <HiOutlineHeart size={20} />
              </div>
              <div className="iconsWrap">
                <HiOutlineHeart size={20} />
              </div>
              <div className="iconsWrap">
                <HiOutlineHeart size={20} />
              </div>
            </div> */}
            <div className="productContent">
              <h3 className="text-xl font-semibold text-[#018549]">
                Best Scotch Packaging Tape
              </h3>
              <div className="space-y-2 text-sm">
                <p>Brand: Scotia Tape</p>
                <p>Width: 57mm – 400 Yard on</p>
                <p>Thickness: 40 Micr</p>
                <p>Quality: Good Quality</p>
                <p>
                  {" "}
                  Made in: <b>Bangladesh</b>
                </p>
              </div>
              <ProductButton />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
