const Banner = () => {
  return (
    <div className="hero background">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/user.png" className="max-w-md rounded-lg" />
        <div>
          <h1 className="text-7xl font-extrabold text-[#1A1919]">
            One Step Closer To Your{" "}
            <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text">
              Dream Job
            </span>
          </h1>
          <p className="py-6 text-lg font-medium">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn text-white font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
