import { useRef } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useIsomorphicLayoutEffect } from "../helpers/isomorphicEffect";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Specialties = () => {
  const main = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".horizontal-wrapper",
          pin: true,
          markers: true,
          start: "top top",
          end: "+=500%",
          scrub: true,
        }
      })
      .to(sections, {
        xPercent: -100 * (sections.length - 1),
        // duration: duration,
        ease: "none"
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={main}>
      <div className="horizontal-wrapper">
        <div className="horizontal-container">
          <section className="description panel blue">
            <div><h1>Horizontal Sections</h1>
              <div className="scroll-down">Scroll down<div className="arrow"></div></div>
            </div>
          </section>
          <section className="panel red">
            ONE
          </section>
          <section className="panel orange">
            TWO
          </section>
          <section className="panel purple">
            THREE
          </section>
          <section className="panel green">
            FOUR
          </section>
          <section className="panel gray">
            FIVE
          </section>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
