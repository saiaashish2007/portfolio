import Link from 'next/link';
import { profile } from '@/lib/site';

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-500">{children}</p>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 font-mono text-[11px] text-neutral-700">
      {children}
    </span>
  );
}

export function ExternalLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const style = primary
    ? 'bg-neutral-900 text-white hover:bg-neutral-800'
    : 'border border-neutral-200 bg-white hover:bg-neutral-100';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-colors ${style}`}
    >
      {children}
      <span aria-hidden className="text-xs opacity-60">
        ↗
      </span>
    </a>
  );
}

const NAV = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="inline-block h-2 w-2 rounded-full bg-teal-600" />
          <span className="text-[15px] font-semibold tracking-tight">{profile.name}</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] text-neutral-500">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-neutral-900">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
