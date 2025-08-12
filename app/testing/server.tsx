import { PropsWithChildren } from "react";

export async function ServerComponent({ children }: PropsWithChildren) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  return <div>{data?.title}</div>;
}
