import Link from 'next/link';
import { ExternalLink, Label, SiteFooter, SiteHeader, Tag } from '@/components/ui';
import { profile, projects } from '@/lib/site';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="about" className="mx-auto max-w-5xl scroll-mt-16 px-6 pb-20 pt-20 md:pt-28">
          <div className="rise">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{profile.name}</h1>
            <p className="mt-4 text-xl text-neutral-900">{profile.headline}</p>
            <p className="mt-3 text-sm text-neutral-500">
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
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                    Personal Project
                  </p>
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
                  <p className="mt-6 text-sm font-medium text-neutral-900">
                    Read the write-up{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl scroll-mt-16 px-6 py-20">
          <Label>Contact</Label>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-3 max-w-xl text-neutral-600">
            I am open to internship opportunities. The best way to reach me is by email.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              {profile.email}
            </a>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.resume}>Resume</ExternalLink>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
