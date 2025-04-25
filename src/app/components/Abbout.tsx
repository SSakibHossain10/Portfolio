const Abbout = () => {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto min-h-230 bg-primary-100/10 flex flex-col md:flex-row border border-t-0 border-primary-300/10 rounded-b-lg mb-24"
    >
      <div className="grow flex flex-col justify-center p-30">
        <h4 className="font-light tracking-widest mb-5">HELLO, I AM</h4>
        <h2 className="mb-14">Sakib Hossain</h2>
        <p className="max-w-530 text-sm tracking-wide last-align-end mb-8">
          I’m Sakib, a
          <b className="text-size-inherit font-semibold"> Frontend</b>
          -focused
          <b className="text-size-inherit font-semibold"> Full-stack </b>
          developer with
          <b className="text-size-inherit font-semibold"> 4 years </b>of
          experience, including 2 years of
          <b className="text-size-inherit font-semibold"> job </b>
          experience as a professional
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
            className="text-size-inherit font-semibold"
          >
            Mongoose
          </a>
          ).
        </p>
        <p className="max-w-530 text-sm tracking-wide last-align-end">
          I enjoy building projects from scratch—building UI, writing clean,
          maintainable code, and focusing on performance, solid architecture,
          accessibility, and security.
        </p>
      </div>
      <img
        src="/images/picture.webp"
        alt="Picture"
        className="max-h-200 w-auto mt-auto pr-60"
      />
    </section>
  );
};

export default Abbout;
