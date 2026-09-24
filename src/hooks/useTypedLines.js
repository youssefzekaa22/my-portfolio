import { useEffect, useState } from 'react';

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Plays a terminal session once. `lines` items: { type: 'cmd' | 'out', text, tone? }.
 * 'cmd' lines are typed character by character, 'out' lines appear whole.
 * With reduced motion enabled the finished session is shown immediately.
 */
export function useTypedLines(lines) {
  const [state, setState] = useState(() =>
    reduced() ? { line: lines.length, chars: 0 } : { line: 0, chars: 0 },
  );

  useEffect(() => {
    if (state.line >= lines.length) return;
    const current = lines[state.line];
    let t;
    if (current.type === 'cmd') {
      if (state.chars < current.text.length) {
        t = setTimeout(() => setState((s) => ({ ...s, chars: s.chars + 1 })), 38);
      } else {
        t = setTimeout(() => setState({ line: state.line + 1, chars: 0 }), 380);
      }
    } else {
      t = setTimeout(() => setState({ line: state.line + 1, chars: 0 }), current.delay ?? 220);
    }
    return () => clearTimeout(t);
  }, [state, lines]);

  const done = state.line >= lines.length;
  const visible = lines.slice(0, Math.min(state.line + 1, lines.length)).map((l, i) => {
    if (i < state.line) return { ...l, shown: l.text };
    return { ...l, shown: l.type === 'cmd' ? l.text.slice(0, state.chars) : '' };
  });
  return { visible: visible.filter((l, i) => i < state.line || l.type === 'cmd'), done, active: state.line };
}
