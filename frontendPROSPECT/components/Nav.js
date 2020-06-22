import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => (
  <User>
    {({data: { me } }) => (
      <NavStyles>
        {me && (
          <>
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
            <Signout />
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
    </NavStyles>
   )}
  </User>
);

export default Nav;
