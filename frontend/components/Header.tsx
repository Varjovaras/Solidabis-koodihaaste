import Link from 'next/link';
const Header = () => {
  return (
    <div>
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
