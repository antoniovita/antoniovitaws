"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import Loading from "@/components/Loading";

type RouteDelayGateProps = {
  delayMs?: number;
  label?: string;
  showOnRouteChange?: boolean;
  transitionMs?: number;
};

export default function RouteDelayGate({
  delayMs = 5000,
  showOnRouteChange = true,
  transitionMs = 200,
}: RouteDelayGateProps) {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(delayMs > 0);
  const [active, setActive] = useState(delayMs > 0);
  const delayTimeoutRef = useRef<number | null>(null);
  const exitTimeoutRef = useRef<number | null>(null);
  const hasShownRef = useRef(false);

  const normalizedDelayMs = useMemo(() => {
    if (!Number.isFinite(delayMs)) return 0;
    return Math.max(0, Math.floor(delayMs));
  }, [delayMs]);

  const normalizedTransitionMs = useMemo(() => {
    if (!Number.isFinite(transitionMs)) return 0;
    return Math.max(0, Math.floor(transitionMs));
  }, [transitionMs]);

  useEffect(() => {
    if (!showOnRouteChange && hasShownRef.current) return;
    if (!showOnRouteChange) hasShownRef.current = true;

    if (delayTimeoutRef.current !== null) window.clearTimeout(delayTimeoutRef.current);
    if (exitTimeoutRef.current !== null) window.clearTimeout(exitTimeoutRef.current);

    if (normalizedDelayMs <= 0) {
      queueMicrotask(() => setActive(false));
      if (normalizedTransitionMs <= 0) queueMicrotask(() => setShouldRender(false));
      else exitTimeoutRef.current = window.setTimeout(() => setShouldRender(false), normalizedTransitionMs);
      return;
    }

    queueMicrotask(() => setShouldRender(true));
    window.requestAnimationFrame(() => setActive(true));

    delayTimeoutRef.current = window.setTimeout(() => {
      setActive(false);
      exitTimeoutRef.current = window.setTimeout(() => setShouldRender(false), normalizedTransitionMs);
    }, normalizedDelayMs);

    return () => {
      if (delayTimeoutRef.current !== null) window.clearTimeout(delayTimeoutRef.current);
      if (exitTimeoutRef.current !== null) window.clearTimeout(exitTimeoutRef.current);
    };
  }, [pathname, normalizedDelayMs, normalizedTransitionMs, showOnRouteChange]);

  if (!shouldRender) return null;
  return <Loading fullScreen active={active} transitionMs={normalizedTransitionMs} />;
}
