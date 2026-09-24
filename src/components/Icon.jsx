import { brandIcons } from '../data/brandIcons.js';

// Simple stroke icons (24x24, drawn for this project).
const strokes = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M5 4h3.2l1.6 4-2 1.3a11 11 0 0 0 6.9 6.9l1.3-2 4 1.6V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  external: (
    <>
      <path d="M8 16 17 7" />
      <path d="M9 7h8v8" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  book: (
    <>
      <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5v-15Z" />
      <path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19v-3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.7 2.6 4 5.6 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.6-4-9s1.3-6.4 4-9Z" />
    </>
  ),
  terminal: (
    <>
      <path d="m5 8 4 4-4 4" />
      <path d="M12 17h7" />
    </>
  ),
  cloud: <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a4.25 4.25 0 0 1 .5 8.5H7Z" />,
  arrowDown: <path d="M12 5v14m-6-6 6 6 6-6" />,
  shield: <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.500 7-10V6l-7-3Z" />,
  code: <path d="m9 7-5 5 5 5m6-10 5 5-5 5" />,
  arrowRight: <path d="M5 12h14m-6-6 6 6-6 6" />,
};

export function Icon({ name, className = 'size-5', ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {strokes[name]}
    </svg>
  );
}

// Brand glyphs. AWS and LinkedIn are not in the icon set, so they are drawn here.
export function BrandIcon({ name, className = 'size-5', ...rest }) {
  if (name === 'aws') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" {...rest}>
        <path
          d="M7 16.5a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 7.5a4.25 4.25 0 0 1 .5 8.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M6 19.5c3.6 1.6 8.4 1.6 12 0" stroke="#f5b942" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...rest}>
        <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="8" cy="8.2" r="1.3" fill="currentColor" />
        <path d="M6.9 10.6h2.2V17H6.9zM10.8 10.6h2.1v.9c.4-.7 1.2-1.1 2.2-1.1 1.9 0 2.6 1.2 2.6 3V17h-2.2v-3.2c0-.8-.3-1.4-1.1-1.4s-1.4.6-1.4 1.5V17h-2.2z" fill="currentColor" />
      </svg>
    );
  }
  const icon = brandIcons[name];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor" {...rest}>
      <path d={icon.path} />
    </svg>
  );
}
