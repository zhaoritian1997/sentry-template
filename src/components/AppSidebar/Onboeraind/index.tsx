import styles from './index.module.scss';
import { ProgressRingSvg } from '../../svgComponents';
import clsx from 'clsx';

export default function Onboarding({ isCollapse }: { isCollapse: boolean }) {
  return (
    <div className={styles['boarding-container']}>
      <ProgressRingSvg progress={7} />
      <div className={clsx('flex flex-col justify-center', isCollapse && 'hidden')}>
        <div className={styles['boarding-title']}>Onboarding</div>
        <div role="status" className={styles['boarding-status']}>
          7 completed tasks
          <div className={styles['boarding-status-icon']}></div>
        </div>
      </div>
    </div>
  )
}