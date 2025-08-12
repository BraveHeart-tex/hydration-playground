import LandingPage from '@/components/LandingPage';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto p-8 mb-8">
      <div className="text-center p-8 mb-4">
        <h1 className="text-3xl font-bold mb-2">Above-the-Fold Rendering</h1>
        <p className="text-primary/60 max-w-2xl mx-auto">
          Critical navigation and search render immediately. Below-the-fold
          content loads progressively.
        </p>
      </div>
      <LandingPage />
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 m-8">
        <h3 className="font-semibold text-purple-800 mb-2">
          What&apos;s happening:
        </h3>
        <ul className="text-purple-700 text-sm space-y-1">
          <li>• Search bar and navigation render immediately (no Suspense)</li>
          <li>• Critical functionality is available instantly</li>
          <li>• Below-the-fold sections load progressively</li>
          <li>• Improves perceived performance and Core Web Vitals</li>
        </ul>
      </div>
    </div>
  );
}
