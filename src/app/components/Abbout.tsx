const Abbout = () => {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto min-h-230 bg-primary-100/10 border border-t-0 border-primary-300/10 rounded-b-lg mb-24 relative"
    >
      <div className="aspect-square border rounded-full flex items-start bg-black/30 overflow-hidden float-right mt-50 sm:mt-40 mr-10 sm:mr-30 ml-8 sm:ml-18 mb-8 sm:mb-18 shape-outside-[circle(closest-side_at_102px_141px)] sm:shape-outside-[circle(closest-side_at_89px_106px)] md:shape-outside-[circle(closest-side_at_60px_142px)] lg:shape-outside-[circle(closest-side_at_96px_106px)]">
        <img
          src="/images/picture.webp"
          alt="Picture"
          className="w-160 sm:w-120 mr-20 mt-16"
        />
      </div>
      <div className="p-20 sm:p-30">
        <h4 className="font-light tracking-widest mb-5">HELLO, I AM</h4>
        <h2 className="mb-14">Sakib Hossain</h2>
        <h1 className="text-sm sm:text-[15px] tracking-wide sm:tracking-wider sm:leading-25 last-align-end mb-8">
          I’m Sakib, a
          <b className="text-size-inherit font-semibold"> Frontend</b>
          -focused
          <b className="text-size-inherit font-semibold"> Full-stack </b>
          Developer with
          <b className="text-size-inherit font-semibold"> 4 years </b>of
          experience, including 2 years of
          <b className="text-size-inherit font-semibold"> job experience </b>
          as a professional
          <b className="text-size-inherit font-semibold"> Frontend </b>
          developer. I specialize in
          <a
            href="https://react.dev"
            target="_blank"
            className="text-size-inherit font-semibold"
          >
            {" "}
            React{" "}
          </a>
          and
          <a
            href="https://nextjs.org"
            target="_blank"
            className="text-size-inherit font-semibold"
          >
            {" "}
            Next.js
          </a>
          , with hands-on{" "}
          <b className="text-size-inherit font-semibold">Backend</b> experience
          using{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            className="text-size-inherit font-semibold"
          >
            {" "}
            Next.js{" "}
          </a>
          and
          <a
            href="https://www.mongodb.com"
            target="_blank"
            className="text-size-inherit font-semibold"
          >
            {" "}
            MongoDB
          </a>
          (
          <a
            href="https://mongoosejs.com"
            target="_blank"
            className="text-size-inherit"
          >
            Mongoose
          </a>
          ).
        </h1>
        <p className="text-sm sm:text-[15px] tracking-wide last-align-end">
          I enjoy building projects from scratch—writing clean, scalable code,
          and focusing on performance, security, accessibility, and a strong
          architectural foundation.
        </p>
      </div>
    </section>
  );
};

export default Abbout;
