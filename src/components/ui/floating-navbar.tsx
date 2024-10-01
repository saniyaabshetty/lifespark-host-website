"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { UrlObject } from "url";

export const FloatingNav = ({
  navItems,
  className,
  brandLogo,
  brandLink,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    subItems?: {
      name: string;
      link: string;
    }[];
  }[];
  className?: string;
  brandLogo: string;
  brandLink: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -10,
          opacity: visible ? 1 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x mx-auto border dark:border-emerald-900/[0.2] rounded-full dark:bg-white bg-white shadow-[0px_2px_3px_-1px_rgba(255,255,255,0.1),0px_1px_0px_0px_rgba(255,255,255,0.02),0px_0px_0px_1px_rgba(255,255,25,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 ",
          className
        )}
      >
        <Link href={brandLink} className="flex items-center pr-5">
          <img src={brandLogo} alt="Brand Logo" className="h-8 w-auto" />
        </Link>
        {navItems.map((navItem: any, idx: number) => (
          <div key={`link=${idx}`} className="relative">
            {navItem.subItems ? (
              <>
                <button
                  onClick={toggleDropdown}
                  className={cn(
                    "relative dark:text-neutral-350 items-center pr-5 flex space-x-1 text-emerald-900 dark:hover:text-emerald-600 hover:text-neutral-500 focus:outline-none"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden sm:block text-sm">{navItem.name}</span>
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md border border-gray-200">
                    {navItem.subItems.map((subItem: { link: string | UrlObject; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, subIdx: any) => (
                      <li key={`subItem=${subIdx}`}>
                        <Link
                          href={subItem.link}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-350 items-center pr-5 flex space-x-1 text-emerald-900 dark:hover:text-emerald-600 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            )}
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
