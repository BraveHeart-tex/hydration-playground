import { ClientOnlyWithDynamic } from '@/components/ClientOnlyWithDynamic';
import { ClientOnlyWithEffect } from '@/components/ClientOnlyWithEffect';
import { ComponentWithHydrationError } from '@/components/ComponentWithHydrationError';
import { Suspense } from 'react';
import { SelfCheckingComponent } from '@/components/SelfCheckingComponen';
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

    if (type === renderTypes.wrapperEffect) {
      return (
        <ClientOnlyWithEffect>
          <ComponentWithHydrationError />
        </ClientOnlyWithEffect>
      );
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

    if (type === renderTypes.selfClientCheck) {
      return <SelfCheckingComponent />;
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {type === renderTypes.default || type === renderTypes.suspense ? (
        <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-lg shadow-sm text-sm font-medium">
          ⚠️ Open the console or look at the error indicator on bottom-left to
          see hydration errors
        </span>
      ) : (
        <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-lg shadow-sm text-sm font-medium">
          No hydration errors expected
        </span>
      )}

      <div className="grid gap-4 w-full">
        <RenderingControls />
        {renderContent()}
      </div>
    </div>
  );
}
