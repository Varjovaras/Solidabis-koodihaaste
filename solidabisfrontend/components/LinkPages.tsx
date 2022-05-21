import Link from 'next/link';

const LinkPages = () => {
  return (
    <div>
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
