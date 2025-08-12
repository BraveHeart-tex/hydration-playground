'use client';

import AppLink from '@/components/PlaygroundLink';
import { PlaygroundRoute } from '@/constants';
import { PLAYGROUND_ROUTES } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems: {
  href: PlaygroundRoute;
  label: string;
}[] = [
  { href: PLAYGROUND_ROUTES.home, label: 'Overview' },
  {
    href: PLAYGROUND_ROUTES.clientOnlyRendering,
    label: 'Client Only Rendering',
  },
  {
    href: PLAYGROUND_ROUTES.independentSuspense,
    label: 'Independent Boundaries',
  },
  { href: PLAYGROUND_ROUTES.nestedSuspense, label: 'Nested Boundaries' },
  { href: PLAYGROUND_ROUTES.aboveTheFold, label: 'Above-the-Fold' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border fixed top-0 z-50 w-full bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold">
              Rendering Playground
            </Link>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <AppLink
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-primary/10 text-blue-500'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.label}
                </AppLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
