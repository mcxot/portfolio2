"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mouseNearTop, setMouseNearTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  // Track mouse position to show navbar when near top (desktop)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const threshold = 100;
      if (e.clientY <= threshold) {
        setMouseNearTop(true);
      } else {
        setMouseNearTop(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Touch swipe detection for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStart(e.touches[0].clientY);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEnd = e.changedTouches[0].clientY;
      const swipeDistance = touchStart - touchEnd;
      const threshold = 50;

      if (swipeDistance > threshold) {
        // Swipe up - hide navbar
        setVisible(false);
      } else if (swipeDistance < -threshold) {
        // Swipe down - show navbar
        setVisible(true);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStart]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          if (!mouseNearTop) {
            setVisible(false);
          }
        }
      }
    }
  });

  // Show navbar when mouse is near top - handled in useMotionValueEvent

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-4 md:top-10 inset-x-0 mx-auto border border-slate-700/50 rounded-full bg-slate-950/90 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 md:pl-8 py-2 items-center justify-center space-x-4",
            className
          )}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((navItem, idx: number) => (
              <a
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-slate-300 items-center flex space-x-1 hover:text-cyan-400 transition-colors"
                )}
              >
                <span className="text-sm">{navItem.name}</span>
              </a>
            ))}
            <a href="#contact" className="border text-sm font-medium relative border-slate-700 text-slate-300 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 hover:text-cyan-400 transition-all">
              <span>Contact</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px" />
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <span className="text-slate-300 text-sm font-medium mr-2">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-cyan-400 transition-colors p-1"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[4999] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[75%] max-w-sm bg-slate-900/95 backdrop-blur-md border-l border-slate-700/50 shadow-2xl z-[5001] md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-6">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6">
                  <ul className="space-y-2">
                    {navItems.map((navItem, idx: number) => (
                      <li key={`mobile-link-${idx}`}>
                        <a
                          href={navItem.link}
                          onClick={handleLinkClick}
                          className="block py-3 px-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all text-lg font-medium"
                        >
                          {navItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Contact Button */}
                  <div className="mt-8">
                    <a
                      href="#contact"
                      onClick={handleLinkClick}
                      className="block w-full text-center border border-slate-700 text-slate-300 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 transition-all font-medium"
                    >
                      Contact
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

