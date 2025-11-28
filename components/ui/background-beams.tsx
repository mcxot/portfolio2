"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
  ];

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute h-full w-full pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, index) => {
          const duration = 10 + (index * 5);
          return (
            <motion.path
              key={`path-${index}`}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="1"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          );
        })}
        <defs>
          {[0, 1, 2].map((index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`linearGradient-${index}`}
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
            >
              <stop stopColor="#06b6d4" stopOpacity="0"></stop>
              <stop stopColor="#06b6d4"></stop>
              <stop offset="1" stopColor="#22d3ee" stopOpacity="0"></stop>
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};

