interface TechnicalDiagramProps {
  className?: string
  title?: string
}

/**
 * Abstract, editorial SVG diagram — evidence nodes converging on a single
 * finding. Intentionally non-literal (no gears / hard-hats).
 */
export default function TechnicalDiagram({
  className = '',
  title = 'Evidence converging on a finding',
}: TechnicalDiagramProps) {
  return (
    <svg
      role="img"
      aria-label={title}
      viewBox="0 0 400 240"
      className={`h-auto w-full text-brand-brown ${className}`}
      fill="none"
    >
      <title>{title}</title>
      {/* Evidence nodes */}
      {[40, 100, 160, 200].map((y, i) => (
        <g key={y}>
          <circle cx="40" cy={y} r="5" fill="currentColor" />
          <line
            x1="45"
            y1={y}
            x2="200"
            y2="120"
            stroke="currentColor"
            strokeWidth="1"
            opacity={0.35 + i * 0.1}
          />
        </g>
      ))}
      {/* Finding node */}
      <circle cx="200" cy="120" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="200" cy="120" r="3" fill="currentColor" />
      {/* Outcome line */}
      <line x1="210" y1="120" x2="380" y2="120" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="380,120 368,114 368,126" fill="currentColor" />
      <text
        x="40"
        y="228"
        fontSize="10"
        fill="#6E6A67"
        fontFamily="var(--font-body)"
      >
        Evidence
      </text>
      <text
        x="170"
        y="150"
        fontSize="10"
        fill="#6E6A67"
        fontFamily="var(--font-body)"
      >
        Finding
      </text>
      <text
        x="330"
        y="110"
        fontSize="10"
        fill="#6E6A67"
        fontFamily="var(--font-body)"
      >
        Outcome
      </text>
    </svg>
  )
}
