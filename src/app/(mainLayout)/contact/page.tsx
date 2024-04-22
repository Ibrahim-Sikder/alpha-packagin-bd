import React from "react";
import Iframe from "react-iframe";
import akota from "../../../assets/akota.jpg";
import Image from "next/image";
import Container from "@/components/ui/Container";
import address from '../../../assets/address.png';
import address2 from '../../../assets/email.png';
import address3 from '../../../assets/phone.png';
import contact from '../../../assets/contactus.jpg';
import './contact.css'
const page = () => {
  const addressData = [
    {
      id: 1,
      name: "Office Address",
      title: " Kamrangirchar, Dhaka, Bangladesh",
      text: "Dhaka-1212, Bangladesh",
      img: address,
    },

    {
      id: 1,
      name: "Email Us ",
      title: "alphapackaging@gmail.com",
      img: address2,
    },
    {
      id: 1,
      name: "Call Us",
      title: "+88-01316 448992",
      text: "+88-01621 150412",
      img: address3,
    },
  ];

  return (
    <div>
      <Container  className="">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 mx-auto rounded-lg md:grid-cols-2 px-8 md:px-12 lg:px-16 py-16 xl:px-32  text-gray-800">
          <div className="flex flex-col justify-between">
            <Image
              src={contact}
              className="h-[500px] w-auto"
              alt="this is img"
            />
          </div>
          <form className="space-y-6 contactForm">
            <div>
              <label className="text-sm">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-100 border "
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <label className="text-sm">Subject</label>
              <input
                id="text"
                type="text"
                className="w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
               
                className="w-full p-3 rounded dark:bg-gray-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-red-500 "
            >
              Send Message
            </button>
          </form>
        </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 place-items-center">
            {addressData.map((address) => (
              <div key={address.id} className="address">
                <Image src={address.img} alt="address" />
                <h3 className="text-3xl font-semibold">{address.name}</h3>
                <p>{address.title} </p>
                <p>{address.text}</p>
              </div>
            ))}
          </div>
        </Container>
      <div className="sectionMargin">
        <section className="flex flex-row items-center justify-center w-full mx-auto mb-32 md:my-24 md:mb-32">
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
