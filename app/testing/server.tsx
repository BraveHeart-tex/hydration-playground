export async function ServerComponent() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();

  return <div>{data?.title}</div>;
}
