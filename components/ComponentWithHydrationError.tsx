'use client';

import {
  HYDRATION_ERROR_MODE_SEARCH_PARAM_KEY,
  HydrationErrorMode,
  HYDRATION_ERROR_MODES,
} from '@/constants';
import { useSearchParams } from 'next/navigation';

export function ComponentWithHydrationError() {
  const searchParams = useSearchParams();
  const errorMode: HydrationErrorMode =
    (searchParams.get(
      HYDRATION_ERROR_MODE_SEARCH_PARAM_KEY
    ) as HydrationErrorMode) || HYDRATION_ERROR_MODES.contentMismatch;

  // Browser API use only on client
  if (errorMode === HYDRATION_ERROR_MODES.browserApis) {
    // Use a browser API that breaks SSR/SSR hydration, e.g., localStorage
    return <BrowserApiErrorComponent />;
  }

  if (errorMode === HYDRATION_ERROR_MODES.invalidDomNesting) {
    // Return intentionally invalid DOM nesting, e.g. button inside button
    return <InvalidDomNestingErrorComponent />;
  }

  if (errorMode === HYDRATION_ERROR_MODES.contentMismatch) {
    // Content mismatch: content changes between server and client render
    return <ContentMismatchComponent />;
  }

  return (
    <div className="p-4 border-l-4 border-green-500 bg-green-100 text-green-700 font-mono text-sm shadow rounded">
      ✅ No hydration error mode selected
    </div>
  );
}

const BrowserApiErrorComponent = () => {
  const localStorageItem = localStorage.getItem('foo') ?? null;

  return (
    <div className="p-4 border-l-4 border-destructive bg-destructive/5 text-destructive font-mono text-sm shadow rounded">
      Using Local Storage API: localStorage item: {localStorageItem ?? 'null'}
    </div>
  );
};

const InvalidDomNestingErrorComponent = () => {
  return (
    <button className="p-4 border-l-4 border-destructive bg-destructive/5 text-destructive font-mono text-sm shadow rounded">
      <button>Invalid nested button within a button</button>
    </button>
  );
};

const ContentMismatchComponent = () => {
  const random = new Date().getTime();
  return (
    <div className="p-4 border-l-4 border-destructive bg-destructive/5 text-destructive font-mono text-sm shadow rounded">
      Content Mismatch:
      <span> {random}</span>
    </div>
  );
};
