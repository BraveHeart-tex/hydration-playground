import LandingPage from "@/components/LandingPage";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto p-8 text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Above-the-Fold Rendering
          </h2>
          <p className="text-gray-600">
            Hero section renders immediately, below-the-fold content loads
            progressively
          </p>
        </div>
        <LandingPage />
      </div>
    </main>
  );
}
