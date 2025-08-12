"use client";
import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

export const ClientOnlyWithDynamic = dynamic(
  () => Promise.resolve(({ children }: PropsWithChildren) => children),
  {
    ssr: false,
    loading: () => (
      <div
        className="p-4 border-l-4 border-transparent bg-gray-100 text-gray-400 font-mono text-sm shadow rounded"
        aria-hidden="true"
      >
        ⏳ Loading component...
      </div>
    ),
  }
);
