import { Suspense } from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Above the fold - Critical functionality that users need immediately */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-emerald-600">LocalMarket</h1>
            <div className="flex gap-4">
              <button className="text-gray-600 hover:text-gray-900">
                Sign In
              </button>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                Post Ad
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full px-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <select className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>All Categories</option>
              <option>Vehicles</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Real Estate</option>
            </select>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700">
              Search
            </button>
          </div>
        </div>
      </header>

      <section className="bg-gray-50 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto">
            {[
              '🚗 Vehicles',
              '💻 Electronics',
              '🛋️ Furniture',
              '🏠 Real Estate',
              '💼 Jobs',
              '🔧 Services',
            ].map((category, index) => (
              <button
                key={index}
                className="flex-shrink-0 bg-white px-6 py-3 rounded-lg border hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Below the fold - Enhanced content that can load progressively */}
      <Suspense fallback={<UrgentListingsSkeleton />}>
        <UrgentListingsSection />
      </Suspense>

      <Suspense fallback={<FeaturedListingsSkeleton />}>
        <FeaturedListingsSection />
      </Suspense>

      <Suspense fallback={<RecentSalesSkeleton />}>
        <RecentSalesSection />
      </Suspense>
    </div>
  );
}

async function UrgentListingsSection() {
  // Simulate 1 second load time - fastest below-the-fold content
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const urgentListings = [
    {
      title: 'Moving Sale - Everything Must Go!',
      price: '$50-500',
      location: 'San Francisco, CA',
      urgent: 'Ends Today',
    },
    {
      title: '2020 Honda Accord - Quick Sale',
      price: '$22,000',
      location: 'Oakland, CA',
      urgent: 'Price Drop',
    },
    {
      title: 'iPhone 15 Pro - Unopened',
      price: '$950',
      location: 'San Jose, CA',
      urgent: 'First Come',
    },
  ];

  return (
    <section className="py-12 bg-red-50 border-l-4 border-red-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl">⚡</span>
          <h2 className="text-2xl font-bold text-red-700">Urgent Listings</h2>
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
            Time Sensitive
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {urgentListings.map((listing, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border-2 border-red-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{listing.title}</h3>
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  {listing.urgent}
                </span>
              </div>
              <p className="text-2xl font-bold text-emerald-600 mb-2">
                {listing.price}
              </p>
              <p className="text-gray-500 text-sm">{listing.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function FeaturedListingsSection() {
  // Simulate 3 second load time
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const listings = [
    {
      title: '2019 Honda Civic',
      price: '$18,500',
      location: 'San Francisco, CA',
      image: '🚗',
    },
    {
      title: 'MacBook Pro 16"',
      price: '$2,200',
      location: 'New York, NY',
      image: '💻',
    },
    {
      title: 'Vintage Leather Sofa',
      price: '$850',
      location: 'Austin, TX',
      image: '🛋️',
    },
    {
      title: 'iPhone 14 Pro',
      price: '$899',
      location: 'Los Angeles, CA',
      image: '📱',
    },
    {
      title: 'Mountain Bike',
      price: '$650',
      location: 'Denver, CO',
      image: '🚴',
    },
    {
      title: 'Gaming Setup',
      price: '$1,200',
      location: 'Seattle, WA',
      image: '🎮',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Listings
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
                {listing.image}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
                <p className="text-2xl font-bold text-emerald-600 mb-2">
                  {listing.price}
                </p>
                <p className="text-gray-500 text-sm">{listing.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function RecentSalesSection() {
  // Simulate 1.5 second load time
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const sales = [
    { item: '2020 Tesla Model 3', soldFor: '$35,000', timeAgo: '2 hours ago' },
    { item: 'Antique Dining Set', soldFor: '$1,200', timeAgo: '5 hours ago' },
    { item: 'Gaming Laptop', soldFor: '$1,800', timeAgo: '1 day ago' },
    { item: 'Designer Handbag', soldFor: '$450', timeAgo: '1 day ago' },
    { item: 'Exercise Equipment', soldFor: '$300', timeAgo: '2 days ago' },
    { item: 'Vintage Guitar', soldFor: '$2,500', timeAgo: '3 days ago' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Sales</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sales.map((sale, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border rounded-lg"
            >
              <div>
                <h3 className="font-semibold">{sale.item}</h3>
                <p className="text-gray-500 text-sm">{sale.timeAgo}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-emerald-600">
                  {sale.soldFor}
                </p>
                <p className="text-xs text-gray-500">SOLD</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedListingsSkeleton() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-12 animate-pulse"></div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-48 bg-gray-200 animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentSalesSkeleton() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-8 bg-gray-200 rounded w-32 mx-auto mb-12 animate-pulse"></div>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 border rounded-lg"
            >
              <div>
                <div className="h-5 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              </div>
              <div className="text-right">
                <div className="h-6 bg-gray-200 rounded w-16 mb-1 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-10 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UrgentListingsSkeleton() {
  return (
    <section className="py-12 bg-red-50 border-l-4 border-red-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-7 bg-gray-200 rounded w-40 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm border-2 border-red-200 p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
