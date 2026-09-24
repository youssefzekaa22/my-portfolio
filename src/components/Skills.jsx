import { Section } from './ui.jsx';
import { BrandIcon } from './Icon.jsx';
import { skillGroups } from '../data/skills.js';

function Chip({ item }) {
  const hasIcon = Boolean(item.icon);
  return (
    <li
      className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm ${
        item.inProject ? 'border-signal/40 bg-signal/5 text-ink-50' : 'border-ink-600 bg-ink-900 text-ink-100'
      } ${hasIcon ? 'font-medium' : 'text-ink-200'}`}
    >
      {hasIcon && <BrandIcon name={item.icon} className="size-4 text-ink-200" />}
      {item.name}
      {item.inProject && (
        <>
          <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
          <span className="sr-only">(used in one of my projects)</span>
        </>
      )}
    </li>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical skills"
      intro="Grouped by what they do, with no made-up percentages. I'm at the start of my career, so the honest signal is what I've actually built."
    >
      <p className="mb-6 flex items-center gap-2 text-sm text-ink-300">
        <span className="size-2 rounded-full bg-signal" aria-hidden="true" />
        Used in one of the projects below
      </p>

      <dl className="divide-y divide-ink-700 border-y border-ink-700">
        {skillGroups.map((g) => (
          <div key={g.id} className="grid grid-cols-[minmax(0,1fr)] gap-4 py-7 md:grid-cols-[15rem_1fr] md:gap-10">
            <dt>
              <h3 className="text-lg font-semibold text-ink-50">{g.title}</h3>
              <p className="mt-1 text-sm text-ink-300">{g.blurb}</p>
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Chip key={item.name} item={item} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
