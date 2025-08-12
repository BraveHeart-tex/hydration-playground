"use client";
import { RenderType, renderTypes } from "@/constants";
import { useSearchParams } from "next/navigation";

const baseClasses =
  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors";
const activeClasses = "bg-blue-600 text-white";
const inactiveClasses = "bg-gray-100 hover:bg-gray-200 text-gray-800";

export function RenderingControls() {
  const typeParam = useSearchParams().get("type") || renderTypes.default;

  const handleModeClick = (type: RenderType) => {
    window.location.href = `/?type=${type}`;
  };

  const getButtonClass = (type: RenderType) => {
    return `${baseClasses} ${
      typeParam === type ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <div className="flex items-center gap-2 flex-wrap justify-center">
      <button
        className={getButtonClass(renderTypes.default)}
        onClick={() => handleModeClick(renderTypes.default)}
      >
        Default with Errors
      </button>
      <button
        className={getButtonClass(renderTypes.wrapperEffect)}
        onClick={() => handleModeClick(renderTypes.wrapperEffect)}
      >
        Wrapper with useEffect
      </button>
      <button
        className={getButtonClass(renderTypes.wrapperEffectWithFallback)}
        onClick={() => handleModeClick(renderTypes.wrapperEffectWithFallback)}
      >
        Wrapper with useEffect & fallback
      </button>
      <button
        className={getButtonClass(renderTypes.wrapperDynamic)}
        onClick={() => handleModeClick(renderTypes.wrapperDynamic)}
      >
        Wrapper with dynamic import & <pre>ssr : false</pre>
      </button>
      <button
        className={getButtonClass(renderTypes.suspense)}
        onClick={() => handleModeClick(renderTypes.suspense)}
      >
        With Suspense
      </button>
      <button
        className={getButtonClass(renderTypes.selfClientCheck)}
        onClick={() => handleModeClick(renderTypes.selfClientCheck)}
      >
        With Self checking component
      </button>
    </div>
  );
}
