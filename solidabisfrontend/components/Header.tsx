import Link from 'next/link';
import styles from '../styles/Home.module.css';
const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Lunches</h1>
      <p>
        <Link href="/">
          <a>Home </a>
        </Link>
        <Link href="/results">
          <a>Results</a>
        </Link>
      </p>
    </div>
  );
};

export default Header;
