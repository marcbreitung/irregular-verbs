import { useEffect, useState } from "react";

type ProgressBarProps = {
  value: number;
};

const progressColors = new Map<number, string>([
  [0, "#D74A2F"],
  [25, "#F3A75F"],
  [50, "#32C49C"],
  [75, "#298E7C"],
]);

const ProgressBar = ({ value }: ProgressBarProps) => {
  const [percentage, setPercentage] = useState(0);

  const getColor = (value: number) => {
    let color = "#F3A75F";
    progressColors.forEach((v, k) => {
      if (value >= k) {
        color = v;
      }
    });
    return color;
  };

  useEffect(() => {
    setPercentage(value >= 0 && value <= 100 && !Number.isNaN(value) ? value : 0);
  }, [value]);

  return (
    <div className="w-full bg-blue relative rounded-md overflow-hidden">
      <div
        className="bg-red absolute h-full"
        style={{ width: `${percentage}%`, backgroundColor: `${getColor(percentage)}` }}
      ></div>
      <div className="text-blue w-full text-center relative z-10 flex items-center justify-center">
        <span className="bg-lightYellow py-1/2 px-2 my-1 inline-block rounded-lg opacity-60 text-xs">
          {percentage.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
