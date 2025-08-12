'use client';

export function ComponentWithHydrationError() {
  const random = new Date().getTime();
  return (
    <div className="p-4 border-l-4 border-destructive bg-destructive/5 text-destructive font-mono text-sm shadow rounded">
      ⚠️ I am the troublemaking component —{' '}
      <span className="font-bold">{random}</span>
    </div>
  );
}
