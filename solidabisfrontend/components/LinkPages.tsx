import Link from 'next/link';

const LinkPages = () => {
  return (
    <p>
      <Link href="/">
        <a>Home </a>
      </Link>
      <Link href="/results">
        <a>Results</a>
      </Link>
    </p>
  );
};

export default LinkPages;
