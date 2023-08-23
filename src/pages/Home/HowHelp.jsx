import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function HowHelp() {
  let scopeRef = useRef(null);
  let titleRef = useRef(null);
  let descRef = useRef(null);

  useEffect(() => {
    let splitTitle = new SplitType(titleRef.current);
    let splitDesc = new SplitType(descRef.current);

    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.from(splitTitle.chars, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "Expo.easeOut",
        stagger: 0.02,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 95%",
          end: "bottom 0%",
          toggleActions: "restart none none reverse",
        },
      });
      gsap.from(splitDesc.chars, {
        opacity: 0.3,
        duration: 1,
        ease: "Expo.easeOut",
        stagger: 0.02,
        scrollTrigger: {
          scrub: 1,
          trigger: descRef.current,
          start: "top 85%",
          end: "center 33%",
        },
      });
    }, scopeRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div ref={scopeRef} className="col-12">
        <div className="wrapperHowToHelp">
          <div className="wrapperTitleHelp">
            <p ref={titleRef} className="titleHelp">
              Let’s work together
            </p>
          </div>
          <p ref={descRef} className="descHowHelp">
            I'm Currently Looking For A Job In <span>Full Time Remote </span>.
            Feel Free To Contact Me If You Want To Collaborate On Future
          </p>
        </div>
      </div>
      <div className="col-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          minus quasi sapiente expedita iste, dicta earum fuga voluptatibus
          laborum modi vero ad temporibus pariatur amet doloribus ratione
          ducimus totam repellat! Fugit voluptas magni aspernatur! Officia
          consequuntur deleniti unde eos adipisci voluptatem velit dolor,
          dolorem veniam. Adipisci nemo similique, deleniti ullam sapiente
          officiis, nam inventore placeat cum incidunt magni sint temporibus.
          Eveniet quasi saepe rem nam necessitatibus odit maiores, ex natus
          molestias tempore nihil tempora eius veniam sunt facilis accusamus et
          vitae? Necessitatibus dolor repellendus veritatis sit illum soluta
          dignissimos explicabo! Dignissimos fugiat explicabo adipisci deleniti
          cum. Modi pariatur reprehenderit soluta consectetur tempore, dolor
          assumenda saepe veritatis sequi obcaecati quia ipsam amet nam quaerat
          sapiente, molestiae doloremque, id error nobis doloribus. Repudiandae,
          fugiat facilis! Debitis excepturi facere animi ipsam nostrum
          laboriosam, nisi dolore tenetur pariatur nesciunt. Labore id
          dignissimos accusamus nemo, tempora soluta quae cumque eos deleniti
          porro possimus nam at? A corporis eaque, natus saepe corrupti ab,
          ipsum eligendi mollitia odit eius, totam quasi delectus fugiat
          consequuntur id deserunt vel obcaecati impedit quis blanditiis!
          Expedita laborum velit dolorem! Neque, quam. Eligendi impedit laborum
          placeat aliquid tempora porro eveniet exercitationem! Obcaecati, odio.
          Impedit molestiae commodi veniam facilis est soluta iusto velit!
          Voluptatem repellendus aliquid ut voluptatum tenetur impedit
          similique, minus ducimus? Enim unde expedita sequi debitis est
          laudantium doloribus aliquid molestias quo, minus impedit excepturi
          veniam ducimus dolorem soluta saepe magni voluptate iste vel nesciunt
          reprehenderit fuga ipsum? Laudantium, animi eaque? Quibusdam,
          voluptatibus ducimus! Dicta impedit libero ab corrupti incidunt
          laborum quibusdam omnis. Aspernatur similique quaerat aut alias nam
          perspiciatis deserunt iusto ullam odit quod aperiam necessitatibus, ad
          laborum fugiat perferendis. Explicabo repudiandae, iusto eius rerum
          dolores nostrum impedit blanditiis vel, earum molestias quibusdam
          praesentium. Laborum sapiente magni saepe corrupti vel atque
          consequuntur nemo distinctio, beatae quo eum commodi, expedita quidem!
        </p>
      </div>
    </>
  );
}
