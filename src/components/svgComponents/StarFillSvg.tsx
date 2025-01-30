import React from 'react';

interface Props {
  className?: string;
}


export default function StarFillSvg({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="#EBC000" height="14px" width="14px"><path d="M12.47,15.63a.73.73,0,0,1-.35-.09L8,13.38,3.88,15.54a.75.75,0,0,1-.79,0,.76.76,0,0,1-.3-.74l.79-4.59L.24,6.91A.75.75,0,0,1,.66,5.63L5.27,5,7.33.79a.78.78,0,0,1,1.34,0L10.73,5l4.61.67a.75.75,0,0,1,.42,1.28l-3.34,3.25.79,4.59a.76.76,0,0,1-.3.74A.79.79,0,0,1,12.47,15.63Z"></path></svg>
  )
}

