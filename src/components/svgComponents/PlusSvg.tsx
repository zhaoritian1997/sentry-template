import React, { FC } from 'react';

interface Props {
  className?: string;
}

const PlusSvg: FC<Props> = (props) => {
  const { className } = props;
  return (
    <svg className={className} viewBox="0 0 16 16" fill='currentColor' height="12px" width="12px"><path d="M11.28,8.75H4.72a.75.75,0,1,1,0-1.5h6.56a.75.75,0,1,1,0,1.5Z"></path><path d="M8,12a.76.76,0,0,1-.75-.75V4.72a.75.75,0,0,1,1.5,0v6.56A.76.76,0,0,1,8,12Z"></path><path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"></path></svg>
  )
}

export default PlusSvg;