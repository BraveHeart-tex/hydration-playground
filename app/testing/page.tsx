import { ClientContainer } from "./client";
import { ServerComponent } from "./server";

export default function Testing() {
  return (
    <ClientContainer>
      <ServerComponent />
    </ClientContainer>
  );
}
