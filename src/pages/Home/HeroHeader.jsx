import { useRef, memo, useContext, useEffect } from "react";
import MaskStatus from "../../context/MaskStatus";
import SplitType from "split-type";
import { gsap } from "gsap";
import "./Home.scss";

let HeroHeader = memo(
  ({ changeHover, changeMix, title1, title2, mask, color }) => {
    let scopeRef = useRef(null);
    let nameRef = useRef(null);
    let lastNameRef = useRef(null);
    let descRef = useRef(null);
    const [, , index] = useContext(MaskStatus);

    useEffect(() => {
      if (index < 8) return;
      let splitName = new SplitType(nameRef.current);
      let splitLastName = new SplitType(lastNameRef.current);
      let splitDesc = new SplitType(descRef.current);

      let tl = gsap.timeline();

      tl.fromTo(
        splitName.chars,
        { opacity: 1, y: 170 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 1,
          ease: "Expo.easeOut",
          delay: 0.2,
        }
      );
      tl.fromTo(
        splitLastName.chars,
        { opacity: 1, y: 170 },
        {
          opacity: 1,
          stagger: 0.03,
          y: 0,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.12"
      );
      tl.fromTo(
        splitDesc.lines,
        { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          stagger: 0.15,
          y: 0,
          duration: 1,
          ease: "Expo.easeOut",
        },
        "<0.1"
      );

      return () => {
        tl.kill();
      };
    }, [index]);

    return (
      <div
        ref={scopeRef}
        data-mask={mask}
        className="container-fluid heroHeader"
        style={{ borderBlockColor: "#ec4e39" }}
      >
        <div className="row p-0">
          <div className="col-12">
            <div className="wrapperName">
              <div>
                <p
                  onMouseEnter={() => {
                    changeHover(true);
                    changeMix(false);
                  }}
                  onMouseLeave={() => {
                    changeHover(false);
                    changeMix(true);
                  }}
                  ref={nameRef}
                  style={{ color: color }}
                  className="NameOfMe"
                >
                  {title1}
                </p>
              </div>
              <div>
                <p
                  onMouseEnter={() => {
                    changeHover(true);
                    changeMix(false);
                  }}
                  onMouseLeave={() => {
                    changeHover(false);
                    changeMix(true);
                  }}
                  ref={lastNameRef}
                  style={{ color: color }}
                  className="lastNameOfMe"
                >
                  {title2}
                </p>
              </div>

              {!mask ? (
                <p
                  onMouseEnter={() => {
                    changeHover(true);
                    changeMix(false);
                  }}
                  onMouseLeave={() => {
                    changeHover(false);
                    changeMix(true);
                  }}
                  ref={descRef}
                  style={{ color: color }}
                  className="descHeroHeader"
                >
                  Hello, My Name Is Ali Molaei. Nice To Meet You I Would Like To
                  Welcome You With My Personal Portfolio
                </p>
              ) : (
                <p
                  onMouseEnter={() => {
                    changeHover(true);
                    changeMix(false);
                  }}
                  onMouseLeave={() => {
                    changeHover(false);
                    changeMix(true);
                  }}
                  ref={descRef}
                  style={{ color: color }}
                  className="descHeroHeader"
                >
                  With Each Project, I Push My Work To New Horizons, Always
                  Putting Quality First.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default HeroHeader;
