export default function HeaderSkeleton() {
  return (
    <header className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-200 animate-pulse">
      {/* Title skeleton */}
      <div className="h-8 bg-gray-200 rounded mb-2 w-3/4"></div>
      {/* Subtitle skeleton */}
      <div className="h-4 bg-gray-200 rounded mb-4 w-full"></div>

      {/* Stats skeleton */}
      <div className="flex gap-6">
        <div className="text-center">
          <div className="h-6 bg-gray-200 rounded mb-1 w-12"></div>
          <div className="h-4 bg-gray-200 rounded w-8"></div>
        </div>
        <div className="text-center">
          <div className="h-6 bg-gray-200 rounded mb-1 w-12"></div>
          <div className="h-4 bg-gray-200 rounded w-8"></div>
        </div>
        <div className="text-center">
          <div className="h-6 bg-gray-200 rounded mb-1 w-12"></div>
          <div className="h-4 bg-gray-200 rounded w-8"></div>
        </div>
      </div>
    </header>
  );
}
