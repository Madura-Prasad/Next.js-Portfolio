import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-m font-bold"
        whileHover={{
          backgroundColor: [
            "#404258",
            "#474E68",
            "#50577A",
            "#6B728E",
            "#404258"
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        MP
      </MotionLink>
    </div>
  );
};

export default Logo;
