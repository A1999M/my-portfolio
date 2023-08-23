import { gsap } from "gsap";

export default function EachProject({ imageSrc, name, index }) {
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
        duration: 0.7,
        ease: "Back.easeOut",
      }
    );
    let yTo = gsap.quickTo(
      document.querySelector(`.eachProject${index}`),
      "y",
      {
        duration: 0.7,
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
    <>
      <li
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
      </li>
    </>
  );
}
