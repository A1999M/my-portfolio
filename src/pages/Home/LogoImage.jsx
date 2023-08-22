import { useEffect, useContext } from "react";
import MaskStatus from "../../context/MaskStatus";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

export default function LogoImage({ imageSrc, imageAlt, scrollSpeed }) {
  let [, setMixStatus] = useContext(MaskStatus);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let allLogos = gsap.utils.toArray(".eachLogoImage");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: allLogos[1],
        start: "center 90%",
        id: "logoTrigger",
        end: "center 10%",
        scrub: 1,
      },
    });

    allLogos.forEach((logo) => {
      tl.fromTo(
        logo,
        {
          clipPath: "inset(0% 100% 0% 0%)",
          scale: 1.5,
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "Expo.easeOut",
        },
        "<0.15"
      );
    });

    return () => {
      tl.revert();
    };
  }, []);

  return (
    <div
      data-scroll
      data-scroll-speed={scrollSpeed}
      className="wrapperImageLogo"
    >
      <img
        onMouseEnter={() => setMixStatus(true)}
        onMouseLeave={() => setMixStatus(false)}
        className="eachLogoImage"
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
}
