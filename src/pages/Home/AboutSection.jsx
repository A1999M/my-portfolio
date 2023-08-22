import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import htmlLogo from "../../assets/svg/html-1.svg";
import cssLogo from "../../assets/svg/css-3.svg";
import reduxLogo from "../../assets/svg/redux.svg";
import muiLogo from "../../assets/svg/material-ui.svg";
import formicLogo from "../../assets/svg/formik.svg";
import sassLogo from "../../assets/svg/sass-1.svg";
import jsLogo from "../../assets/svg/logo-javascript.svg";
import reactLogo from "../../assets/svg/react-2.svg";
import LogoImage from "./LogoImage";
import bootstrapLogo from "../../assets/svg/bootstrap-4.svg";
import gsapLogo from "../../assets/svg/gsap.svg";
import TSLogo from "../../assets/svg/typescript.svg";
import framerLogo from "../../assets/svg/framer-motion.svg";
import SplitText from "../../utils/SplitText";
import "./Home.scss";

export default function AboutSection() {
  let descAboutSectionRef = useRef(null);
  let triggerDesc = useRef(null);
  let scopeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let ctx = gsap.context(() => {
      let splitDesc = new SplitText(descAboutSectionRef.current, {
        type: "chars",
      });

      gsap.from(splitDesc.chars, {
        opacity: 0.3,
        // clipPath: "inset(0% 100% 0% 0%)",
        stagger: 0.3,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: triggerDesc.current,
          endTrigger: scopeRef.current,
          start: "top 85%",
          end: "bottom 35%",
          scrub: 2,
          //   markers: {
          //     startColor: "#ffd700",
          //     endColor: "#ff0000",
          //     fontSize: "25px",
          //   },
        },
      });
    }, scopeRef.current);

    return () => ctx.revert();
  });

  return (
    <>
      <div ref={scopeRef} className="col-12 aboutSection">
        <div ref={triggerDesc} className="wrapperAboutSection">
          <p className="titleAbout">about me</p>
          <p ref={descAboutSectionRef} className="descAbout">
            I've<span>&nbsp;</span>Enjoyed<span>&nbsp;</span>Turning
            <span>
              &nbsp;Complex<span>&nbsp;</span>Problems
            </span>{" "}
            <span>&nbsp;</span>Into<span>&nbsp;</span>Simple,<span>&nbsp;</span>
            Beautiful
            <span>&nbsp;</span>And<span>&nbsp;</span>Intuitive
            <span>&nbsp;</span>Designs.<span>&nbsp;</span>When
            <span>&nbsp;</span>I'm<span>&nbsp;</span>Not<span>&nbsp;</span>
            Pushing<span>&nbsp;</span>Pixels,<span>&nbsp;</span>You'll
            <span>&nbsp;</span>Find<span>&nbsp;</span>Me<span>&nbsp;</span>
            Cooking,
            <span>&nbsp;</span>Gardening<span>&nbsp;</span>Or<span>&nbsp;</span>
            Working<span>&nbsp;</span>Out<span>&nbsp;</span>In
            <span>&nbsp;</span>The<span>&nbsp;</span>Park.
          </p>
        </div>
      </div>
      {/* my skills section  */}
      <div data-scroll data-scroll-speed="0.1" className="col-12 mySkills">
        <p className="titleSkills">my skills</p>
      </div>
      <div className="col-12">
        <div className="wrapperLogos">
          <div className="logoCuomn1">
            <LogoImage
              imageSrc={reactLogo}
              imageAlt={"react logo"}
              scrollSpeed={0.2}
            />
            <LogoImage
              imageSrc={jsLogo}
              imageAlt={"js logo"}
              scrollSpeed={0.1}
            />
            <LogoImage
              imageSrc={bootstrapLogo}
              imageAlt={"bootstrap logo"}
              scrollSpeed={0.3}
            />
            <LogoImage
              imageSrc={sassLogo}
              imageAlt={"sass logo"}
              scrollSpeed={0.2}
            />
            <LogoImage
              imageSrc={cssLogo}
              imageAlt={"css logo"}
              scrollSpeed={0.3}
            />
            <LogoImage
              imageSrc={htmlLogo}
              imageAlt={"html logo"}
              scrollSpeed={0.2}
            />
          </div>
          <div className="logoCuomn2">
            <LogoImage
              imageSrc={reduxLogo}
              imageAlt={"redux logo"}
              scrollSpeed={0.2}
            />
            <LogoImage
              imageSrc={muiLogo}
              imageAlt={"mui logo"}
              scrollSpeed={0.3}
            />
            <LogoImage
              imageSrc={gsapLogo}
              imageAlt={"gsap logo"}
              scrollSpeed={0.2}
            />
            <LogoImage
              imageSrc={formicLogo}
              imageAlt={"formik logo"}
              scrollSpeed={0.3}
            />
            <LogoImage
              imageSrc={framerLogo}
              imageAlt={"framer logo"}
              scrollSpeed={0.1}
            />
            <LogoImage
              imageSrc={TSLogo}
              imageAlt={"typescript logo"}
              scrollSpeed={0.2}
            />
          </div>
        </div>
      </div>
      <div className="col-12 mt-5">
        <p className="text-light fs-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae in
          quaerat, impedit quod optio enim accusantium eius recusandae animi
          nulla sint dolores officia, temporibus repudiandae? Incidunt vitae
          consequuntur aspernatur adipisci! Ex eveniet, repellat pariatur
          adipisci natus sequi qui, cumque voluptatum deserunt quod harum rerum
          molestias distinctio incidunt blanditiis neque excepturi hic modi.
          Molestias iure reprehenderit qui dignissimos, dolore illo
          exercitationem! Nihil corporis minima sunt iure, itaque adipisci
          corrupti! Accusantium porro facere ullam assumenda molestias quis
          quibusdam quaerat totam illum voluptate reprehenderit corporis, labore
          ea cumque nostrum doloremque officiis. Unde, totam. Veritatis
          temporibus veniam autem blanditiis laborum vel voluptates, et
          similique harum voluptatem totam officia! Quam non repudiandae,
          consequuntur doloremque facilis cum quo aspernatur quas ratione culpa
          vel fugiat beatae excepturi? Commodi eum cumque quisquam sed doloribus
          sit adipisci at esse iusto? Tempora voluptatem voluptates molestiae
          amet corporis, eveniet laborum? Libero est iure voluptatibus molestiae
          distinctio natus voluptate molestias beatae ex!
        </p>
      </div>
      <div className="col-12 mt-5">
        <p className="text-light fs-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae in
          quaerat, impedit quod optio enim accusantium eius recusandae animi
          nulla sint dolores officia, temporibus repudiandae? Incidunt vitae
          consequuntur aspernatur adipisci! Ex eveniet, repellat pariatur
          adipisci natus sequi qui, cumque voluptatum deserunt quod harum rerum
          molestias distinctio incidunt blanditiis neque excepturi hic modi.
          Molestias iure reprehenderit qui dignissimos, dolore illo
          exercitationem! Nihil corporis minima sunt iure, itaque adipisci
          corrupti! Accusantium porro facere ullam assumenda molestias quis
          quibusdam quaerat totam illum voluptate reprehenderit corporis, labore
          ea cumque nostrum doloremque officiis. Unde, totam. Veritatis
          temporibus veniam autem blanditiis laborum vel voluptates, et
          similique harum voluptatem totam officia! Quam non repudiandae,
          consequuntur doloremque facilis cum quo aspernatur quas ratione culpa
          vel fugiat beatae excepturi? Commodi eum cumque quisquam sed doloribus
          sit adipisci at esse iusto? Tempora voluptatem voluptates molestiae
          amet corporis, eveniet laborum? Libero est iure voluptatibus molestiae
          distinctio natus voluptate molestias beatae ex!
        </p>
      </div>
    </>
  );
}
