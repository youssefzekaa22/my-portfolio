import { BrandIcon, Icon } from './Icon.jsx';
import { LinkButton } from './ui.jsx';
import Terminal from './Terminal.jsx';
import { profile } from '../data/profile.js';

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-14 px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:pb-20">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-ink-600 bg-ink-900/80 px-3.5 py-1.5 text-sm text-ink-100">
            <span className="running-dot size-2 rounded-full bg-amber" aria-hidden="true" />
            {profile.status}
          </p>

          <h1 id="hero-title" className="mt-7 text-5xl font-extrabold leading-[1.02] tracking-tight text-ink-50 sm:text-7xl">
            {profile.shortName}
            <span className="mt-2 block text-3xl font-semibold tracking-tight text-signal sm:text-4xl">
              {profile.role}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-200 sm:text-xl">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <LinkButton variant="primary" href="#projects" external={false} icon={<Icon name="arrowDown" className="size-4" />}>
              View Projects
            </LinkButton>
            <LinkButton href={profile.github} arrow={false} icon={<BrandIcon name="github" className="size-4" />}>
              GitHub
            </LinkButton>
            <LinkButton href={profile.linkedin} arrow={false} icon={<BrandIcon name="linkedin" className="size-4" />}>
              LinkedIn
            </LinkButton>
            <LinkButton href="#contact" external={false} icon={<Icon name="mail" className="size-4" />}>
              Contact Me
            </LinkButton>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-ink-300">
            <Icon name="pin" className="size-4 text-ink-400" />
            {profile.location}. Open to junior DevOps, cloud, and internship opportunities.
          </p>
        </div>

        <Terminal />
      </div>
    </section>
  );
}
