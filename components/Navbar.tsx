'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/client-only-rendering', label: 'Client Only Rendering' },
  { href: '/independent', label: 'Independent Boundaries' },
  { href: '/nested', label: 'Nested Boundaries' },
  { href: '/above-fold', label: 'Above-the-Fold' },
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
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-primary/10 text-blue-500'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
