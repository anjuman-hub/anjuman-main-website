import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section className="hidden lg:block w-full py-8">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 xl:px-16">
        <div
          className="relative rounded-3xl overflow-hidden
          h-[420px] xl:h-[460px] flex items-center"
          style={{
            backgroundImage: "url('/images/bg--1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/95 via-[#0b2a4a]/85 to-transparent"></div>

          {/* LEFT CONTENT */}
          <div className="relative z-10 w-full lg:w-1/2 px-10 xl:px-16">
            <h2 className="text-[32px] xl:text-[42px] 2xl:text-[48px] font-bold text-white leading-tight">
              Shape Your Future <br />
              <span className="text-yellow-400">
                With Excellence
              </span>
            </h2>

            <p className="mt-4 text-[16px] xl:text-[18px] 2xl:text-[20px] text-gray-200 leading-relaxed max-w-[520px]">
              Discover a world of unlimited opportunities. Our comprehensive
              programs are designed to empower you with the skills and knowledge
              needed to lead in a dynamic global landscape.
            </p>

            <Link
              to="/academics/programs-offered"
              className="inline-flex items-center mt-6
              bg-yellow-400 hover:bg-yellow-500
              text-blue-900 font-semibold
              px-7 xl:px-8 py-2.5 xl:py-3
              rounded-full shadow-md transition duration-300"
            >
              Explore Programs →
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute right-0 top-0 h-full w-1/2 flex items-end justify-end">
            <img
              src="/images/mobbanner.svg"
              alt="Students"
              className="h-full w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
