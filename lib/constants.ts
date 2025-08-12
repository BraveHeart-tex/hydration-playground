export const PLAYGROUND_ROUTES = {
  aboveTheFold: '/above-the-fold',
  basicHydration: '/basic-hydration',
  clientOnlyRendering: '/client-only-rendering',
  independentSuspense: '/independent-suspense',
  nestedSuspense: '/nested-suspense',
} as const;

export type PlaygroundRoute =
  (typeof PLAYGROUND_ROUTES)[keyof typeof PLAYGROUND_ROUTES];
