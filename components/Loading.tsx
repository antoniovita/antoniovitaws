
"use client";

import { BarLoader } from "react-spinners";
import Image from "next/image";

type LoadingProps = {
  label?: string;
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
      <Image src="/sign.png" width={180} height={100} alt="Home" />
      <div aria-hidden="true">
        <BarLoader color={color} loading={active} width={width} height={height} />
      </div>
    </div>
  );

  if (!fullScreen) return content;

  return (
    <div
      className="fixed inset-0 z-9999 grid place-items-center transition-opacity ease-out"
      style={{
        opacity: active ? 1 : 0,
        backgroundColor: active ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0)",
        backdropFilter: active ? "blur(6px)" : "blur(0px)",
        WebkitBackdropFilter: active ? "blur(6px)" : "blur(0px)",
        transitionDuration: `${transitionMs}ms`,
        pointerEvents: active ? "auto" : "none",
      }}
    >
      {content}
    </div>
  );
}
