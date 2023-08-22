import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

export default function WhatIDo() {
  let whatIdoRef = useRef(null);
  let titleRef = useRef(null);
  let scopeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const descSplit = new SplitType(whatIdoRef.current);

    let ctx = gsap.context(() => {
      gsap.from(descSplit.chars, {
        opacity: 0.3,
        stagger: 0.3,
        duration: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: whatIdoRef.current,
          start: "top 85%",
          end: "center 45%",
          scrub: 2,
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
        <div className="wrapperWhatIdo">
          <p ref={titleRef} className="titleWhatIdo">
            what i do
          </p>
          <p ref={whatIdoRef} className="textWhatIDo">
            I Build Scalable <span>Websites</span> From Scratch That Fit
            Seamlessly With design. My Focus Is On <span>Micro Animations</span>{" "}
            , Transitions And Interaction. For Content Management I Use Kirby
            CMS.
          </p>
        </div>
      </div>
      <div className="col-12">
        <p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            quidem, aperiam enim placeat sed, sunt modi quasi consectetur
            laborum iusto molestiae esse. Ducimus quaerat consectetur eaque, nam
            quia minima aperiam.
          </span>
          <span>
            Vel, nobis veniam. Deleniti, iusto odit natus culpa suscipit sunt
            repudiandae obcaecati temporibus eaque architecto aspernatur
            accusamus aperiam debitis possimus facilis itaque recusandae hic
            molestiae omnis aliquid sint distinctio quisquam.
          </span>
          <span>
            Repellendus aspernatur, nobis voluptatum sequi deserunt aperiam rem
            tempore fugiat consectetur. Eum beatae explicabo placeat voluptatem
            laboriosam iste laborum, amet et aperiam excepturi quam eaque minima
            aliquam aut, debitis expedita.
          </span>
          <span>
            Ex repellendus, eos magni rem minus distinctio ut quas voluptas
            debitis cupiditate error, ducimus, nesciunt laboriosam? Cum tempore
            in distinctio aperiam sequi itaque, pariatur iure id sed sint?
            Possimus, minus!
          </span>
          <span>
            Reprehenderit nemo vel voluptatum voluptate obcaecati! Atque velit,
            nostrum eveniet aspernatur veritatis quia sed culpa maiores
            accusantium voluptates saepe pariatur, obcaecati quisquam provident,
            molestiae quod doloribus impedit minus nesciunt modi?
          </span>
        </p>
      </div>
      <div className="col-12">
        <p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            quidem, aperiam enim placeat sed, sunt modi quasi consectetur
            laborum iusto molestiae esse. Ducimus quaerat consectetur eaque, nam
            quia minima aperiam.
          </span>
          <span>
            Vel, nobis veniam. Deleniti, iusto odit natus culpa suscipit sunt
            repudiandae obcaecati temporibus eaque architecto aspernatur
            accusamus aperiam debitis possimus facilis itaque recusandae hic
            molestiae omnis aliquid sint distinctio quisquam.
          </span>
          <span>
            Repellendus aspernatur, nobis voluptatum sequi deserunt aperiam rem
            tempore fugiat consectetur. Eum beatae explicabo placeat voluptatem
            laboriosam iste laborum, amet et aperiam excepturi quam eaque minima
            aliquam aut, debitis expedita.
          </span>
          <span>
            Ex repellendus, eos magni rem minus distinctio ut quas voluptas
            debitis cupiditate error, ducimus, nesciunt laboriosam? Cum tempore
            in distinctio aperiam sequi itaque, pariatur iure id sed sint?
            Possimus, minus!
          </span>
          <span>
            Reprehenderit nemo vel voluptatum voluptate obcaecati! Atque velit,
            nostrum eveniet aspernatur veritatis quia sed culpa maiores
            accusantium voluptates saepe pariatur, obcaecati quisquam provident,
            molestiae quod doloribus impedit minus nesciunt modi?
          </span>
        </p>
      </div>
      <div className="col-12">
        <p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            quidem, aperiam enim placeat sed, sunt modi quasi consectetur
            laborum iusto molestiae esse. Ducimus quaerat consectetur eaque, nam
            quia minima aperiam.
          </span>
          <span>
            Vel, nobis veniam. Deleniti, iusto odit natus culpa suscipit sunt
            repudiandae obcaecati temporibus eaque architecto aspernatur
            accusamus aperiam debitis possimus facilis itaque recusandae hic
            molestiae omnis aliquid sint distinctio quisquam.
          </span>
          <span>
            Repellendus aspernatur, nobis voluptatum sequi deserunt aperiam rem
            tempore fugiat consectetur. Eum beatae explicabo placeat voluptatem
            laboriosam iste laborum, amet et aperiam excepturi quam eaque minima
            aliquam aut, debitis expedita.
          </span>
          <span>
            Ex repellendus, eos magni rem minus distinctio ut quas voluptas
            debitis cupiditate error, ducimus, nesciunt laboriosam? Cum tempore
            in distinctio aperiam sequi itaque, pariatur iure id sed sint?
            Possimus, minus!
          </span>
          <span>
            Reprehenderit nemo vel voluptatum voluptate obcaecati! Atque velit,
            nostrum eveniet aspernatur veritatis quia sed culpa maiores
            accusantium voluptates saepe pariatur, obcaecati quisquam provident,
            molestiae quod doloribus impedit minus nesciunt modi?
          </span>
        </p>
      </div>
      <div className="col-12">
        <p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            quidem, aperiam enim placeat sed, sunt modi quasi consectetur
            laborum iusto molestiae esse. Ducimus quaerat consectetur eaque, nam
            quia minima aperiam.
          </span>
          <span>
            Vel, nobis veniam. Deleniti, iusto odit natus culpa suscipit sunt
            repudiandae obcaecati temporibus eaque architecto aspernatur
            accusamus aperiam debitis possimus facilis itaque recusandae hic
            molestiae omnis aliquid sint distinctio quisquam.
          </span>
          <span>
            Repellendus aspernatur, nobis voluptatum sequi deserunt aperiam rem
            tempore fugiat consectetur. Eum beatae explicabo placeat voluptatem
            laboriosam iste laborum, amet et aperiam excepturi quam eaque minima
            aliquam aut, debitis expedita.
          </span>
          <span>
            Ex repellendus, eos magni rem minus distinctio ut quas voluptas
            debitis cupiditate error, ducimus, nesciunt laboriosam? Cum tempore
            in distinctio aperiam sequi itaque, pariatur iure id sed sint?
            Possimus, minus!
          </span>
          <span>
            Reprehenderit nemo vel voluptatum voluptate obcaecati! Atque velit,
            nostrum eveniet aspernatur veritatis quia sed culpa maiores
            accusantium voluptates saepe pariatur, obcaecati quisquam provident,
            molestiae quod doloribus impedit minus nesciunt modi?
          </span>
        </p>
      </div>
      <div className="col-12">
        <p>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
            quidem, aperiam enim placeat sed, sunt modi quasi consectetur
            laborum iusto molestiae esse. Ducimus quaerat consectetur eaque, nam
            quia minima aperiam.
          </span>
          <span>
            Vel, nobis veniam. Deleniti, iusto odit natus culpa suscipit sunt
            repudiandae obcaecati temporibus eaque architecto aspernatur
            accusamus aperiam debitis possimus facilis itaque recusandae hic
            molestiae omnis aliquid sint distinctio quisquam.
          </span>
          <span>
            Repellendus aspernatur, nobis voluptatum sequi deserunt aperiam rem
            tempore fugiat consectetur. Eum beatae explicabo placeat voluptatem
            laboriosam iste laborum, amet et aperiam excepturi quam eaque minima
            aliquam aut, debitis expedita.
          </span>
          <span>
            Ex repellendus, eos magni rem minus distinctio ut quas voluptas
            debitis cupiditate error, ducimus, nesciunt laboriosam? Cum tempore
            in distinctio aperiam sequi itaque, pariatur iure id sed sint?
            Possimus, minus!
          </span>
          <span>
            Reprehenderit nemo vel voluptatum voluptate obcaecati! Atque velit,
            nostrum eveniet aspernatur veritatis quia sed culpa maiores
            accusantium voluptates saepe pariatur, obcaecati quisquam provident,
            molestiae quod doloribus impedit minus nesciunt modi?
          </span>
        </p>
      </div>
    </>
  );
}
