import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2 ", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p className="para">
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div className="flex flex-row items-center para">
              <div>
                <p className="md:text-3xl text-xl font-bold text-yellow">
                  ★★★★⯪
                </p>

                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white-100">
                  More than +12000 customers
                </p>
              </div>
              <div className="w-px bg-white h-30 "></div>

              <div className=" flex bg-[#18181a]  items-center justify-center shadow-md  rounded-full h-24 mr-7">
                <div className="flex flex-row  mr-4">
                  <img src="/images/profile1.png" className="ml-6" />
                  <img src="/images/profile2.png" className="-ml-6" />
                  <img src="/images/profile3.png" className="-ml-6" />
                  <img src="/images/profile4.png" className="-ml-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-3">
          <div className="" />
          <img src="/images/lines.png" alt="grid-img-5" />
        </div>
        <div className="md:col-span-6">
          <div className="" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};
export default About;
