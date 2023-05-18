import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AfriAdverts() {
  const tasks = [
    {
      text: "Designed and built an Ad network for AfriAdverts Limited that handles both the advertisers and publishers platforms",
      keywords: ["Ad network"],
    },
    {
      text: "Optimized the application to help curb fake clicks and fraud activities in the system",
      keywords: ["fraud activities"],
    },
    {
      text: "Built an in-house link shortener sevice for the ad network company",
      keywords: ["link shortener"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            August 2017 - October 2020
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-blue flex-none"} />
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
