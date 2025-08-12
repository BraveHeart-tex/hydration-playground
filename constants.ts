export const renderTypes = {
  default: "default",
  wrapperEffect: "wrapperEffect",
  wrapperDynamic: "wrapperDynamic",
  suspense: "suspense",
  selfClientCheck: "selfClientCheck",
  wrapperEffectWithFallback: "wrapperEffectWithFallback"
} as const;

export type RenderType = (typeof renderTypes)[keyof typeof renderTypes];
