import { MdSell } from 'react-icons/md';
import styles from './styles.module.css';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <h1>User Dashboard Page</h1>
      <div className={styles.dashboardContainer}>
        <Link href="/quotes">
          <div className={styles.tileCard}>
            <h3>Quotes</h3>
            <MdSell className={styles.tileCardIcon} />
          </div>
        </Link>
      </div>
    </>
  );
}
