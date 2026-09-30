import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, Label, SiteFooter, SiteHeader, Tag } from '@/components/ui';
import { getProject, projects } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: `${project.name} — Sai Bharadwaj`, description: project.tagline };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-12">
        <Link href="/#projects" className="font-mono text-xs text-neutral-500 hover:text-neutral-900">
          ← All projects
        </Link>

        <header className="rise mt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
            Personal Project
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{project.name}</h1>
          <p className="mt-4 text-xl leading-snug text-neutral-600">{project.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((l, i) => (
              <ExternalLink key={l.href} href={l.href} primary={i === 0}>
                {l.label}
              </ExternalLink>
            ))}
          </div>
          {project.demoLogin && (
            <p className="mt-4 font-mono text-xs text-neutral-500">
              Demo login: <span className="text-neutral-800">{project.demoLogin.user}</span> /{' '}
              <span className="text-neutral-800">{project.demoLogin.password}</span>
            </p>
          )}
        </header>

        <div className="mt-12 grid grid-cols-3 gap-3">
          {project.highlights.map((h) => (
            <div key={h.label} className="rounded-xl border border-neutral-200 p-4">
              <p className="text-xl font-semibold tracking-tight md:text-2xl">{h.value}</p>
              <p className="mt-1 text-xs leading-snug text-neutral-500">{h.label}</p>
            </div>
          ))}
        </div>

        <section className="mt-14">
          <Label>Overview</Label>
          <p className="mt-3 text-[17px] leading-relaxed text-neutral-700">{project.summary}</p>
        </section>

        <section className="mt-12">
          <Label>The problem</Label>
          <p className="mt-3 text-[17px] leading-relaxed text-neutral-700">{project.problem}</p>
        </section>

        <section className="mt-12">
          <Label>What I built</Label>
          <ul className="mt-4 space-y-4">
            {project.built.map((b) => (
              <li key={b} className="flex gap-3 leading-relaxed text-neutral-700">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <Label>Tech stack</Label>
          <dl className="mt-4 divide-y divide-neutral-200 rounded-xl border border-neutral-200">
            {project.stack.map((g) => (
              <div key={g.group} className="grid gap-2 p-4 sm:grid-cols-[140px_1fr] sm:gap-6">
                <dt className="text-sm font-medium text-neutral-500">{g.group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {g.items.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <Link
          href={`/projects/${next.slug}`}
          className="group mt-16 flex items-center justify-between rounded-xl border border-neutral-200 p-6 transition-colors hover:bg-neutral-50"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">Next project</p>
            <p className="mt-1 text-lg font-semibold">{next.name}</p>
          </div>
          <span className="text-xl text-neutral-900 transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
