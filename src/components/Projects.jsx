import { Section, LinkButton, Tag } from './ui.jsx';
import { BrandIcon, Icon } from './Icon.jsx';
import ArchitectureDiagram from './ArchitectureDiagram.jsx';
import { featuredProject as p } from '../data/projects.js';

const stackIcon = { Flask: 'flask', PostgreSQL: 'postgresql', Docker: 'docker', 'Docker Compose': 'docker' };

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured project"
      intro="The project that shows the most DevOps thinking so far: a small application, packaged the way a production service should be."
    >
      <article aria-labelledby="featured-name" className="rounded-xl border border-ink-600 bg-ink-900/60 p-6 sm:p-9">
        <header className="max-w-3xl">
          <h3 id="featured-name" className="text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl">
            {p.name}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-ink-200">{p.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {p.stack.map((t) => (
              <li key={t}>
                <Tag icon={<BrandIcon name={stackIcon[t]} className="size-3.5" />}>{t}</Tag>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton variant="primary" href={p.repo} icon={<BrandIcon name="github" className="size-4" />}>
              GitHub repository
            </LinkButton>
            <LinkButton href={p.docs} icon={<Icon name="book" className="size-4" />}>
              Documentation
            </LinkButton>
            {p.demo && (
              <LinkButton href={p.demo} icon={<Icon name="globe" className="size-4" />}>
                Live demo
              </LinkButton>
            )}
          </div>
        </header>

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ArchitectureDiagram />
          </div>

          <div>
            <h4 className="text-lg font-semibold text-ink-50">What it demonstrates</h4>
            <dl className="mt-4 divide-y divide-ink-700 border-y border-ink-700">
              {p.concepts.map((c) => (
                <div key={c.name} className="py-2.5">
                  <dt className="font-mono text-[13px] font-medium text-signal">{c.name}</dt>
                  <dd className="mt-0.5 text-[15px] leading-relaxed text-ink-200">{c.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </article>
    </Section>
  );
}
