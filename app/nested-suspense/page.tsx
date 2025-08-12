import Dashboard from '@/components/Dashboard';

export default function NestedSuspensePage() {
  return (
    <div className="bg-primary/5 max-w-6xl mx-auto p-8 w-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Nested Suspense Boundaries</h1>
        <p className="text-primary/60 max-w-2xl mx-auto">
          Components load progressively with cascading fallbacks: Stats (1.5s) →
          Profile (2s) → Activity (3s)
        </p>
      </div>
      <Dashboard />
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
        <h3 className="font-semibold text-green-800 mb-2">
          What&apos;s happening:
        </h3>
        <ul className="text-green-700 text-sm space-y-1">
          <li>• Outer Suspense boundary wraps the entire dashboard</li>
          <li>• Inner boundaries handle individual sections</li>
          <li>• Creates a progressive loading experience</li>
          <li>• Faster components appear first, slower ones follow</li>
        </ul>
      </div>
    </div>
  );
}
