"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import React from "react";

const Footers = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 text-2xl ">
          <div>
            <Footer.Brand
              href="#"
              src="/Logo.png"
              alt="CoreConnect Logo"
              name="CoreConnect"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-2 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Location" className="font-bold" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Noida</Footer.Link>
                <Footer.Link href="#">Ghaziabad</Footer.Link>
                <Footer.Link href="#">Delhi</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="font-bold" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/kahkasha17/">
                  Github
                </Footer.Link>
                <Footer.Link href=" https://www.instagram.com/codewithkahkasha1517/">
                  Instagram
                </Footer.Link>
                <Footer.Link href="https://x.com/khanza1517">
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="font-bold" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Galaxy™ All Rights Reserved."
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsTelegram}
              className="hover:text-gray-900 ms-5"
              onClick={() => window.open(" https://t.me/CodeWithKahkasha1517")}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="hover:text-gray-900 ms-5"
              onClick={() =>
                window.open(" https://www.instagram.com/codewithkahkasha1517/")
              }
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="hover:text-gray-900 ms-5"
              onClick={() => window.open(" https://x.com/khanza1517")}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              className="hover:text-gray-900 ms-5"
              onClick={() => window.open(" https://github.com/kahkasha17/")}
            />
            <Footer.Icon
              href="#"
              icon={BsLinkedin}
              className="hover:text-gray-900 ms-5"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kahkasha-rafat-fatima-8672a0231/"
                )
              }
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
