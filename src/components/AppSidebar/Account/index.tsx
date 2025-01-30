import styles from './index.module.scss';

export default function Account() {
  return (
    <div className={styles.account}>
      <div className={styles['account-header']}>
        <button type="button" className={styles['account-header-button']}>
          <div className={styles['account-header-avatar']}>
            <span className={styles['account-header-avatar-icon']} title="logo">
              <svg viewBox="0 0 120 120" className={styles['account-header-avatar-icon-svg']}><rect x="0" y="0" width="120" height="120" rx="15" ry="15" fill="#3fa372"></rect><text x="50%" y="50%" fontSize="65" textAnchor="middle" fill="#FFFFFF" style={{ dominantBaseline: 'central' }}>Pro</text></svg>
            </span>
          </div>
          <div className={styles['account-header-info']}>
            <div className={styles['account-header-info-logo']}>
              Lab
              <svg viewBox="0 0 14 14" strokeOpacity="1" className={styles['account-header-info-logo-icon']}><path d="M3.5 5.5L7 9L10.5 5.5"></path></svg>
            </div>
            <div className={styles['account-header-info-username']}>username</div>
          </div>
        </button>
      </div>
    </div>
  )
}
