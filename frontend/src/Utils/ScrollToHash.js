import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  let location = useLocation();

  let hashElement = useMemo(() => {
    let hash = location.hash;
    const getElement = (str) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      let element = document.getElementById(getElement(hash));
      return element;
    } else {
      return null;
    }
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "instant",
        block: "center",
        inline: "nearest",
      });
    }
  }, [hashElement]);

  return null;
};

export default ScrollToHashElement;
