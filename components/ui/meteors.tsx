import { cn } from "@/utils/cn";
import clsx from "clsx";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] -mt-7",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[10px] before:h-[10px] before:bg-gradient-to-b before:from-[#e4e4da] before:to-[#c92f2f]",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (800 - -600) + -600) + "px",
            animationDelay: Math.random() * (0.9 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (160 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
