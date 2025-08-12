'use client';

import { PropsWithChildren } from 'react';

export function ClientContainer({ children }: PropsWithChildren) {
  return (
    <div>
      I am the client container
      <div>
        {/* Try to replace children with <ServerComponent/> and look at the console */}
        {/* You might have to refresh the sandbox preview to see the errors */}
        {children}
      </div>
    </div>
  );
}
