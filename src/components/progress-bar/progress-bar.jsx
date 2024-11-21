import { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [width, setWidth] = useState("0");

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const cunrrentScroll = document.documentElement.scrollTop;
      const fullScroll = scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${(cunrrentScroll / fullScroll) * 100}%`;

      setWidth(scrolled);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        width,
        backgroundColor: "red",
        position: "sticky",
        height: "30px",
        top: 0,
      }}
    ></div>
  );
};
