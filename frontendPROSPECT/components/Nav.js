import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';

const Nav = () => (
    <NavStyles>
        <Link href="/items">
          <a>Properties</a>
        </Link>
        <Link href="/create">
          <a>Create</a>
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
