import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Zojatech() {
  const tasks = [
    {
      text: "Led the development and release of the MVPs of two products (Fintech & Business Performance)",
      keywords: ["Efficiency"],
    },
    {
      text: "Developed an in-house API documentation solution for the company, saving them ~$6,000/per year",
      keywords: ["result", "initiative"],
    },
    {
      text: "Scaled our fintech product to be able to handle ~2,000 concurrent requests per second",
      keywords: ["Optimization", "Scalability"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Software Engineer (Team Lead)
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            August 2023 - Present
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-blue flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords,
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
