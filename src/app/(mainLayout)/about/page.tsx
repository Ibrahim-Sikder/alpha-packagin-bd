import React from "react";
import Iframe from "react-iframe";
import akota from "../../../assets/akota.jpg";
import Image from "next/image";
import Container from "@/components/ui/Container";
import "./about.css";
import {
  FaFacebook,
  FaLocationArrow,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { TbMarquee } from "react-icons/tb";
import MoveText from "@/components/ui/MoveText/MoveText";

const page = () => {
  const socialData = [
    {
      id: 0,
      title: "Visit Us",
      text: "76 Borogram Chowrasta, Kamrangirchar, Dhaka 1211 Dhaka, Dhaka Division, Bangladesh",
    },
    {
      id: 1,
      title: "Facebook Page ",
      text: "https://www.facebook.com/AkotaTradersTapes",
    },
    {
      id: 2,
      title: "WhatsApp",
      text: "01316 448992",
    },
    {
      id: 3,
      title: "Give Us a Call",
      text: "01316 448992",
    },
  ];

  return (
    <div>
       <MoveText/>
      <div className="aboutSection">
        <div className="aboutSectionWrap">
        <Container className="">
        <Image
          src={akota}
          alt="akota"
          width={500}
          height={500}
          className="aboutImg  "
        />
        <p className="mt-8 ">
          Akota Traders. Gum Tape Factory in Bangladesh. Let us introduce
          ourselves as a leading Bangladesh manufacturer of Gum Tape in
          Bangladesh. We produce the best quality strong adhesive tapes with
          China Taiwan-origin glue suitable to our country’s weather with
          accurate length and specifications. We are selling to dealers and
          suppliers in different wholesale markets of Bangladesh as per their
          required specifications & length of small tape rolls. We also sell our
          gum tape, printed gum tape, double-sided tape, rexine tape, masking
          tape, colour gum tape, Kraft paper tape, both-sided tape, PP belts,
          Poly bag, BOPP jumbo rolls to many renowned Export oriented Ready Made
          Garments Industries, Industry Packaging, Food Packaging, Paper Mills
          Factory Pharmaceutical companies and some big chains of Food &
          beverage manufacturers in Bangladesh as per their required
          specifications at the lowest factory prices. We can assure the quality
          of the products is the same every time buyers buy from us. We invite
          you to contact us with any type of adhesive tape requirements with the
          assurance of the best quality, cheaper prices, with accurate
          measurements in length and thickness.
        </p>
      </Container>
        </div>
      </div>
      <div className="socialSection bg-[#989797] py-10 ">
        <Container className="">
          <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-10 place-items-center justify-content-center ">
            {socialData.map((data, i) => (
              <div key={data.id} className="social">
                <div
                  className={
                    i == 0
                      ? "socialIconWrap"
                      : i == 1
                      ? "socialIconWrap2"
                      : i == 3
                      ? "socialIconWrap3"
                      : "socialIconWrap4"
                  }
                >
                  {i == 0 ? (
                    <FaLocationArrow className="socialIcon" />
                  ) : i == 1 ? (
                    <FaFacebook className="socialIcon" />
                  ) : i == 2 ? (
                    <FaWhatsapp className="socialIcon" />
                  ) : i == 3 ? (
                    <FaPhoneAlt className="socialIcon" />
                  ) : null}
                </div>
                <div className="mt-5">
                  <h3
                    style={{
                      color:
                        i === 0
                          ? "#FFF72E"
                          : i === 1
                          ? "#22397B"
                          : i === 2
                          ? "#077D16"
                          : i === 3
                          ? "#077D16"
                          : "",
                    }}
                    className="text-3xl font-bold"
                  >
                    {data.title}
                  </h3>

                  <span>{data.text}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="sectionMargin">
        <section className="flex flex-row items-center justify-center w-full mx-auto my-10">
          <Iframe
            className="lg:h-[600px] h-[300px] "
            url="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d58422.334085038565!2d90.36847061727363!3d23.768913188212718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x3755b8e02be11aeb%3A0xfd9d057ee28ec06e!2sDhaka%201211%2C%20Bangladesh!3m2!1d23.7154706!2d90.3957449!4m3!3m2!1d23.8222047!2d90.42194549999999!5e0!3m2!1sen!2sus!4v1713735440468!5m2!1sen!2sus"
            width="100%"
            styles={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            position="relative"
          ></Iframe>
        </section>
      </div>
    </div>
  );
};

export default page;
