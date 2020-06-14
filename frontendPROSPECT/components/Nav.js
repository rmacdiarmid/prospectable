import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/scrape">
          <a>Scrape</a>
        </Link>
        <Link href="/scrub">
          <a>Scrub</a>
        </Link>
        <Link href="/sort">
          <a>Sort</a>
        </Link>
        <Link href="/Call">
          <a>Call</a>
        </Link>
        <Link href="/share">
          <a>Share</a>
        </Link>
    </NavStyles>
);

export default Nav;
