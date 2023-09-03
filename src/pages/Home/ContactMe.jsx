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

let inputArray = [
  {
    id: "nameInput",
    type: "text",
    name: "user_name",
    label: "What's your name?",
    placeholder: "John Doe",
  },
  {
    id: "emailInput",
    type: "email",
    name: "user_email",
    label: "What's your email?",
    placeholder: "John@Doe.com",
  },
  {
    id: "orgInput",
    type: "text",
    name: "org_name",
    label: "What's the name of your organization?",
    placeholder: "John & Doe ®",
  },
];

export default function ContactMe({ mask }) {
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
          toggleActions: "restart none none reverse",
          start: "top 80%",
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
          toggleActions: "restart none none reverse",
          start: "top 85%",
          end: "bottom 0%",
        },
      });

      let labelTl = gsap.timeline({
        scrollTrigger: {
          trigger: allLabels[0],
          toggleActions: "restart none none reverse",
          start: "top 95%",
          end: "bottom 0%",
        },
      });
      let inputTl = gsap.timeline({
        scrollTrigger: {
          trigger: allInputs[0],
          start: "top 95%",
          toggleActions: "restart none none reverse",
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
        mask={mask}
        animation={whichModalRef.current}
        showModal={showModal}
        statusMsg={statusMsg}
        message={modalMessageRef.current}
      />
      <div
        style={mask ? { visibility: "hidden" } : { visibility: "visible" }}
        ref={scopeRef}
        className="col-12"
      >
        <div className="wrapperContactMe">
          <form ref={formRef} onSubmit={sendEmail} className="contactMeForm">
            {inputArray.map((input) => {
              return (
                <FormInput
                  id={input.id}
                  type={input.type}
                  name={input.name}
                  label={input.label}
                  placeholder={input.placeholder}
                />
              );
            })}
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
    </>
  );
}
