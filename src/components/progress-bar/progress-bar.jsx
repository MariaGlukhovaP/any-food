import { useProgress } from "./use-progress";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div
      style={{
        width: progress,
        backgroundColor: "red",
        position: "sticky",
        height: "30px",
        top: 0,
      }}
    ></div>
  );
};
