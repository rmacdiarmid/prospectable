import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';
import User from './User';

const Nav = () => (
    <NavStyles>
        <User>
          {({data: { me } }) => {
            console.log(me);
            if (me) return <p>{me.name}</p>;
            return null;
          }}
        </User>
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
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
    </NavStyles>
);

export default Nav;
