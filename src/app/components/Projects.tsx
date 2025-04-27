import { BiLogoPlayStore } from "react-icons/bi";
import { BsBrowserChrome } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProjectPactmateContributionsChart from "./ProjectPactmateContributionsChart";
import ProjectPDFyContributionsChart from "./ProjectPDFyContributionsChart";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-5xl mx-auto flex flex-col mb-24"
    >
      <h3 className="font-bold text-center tracking-widest mb-12 text-primary-300">
        PROJECTS
      </h3>

      <div className="w-full bg-primary-100/10 flex flex-col rounded-lg border border-primary-300/10 border-t-primary-300/50 overflow-hidden mb-24">
        <div className="w-full flex items-stretch">
          <img
            src="/images/pdfy-edit-page-tab-portrait-screenshot.webp"
            alt="PDFy Edit Page Tab Portrait Screenshot"
            className="grow w-1/3 sm:w-[13%] border-r"
          />
          <img
            src="/images/pdfy-edit-page-tab-landscape-screenshot.webp"
            alt="PDFy Edit Page Tab Landscape Screenshot"
            className="hidden sm:block grow w-1/3 sm:w-[37%] border-r"
          />
          <img
            src="/images/pdfy-edit-page-tool-landscape-screenshot.webp"
            alt="PDFy Edit Page Tool Landscape Screenshot"
            className="hidden sm:block grow w-1/3 sm:w-[37%] border-r"
          />
          <img
            src="/images/pdfy-edit-page-tool-portrait-screenshot.webp"
            alt="PDFy Edit Page Tool Portrait Screenshot"
            className="grow w-1/3 sm:w-[13%]"
          />
        </div>

        <div className="p-20">
          <div className="flex flex-col md:flex-row gap-20 lg:gap-35 mb-18">
            <div className="flex flex-col gap-16 sm:mt-8">
              <div className="flex items-center gap-8">
                <img
                  src="/images/pdfy-logo.webp"
                  alt="PDFy - Built with Next.js, MongoDB, PDF.js, Fabric.js, and PDFKit"
                  className="w-26"
                />

                <h5 className="grow font-bold tracking-widest">PDFy</h5>

                <a
                  href="https://play.google.com/store/apps/details?id=com.pdfy.app"
                  target="_blank"
                  className="text-sm font-semibold tracking-wider flex items-center gap-4 mr-4 hover:underline active:text-primary-400"
                >
                  <BiLogoPlayStore className="size-16" /> Android ↗
                </a>

                <a
                  href="https://pdfy-online.vercel.app"
                  target="_blank"
                  className="text-sm font-semibold tracking-wider flex items-center gap-6 hover:underline active:text-primary-400"
                >
                  <BsBrowserChrome className="size-12" /> Web ↗
                </a>
              </div>

              <p className="text-[13px] tracking-wider leading-20">
                <b className="font-semibold">PDFy</b> is a feature-rich PDF
                editor built with Next.js. It leverages Mozilla’s{" "}
                <a
                  href="https://mozilla.github.io/pdf.js"
                  target="_blank"
                  className="font-semibold hover:text-primary-400 active:text-primary-500"
                >
                  PDF.js
                </a>{" "}
                to parse PDF data,{" "}
                <a
                  href="https://fabricjs.com"
                  target="_blank"
                  className="font-semibold hover:text-primary-400 active:text-primary-500"
                >
                  Fabric.js
                </a>{" "}
                for canvas-based editing, and{" "}
                <a
                  href="https://pdfkit.org"
                  target="_blank"
                  className="font-semibold hover:text-primary-400 active:text-primary-500"
                >
                  PDFKit
                </a>{" "}
                to generate the final PDF. This is a personal project and is
                currently in development.
              </p>
            </div>
            <ProjectPDFyContributionsChart />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 md:gap-y-0 gap-x-8">
            <div className="flex flex-col gap-8">
              <h6 className="font-semibold">👨‍💻 My Role</h6>
              <p className="italic leading-18">
                As the sole developer, I handled the entire lifecycle—from
                ideation to production.
              </p>
              <ul className="text-xs leading-22 list-disc pl-16">
                <li>
                  <b className="font-semibold">Architecture</b> design
                </li>
                <li>
                  <b className="font-semibold">UI/UX</b> design
                </li>
                <li>
                  <b className="font-semibold">Frontend</b> development
                </li>
                <li>
                  <b className="font-semibold">Backend</b> development
                </li>
                <li>
                  Built Android <b className="font-semibold">TWA</b>
                </li>
                <li>
                  <b className="font-semibold">Performance</b> optimization
                </li>
                <li>
                  <b className="font-semibold">Testing</b> &{" "}
                  <b className="font-semibold">Deployment</b>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h6 className="font-semibold">🌟 Key Features</h6>
              <p className="italic">
                PDFy supports advanced editing capabilities—text, image, vector,
                form, drawing, and more.
              </p>
              <ul className="text-xs leading-21 list-disc pl-16">
                <li>
                  <b className="font-semibold">Create PDFs</b> from templates or
                  from scratch
                </li>
                <li>
                  <b className="font-semibold">Page editing</b>: background
                  color, transparency
                </li>
                <li>
                  <b className="font-semibold">Add/Edit</b>: Text, Image, Video,
                  Audio, Vector, Forms, Drawings, Signature
                </li>
                <li>
                  <b className="font-semibold">Organize pages</b>: Add,
                  Duplicate, Delete, Reorder
                </li>
                <li>
                  <b className="font-semibold">Undo/Redo</b> support
                </li>
                <li>
                  <b className="font-semibold">Real-time sync</b>
                </li>
                <li>
                  <b className="font-semibold">Export</b> as PDF
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h6 className="font-semibold">🛠️ Tech Stack</h6>
              <p className="italic">
                I prioritized native web technologies, adopting modern libraries
                only where necessary to maintain performance, accessibility, and
                scalability.
              </p>

              <ul className="text-xs leading-20 list-disc pl-16">
                <li>
                  <b className="font-semibold">Next.js</b> (App Router) as
                  full-stack
                </li>
                <li>
                  <b className="font-semibold">Mongoose</b> (MongoDB) for
                  database
                </li>
                <li>
                  <b className="font-semibold">Tailwind CSS</b> for styling
                </li>
                <li>
                  <b className="font-semibold">PDF.js</b> for extracting PDF
                  data
                </li>
                <li>
                  <b className="font-semibold">Fabric.js</b> for editing PDF
                </li>
                <li>
                  <b className="font-semibold">PDFKit</b> for exporting PDF
                </li>
                <li>
                  <b className="font-semibold">AWS S3 bucket</b> for media
                  uploads
                </li>
                <li>
                  <b className="font-semibold">NextAuth.js</b> for user sign-in
                </li>
                <li>
                  <b className="font-semibold">Vercel</b> for deployment
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h6 className="font-semibold">🎓 What I Learned</h6>
              <p className="italic">
                This project taught me a lot—especially good understanding of
                PDF specification, canvas rendering, and modern web
                capabilities.
              </p>
              <ul className="text-xs leading-21 list-disc pl-16">
                <li>In-depth understanding of the PDF spec</li>
                <li>Advanced customization with PDF.js & Fabric.js</li>
                <li>
                  Advanced HTML <b className="font-semibold">Canvas</b>{" "}
                  manipulation
                </li>
                <li>
                  Used native web features like{" "}
                  <b className="font-semibold">Popover</b>, CSS{" "}
                  <b className="font-semibold">Anchor Positioning</b>, etc.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h6 className="font-semibold">🧠 Challenges & Solutions</h6>
              <p className="italic">
                I tackled major technical challenges in PDF parsing, canvas
                integration, and PDF export.
              </p>
              <ul className="text-xs leading-24 list-disc pl-16">
                <li>
                  <details className="open:*:first:*:[svg]:-rotate-180">
                    <summary className="flex items-center gap-6 cursor-pointer">
                      <b className="font-semibold">Parsing PDF</b>
                      <MdKeyboardArrowDown className="ml-auto size-16 transition-transform duration-300 ease-out" />
                    </summary>
                    <div className="flex gap-8 mb-6">
                      <div className="shrink-0 w-2 my-5 bg-primary-600" />
                      <p className="leading-20">
                        PDFs don’t provide structured data directly. I explored
                        PDF.js deeply, customized it to extract structured data
                        aligned with Fabric.js rendering.
                      </p>
                    </div>
                  </details>
                </li>

                <li>
                  <details className="open:*:first:*:[svg]:-rotate-180">
                    <summary className="flex items-center gap-6 cursor-pointer">
                      Mapping <b className="font-semibold">PDF objects</b> to
                      Fabric.js canvas
                      <MdKeyboardArrowDown className="ml-auto size-16 transition-transform duration-300 ease-out" />
                    </summary>
                    <div className="flex gap-8 mb-6">
                      <div className="shrink-0 w-2 my-5 bg-primary-600" />
                      <p className="leading-20">
                        I extended Fabric classes and built custom handlers to
                        make PDF objects align with Fabric.js ecosystem.
                      </p>
                    </div>
                  </details>
                </li>

                <li>
                  <details className="open:*:first:*:[svg]:-rotate-180">
                    <summary className="flex items-center gap-6 cursor-pointer">
                      <b className="font-semibold">Exporting</b> Fabric canvas
                      to PDF
                      <MdKeyboardArrowDown className="ml-auto size-16 transition-transform duration-300 ease-out" />
                    </summary>
                    <div className="flex gap-8 mb-6">
                      <div className="shrink-0 w-2 my-5 bg-primary-600" />
                      <p className="leading-20">
                        Converting canvas data to PDF required mapping
                        transformations, fonts, gradients, pattern, vector
                        styles, etc to match PDFKit’s rendering model.
                      </p>
                    </div>
                  </details>
                </li>
                <li>
                  <details className="open:*:first:*:[svg]:-rotate-180">
                    <summary className="flex items-center gap-6 cursor-pointer">
                      <b className="font-semibold">Dynamic UI</b> management
                      <MdKeyboardArrowDown className="ml-auto size-16 transition-transform duration-300 ease-out" />
                    </summary>
                    <div className="flex gap-8 mb-6">
                      <div className="shrink-0 w-2 my-5 bg-primary-600" />
                      <p className="leading-20">
                        The editor page requires a highly dynamic UI to support
                        numerous tools. Leveraging HTML popovers and CSS anchor
                        positioning enables smooth and efficient management of
                        these interactions.
                      </p>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary-100/10 flex flex-col rounded-lg border border-primary-300/10 border-t-primary-300/40 overflow-hidden">
        <div className="w-full flex items-stretch">
          <picture className="grow w-1/3 sm:w-[25%]">
            <source
              media="(max-width: 640px)"
              srcSet="/images/pactmate-profile-page-portrait-screenshot.webp"
            />
            <source
              media="(min-width: 641px)"
              srcSet="/images/pactmate-profile-page-landscape-screenshot.webp"
            />
            <img
              src="/images/pactmate-profile-page-landscape-screenshot.webp"
              alt="Pactmate Profile Page Screenshot"
              className="size-full object-fill"
            />
          </picture>

          <picture className="grow w-1/3 sm:w-[48%] border-x border-primary-600">
            <source
              media="(max-width: 640px)"
              srcSet="/images/pactmate-home-page-portrait-screenshot.webp"
            />
            <source
              media="(min-width: 641px)"
              srcSet="/images/pactmate-home-page-landscape-screenshot.webp"
            />
            <img
              src="/images/pactmate-home-page-landscape-screenshot.webp"
              alt="Pactmate Home Page Screenshot"
              className="size-full object-fill"
            />
          </picture>

          <picture className="grow w-1/3 sm:w-[27%]">
            <source
              media="(max-width: 640px)"
              srcSet="/images/pactmate-messaging-page-portrait-screenshot.webp"
            />
            <source
              media="(min-width: 641px)"
              srcSet="/images/pactmate-messaging-page-landscape-screenshot.webp"
            />
            <img
              src="/images/pactmate-messaging-page-landscape-screenshot.webp"
              alt="Pactmate Messaging Page Screenshot"
              className="size-full object-fill"
            />
          </picture>
        </div>

        <div className="p-20 pt-10">
          <div className="flex flex-col sm:flex-row gap-20 lg:gap-35 mb-18">
            <div className="flex flex-col gap-16 mt-8">
              <div className="flex gap-12">
                <img
                  src="/images/pactmate-logo.webp"
                  alt="Pactmate - Built with Next.js, TailwindCSS, MongoDB, Socket.IO, Stripe, and AWS S3"
                  className="w-30"
                />

                <h5 className="grow font-bold tracking-widest">PACTMATE</h5>

                <a
                  href="https://pactmate-demo.vercel.app/signup"
                  target="_blank"
                  className="text-sm font-semibold tracking-wider flex items-center gap-6 hover:underline active:text-primary-400"
                >
                  <BsBrowserChrome className="size-12" /> Live ↗
                </a>
              </div>

              <p className="text-[13px] tracking-wider leading-20">
                I built this project for one of my client, marking the beginning
                of my full-stack journey. I handled everything from scratch—UI
                design, API development, authentication, real-time messaging,
                payment integration, testing, and deployment—based on
                client-provided documentation and references.
              </p>
            </div>
            <ProjectPactmateContributionsChart />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 md:gap-y-18 gap-x-8">
            <div className="flex flex-col gap-8">
              <h6 className="font-semibold">👨‍💻 My Role</h6>

              <p className="italic leading-18">
                My role was to turn the client’s idea into a fully functional
                application—handling UI design, full-stack development, testing,
                and deploying a production-ready application.
              </p>

              <ul className="text-xs leading-22 list-disc pl-16">
                <li>
                  <b className="font-semibold">UX/UI</b> design
                </li>
                <li>
                  <b className="font-semibold">Frontend</b> development
                </li>
                <li>
                  <b className="font-semibold">Backend</b> API development
                </li>
                <li>
                  <b className="font-semibold">Real-time</b> messaging with
                  Socket.IO
                </li>
                <li>
                  <b className="font-semibold">Authentication</b> management
                </li>
                <li>
                  <b className="font-semibold">Payment</b> integration
                </li>
                <li>
                  <b className="font-semibold">Testing</b> &{" "}
                  <b className="font-semibold">Deployment</b>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h6 className="font-semibold">🛠️ Tech Stack</h6>

              <p className="italic">
                This project was built with modern tools and libraries to ensure
                performance, scalability & a smooth user experience.
              </p>

              <ul className="text-xs leading-20 list-disc pl-16">
                <li>
                  <b className="font-semibold">Next.js</b> (App Router) for
                  frontend & APIs
                </li>
                <li>
                  <b className="font-semibold">Tailwind CSS</b> for styling
                </li>
                <li>
                  <b className="font-semibold">Socket.IO</b> for real-time
                  messaging
                </li>
                <li>
                  <b className="font-semibold">Mongoose</b> (MongoDB) for
                  database
                </li>
                <li>
                  <b className="font-semibold">Jsonwebtoken</b> &{" "}
                  <b className="font-semibold">Bcrypt</b> for authentication
                </li>
                <li>
                  <b className="font-semibold">Stripe</b> for payments
                </li>
                <li>
                  <b className="font-semibold">AWS S3 bucket</b> for media
                  uploads
                </li>
                <li>
                  <b className="font-semibold">Resend</b> for sending emails
                </li>
                <li>
                  <b className="font-semibold">Vercel</b> for deployment & corn
                  job
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h6 className="font-semibold">🌟 Key Features</h6>

              <p className="italic">
                Core functionalities I implemented while building Pactmate from
                scratch:
              </p>

              <ul className="text-xs leading-22 list-disc pl-16">
                <li>
                  Email-based authentication with{" "}
                  <b className="font-semibold">verification code</b>
                </li>
                <li>
                  User <b className="font-semibold">authentication</b>{" "}
                  management using JWT
                </li>
                <li>
                  Real-time 1:1 <b className="font-semibold">messaging</b> using
                  Socket.IO
                </li>
                <li>
                  <b className="font-semibold">Media stores</b> handled through
                  AWS S3 bucket
                </li>
                <li>
                  <b className="font-semibold">Payment processing</b> integrated
                  with Stripe
                </li>
                <li>
                  <b className="font-semibold">Sending emails</b> through Resend
                </li>
                <li>
                  Automated weekly emails every Wednesday via Vercel{" "}
                  <b className="font-semibold">Cron Jobs</b>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h6 className="font-semibold">🎓 What I Learned</h6>

              <p className="italic">
                This project taught me a lot—especially foundational skills in
                UI design and backend development.
              </p>

              <ul className="text-xs leading-21 list-disc pl-16">
                <li>
                  <b className="font-semibold">UX/UI</b> design
                </li>
                <li>
                  <b className="font-semibold">Backend API</b> development
                </li>
                <li>
                  <b className="font-semibold">Authentication</b> management
                </li>
                <li>
                  <b className="font-semibold">Database design</b> & hands-on
                  experience with <b className="font-semibold">Mongoose</b>
                  (MongoDB)
                </li>
                <li>
                  <b className="font-semibold">Real-time messaging</b> using
                  Socket.IO
                </li>
                <li>
                  <b className="font-semibold">Stripe payment</b> integration
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h6 className="font-semibold">🧠 Challenges & Solutions</h6>

              <p className="italic">
                As my first full-stack project, I faced several
                challenges—particularly around backend development,
                authentication, real-time messaging, and handling Next.js
                caching. I tackled them through deep dives into documentation,
                hands-on debugging, and continuous learning.
              </p>

              <ul className="text-xs leading-24 list-disc pl-16">
                <li>
                  <details className="open:*:first:*:[svg]:-rotate-180">
                    <summary className="flex items-center gap-6 cursor-pointer">
                      <b className="font-semibold">UX/UI</b> Designing
                      <MdKeyboardArrowDown className="ml-auto size-16 transition-transform duration-300 ease-out" />
                    </summary>
                    <div className="flex gap-8 mb-6">
                      <div className="shrink-0 w-2 my-5 bg-primary-600" />
                      <p className="leading-20">
                        As I’m not a designer, this part was new to me. I
                        learned the fundamentals of UI/UX and designed pages
                        inspired by modern design patterns and references.
                      </p>
                    </div>
                  </details>
                </li>

                <li>
                  <details className="open:*:first:*:[svg]:-rotate-180">
                    <summary className="flex items-center gap-6 cursor-pointer">
                      Payment <b className="font-semibold">Free Trial</b>{" "}
                      Implementation
                      <MdKeyboardArrowDown className="ml-auto size-16 transition-transform duration-300 ease-out" />
                    </summary>
                    <div className="flex gap-8 mb-6">
                      <div className="shrink-0 w-2 my-5 bg-primary-600" />
                      <p className="leading-20">
                        Stripe doesn’t offer built-in free trial support, so I
                        implemented it using 100% off promo codes with the
                        “Eligible for first-time order only” option to ensure it
                        applied exclusively to new users.
                      </p>
                    </div>
                  </details>
                </li>

                <li>
                  <details className="open:*:first:*:[svg]:-rotate-180">
                    <summary className="flex items-center gap-6 cursor-pointer">
                      Next.js <b className="font-semibold">Caching</b> Strategy
                      <MdKeyboardArrowDown className="ml-auto size-16 transition-transform duration-300 ease-out" />
                    </summary>
                    <div className="flex gap-8 mb-6">
                      <div className="shrink-0 w-2 my-5 bg-primary-600" />
                      <p className="leading-20">
                        Caching in Next.js 14 had some inconsistencies. I
                        explored different strategies and primarily relied on{" "}
                        <a
                          href="https://nextjs.org/docs/app/building-your-application/caching#data-cache"
                          target="_blank"
                          className="font-medium hover:text-primary-400 active:text-primary-500"
                        >
                          data caching
                        </a>{" "}
                        based on the project’s needs.
                      </p>
                    </div>
                  </details>
                </li>

                <li>
                  <details className="open:*:first:*:[svg]:-rotate-180">
                    <summary className="flex items-center gap-6 cursor-pointer">
                      <b className="font-semibold">Socket.IO</b> Server
                      Deployment
                      <MdKeyboardArrowDown className="ml-auto size-16 transition-transform duration-300 ease-out" />
                    </summary>
                    <div className="flex gap-8 mb-6">
                      <div className="shrink-0 w-2 my-5 bg-primary-600" />
                      <p className="leading-20">
                        Since{" "}
                        <a
                          href="https://vercel.com/docs/limits#websockets"
                          target="_blank"
                          className="font-medium hover:text-primary-400 active:text-primary-500"
                        >
                          Vercel Functions don’t support WebSocket servers
                        </a>
                        , I created a separate Express-based Socket.IO server
                        and deployed it independently.
                      </p>
                    </div>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
