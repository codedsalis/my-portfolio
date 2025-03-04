import React from "react";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
type Props = { href: string; Icon: React.FC<{ className: string }> };
const ClickableIcon = (props: Props) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-blue transition duration-800 fill-current hover:cursor-pointer "
        }
      />
    </a>
  );
};

export default function Fotter(props: { className: string }) {
  return (
    <div
      className={` ${props.className} bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4 `}
    >
      {/* // ? Reach me at */}
      <div className="flex flex-row space-x-8">
        <ClickableIcon
          href={"https://github.com/codedsalis"}
          Icon={GithubIcon}
        />
        <ClickableIcon
          href={"https://www.linkedin.com/in/kadiri-talitu"}
          Icon={LinkedinIcon}
        />
        <ClickableIcon
          href={"https://www.instagram.com/codedsalis"}
          Icon={InstagramIcon}
        />
      </div>
    </div>
  );
}
