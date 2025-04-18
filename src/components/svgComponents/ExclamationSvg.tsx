import React, { FC } from 'react';

interface Props {
  className?: string;
  currentColor?: string;
}

const ExclamationSvg: FC<Props> = (props) => {
  const { className, currentColor } = props;
  return (
    <svg className={className} viewBox="0 0 16 16" fill={currentColor} height="14px" width="14px"><path d="M8,11.78A.74.74,0,0,1,7.24,11V7a.75.75,0,0,1,1.5,0v4A.75.75,0,0,1,8,11.78Z"></path><circle cx="8" cy="4.78" r="0.76"></circle><path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"></path></svg>
  )
}

export default ExclamationSvg;



