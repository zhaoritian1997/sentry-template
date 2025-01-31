import React from 'react';
import styles from './index.module.scss';

interface LoadingProps {
  loading?: boolean;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ loading = false, children }) => {
  if (!loading) {
    return <>{children}</>;
  }

  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loadingContent}>
        <div className={styles.spinner}></div>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Loading;
