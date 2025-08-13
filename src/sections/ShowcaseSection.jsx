import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
  return (
    <section id="project" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <a href="https://github.com/HanyAlhabboby/BestStore">
                <img
                  src="/images/best-store-new.png"
                  alt="bestshop"
                  className=" w-full h-full scale-100 transition-transform duration-300 hover:scale-105 object-contain"
                />
              </a>
            </div>
            <div className="text-content text-center">
              <h3>BestStore is a modern ASP.NET Core MVC e-commerce web</h3>
            </div>

            <div className="project">
              <div className="flex gap-6 justify-center">
                <a
                  href="https://github.com/HanyAlhabboby/Wallet-mobil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[200px] h-[400px] overflow-hidden rounded-2xl shadow-lg bg-black transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src="/images/wallet1.png"
                    alt="wallet screen 1"
                    className="w-full h-full object-contain"
                  />
                </a>

                <a
                  href="https://github.com/HanyAlhabboby/Wallet-mobil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[200px] h-[400px] overflow-hidden rounded-2xl shadow-lg bg-black transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src="/images/wallet2.png"
                    alt="wallet screen 2"
                    className="w-full h-full object-contain"
                  />
                </a>

                <a
                  href="https://github.com/HanyAlhabboby/Wallet-mobil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[200px] h-[400px] overflow-hidden rounded-2xl shadow-lg bg-black transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src="/images/wallet3.png"
                    alt="wallet screen 3"
                    className="w-full h-full object-contain"
                  />
                </a>

                <a
                  href="https://github.com/HanyAlhabboby/Wallet-mobil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[200px] h-[400px] overflow-hidden rounded-2xl shadow-lg bg-black transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src="/images/wallet4.png"
                    alt="wallet screen 4"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>

              <h3 className="text-center mt-4">
                Wallet is a personal finance app to track income and expenses.
                Built with Expo Router and React Native.
              </h3>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper w-full h-64 overflow-hidden flex items-center justify-center ">
                <a href="https://hanyalhabboby.github.io/worldwise">
                  <img
                    src="/images/worldwise.png"
                    alt="bestshop"
                    className="w-full h-full object-cover scale-120 transition-transform duration-300 hover:scale-125"
                  />
                </a>
              </div>
              <h3 className="text-center">
                WorldWise is a location-based travel memory app built with
                React. It allows users to explore cities, view travel notes, and
                manage visited places using an interactive map interface.
              </h3>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper w-full h-64 overflow-hidden flex items-center justify-center ">
                <a href="https://hanyalhabboby.github.io/usepopcorn/">
                  <img
                    src="/images/usepopcorn.png"
                    alt="Usepopcorn"
                    className="w-full h-full object-cover scale-120 transition-transform duration-300 hover:scale-125"
                  />
                </a>
              </div>
              <h3 className="text-center">
                UsePopcorn is a React-based web application that enables users
                to search for movies and manage a personal watchlist with custom
                ratings.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
