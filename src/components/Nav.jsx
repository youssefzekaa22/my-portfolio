import { useState } from 'react';
import { Icon } from './Icon.jsx';
import { profile } from '../data/profile.js';
import { useActiveSection } from '../hooks/useActiveSection.js';

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'automation', label: 'Automation' },
  { id: 'education', label: 'Education' },
  { id: 'focus', label: 'Learning' },
  { id: 'contact', label: 'Contact' },
];
const ids = navItems.map((n) => n.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  const link = (item, extra = '') => (
    <a
      key={item.id}
      href={`#${item.id}`}
      onClick={() => setOpen(false)}
      aria-current={active === item.id ? 'true' : undefined}
      className={`rounded px-2.5 py-1.5 text-sm transition-colors hover:text-ink-50 ${
        active === item.id ? 'text-signal' : 'text-ink-300'
      } ${extra}`}
    >
      {item.label}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-ink-700/70 bg-ink-950/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-semibold text-ink-50">
          <Icon name="terminal" className="size-5 text-signal" />
          {profile.shortName}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((n) => link(n))}
        </nav>

        <button
          type="button"
          className="rounded p-2 text-ink-100 hover:bg-ink-800 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-ink-700/70 bg-ink-950 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-3 py-2">
            {navItems.map((n) => link(n, 'py-3 text-base'))}
          </div>
        </nav>
      )}
    </header>
  );
}
