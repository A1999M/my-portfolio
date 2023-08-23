import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Experience() {
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
          start: "top 90%",
          end: "bottom 0%",
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
        <div className="wrapperExperience">
          <div className="wrapperTitleExperience">
            <p ref={titleRef} className="titleExperience">
              my Experience
            </p>
          </div>
          <div className="wrapperDescExperience">
            <p ref={descRef} className="descExperience">
              With a solid track record in <span> designing websites </span> and
              apps, I deliver strong and user-friendly digital designs. Solid
              company branding is the foundation of any succesful website.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          reprehenderit nihil laudantium omnis voluptas inventore sequi
          distinctio obcaecati assumenda incidunt error similique perspiciatis
          fugiat debitis atque aspernatur, aut mollitia vitae. Necessitatibus
          est molestiae exercitationem, totam ducimus quasi dicta laborum
          sapiente aperiam eum laudantium saepe enim deserunt? Voluptates, ab
          dicta? Ipsam adipisci natus officiis saepe numquam corporis incidunt
          delectus nemo pariatur? Vel a suscipit soluta natus aliquam qui
          pariatur. Ex eius doloribus, molestias laudantium ullam, accusantium
          dignissimos rem quod tempora fugit error maiores odit sit illum at
          minus praesentium neque. Asperiores? Dolor accusamus rem voluptatibus
          alias! Commodi dignissimos, nulla illum laudantium eveniet quia.
          Similique eius aperiam vitae vel rem totam quam est? Aliquam voluptas
          sunt esse. Molestiae vel eligendi at magnam! Corrupti nihil iure
          doloribus incidunt consectetur laboriosam veniam, molestias officia
          nisi velit quos alias dolorem! Dolorum ad iusto minima impedit vel
          nulla tenetur voluptates saepe nihil. Et debitis quia labore!
          Exercitationem tenetur porro quod nisi inventore tempora, qui
          repudiandae consectetur cum amet quo excepturi, quia doloribus
          voluptas mollitia. A, cum amet recusandae nisi placeat deserunt
          dignissimos non tempora alias. Repudiandae? Iusto, non. At, ipsa!
          Magni, sunt suscipit corrupti voluptatibus optio earum molestias hic
          vero distinctio ad officiis nobis. Deleniti doloribus cupiditate
          expedita nesciunt alias molestiae amet impedit reprehenderit maiores
          tempore. Distinctio obcaecati amet nemo nobis vel quisquam consectetur
          recusandae ab, nulla, voluptates tempora laudantium iste sint ratione
          nihil porro maiores at doloribus eaque atque ad. Voluptate cupiditate
          quia velit suscipit. Voluptatibus excepturi sunt omnis vel totam unde
          amet illum nulla, cumque rem ut sint voluptatum aliquid asperiores,
          magni dolor voluptas ex accusamus quod pariatur beatae? Nesciunt nam
          numquam ipsa molestiae! Cum provident aspernatur vitae ipsa
          reprehenderit molestias illo. Laboriosam, nulla! Id voluptate,
          laboriosam odit cumque quasi necessitatibus autem neque aut in numquam
          velit corporis harum veritatis aliquam incidunt earum odio. Inventore,
          dicta tempore saepe obcaecati maxime impedit autem, fugiat, pariatur
          suscipit vitae eligendi sequi amet sit iusto? Repudiandae doloribus
          tempore corrupti. Corporis id dolorum tempore doloribus. Iusto ratione
          totam quis! Repellat laudantium illum quam ex deserunt, dolore
          deleniti provident commodi at eius a ipsa cum ullam suscipit. Labore
          assumenda natus architecto vitae minus minima eum, eaque nostrum et
          hic ducimus. Adipisci dolorum quasi nihil dolores, autem cupiditate
          illum, velit veritatis quae iste facere laudantium deleniti quas fuga
          aliquid eligendi libero molestiae praesentium molestias expedita
          consectetur ab suscipit qui? Neque, est. Accusamus ea delectus
          deserunt alias ut, voluptate dolore optio qui maxime distinctio, iste
          ipsam dolorem enim cupiditate vero odio eaque nemo, eius rem nesciunt
          nostrum impedit ab minus architecto! Deserunt? Veniam minima
          cupiditate repudiandae illo, molestiae inventore totam natus,
          obcaecati quibusdam reiciendis perspiciatis earum quos tempore nam
          voluptatibus, adipisci hic quo omnis modi voluptate magni amet.
          Praesentium sed rerum molestiae. Eveniet quidem facilis, ipsa eum sint
          incidunt quo itaque repellendus. Nemo eveniet officiis excepturi sint
          molestiae veritatis laudantium consectetur, perferendis omnis
          voluptates pariatur eos quod modi. Molestias corrupti id qui. Atque
          nihil at mollitia similique laborum quibusdam id libero dolore in,
          itaque culpa dignissimos. Minus tempore, impedit laudantium et
          pariatur exercitationem ipsam facilis aperiam quia culpa veritatis, ab
          alias. Beatae. Error atque architecto ex iusto fugit! Quas quidem
          libero laudantium sed doloremque officiis eius est unde autem, ad
          rerum excepturi dolore quo illo iste impedit ipsa nemo iure repellat
          placeat. Facere nam aspernatur accusantium! Aspernatur, doloribus
          natus totam, accusantium numquam inventore repellat velit expedita
          quibusdam itaque fuga, eos sequi architecto vitae nemo nulla illo
          nobis! Quisquam unde dolore ipsum optio. Ratione hic quisquam ut
          tempora, excepturi adipisci assumenda dolores recusandae? Molestias
          iusto animi aut ab ex vero magni vel consequuntur, natus nobis
          nesciunt at placeat, modi aliquam officiis non deserunt.
        </p>
      </div>
    </>
  );
}
