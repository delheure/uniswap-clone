import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "~/atoms/modal";

const Modal = () => {
  const [modalElement, setModal] = useRecoilState(modalState);
  const { pathname } = useRouter();

  useEffect(() => {
    if (!!modalElement) {
      setModal(null);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      <>{modalElement}</>
    </AnimatePresence>
  );
};

export default Modal;
