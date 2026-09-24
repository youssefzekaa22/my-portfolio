import { Section, LinkButton, Tag } from './ui.jsx';
import { BrandIcon, Icon } from './Icon.jsx';
import { automationProjects } from '../data/projects.js';

const stackIcon = { Linux: 'linux', Bash: 'bash' };

/** Backup script: what goes in and what comes out. */
function BackupFlow() {
  const box = 'rounded-md border border-ink-600 bg-ink-800 px-3 py-1.5 font-mono text-xs text-ink-100';
  return (
    <div
      role="img"
      aria-label="Diagram: a daily run triggers the Bash script, which produces organized backups and log files."
      className="flex flex-col items-start gap-2 rounded-lg border border-ink-700 bg-ink-950/60 p-5"
    >
      <div className="flex items-center gap-3">
        <span className={box}>daily run</span>
        <Icon name="arrowRight" className="size-4 text-ink-400" />
        <span className={`${box} border-signal/50 text-signal`}>Bash script</span>
      </div>
      <Icon name="arrowDown" className="ml-[7.6rem] size-4 text-ink-400" />
      <div className="flex flex-wrap gap-2">
        <span className={box}>organized backups</span>
        <span className={box}>backup logs</span>
      </div>
    </div>
  );
}

/** Toolkit: an illustrative session of the menu and its color-coded log levels. */
function ToolkitTerminal() {
  return (
    <figure>
      <div
        role="img"
        aria-label="Illustrative terminal output: a numbered menu of data operations followed by INFO, SUCCESS, WARNING and ERROR log lines."
        className="overflow-x-auto rounded-lg border border-ink-700 bg-ink-950/60 p-4 font-mono text-[12.5px] leading-6"
      >
        <div aria-hidden="true" className="min-w-max">
          <div className="text-ink-200">1) Count lines</div>
          <div className="text-ink-200">2) Extract CSV column</div>
          <div className="text-ink-200">3) Filter by pattern</div>
          <div className="text-ink-200">4) Statistics</div>
          <div className="text-ink-200">5) Merge files</div>
          <div className="text-ink-200">6) Remove duplicates</div>
          <div className="mt-2 text-sky-300">[INFO] Checking dependencies</div>
          <div className="text-signal">[SUCCESS] Column extracted</div>
          <div className="text-amber">[WARNING] Output file already exists</div>
          <div className="text-rose-400">[ERROR] Input file not found</div>
        </div>
      </div>
      <figcaption className="mt-2 text-xs text-ink-400">Illustrative output, not a recording.</figcaption>
    </figure>
  );
}

const visuals = { 'backup-script': <BackupFlow />, 'data-toolkit': <ToolkitTerminal /> };

export default function Automation() {
  return (
    <Section
      id="automation"
      title="Linux and automation projects"
      intro="Scripts and command-line tools where the point is reliability: validate first, log clearly, and repeat the same way every time."
      className="border-t border-ink-800"
    >
      <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-2">
        {automationProjects.map((p) => (
          <article key={p.id} aria-labelledby={`${p.id}-name`} className="flex flex-col rounded-xl border border-ink-600 bg-ink-900/60 p-6 sm:p-8">
            <p className="text-sm text-ink-300">{p.kind}</p>
            <h3 id={`${p.id}-name`} className="mt-1 text-2xl font-bold tracking-tight text-ink-50">
              {p.name}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-200">{p.summary}</p>

            <div className="mt-6">{visuals[p.id]}</div>

            <ul className="mt-6 space-y-2 text-[15px] leading-relaxed text-ink-200">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <Icon name="check" className="mt-1 size-4 shrink-0 text-signal" />
                  {pt}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
              <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                {p.stack.map((t) => (
                  <li key={t}>
                    <Tag icon={stackIcon[t] && <BrandIcon name={stackIcon[t]} className="size-3.5" />}>{t}</Tag>
                  </li>
                ))}
              </ul>
              <LinkButton href={p.repo} icon={<BrandIcon name="github" className="size-4" />}>
                GitHub
              </LinkButton>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
