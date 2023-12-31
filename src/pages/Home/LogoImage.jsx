import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import MagneticBtn from "../../components/MagneticBtn";
import { gsap } from "gsap";

export default function LogoImage({ imageSrc, imageAlt }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let allLogos = gsap.utils.toArray(".eachLogoImage");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: allLogos[1],
        id: "logoTrigger",
        start: "center 65%",
        end: "bottom 0%",
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
          ease: "none",
        },
        "<0.15"
      );
    });

    return () => {
      tl.revert();
    };
  }, []);

  return (
    <MagneticBtn>
      <div className="wrapperImageLogo">
        <img className="eachLogoImage" src={imageSrc} alt={imageAlt} />
      </div>
    </MagneticBtn>
  );
}
