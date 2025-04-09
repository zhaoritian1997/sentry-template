import React, { FC } from 'react';

interface Props {
  className?: string;
  currentColor?: string;

}

const IssuesSvg: FC<Props> = (props) => {
  const { className, currentColor } = props;
  return (
    <svg className={className} viewBox="0 0 16 16" fill={currentColor} height="14px" width="14px">
      <path d="M13.24,16H2.74A2.75,2.75,0,0,1,0,13.26V2.76A2.75,2.75,0,0,1,2.74,0h10.5A2.75,2.75,0,0,1,16,2.76v10.5A2.75,2.75,0,0,1,13.24,16ZM2.74,1.51A1.25,1.25,0,0,0,1.49,2.76v10.5a1.25,1.25,0,0,0,1.25,1.25h10.5a1.25,1.25,0,0,0,1.25-1.25V2.76a1.25,1.25,0,0,0-1.25-1.25Z"></path>
      <rect x="0.74" y="2.61" width="14.5" height="1.5"></rect>
      <rect x="0.74" y="5.26" width="14.5" height="1.5"></rect>
      <path d="M10.79,12.08H5.19a1.25,1.25,0,0,1-1.25-1.25V9.42H.74V7.92h4.7v2.66h5.1V7.92h4.7v1.5H12v1.41A1.25,1.25,0,0,1,10.79,12.08Z"></path>
    </svg>
  );
};

export default IssuesSvg;