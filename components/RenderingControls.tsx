'use client';
import { Button } from '@/components/ui/button';
import { RenderType, renderTypes } from '@/constants';
import { useSearchParams } from 'next/navigation';

export function RenderingControls() {
  const typeParam = useSearchParams().get('type') || renderTypes.default;

  const handleModeClick = (type: RenderType) => {
    const url = new URL(window.location.href);
    url.searchParams.set('type', type);
    url.pathname = window.location.pathname;
    window.location.href = url.toString();
  };

  const getButtonVariant = (type: RenderType) => {
    return type === typeParam ? 'default' : 'outline';
  };

  return (
    <div className="flex items-center gap-2 flex-wrap justify-center">
      <Button
        variant={getButtonVariant(renderTypes.default)}
        onClick={() => handleModeClick(renderTypes.default)}
      >
        Default with Errors
      </Button>
      <Button
        variant={getButtonVariant(renderTypes.wrapperEffectWithFallback)}
        onClick={() => handleModeClick(renderTypes.wrapperEffectWithFallback)}
      >
        Wrapper with useEffect & fallback
      </Button>
      <Button
        variant={getButtonVariant(renderTypes.wrapperDynamic)}
        onClick={() => handleModeClick(renderTypes.wrapperDynamic)}
      >
        Wrapper with dynamic import & <pre>ssr : false</pre>
      </Button>
      <Button
        variant={getButtonVariant(renderTypes.suspense)}
        onClick={() => handleModeClick(renderTypes.suspense)}
      >
        With Suspense
      </Button>
    </div>
  );
}
