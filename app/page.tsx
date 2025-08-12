import { DemoCard } from '@/components/DemoCard';
import { PLAYGROUND_ROUTES } from '@/constants';

const overviewItems = [
  {
    title: 'Independent Boundaries',
    description:
      'See how components wrapped in separate Suspense boundaries render independently without blocking each other.',
    href: PLAYGROUND_ROUTES.independentSuspense,
  },
  {
    title: 'Nested Boundaries',
    description:
      'Explore nested Suspense boundaries that create progressive loading experiences with cascading fallbacks.',
    href: PLAYGROUND_ROUTES.nestedSuspense,
  },
  {
    title: 'Above-the-Fold Rendering',
    description:
      'Learn how to prioritize critical above-the-fold content while progressively loading below-the-fold sections.',
    href: PLAYGROUND_ROUTES.aboveTheFold,
  },
];

export default async function OverviewPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Rendering Demonstrations
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore different patterns and behaviors of React Suspense boundaries
          with interactive examples and real-time loading demonstrations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {overviewItems.map((item, index) => (
          <DemoCard
            key={index}
            title={item.title}
            description={item.description}
            href={item.href}
          />
        ))}
      </div>

      <div className="mt-12 bg-muted rounded-lg p-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">
          Key Concepts Demonstrated
        </h2>
        <ul className="text-muted-foreground space-y-1 text-sm">
          <li>• Suspense boundaries don&apos;t block sibling components</li>
          <li>• Nested boundaries create progressive loading experiences</li>
          <li>• Above-the-fold content should render immediately</li>
          <li>• Proper skeleton fallbacks improve perceived performance</li>
        </ul>
      </div>
    </div>
  );
}
