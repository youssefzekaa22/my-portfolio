import { Section } from './ui.jsx';
import { BrandIcon, Icon } from './Icon.jsx';
import { focusItems } from '../data/focus.js';

export default function Focus() {
  return (
    <Section
      id="focus"
      title="Currently building with"
      intro="These are what I'm learning and practicing in my internship labs right now. I'm not claiming professional experience with them yet."
      className="border-t border-ink-800 bg-ink-900/40"
    >
      <ul className="grid overflow-hidden rounded-xl border border-ink-600 bg-ink-950 sm:grid-cols-2">
        {focusItems.map((item) => (
          <li key={item.name} className="flex items-start gap-4 border-b border-ink-700 p-5 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2):nth-child(odd)]:border-b-0">
            <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-md border border-ink-600 bg-ink-900 text-ink-100">
              {item.icon ? (
                <BrandIcon name={item.icon} className="size-5" />
              ) : (
                <Icon name={item.glyph || 'cloud'} className="size-5" />
              )}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-ink-50">{item.name}</h3>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-amber">
                  <span className="running-dot size-1.5 rounded-full bg-amber" aria-hidden="true" />
                  in training
                </span>
              </div>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-300">{item.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
