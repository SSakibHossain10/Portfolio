const Abbout = () => {
  return (
    <>
      <div className="w-full h-0 flex sticky top-0">
        <span className="grow border-b border-primary-300/10" />
        <span className="w-[min(100%,64rem)]" />
        <span className="grow border-b border-primary-300/10" />
      </div>
      <section
        id="about"
        className="w-full max-w-5xl mx-auto min-h-230 bg-primary-100/5 border border-t-0 border-primary-300/10 rounded-b-lg mb-24 relative"
      >
        <div className="aspect-square border rounded-full flex items-start bg-black/30 overflow-hidden float-right mt-50 sm:mt-40 mr-10 sm:mr-30 ml-8 sm:ml-18 mb-8 sm:mb-18 shape-outside-[circle(closest-side_at_100px_141px)] sm:shape-outside-[circle(closest-side_at_88px_101px)] md:shape-outside-[circle(closest-side_at_92px_120px)] lg:shape-outside-[circle(closest-side_at_80px_122px)]">
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
            <b className="text-size-inherit font-semibold"> Frontend </b>
            Developer with
            <b className="text-size-inherit font-semibold"> 4 years </b>of
            experience, including 2 years of
            <b className="text-size-inherit font-semibold"> job experience </b>
            as a professional
            <b className="text-size-inherit font-semibold"> Frontend </b>
            developer. I specialize in building
            <b className="text-size-inherit font-semibold"> performant</b> and
            <b className="text-size-inherit font-semibold"> scalable</b> web
            applications using
            <b className="text-size-inherit font-semibold"> React</b>,
            <b className="text-size-inherit font-semibold"> Next.js</b>,
            <b className="text-size-inherit font-semibold"> TypeScript</b>, and
            <b className="text-size-inherit font-semibold"> Tailwind CSS</b>.
          </h1>
          <p className="text-sm sm:text-[15px] tracking-wide last-align-end">
            I focus on writing clean, maintainable code with attention to
            performance, accessibility, and UI/UX. I'm experienced in building
            web applications from scratch — including complex state management,
            responsive design, and seamless integration with APIs and modern
            backend services.
          </p>
        </div>
      </section>
    </>
  );
};

export default Abbout;
