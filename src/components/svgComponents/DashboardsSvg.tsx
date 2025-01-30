import React, { FC } from 'react';

interface Props {
  className?: string;
  currentColor?: string;
}

const DashboardsSvg: FC<Props> = (props) => {
  const { className, currentColor } = props;
  return (
    <svg className={className} viewBox="0 0 16 16" fill={currentColor} height="14px" width="14px">
      <path d="M5.66,16H1.5A1.5,1.5,0,0,1,0,14.5v-13A1.5,1.5,0,0,1,1.5,0H5.66a1.5,1.5,0,0,1,1.5,1.5v13A1.5,1.5,0,0,1,5.66,16ZM1.5,1.52v13H5.66v-13Z"></path>
      <path d="M14.5,16H10.34a1.5,1.5,0,0,1-1.5-1.5V11.79a1.5,1.5,0,0,1,1.5-1.5H14.5a1.5,1.5,0,0,1,1.5,1.5V14.5A1.5,1.5,0,0,1,14.5,16Zm0-4.21H10.34V14.5H14.5Z"></path>
      <path d="M14.5,8.62H10.34a1.5,1.5,0,0,1-1.5-1.5V1.5A1.5,1.5,0,0,1,10.34,0H14.5A1.5,1.5,0,0,1,16,1.5V7.12A1.5,1.5,0,0,1,14.5,8.62ZM10.34,1.5V7.12H14.5V1.5Z"></path>
    </svg>
  )
};

export default DashboardsSvg;




