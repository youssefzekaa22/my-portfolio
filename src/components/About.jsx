import { Section } from './ui.jsx';
import { about, profile } from '../data/profile.js';

function Portrait() {
  if (profile.profileImage) {
    return (
      <img
        src={profile.profileImage}
        alt={profile.profileImageAlt}
        width="280"
        height="280"
        loading="lazy"
        className="aspect-square w-full max-w-[280px] rounded-lg border border-ink-600 object-cover"
      />
    );
  }
  // Monogram shown until you add a photo (see profile.profileImage).
  return (
    <div
      role="img"
      aria-label="Monogram YZ. A profile photo can replace this."
      className="grid-bg relative grid aspect-square w-full max-w-[280px] place-items-center rounded-lg border border-ink-600 bg-ink-900"
      style={{ maskImage: 'none' }}
    >
      <span className="font-mono text-6xl font-semibold tracking-tight text-ink-50">
        YZ<span className="caret ml-1 align-baseline" />
      </span>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed text-ink-200">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <aside className="space-y-8">
          <Portrait />
          <div>
            <h3 className="text-base font-semibold text-ink-50">How I work</h3>
            <ul className="mt-3 space-y-3 border-l border-ink-600 pl-4 text-[15px] leading-relaxed text-ink-200">
              {about.strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
