import styles from './index.module.scss';
import { LogoSvg } from '@/components/svgComponents';
export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-links']}>
        <a href="#"
          className={styles['footer-link']}>Privacy Policy</a>
        <a href="#" className={styles['footer-link']}>Terms of Use</a>
      </div>
      <a href="#" tabIndex={-1} className={styles['footer-logo']}>
        <LogoSvg />
      </a>
      <div className={styles['footer-links']}>
        <a href="#" className={styles['footer-link']}>Service Status</a>
        <a href="#" className={styles['footer-link']}>API</a>
        <a href="#" className={styles['footer-link']}>Docs</a>
        <a href="#" className={styles['footer-link']}>Contribute</a>
      </div>
    </footer>
  )
}
