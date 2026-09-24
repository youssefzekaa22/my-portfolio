import { Section } from './ui.jsx';
import { education as e } from '../data/profile.js';

export default function Education() {
  return (
    <Section id="education" title="Education" className="border-t border-ink-800">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-2 md:gap-16">
        <div className="border-l-2 border-signal pl-6">
          <p className="font-mono text-sm text-ink-300">Graduated {e.year}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink-50">{e.degree}</h3>
          <p className="mt-2 text-lg text-ink-200">{e.school}</p>
        </div>
        <div className="border-l-2 border-ink-600 pl-6">
          <p className="text-sm text-ink-300">Graduation project</p>
          <h3 className="mt-2 text-xl font-semibold text-ink-50">{e.project.title}</h3>
          <p className="mt-2 max-w-md leading-relaxed text-ink-200">{e.project.description}</p>
        </div>
      </div>
    </Section>
  );
}
