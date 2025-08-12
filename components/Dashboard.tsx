import { Suspense } from "react";

// Simulate API calls with different delays
async function fetchUserProfile() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=64&width=64",
  };
}

async function fetchRecentActivity() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [
    { id: 1, action: "Created new project", time: "2 hours ago" },
    { id: 2, action: "Updated profile", time: "5 hours ago" },
    { id: 3, action: "Shared document", time: "1 day ago" },
  ];
}

async function fetchStats() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    projects: 12,
    collaborators: 8,
    files: 156,
  };
}

// Individual components that suspend
async function UserProfile() {
  const profile = await fetchUserProfile();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center gap-4">
        <img
          src={profile.avatar || "/placeholder.svg"}
          alt="User avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold">{profile.name}</h3>
          <p className="text-gray-600">{profile.email}</p>
        </div>
      </div>
    </div>
  );
}

async function RecentActivity() {
  const activities = await fetchRecentActivity();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
          >
            <span className="text-gray-800">{activity.action}</span>
            <span className="text-sm text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

async function StatsCards() {
  const stats = await fetchStats();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-blue-600">{stats.projects}</div>
        <div className="text-sm text-blue-800">Projects</div>
      </div>
      <div className="bg-green-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-green-600">
          {stats.collaborators}
        </div>
        <div className="text-sm text-green-800">Collaborators</div>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-purple-600">{stats.files}</div>
        <div className="text-sm text-purple-800">Files</div>
      </div>
    </div>
  );
}

// Skeleton components
function UserProfileSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="space-y-2">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-32"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
        </div>
      </div>
    </div>
  );
}

function RecentActivitySkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="h-6 bg-gray-200 rounded animate-pulse w-32 mb-4"></div>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex justify-between items-center py-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
            <div className="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsCardsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16 mx-auto"></div>
        </div>
      ))}
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="h-8 bg-gray-200 rounded animate-pulse w-48 mb-8"></div>
      <div className="space-y-6">
        <StatsCardsSkeleton />
        <UserProfileSkeleton />
        <RecentActivitySkeleton />
      </div>
    </div>
  );
}

// Main Dashboard component with nested Suspense boundaries
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Outer Suspense boundary - wraps the entire dashboard */}
      <Suspense fallback={<DashboardSkeleton />}>
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

          <div className="space-y-6">
            {/* Inner Suspense boundary for stats - loads fastest (1.5s) */}
            <Suspense fallback={<StatsCardsSkeleton />}>
              <StatsCards />
            </Suspense>

            {/* Inner Suspense boundary for user profile - loads in 2s */}
            <Suspense fallback={<UserProfileSkeleton />}>
              <UserProfile />
            </Suspense>

            {/* Inner Suspense boundary for activity - loads slowest (3s) */}
            <Suspense fallback={<RecentActivitySkeleton />}>
              <RecentActivity />
            </Suspense>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
