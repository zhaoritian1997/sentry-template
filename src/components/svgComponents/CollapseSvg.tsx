import React, { FC } from 'react';
import styles from './CollapseSvg.module.scss';
import clsx from 'clsx';
interface Props {
  className?: string;
  currentColor?: string;
}

const CollapseSvg: FC<Props> = (props) => {
  const { className } = props;
  return (
    <svg className={clsx(styles['collapse-svg'], className)}  viewBox="0 0 14 14" strokeOpacity="1" role="presentation"><path data-sentry-element="unknown" data-sentry-source-file="chevron.tsx" d="M3.5 8.5L7 5L10.5 8.5"></path></svg>
  )
}


export default CollapseSvg;