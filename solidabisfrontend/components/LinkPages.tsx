import Link from 'next/link';
import styles from './Link.module.css';
const LinkPages = () => {
  return (
    <div className={styles.header}>
      <h1>Lounaat</h1>
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

export default LinkPages;
