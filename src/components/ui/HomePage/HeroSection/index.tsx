/* eslint-disable react/no-unescaped-entities */
"use client";
import "./HeroSectin.css";
import React, { useEffect, useState } from "react";
import slider from "../../../../assets/tap2.png";
import { KeenSliderInstance, useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Container from "../../Container";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      const keenSlider = slider as KeenSliderInstance<any, any, any>;
      if (keenSlider.details) {
        setCurrentSlide(keenSlider.details().relativeSlide as number);
      }
      // setCurrentSlide(slider.details().relativeSlide as number);
    },
    created() {
      setLoaded(true);
    },
    loop: true, // Enable looping
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (instanceRef.current) {
  //       instanceRef.current.next();
  //     }
  //   }, 5000); // Change the interval duration as needed (2000 ms = 2 seconds)

  //   return () => clearInterval(interval);
  // }, [instanceRef]);
  return (
    <Container className="heroSectionContainer mt-0 lg:mt-10">
      <div className="heroSectionWraps ">
        <div className="sliderWrap">
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <div className="flex items-center sliderContentWrap justify-between w-full ">
                  <div className="sliderContent">
                    <h3 className="text-2xl lg:text-5xl font-semibold uppercase leading-[30px] lg:leading-[60px]">
                      Brown Packaging <br /> Tapes of 2024
                    </h3>
                    <p className="my-2 lg:my-3 font-semibold text-xl hiddenContent2">Brand: Scotia Tape</p>
                    <p>The "SecurePack Heavy Duty Water-Activated Gum Tape" <span className="hiddenContent2">offers top-tier sealing capabilities, making it the preferred</span> <span className="hiddenContent">choice for both commercial and residential packaging. Its robust water-activated adhesive bonds strongly,</span> </p>
                    <small className="block mt-5 ">FROM</small>
                    <div className=" flex items-center ">
                      <sup className="text-2xl font-semibold">৳</sup>
                      <span className="text-3xl lg:text-5xl font-bold">50</span>
                    </div>
                    <button className="addToCartBtn mt-3">Add To Cart </button>
                  </div>
                  <Image src={slider} alt="slider" width="500" height="500" />
                </div>
              </div>
            </div>
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
          {/* {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )} */}
        </div>
      </div>
    </Container>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
