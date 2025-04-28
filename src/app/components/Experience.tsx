import { CSSProperties } from "react";
import { FaUserTag } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineDiamond } from "react-icons/md";

const Experiences = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-5xl mx-auto bg-primary-100/10 flex flex-col md:flex-row gap-32 md:gap-0 p-20 sm:px-44 sm:py-30 md:px-30 border border-primary-300/10 rounded-lg mb-26"
    >
      <div className="order-3 md:order-1 w-full md:w-[36%] flex flex-col gap-12">
        <div className="flex items-center gap-12">
          <img
            src="/images/bluebay_it_limited_logo.webp"
            alt="Bluebay IT Limited - Built with React and Next.js"
            className="size-20"
          />
          <a
            href="https://www.linkedin.com/company/bluebay-it-limited"
            target="_blank"
            className="text-md font-semibold underline hover:text-primary-400 active:text-primary-500"
          >
            Bluebay IT Limited
          </a>
        </div>

        <div className="flex items-center gap-12">
          <FaUserTag className="size-18" />
          <h6 className="tracking-tight">
            Junior <b className="text-size-inherit font-semibold">Frontend</b>{" "}
            Developer
          </h6>
        </div>

        <div className="flex items-center gap-12">
          <IoTimeOutline className="size-18" />
          <p>
            <b className="text-size-inherit font-semibold">Jun</b> 2021 -
            <b className="text-size-inherit font-semibold"> Feb </b>2022 ·
            <b className="text-size-inherit font-semibold"> 9 mos</b>
          </p>
        </div>

        <div className="flex gap-8 my-4">
          <span className="px-16 pt-4 pb-6 bg-primary-200/15 text-[12px] text-nowrap rounded-full">
            On-site
          </span>
          <span className="px-16 pt-4 pb-6 bg-primary-200/15 text-[12px] text-nowrap rounded-full">
            Full-time (Internship 1st 4mos)
          </span>
        </div>

        <div className="flex items-center gap-6">
          <MdOutlineDiamond className="size-14 shrink-0" />

          <dialog
            popover="auto"
            id="bluebay-it-limeted-skills-popover"
            className="bg-primary-gradient open:flex flex-col gap-6 px-16 py-12 mx-5 my-2 rounded-lg popover-scale-animation open:[&+*]:underline"
            style={
              {
                positionAnchor:
                  "--bluebay-it-limeted-skills-popover-btn-anchor",
                positionArea: "right",
                positionTryFallbacks: "right, top, bottom, left",
              } as CSSProperties
            }
          >
            <a
              href="https://react.dev"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React
            </a>
            <a
              href="https://mui.com/material-ui"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Material UI
            </a>
            <a
              href="https://getbootstrap.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Bootstrap
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Tailwind CSS
            </a>
            <a
              href="https://styled-components.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Styled Components
            </a>
            <a
              href="https://reactrouter.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React Router
            </a>
            <a
              href="https://react-redux.js.org"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React Redux
            </a>
            <a
              href="https://redux-toolkit.js.org"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Redux Toolkit
            </a>
            <a
              href="https://react-select.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React Select
            </a>
            <a
              href="https://react-hook-form.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React Hook Form
            </a>
            <a
              href="https://momentjs.com/"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Moment
            </a>
            <a
              href="https://date-fns.org/"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Date-fns
            </a>
            <a
              href="https://www.npmjs.com/package/framer-motion"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Framer Motion
            </a>
            <a
              href="https://apexcharts.com/docs/react-charts"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React-ApexChart
            </a>
            <a
              href="https://www.npmjs.com/package/axios"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Axios
            </a>
            <a
              href="https://lodash.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Lodash
            </a>
            <a
              href="https://www.npmjs.com/package/clsx"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Clsx
            </a>
            <a
              href="https://nextjs.org"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Next.js
            </a>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              TypeScript
            </a>
          </dialog>

          <button
            className="text-[11px] font-semibold text-nowrap hover:underline active:text-primary-400"
            popoverTarget="bluebay-it-limeted-skills-popover"
            style={
              {
                anchorName: "--bluebay-it-limeted-skills-popover-btn-anchor",
              } as CSSProperties
            }
          >
            React, Next.js, Redux, Material-UI, TailwindCSS and +15 skills
          </button>
        </div>

        <p className="text-[13px] tracking-wider leading-20 last-align-end">
          I started my first role at this company as a Junior Frontend
          Developer, where I contributed to two major projects—an admin panel
          built with React and an e-commerce website developed using Next.js.
          During this time, I gained valuable hands-on experience and built a
          strong foundation in modern Frontend development.
        </p>
      </div>

      <div className="order-1 md:order-2 w-full md:w-[28%] flex flex-col justify-center items-center gap-20 mb-12 md:mb-0">
        <h4 className="font-bold tracking-widest text-xl md:text-lg mb-12 md:mb-0">
          JOB EXPERIENCE
        </h4>
        <img
          src="/images/job-experience-graphic.webp"
          alt="tech stack graphic"
          className="max-w-180 md:max-w-160"
        />
      </div>

      <div className="order-2 w-full md:w-[36%] flex flex-col gap-12">
        <div className="flex items-center gap-12">
          <img
            src="/images/hubbers_logo.webp"
            alt="Hubbers Built - with React and Next.js"
            className="size-20"
          />
          <a
            href="https://www.linkedin.com/company/hubbers"
            target="_blank"
            className="text-md font-semibold underline hover:text-primary-400 active:text-primary-500"
          >
            Hubbers
          </a>
        </div>

        <div className="flex items-center gap-12">
          <FaUserTag className="size-18" />
          <h6 className="tracking-tight">
            <b className="text-size-inherit font-semibold">Frontend </b>
            Developer
          </h6>
        </div>

        <div className="flex items-center gap-12">
          <IoTimeOutline className="size-18" />
          <p className="tracking-tight">
            <b className="text-size-inherit font-semibold">Oct</b> 2022 -
            <b className="text-size-inherit font-semibold"> Nov</b> 2023 ·
            <b className="text-size-inherit font-semibold"> 1 yr 2 mos</b>
          </p>
        </div>

        <div className="flex gap-8 my-4">
          <span className="px-16 pt-4 pb-6 bg-primary-200/15 text-[12px] text-nowrap rounded-full">
            Remote
          </span>
          <span className="px-16 pt-4 pb-6 bg-primary-200/15 text-[12px] text-nowrap rounded-full">
            Full-time
          </span>
        </div>

        <div className="flex items-center gap-6">
          <MdOutlineDiamond className="size-14 shrink-0" />

          <dialog
            popover="auto"
            id="hubbers-skills-popover"
            className="bg-primary-gradient open:flex flex-col gap-6 px-16 py-12 mx-5 my-2 rounded-lg popover-scale-animation open:[&+*]:underline"
            style={
              {
                positionAnchor: "--hubbers-skills-popover-btn-anchor",
                positionArea: "right",
                positionTryFallbacks: "right, top, bottom, left",
              } as CSSProperties
            }
          >
            <a
              href="https://react.dev"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React
            </a>
            <a
              href="https://nextjs.org"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Next.js
            </a>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              TypeScript
            </a>
            <a
              href="https://sass-lang.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Sass
            </a>
            <a
              href="https://getbootstrap.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Bootstrap
            </a>
            <a
              href="https://reactstrap.github.io"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Reactstrap
            </a>
            <a
              href="https://ant.design"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Ant Design
            </a>
            <a
              href="https://reactrouter.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React Router
            </a>
            <a
              href="https://react-redux.js.org"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React Redux
            </a>
            <a
              href="https://redux-saga.js.org"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Redux-Saga
            </a>
            <a
              href="https://www.npmjs.com/package/aws-sdk"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Amazon S3
            </a>
            <a
              href="https://www.npmjs.com/package/firebase"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Firebase
            </a>
            <a
              href="https://www.npmjs.com/package/socket.io-client"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Socket.io Client
            </a>
            <a
              href="https://www.npmjs.com/package/@stripe/react-stripe-js"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React Stripe
            </a>
            <a
              href="https://ckeditor.com/ckeditor-5/react"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Ckeditor5 React
            </a>
            <a
              href="https://www.npmjs.com/package/google-maps-react"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Google Maps React
            </a>
            <a
              href="https://apexcharts.com/docs/react-charts"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              React-ApexChart
            </a>
            <a
              href="https://www.npmjs.com/package/feather-icons-react"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Feather Icons
            </a>
            <a
              href="https://www.npmjs.com/package/axios"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Axios
            </a>
            <a
              href="https://lodash.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Lodash
            </a>
            <a
              href="https://date-fns.org/"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Date-fns
            </a>
            <a
              href="https://www.i18next.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              I18next
            </a>
            <a
              href="https://www.npmjs.com/package/js-cookie"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Js-cookie
            </a>
            <a
              href="https://www.npmjs.com/package/react-to-print"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              ReactToPrint
            </a>
            <a
              href="https://www.npmjs.com/package/simplebar-react"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Simplebar react
            </a>
            <a
              href="https://swiperjs.com"
              target="_blank"
              className="text-sm hover:text-primary-400 active:text-primary-500"
            >
              Swiper
            </a>
          </dialog>

          <button
            className="text-[11px] font-semibold text-nowrap hover:underline active:text-primary-400"
            popoverTarget="hubbers-skills-popover"
            style={
              {
                anchorName: "--hubbers-skills-popover-btn-anchor",
              } as CSSProperties
            }
          >
            React, Next.js, Redux, Sass, Ant Design and +21 skills
          </button>
        </div>

        <p className="text-[13px] tracking-wider leading-20 last-align-end">
          I began my first remote role at this company as a Frontend Developer,
          contributing to two projects—an admin panel built with React and the{" "}
          <a
            href="https://hubbers.io"
            target="_blank"
            className="hover:text-primary-400 active:text-primary-500"
          >
            Hubbers
          </a>{" "}
          website using React & later migrated to Next.js. Gained strong
          expertise in Frontend development, integrated OpenAI's GPT-4 API, &
          helped me grow in key areas such as team collaboration, communication
          & work management.
        </p>
      </div>
    </section>
  );
};

export default Experiences;
