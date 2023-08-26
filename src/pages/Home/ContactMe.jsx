import { useEffect, useRef, useState } from "react";
import FormInput from "./FormInput";
import MagneticNav from "../../components/MagneticNav";
import MagneticBtn from "../../components/MagneticBtn";
import successLottie from "../../assets/svg/success.json";
import errorLottie from "../../assets/svg/error.json";
import { ScrollTrigger } from "gsap/all";
import MsgModal from "../../components/MsgModal";
import emailjs from "@emailjs/browser";
import SplitType from "split-type";
import { gsap } from "gsap";

export default function ContactMe() {
  let [statusMsg, setStatusMsg] = useState(true);
  let [showModal, setShowModal] = useState(false);
  let whichModalRef = useRef(null);
  let modalMessageRef = useRef(null);
  let scopeRef = useRef(null);
  let formRef = useRef(null);
  let messageInputRef = useRef(null);
  let messageLabelRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      let allLabels = gsap.utils.toArray(".contactMeLabel");
      let allInputs = gsap.utils.toArray(".icontactMeInputs");

      let splitLabelMessage = new SplitType(messageLabelRef.current);

      gsap.from(splitLabelMessage.chars, {
        opacity: 0,
        y: 60,
        ease: "Expo.easeOut",
        duration: 0.5,
        stagger: 0.02,
        scrollTrigger: {
          trigger: messageLabelRef.current,
          start: "top 85%",
          end: "bottom 0%",
        },
      });
      gsap.from(messageInputRef.current, {
        opacity: 0,
        y: 60,
        ease: "Expo.easeOut",
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: messageInputRef.current,
          start: "top 85%",
          end: "bottom 0%",
        },
      });

      let labelTl = gsap.timeline({
        scrollTrigger: {
          trigger: allLabels[0],
          start: "top 95%",
          end: "bottom 0%",
        },
      });
      let inputTl = gsap.timeline({
        scrollTrigger: {
          trigger: allInputs[0],
          start: "top 95%",
          end: "bottom 0%",
        },
      });

      allLabels.forEach((label) => {
        let splitLabel = new SplitType(label);
        labelTl.from(
          splitLabel.chars,
          {
            opacity: 0,
            y: 60,
            ease: "Expo.easeOut",
            duration: 0.5,
            stagger: 0.02,
          },
          "<0.35"
        );
      });
      allInputs.forEach((input) => {
        inputTl.from(
          input,
          {
            opacity: 0,
            y: 60,
            ease: "Expo.easeOut",
            duration: 1,
            delay: 0.1,
          },
          "<0.35"
        );
      });

      //
    }, scopeRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pkuydu7",
        "template_zwg1934",
        formRef.current,
        "_ousqTqpIB8N9reST"
      )
      .then(
        (result) => {
          setShowModal(true);
          setStatusMsg(false);
          whichModalRef.current = successLottie;
          modalMessageRef.current = "your message send :)";
        },
        (error) => {
          setShowModal(true);
          setStatusMsg(false);
          whichModalRef.current = errorLottie;
          modalMessageRef.current = "opps! somrthing went wrong :(";
        }
      );
    setTimeout(() => {
      setStatusMsg(true);
      setShowModal(false);
    }, 5000);
    e.target.reset();
  };

  return (
    <>
      <MsgModal
        animation={whichModalRef.current}
        showModal={showModal}
        statusMsg={statusMsg}
        message={modalMessageRef.current}
      />
      <div ref={scopeRef} className="col-12">
        <div className="wrapperContactMe">
          <form ref={formRef} onSubmit={sendEmail} className="contactMeForm">
            <FormInput
              id="nameInput"
              type="text"
              name="user_name"
              label="What's your name?"
              placeholder="John Doe"
            />
            <FormInput
              id="emailInput"
              type="email"
              name="user_email"
              label="What's your email?"
              placeholder="John@Doe.com"
            />
            <FormInput
              id="orgInput"
              type="text"
              name="org_name"
              label="What's the name of your organization?"
              placeholder="John & Doe ®"
            />
            <div className="wrapperLabelMessage">
              <label
                ref={messageLabelRef}
                className="messageLabel"
                htmlFor="msgInput"
              >
                Your message
              </label>
            </div>
            <textarea
              ref={messageInputRef}
              placeholder="hello ali can you help me with..."
              name="user_message"
              id="msgInput"
            ></textarea>
            <MagneticNav>
              <button type="submit" className="sendMeBtn">
                <MagneticBtn>
                  <span>Send it!</span>
                </MagneticBtn>
              </button>
            </MagneticNav>
          </form>
        </div>
      </div>
      <div className="col-12">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          ducimus dignissimos quam excepturi, natus, commodi, adipisci minima
          enim consectetur ad et tenetur necessitatibus? Sunt tempore architecto
          ex sed, facere perferendis! Laudantium ratione cum earum cupiditate
          quibusdam blanditiis reiciendis quos commodi provident maiores neque,
          reprehenderit dignissimos fugit. Totam sunt rem deleniti, quaerat,
          praesentium, a fugit rerum sit dolore debitis nemo molestias. Voluptas
          nam laudantium, earum dolorum, doloribus ducimus, perspiciatis saepe
          eos neque exercitationem ut incidunt officiis facere ullam. Laboriosam
          ratione, quidem consequatur voluptates aperiam, assumenda ipsa eveniet
          doloremque illum deleniti culpa. Nesciunt dicta libero cupiditate
          quisquam a voluptate ut veritatis quam numquam aspernatur iste id
          quasi unde, exercitationem sapiente pariatur quae minima iusto
          deleniti placeat porro alias nemo. Non, distinctio optio! Quibusdam,
          suscipit delectus. Cumque quisquam aperiam, similique rerum
          necessitatibus asperiores eligendi sequi molestias velit, nostrum eius
          repellat aliquid expedita corrupti. Eos ex nesciunt inventore delectus
          obcaecati placeat minima a hic? Voluptate dignissimos quae nemo quam,
          numquam itaque est eaque dolorem unde autem placeat dolor dicta
          similique corporis vel reprehenderit quia facere ducimus! Dignissimos
          numquam reiciendis exercitationem debitis labore modi enim. Quasi
          velit laborum sequi magni officiis dicta possimus, facilis illo
          magnam, expedita inventore autem similique, impedit laudantium animi.
          Nemo tempore aperiam iusto similique dicta impedit consequatur aliquid
          vitae atque possimus! Tempora aut distinctio laudantium nisi adipisci
          sit blanditiis facilis, fugit suscipit deleniti unde quos recusandae
          veniam voluptate? Officiis ratione sunt sapiente. Nihil quas iusto
          nemo velit quaerat deserunt. Dolore, earum. Maiores facere deleniti
          natus corrupti, illum nobis, laborum blanditiis obcaecati recusandae,
          nihil dolore hic et magnam repellat. Assumenda enim, nesciunt quo,
          tempore accusantium, officia ab modi facere nemo eligendi expedita.
          Soluta eligendi corporis asperiores sapiente id assumenda quis!
          Temporibus labore quo nisi illo rerum, ab nesciunt aliquam ipsa quod
          deserunt inventore magnam facilis officiis minus quidem ullam cumque
          vel dignissimos?
        </p>
      </div>
    </>
  );
}
