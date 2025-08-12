import { ClientOnlyWithDynamic } from '@/components/ClientOnlyWithDynamic';
import { ComponentWithHydrationError } from '@/components/ComponentWithHydrationError';
import { Suspense } from 'react';
import { RenderingControls } from '@/components/RenderingControls';
import { RenderType, renderTypes } from '@/constants';
import { ClientOnlyWithFallback } from '@/components/ClientOnlyWithFallback';

export default async function Home(props: {
  searchParams: Promise<{
    type?: RenderType;
  }>;
}) {
  const searchParams = await props.searchParams;
  const type = searchParams.type || 'default';

  const renderContent = () => {
    if (type === renderTypes.default) {
      return <ComponentWithHydrationError />;
    }

    if (type === renderTypes.wrapperDynamic) {
      return (
        <ClientOnlyWithDynamic>
          <ComponentWithHydrationError />
        </ClientOnlyWithDynamic>
      );
    }

    if (type === renderTypes.suspense) {
      return (
        <Suspense>
          <ComponentWithHydrationError />
        </Suspense>
      );
    }

    if (type === renderTypes.wrapperEffectWithFallback) {
      return (
        <ClientOnlyWithFallback
          fallback={
            <div
              className="p-4 border-l-4 border-transparent bg-gray-100 text-gray-400 font-mono text-sm shadow rounded"
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
    <div className="max-w-6xl mx-auto p-8 min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          React Hydration Error Demonstration
        </h1>
        <p className="text-lg text-muted-foreground">
          This page showcases different rendering patterns and highlights where
          hydration errors may occur. Use the controls below to explore
          scenarios.
        </p>
      </div>
      {type === renderTypes.default || type === renderTypes.suspense ? (
        <span className="inline-block px-4 py-2 rounded-lg shadow-sm text-sm font-medium bg-destructive/10 text-destructive">
          ⚠️ Open the console or look at the error indicator on bottom-left to
          see hydration errors
        </span>
      ) : (
        <span className="inline-block px-4 py-2 rounded-lg shadow-sm text-sm font-medium bg-green-100 text-green-800">
          No hydration errors expected
        </span>
      )}
      <RenderingControls />
      {renderContent()}
    </div>
  );
}
