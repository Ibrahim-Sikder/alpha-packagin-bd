import "./Footer.css";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-[#ECECEC] sectionMargin ">
      <Container className="">
        <div className="footer w-full ">
          <div>
            <Link href="/products">
              <h3 className="text-xl font-bold mb-3"> Trending Products</h3>
            </Link>

            <ul>
              <li>Brown Packaging Tapes of 2024</li>
              <li>Best Scotch Packaging Tape</li>
              <li>Gum Tapes Jumbo Roll</li>
              <li>Best Stationery Tapes</li>
              <li>Rexine Tape of 2024</li>
              <li>Gum Tape of 2024</li>
            </ul>
          </div>
          <div className=" w-auto md:w-[400px]">
            <Link href="/about-us">
              <h3 className="text-xl font-bold mb-3">About Us</h3>
            </Link>
            <p>
              Akota Traders. Manufacturer We also sell our gum tape, printed gum
              tape, double-sided tape, masking tape, colour gum tape, Kraft
              paper tape, PP belts, Poly bag, BOPP jumbo rolls and Rexine Tape
              etc.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Brands</h3>
            <ul>
              <li>Hunter </li>
              <li>Scotia Tapes</li>
              <li> Nikto/ Hunter</li>
              <li>Hunter Rexine Tape</li>
              <li>Scotia </li>
            </ul>
          </div>

          <div>
            <Link href="/contact-us">
              <h3 className="text-xl font-bold mb-3">Contact Us </h3>
            </Link>

            <ul>
              <li>
                <div className="flex items-center">
                  <HiOutlinePhone className="mr-2" />
                  <span>01316 448992</span>
                </div>
              </li>
              <li>
                {" "}
                <div className="flex items-center">
                  <HiOutlinePhone className="mr-2" />
                  <span>01621 150412</span>
                </div>{" "}
              </li>
              <li>
              <div className="flex items-center">
                  <HiOutlineMail className="mr-2" />
                  <span> info@gumtapebd.com</span>
                </div>
                
               </li>
              
              <li>Kamrangirchar, Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
