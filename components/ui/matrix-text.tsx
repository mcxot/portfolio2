"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

interface MatrixTextProps {
  text: string;
  className?: string;
}

export const MatrixText = ({ text, className = "" }: MatrixTextProps) => {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  function getRandomChar() {
    return characters[Math.floor(Math.random() * characters.length)];
  }

  useEffect(() => {
    if (currentIndex >= text.length) {
      setIsComplete(true);
      return;
    }

    const targetChar = text[currentIndex];
    let scrambleCount = 0;
    const maxScrambles = 3;

    const scrambleInterval = setInterval(() => {
      if (scrambleCount < maxScrambles && targetChar !== " ") {
        setDisplayText((prev) => {
          const newText = [...prev];
          newText[currentIndex] = getRandomChar();
          return newText;
        });
        scrambleCount++;
      } else {
        setDisplayText((prev) => {
          const newText = [...prev];
          newText[currentIndex] = targetChar;
          return newText;
        });
        clearInterval(scrambleInterval);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 40);

    return () => clearInterval(scrambleInterval);
  }, [currentIndex, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!isComplete) return;
    
    const glitchInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * text.length);
      if (text[randomIndex] === " ") return;
      
      setDisplayText((prev) => {
        const newText = [...prev];
        newText[randomIndex] = getRandomChar();
        return newText;
      });
      
      setTimeout(() => {
        setDisplayText(text.split(""));
      }, 80);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, [isComplete, text]);

  return (
    <div className="relative inline-block overflow-hidden">
      {/* Base gradient text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={className}
        style={{
          background: "linear-gradient(to right, #22d3ee, #3b82f6, #a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {displayText.map((char, index) => (
          <span key={index}>{char}</span>
        ))}
        {!isComplete && (
          <span 
            className="inline-block w-[4px] h-[0.7em] ml-2 align-middle transition-opacity duration-100"
            style={{
              backgroundColor: "#22d3ee",
              opacity: showCursor ? 1 : 0,
            }}
          />
        )}
      </motion.h1>
      
      {/* Shiny sweep - clipped to text shape */}
      {isComplete && (
        <motion.h1
          aria-hidden="true"
          className={`${className} absolute inset-0 pointer-events-none`}
          animate={{ backgroundPosition: ["200% 0", "-200% 0", "200% 0", "-200% 0", "-200% 0"] }}
          transition={{
            repeat: 2,
            repeatDelay: 2,
            duration: 1.6,
            times: [0, 0.4, 0.5, 0.9, 1],
            ease: "easeInOut",
          }}
          style={{
            background: `linear-gradient(
              90deg, 
              transparent 0%, 
              transparent 40%, 
              rgba(255,255,255,0.8) 50%, 
              transparent 60%, 
              transparent 100%
            )`,
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {displayText.join("")}
        </motion.h1>
      )}
    </div>
  );
};
