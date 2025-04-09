import React, { FC } from 'react';

interface Props {
  className?: string;
  currentColor?: string;
}

const ExploreSvg: FC<Props> = (props) => {
  const { className, currentColor } = props;
  return (
    <svg className={className} viewBox="0 0 16 16" fill={currentColor} height="14px" width="14px">
      <path d="M6,12A6,6,0,1,1,12,6,6,6,0,0,1,6,12ZM6,1.54A4.46,4.46,0,1,0,10.45,6,4.46,4.46,0,0,0,6,1.54Z"></path>
      <path d="M15.2,16a.74.74,0,0,1-.53-.22L9.14,10.2A.75.75,0,0,1,10.2,9.14l5.53,5.53a.75.75,0,0,1,0,1.06A.74.74,0,0,1,15.2,16Z"></path>
    </svg>
  )
};

export default ExploreSvg;
