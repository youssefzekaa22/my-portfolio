import { useEffect, useState } from 'react';

/** Returns the id of the section currently under the top of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const els = [...ids, 'top'].map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}
