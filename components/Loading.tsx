"use client";
import { BarLoader } from "react-spinners";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type LoadingProps = {
  fullScreen?: boolean;
  active?: boolean;
  transitionMs?: number;
  color?: string;
  width?: number;
  height?: number;
};

export default function Loading({
  fullScreen = true,
  active = true,
  transitionMs = 200,
  color = "#111827",
  width = 220,
  height = 6,
}: LoadingProps) {
  const content = (
    <div className="flex flex-col items-center gap-3">
      <Image src="/signature.png" width={180} height={100} alt="Home" />
      <div aria-hidden="true">
        <BarLoader color={color} loading={active} width={width} height={height} />
      </div>
    </div>
  );

  if (!fullScreen) return content;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[9999] grid place-items-center"
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: transitionMs / 1000, ease: [0.4, 0, 0.2, 1] }}
          style={{
            backgroundColor: "rgba(255,255,255,0.90)",
            WebkitBackdropFilter: "blur(6px)",
            pointerEvents: "auto",
          }}
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  );
}