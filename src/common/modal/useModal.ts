import { ReactNode } from "react";
import { useRecoilState } from "recoil";

import { modalState } from "~/atoms/modal";

const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const openModal = (children: ReactNode) => {
    setModal(children);
  };
  const closeModal = () => {
    setModal(null);
  };

  return {
    isOpen: !!modal,
    openModal,
    closeModal,
  };
};

export default useModal;
