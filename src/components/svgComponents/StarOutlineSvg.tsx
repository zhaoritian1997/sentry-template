import React from 'react';

interface Props {
  className?: string;
}

export default function StarOutlineSvg({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="#E0DCE5" height="14px" width="14px"><path d="M12.47,15.63a.73.73,0,0,1-.35-.09L8,13.38,3.88,15.54a.75.75,0,0,1-.79,0,.76.76,0,0,1-.3-.74l.79-4.59L.24,6.91A.75.75,0,0,1,.66,5.63L5.27,5,7.33.79a.78.78,0,0,1,1.34,0L10.73,5l4.61.67a.75.75,0,0,1,.42,1.28l-3.34,3.25.79,4.59a.76.76,0,0,1-.3.74A.79.79,0,0,1,12.47,15.63ZM8,11.78a.85.85,0,0,1,.35.08l3.12,1.65L10.88,10a.78.78,0,0,1,.21-.67L13.62,6.9l-3.49-.51A.74.74,0,0,1,9.56,6L8,2.82,6.44,6a.74.74,0,0,1-.57.41L2.38,6.9,4.91,9.36a.78.78,0,0,1,.21.67l-.59,3.48,3.12-1.65A.85.85,0,0,1,8,11.78Z"></path></svg>
  )
}