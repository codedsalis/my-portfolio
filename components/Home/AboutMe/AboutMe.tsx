import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    [
      "PHP",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "Dart",
      "MySQL",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Docker",
    ],
    [
      "Laravel",
      "FastAPI",
      "BootStrap",
      "Flutter",
      "Express JS",
      "Next JS",
      "Tailwind CSS",
      "AWS",
      "CI/CD",
      "HTML5",
      "CSS",
    ],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-blue"
              }
            />
            <span className="text-blue font-Header text-sm  sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col-reverse md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400  tracking-wide">
                Hello! My name is Kadiri Talitu and I enjoy solving problems
                with code. I love the idea of helping people bring their
                business ideas online and I've been doing just that for some
                years. My interest in programming started back in 2011 when I
                just learned how to browse the internet. I had stumbled upon an
                ad that says "Create your own website" and I instantly picked
                interest in the idea, wondering about all the possibilities. I
                learned a lot on my own, built some really exciting test
                projects and then went on to study Computer Science
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Fast-forward to today, I've had the privilege of working at
                <span className="text-blue"> a start-up</span> as both a{" "}
                <span className="text-blue">
                  Chief Technology Officer and a Co-founder
                </span>
                , <span className="text-blue">an Ad network</span>, also
                <span className="text-blue"> freelancing</span> and recently as
                a <span className="text-blue">System Engineer</span> at
                <span className="text-blue"> a University</span>. <br />
                <br />I am mainly into Mobile & Web Development, lately with
                Desktop Development. My main focus these days is improving the
                quality of my works.
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400 text-lg">
                Here are a few technologies I've been working with
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-blue"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-blue"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-blue translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-blue opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/Portfolio-portrait-3.png"}
                className={"object-contain rounded-lg"}
                alt="My Portrait"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className="relative w-full h-48 md:hidden mb-16 flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 mb-16 translate-y-5 border-2 border-blue"></div>
            <div className="absolute w-48 h-full rounded mb-16 overflow-hidden">
              <Img
                src={"/img/Portfolio-portrait-2.png"}
                className="object-contain mb-8 rounded-lg"
                alt="My portrait"
              />
            </div>
            <div className="absolute w-48 h-full  bg-blue opacity-20 mb-16 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
