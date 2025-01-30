import React, { FC } from 'react';

interface Props {
  className?: string;
  currentColor?: string;
}

const StatsSvg: FC<Props> = (props) => {
  const { className, currentColor } = props;
  return (
    <svg className={className} viewBox="0 0 16 16" fill={currentColor} height="14px" width="14px">
      <path d="M13.25,16H2.75A2.75,2.75,0,0,1,0,13.25V2.75A2.75,2.75,0,0,1,2.75,0h10.5A2.75,2.75,0,0,1,16,2.75v10.5A2.75,2.75,0,0,1,13.25,16ZM2.75,1.5A1.25,1.25,0,0,0,1.5,2.75v10.5A1.25,1.25,0,0,0,2.75,14.5h10.5a1.25,1.25,0,0,0,1.25-1.25V2.75A1.25,1.25,0,0,0,13.25,1.5Z"></path><path d="M3.59,15.65a.76.76,0,0,1-.75-.75V9.25a.75.75,0,0,1,1.5,0V14.9A.75.75,0,0,1,3.59,15.65Z"></path><path d="M6.53,15.65a.76.76,0,0,1-.75-.75V9.25a.75.75,0,0,1,1.5,0V14.9A.76.76,0,0,1,6.53,15.65Z"></path><path d="M9.47,15.65a.76.76,0,0,1-.75-.75V7.8a.75.75,0,1,1,1.5,0v7.1A.76.76,0,0,1,9.47,15.65Z"></path><path d="M12.41,15.65a.75.75,0,0,1-.75-.75v-10a.75.75,0,1,1,1.5,0V14.9A.76.76,0,0,1,12.41,15.65Z"></path>
    </svg>
  )
}

export default StatsSvg;