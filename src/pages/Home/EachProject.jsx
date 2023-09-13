import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function EachProject({ imageSrc, name, index }) {
  // useEffect(() => {
  //   let splitName = new SplitType(nameRef.current);
  //   let splitTask = new SplitType(taskRef.current);

  //   gsap.registerPlugin(ScrollTrigger);

  //   let ctx = gsap.context(() => {
  //     gsap.from(scopeRef.current, {
  //       opacity: 0,
  //       y: 100,
  //       duration: 1,
  //       ease: "Back.easeOut",
  //       delay: 0.2,
  //       scrollTrigger: {
  //         trigger: scopeRef.current,
  //         toggleActions: "restart none none reverse",
  //         start: "top 80%",
  //         end: "bottom 25%",
  //       },
  //     });
  //     gsap.from(splitName.chars, {
  //       opacity: 0,
  //       y: 100,
  //       duration: 1,
  //       ease: "Expo.easeOut",
  //       stagger: 0.02,
  //       delay: 0.2,
  //       scrollTrigger: {
  //         trigger: nameRef.current,
  //         toggleActions: "restart none none reverse",
  //         start: "top 90%",
  //         end: "bottom 0%",
  //       },
  //     });
  //   }, scopeRef.current);

  //   return () => {
  //     ctx.revert();
  //   };
  // });

  let handleImgMove = (e) => {
    let { width, height, top } = document
      .querySelector(`.eachProject${index}`)
      .getBoundingClientRect();

    let x = e.clientX - width / 2;
    let y = e.clientY - (height / 2 + top);

    let xTo = gsap.quickTo(
      document.querySelector(`.eachProject${index}`),
      "x",
      {
        duration: 0.3,
        ease: "Back.easeOut",
      }
    );
    let yTo = gsap.quickTo(
      document.querySelector(`.eachProject${index}`),
      "y",
      {
        duration: 0.3,
        ease: "Back.easeOut",
      }
    );

    xTo(x);
    yTo(y);
  };
  let handleImageLeave = () => {
    let xTo = gsap.quickTo(
      document.querySelector(`.eachProject${index}`),
      "x",
      {
        duration: 0.5,
        ease: "Back.easeOut",
      }
    );
    let yTo = gsap.quickTo(
      document.querySelector(`.eachProject${index}`),
      "y",
      {
        duration: 0.5,
        ease: "Back.easeOut",
      }
    );

    xTo(0);
    yTo(0);
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
      viewport={{ once: true, amount: "all" }}
      onMouseLeave={handleImageLeave}
      onMouseMove={handleImgMove}
      className={`eachProject`}
    >
      <span className="nameOfProject">{name}</span>
      <span className="myTask">development</span>
      <img
        className={`eachProject${index} proImage`}
        src={imageSrc}
        alt={imageSrc}
      />
    </motion.li>
  );
}
