import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Selstack() {
  const tasks = [
    {
      text: "Spearheaded, designed and developed the system architecture of the back-end and front-end platforms to facilitate a seamless user experience and user satisfaction",
      keywords: ["system architecture", "back-end", "front-end"],
    },
    {
      text: "In charge of the technologies used across the whole platform while also being a co-founder",
      keywords: ["technologies", "platform"],
    },
    {
      text: "Interacted with the users to find out how we could improve the platform",
      keywords: [""],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Lead Software Engineer & Co-Founder
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            March 2021 - February 2023
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-blue flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
