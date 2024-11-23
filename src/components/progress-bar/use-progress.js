import { useEffect, useState } from "react";

const getNewPercent = () => {
  return (
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
      100 +
    "%"
  );
};

export const useProgress = () => {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getNewPercent());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progress;
};
