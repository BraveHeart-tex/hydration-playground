"use client";

import { useEffect, useState } from "react";
import { ComponentWithHydrationError } from "./ComponentWithHydrationError";

export function SelfCheckingComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ComponentWithHydrationError />;
}
