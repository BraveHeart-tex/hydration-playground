import { ValueOf } from '@/lib/types';

export const renderTypes = {
  default: 'default',
  wrapperDynamic: 'wrapperDynamic',
  suspense: 'suspense',
  wrapperEffectWithFallback: 'wrapperEffectWithFallback',
} as const;

// TODO: Set content and description to trigger different hydration errors in different ways within showcase components
export const hydrationErrorModes = {
  invalidDomNesting: 'invalidDomNesting',
  contentMismatch: 'contentMismatch',
  browserApis: 'browserApis',
  environmentDependentRendering: 'environmentDependentRendering',
} as const;

export const PLAYGROUND_ROUTES = {
  home: '/',
  aboveTheFold: '/above-the-fold',
  basicHydration: '/basic-hydration',
  clientOnlyRendering: '/client-only-rendering',
  independentSuspense: '/independent-suspense',
  nestedSuspense: '/nested-suspense',
} as const;

export type PlaygroundRoute = ValueOf<typeof PLAYGROUND_ROUTES>;

export type HydrationErrorMode = ValueOf<typeof hydrationErrorModes>;

export type RenderType = ValueOf<typeof renderTypes>;
