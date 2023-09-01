import { motion, AnimatePresence } from "framer-motion";
import Lottie from "react-lottie";
import "./style.scss";

export default function MsgModal({
  animation,
  showModal,
  statusMsg,
  message,
  mask,
}) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        style={mask ? { visibility: "hidden" } : { visibility: "visible" }}
        key={showModal}
        initial={{ opacity: 0, x: 100, zIndex: -1 }}
        animate={showModal && { opacity: 1, x: 0, zIndex: 2 }}
        exit={{ opacity: 0, x: 100, zIndex: -1 }}
        transition={{ type: "spring" }}
        className="wrapper-modal"
      >
        <Lottie
          options={defaultOptions}
          height={60}
          width={60}
          isStopped={false}
          isPaused={statusMsg}
        />
        <p>{message}</p>
      </motion.div>
    </AnimatePresence>
  );
}
