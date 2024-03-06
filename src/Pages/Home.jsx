import React from "react";
import Skills from "../Shared/Components/Partials/SkillsCard";
const Home = () => {
  return (
    <>
      <div
        className={`bg-custom-bg flex flex-col lg:flex-row items-center justify-center min-h-screen`}
        style={{ paddingTop: "4rem" }}
      >
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div className="text-center md:text-left">
                <h1
                  className={`transition duration-2000 transform hover:scale-105 text-3xl font-bold leading-tight text-custom-fontColor sm:text-9xl lg:text-8xl`}
                  style={{ textShadow: "2px 2px 4px rgba(39, 120, 225, 0.3)" }}
                >
                  Bryan Ken Altes
                </h1>
                <h3
                  className={`transition duration-2000 transform hover:scale-105 text-3xl mt-4 text-base leading-relaxed text-custom-fontColor`}
                  style={{ textShadow: "1px 1px 2px rgba(39, 120, 225, 0.3)" }}
                >
                  I'm back-end developer
                </h3>
                <br />
                <a
                  href="/Project"
                  className={`bg-custom-buttonBG hover:bg-custom-buttonBG text-white font-bold py-2 px-4 rounded font-mono`}
                >
                  View Projects
                </a>
              </div>
              <div className="relative pl-0 md:pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-xs mt-4 mb-10 mx-auto md:ml-auto">
                  <img
                    className="mx-auto md:mx-0"
                    src="https://ouch-cdn2.icons8.com/vZD-nOO0-rKGloPBW0WjLQF-i8hfkpa7QWY_3L4YTGA/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzAx/L2Y1ZWI5ZGEwLTM3/ZWMtNDUxYy1iODNl/LTVjMzc1NGU5NjQx/NC5zdmc.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
};

export default Home;
