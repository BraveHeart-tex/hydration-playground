// Simulates a faster API call (1 second)
async function getFeedData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      id: 1,
      title: 'First Post',
      content:
        "This ItemFeed loaded in just 1 second and didn't wait for the Header!",
      author: 'Alice',
      timestamp: '2 minutes ago',
    },
    {
      id: 2,
      title: 'Second Post',
      content:
        'Notice how this content appeared before the header finished loading.',
      author: 'Bob',
      timestamp: '5 minutes ago',
    },
    {
      id: 3,
      title: 'Third Post',
      content:
        "This demonstrates that Suspense boundaries don't block sibling components.",
      author: 'Charlie',
      timestamp: '10 minutes ago',
    },
  ];
}

export default async function ItemFeed() {
  const items = await getFeedData();

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-primary/90 border-l-4 border-green-500 pl-4">
        Item Feed (Loaded in 1 second)
      </h3>

      <div className="grid gap-4">
        {items.map((item) => (
          <article
            key={item.id}
            className="bg-background rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h4 className="font-semibold text-primary/90 mb-2">{item.title}</h4>
            <p className="text-primary/70 mb-3">{item.content}</p>
            <div className="flex justify-between items-center text-sm text-primary/50">
              <span>By {item.author}</span>
              <span>{item.timestamp}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
