import Link from "next/link";
import { CSSProperties } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

const Header = () => {
  return (
    <header className="bg-primary-100/10 h-36">
      <div className="h-full flex justify-between items-center px-8 max-w-[1014px] mx-auto">
        <Link
          href="/"
          className="hidden sm:flex items-center px-16 py-2 text-nowrap rounded-xl hover:bg-primary-100/10 active:text-primary-500"
        >
          Sakib Hossain
        </Link>
        <div className="grow sm:grow-0 flex overflow-hidden">
          <nav className="grow h-full flex items-center overflow-auto scrollbar-hidden mr-4">
            <Link
              href="#about"
              className="flex items-center px-8 sm:px-16 py-4 text-sm tracking-tighter sm:tracking-normal rounded-xl hover:bg-primary-100/10 active:text-primary-500"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="flex items-center px-8 sm:px-16 py-4 text-sm tracking-tighter sm:tracking-normal rounded-xl hover:bg-primary-100/10 active:text-primary-500"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="flex items-center px-8 sm:px-16 py-4 text-sm tracking-tighter sm:tracking-normal rounded-xl hover:bg-primary-100/10 active:text-primary-500"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="flex items-center px-8 sm:px-16 py-4 text-sm tracking-tighter sm:tracking-normal rounded-xl hover:bg-primary-100/10 active:text-primary-500"
            >
              Projects
            </Link>
          </nav>

          <>
            <dialog
              popover="auto"
              id="say-hello-choose-account-popover"
              className="bg-primary-gradient rounded-2xl mt-2 has-[#linkedIn:checked]:[&+div>.linkedIn,&+div>button>.linkedIn]:block has-[#whatsApp:checked]:[&+div>.whatsApp,&+div>button>.whatsApp]:block has-[#email:checked]:[&+div>.email,&+div>button>.email]:block open:[&+div>button]:bg-primary-100/20"
              style={
                {
                  positionAnchor: "--say-hello-choose-account-popover-anchor",
                  positionArea: "bottom",
                } as CSSProperties
              }
            >
              <button
                popoverTarget="say-hello-choose-account-popover"
                popoverTargetAction="hide"
                className="flex gap-2 px-8 py-4 rounded-2xl"
              >
                <label htmlFor="linkedIn">
                  <input
                    type="radio"
                    id="linkedIn"
                    name="say-hello-choose-account"
                    value="linkedIn"
                    defaultChecked
                    className="hidden checked:[&+*]:bg-primary-100/20"
                  />
                  <FaLinkedin
                    className="size-28 p-6 hover:bg-primary-100/10 rounded-xl cursor-pointer"
                    role="button"
                  />
                </label>
                <label htmlFor="whatsApp">
                  <input
                    type="radio"
                    id="whatsApp"
                    name="say-hello-choose-account"
                    value="whatsApp"
                    className="hidden checked:[&+*]:bg-primary-100/20"
                  />
                  <FaWhatsapp
                    className="size-28 p-5 hover:bg-primary-100/10 rounded-xl cursor-pointer"
                    role="button"
                  />
                </label>
                <label htmlFor="email">
                  <input
                    type="radio"
                    id="email"
                    name="say-hello-choose-account"
                    value="email"
                    className="hidden checked:[&+*]:bg-primary-100/20"
                  />
                  <MdOutlineEmail
                    className="size-28 p-5 hover:bg-primary-100/10 rounded-xl cursor-pointer"
                    role="button"
                  />
                </label>
              </button>
            </dialog>
            <div className="flex items-stretch text-sm rounded-full bg-primary-100/10 hover:bg-primary-100/20 has-[button:hover]:bg-transparent">
              <button
                popoverTarget="say-hello-choose-account-popover"
                className="flex items-center gap-2 bg-black/10 pl-8 pr-4 rounded-full hover:bg-primary-100/20 active:text-primary-500"
                style={
                  {
                    anchorName: "--say-hello-choose-account-popover-anchor",
                  } as CSSProperties
                }
              >
                <FaLinkedin className="hidden size-16 linkedIn" />
                <FaWhatsapp className="hidden size-16 whatsApp" />
                <MdOutlineEmail className="hidden size-16 email" />
                <TiArrowSortedDown className="size-10" />
              </button>
              <a
                href="https://www.linkedin.com/in/ssakibhossain10"
                target="_blank"
                className="hidden pl-8 pr-12 py-4 active:text-primary-500 text-nowrap linkedIn"
              >
                Say Hello
              </a>
              <a
                href="https://wa.me/+8801765626690"
                target="_blank"
                className="hidden pl-8 pr-12 py-4 active:text-primary-500 text-nowrap whatsApp"
              >
                Say Hello
              </a>
              <a
                href="mailto:sakibhossain10@gmail.com"
                className="hidden pl-8 pr-12 py-4 active:text-primary-500 text-nowrap email"
              >
                Say Hello
              </a>
            </div>
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
