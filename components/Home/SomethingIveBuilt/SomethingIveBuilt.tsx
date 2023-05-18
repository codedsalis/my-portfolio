import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-blue"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-blue font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some of My Works for Clients
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28">
        {/* // ?  Project 1 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://wassapviews.com"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/img/wv.png"}
                alt="Wassapviews"
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-blue opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/wv_mobile.png"}
                  alt="Wassapviews"
                  className={`w-full rounded h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <a
                  href="https://wassapviews.com"
                  target="_blank"
                  className=" md:text-gray-200 text-blue font-bold text-xl hover:cursor-pointer"
                >
                  WassapViews
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  Wassapviews is a platform to connect WhatsApp users who want
                  to increase their status views. The idea around the project is
                  to allow users submit their names and WhatsApp numbers each
                  day, only to return after 9PM to download the contact list
                  that has been compiled for that day. These downloads are
                  password protected, which means that the users will be asked
                  to input their password at the point of download. When they
                  eventually download the compiled contacts (in VCF format), the
                  VCF file automatically extracts the compiled contacts and
                  saves them to their phone book which makes it possible for the
                  people in the compiled list to view each others' WhatsApp
                  statuses
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full
               text-sm font-Text2 md:justify-start text-blue"
              >
                <span className="pr-4 z-10">WhatsApp</span>
                <span className="pr-4 z-10">Status Views</span>
                <span className="pr-4 z-10">VCF files</span>
                <span className="pr-4 z-10">Multi Currency</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://wassapviews.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url="" router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  2*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://www.selstack.com" target="_blank">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-blue 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/img/selstack.png"}
                alt="Selstack"
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-blue opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src="/img/selstack_mobile.png"
                  alt="Selstack"
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <a href="https://www.selstack.com" target="_blank">
                  <span className=" md:text-gray-200 text-blue font-bold text-xl hover:cursor-pointer">
                    Selstack
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Selstack is a SaaS platform that aims to unify customer
                  management and sales of products and services. It does this by
                  incorporating features such as Leads management and tracking,
                  email marketing, team mates permissions and control, business
                  pages/stores, products and services, support for different
                  payment gateways, among many others
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-blue
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Customer Relations Management</span>
                <span className="pr-4 z-10">E-commerce</span>
                <span className="pr-4 z-10">Email marketing</span>
                <span className="pr-4 z-10">Products and Services</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://www.selstack.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url="" router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 3 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={"/userdatapuller"}>
                <div
                  className="absolute w-full h-full rounded bg-blue 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>
              <Img
                src={"/img/datapuller.png"}
                alt={"Bonus project"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-blue opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/img/datapuller_mobile.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-blue text-base">Bonus Project</span>
                <Link href={"/userdatapuller"}>
                  <span className=" md:text-gray-200 text-blue font-bold text-xl hover:cursor-pointer">
                    User Data puller
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  This project allows you to understand how easy it is to
                  identify and track your browser based on how it appears to
                  websites. Such as your
                  <span className="text-blue"> location</span>,{" "}
                  <span className="text-blue">IP Address</span>,{" "}
                  <span className="text-blue">{","} software, Hardware</span>{" "}
                  and some additional information with the help of cookies.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-blue
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Cookies</span>
                <span className="pr-4 z-10">Google APi</span>
                <span className="pr-4 z-10">Data collecting</span>
                <span className="pr-4 z-10">IP Address</span>
                <span className="pr-4 z-10">Location</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <ExternalLink url={"/userdatapuller"} router={router} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
