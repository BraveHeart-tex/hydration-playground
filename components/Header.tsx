// Simulates a slow API call (3 seconds)
async function getHeaderData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    title: "Welcome to Our Platform",
    subtitle:
      "This header took 3 seconds to load, but didn't block the ItemFeed below!",
    stats: {
      users: "10,000+",
      posts: "50,000+",
      likes: "1M+",
    },
  };
}

export default async function Header() {
  const data = await getHeaderData();

  return (
    <header className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.title}</h2>
      <p className="text-gray-600 mb-4">{data.subtitle}</p>

      <div className="flex gap-6 text-sm">
        <div className="text-center">
          <div className="font-bold text-blue-600">{data.stats.users}</div>
          <div className="text-gray-500">Users</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-green-600">{data.stats.posts}</div>
          <div className="text-gray-500">Posts</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-red-600">{data.stats.likes}</div>
          <div className="text-gray-500">Likes</div>
        </div>
      </div>
    </header>
  );
}
