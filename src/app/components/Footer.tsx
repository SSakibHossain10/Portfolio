import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="shrink-0 bg-primary-100/5 h-40 border-t border-primary-300/10">
      <div className="h-full flex justify-between items-center px-8 max-w-[1052px] mx-auto overflow-x-auto scrollbar-hidden">
        <div className="grow max-w-[230px] flex justify-between">
          <a
            href="https://github.com/SSakibHossain10"
            target="_blank"
            className="p-6 sm:p-8 rounded-full hover:bg-primary-200/10 active:text-primary-500"
          >
            <FaGithub className="size-18" />
          </a>
          <a
            href="https://www.linkedin.com/in/ssakibhossain10"
            target="_blank"
            className="p-6 sm:p-8 rounded-full hover:bg-primary-200/10 active:text-primary-500"
          >
            <FaLinkedin className="size-18" />
          </a>
          <a
            href="https://x.com/SSakibHossain10"
            target="_blank"
            className="p-6 sm:p-8 rounded-full hover:bg-primary-200/10 active:text-primary-500"
          >
            <FaTwitter className="size-18" />
          </a>
          <a
            href="https://www.facebook.com/SSakibHossain10"
            target="_blank"
            className="p-6 sm:p-8 rounded-full hover:bg-primary-200/10 active:text-primary-500"
          >
            <FaFacebook className="size-18" />
          </a>
          <a
            href="https://wa.me/+8801765626690"
            target="_blank"
            className="p-4 sm:p-6 rounded-full hover:bg-primary-200/10 active:text-primary-500"
          >
            <FaWhatsapp className="size-20" />
          </a>
          <a
            href="mailto:sakibhossain10@gmail.com"
            className="p-4 sm:p-6 rounded-full hover:bg-primary-200/10 active:text-primary-500"
          >
            <MdOutlineEmail className="size-20 sm:mt-1" />
          </a>
        </div>

        <h6 className="shrink-0 text-2xs sm:text-xs tracking-tighter sm:tracking-normal px-8">
          Copyright © 2025 - All rights reserved
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
