import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-blue" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-blue font-sans text-sm  sm:text-base">
            {" "}
            04.
          </span>
          <span className=" font-sans text-blue text-base">
            What&apos;s Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Do you have any job or gig for me, you think we could work together?
        Kindly shoot me a message and I&apos;ll get back to you as soon as
        possible
      </p>
      <div className="pt-4">
        <a href="mailto:talitu6@gmail.com" target={"_blank"} rel="noreferrer">
          <button
            className="font-mono text-sm text-blue border-blue 
                            px-8 py-4 border-[1.5px] rounded "
          >
            Hire Me
          </button>
        </a>
      </div>
    </div>
  );
}
