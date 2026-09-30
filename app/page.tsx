import Link from 'next/link';
import { ExternalLink, Label, SiteFooter, SiteHeader, Tag } from '@/components/ui';
import { experience, profile, projects } from '@/lib/site';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-6 pb-20 pt-20 md:pt-28">
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-teal-800">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
              Open to internships
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Hi, I’m {profile.name.split(' ')[0]}.{' '}
              <span className="font-serif font-normal italic text-teal-700">{profile.headline}</span>
            </h1>
            <p className="mt-6 font-mono text-xs text-neutral-500">
              {profile.school} · {profile.graduation}
            </p>
            <div className="mt-8 max-w-2xl space-y-4 text-[17px] leading-relaxed text-neutral-600">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <ExternalLink href={profile.resume} primary>
                Resume
              </ExternalLink>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 border-t border-neutral-200 bg-neutral-50/60">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <Label>Projects</Label>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Things I’ve built</h2>
            <p className="mt-3 max-w-xl text-neutral-600">
              Each project has a full write-up: the problem, what I built, the tech stack, and links to
              the source and live demo.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                      {p.context}
                    </p>
                    <p className="shrink-0 font-mono text-[11px] text-neutral-400">{p.date}</p>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-neutral-600">{p.tagline}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack
                      .flatMap((g) => g.items)
                      .slice(0, 5)
                      .map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                  </div>
                  <p className="mt-6 text-sm font-medium text-teal-700">
                    Read the write-up{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
          <Label>Experience</Label>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Where I’ve worked</h2>
          <ol className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {experience.map((r) => (
              <li key={r.company} className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:gap-8">
                <p className="font-mono text-xs text-neutral-500">{r.dates}</p>
                <div>
                  <p className="font-semibold">
                    {r.title} <span className="font-normal text-neutral-500">· {r.company}</span>
                  </p>
                  <p className="mt-1.5 leading-relaxed text-neutral-600">{r.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="scroll-mt-16 border-t border-neutral-200 bg-neutral-900 text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">Contact</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Hiring for an internship?{' '}
              <span className="font-serif font-normal italic text-teal-300">I’d love to talk.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
              >
                {profile.email}
              </a>
              {[
                { label: 'LinkedIn', href: profile.linkedin },
                { label: 'GitHub', href: profile.github },
                { label: 'Resume', href: profile.resume },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-neutral-700 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-800"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
