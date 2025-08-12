'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RenderingType, RENDERING_TYPES } from '@/constants';
import { useSearchParams } from 'next/navigation';

export function RenderingControls() {
  const typeParam = useSearchParams().get('type') || RENDERING_TYPES.default;

  const handleModeClick = (type: RenderingType) => {
    const url = new URL(window.location.href);
    url.searchParams.set('type', type);
    url.pathname = window.location.pathname;
    window.location.href = url.toString();
  };

  const getButtonVariant = (type: RenderingType) => {
    return type === typeParam ? 'default' : 'outline';
  };

  return (
    <div className="flex flex-col gap-2">
      <Label>Change Solution Logic:</Label>
      <div className="flex items-center gap-2 flex-wrap">
        <Button
          variant={getButtonVariant(RENDERING_TYPES.default)}
          onClick={() => handleModeClick(RENDERING_TYPES.default)}
        >
          Default with Errors
        </Button>
        <Button
          variant={getButtonVariant(RENDERING_TYPES.wrapperEffectWithFallback)}
          onClick={() =>
            handleModeClick(RENDERING_TYPES.wrapperEffectWithFallback)
          }
        >
          Wrapper with useEffect & fallback
        </Button>
        <Button
          variant={getButtonVariant(RENDERING_TYPES.wrapperDynamic)}
          onClick={() => handleModeClick(RENDERING_TYPES.wrapperDynamic)}
        >
          Wrapper with dynamic import & <pre>ssr : false</pre>
        </Button>
        <Button
          variant={getButtonVariant(RENDERING_TYPES.suspense)}
          onClick={() => handleModeClick(RENDERING_TYPES.suspense)}
        >
          With Suspense
        </Button>
      </div>
    </div>
  );
}
