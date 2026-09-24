/**
 * How the Job Application Tracker services are wired together.
 * Only things stated in the CV are drawn: two services, a custom network, a named volume,
 * a multi-stage build, a non-root user, and a health check that gates startup.
 */
export default function ArchitectureDiagram() {
  return (
    <figure>
      <p className="mb-2 text-xs text-ink-400 sm:hidden">Scroll sideways to see the full diagram.</p>
      <div className="overflow-x-auto rounded-lg border border-ink-600 bg-ink-900">
        <svg
          viewBox="0 0 560 360"
          role="img"
          aria-labelledby="arch-title arch-desc"
          className="block min-w-[500px] w-full"
        >
          <title id="arch-title">Job Application Tracker architecture</title>
          <desc id="arch-desc">
            A Flask web service and a PostgreSQL database service share a custom Docker network. The web
            service starts only after the database health check passes. PostgreSQL stores data in a named
            volume. The web image comes from a multi-stage build and runs as a non-root user.
          </desc>
          <defs>
            <marker id="arr-sig" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M1 1 9 5 1 9z" className="fill-signal" />
            </marker>
            <marker id="arr-amb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M1 1 9 5 1 9z" className="fill-amber" />
            </marker>
            <marker id="arr-mut" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M1 1 9 5 1 9z" className="fill-ink-300" />
            </marker>
          </defs>

          {/* Compose boundary */}
          <rect x="8" y="8" width="544" height="344" rx="12" fill="none" strokeDasharray="5 5" className="stroke-ink-500" />
          <text x="24" y="32" className="fill-ink-300 font-mono" fontSize="12">docker compose</text>

          {/* Custom network */}
          <rect x="24" y="170" width="512" height="28" rx="14" className="fill-ink-800 stroke-ink-500" strokeDasharray="4 4" />
          <text x="520" y="189" textAnchor="end" className="fill-ink-200 font-mono" fontSize="12">custom network</text>

          {/* web service */}
          <rect x="40" y="56" width="200" height="84" rx="8" className="fill-ink-800 stroke-ink-400" />
          <text x="56" y="82" className="fill-ink-50" fontSize="16" fontWeight="600">web</text>
          <text x="56" y="102" className="fill-ink-300" fontSize="13">Flask app</text>
          <text x="56" y="126" className="fill-signal font-mono" fontSize="12">non-root user</text>

          {/* db service */}
          <rect x="40" y="228" width="200" height="88" rx="8" className="fill-ink-800 stroke-ink-400" />
          <text x="56" y="254" className="fill-ink-50" fontSize="16" fontWeight="600">db</text>
          <text x="56" y="274" className="fill-ink-300" fontSize="13">PostgreSQL</text>
          <text x="56" y="298" className="fill-amber font-mono" fontSize="12">health check</text>

          {/* traffic over the network (two-way) */}
          <line x1="90" y1="228" x2="90" y2="140" strokeWidth="2" markerStart="url(#arr-sig)" markerEnd="url(#arr-sig)" className="stroke-signal" />

          {/* health gate */}
          <line x1="200" y1="228" x2="200" y2="140" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#arr-amb)" className="stroke-amber" />

          {/* multi-stage build */}
          <rect x="330" y="56" width="200" height="84" rx="8" fill="none" className="stroke-ink-500" />
          <text x="346" y="82" className="fill-ink-50" fontSize="15" fontWeight="600">Multi-stage build</text>
          <text x="346" y="102" className="fill-ink-300" fontSize="13">build stage</text>
          <text x="346" y="122" className="fill-ink-300" fontSize="13">slim runtime image</text>
          <line x1="330" y1="98" x2="242" y2="98" strokeWidth="1.5" markerEnd="url(#arr-mut)" className="stroke-ink-300" />

          {/* named volume */}
          <g className="stroke-ink-400">
            <path d="M338 246v58c0 9 30 15 70 15s70-6 70-15v-58" className="fill-ink-800" />
            <ellipse cx="408" cy="246" rx="70" ry="15" className="fill-ink-700" />
          </g>
          <text x="408" y="282" textAnchor="middle" className="fill-ink-50" fontSize="14" fontWeight="600">named volume</text>
          <text x="408" y="301" textAnchor="middle" className="fill-ink-300" fontSize="12">PostgreSQL data</text>
          <line x1="242" y1="274" x2="338" y2="274" strokeWidth="1.5" markerEnd="url(#arr-mut)" className="stroke-ink-300" />
        </svg>
      </div>

      <figcaption className="mt-4 grid gap-2 text-sm text-ink-300 sm:grid-cols-3">
        <span className="flex items-start gap-2">
          <span aria-hidden="true" className="mt-2 h-0.5 w-5 shrink-0 bg-signal" />
          Services talk over the custom network
        </span>
        <span className="flex items-start gap-2">
          <span aria-hidden="true" className="pipe-dashed mt-2 h-0.5 w-5 shrink-0 bg-amber" style={{ backgroundImage: 'repeating-linear-gradient(to right, var(--color-amber) 0 4px, transparent 4px 7px)' }} />
          web starts only when db reports healthy
        </span>
        <span className="flex items-start gap-2">
          <span aria-hidden="true" className="mt-2 h-0.5 w-5 shrink-0 bg-ink-300" />
          Data outlives container restarts
        </span>
      </figcaption>
    </figure>
  );
}
