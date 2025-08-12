export default function ItemFeedSkeleton() {
  return (
    <section className="space-y-4 animate-pulse">
      {/* Section title skeleton */}
      <div className="flex items-center">
        <div className="w-1 h-6 bg-gray-200 rounded mr-4"></div>
        <div className="h-6 bg-gray-200 rounded w-48"></div>
      </div>

      {/* Feed items skeleton */}
      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <article key={i} className="bg-white rounded-lg shadow-md p-6">
            {/* Title skeleton */}
            <div className="h-5 bg-gray-200 rounded mb-2 w-1/3"></div>
            {/* Content skeleton */}
            <div className="space-y-2 mb-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
            {/* Author and timestamp skeleton */}
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
