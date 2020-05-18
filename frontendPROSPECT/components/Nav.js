import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/scrape">
          <a>Scrape</a>
        </Link>
    </div>
);

export default Nav;
