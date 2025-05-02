import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { RiJavascriptFill, RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full max-w-5xl mx-auto bg-primary-100/5 flex flex-col md:flex-row gap-20 md:gap-0 p-20 sm:px-44 sm:py-30 md:px-30 border border-primary-300/10 rounded-lg mb-24"
    >
      <div className="order-2 md:order-1 w-full md:w-[34%] flex flex-col gap-20">
        <div className="grow flex items-center gap-10">
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"
            target="_blank"
            className="hover:text-primary-400 active:text-primary-500"
          >
            <IoLogoHtml5 className="size-22" />
          </a>
          <div className="grow h-18 flex items-center bg-primary-100/10 pl-6 relative">
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"
              target="_blank"
              className="text-sm font-semibold tracking-wide text-primary-950 hover:text-primary-900 active:text-primary-800"
            >
              HTML
            </a>
            <span className="bg-primary-300 absolute top-0 left-0 h-full w-[85%] -z-10" />
          </div>
          <h5 className="tracking-wide">Expert</h5>
        </div>

        <div className="grow flex items-center gap-10">
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"
            target="_blank"
            className="hover:text-primary-400 active:text-primary-500"
          >
            <IoLogoCss3 className="size-22" />
          </a>
          <div className="grow h-18 flex items-center bg-primary-100/10 pl-6 relative">
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"
              target="_blank"
              className="text-sm font-semibold tracking-wide text-primary-950 hover:text-primary-900 active:text-primary-800"
            >
              CSS
            </a>
            <span className="bg-primary-300 absolute top-0 left-0 h-full w-[93%] -z-10" />
          </div>
          <h5 className="tracking-wide">Expert</h5>
        </div>

        <div className="grow flex items-center gap-10">
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting"
            target="_blank"
            className="hover:text-primary-400 active:text-primary-500"
          >
            <RiJavascriptFill className="size-22" />
          </a>
          <div className="grow h-18 flex items-center bg-primary-100/10 pl-6 relative">
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting"
              target="_blank"
              className="text-sm font-semibold tracking-wide text-primary-950 hover:text-primary-900 active:text-primary-800"
            >
              Javascript
            </a>
            <span className="bg-primary-300 absolute top-0 left-0 h-full w-[92%] -z-10" />
          </div>
          <h5 className="tracking-wide">Expert</h5>
        </div>

        <div className="grow flex items-center gap-10">
          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            className="hover:text-primary-400 active:text-primary-500"
          >
            <BiLogoTypescript className="size-22" />
          </a>
          <div className="grow h-18 flex items-center bg-primary-100/10 pl-6 relative">
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              className="text-sm font-semibold tracking-wide text-primary-950 hover:text-primary-900 active:text-primary-800"
            >
              Typescript
            </a>
            <span className="bg-primary-300 absolute top-0 left-0 h-full w-[64%] -z-10" />
          </div>
          <h5>Intermediate</h5>
        </div>
      </div>

      <div className="order-1 md:order-2 w-full md:w-[32%] flex flex-col justify-center items-center gap-20 mb-12 md:mb-0">
        <h4 className="font-bold tracking-widest text-xl md:text-lg mb-12 md:mb-0">
          TECH STACK
        </h4>
        <img
          src="/images/tech-stack-graphic.webp"
          alt="tech stack graphic"
          className="max-w-220 md:max-w-180"
        />
      </div>

      <div className="order-3 w-full md:w-[34%] flex flex-col gap-20">
        <div className="grow flex items-center gap-10">
          <a
            href="https://react.dev"
            target="_blank"
            className="hover:text-primary-400 active:text-primary-500"
          >
            <RiReactjsLine className="size-22" />
          </a>
          <div className="grow h-18 flex items-center bg-primary-100/10 pl-6 relative">
            <a
              href="https://react.dev"
              target="_blank"
              className="text-sm font-semibold tracking-wide text-primary-950 hover:text-primary-900 active:text-primary-800"
            >
              React
            </a>
            <span className="bg-primary-300 absolute top-0 left-0 h-full w-[92%] -z-10" />
          </div>
          <h5 className="tracking-wide">Expert</h5>
        </div>

        <div className="grow flex items-center gap-10">
          <a
            href="https://nextjs.org"
            target="_blank"
            className="hover:text-primary-400 active:text-primary-500"
          >
            <SiNextdotjs className="size-22 p-2" />
          </a>
          <div className="grow h-18 flex items-center bg-primary-100/10 pl-6 relative">
            <a
              href="https://nextjs.org"
              target="_blank"
              className="text-sm font-semibold tracking-wide text-primary-950 hover:text-primary-900 active:text-primary-800"
            >
              Next.js
            </a>
            <span className="bg-primary-300 absolute top-0 left-0 h-full w-[93%] -z-10" />
          </div>
          <h5 className="tracking-wide">Expert</h5>
        </div>

        <div className="grow flex items-center gap-10">
          <a
            href="https://nodejs.org"
            target="_blank"
            className="hover:text-primary-400 active:text-primary-500"
          >
            <RiNodejsLine className="size-22 p-1" />
          </a>
          <div className="grow h-18 flex items-center bg-primary-100/10 pl-6 relative">
            <a
              href="https://nodejs.org"
              target="_blank"
              className="text-sm font-semibold tracking-wide text-primary-950 hover:text-primary-900 active:text-primary-800"
            >
              Node.js
            </a>
            <span className="bg-primary-300 absolute top-0 left-0 h-full w-[29%] -z-10" />
          </div>
          <h5>Beginner</h5>
        </div>

        <div className="grow flex items-center gap-10">
          <a
            href="https://www.mongodb.com"
            target="_blank"
            className="hover:text-primary-400 active:text-primary-500"
          >
            <SiMongodb className="size-22" />
          </a>
          <div className="grow h-18 flex items-center bg-primary-100/10 pl-6 relative">
            <h6 className="text-sm text-nowrap font-semibold md:tracking-[-1px] lg:tracking-normal">
              <a
                href="https://mongoosejs.com"
                target="_blank"
                className="text-primary-950 hover:text-primary-900 active:text-primary-800"
              >
                Mongoose
              </a>{" "}
              <a
                href="https://www.mongodb.com"
                target="_blank"
                className="text-primary-950 hover:text-primary-900 active:text-primary-800"
              >
                (MongoDB)
              </a>
            </h6>
            <span className="bg-primary-300 absolute top-0 left-0 h-full w-[38%] -z-10" />
          </div>
          <h5>Beginner</h5>
        </div>
      </div>
    </section>
  );
};

export default Skills;
