import Header from '@/components/Header';
import HeaderSkeleton from '@/components/HeaderSkeleton';
import ItemFeed from '@/components/ItemFeed';
import ItemFeedSkeleton from '@/components/ItemFeedSkeleton';
import { Suspense } from 'react';

export default function SuspensePage() {
  return (
    <main className="min-h-screen bg-primary/5 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Suspense Boundary Demo</h1>
          <p className="text-primary/60">
            Watch how components render independently - ItemFeed appears first,
            Header loads after
          </p>
        </div>

        {/* Header wrapped in Suspense - takes 3 seconds to load */}
        <Suspense fallback={<HeaderSkeleton />}>
          <Header />
        </Suspense>

        <Suspense fallback={<ItemFeedSkeleton />}>
          <ItemFeed />
        </Suspense>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8">
          <h3 className="font-semibold text-yellow-800 mb-2">
            What&apos;s happening:
          </h3>
          <ul className="text-yellow-700 text-sm space-y-1">
            <li>• ItemFeed loads in 1 second and renders immediately</li>
            <li>• Header takes 3 seconds but doesn&apos;t block ItemFeed</li>
            <li>• Each Suspense boundary operates independently</li>
            <li>• Users see content as soon as it&apos;s ready</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
