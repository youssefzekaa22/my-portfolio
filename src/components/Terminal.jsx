import { useTypedLines } from '../hooks/useTypedLines.js';

// A short session that mirrors the shape of the Job Application Tracker stack.
const session = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'youssef: junior devops engineer', tone: 'plain' },
  { type: 'cmd', text: 'docker compose up -d' },
  { type: 'out', text: 'Network  app_default   Created', tone: 'ok' },
  { type: 'out', text: 'Volume   pgdata        Created', tone: 'ok' },
  { type: 'out', text: 'Container db           Healthy', tone: 'ok' },
  { type: 'out', text: 'Container web          Started', tone: 'ok' },
  { type: 'cmd', text: 'cat learning.txt' },
  { type: 'out', text: 'kubernetes  terraform  ansible  aws', tone: 'warn' },
];

const tones = { plain: 'text-ink-200', ok: 'text-ink-200', warn: 'text-amber' };

export default function Terminal() {
  const { visible, done } = useTypedLines(session);
  const last = visible.length - 1;

  return (
    <figure className="w-full">
      <div
        role="img"
        aria-label="Terminal session: whoami, then docker compose up creating a network, a volume, a healthy database and a web service, then a list of tools currently being learned."
        className="overflow-hidden rounded-lg border border-ink-600 bg-ink-900 shadow-2xl shadow-black/40"
      >
        <div className="flex items-center justify-between border-b border-ink-700 bg-ink-800/70 px-4 py-2.5 font-mono text-xs text-ink-300">
          <span>bash</span>
          <span>~/job-application-tracker</span>
        </div>
        <div aria-hidden="true" className="min-h-[19.5rem] overflow-x-auto p-4 font-mono text-[13px] leading-6 sm:p-5 sm:text-sm sm:leading-7">
          {visible.map((l, i) =>
            l.type === 'cmd' ? (
              <div key={i} className="text-ink-50">
                <span className="mr-2 select-none text-signal">$</span>
                {l.shown}
                {i === last && !done && <span className="caret ml-0.5" />}
              </div>
            ) : (
              <div key={i} className={`whitespace-pre ${tones[l.tone]}`}>
                {l.tone === 'ok' && <span className="mr-2 text-signal">✔</span>}
                {l.text}
              </div>
            ),
          )}
          {done && (
            <div className="text-ink-50">
              <span className="mr-2 select-none text-signal">$</span>
              <span className="caret" />
            </div>
          )}
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-ink-400">
        Illustrative session that follows the shape of my Job Application Tracker stack.
      </figcaption>
    </figure>
  );
}
