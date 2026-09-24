import { profile } from '../data/profile.js';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-5 text-sm text-ink-300 sm:flex-row sm:items-center sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, Vite, and Tailwind CSS.
        </p>
        <a href="#top" className="hover:text-ink-50">
          Back to top
        </a>
      </div>
    </footer>
  );
}
