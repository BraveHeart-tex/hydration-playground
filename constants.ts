export const renderTypes = {
  default: 'default',
  wrapperDynamic: 'wrapperDynamic',
  suspense: 'suspense',
  wrapperEffectWithFallback: 'wrapperEffectWithFallback',
} as const;

export type RenderType = (typeof renderTypes)[keyof typeof renderTypes];
