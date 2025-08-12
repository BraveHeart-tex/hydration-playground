import { ClientOnlyWithDynamic } from '@/components/ClientOnlyWithDynamic';
import { ComponentWithHydrationError } from '@/components/ComponentWithHydrationError';
import { Suspense } from 'react';
import { RenderingControls } from '@/components/RenderingControls';
import {
  HydrationErrorMode,
  HYDRATION_ERROR_MODES,
  RenderingType,
  RENDERING_TYPES,
} from '@/constants';
import { ClientOnlyWithFallback } from '@/components/ClientOnlyWithFallback';
import HydrationErrorModeSelector from '@/components/HydrationErrorModeSelector';
import { HydrationErrorMessage } from '@/components/HydrationErrorMessage';

export default async function Home(props: {
  searchParams: Promise<{
    type?: RenderingType;
    hydrationErrorMode?: HydrationErrorMode;
  }>;
}) {
  const searchParams = await props.searchParams;
  const type = searchParams.type || 'default';
  const errorMode =
    searchParams.hydrationErrorMode || HYDRATION_ERROR_MODES.contentMismatch;

  const renderContent = () => {
    if (type === RENDERING_TYPES.default) {
      return <ComponentWithHydrationError />;
    }

    if (type === RENDERING_TYPES.wrapperDynamic) {
      return (
        <ClientOnlyWithDynamic>
          <ComponentWithHydrationError />
        </ClientOnlyWithDynamic>
      );
    }

    if (type === RENDERING_TYPES.suspense) {
      return (
        <Suspense>
          <ComponentWithHydrationError />
        </Suspense>
      );
    }

    if (type === RENDERING_TYPES.wrapperEffectWithFallback) {
      return (
        <ClientOnlyWithFallback
          fallback={
            <div
              className="p-4 border-l-4 border-transparent bg-muted text-muted-foreground font-mono text-sm shadow rounded"
              aria-hidden="true"
            >
              ⏳ Loading component...
            </div>
          }
        >
          <ComponentWithHydrationError />
        </ClientOnlyWithFallback>
      );
    }

    return 'Unsupported type';
  };

  return (
    <div className="max-w-6xl mx-auto p-8 grid gap-8">
      <div className="text-center max-w-2xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Hydration Error Demo
        </h1>
        <p className="text-lg text-muted-foreground">
          This page showcases different rendering patterns and highlights where
          hydration errors may occur. Use the controls below to explore
          scenarios.
        </p>
      </div>

      <div className="max-w-xl w-full space-y-4">
        <HydrationErrorModeSelector />
        <HydrationErrorMessage errorMode={errorMode} type={type} />
      </div>

      <RenderingControls />

      {renderContent()}

      {errorMode === HYDRATION_ERROR_MODES.invalidDomNesting && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 m-8 prose prose-purple max-w-none space-y-2">
          <h3 className="font-semibold text-purple-800 mb-2">
            What&apos;s happening:
          </h3>
          <p>
            React detects invalid HTML nesting (like a <code>{'<button>'}</code>{' '}
            inside another <code>{'<button>'}</code>) through a development-time
            DOM tree validation layer in its renderer, not from the browser’s
            own HTML parser.
          </p>
          <p>
            React’s reconciler runs a{' '}
            <code>&quot;validateDOMNesting&quot;</code> check every time it
            creates an element.
          </p>
          <p>
            <strong>Module:</strong> validateDOMNesting.js (inside react-dom)
          </p>
          <ul className="text-purple-700 text-sm space-y-1 list-disc list-inside">
            <li>React maintains a stack of open HTML tags as it renders.</li>
            <li>
              For each new element, it consults a set of rules derived from the
              HTML spec.
            </li>
            <li>
              If the new element is not allowed as a descendant of the current
              stack’s active elements, it logs a warning to the console.
            </li>
          </ul>

          <p>
            <strong>
              Why React needs this check instead of relying on the browser?
            </strong>
          </p>

          <p>
            Browsers will silently &quot;fix&quot; invalid nesting by
            auto-closing or rearranging tags, but that breaks hydration.
          </p>

          <p>
            In SSR + hydration, if the server rendered{' '}
            <code>{'<button><button>…</button></button>'}</code> and the browser
            auto-fixes it, the DOM structure won’t match React’s expected
            virtual DOM tree, causing hydration warnings or errors.
          </p>

          <p>
            React’s validator lets developers catch these mismatches early,
            before they cause rendering mismatches in production.
          </p>

          <p>
            <strong>When hydration runs:</strong>
          </p>

          <p>
            If the HTML on the page is already invalid and the browser has
            “corrected” it, React’s hydration algorithm will see different DOM
            nodes than it expected.
          </p>

          <p>This triggers hydration mismatch warnings like:</p>

          <ul>
            <li>
              &quot;Text content does not match server-rendered HTML&quot;
            </li>
            <li>
              &quot;Expected server HTML to contain a matching{' '}
              <code>{'<button>'}</code>…&quot;
            </li>
          </ul>

          <p>Invalid nesting is one of the easiest ways to cause this.</p>
        </div>
      )}
    </div>
  );
}
