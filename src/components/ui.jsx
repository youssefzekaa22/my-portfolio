import { Icon } from './Icon.jsx';

const PLACEHOLDER = /YOUR-|your\.email/i;
export const isPlaceholder = (value) => !value || PLACEHOLDER.test(value);

/** Section wrapper: consistent spacing, heading hierarchy and anchor offset. */
export function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="mb-12 max-w-2xl">
          <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-ink-300">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal';
const variants = {
  primary: 'bg-signal text-ink-950 hover:bg-signal-strong',
  secondary: 'border border-ink-600 text-ink-50 hover:border-ink-400 hover:bg-ink-800',
};

/**
 * Link-styled-as-button. If `href` is still a placeholder, it is drawn with a
 * dashed outline and a title so you can tell what has not been replaced yet.
 */
export function LinkButton({ href, variant = 'secondary', icon, children, external = true, arrow = true, className = '' }) {
  const placeholder = isPlaceholder(href);
  const external_ = external && /^https?:/.test(href || '');
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${placeholder ? 'placeholder-link' : ''} ${className}`}
      {...(external_ ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(placeholder ? { title: 'Placeholder link: replace it in src/data' } : {})}
    >
      {icon}
      {children}
      {external_ && arrow && <Icon name="external" className="size-4 opacity-70" />}
    </a>
  );
}

/** Small technology tag with optional brand glyph. */
export function Tag({ children, icon }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-ink-600 bg-ink-800/60 px-2 py-1 font-mono text-xs text-ink-100">
      {icon}
      {children}
    </span>
  );
}
