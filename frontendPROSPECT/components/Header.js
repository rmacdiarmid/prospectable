import Nav from './Nav';

const Header = () => (
    <div>
        <div className="bar">
            <a href="">Prospectable!</a>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>ToCall</div>
    </div>
);

export default Header;
