import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg } from "../utils";
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, duration: 1, stagger: 0.25, y: 0 });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 md:flex w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the Highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the Film
              <img src={WakeLockSentinel} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the Event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
