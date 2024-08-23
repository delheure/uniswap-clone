import { useEffect } from "react";

const usePreventBodyScroll = () => {
  const initScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const originalScrollY = window.scrollY;
    document.body.style.inset = `-${originalScrollY}px 0 0`;

    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.add("overlay");
    }

    return () => {
      document.body.style.inset = ``;

      if (htmlElement) {
        htmlElement.classList.remove("overlay");
      }

      window.scrollTo(0, originalScrollY);
    };
  }, []);

  return { initScroll };
};

export default usePreventBodyScroll;
