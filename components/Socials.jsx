import {
  Github,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const socials = [
  { icon: <GithubIcon />, path: "" },
  { icon: <LinkedinIcon />, path: "" },
  { icon: <YoutubeIcon />, path: "" },
  { icon: <TwitterIcon />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
