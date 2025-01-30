interface ProgressRingSvgProps {
  progress: number;
}

export default function ProgressRingSvg({ progress }: ProgressRingSvgProps) {
  const strokeDashoffset = 36.55671451449941 - (36.55671451449941 * progress) / 100;
  return (
    <svg role="img" height="38" width="38" style={{
      position: 'relative'
    }}>
      <circle r="16" cx="19" cy="19" color="rgba(255, 255, 255, 0.15)"
        style={{
          fill: 'none',
          stroke: 'rgba(255, 255, 255, 0.15)',
          strokeWidth: '6px',
          transition: 'stroke 100ms'
        }}
      ></circle>
      <circle strokeDashoffset={strokeDashoffset} strokeLinecap="round" r="16" cx="19" cy="19" color="#2BA185"
        style={{
          fill: 'none',
          stroke: 'rgb(43, 161, 133)',
          strokeWidth: '6px',
          strokeDasharray: '100.531, 100.531',
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
          transition: 'stroke-dashoffset 200ms, stroke 100ms'
        }}
      ></circle>
      <foreignObject height="100%" width="100%">
        <div style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          color: 'rgb(128, 112, 143)',
          transition: 'color 100ms',
          fontSize: '14px',
          fontWeight: '600',
          opacity: 1, willChange: 'opacity, transform', transform: 'none' }}>{progress}</div>
      </foreignObject>
    </svg>
  )
}