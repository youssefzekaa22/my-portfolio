import { Section, Tag } from './ui.jsx';
import { Icon } from './Icon.jsx';
import { journey } from '../data/journey.js';
import { useInView } from '../hooks/useInView.js';

const statusStyle = {
  passed: { label: 'passed', text: 'text-signal', ring: 'border-signal bg-signal/10 text-signal' },
  running: { label: 'in progress', text: 'text-amber', ring: 'border-amber bg-amber/10' },
  next: { label: 'next', text: 'text-ink-300', ring: 'border-dashed border-ink-500 bg-ink-900' },
};

function Node({ status }) {
  const s = statusStyle[status];
  return (
    <span className={`relative z-10 grid size-9 shrink-0 place-items-center rounded-full border-2 ${s.ring}`}>
      {status === 'passed' && <Icon name="check" className="size-4" />}
      {status === 'running' && <span className="running-dot size-2.5 rounded-full bg-amber" />}
    </span>
  );
}

// Connector to the next stage: solid where work is done, dashed where it is still ahead.
function connector(stage, next) {
  if (stage.status === 'passed') return 'bg-signal';
  if (next?.status === 'next') return 'pipe-dashed';
  return 'bg-amber/70';
}

export default function Journey() {
  const [ref, seen] = useInView(0.2);

  return (
    <Section
      id="journey"
      title="From computer science to DevOps"
      intro="Laid out like a pipeline: what is finished, what is running now, and what comes next."
      className="border-y border-ink-800 bg-ink-900/40"
    >
      <ol ref={ref} className={`${seen ? 'in-view' : ''} lg:grid lg:grid-cols-4 lg:gap-x-8`}>
        {journey.map((stage, i) => {
          const s = statusStyle[stage.status];
          const last = i === journey.length - 1;
          return (
            <li key={stage.id} className="relative pb-12 pl-14 last:pb-0 lg:pb-0 lg:pl-0">
              {/* node */}
              <div className="absolute left-0 top-0 lg:static">
                <Node status={stage.status} />
              </div>
              {/* connector */}
              {!last && (
                <span
                  aria-hidden="true"
                  className={`pipe absolute left-[17px] top-9 bottom-0 w-px lg:left-11 lg:right-[-2rem] lg:top-[17px] lg:bottom-auto lg:h-px lg:w-auto ${connector(stage, journey[i + 1])}`}
                />
              )}

              <div className="lg:mt-6">
                <p className="flex items-center gap-3 font-mono text-xs">
                  <span className="text-ink-300">{stage.when}</span>
                  <span className={s.text}>{s.label}</span>
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-snug text-ink-50">{stage.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-300">{stage.text}</p>
                {stage.tools && (
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools in this stage">
                    {stage.tools.map((t) => (
                      <li key={t}>
                        <Tag>{t}</Tag>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
