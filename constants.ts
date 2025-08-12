import { ValueOf } from '@/lib/types';

export const RENDERING_TYPES = {
  default: 'default',
  wrapperDynamic: 'wrapperDynamic',
  suspense: 'suspense',
  wrapperEffectWithFallback: 'wrapperEffectWithFallback',
} as const;

export const HYDRATION_ERROR_MODES = {
  invalidDomNesting: 'invalidDomNesting',
  contentMismatch: 'contentMismatch',
  browserApis: 'browserApis',
} as const;

export const HYDRATION_ERROR_MODE_SEARCH_PARAM_KEY =
  'hydrationErrorMode' as const;

export const PLAYGROUND_ROUTES = {
  overview: '/',
  aboveTheFold: '/above-the-fold',
  hydrationErrors: '/hydration-errors',
  independentSuspense: '/independent-suspense',
  nestedSuspense: '/nested-suspense',
} as const;

export type PlaygroundRoute = ValueOf<typeof PLAYGROUND_ROUTES>;

export type HydrationErrorMode = ValueOf<typeof HYDRATION_ERROR_MODES>;

export type RenderingType = ValueOf<typeof RENDERING_TYPES>;
