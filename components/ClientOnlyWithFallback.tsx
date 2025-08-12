"use client";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

export function ClientOnlyWithFallback({
  children,
  fallback = null,
}: PropsWithChildren<{ fallback: ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return fallback;
  }

  return children;
}
